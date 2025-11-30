# OpenSBBL CLI 🚀

> **Open Standard Blueprint-Based Learning (SBBL) Command Line Interface**
>
> *Build high-quality, AI-ready software projects with ease.*

**OpenSBBL CLI** is the open-source tool designed to help developers create, validate, and manage software projects following the **SBBL Methodology**. It bridges the gap between human intent and AI execution by generating structured "Blueprints" that AI agents (like ChatGPT, Claude, Gemini) can understand perfectly.

> 🇻🇳 **Tài liệu tiếng Việt:** [Bắt đầu nhanh](../docs/vi/guides/BAT_DAU_NHANH.md) | [Tất cả hướng dẫn](../docs/vi/guides/)

---

## ✨ Features

- **🚀 Interactive Initialization**: A wizard-style interface to scaffold your project's vision, tech stack, and architecture.
- **📄 Blueprint Generation**: Automatically creates a comprehensive `BLUEPRINT.md` file.
- **🧠 Memory System**: Sets up the `memory/` directory structure (Past, Present, Future) for context management.
- **🛡️ Validation**: Checks your `BLUEPRINT.md` against strict SBBL standards to ensure quality.
- **🤖 AI Bridge**: Generates optimized **System Prompts** from your blueprint, ready to paste into any LLM.

---

## 📦 Installation & Usage

Since this is the source code repository, you can run the CLI directly using `npm`.

### Prerequisites
- Node.js (v16+)
- npm

### Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the CLI**:
   ```bash
   # Initialize a new project
   npm start init

   # Validate a blueprint
   npm start validate BLUEPRINT.md

   # Generate AI prompt
   npm start ai-prompt
   ```

---

## 🛠️ Commands

### 1. Initialize (`init`)

```bash
npm start init
# or with a template
npm start init --template saas-mvp
```

**What it does:**
- Interactive wizard for project setup
- Generates `BLUEPRINT.md`
- Creates `memory/` structure
- Creates `.sbblrc` configuration

### 2. Validate (`validate`)

```bash
npm start validate [path/to/BLUEPRINT.md]
```

**Checks for:**
- Required sections (Vision, Tech Stack, etc.)
- Content quality
- Valid Markdown syntax

### 3. AI Prompt (`ai-prompt`)

```bash
npm start ai-prompt
```

**What it does:**
- Reads your `BLUEPRINT.md`
- Generates optimized AI prompt
- **Copies to clipboard automatically**

**How to use:**
1. Run the command
2. Open ChatGPT/Claude/Gemini
3. Paste (Ctrl+V)
4. Start building with AI!

---

## 📂 Project Structure

```
my-awesome-app/
├── BLUEPRINT.md       # The Source of Truth
├── .sbblrc            # Project Configuration
├── memory/            # Context Management
│   ├── 0_past/        # Completed tasks, history
│   ├── 1_present/     # Active tasks, current focus
│   └── 2_future/      # Roadmap, ideas
└── src/               # Your source code
```

---

## 📚 Documentation

### English
- [SBBL Methodology](../docs/docs_en/methodology.md)
- [CLI Specification](../docs/docs_en/cli-specification.md)
- [Best Practices](../docs/docs_en/best-practices.md)

### Tiếng Việt (Vietnamese)
- 📖 [Hướng dẫn đầy đủ](../docs/vi/guides/HUONG_DAN_SU_DUNG.md)
- ⚡ [Bắt đầu nhanh](../docs/vi/guides/BAT_DAU_NHANH.md)
- 🔧 [Hướng dẫn thực tế](../docs/vi/guides/HUONG_DAN_THUC_TE.md)
- 📝 [Cheatsheet](../docs/vi/guides/CHEATSHEET.md)
- 🎬 [Demo Script](../docs/vi/guides/DEMO_SCRIPT.md)
- 📚 [Tất cả hướng dẫn](../docs/vi/guides/)

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

See [CONTRIBUTING.md](../CONTRIBUTING.md) for more details.

---

## 📞 Support

- **Documentation**: [docs/](../docs/)
- **Issues**: [GitHub Issues](https://github.com/DiogenesAI/OpenSBBL/issues)

---

*Built with ❤️ by the OpenSBBL Community.*
