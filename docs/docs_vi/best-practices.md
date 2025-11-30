# SBBL Best Practices (Thực Hành Tốt Nhất)

## 🎯 Nguyên Tắc Cốt Lõi

### 1. Document First, Code Later (Tài Liệu Trước, Code Sau)
**Không bao giờ** viết code trước khi có Blueprint hoàn chỉnh.

**Tại sao?**
- AI cần context đầy đủ để generate code chính xác
- Giảm 70% thời gian debug và refactor
- Team đồng bộ (alignment) từ ngày đầu tiên

**Checklist trước khi code**:
- [ ] Vision statement rõ ràng (ai, cái gì, tại sao)
- [ ] Tech stack được chọn và có lý do chính đáng
- [ ] Database schema đầy đủ với các mối quan hệ (relationships)
- [ ] Business rules được ghi chép lại
- [ ] Implementation roadmap có timeline cụ thể

---

## 📝 Viết Blueprint Hiệu Quả

### Vision Statement (Tuyên Bố Tầm Nhìn)

**❌ Tệ**:
```
"Một ứng dụng quản lý công việc"
```

**✅ Tốt**:
```
TaskFlow là nền tảng quản lý công việc thời gian thực được thiết kế cho các 
team làm việc từ xa (10-50 người) gặp khó khăn trong việc phối hợp múi giờ. 
Nó giải quyết vấn đề hiển thị công việc giữa các team phân tán bằng cách cung cấp 
cập nhật tức thì, thông báo thông minh và lập lịch theo múi giờ.

Người dùng mục tiêu: Project managers và team leads trong các startup công nghệ.
Chỉ số thành công: Giảm 50% các cuộc họp "cập nhật trạng thái".
```

**Công thức**:
```
[Tên Sản Phẩm] là một [loại] được thiết kế cho [đối tượng mục tiêu] người [điểm đau].
Nó giải quyết [vấn đề] bằng cách [cách tiếp cận giải pháp].

Người dùng mục tiêu: [vai trò cụ thể]
Chỉ số thành công: [kết quả đo lường được]
```

---

### Lựa Chọn Tech Stack

**Nguyên tắc chọn Tech Stack**:

1. **Bắt đầu với các ràng buộc**:
   - Chuyên môn của team (TypeScript? Python?)
   - Ngân sách (serverless vs dedicated servers)
   - Timeline (stack đã được kiểm chứng vs thử nghiệm)
   - Yêu cầu quy mô (100 users vs 1M users)

2. **Khuyến nghị mặc định**:
   - **MVP (< 3 tháng)**: Next.js + Supabase
   - **Hiệu năng cao**: Go + PostgreSQL
   - **AI-heavy**: Python + FastAPI + Pinecone
   - **Mobile**: React Native + Supabase

3. **Ghi rõ TẠI SAO**:
   ```markdown
   ## Tech Stack
   
   **Frontend**: Next.js 14
   - Lý do: Team biết React, cần SSR cho SEO, deploy nhanh trên Vercel
   
   **Database**: Supabase
   - Lý do: Tích hợp sẵn auth, real-time, gói free hào phóng cho MVP
   ```

---

### Database Schema

**Best Practices**:

1. **Luôn bao gồm**:
   - Primary keys (khuyên dùng UUID)
   - Foreign keys với hành vi ON DELETE
   - Timestamps (created_at, updated_at)
   - Indexes cho các truy vấn phổ biến

2. **Ví dụ - Schema Tốt**:
   ```sql
   -- Bảng Users
   CREATE TABLE users (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     email VARCHAR(255) UNIQUE NOT NULL,
     full_name VARCHAR(255),
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Bảng Projects
   CREATE TABLE projects (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     owner_id UUID REFERENCES users(id) ON DELETE CASCADE,
     name VARCHAR(255) NOT NULL,
     status VARCHAR(50) DEFAULT 'active',
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Indexes
   CREATE INDEX idx_projects_owner ON projects(owner_id);
   CREATE INDEX idx_projects_status ON projects(status);
   ```

