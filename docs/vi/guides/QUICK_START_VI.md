# ⚡ QUICK START - SBBL CLI

> **Hướng dẫn nhanh 5 phút để bắt đầu với SBBL CLI**

---

## 🚀 CÁCH CHẠY NHANH NHẤT

### Bước 1: Cài đặt (chỉ làm 1 lần)

```bash
cd d:\Github\DiogenesAI\SBBL\sbbl-cli
npm install
npm run build
npm link
```

### Bước 2: Sử dụng ngay

```bash
# Tạo dự án mới
sbbl init

# Kiểm tra blueprint
sbbl validate

# Tạo AI prompt
sbbl ai-prompt
```

---

## 📝 CÁC LỆNH CHÍNH

| Lệnh | Mô tả | Ví dụ |
|------|-------|-------|
| `sbbl init` | Tạo dự án SBBL mới | `sbbl init` |
| `sbbl validate` | Kiểm tra BLUEPRINT.md | `sbbl validate` |
| `sbbl ai-prompt` | Tạo prompt cho AI | `sbbl ai-prompt` |
| `sbbl template list` | Xem danh sách template | `sbbl template list` |

---

## 🎯 WORKFLOW CHUẨN

```bash
# 1. Tạo thư mục dự án
mkdir my-project
cd my-project

# 2. Khởi tạo SBBL
sbbl init
# → Trả lời các câu hỏi về dự án

# 3. Kiểm tra blueprint
sbbl validate
# → Đảm bảo không có lỗi

# 4. Tạo AI prompt
sbbl ai-prompt
# → Tự động copy vào clipboard

# 5. Paste vào ChatGPT/Claude
# → Bắt đầu code với AI!
```

---

## 🔧 CHẠY TRỰC TIẾP (không cần npm link)

Nếu không muốn link globally:

```bash
# Thay vì: sbbl init
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js init

# Thay vì: sbbl validate
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js validate

# Thay vì: sbbl ai-prompt
node d:\Github\DiogenesAI\SBBL\sbbl-cli\dist\index.js ai-prompt
```

---

## ❓ KHẮC PHỤC LỖI NHANH

### Lỗi: "sbbl: command not found"
```bash
npm link
```

### Lỗi: "Cannot find module"
```bash
npm install
npm run build
```

### Lỗi: "Template not found"
```bash
npm run build
```

---

## 📚 TÀI LIỆU ĐẦY ĐỦ

Xem file `HUONG_DAN_SU_DUNG.md` để có hướng dẫn chi tiết hơn.

---

**Happy Coding! 🎉**
