# 📝 SBBL CLI CHEATSHEET

> **Tài liệu tham khảo nhanh các lệnh SBBL CLI**

---

## ⚡ LỆNH CƠ BẢN

```bash
# Xem version
sbbl --version

# Xem help
sbbl --help

# Xem help của lệnh cụ thể
sbbl <command> --help
```

---

## 🚀 KHỞI TẠO DỰ ÁN

```bash
# Khởi tạo dự án mới (interactive)
sbbl init

# Kết quả:
# ✅ BLUEPRINT.md
# ✅ .sbblrc
# ✅ memory/0_past/
# ✅ memory/1_present/
# ✅ memory/2_future/
```

---

## ✅ VALIDATE BLUEPRINT

```bash
# Validate BLUEPRINT.md trong thư mục hiện tại
sbbl validate

# Validate file cụ thể
sbbl validate path/to/BLUEPRINT.md

# Validate với đường dẫn tuyệt đối
sbbl validate d:\Projects\MyApp\BLUEPRINT.md
```

---

## 🤖 TẠO AI PROMPT

```bash
# Tạo prompt từ BLUEPRINT.md (tự động copy vào clipboard)
sbbl ai-prompt

# Tạo prompt từ file cụ thể
sbbl ai-prompt path/to/BLUEPRINT.md

# Tạo prompt và lưu vào file
sbbl ai-prompt --output prompt.txt
```

---

## 📄 QUẢN LÝ TEMPLATES

```bash
# Liệt kê tất cả templates
sbbl template list

# Xem nội dung template
sbbl template show blueprint

# Sử dụng template (copy vào file mới)
sbbl template use blueprint --output MY_BLUEPRINT.md
```

---

## 🔧 CHẠY TỪ SOURCE (không cần npm link)

```bash
# Thay vì: sbbl <command>
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js <command>

# Ví dụ:
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js init
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js validate
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js ai-prompt
```

---

## 🛠️ DEVELOPMENT

```bash
# Cài đặt dependencies
npm install

# Build dự án
npm run build

# Build và watch (auto-rebuild khi code thay đổi)
npm run dev

# Chạy tests
npm test

# Link globally
npm link

# Unlink
npm unlink -g sbbl-cli
```

---

## 📂 CẤU TRÚC DỰ ÁN SBBL

```
my-project/
├── BLUEPRINT.md          # Bản thiết kế dự án (Source of Truth)
├── .sbblrc              # Cấu hình SBBL
├── memory/              # Hệ thống quản lý context
│   ├── 0_past/          # Lịch sử, công việc đã hoàn thành
│   │   └── *.md         # Các file ghi chú quá khứ
│   ├── 1_present/       # Công việc hiện tại
│   │   └── *.md         # Tasks đang làm
│   └── 2_future/        # Kế hoạch tương lai
│       └── *.md         # Roadmap, ideas
└── src/                 # Source code của bạn
```

---

## 🎯 WORKFLOW CHUẨN

```bash
# 1️⃣ Tạo dự án
mkdir my-awesome-app && cd my-awesome-app

# 2️⃣ Khởi tạo SBBL
sbbl init

# 3️⃣ Validate blueprint
sbbl validate

# 4️⃣ Tạo AI prompt
sbbl ai-prompt

# 5️⃣ Paste vào ChatGPT/Claude/Gemini

# 6️⃣ Bắt đầu code!
```

---

## ❌ TROUBLESHOOTING

| Lỗi | Nguyên nhân | Giải pháp |
|-----|------------|-----------|
| `sbbl: command not found` | Chưa link CLI | `npm link` |
| `Cannot find module` | Chưa cài dependencies | `npm install` |
| `Template not found` | Chưa build | `npm run build` |
| `BLUEPRINT.md not found` | Sai thư mục | `cd` đến đúng thư mục |
| `Validation failed` | Blueprint không hợp lệ | Sửa theo lỗi hiển thị |

---

## 💡 TIPS & TRICKS

### Tạo alias cho Windows PowerShell

Thêm vào `$PROFILE`:

```powershell
# Mở profile
notepad $PROFILE

# Thêm dòng này:
Set-Alias sbbl "d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js"
```

### Tạo script batch (Windows)

Tạo file `sbbl.bat` trong thư mục có trong PATH:

```batch
@echo off
node "d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js" %*
```

### Sử dụng với Git Bash

```bash
# Thêm vào ~/.bashrc
alias sbbl='node /d/Github/DiogenesAI/SBBL/sbbl-cli/dist/index.js'
```

---

## 📊 VALIDATION RULES

Blueprint phải có các section sau:

- ✅ **Vision** (≥ 50 ký tự)
- ✅ **Tech Stack** (danh sách công nghệ)
- ✅ **Architecture** (mô tả kiến trúc)
- ✅ **Timeline** (định dạng: YYYY-MM-DD)
- ✅ **Features** (danh sách tính năng)

---

## 🎨 BLUEPRINT TEMPLATE

```markdown
# [Project Name]

## Vision
[Mô tả chi tiết tầm nhìn dự án, ít nhất 50 ký tự]

## Tech Stack
- Frontend: React, TypeScript, TailwindCSS
- Backend: Node.js, Express
- Database: PostgreSQL
- Deployment: Vercel

## Architecture
[Mô tả kiến trúc hệ thống]

## Timeline
Start: 2024-12-01
End: 2025-01-31

## Features
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
```

---

## 🔗 LINKS

- 📖 [Hướng dẫn đầy đủ](./HUONG_DAN_SU_DUNG.md)
- ⚡ [Quick Start](./QUICK_START_VI.md)
- 🎬 [Demo Script](./DEMO_SCRIPT.md)
- 📚 [SBBL Methodology](../docs/sbbl-methodology.md)

---

**Print this and keep it on your desk! 📌**