3. **Ghi chép mối quan hệ**:
   ```markdown
   ## Relationships
   - users 1:N projects (một user sở hữu nhiều project)
   - projects 1:N tasks
   - users N:M projects (thông qua project_members để collaboration)
   ```

---

### Business Rules (Quy Tắc Nghiệp Vụ)

**Format chuẩn**:
```markdown
## Business Rules

### Các Hạng User
- **Free**: Tối đa 3 projects, 100 tasks/project
- **Pro** ($19/tháng): Không giới hạn projects, không giới hạn tasks
- **Enterprise**: Giới hạn tùy chỉnh, hỗ trợ riêng

### Lưu Trữ Dữ Liệu
- Free users: Lịch sử 30 ngày
- Pro users: Lịch sử 1 năm
- Deleted items: Xóa mềm (soft delete), xóa vĩnh viễn sau 90 ngày

### Rate Limits
- API: 100 requests/phút mỗi user
- File uploads: Tối đa 10MB mỗi file, tổng 100MB mỗi user

### Bảo Mật
- Session timeout: 30 phút không hoạt động
- Mật khẩu: Tối thiểu 8 ký tự, phải bao gồm số + ký tự đặc biệt
- 2FA: Tùy chọn cho Free, bắt buộc cho Enterprise
```

---

## 🤖 Làm Việc Với AI

### Soạn Thảo AI Prompts

**Cấu trúc chuẩn**:
```
Bạn là một [vai trò].

CONTEXT:
[Dán toàn bộ nội dung BLUEPRINT.md vào đây]

TASK:
Implement [tính năng cụ thể] tuân theo các yêu cầu sau:
1. [Yêu cầu 1]
2. [Yêu cầu 2]

CONSTRAINTS:
- Sử dụng TypeScript
- Tuân thủ chính xác database schema
- Bao gồm xử lý lỗi
- Thêm JSDoc comments

OUTPUT FORMAT:
Cung cấp code hoàn chỉnh, sẵn sàng cho production với:
- Cấu trúc file
- Tất cả imports cần thiết
- Định nghĩa Type
- Xử lý lỗi
```

**Ví dụ - Prompt Tốt**:
```
Bạn là một Senior Full-Stack Developer chuyên về Next.js và Supabase.

CONTEXT:
[Nội dung Blueprint...]

TASK:
Implement luồng xác thực người dùng bao gồm:
1. Đăng ký với xác thực email
2. Đăng nhập với email/password
3. OAuth (Google, GitHub)
4. Luồng reset password

CONSTRAINTS:
- Sử dụng Supabase Auth
- TypeScript với strict mode
- Tuân theo quy ước Next.js 14 App Router
- Bao gồm trạng thái loading và xử lý lỗi
- Thêm Zod validation cho forms

OUTPUT FORMAT:
Cung cấp:
1. Cấu trúc file (file nào cần tạo/sửa)
2. Code hoàn chỉnh cho mỗi file
3. Biến môi trường cần thiết
4. Hướng dẫn test
```

---

### Lặp Lại Với AI (Iterating)

**Workflow tốt nhất**:

1. **Lần 1 - Generate**:
   - Cung cấp blueprint đầy đủ
   - Yêu cầu implementation hoàn chỉnh
   - Review kết quả cẩn thận

2. **Lần 2 - Refine**:
   ```
   Code trông ổn, nhưng vui lòng:
   1. Thêm loading skeletons để UX tốt hơn
   2. Implement optimistic updates cho danh sách task
   3. Thêm error boundaries
   ```

3. **Lần 3 - Test**:
   ```
   Generate unit tests cho:
   - Luồng xác thực người dùng
   - Các thao tác CRUD task
   - Edge cases (lỗi mạng, dữ liệu không hợp lệ)
   ```

