# Lộ Trình Triển Khai SBBL (8 Tuần)

Tài liệu này phác thảo kế hoạch từng bước để xây dựng hệ sinh thái SBBL (CLI Tool và Web App) trong vòng 8 tuần.

---

## 📅 Tổng Quan

| Giai Đoạn | Thời Gian | Mục Tiêu Chính | Đầu Ra |
|-----------|-----------|----------------|--------|
| **Phase 1** | Tuần 1-3 | Xây dựng CLI Tool | `sbbl-cli` v1.0 |
| **Phase 2** | Tuần 4-7 | Xây dựng Web App | `sbbl-app` Beta |
| **Phase 3** | Tuần 8 | Launch & Marketing | Public Launch |

---

## 🏗️ Phase 1: CLI Tool (Tuần 1-3)

### Tuần 1: Nền Tảng & Init Command
**Mục tiêu**: Người dùng có thể chạy `sbbl init` để tạo một blueprint cơ bản.

- [ ] **Ngày 1**: Setup project (TypeScript, ESLint, Prettier, Vitest).
- [ ] **Ngày 2**: Thiết lập kiến trúc CLI với `commander` và `@clack/prompts`.
- [ ] **Ngày 3**: Implement lệnh `init` (thu thập thông tin cơ bản: tên, vision).
- [ ] **Ngày 4**: Xây dựng hệ thống template cơ bản (Blank, SaaS MVP).
- [ ] **Ngày 5**: Implement logic tạo file `BLUEPRINT.md` từ template.

### Tuần 2: Validation & AI Prompts
**Mục tiêu**: Đảm bảo blueprint chất lượng và tạo prompt cho AI.

- [ ] **Ngày 1**: Implement lệnh `validate` (kiểm tra các section bắt buộc).
- [ ] **Ngày 2**: Tích hợp `zod` để validate input từ người dùng.
- [ ] **Ngày 3**: Implement lệnh `ai-prompt` (tạo system prompt tối ưu).
- [ ] **Ngày 4**: Thêm tính năng copy to clipboard (`clipboardy`).
- [ ] **Ngày 5**: Viết unit tests cho core logic.

### Tuần 3: Polish & Publish
**Mục tiêu**: Phát hành gói npm đầu tiên.

- [ ] **Ngày 1**: Cải thiện UI/UX (màu sắc, spinner, thông báo lỗi).
- [ ] **Ngày 2**: Viết tài liệu (README, CLI docs).
- [ ] **Ngày 3**: Setup CI/CD (GitHub Actions) để auto-publish.
- [ ] **Ngày 4**: Testing trên các môi trường (Windows, Mac, Linux).
- [ ] **Ngày 5**: Publish `sbbl-cli` lên npm registry.

---

## 🌐 Phase 2: Web App (Tuần 4-7)

### Tuần 4: Setup & Authentication
**Mục tiêu**: Người dùng có thể đăng nhập và tạo dự án.

- [ ] **Ngày 1**: Init Next.js project, setup Tailwind, Shadcn UI.
- [ ] **Ngày 2**: Setup Supabase (Auth, Database).
- [ ] **Ngày 3**: Implement Authentication (Login, Register, Social Auth).
- [ ] **Ngày 4**: Tạo Database Schema (Users, Projects, Blueprints).
- [ ] **Ngày 5**: Implement Dashboard UI (list projects, create project).

### Tuần 5: Blueprint Editor
**Mục tiêu**: Người dùng có thể chỉnh sửa blueprint trực quan.

- [ ] **Ngày 1**: Tích hợp Markdown editor (Tiptap hoặc MDXEditor).
- [ ] **Ngày 2**: Xây dựng giao diện chia cột (Editor | Preview).
- [ ] **Ngày 3**: Implement tính năng Auto-save.
- [ ] **Ngày 4**: Thêm tính năng Export (Markdown, PDF).
- [ ] **Ngày 5**: Tích hợp Template gallery vào Web App.

### Tuần 6: AI Integration
**Mục tiêu**: AI hỗ trợ viết blueprint và đánh giá.

- [ ] **Ngày 1**: Setup Vercel AI SDK.
- [ ] **Ngày 2**: Implement "Generate Section" (AI viết Vision, Schema...).
- [ ] **Ngày 3**: Implement Chatbot context-aware (hiểu blueprint hiện tại).
- [ ] **Ngày 4**: Xây dựng hệ thống chấm điểm tự động (Evaluation Engine).
- [ ] **Ngày 5**: Tối ưu hóa prompts và chi phí token.

### Tuần 7: Collaboration & Polish
**Mục tiêu**: Làm việc nhóm và hoàn thiện UX.

- [ ] **Ngày 1**: Implement Real-time collaboration (Supabase Realtime).
- [ ] **Ngày 2**: Tính năng Comments/Feedback trên blueprint.
- [ ] **Ngày 3**: Version history (xem và restore bản cũ).
- [ ] **Ngày 4**: UI Polish (Dark mode, Animations, Responsive).
- [ ] **Ngày 5**: End-to-end testing (Playwright).

---

## 🚀 Phase 3: Launch (Tuần 8)

### Tuần 8: Go-to-Market
**Mục tiêu**: Ra mắt công chúng và thu hút người dùng đầu tiên.

- [ ] **Ngày 1**: Chuẩn bị Landing Page (Marketing site).
- [ ] **Ngày 2**: Viết Blog post giới thiệu SBBL Methodology.
- [ ] **Ngày 3**: Tạo Video demo/tutorial.
- [ ] **Ngày 4**: Launch trên Product Hunt, Hacker News, Reddit.
- [ ] **Ngày 5**: Thu thập feedback và lên kế hoạch cho v1.1.

---

## ⚠️ Rủi Ro & Giảm Thiểu

| Rủi Ro | Tác Động | Chiến Lược Giảm Thiểu |
|--------|----------|-----------------------|
| **Scope Creep** | Chậm tiến độ | Tuân thủ nghiêm ngặt MVP features. Đẩy tính năng phụ sang v2. |
| **AI Cost** | Chi phí cao | Sử dụng mô hình rẻ hơn cho dev (GPT-3.5/Haiku), cache responses. |
| **Complexity** | Khó sử dụng | Tập trung vào UX, cung cấp templates tốt, hướng dẫn chi tiết. |
| **Adoption** | Ít người dùng | Tập trung vào content marketing, chứng minh hiệu quả (case studies). |

---

## ✅ Định Nghĩa Thành Công (Success Criteria)

1. **CLI**:
   - > 100 downloads trong tuần đầu.
   - Không có lỗi crash nghiêm trọng.
   - Thời gian tạo blueprint < 5 phút.

2. **Web App**:
   - > 50 active users.
   - > 200 blueprints được tạo.
   - Hệ thống chấm điểm hoạt động chính xác > 80%.

3. **Methodology**:
   - Cộng đồng phản hồi tích cực về chất lượng code do AI tạo ra khi dùng SBBL.
