# Đặc Tả Kỹ Thuật SBBL CLI

## 1. Tổng Quan
**Tên**: `sbbl-cli`
**Mục đích**: Công cụ dòng lệnh tương tác giúp người dùng tạo các tài liệu Blueprint chất lượng cao theo chuẩn SBBL.
**Ngôn ngữ**: TypeScript (Node.js)

---

## 2. Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Package Manager**: pnpm (khuyến nghị) hoặc npm
- **CLI Framework**: `commander`
- **Interactive UI**: `@clack/prompts` (cho giao diện đẹp, hiện đại)
- **Validation**: `zod`
- **Templating**: `handlebars`
- **File System**: `fs-extra`
- **Clipboard**: `clipboardy`
- **Bundler**: `tsup`
- **Testing**: `vitest`

---

## 3. Kiến Trúc

```
sbbl-cli/
├── src/
│   ├── commands/          # Các lệnh (init, validate, etc.)
│   ├── templates/         # Các file template mặc định (.md, .json)
│   ├── utils/             # Helper functions (fs, validation)
│   ├── core/              # Core logic (Blueprint generation)
│   └── index.ts           # Entry point
├── tests/                 # Unit & Integration tests
├── package.json
└── tsconfig.json
```

---

## 4. Các Lệnh (Commands)

### 4.1 `sbbl init`
Lệnh chính để bắt đầu tạo Blueprint mới.

**Luồng hoạt động (Workflow)**:
1. **Chào mừng**: Hiển thị banner SBBL.
2. **Project Name**: Hỏi tên dự án (mặc định: tên thư mục hiện tại).
3. **Template Selection**: Cho phép chọn từ danh sách template hoặc "Blank".
4. **Interactive Wizard** (nếu chọn Blank):
   - **Spark Phase**:
     - "Mô tả ý tưởng của bạn trong 1 câu?"
     - "Ai là người dùng mục tiêu?"
   - **Tech Stack**:
     - Multiselect: Frontend, Backend, Database, AI Provider.
   - **Architecture**:
     - "Bạn có cần Authentication không?"
     - "Bạn có cần Real-time features không?"
5. **Generation**:
   - Tạo file `BLUEPRINT.md`.
   - Tạo file `.sbblrc` (config file).
   - Tạo cấu trúc thư mục `memory`:
     - `memory/0_past/README.md`
     - `memory/1_present/README.md`
     - `memory/2_future/README.md`
6. **Completion**:
   - Hiển thị success message.
   - Tự động copy nội dung Blueprint vào clipboard (tùy chọn).
   - Gợi ý bước tiếp theo: "Paste this into ChatGPT/Claude".

### 4.2 `sbbl validate <file>`
Kiểm tra xem file Blueprint có đạt chuẩn SBBL không.

**Tiêu chí kiểm tra**:
- Có đầy đủ các section bắt buộc (Vision, Tech Stack, Schema, Roadmap).
- Độ dài nội dung tối thiểu cho mỗi section.
- Cú pháp Markdown hợp lệ.

**Output**:
- ✅ Pass: "Blueprint hợp lệ! Điểm chất lượng: 95/100"
- ❌ Fail: Danh sách các lỗi cần sửa.

### 4.3 `sbbl template`
Quản lý các templates.

- `sbbl template list`: Liệt kê các template có sẵn.
- `sbbl template create <name>`: Tạo template mới từ blueprint hiện tại.

### 4.4 `sbbl ai-prompt`
Tạo ra một System Prompt tối ưu cho AI dựa trên Blueprint hiện tại.

**Output**:
- In ra console hoặc copy vào clipboard một đoạn prompt mẫu mực để paste vào ChatGPT/Claude trước khi gửi Blueprint.

---

## 5. Cấu Trúc Dữ Liệu (Internal)

```typescript
interface Blueprint {
  meta: {
    name: string;
    version: string;
    createdAt: string;
  };
  spark: {
    vision: string;
    targetAudience: string;
    problem: string;
    solution: string;
  };
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    infrastructure: string[];
    ai: string[];
  };
  architecture: {
    diagram?: string; // Mermaid or text description
    auth: string;
    dataFlow: string;
  };
  database: {
    schema: string; // SQL or Prisma schema
  };
  roadmap: RoadmapItem[];
  businessRules: string[];
}
```

---

## 6. Lộ Trình Phát Triển CLI

### Giai đoạn 1: MVP (Tuần 1)
- [ ] Setup project structure
- [ ] Implement `sbbl init` với basic prompts
- [ ] Template system cơ bản (SaaS, Blank)
- [ ] Generate `BLUEPRINT.md`

### Giai đoạn 2: Enhancement (Tuần 2)
- [ ] Implement `sbbl validate`
- [ ] Thêm nhiều templates hơn
- [ ] Cải thiện UI với `@clack/prompts`
- [ ] Clipboard integration

### Giai đoạn 3: Advanced (Tuần 3)
- [ ] `sbbl ai-prompt` command
- [ ] Config file `.sbblrc`
- [ ] Plugin system (optional)

---

## 7. Hướng Dẫn Đóng Góp

1. Clone repo: `git clone ...`
2. Install dependencies: `pnpm install`
3. Run dev mode: `pnpm dev`
4. Build: `pnpm build`
5. Test: `pnpm test`
