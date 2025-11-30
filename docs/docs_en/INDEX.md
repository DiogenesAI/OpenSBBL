## 📖 Core Documentation

### Methodology & Concepts

| Document | Mô tả | Đối tượng |
|----------|-------|-----------|
| [VISION](./VISION.md) | 🌟 **SBBL Vision: Agile for AI Era** - Human-AI → AI-AI collaboration | Everyone (Start here!) |
| [Methodology](./methodology.md) | Giải thích chi tiết SBBL methodology | Tất cả users |
| [Best Practices](./best-practices.md) | Tips & tricks để tối ưu workflow | Developers, AI Orchestrators |
| [Evaluation Criteria](./evaluation-criteria.md) | Cách đánh giá Blueprint và Code | Product Managers, Tech Leads |

---

## 🛠️ Tools Documentation

### CLI Tool

| Document | Mô tả | Khi nào đọc |
|----------|-------|-------------|
| [CLI Specification](./cli-specification.md) | Technical spec cho CLI tool | Khi muốn hiểu hoặc contribute vào CLI |

**Quick Links**:
- Installation: `npm install -g sbbl-cli`
- Usage: `sbbl init`
- [CLI Source Code](../sbbl-cli/) *(coming soon)*

---

### Web Application

| Document | Mô tả | Khi nào đọc |
|----------|-------|-------------|
| [Web App Specification](./web-app-specification.md) | Full-stack architecture & features | Khi muốn hiểu hoặc contribute vào Web App |

