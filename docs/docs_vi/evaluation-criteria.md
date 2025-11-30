# Tiêu Chí Đánh Giá SBBL

## 🎯 Mục Đích

Hệ thống đánh giá này được thiết kế để đo lường chất lượng của cả **Blueprint** (đầu vào) và **Code Implementation** (đầu ra). Mục tiêu là đảm bảo AI có đủ context để làm việc hiệu quả và kết quả đạt chuẩn production.

---

## 📊 1. Đánh Giá Blueprint (Blueprint Score)

**Thang điểm**: 0 - 100
**Mục tiêu**: > 85 điểm để bắt đầu code với AI.

### 1.1 Project Meta (10 điểm)
- [ ] **Tên dự án rõ ràng** (2đ)
- [ ] **Vision Statement**: Rõ ràng, ngắn gọn, nêu bật giá trị (4đ)
- [ ] **Target Audience**: Xác định rõ người dùng là ai (2đ)
- [ ] **Success Metrics**: Có chỉ số đo lường thành công (2đ)

### 1.2 Tech Stack (15 điểm)
- [ ] **Frontend**: Framework, UI library, State management (4đ)
- [ ] **Backend**: Language, Framework, API style (REST/GraphQL) (4đ)
- [ ] **Database**: Loại DB, ORM/Query builder (4đ)
- [ ] **Deployment/Infra**: Hosting, CI/CD, Services (3đ)

### 1.3 Architecture (20 điểm)
- [ ] **System Diagram/Flow**: Mô tả luồng dữ liệu (5đ)
- [ ] **Authentication**: Cơ chế auth rõ ràng (5đ)
- [ ] **Integrations**: Danh sách các dịch vụ bên thứ 3 (5đ)
- [ ] **Security**: Các biện pháp bảo mật cơ bản (5đ)

### 1.4 Database Schema (25 điểm)
- [ ] **Tables**: Danh sách bảng đầy đủ (5đ)
- [ ] **Columns**: Kiểu dữ liệu, constraints (NOT NULL, UNIQUE) (5đ)
- [ ] **Relationships**: FKs, quan hệ 1:1, 1:N, N:M (5đ)
- [ ] **SQL**: Có câu lệnh CREATE TABLE mẫu (5đ)
- [ ] **Indexes**: Có định nghĩa index cho hiệu năng (5đ)

### 1.5 Implementation Roadmap (15 điểm)
- [ ] **Phân chia giai đoạn**: Tuần/Sprint rõ ràng (5đ)
- [ ] **Thứ tự hợp lý**: Nền tảng -> Core -> Polish (5đ)
- [ ] **Tasks cụ thể**: Checklist chi tiết cho từng giai đoạn (5đ)

### 1.6 Business Rules (15 điểm)
- [ ] **User Tiers/Roles**: Phân quyền rõ ràng (5đ)
- [ ] **Limits/Constraints**: Giới hạn hệ thống (5đ)
- [ ] **Logic nghiệp vụ**: Các quy tắc xử lý dữ liệu (5đ)

---

## 💻 2. Đánh Giá Code (Implementation Score)

**Thang điểm**: 0 - 100
**Mục tiêu**: > 90 điểm để deploy.

### 2.1 Tính Đúng Đắn (Correctness) (30 điểm)
- [ ] **Chạy được**: Build và start không lỗi (10đ)
- [ ] **Đúng chức năng**: Thực hiện đúng yêu cầu trong Blueprint (10đ)
- [ ] **Không lỗi logic**: Xử lý đúng các edge cases (10đ)

### 2.2 Chất Lượng Code (Code Quality) (25 điểm)
- [ ] **Type Safety**: Không có `any`, types đầy đủ (TypeScript) (10đ)
- [ ] **Clean Code**: Tên biến rõ ràng, hàm ngắn gọn, DRY (5đ)
- [ ] **Structure**: Cấu trúc thư mục hợp lý, modular (5đ)
- [ ] **Comments**: JSDoc cho các hàm phức tạp (5đ)

### 2.3 Testing (20 điểm)
- [ ] **Unit Tests**: Coverage > 80% cho core logic (10đ)
- [ ] **Integration Tests**: Test các luồng chính (API, DB) (5đ)
- [ ] **E2E Tests**: Test các user flows quan trọng (5đ)

### 2.4 Hiệu Năng & Bảo Mật (15 điểm)
- [ ] **Performance**: Không có N+1 queries, lazy loading (5đ)
- [ ] **Security**: Sanitize input, Auth checks, RLS (5đ)
- [ ] **Best Practices**: Sử dụng đúng các features của framework (5đ)

### 2.5 Tài Liệu (Documentation) (10 điểm)
- [ ] **README**: Hướng dẫn cài đặt và chạy (5đ)
- [ ] **API Docs**: Mô tả các endpoints (nếu có) (5đ)

---

## 🤖 3. Đánh Giá Hiệu Quả AI (AI Efficiency)

Chỉ số này đo lường mức độ hiệu quả của việc sử dụng AI trong dự án.

### Metrics
1. **Zero-shot Accuracy (%)**: Tỷ lệ code chạy đúng ngay lần đầu generate.
   - > 80%: Xuất sắc
   - 60-80%: Tốt
   - < 60%: Cần cải thiện Blueprint

2. **Iteration Count**: Số lần phải prompt lại để hoàn thành 1 task.
   - 1 lần: Xuất sắc
   - 2-3 lần: Bình thường
   - > 3 lần: Prompt hoặc Context chưa tốt

3. **Human Intervention (%)**: Tỷ lệ code phải sửa thủ công.
   - < 10%: Xuất sắc
   - 10-30%: Chấp nhận được
   - > 30%: Cần xem lại quy trình

---

## 🏆 Hệ Thống Xếp Hạng (Ranking System)

Dựa trên điểm trung bình của Blueprint và Code:

| Hạng | Điểm TB | Mô Tả | Hành Động |
|------|---------|-------|-----------|
| **S** (Elite) | 95-100 | Hoàn hảo, sẵn sàng scale | Deploy ngay lập tức |
| **A** (High) | 85-94 | Chất lượng cao, lỗi nhỏ | Review nhẹ và Deploy |
| **B** (Good) | 70-84 | Đạt chuẩn MVP, cần polish | Refactor các phần yếu |
| **C** (Fair) | 50-69 | Chạy được nhưng rủi ro | Cần refactor lớn |
| **D** (Poor) | < 50 | Không đạt chuẩn | Viết lại Blueprint |

---

## 🛠️ Công Cụ Đánh Giá Tự Động

Chúng tôi đang phát triển công cụ `sbbl evaluate` để tự động chấm điểm:

```bash
# Đánh giá Blueprint
sbbl evaluate blueprint ./BLUEPRINT.md

# Đánh giá Codebase
sbbl evaluate code ./src

# Đánh giá toàn bộ dự án
sbbl evaluate project .
```

**Output mẫu**:
```
📊 SBBL Evaluation Report
-------------------------
Blueprint Score: 92/100 (Grade A)
Code Score:      88/100 (Grade A)
-------------------------
Overall Grade:   A (High Quality)

Recommendations:
- [Code] Thêm unit tests cho `auth.service.ts` (+5 điểm)
- [Blueprint] Bổ sung indexes cho bảng `orders` (+3 điểm)
```
