# Đặc Tả Kỹ Thuật SBBL Web App

## 1. Tổng Quan
**Tên**: `sbbl-app`
**Mục đích**: Nền tảng web để tạo, quản lý, cộng tác và đánh giá các SBBL Blueprints. Cung cấp giao diện trực quan (Visual Builder) và tích hợp AI để hỗ trợ quy trình.
**Loại ứng dụng**: SaaS Web Application

---

## 2. Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Editor**: Tiptap (Rich text/Markdown editor)
- **Visualization**: React Flow (cho sơ đồ kiến trúc), Mermaid.js
- **Charts**: Recharts

### Backend
- **Framework**: Next.js API Routes (Serverless)
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage (cho ảnh, tài liệu đính kèm)
- **Real-time**: Supabase Realtime (cho collaboration)
- **AI Integration**: Vercel AI SDK (OpenAI, Anthropic, Google)

### DevOps
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry, Vercel Analytics

---

## 3. Kiến Trúc Database

### 3.1 Tables

**`users`** (extends Supabase Auth)
- `id`: UUID
- `email`: String
- `full_name`: String
- `avatar_url`: String
- `plan`: Enum (free, pro, team)

**`projects`**
- `id`: UUID
- `owner_id`: UUID (FK -> users)
- `name`: String
- `description`: String
- `status`: Enum (spark, blueprint, build, launch)
- `created_at`: Timestamp

**`blueprints`**
- `id`: UUID
- `project_id`: UUID (FK -> projects)
- `version`: Integer
- `content`: JSONB (Structured blueprint data)
- `score`: Integer (0-100)
- `is_active`: Boolean

**`blueprint_sections`** (Optional, for granular comments)
- `id`: UUID
- `blueprint_id`: UUID
- `section_type`: Enum (vision, tech_stack, schema, etc.)
- `content`: Text

**`ai_interactions`**
- `id`: UUID
- `project_id`: UUID
- `prompt`: Text
- `response`: Text
- `model`: String
- `cost`: Float

---

## 4. Tính Năng Chính (Features)

### 4.1 Blueprint Builder (Visual Editor)
- **Drag & Drop Interface**: Kéo thả các section của blueprint.
- **Real-time Preview**: Xem trước file Markdown sẽ được generate.
- **AI Assistant**: "Magic Button" để AI tự động điền hoặc gợi ý nội dung cho từng section.
- **Templates Gallery**: Chọn template và apply vào dự án.

### 4.2 AI Integration Dashboard
- **Chat with Blueprint**: Chatbot hiểu context của blueprint hiện tại.
- **Prompt Generator**: Tạo prompt tối ưu cho từng task trong roadmap.
- **Code Reviewer**: Paste code vào để AI so sánh với blueprint và chấm điểm.

### 4.3 Project Evaluation System
- **Automated Scoring**: Chấm điểm blueprint dựa trên độ chi tiết và đầy đủ.
- **Recommendations**: Gợi ý cải thiện (ví dụ: "Thiếu indexes trong database schema").
- **Progress Tracking**: Theo dõi % hoàn thành của dự án.

### 4.4 Collaboration
- **Team Workspaces**: Mời thành viên vào dự án.
- **Comments**: Bình luận trực tiếp lên từng phần của blueprint.
- **Version History**: Xem lại và restore các phiên bản cũ.

---

## 5. UI/UX Design

### 5.1 Theme
- **Màu chủ đạo**: Indigo/Violet (Sáng tạo, Công nghệ)
- **Style**: Clean, Modern, Glassmorphism nhẹ
- **Dark Mode**: Hỗ trợ đầy đủ

### 5.2 Key Screens
1. **Dashboard**: Danh sách dự án, metrics tổng quan.
2. **Project View**: Kanban board hoặc List view cho các giai đoạn.
3. **Blueprint Editor**: Màn hình chính, chia 2 cột (Input | Preview).
4. **AI Chat**: Cửa sổ chat floating hoặc sidebar.
5. **Settings**: Quản lý profile, API keys, billing.

---

## 6. API Routes

- `GET /api/projects`: Lấy danh sách dự án
- `POST /api/projects`: Tạo dự án mới
- `GET /api/blueprints/:id`: Lấy nội dung blueprint
- `POST /api/blueprints/generate`: Dùng AI tạo nội dung blueprint
- `POST /api/evaluate`: Chấm điểm blueprint hoặc code

---

## 7. Lộ Trình Phát Triển Web App

### Giai đoạn 1: Foundation (Tuần 4-5)
- [ ] Setup Next.js + Supabase
- [ ] Authentication & User Profile
- [ ] Database Schema Setup
- [ ] Basic Project Management (CRUD)

### Giai đoạn 2: Blueprint Editor (Tuần 6)
- [ ] Markdown Editor Integration
- [ ] Template System
- [ ] Export to Markdown/PDF

### Giai đoạn 3: AI & Evaluation (Tuần 7)
- [ ] Vercel AI SDK Integration
- [ ] Blueprint Scoring Logic
- [ ] AI Suggestions

### Giai đoạn 4: Polish & Launch (Tuần 8)
- [ ] UI/UX Refinement
- [ ] Landing Page
- [ ] Deployment

---

## 8. Bảo Mật

- **RLS (Row Level Security)**: Bắt buộc cho mọi bảng trong Supabase.
- **API Protection**: Rate limiting cho các AI endpoints.
- **Data Privacy**: Không gửi dữ liệu nhạy cảm cho AI nếu user không cho phép.
