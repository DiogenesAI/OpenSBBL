# 📘 HƯỚNG DẪN SỬ DỤNG SBBL CLI

> **Hướng dẫn chi tiết từng bước để chạy và sử dụng SBBL CLI**

---

## 📋 MỤC LỤC

1. [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
2. [Cài đặt và Thiết lập](#cài-đặt-và-thiết-lập)
3. [Cách sử dụng các lệnh](#cách-sử-dụng-các-lệnh)
4. [Ví dụ thực tế](#ví-dụ-thực-tế)
5. [Khắc phục sự cố](#khắc-phục-sự-cố)

---

## 🔧 YÊU CẦU HỆ THỐNG

Trước khi bắt đầu, đảm bảo máy tính của bạn đã cài đặt:

- ✅ **Node.js** phiên bản 18 trở lên
- ✅ **npm** hoặc **pnpm** (đi kèm với Node.js)
- ✅ **Git** (để clone repository)

### Kiểm tra phiên bản:

```bash
node --version    # Phải >= v18.0.0
npm --version     # Bất kỳ phiên bản nào
```

---

## 🚀 CÀI ĐẶT VÀ THIẾT LẬP

### Bước 1: Di chuyển vào thư mục dự án

```bash
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
```

### Bước 2: Cài đặt các dependencies (nếu chưa cài)

```bash
npm install
```

### Bước 3: Build dự án

```bash
npm run build
```

**Lệnh này sẽ:**
- Biên dịch TypeScript thành JavaScript
- Tạo thư mục `dist/` chứa code đã build
- Copy các template files vào `dist/templates/`

### Bước 4: Link CLI globally (Tùy chọn nhưng khuyến nghị)

```bash
npm link
```

**Sau khi link, bạn có thể sử dụng lệnh `sbbl` ở bất kỳ đâu!**

---

## 🎯 CÁCH SỬ DỤNG CÁC LỆNH

### 📌 Lệnh 1: `sbbl init` - Khởi tạo dự án mới

**Mục đích:** Tạo một dự án SBBL mới với cấu trúc chuẩn

**Cách dùng:**

```bash
# Di chuyển đến thư mục dự án của bạn
cd path/to/your/project

# Chạy lệnh init
sbbl init
```

**Quá trình sẽ diễn ra:**

1. CLI sẽ hỏi bạn các câu hỏi về dự án:
   - 📝 Tên dự án (Project Name)
   - 🎯 Tầm nhìn dự án (Vision)
   - 💻 Tech Stack (công nghệ sử dụng)
   - 🏗️ Kiến trúc (Architecture)
   - 📅 Timeline (thời gian dự kiến)

2. CLI sẽ tự động tạo:
   - ✅ File `BLUEPRINT.md` (bản thiết kế dự án)
   - ✅ Thư mục `memory/` với cấu trúc:
     ```
     memory/
     ├── 0_past/      # Lịch sử, công việc đã hoàn thành
     ├── 1_present/   # Công việc hiện tại
     └── 2_future/    # Kế hoạch tương lai
     ```
   - ✅ File `.sbblrc` (cấu hình dự án)

---

### 📌 Lệnh 2: `sbbl validate` - Kiểm tra Blueprint

**Mục đích:** Đảm bảo file BLUEPRINT.md của bạn tuân thủ chuẩn SBBL

**Cách dùng:**

```bash
# Kiểm tra BLUEPRINT.md trong thư mục hiện tại
sbbl validate

# Hoặc chỉ định đường dẫn cụ thể
sbbl validate path/to/BLUEPRINT.md
```

**CLI sẽ kiểm tra:**
- ✅ Các section bắt buộc có đầy đủ không (Vision, Tech Stack, Architecture...)
- ✅ Nội dung có đủ chi tiết không (ví dụ: Vision phải >= 50 ký tự)
- ✅ Cú pháp Markdown có đúng không
- ✅ Định dạng ngày tháng có hợp lệ không

**Kết quả:**
- ✅ **PASS**: Blueprint hợp lệ, sẵn sàng sử dụng
- ❌ **FAIL**: Hiển thị danh sách lỗi cần sửa

---

### 📌 Lệnh 3: `sbbl ai-prompt` - Tạo System Prompt cho AI

**Mục đích:** Chuyển đổi Blueprint thành một "lệnh" tối ưu cho AI (ChatGPT, Claude, Gemini)

**Cách dùng:**

```bash
sbbl ai-prompt
```

**Quá trình:**

1. CLI đọc file `BLUEPRINT.md`
2. Tạo một System Prompt được tối ưu hóa
3. **Tự động copy vào clipboard** của bạn
4. Hiển thị preview của prompt

**Cách sử dụng kết quả:**

1. Chạy `sbbl ai-prompt`
2. Mở ChatGPT/Claude/Gemini
3. Paste (Ctrl+V) vào chat
4. AI sẽ hiểu rõ dự án của bạn như một Senior Developer!

---

### 📌 Lệnh 4: `sbbl template` - Quản lý Templates

**Mục đích:** Xem và sử dụng các template có sẵn

**Cách dùng:**

```bash
# Liệt kê tất cả templates
sbbl template list

# Xem chi tiết một template
sbbl template show blueprint

# Sử dụng template để tạo file mới
sbbl template use blueprint --output MY_BLUEPRINT.md
```

---

## 💡 VÍ DỤ THỰC TẾ

### Ví dụ 1: Tạo dự án Todo App

```bash
# Bước 1: Tạo thư mục dự án
mkdir my-todo-app
cd my-todo-app

# Bước 2: Khởi tạo SBBL
sbbl init

# Trả lời các câu hỏi:
# - Project Name: My Todo App
# - Vision: A simple and elegant todo application with AI-powered task suggestions
# - Tech Stack: React, TypeScript, TailwindCSS, Supabase
# - Architecture: Client-Server with RESTful API
# - Timeline: 4 weeks

# Bước 3: Kiểm tra Blueprint
sbbl validate

# Bước 4: Tạo AI prompt
sbbl ai-prompt

# Bước 5: Paste vào ChatGPT và bắt đầu code!
```

### Ví dụ 2: Kiểm tra Blueprint có sẵn

```bash
# Di chuyển đến dự án có sẵn
cd d:\Github\DiogenesAI\SBBL\docs

# Kiểm tra blueprint
sbbl validate BLUEPRINT.md

# Nếu có lỗi, sửa theo hướng dẫn
# Sau đó validate lại
sbbl validate BLUEPRINT.md
```

---

## 🛠️ KHẮC PHỤC SỰ CỐ

### ❌ Lỗi: "sbbl: command not found"

**Nguyên nhân:** Chưa link CLI globally

**Giải pháp:**

```bash
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm link
```

**Hoặc chạy trực tiếp:**

```bash
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js init
```

---

### ❌ Lỗi: "Cannot find module..."

**Nguyên nhân:** Chưa cài đặt dependencies

**Giải pháp:**

```bash
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm install
npm run build
```

---

### ❌ Lỗi: "BLUEPRINT.md not found"

**Nguyên nhân:** Đang ở sai thư mục hoặc chưa tạo blueprint

**Giải pháp:**

```bash
# Tạo blueprint mới
sbbl init

# Hoặc chỉ định đường dẫn cụ thể
sbbl validate path/to/BLUEPRINT.md
```

---

### ❌ Lỗi: "Template not found"

**Nguyên nhân:** Templates chưa được copy vào thư mục dist

**Giải pháp:**

```bash
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm run build
```

---

## 🎓 TIPS & TRICKS

### 1. Sử dụng chế độ Development

Nếu bạn đang phát triển/sửa đổi CLI:

```bash
npm run dev
```

Lệnh này sẽ:
- Tự động rebuild khi code thay đổi
- Chạy CLI ngay sau khi build xong

### 2. Chạy Tests

```bash
npm test
```

### 3. Xem help của từng lệnh

```bash
sbbl --help
sbbl init --help
sbbl validate --help
sbbl ai-prompt --help
```

---

## 📚 TÀI LIỆU THAM KHẢO

- 📖 [SBBL Methodology](../docs/sbbl-methodology.md)
- 📖 [CLI Specification](../docs/cli-specification.md)
- 📖 [Blueprint Template](./src/templates/blueprint.md)

---

## 🤝 HỖ TRỢ

Nếu gặp vấn đề, hãy:

1. Kiểm tra lại [Khắc phục sự cố](#khắc-phục-sự-cố)
2. Xem [Issues trên GitHub](https://github.com/your-repo/issues)
3. Tạo issue mới với thông tin chi tiết

---

**Chúc bạn thành công với SBBL! 🚀**
