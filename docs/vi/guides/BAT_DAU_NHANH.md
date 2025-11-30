# 🎯 HƯỚNG DẪN CHẠY SBBL - ĐƠN GIẢN NHẤT

> **Làm theo 3 bước này là chạy được ngay!**

---

## ✅ BƯỚC 1: CÀI ĐẶT (Chỉ làm 1 lần)

Mở **PowerShell** hoặc **Command Prompt**, chạy các lệnh sau:

```bash
# Di chuyển đến thư mục SBBL CLI
cd d:\Github\DiogenesAI\SBBL\sbbl-cli

# Cài đặt các thư viện cần thiết
npm install

# Build dự án (biên dịch code)
npm run build
```

**Xong! Bây giờ bạn có thể dùng file `sbbl.bat` để chạy CLI.**

> **Lưu ý:** Trên Windows, `npm link` không hoạt động tốt. Thay vào đó, dùng file `sbbl.bat` đã được tạo sẵn.

---

## ✅ BƯỚC 2: TẠO DỰ ÁN MỚI

```bash
# Tạo thư mục cho dự án của bạn
cd d:\Github\DiogenesAI\SBBL
mkdir my-project
cd my-project

# Khởi tạo SBBL (dùng file batch)
..\sbbl-cli\sbbl.bat init
```

> **Hoặc dùng đường dẫn đầy đủ:**
> ```bash
> d:\Github\DiogenesAI\SBBL\sbbl-cli\sbbl.bat init
> ```

**CLI sẽ hỏi bạn 5 câu hỏi:**

1. **Tên dự án** (ví dụ: My Todo App)
2. **Tầm nhìn** (mô tả dự án của bạn, ít nhất 50 ký tự)
3. **Tech Stack** (công nghệ sử dụng: React, Node.js, v.v.)
4. **Kiến trúc** (mô tả cách xây dựng hệ thống)
5. **Timeline** (thời gian bắt đầu và kết thúc)

**Sau khi trả lời, CLI sẽ tự động tạo:**
- ✅ File `BLUEPRINT.md` (bản thiết kế dự án)
- ✅ Thư mục `memory/` (quản lý tiến độ)
- ✅ File `.sbblrc` (cấu hình)

---

## ✅ BƯỚC 3: SỬ DỤNG VỚI AI

### 3.1. Tạo AI Prompt

```bash
# Từ thư mục dự án
..\sbbl-cli\sbbl.bat ai-prompt

# Hoặc dùng đường dẫn đầy đủ
d:\Github\DiogenesAI\SBBL\sbbl-cli\sbbl.bat ai-prompt
```

**Lệnh này sẽ:**
- Đọc file `BLUEPRINT.md`
- Tạo một "lệnh" tối ưu cho AI
- **Tự động copy vào clipboard**

### 3.2. Paste vào ChatGPT/Claude

1. Mở ChatGPT, Claude, hoặc Gemini
2. Paste (Ctrl+V)
3. AI sẽ hiểu rõ dự án của bạn!

### 3.3. Bắt đầu code

Bây giờ bạn có thể hỏi AI bất kỳ điều gì về dự án:
- "Tạo component Login cho tôi"
- "Viết API endpoint để lấy danh sách users"
- "Giải thích cách implement feature X"

AI sẽ trả lời dựa trên blueprint của bạn!

---

## 🎉 XONG RỒI!

Chỉ cần 3 bước:
1. ✅ Cài đặt (1 lần duy nhất)
2. ✅ Tạo dự án (`sbbl init`)
3. ✅ Dùng với AI (`sbbl ai-prompt`)

---

## 📝 CÁC LỆNH BỔ SUNG

### Kiểm tra Blueprint

```bash
.\sbbl-cli\sbbl.bat validate
# Hoặc: d:\Github\DiogenesAI\SBBL\sbbl-cli\sbbl.bat validate
```

Đảm bảo blueprint của bạn không có lỗi.

### Xem danh sách templates

```bash
.\sbbl-cli\sbbl.bat template list
# Hoặc: d:\Github\DiogenesAI\SBBL\sbbl-cli\sbbl.bat template list
```

### Xem help

```bash
.\sbbl-cli\sbbl.bat --help
.\sbbl-cli\sbbl.bat init --help
.\sbbl-cli\sbbl.bat validate --help
```

---

## ❓ GẶP VẤN ĐỀ?

### Lỗi: "sbbl: command not found"

**Giải pháp:** Dùng file batch thay vì lệnh `sbbl`:
```bash
# Dùng đường dẫn tương đối
.\sbbl-cli\sbbl.bat init

# Hoặc đường dẫn đầy đủ
d:\Github\DiogenesAI\SBBL\sbbl-cli\sbbl.bat init
```

### Lỗi: "Cannot find module"

**Giải pháp:**
```bash
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm install
npm run build
```

### Không muốn dùng `npm link`?

**Chạy trực tiếp:**
```bash
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js init
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js validate
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js ai-prompt
```

---

## 📚 TÀI LIỆU THÊM

Muốn tìm hiểu sâu hơn? Đọc các file sau:

- 📖 **[HUONG_DAN_SU_DUNG.md](./HUONG_DAN_SU_DUNG.md)** - Hướng dẫn chi tiết đầy đủ
- ⚡ **[QUICK_START_VI.md](./QUICK_START_VI.md)** - Quick start 5 phút
- 📝 **[CHEATSHEET.md](./CHEATSHEET.md)** - Tham khảo nhanh các lệnh
- 🎬 **[DEMO_SCRIPT.md](./DEMO_SCRIPT.md)** - Script demo chi tiết

---

## 💡 VÍ DỤ NHANH

```bash
# Tạo dự án Todo App
cd d:\Github\DiogenesAI\SBBL
mkdir todo-app
cd todo-app
..\sbbl-cli\sbbl.bat init

# Trả lời:
# - Project Name: Todo App
# - Vision: A simple todo app with AI features
# - Tech Stack: React, TypeScript, Supabase
# - Architecture: Client-Server with REST API
# - Timeline: 2024-12-01 to 2025-01-15

# Kiểm tra
..\sbbl-cli\sbbl.bat validate

# Tạo AI prompt
..\sbbl-cli\sbbl.bat ai-prompt

# Paste vào ChatGPT và bắt đầu!
```

---

**Chúc bạn thành công! 🚀**

*Nếu còn thắc mắc, hãy đọc file HUONG_DAN_SU_DUNG.md để có hướng dẫn chi tiết hơn.*
