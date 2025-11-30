# 🎯 HƯỚNG DẪN CHẠY SBBL - THỰC TẾ 100%

> **Đã test và hoạt động trên Windows!**

---

## ⚠️ VẤN ĐỀ: `npm link` không hoạt động trên Windows

Lệnh `npm link` không tạo được global command trên một số hệ thống Windows.

## ✅ GIẢI PHÁP: 3 cách chạy SBBL

---

## 🔥 CÁCH 1: Dùng file batch (ĐƠN GIẢN NHẤT)

### Bước 1: Đảm bảo đã build

```powershell
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm install
npm run build
```

### Bước 2: Dùng file `sbbl.bat`

File `sbbl.bat` đã được tạo sẵn trong thư mục `sbbl-cli`.

**Cách dùng:**

```powershell
# Từ thư mục sbbl-cli
.\sbbl.bat --help
.\sbbl.bat init
.\sbbl.bat validate
.\sbbl.bat ai-prompt

# Từ thư mục khác (dùng đường dẫn đầy đủ)
d:\Github\DiogenesAI\SBBL\sbbl-cli\sbbl.bat init
```

### Bước 3: Tạo dự án demo

```powershell
# Tạo thư mục dự án
cd d:\Github\DiogenesAI\SBBL
mkdir my-project
cd my-project

# Chạy init (dùng đường dẫn đầy đủ)
..\sbbl-cli\sbbl.bat init
```

---

## 🚀 CÁCH 2: Dùng `node` trực tiếp

### Cú pháp:

```powershell
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js <command>
```

### Ví dụ:

```powershell
# Xem help
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js --help

# Khởi tạo dự án
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js init

# Validate blueprint
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js validate

# Tạo AI prompt
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js ai-prompt
```

---

## 💡 CÁCH 3: Tạo alias trong PowerShell (CHO NGƯỜI NÂNG CAO)

### Bước 1: Mở PowerShell profile

```powershell
notepad $PROFILE
```

Nếu báo lỗi file không tồn tại:

```powershell
New-Item -Path $PROFILE -Type File -Force
notepad $PROFILE
```

### Bước 2: Thêm function vào profile

```powershell
function sbbl {
    node "d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js" $args
}
```

### Bước 3: Reload profile

```powershell
. $PROFILE
```

### Bước 4: Dùng lệnh `sbbl` như bình thường

```powershell
sbbl --help
sbbl init
sbbl validate
sbbl ai-prompt
```

---

## 🎬 DEMO THỰC TẾ - COPY VÀ CHẠY

### Demo 1: Xem help

```powershell
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
.\sbbl.bat --help
```

**Kết quả mong đợi:**
```
Usage: sbbl [options] [command]

SBBL CLI - Create high-quality Blueprints

Options:
  -V, --version               output the version number
  -h, --help                  display help for command

Commands:
  init                        Initialize a new SBBL Blueprint
  validate [file]             Validate an existing Blueprint file
  ai-prompt [options] [file]  Generate a System Prompt for AI based on the Blueprint
  template                    Manage SBBL templates
  help [command]              display help for command
```

---

### Demo 2: Tạo dự án mới

```powershell
# Tạo thư mục demo
cd d:\Github\DiogenesAI\SBBL
mkdir demo-project
cd demo-project

# Chạy init
..\sbbl-cli\sbbl.bat init
```

**CLI sẽ hỏi các câu hỏi. Ví dụ trả lời:**

```
? Project Name: My Todo App
? Project Vision: A modern todo application with AI-powered task management
? Tech Stack: React, TypeScript, TailwindCSS, Supabase
? Architecture: Client-Server with REST API and real-time sync
? Timeline (Start): 2024-12-01
? Timeline (End): 2025-01-15
```

**Kết quả:**
- ✅ File `BLUEPRINT.md` được tạo
- ✅ Thư mục `memory/` với 3 subfolder
- ✅ File `.sbblrc`

---

### Demo 3: Validate blueprint

```powershell
# Từ thư mục dự án
..\sbbl-cli\sbbl.bat validate

# Hoặc validate file cụ thể
..\sbbl-cli\sbbl.bat validate BLUEPRINT.md
```

**Kết quả mong đợi:**
```
✅ Blueprint validation passed!
All required sections are present and valid.
```

---

### Demo 4: Tạo AI prompt

```powershell
..\sbbl-cli\sbbl.bat ai-prompt
```

**Kết quả:**
- ✅ Prompt được tạo
- ✅ Tự động copy vào clipboard
- ✅ Hiển thị preview

**Bước tiếp theo:**
1. Mở ChatGPT/Claude
2. Paste (Ctrl+V)
3. Bắt đầu code!

---

### Demo 5: Xem templates

```powershell
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
.\sbbl.bat template list
```

---

## 📝 WORKFLOW HOÀN CHỈNH

```powershell
# 1. Tạo dự án
cd d:\Github\DiogenesAI\SBBL
mkdir awesome-app
cd awesome-app

# 2. Init SBBL
..\sbbl-cli\sbbl.bat init
# → Trả lời các câu hỏi

# 3. Kiểm tra kết quả
dir
# → Thấy BLUEPRINT.md, memory/, .sbblrc

# 4. Validate
..\sbbl-cli\sbbl.bat validate

# 5. Tạo AI prompt
..\sbbl-cli\sbbl.bat ai-prompt

# 6. Mở ChatGPT và paste (Ctrl+V)

# 7. Bắt đầu code!
```

---

## ❓ TROUBLESHOOTING

### Lỗi: "node: command not found"

**Giải pháp:** Cài đặt Node.js từ https://nodejs.org

### Lỗi: "Cannot find module"

**Giải pháp:**
```powershell
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm install
npm run build
```

### Lỗi: "sbbl.bat is not recognized"

**Giải pháp:** Dùng đường dẫn đầy đủ:
```powershell
d:\Github\DiogenesAI\SBBL\sbbl-cli\sbbl.bat init
```

### File `sbbl.bat` không tồn tại

**Giải pháp:** File đã được tạo sẵn. Nếu không có, tạo file `sbbl.bat` với nội dung:
```batch
@echo off
node "%~dp0dist\index.js" %*
```

---

## 🎯 TÓM TẮT

### Cách đơn giản nhất để chạy SBBL:

```powershell
# 1. Build (1 lần duy nhất)
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm install
npm run build

# 2. Dùng sbbl.bat
.\sbbl.bat --help
.\sbbl.bat init
.\sbbl.bat validate
.\sbbl.bat ai-prompt
```

### Hoặc dùng node trực tiếp:

```powershell
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js init
```

---

## ✅ CHECKLIST

- [x] Build dự án: `npm run build`
- [x] Test CLI: `.\sbbl.bat --help`
- [x] Tạo dự án demo
- [x] Chạy init
- [x] Validate blueprint
- [x] Tạo AI prompt
- [x] Paste vào ChatGPT

---

**Bây giờ bạn có thể chạy SBBL rồi! 🎉**

*Nếu vẫn gặp vấn đề, hãy chạy lệnh và gửi cho tôi error message.*