4. **Theo dõi các lần lặp**:
   - Ghi lại những gì hiệu quả
   - Ghi chú những gì cần sửa thủ công
   - Cập nhật blueprint nếu giả định ban đầu sai

---

## 📊 Đo Lường Thành Công

### Các Metrics Chính Cần Theo Dõi

1. **Tốc Độ Phát Triển**:
   - Thời gian từ blueprint đến lần deploy đầu tiên
   - Số lần lặp lại với AI cần thiết
   - Sửa lỗi thủ công cần thiết (%)

2. **Chất Lượng Code**:
   - TypeScript coverage (mục tiêu: 100%)
   - Test coverage (mục tiêu: >80%)
   - Lỗi Linting (mục tiêu: 0)

3. **Chất Lượng Blueprint**:
   - Độ chính xác của AI lần đầu (mục tiêu: >70%)
   - Số lần sửa đổi blueprint
   - Số câu hỏi/làm rõ cần thiết từ team

4. **Thành Công Của Sản Phẩm**:
   - Tỷ lệ chấp nhận của người dùng
   - Metrics sử dụng tính năng
   - Điểm phản hồi người dùng

---

## 🚨 Các Cạm Bẫy Thường Gặp

### 1. Tầm Nhìn Mơ Hồ
**Vấn đề**: "Xây dựng một ứng dụng mạng xã hội"

**Giải pháp**: 
```
Xây dựng InstaPet - một bản sao Instagram dành riêng cho chủ nuôi thú cưng 
để chia sẻ ảnh hàng ngày, kết nối với các chủ nuôi khác trong thành phố, 
và khám phá các địa điểm thân thiện với thú cưng.

Mục tiêu: Chủ nuôi thú cưng 25-45 tuổi ở khu vực thành thị.
Điểm khác biệt: Meetups thú cưng dựa trên vị trí + gợi ý bác sĩ thú y.
```

### 2. Thiếu Business Rules
**Vấn đề**: AI generate code mà không có validation

**Giải pháp**: Ghi lại mọi ràng buộc:
```
- Username: 3-20 ký tự, chỉ chữ cái, số và gạch dưới
- Bio: Tối đa 500 ký tự
- Ảnh profile: Tối đa 5MB, chỉ JPG/PNG
- Bài đăng: Tối đa 10 ảnh mỗi bài
- Free users: Tối đa 100 bài đăng
```

### 3. Database Schema Không Đầy Đủ
**Vấn đề**: AI "ảo giác" ra cấu trúc bảng

**Giải pháp**: Cung cấp SQL đầy đủ:
```sql
-- Không chỉ tên bảng, mà là câu lệnh CREATE đầy đủ
-- Bao gồm tất cả cột, kiểu dữ liệu, ràng buộc
-- Ghi rõ mối quan hệ
-- Thêm indexes cho hiệu năng
```

### 4. Không Có Roadmap Triển Khai
**Vấn đề**: Không rõ cần xây dựng cái gì trước

**Giải pháp**: Ưu tiên tính năng:
```
## MVP (Tuần 1-2)
- [ ] Auth (chỉ email)
- [ ] Tạo bài đăng (một ảnh)
- [ ] Xem feed
- [ ] Profile cơ bản

## V1.1 (Tuần 3-4)
- [ ] OAuth (Google)
- [ ] Nhiều ảnh mỗi bài
- [ ] Bình luận
- [ ] Likes

## V2.0 (Tháng 2)
- [ ] Tag địa điểm
- [ ] Pet meetups
- [ ] Nhắn tin trực tiếp
```

---

## 🎨 UI/UX Best Practices

### Design System trong Blueprint