**Quick Links**:
- [Live Demo](https://sbbl.dev) *(coming soon)*
- [Web App Source Code](../sbbl-app/) *(coming soon)*

---

## 📋 Templates & Examples

| Document | Mô tả | Use Case |
|----------|-------|----------|
| [Templates](./templates.md) | Pre-built blueprints cho common use cases | Khi bắt đầu project mới |

**Available Templates**:
1. SaaS MVP (Next.js + Supabase)
2. AI-Powered App (Next.js + OpenAI)
3. E-Commerce (Next.js + Stripe)
4. Mobile App (React Native + Supabase)
5. Dashboard/Analytics (Next.js + Charts)
6. CMS (Next.js + Rich Text Editor)

---

## 🚀 Development

### For Contributors

| Document | Mô tả | Khi nào đọc |
|----------|-------|-------------|
| [Implementation Roadmap](./implementation-roadmap.md) | 8-week development plan | Khi muốn contribute hoặc fork project |
| [Contributing Guidelines](../CONTRIBUTING.md) | How to contribute | Trước khi submit PR |

---

## 📊 Use Case Guides

### By Role

#### 🧑‍💻 Solo Developer / Indie Hacker
**Goal**: Build MVP nhanh chóng với AI

**Recommended Reading**:
1. [Methodology](./methodology.md) - Hiểu workflow
2. [Templates](./templates.md) - Chọn template phù hợp
3. [Best Practices](./best-practices.md) - Optimize cho speed

**Workflow**:
```bash
sbbl init --template saas-mvp
# Follow prompts
# Copy blueprint to ChatGPT/Claude
# Start building!
```

---

#### 👔 Product Manager / Founder
**Goal**: Document ý tưởng và align team

**Recommended Reading**:
1. [Methodology](./methodology.md) - Understand phases
2. [Evaluation Criteria](./evaluation-criteria.md) - Đánh giá blueprint quality
3. [Web App Specification](./web-app-specification.md) - Sử dụng visual builder

**Workflow**:
1. Use Web App để tạo Blueprint
2. Share với team để review
3. Export và gửi cho developers
4. Track progress với Evaluation Dashboard

---

#### 🏗️ Tech Lead / Architect
**Goal**: Standardize technical documentation

**Recommended Reading**:
1. [Best Practices](./best-practices.md) - Enforce standards
2. [Evaluation Criteria](./evaluation-criteria.md) - Setup quality gates
3. [Templates](./templates.md) - Create custom templates

**Workflow**:
1. Create company-specific templates
2. Setup automated evaluation in CI/CD
3. Review blueprints before sprint planning
4. Track metrics over time

---

#### 🤖 AI Orchestrator
**Goal**: Maximize AI coding accuracy

**Recommended Reading**:
1. [Best Practices](./best-practices.md) - Craft better prompts
2. [Methodology](./methodology.md) - Understand context requirements
3. [Evaluation Criteria](./evaluation-criteria.md) - Measure AI effectiveness

**Workflow**:
1. Create detailed Blueprint (score >85)
2. Generate AI prompt with `sbbl ai-prompt`
3. Iterate with AI using blueprint as context
4. Evaluate results and refine blueprint

---

## 🎓 Learning Path

### Beginner (0-1 week)

**Week 1: Understand SBBL**
- [ ] Read [README](../README.md)
- [ ] Read [Methodology](./methodology.md)
- [ ] Try CLI: `sbbl init`
- [ ] Generate first blueprint

**Goal**: Tạo được blueprint đầu tiên

---

### Intermediate (1-4 weeks)

**Weeks 2-4: Master Blueprint Creation**
- [ ] Read [Best Practices](./best-practices.md)
- [ ] Study [Templates](./templates.md)
- [ ] Create 3 blueprints for different use cases
- [ ] Use AI to implement 1 blueprint

**Goal**: Blueprint score >80, AI accuracy >70%

---

### Advanced (1-3 months)

**Months 2-3: Contribute & Customize**
- [ ] Read [Implementation Roadmap](./implementation-roadmap.md)
- [ ] Create custom template
- [ ] Setup automated evaluation
- [ ] Contribute to SBBL project

**Goal**: Contribute template hoặc feature to SBBL

---

## 🔍 Quick Reference

### Common Tasks

| Task | Command / Link |
|------|----------------|
| Create new blueprint | `sbbl init` |
| Use template | `sbbl init --template saas-mvp` |
| Validate blueprint | `sbbl validate BLUEPRINT.md` |
| Generate AI prompt | `sbbl ai-prompt` |
| List templates | `sbbl template list` |
| View web app | [sbbl.dev](https://sbbl.dev) |

---

### File Structure

```
SBBL/
├── README.md                          # Project overview
├── docs/
│   ├── INDEX.md                       # This file
│   ├── methodology.md                 # Core concepts
│   ├── cli-specification.md           # CLI tool docs
│   ├── web-app-specification.md       # Web app docs
│   ├── templates.md                   # Blueprint templates
│   ├── best-practices.md              # Tips & tricks
│   ├── evaluation-criteria.md         # Scoring system
│   └── implementation-roadmap.md      # Development plan
├── sbbl-cli/                          # CLI tool source
└── sbbl-app/                          # Web app source
```

---

## 📞 Support & Community

### Get Help

- **Documentation**: You're here! 📖
- **Discord**: [Join Community](https://discord.gg/sbbl)
- **GitHub Issues**: [Report Bug](https://github.com/DiogenesAI/OpenSBBL/issues)
- **Email**: [email protected]

### Stay Updated

- **Twitter**: [@SBBLdev](https://twitter.com/SBBLdev)
- **Blog**: [blog.sbbl.dev](https://blog.sbbl.dev)
- **Changelog**: [CHANGELOG.md](../CHANGELOG.md)

---

## 🎯 Next Steps

Dựa vào mục tiêu của bạn:

### Tôi muốn tạo Blueprint ngay
→ Install CLI: `npm install -g sbbl-cli`  
→ Run: `sbbl init`  
→ Read: [Best Practices](./best-practices.md)

### Tôi muốn hiểu SBBL methodology
→ Read: [Methodology](./methodology.md)  
→ Read: [Best Practices](./best-practices.md)  
→ Study: [Templates](./templates.md)

### Tôi muốn contribute vào project
→ Read: [Implementation Roadmap](./implementation-roadmap.md)  
→ Read: [Contributing Guidelines](../CONTRIBUTING.md)  
→ Check: [Open Issues](https://github.com/DiogenesAI/OpenSBBL/issues)

### Tôi muốn dùng Web App
→ Visit: [sbbl.dev](https://sbbl.dev)  
→ Read: [Web App Specification](./web-app-specification.md)

---

## 📊 Documentation Stats

- **Total Documents**: 8
- **Total Pages**: ~150 (estimated)
- **Last Updated**: 2025-11-30
- **Version**: 1.0.0

---

## 🙏 Credits

**Created by**: [OpenSBBL Community](https://github.com/DiogenesAI/OpenSBBL)  
**License**: MIT  
**Contributors**: [See Contributors](https://github.com/DiogenesAI/OpenSBBL/graphs/contributors)

---

<div align="center">

**Happy Building! 🚀**

[⭐ Star on GitHub](https://github.com/DiogenesAI/OpenSBBL) | [📖 Read Docs](./methodology.md) | [💬 Join Discord](https://discord.gg/sbbl)

</div>
