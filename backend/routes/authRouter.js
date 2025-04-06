import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({
        message: 'Router Testing!'
    })
})

router.post('/google', (req, res) => {

});

export default router;