Bao gồm design tokens:
```markdown
## Design System

### Màu Sắc
- Primary: #FF6B6B (Đỏ San Hô)
- Secondary: #4ECDC4 (Ngọc Lam)
- Background: #F7F7F7 (Xám Nhạt)
- Text: #2C3E50 (Xám Xanh Đậm)

### Typography
- Headings: Inter Bold
- Body: Inter Regular
- Code: JetBrains Mono

### Spacing
- Đơn vị cơ sở: 8px
- Kích thước: xs(4px), sm(8px), md(16px), lg(24px), xl(32px)

### Components
- Buttons: Bo góc (8px), bóng đổ khi hover
- Cards: Nền trắng, bóng nhẹ, bo góc 12px
- Inputs: Viền khi focus, trạng thái lỗi màu đỏ
```

**Tại sao?** AI có thể generate code UI nhất quán khớp với thiết kế của bạn.

---

## 🔒 Bảo Mật Best Practices

### Luôn Bao Gồm Trong Blueprint

```markdown
## Yêu Cầu Bảo Mật

### Xác Thực
- Sử dụng Supabase Auth (hoặc chỉ định thay thế)
- Implement Row Level Security (RLS)
- Quản lý phiên: timeout 30 phút

### Bảo Vệ Dữ Liệu
- Mã hóa các trường nhạy cảm (ví dụ: thông tin thanh toán)
- Sanitize tất cả đầu vào người dùng
- Sử dụng parameterized queries (ngăn chặn SQL injection)

### Bảo Mật API
- Rate limiting: 100 req/phút mỗi user
- Xoay vòng API key: Mỗi 90 ngày
- CORS: Chỉ whitelist các domain cụ thể

### Tuân Thủ
- GDPR: Xuất + xóa dữ liệu theo yêu cầu
- Chính sách quyền riêng tư: Link ở footer
- Cookie consent: Bắt buộc cho người dùng EU
```

---

## 📈 Mẹo Tối Ưu Hóa

### 1. Bắt Đầu Nhỏ, Lặp Lại Nhanh
- MVP trong 2 tuần > Sản phẩm hoàn hảo trong 6 tháng
- Ra mắt chỉ với các tính năng cốt lõi
- Thêm tính năng dựa trên phản hồi người dùng

### 2. Sử Dụng Templates
- Đừng phát minh lại cái bánh xe
- Tùy chỉnh các templates đã được kiểm chứng
- Xây dựng thư viện template của riêng bạn

### 3. Tự Động Hóa Mọi Thứ
- Sử dụng CLI để tạo blueprint
- Auto-deploy khi push (Vercel, Railway)
- Testing tự động trong CI/CD

### 4. Ghi Chép Khi Làm
- Cập nhật blueprint khi yêu cầu thay đổi
- Theo dõi các mẫu AI prompt hiệu quả
- Xây dựng cơ sở kiến thức cho team

---

## 🎯 Checklist: Sẵn Sàng Để Build?

Trước khi yêu cầu AI code, hãy xác minh:

- [ ] Vision cụ thể (ai, cái gì, tại sao, chỉ số thành công)
- [ ] Tech stack đã chọn và có lý do
- [ ] Database schema hoàn chỉnh với SQL
- [ ] Tất cả mối quan hệ được ghi chép
- [ ] Business rules toàn diện
- [ ] Implementation roadmap được ưu tiên
- [ ] Design system được định nghĩa (màu sắc, fonts, spacing)
- [ ] Yêu cầu bảo mật được chỉ định
- [ ] Metrics thành công được xác định

**Nếu đã check hết**: Bạn đã sẵn sàng! 🚀

**Nếu thiếu mục nào**: Dành thêm 30 phút cho blueprint. Nó sẽ tiết kiệm cho bạn nhiều ngày sau này.

---

## 📚 Tài Nguyên

- [Phương Pháp Luận SBBL](./methodology.md)
- [Thư Viện Template](./templates.md)
- [Hướng Dẫn CLI Tool](./cli-specification.md)
- [Hướng Dẫn Web App](./web-app-specification.md)

---

**Ghi nhớ**: 1 giờ làm blueprint = 10 giờ tiết kiệm được khi phát triển.
