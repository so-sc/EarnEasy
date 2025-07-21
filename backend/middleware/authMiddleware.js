import jwt from 'jsonwebtoken';
import UserModel from '../models/userSchema.js';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'earneasy-default-secret';

const blacklistedTokens = new Set();

// Generate Access Token (7 days)
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRE || '7d'
  });
};

// Auth middleware to authenticate user based on both Cookie and JWT token
export const authenticateToken = async (req, res, next) => {
  try {
    let token = req.cookies?.authToken;
    
    if (!token) {
      const authHeader = req.headers.authorization;
      token = authHeader && authHeader.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Check if token is blacklisted
    if (blacklistedTokens.has(token)) {
      return res.status(401).json({
        success: false,
        message: 'Token has been revoked'
      });
    }
    
    const user = await UserModel.findById(decoded.userId).select('-password -refreshTokens');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if user account is active (if isActive field exists)
    if (user.isActive !== undefined && !user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated'
      });
    }

    req.user = user;
    req.userId = user._id;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired',
        code: 'TOKEN_EXPIRED'
      });
    }
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Authentication failed'
    });
  }
};

// Optional auth middleware (for routes that work with or without auth)
export const optionalAuth = async (req, res, next) => {
  try {
    let token = req.cookies?.authToken;
    
    if (!token) {
      const authHeader = req.headers.authorization;
      token = authHeader && authHeader.split(' ')[1];
    }
    
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await UserModel.findById(decoded.userId).select('-password -refreshTokens');
      
      if (user && (user.isActive === undefined || user.isActive)) {
        req.user = user;
        req.userId = user._id;
      }
    }
    
    next();
  } catch (error) {
    // Continue without authentication if token is invalid
    next();
  }
};

// Role-based authorization
export const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      });
    }

    next();
  };
};

// Blacklist token function
export const blacklistToken = (token) => {
  blacklistedTokens.add(token);
  
  // Auto-remove expired tokens after 7 days (cleanup)
  setTimeout(() => {
    blacklistedTokens.delete(token);
  }, 7 * 24 * 60 * 60 * 1000);
};

// Session Management - (Not required as of now, cz we are using JWT to authenticate)
// export const sessionManager = {
//   activeSessions: new Map(),

//   createSession: (userId, deviceInfo) => {
//     const sessionId = `${userId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
//     sessionManager.activeSessions.set(sessionId, {
//       userId,
//       deviceInfo,
//       createdAt: new Date(),
//       lastActive: new Date()
//     });
//     return sessionId;
//   },

//   updateActivity: (sessionId) => {
//     const session = sessionManager.activeSessions.get(sessionId);
//     if (session) {
//       session.lastActive = new Date();
//     }
//   },

//   removeSession: (sessionId) => {
//     sessionManager.activeSessions.delete(sessionId);
//   },

//   getUserSessions: (userId) => {
//     const sessions = [];
//     for (const [sessionId, session] of sessionManager.activeSessions) {
//       if (session.userId.toString() === userId.toString()) {
//         sessions.push({ sessionId, ...session });
//       }
//     }
//     return sessions;
//   },

//   clearUserSessions: (userId) => {
//     for (const [sessionId, session] of sessionManager.activeSessions) {
//       if (session.userId.toString() === userId.toString()) {
//         sessionManager.activeSessions.delete(sessionId);
//       }
//     }
//   }
// };