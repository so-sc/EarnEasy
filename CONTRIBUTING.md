# 🤝 Contributing to EarnEasy 🚀💼

Thank you for considering contributing to **EarnEasy**! We welcome all kinds of contributions—from fixing bugs to writing documentation, designing UI, or improving performance.

---

## 📚 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Branching Strategy](#branching-strategy)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Code Standards](#code-standards)
- [Pull Request Process](#pull-request-process)
- [Development Checklist](#development-checklist)
- [Need Help?](#need-help)

---

## 📜 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to foster an inclusive and respectful environment.

---

## ⚙️ Getting Started

### 1. Fork the Repository

```bash
git clone https://github.com/your-username/EarnEasy.git
cd EarnEasy
2. Set Up Your Local Environment
Install dependencies and configure the environment as outlined in the README.md.

🚀 How to Contribute
Here are some ideas to get started:

🐞 Report bugs via GitHub Issues

🧪 Add unit/integration tests

🎨 Improve UI/UX in Material-UI components

📖 Write or improve documentation

✨ Suggest new features or enhancements

🌱 Branching Strategy
To maintain a clean and structured development workflow, please follow our branching naming conventions:

Branch	Purpose
main	Production-ready code
dev	Development integration branch
feature/*	New features or major enhancements
bugfix/*	Fixing bugs
hotfix/*	Critical hotfixes for production
docs/*	Documentation-only updates

Example: feature/add-cart, bugfix/fix-login, docs/update-readme

✅ Commit Message Guidelines
We follow the Conventional Commits format to make commit history readable and structured.

Format:
arduino
Copy
Edit
<type>(scope): short description
Examples:
pgsql
Copy
Edit
feat(auth): add token blacklisting on logout
fix(cart): resolve cart not updating on item delete
docs(readme): update quick start guide
Common Types:
feat: A new feature

fix: A bug fix

docs: Documentation only changes

style: Code formatting (e.g., spacing, semicolons)

refactor: Code restructuring without behavior change

test: Adding or updating tests

chore: Non-functional tasks (e.g., CI, tooling)

🧪 Code Standards
Please maintain consistency with the existing codebase.

Tools:
Frontend: ESLint, Prettier, React 18, Vite, Material-UI

Backend: ESLint, Prettier, Express, Mongoose

Commands:
bash
Copy
Edit
npm run lint        # Check for linting issues
npm run format      # Format code with Prettier
Follow naming conventions and modular architecture as shown in the project structure.

🔁 Pull Request Process
Create a Feature Branch

bash
Copy
Edit
git checkout -b feature/your-feature-name
Make Your Changes

Keep commits atomic and descriptive

Run linter and formatter

Add/update tests if applicable

Push and Open a PR

bash
Copy
Edit
git push origin feature/your-feature-name
Open a Pull Request on GitHub:

Provide a clear title and description

Link related issues (e.g., Fixes #123)

Review Process

Wait for at least one code review

All CI checks must pass before merging

🧾 Development Checklist
Before opening a PR:

 Code follows style guidelines

 New features or changes are tested

 No sensitive data or secrets in code

 Docs updated (if needed)

 Feature works on both desktop and mobile (if applicable)

💬 Need Help?
If you’re stuck, feel free to:

Open a Discussion

Create an Issue

Mention a maintainer in your PR

Made with ❤️ by the EarnEasy Team