# 🎬 DEMO SCRIPT - SBBL CLI

> **Script để demo các tính năng của SBBL CLI**

---

## 📋 CHUẨN BỊ

```bash
# Đảm bảo CLI đã được build và link
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm install
npm run build
npm link
```

---

## 🎯 DEMO 1: Khởi tạo dự án mới

### Bước 1: Tạo thư mục demo

```bash
cd d:\Github\DiogenesAI\SBBL
mkdir demo-project
cd demo-project
```

### Bước 2: Chạy lệnh init

```bash
sbbl init
```

### Bước 3: Trả lời các câu hỏi

**Câu hỏi 1: Project Name**
```
→ My Todo App
```

**Câu hỏi 2: Project Vision**
```
→ A modern, AI-powered todo application that helps users manage tasks efficiently with smart suggestions and natural language input
```

**Câu hỏi 3: Tech Stack**
```
→ React, TypeScript, TailwindCSS, Supabase, OpenAI API
```

**Câu hỏi 4: Architecture**
```
→ Client-Server architecture with RESTful API and real-time database sync
```

**Câu hỏi 5: Timeline**
```
→ 2024-12-01 to 2025-01-15
```

### Bước 4: Kiểm tra kết quả

```bash
# Xem cấu trúc đã tạo
dir

# Kết quả mong đợi:
# BLUEPRINT.md
# .sbblrc
# memory/
#   ├── 0_past/
#   ├── 1_present/
#   └── 2_future/
```

---

## 🎯 DEMO 2: Validate Blueprint

### Bước 1: Validate blueprint vừa tạo

```bash
sbbl validate
```

**Kết quả mong đợi:**
```
✅ Blueprint validation passed!
All required sections are present and valid.
```

### Bước 2: Tạo blueprint có lỗi để demo

Tạo file `BLUEPRINT_ERROR.md`:

```markdown
# My Project

## Vision
Too short

## Tech Stack
- React
```

### Bước 3: Validate blueprint có lỗi

```bash
sbbl validate BLUEPRINT_ERROR.md
```

**Kết quả mong đợi:**
```
❌ Validation failed!

Errors:
- Vision is too short (minimum 50 characters)
- Missing required section: Architecture
- Missing required section: Timeline
```

---

## 🎯 DEMO 3: Generate AI Prompt

### Bước 1: Tạo AI prompt từ blueprint

```bash
sbbl ai-prompt
```

**Kết quả:**
```
✅ System Prompt generated successfully!
📋 Copied to clipboard!

Preview:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You are an expert software developer working on:

Project: My Todo App
Vision: A modern, AI-powered todo application...
Tech Stack: React, TypeScript, TailwindCSS...
...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Bước 2: Paste vào ChatGPT

1. Mở ChatGPT
2. Paste (Ctrl+V)
3. Thấy AI hiểu rõ dự án!

---

## 🎯 DEMO 4: Template Management

### Bước 1: Liệt kê templates

```bash
sbbl template list
```

**Kết quả:**
```
Available templates:
- blueprint.md
- memory-structure.md
```

### Bước 2: Xem chi tiết template

```bash
sbbl template show blueprint
```

### Bước 3: Sử dụng template

```bash
sbbl template use blueprint --output MY_CUSTOM_BLUEPRINT.md
```

---

## 🎯 DEMO 5: Complete Workflow

### Workflow hoàn chỉnh từ đầu đến cuối

```bash
# 1. Tạo dự án
mkdir awesome-app
cd awesome-app

# 2. Init SBBL
sbbl init
# → Điền thông tin dự án

# 3. Validate
sbbl validate
# → Đảm bảo không có lỗi

# 4. Generate AI prompt
sbbl ai-prompt
# → Copy vào clipboard

# 5. Mở ChatGPT và paste

# 6. Bắt đầu code với AI!
```

---

## 📊 CHECKLIST DEMO

- [ ] Demo `sbbl init` - Tạo dự án mới
- [ ] Demo `sbbl validate` - Validate thành công
- [ ] Demo `sbbl validate` - Validate thất bại (có lỗi)
- [ ] Demo `sbbl ai-prompt` - Tạo prompt
- [ ] Demo `sbbl template list` - Liệt kê templates
- [ ] Demo complete workflow

---

## 💡 TIPS KHI DEMO

1. **Chuẩn bị trước:** Build và link CLI trước khi demo
2. **Clear terminal:** Dùng `cls` để màn hình sạch đẹp
3. **Slow down:** Giải thích từng bước một cách rõ ràng
4. **Show results:** Mở file BLUEPRINT.md để xem kết quả
5. **Handle errors:** Chuẩn bị sẵn cách xử lý lỗi phổ biến

---

## 🎥 RECORDING TIPS

Nếu muốn record video demo:

```bash
# Sử dụng Windows Terminal với font đẹp
# Zoom in để text rõ ràng
# Sử dụng theme có màu sắc đẹp
```

---

**Good luck with your demo! 🚀**
