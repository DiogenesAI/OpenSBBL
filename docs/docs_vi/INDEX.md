# 📚 Chỉ Mục Tài Liệu SBBL

Chào mừng đến với tài liệu SBBL! Đây là hướng dẫn đầy đủ để sử dụng và phát triển phương pháp luận và công cụ SBBL.

**🌍 Language / Ngôn ngữ:**
- **[English Documentation](../docs_en/INDEX.md)** 🇬🇧
- **[Tài liệu Tiếng Việt](../docs_vi/INDEX.md)** 🇻🇳 ← Bạn đang ở đây

---

## 🎯 Bắt Đầu

Nếu bạn mới bắt đầu, hãy đọc theo thứ tự:

1. **[README](../README.md)** - Tổng quan về dự án SBBL
2. **[VISION](./VISION.md)** - Tầm nhìn dài hạn: Human-AI → AI-AI collaboration
3. **[Methodology](./methodology.md)** - Hiểu 4 giai đoạn: Spark → Blueprint → Build → Launch
4. **[Best Practices](./best-practices.md)** - Cách viết Blueprint hiệu quả

---

## 📖 Tài Liệu Cốt Lõi

### Phương Pháp Luận & Khái Niệm

| Tài Liệu | Mô Tả | Đối Tượng |
|----------|-------|-----------|
| [VISION](./VISION.md) | 🌟 **Tầm nhìn SBBL: Agile cho Kỷ nguyên AI** - Human-AI → AI-AI collaboration | Tất cả (Bắt đầu ở đây!) |
| [Methodology](./methodology.md) | Giải thích chi tiết phương pháp luận SBBL | Tất cả người dùng |
| [Best Practices](./best-practices.md) | Mẹo và thủ thuật để tối ưu quy trình làm việc | Developers, AI Orchestrators |
| [Evaluation Criteria](./evaluation-criteria.md) | Cách đánh giá Blueprint và Code | Product Managers, Tech Leads |

---

## 🛠️ Tài Liệu Công Cụ

### CLI Tool

| Tài Liệu | Mô Tả | Khi Nào Đọc |
|----------|-------|-------------|
| [CLI Specification](./cli-specification.md) | Đặc tả kỹ thuật cho CLI tool | Khi muốn hiểu hoặc đóng góp vào CLI |

**Liên Kết Nhanh**:
- Cài đặt: `npm install -g sbbl-cli`
- Sử dụng: `sbbl init`
- [Mã nguồn CLI](../sbbl-cli/) *(sắp ra mắt)*

---

### Ứng Dụng Web

| Tài Liệu | Mô Tả | Khi Nào Đọc |
|----------|-------|-------------|
| [Web App Specification](./web-app-specification.md) | Kiến trúc full-stack & tính năng | Khi muốn hiểu hoặc đóng góp vào Web App |

