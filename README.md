# OpenSBBL - Community Edition

<div align="center">

# 🚀 OpenSBBL

**Spark → Blueprint → Build → Launch**

Open-source methodology and tools for AI-powered software development

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Community](https://img.shields.io/badge/Community-Edition-green.svg)](https://github.com/DiogenesAI/OpenSBBL)

---

**🌍 Choose Your Language / Chọn Ngôn Ngữ:**

[![English](https://img.shields.io/badge/English-Documentation-blue?style=for-the-badge)](./docs/docs_en/INDEX.md) 
[![Tiếng Việt](https://img.shields.io/badge/Tiếng_Việt-Tài_Liệu-red?style=for-the-badge)](./docs/docs_vi/INDEX.md)

---

[Documentation](./docs/docs_en/INDEX.md) • [CLI Tool](./docs/docs_en/cli-specification.md) • [Templates](./docs/docs_en/templates.md) • [Contributing](#-contributing)

</div>

---

## 🎯 What is OpenSBBL?

**OpenSBBL is the open-source, community-driven version of SBBL** - a methodology and toolset that standardizes collaboration between humans and AI for building software products.

### 🌟 Community Edition Features

This is the **free and open-source** version of SBBL, maintained by the community for the community:

- ✅ **Full SBBL Methodology** - Complete access to the 4-phase approach
- ✅ **SBBL CLI Tool** - Interactive command-line tool for generating blueprints
- ✅ **Template Library** - Pre-built templates for common use cases
- ✅ **Complete Documentation** - In English and Vietnamese
- ✅ **Example Projects** - Real-world examples to learn from
- ✅ **Community Support** - Active community on GitHub Discussions

### The Evolution

```
Agile (2001)              →    SBBL Phase 1 (2025)    →    SBBL Phase 2 (Future)
Human ↔ Human                  Human ↔ AI                   AI ↔ AI
Sprint-based development       Blueprint-driven dev         Autonomous development
```

### 4-Phase Approach

1. **Spark** (💡): Define your idea clearly
2. **Blueprint** (📐): Create detailed technical documentation
3. **Build** (🔨): Use AI to implement features
4. **Launch** (🚀): Deploy and optimize

**Vision**: Just as Agile revolutionized human collaboration, SBBL standardizes the "protocol" for Human-AI and AI-AI collaboration in software development.

### The Problem We Solve

- **Developers**: Spend hours explaining context to AI, get inconsistent results
- **Founders**: Struggle to translate business ideas into technical requirements
- **Teams**: Lack alignment on architecture and implementation approach

### The Solution

OpenSBBL provides:
- ✅ **Standardized Blueprint format** that AI understands perfectly
- ✅ **Interactive CLI tool** to generate blueprints in 5 minutes
- ✅ **Template library** for common use cases (SaaS, AI apps, e-commerce)
- ✅ **Best practices** for working with AI coding assistants
- ✅ **Open-source and free forever**

---

## 🛠️ SBBL CLI Tool

Interactive command-line tool for generating blueprints.

```bash
# Clone the repository
git clone https://github.com/DiogenesAI/OpenSBBL.git
cd OpenSBBL/sbbl-cli

# Install dependencies
npm install

# Create new blueprint
npm start init

# Use template
npm start init --template saas-mvp

# Validate existing blueprint
npm start validate BLUEPRINT.md

# Generate AI prompt
npm start ai-prompt
```

**Features**:
- 🎨 Beautiful interactive prompts
- 📋 Pre-built templates
- 🤖 Auto-generate AI prompts
- 📋 Copy to clipboard
- ✅ Input validation

[→ CLI Documentation](./docs/docs_en/cli-specification.md)

---

## 📚 Documentation

### English Documentation 🇬🇧

| Document | Description |
|----------|-------------|
| [VISION](./docs/docs_en/VISION.md) | Long-term vision: Human-AI → AI-AI collaboration |
| [Methodology](./docs/docs_en/methodology.md) | Core SBBL concepts and 4 phases |
| [CLI Specification](./docs/docs_en/cli-specification.md) | CLI tool technical details |
| [Templates](./docs/docs_en/templates.md) | Pre-built blueprint templates |
| [Best Practices](./docs/docs_en/best-practices.md) | Tips for effective blueprints |
| [Evaluation Criteria](./docs/docs_en/evaluation-criteria.md) | Blueprint & code scoring system |

**[→ Browse All English Docs](./docs/docs_en/INDEX.md)**

---

### Tài Liệu Tiếng Việt 🇻🇳

| Tài Liệu | Mô Tả |
|----------|-------|
| [VISION](./docs/docs_vi/VISION.md) | Tầm nhìn dài hạn: Human-AI → AI-AI collaboration |
| [Methodology](./docs/docs_vi/methodology.md) | Khái niệm cốt lõi SBBL và 4 giai đoạn |
| [CLI Specification](./docs/docs_vi/cli-specification.md) | Chi tiết kỹ thuật CLI tool |
| [Templates](./docs/docs_vi/templates.md) | Các template blueprint có sẵn |
| [Best Practices](./docs/docs_vi/best-practices.md) | Tips để tạo blueprint hiệu quả |
| [Evaluation Criteria](./docs/docs_vi/evaluation-criteria.md) | Hệ thống chấm điểm Blueprint & Code |

**[→ Xem Tất Cả Tài Liệu Tiếng Việt](./docs/docs_vi/INDEX.md)**

**[→ Hướng Dẫn Tiếng Việt](./docs/vi/guides/README.md)** - Hướng dẫn chi tiết bằng tiếng Việt

---

## 🚀 Quick Start

### For Users (Creating Blueprints)

1. **Clone Repository**:
   ```bash
   git clone https://github.com/DiogenesAI/OpenSBBL.git
   cd OpenSBBL/sbbl-cli
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Generate Blueprint**:
   ```bash
   npm start init
   ```

4. **Follow Interactive Prompts**:
   - Describe your idea
   - Choose tech stack
   - Define architecture
   - Set roadmap

5. **Get Your Blueprint**:
   - `BLUEPRINT.md` created
   - AI prompt generated
   - Copied to clipboard

6. **Build with AI**:
   - Paste blueprint into ChatGPT/Claude/Gemini
   - Ask AI to implement features
   - Iterate and refine

### For Developers (Contributing)

1. **Fork & Clone**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/OpenSBBL.git
   cd OpenSBBL
   ```

2. **Setup Development Environment**:
   ```bash
   cd sbbl-cli
   npm install
   npm run dev
   ```

3. **Make Changes & Test**:
   ```bash
   npm test
   npm start init  # Test your changes
   ```

4. **Submit Pull Request**:
   - Create a feature branch
   - Commit your changes
   - Push to your fork
   - Open a Pull Request

---

## 📖 Example Blueprint

Here's what a generated blueprint looks like:

```markdown
# TaskFlow - Real-time Task Management

## Vision
TaskFlow is a real-time task management platform designed for remote-first 
teams (10-50 people) who struggle with timezone coordination...

## Tech Stack
- Frontend: Next.js 14 (App Router)
- Backend: Supabase (PostgreSQL + Realtime)
- Deployment: Vercel
- AI: OpenAI GPT-4

## Database Schema
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  ...
);
```

## Implementation Roadmap
Week 1: Auth + Database
Week 2: Core Features
Week 3: Polish + Deploy

## Business Rules
- Free users: 1 team, 10 tasks
- Pro users: Unlimited teams
...
```

[→ See Full Example](./examples/todo-app/BLUEPRINT.md)

---

## 🎯 Use Cases

### 1. Solo Developers / Indie Hackers
Build MVPs in weeks instead of months using AI assistance.

### 2. Startups
Align team on technical approach before writing code.

### 3. Agencies
Standardize client project documentation and speed up delivery.

### 4. AI Enthusiasts
Learn how to work effectively with AI coding assistants.

---

## 🤝 Contributing

**We welcome contributions from the community!** 

OpenSBBL is built by developers, for developers. Whether you're fixing bugs, adding features, improving documentation, or creating templates - your contribution matters!

### Ways to Contribute

- 🐛 **Report bugs** - Found an issue? [Open an issue](https://github.com/DiogenesAI/OpenSBBL/issues)
- 💡 **Suggest features** - Have an idea? [Start a discussion](https://github.com/DiogenesAI/OpenSBBL/discussions)
- 📝 **Improve documentation** - Help make our docs better
- 🎨 **Create templates** - Share your blueprint templates
- 💻 **Submit pull requests** - Fix bugs or add features
- 🌍 **Translate** - Help translate docs to other languages
- ⭐ **Star the repo** - Show your support!

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

Please read our [Contributing Guidelines](./CONTRIBUTING.md) for more details.

---

## 📄 License

OpenSBBL is released under the **MIT License** - see [LICENSE](./LICENSE) for details.

This means you can:
- ✅ Use it commercially
- ✅ Modify it
- ✅ Distribute it
- ✅ Use it privately

---

## 🔗 Links

- **GitHub**: [OpenSBBL Repository](https://github.com/DiogenesAI/OpenSBBL)
- **Documentation**: 
  - [English](./docs/docs_en/INDEX.md)
  - [Tiếng Việt](./docs/docs_vi/INDEX.md)
  - [Vietnamese Guides](./docs/vi/guides/README.md)
- **Discussions**: [GitHub Discussions](https://github.com/DiogenesAI/OpenSBBL/discussions)
- **Issues**: [Report Issues](https://github.com/DiogenesAI/OpenSBBL/issues)

---

## 💬 Community & Support

- 💬 **GitHub Discussions**: [Join the conversation](https://github.com/DiogenesAI/OpenSBBL/discussions)
- 🐛 **Issues**: [Report bugs or request features](https://github.com/DiogenesAI/OpenSBBL/issues)
- 📖 **Documentation**: 
  - [English Documentation](./docs/docs_en/INDEX.md)
  - [Tài Liệu Tiếng Việt](./docs/docs_vi/INDEX.md)

---

## 🌟 Why OpenSBBL?

### Free & Open Source
- No hidden costs
- No vendor lock-in
- Community-driven development

### Battle-Tested Methodology
- Based on proven software development principles
- Optimized for AI collaboration
- Continuously improved by the community

### Active Community
- Regular updates
- Responsive maintainers
- Growing ecosystem of templates and tools

---

## 🙏 Acknowledgments

OpenSBBL is inspired by:
- **Agile Methodology** - For revolutionizing human collaboration
- **Open Source Movement** - For democratizing software development
- **AI Revolution** - For opening new possibilities in software creation

Special thanks to all [contributors](https://github.com/DiogenesAI/OpenSBBL/graphs/contributors) who help make OpenSBBL better!

---

<div align="center">

**Built with ❤️ by the OpenSBBL Community**

[⭐ Star this repo](https://github.com/DiogenesAI/OpenSBBL) if you find it useful!

**🌍 Language / Ngôn ngữ:**  
[English Docs](./docs/docs_en/INDEX.md) | [Tài Liệu Tiếng Việt](./docs/docs_vi/INDEX.md) | [Hướng Dẫn Tiếng Việt](./docs/vi/guides/README.md)

---

**Join the community and help shape the future of AI-powered development!**

</div>