**Liên Kết Nhanh**:
- [Demo Trực Tiếp](https://sbbl.dev) *(sắp ra mắt)*
- [Mã nguồn Web App](../sbbl-app/) *(sắp ra mắt)*

---

## 📋 Templates & Ví Dụ

| Tài Liệu | Mô Tả | Trường Hợp Sử Dụng |
|----------|-------|-------------------|
| [Templates](./templates.md) | Các blueprint có sẵn cho use case phổ biến | Khi bắt đầu dự án mới |

**Templates Có Sẵn**:
1. SaaS MVP (Next.js + Supabase)
2. Ứng Dụng AI (Next.js + OpenAI)
3. E-Commerce (Next.js + Stripe)
4. Mobile App (React Native + Supabase)
5. Dashboard/Analytics (Next.js + Charts)
6. CMS (Next.js + Rich Text Editor)

---

## 🚀 Phát Triển

### Dành Cho Contributors

| Tài Liệu | Mô Tả | Khi Nào Đọc |
|----------|-------|-------------|
| [Implementation Roadmap](./implementation-roadmap.md) | Kế hoạch phát triển 8 tuần | Khi muốn đóng góp hoặc fork dự án |
| [Contributing Guidelines](../CONTRIBUTING.md) | Hướng dẫn đóng góp | Trước khi submit PR |

---

## 📊 Hướng Dẫn Theo Use Case

### Theo Vai Trò

#### 🧑‍💻 Solo Developer / Indie Hacker
**Mục tiêu**: Xây dựng MVP nhanh chóng với AI

**Tài Liệu Nên Đọc**:
1. [Methodology](./methodology.md) - Hiểu quy trình làm việc
2. [Templates](./templates.md) - Chọn template phù hợp
3. [Best Practices](./best-practices.md) - Tối ưu cho tốc độ

**Quy Trình**:
```bash
sbbl init --template saas-mvp
# Làm theo hướng dẫn
# Copy blueprint vào ChatGPT/Claude
# Bắt đầu xây dựng!
```

---

#### 👔 Product Manager / Founder
**Mục tiêu**: Document ý tưởng và đồng bộ team

**Tài Liệu Nên Đọc**:
1. [Methodology](./methodology.md) - Hiểu các giai đoạn
2. [Evaluation Criteria](./evaluation-criteria.md) - Đánh giá chất lượng blueprint
3. [Web App Specification](./web-app-specification.md) - Sử dụng visual builder

**Quy Trình**:
1. Sử dụng Web App để tạo Blueprint
2. Chia sẻ với team để review
3. Export và gửi cho developers
4. Theo dõi tiến độ với Evaluation Dashboard

---

#### 🏗️ Tech Lead / Architect
**Mục tiêu**: Chuẩn hóa tài liệu kỹ thuật

**Tài Liệu Nên Đọc**:
1. [Best Practices](./best-practices.md) - Thiết lập chuẩn mực
2. [Evaluation Criteria](./evaluation-criteria.md) - Thiết lập quality gates
3. [Templates](./templates.md) - Tạo custom templates

**Quy Trình**:
1. Tạo templates riêng cho công ty
2. Thiết lập automated evaluation trong CI/CD
3. Review blueprints trước sprint planning
4. Theo dõi metrics theo thời gian

---

#### 🤖 AI Orchestrator
**Mục tiêu**: Tối đa hóa độ chính xác của AI coding

**Tài Liệu Nên Đọc**:
1. [Best Practices](./best-practices.md) - Tạo prompts tốt hơn
2. [Methodology](./methodology.md) - Hiểu yêu cầu về context
3. [Evaluation Criteria](./evaluation-criteria.md) - Đo lường hiệu quả AI

**Quy Trình**:
1. Tạo Blueprint chi tiết (điểm >85)
2. Generate AI prompt với `sbbl ai-prompt`
3. Lặp lại với AI sử dụng blueprint làm context
4. Đánh giá kết quả và tinh chỉnh blueprint

---

## 🎓 Lộ Trình Học Tập

### Người Mới Bắt Đầu (0-1 tuần)

**Tuần 1: Hiểu SBBL**
- [ ] Đọc [README](../README.md)
- [ ] Đọc [VISION](./VISION.md)
- [ ] Đọc [Methodology](./methodology.md)
- [ ] Thử CLI: `sbbl init`
- [ ] Tạo blueprint đầu tiên

**Mục tiêu**: Tạo được blueprint đầu tiên

---

### Trung Cấp (1-4 tuần)

**Tuần 2-4: Thành Thạo Tạo Blueprint**
- [ ] Đọc [Best Practices](./best-practices.md)
- [ ] Nghiên cứu [Templates](./templates.md)
- [ ] Tạo 3 blueprints cho các use case khác nhau
- [ ] Sử dụng AI để implement 1 blueprint

**Mục tiêu**: Blueprint score >80, AI accuracy >70%

---

### Nâng Cao (1-3 tháng)

**Tháng 2-3: Đóng Góp & Tùy Chỉnh**
- [ ] Đọc [Implementation Roadmap](./implementation-roadmap.md)
- [ ] Tạo custom template
- [ ] Thiết lập automated evaluation
- [ ] Đóng góp vào dự án SBBL

**Mục tiêu**: Đóng góp template hoặc feature cho SBBL

---

## 🔍 Tham Khảo Nhanh

### Tác Vụ Thường Gặp

| Tác Vụ | Lệnh / Liên Kết |
|--------|-----------------|
| Tạo blueprint mới | `sbbl init` |
| Sử dụng template | `sbbl init --template saas-mvp` |
| Validate blueprint | `sbbl validate BLUEPRINT.md` |
| Generate AI prompt | `sbbl ai-prompt` |
| Liệt kê templates | `sbbl template list` |
| Xem web app | [sbbl.dev](https://sbbl.dev) |

---

### Cấu Trúc File

```
SBBL/
├── README.md                          # Tổng quan dự án
├── docs_vi/                           # Tài liệu Tiếng Việt
│   ├── INDEX.md                       # File này
│   ├── VISION.md                      # Tầm nhìn dài hạn
│   ├── methodology.md                 # Khái niệm cốt lõi
│   ├── cli-specification.md           # Tài liệu CLI tool
│   ├── web-app-specification.md       # Tài liệu Web app
│   ├── templates.md                   # Blueprint templates
│   ├── best-practices.md              # Mẹo & thủ thuật
│   ├── evaluation-criteria.md         # Hệ thống chấm điểm
│   └── implementation-roadmap.md      # Kế hoạch phát triển
├── docs_en/                           # English Documentation
├── sbbl-cli/                          # Mã nguồn CLI tool
└── sbbl-app/                          # Mã nguồn Web app
```

---

## 📞 Hỗ Trợ & Cộng Đồng

### Nhận Trợ Giúp

- **Tài liệu**: Bạn đang ở đây! 📖
- **Discord**: [Tham gia Cộng đồng](https://discord.gg/sbbl)
- **GitHub Issues**: [Báo cáo Lỗi](https://github.com/DiogenesAI/OpenSBBL/issues)
- **Email**: [email protected]

### Cập Nhật Tin Tức

- **Twitter**: [@SBBLdev](https://twitter.com/SBBLdev)
- **Blog**: [blog.sbbl.dev](https://blog.sbbl.dev)
- **Changelog**: [CHANGELOG.md](../CHANGELOG.md)

---

## 🎯 Bước Tiếp Theo

Dựa vào mục tiêu của bạn:

### Tôi muốn tạo Blueprint ngay
→ Cài đặt CLI: `npm install -g sbbl-cli`  
→ Chạy: `sbbl init`  
→ Đọc: [Best Practices](./best-practices.md)

### Tôi muốn hiểu phương pháp luận SBBL
→ Đọc: [VISION](./VISION.md)  
→ Đọc: [Methodology](./methodology.md)  
→ Nghiên cứu: [Templates](./templates.md)

### Tôi muốn đóng góp vào dự án
→ Đọc: [Implementation Roadmap](./implementation-roadmap.md)  
→ Đọc: [Contributing Guidelines](../CONTRIBUTING.md)  
→ Kiểm tra: [Open Issues](https://github.com/DiogenesAI/OpenSBBL/issues)

### Tôi muốn dùng Web App
→ Truy cập: [sbbl.dev](https://sbbl.dev)  
→ Đọc: [Web App Specification](./web-app-specification.md)

---

## 📊 Thống Kê Tài Liệu

- **Tổng số tài liệu**: 9
- **Tổng số trang**: ~150 (ước tính)
- **Cập nhật lần cuối**: 2025-11-30
- **Phiên bản**: 1.0.0

---

## 🙏 Credits

**Tạo bởi**: [OpenSBBL Community](https://github.com/DiogenesAI/OpenSBBL)  
**Giấy phép**: MIT  
**Contributors**: [Xem Contributors](https://github.com/DiogenesAI/OpenSBBL/graphs/contributors)

---

<div align="center">

**Chúc Bạn Xây Dựng Thành Công! 🚀**

[⭐ Star trên GitHub](https://github.com/DiogenesAI/OpenSBBL) | [📖 Đọc Tài Liệu](./methodology.md) | [💬 Tham gia Discord](https://discord.gg/sbbl)

</div>
