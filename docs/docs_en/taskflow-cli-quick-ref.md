# TaskFlow-CLI Features - Quick Reference

## 🎯 Tóm Tắt Nhanh

**claude-taskflow-cli** là hệ thống quản lý task AI mã nguồn mở #1 trên GitHub. Dưới đây là các tính năng chính và mức độ ưu tiên tích hợp vào OpenSBBL.

---

## 📊 Bảng Tính Năng Theo Ưu Tiên

| # | Tính Năng | Mô Tả | Ưu Tiên | Giá Trị | Lệnh Mới |
|---|-----------|-------|---------|---------|----------|
| 1 | **Task Management Core** | Lưu trữ, CRUD, status workflow, dependencies | 🔥 P1 | ⭐⭐⭐⭐⭐ | `sbbl build parse/list/show/status/next` |
| 2 | **AI Task Expansion** | Chia nhỏ task phức tạp thành subtasks bằng AI | 🔥 P1 | ⭐⭐⭐⭐⭐ | `sbbl build expand/analyze` |
| 3 | **Research Command** | Thu thập thông tin mới nhất với AI | 🔥 P1 | ⭐⭐⭐⭐⭐ | `sbbl research <query>` |
| 4 | **Blueprint → Tasks Parser** | Parse Blueprint thành tasks tự động | 🔥 P1 | ⭐⭐⭐⭐⭐ | `sbbl build parse BLUEPRINT.md` |
| 5 | **MCP Server** | Tích hợp vào Cursor/Windsurf/VS Code | ⚡ P2 | ⭐⭐⭐⭐ | MCP config |
| 6 | **Multi-Provider AI** | Hỗ trợ nhiều AI providers | ⚡ P2 | ⭐⭐⭐⭐ | `sbbl models --set-main/research` |
| 7 | **Dependency Management** | Validation, circular detection | ⚡ P2 | ⭐⭐⭐⭐ | `sbbl build validate-deps/fix-deps` |
| 8 | **Tagged Task Lists** | Multi-context task management | 📊 P3 | ⭐⭐⭐ | `sbbl build tags/use-tag/add-tag` |
| 9 | **Enhanced CLI UX** | Progress bars, rich output | 📊 P3 | ⭐⭐⭐ | N/A (UI improvements) |
| 10 | **Rule Profiles** | Editor-specific rules | 📊 P3 | ⭐⭐⭐ | `sbbl rules add/setup` |

**Legend**:
- 🔥 P1 = Priority 1 (Critical - Immediate value)
- ⚡ P2 = Priority 2 (High value - Short-term)
- 📊 P3 = Priority 3 (Nice-to-have - Medium-term)

---

## 🚀 Top 4 Tính Năng Cần Tích Hợp Ngay

### 1️⃣ Task Management Core (⭐⭐⭐⭐⭐)

**Vấn đề giải quyết**: OpenSBBL hiện chỉ tạo Blueprint, không theo dõi tiến độ thực thi

**Tính năng**:
- JSON-based task storage (`tasks.json`)
- Status workflow: pending → in-progress → review → done
- Dependency tracking với visual indicators
- Smart "next task" recommendation

**Lệnh mới**:
```bash
sbbl build parse BLUEPRINT.md  # Tạo tasks từ blueprint
sbbl build list                # Liệt kê tasks
sbbl build show <id>           # Xem chi tiết task
sbbl build status <id> done    # Đánh dấu hoàn thành
sbbl build next                # Task tiếp theo
```

**Ví dụ sử dụng**:
```bash
# Tạo tasks từ blueprint
$ sbbl build parse BLUEPRINT.md
✓ Parsed blueprint: 5 tasks created

# Xem tất cả tasks
$ sbbl build list
┌────┬─────────────────────┬──────────┬──────────────┐
│ ID │ Title               │ Status   │ Dependencies │
├────┼─────────────────────┼──────────┼──────────────┤
│ 1  │ Setup Database      │ pending  │ -            │
│ 2  │ Create API          │ pending  │ 1 ⏱️         │
│ 3  │ Build Frontend      │ pending  │ 2 ⏱️         │
└────┴─────────────────────┴──────────┴──────────────┘

# Xem task tiếp theo
$ sbbl build next
📋 Next Task: #1 - Setup Database
Priority: high
Dependencies: None

# Đánh dấu hoàn thành
$ sbbl build status 1 done
✓ Task #1 marked as done
```

---

### 2️⃣ AI Task Expansion (⭐⭐⭐⭐⭐)

**Vấn đề giải quyết**: Tasks lớn khó quản lý, cần chia nhỏ thành subtasks

**Tính năng**:
- AI phân tích độ phức tạp (1-10)
- Đề xuất số lượng subtasks tối ưu
- Tự động tạo subtasks với AI
- Expansion prompts tùy chỉnh

**Lệnh mới**:
```bash
sbbl build analyze             # Phân tích độ phức tạp
sbbl build expand <id>         # Mở rộng task cụ thể
sbbl build expand --all        # Mở rộng tất cả tasks
```

**Ví dụ sử dụng**:
```bash
# Phân tích độ phức tạp
$ sbbl build analyze
Analyzing task complexity...
✓ Task #1: Complexity 8/10 → Recommend 5 subtasks
✓ Task #2: Complexity 5/10 → Recommend 3 subtasks
✓ Task #3: Complexity 3/10 → Recommend 2 subtasks

# Mở rộng task phức tạp
$ sbbl build expand 1
Expanding task #1 with AI...
✓ Created 5 subtasks:
  1.1 - Install PostgreSQL
  1.2 - Create database schema
  1.3 - Set up migrations
  1.4 - Configure connection pool
  1.5 - Write database tests

# Mở rộng tất cả
$ sbbl build expand --all
Expanding all tasks...
✓ Task #1: 5 subtasks created
✓ Task #2: 3 subtasks created
✓ Task #3: 2 subtasks created
```

---

### 3️⃣ Research Command (⭐⭐⭐⭐⭐)

**Vấn đề giải quyết**: Cần thông tin mới nhất, vượt qua knowledge cutoff của AI

**Tính năng**:
- Research với Perplexity (fresh information)
- Project-aware context
- Interactive follow-up questions
- Save findings to tasks
- Token counting & cost tracking

**Lệnh mới**:
```bash
sbbl research <query>                    # Research cơ bản
sbbl research <query> --save-to=<id>     # Lưu vào task
sbbl research <query> --files=<paths>    # Với file context
sbbl research <query> --id=<ids>         # Với task context
```

**Ví dụ sử dụng**:
```bash
# Research best practices
$ sbbl research "What are the latest PostgreSQL best practices for 2025?"
🔍 Researching with Perplexity AI...

📊 Key Findings:
1. Use connection pooling (PgBouncer recommended)
2. Enable query performance insights
3. Implement row-level security
4. Use JSONB for flexible data
5. Set up automated backups

💡 Save these findings?
  [1] Save to task
  [2] Save to file
  [3] Continue exploring
  [4] Exit

# Research với task context
$ sbbl research "How to optimize this database setup?" --id=1 --save-to=1.2
🔍 Researching with context from Task #1...
✓ Findings saved to Task #1.2

# Research với file context
$ sbbl research "How to improve this code?" --files=src/db.js
🔍 Analyzing src/db.js...
💡 Recommendations:
- Add connection retry logic
- Implement query timeout
- Use prepared statements
```

---

### 4️⃣ Blueprint → Tasks Parser (⭐⭐⭐⭐⭐)

**Vấn đề giải quyết**: Chuyển từ Blueprint (kế hoạch) sang Tasks (thực thi) thủ công

**Tính năng**:
- Parse SBBL Blueprint tự động
- Map sections thành tasks
- Preserve Blueprint context
- Generate dependencies

**Lệnh mới**:
```bash
sbbl build parse BLUEPRINT.md  # Parse blueprint
```

**Ví dụ**:

**Input (BLUEPRINT.md)**:
```markdown
## Implementation Roadmap

### Week 1: Foundation
- Setup database (PostgreSQL)
- Create API structure (Express.js)
- Implement authentication (JWT)

### Week 2: Core Features
- User management
- Data CRUD operations
- Real-time updates (WebSocket)

### Week 3: Polish
- UI improvements
- Performance optimization
- Deploy to production
```

**Output (tasks.json)**:
```json
{
  "master": {
    "tasks": [
      {
        "id": 1,
        "title": "Week 1: Foundation",
        "description": "Setup database, API, and authentication",
        "status": "pending",
        "dependencies": [],
        "priority": "high",
        "details": "- Setup PostgreSQL\n- Create Express.js API\n- Implement JWT auth",
        "blueprintSection": "Implementation Roadmap - Week 1"
      },
      {
        "id": 2,
        "title": "Week 2: Core Features",
        "description": "User management, CRUD, real-time",
        "status": "pending",
        "dependencies": [1],
        "priority": "high",
        "details": "- User management\n- CRUD operations\n- WebSocket integration",
        "blueprintSection": "Implementation Roadmap - Week 2"
      },
      {
        "id": 3,
        "title": "Week 3: Polish",
        "description": "UI, optimization, deployment",
        "status": "pending",
        "dependencies": [2],
        "priority": "medium",
        "details": "- UI improvements\n- Performance optimization\n- Production deployment",
        "blueprintSection": "Implementation Roadmap - Week 3"
      }
    ]
  }
}
```

---

## 🔄 Quy Trình Sử Dụng Mới

### Before (OpenSBBL hiện tại)
```
1. sbbl init → BLUEPRINT.md
2. sbbl validate BLUEPRINT.md
3. sbbl ai-prompt → Copy to ChatGPT
4. Implement thủ công (không theo dõi tiến độ)
```

### After (OpenSBBL + TaskFlow-CLI)
```
1. sbbl init → BLUEPRINT.md
2. sbbl build parse BLUEPRINT.md → tasks.json
3. sbbl build analyze → complexity-report.json
4. sbbl build expand --all → subtasks
5. sbbl build next → Task #1
6. sbbl research "..." --save-to=1 → research findings
7. Implement in AI editor (Cursor/Claude)
8. sbbl build status 1 done
9. Repeat steps 5-8
```

**Lợi ích**:
- ✅ Theo dõi tiến độ rõ ràng
- ✅ AI tự động chia nhỏ task
- ✅ Research thông tin mới nhất
- ✅ Quản lý phụ thuộc tự động
- ✅ Luôn biết task tiếp theo

---

## 📁 Cấu Trúc File Mới

```
your-project/
├── .sbbl/
│   ├── BLUEPRINT.md           # Strategic blueprint (hiện có)
│   ├── tasks.json             # Execution tasks (MỚI)
│   ├── config.json            # OpenSBBL config (MỚI)
│   ├── state.json             # Current state (MỚI)
│   ├── complexity-report.json # Complexity analysis (MỚI)
│   └── docs/
│       └── research/          # Research findings (MỚI)
│           ├── 2025-12-02-postgresql-best-practices.md
│           └── 2025-12-03-jwt-authentication.md
```

---

## 🎯 MCP Server Integration

**Sử dụng trong Cursor/Windsurf/VS Code**:

```json
// .cursor/mcp.json
{
  "mcpServers": {
    "opensbbl": {
      "command": "npx",
      "args": ["-y", "opensbbl-mcp"],
      "env": {
        "ANTHROPIC_API_KEY": "sk-ant-...",
        "OPENAI_API_KEY": "sk-...",
        "PERPLEXITY_API_KEY": "pplx-..."
      }
    }
  }
}
```

**Sử dụng trong AI chat**:
```
You: "Initialize OpenSBBL in my project"
AI: ✓ Created .sbbl/BLUEPRINT.md

You: "Parse my blueprint and create tasks"
AI: ✓ Created 5 tasks from blueprint

You: "What's the next task?"
AI: 📋 Task #1: Setup Database (Priority: high)

You: "Research PostgreSQL best practices and save to task 1"
AI: 🔍 Researching... ✓ Saved findings to Task #1

You: "Mark task 1 as done"
AI: ✓ Task #1 marked as done. Next: Task #2
```

---

## 🚀 Kế Hoạch Triển Khai

### Phase 1: Core (Tuần 1-2) 🔥
- [ ] Task storage & CRUD
- [ ] Blueprint → Tasks parser
- [ ] Dependency management
- [ ] `sbbl build` commands

### Phase 2: AI (Tuần 3-4) ⚡
- [ ] Multi-provider AI support
- [ ] Task expansion with AI
- [ ] Complexity analysis
- [ ] Research command

### Phase 3: MCP (Tuần 5-6) ⚡
- [ ] MCP server
- [ ] Blueprint tools
- [ ] Task tools
- [ ] Editor integration

### Phase 4: Advanced (Tuần 7-8) 📊
- [ ] Tagged task lists
- [ ] Rule profiles
- [ ] Enhanced UX
- [ ] Documentation

---

## 💡 Tại Sao Nên Tích Hợp?

### OpenSBBL (Hiện tại)
- ✅ Tạo Blueprint chiến lược
- ✅ Template system
- ✅ Methodology framework
- ❌ Không theo dõi execution
- ❌ Không có AI task expansion
- ❌ Không có research capabilities

### OpenSBBL + TaskFlow-CLI
- ✅ Tạo Blueprint chiến lược
- ✅ Template system
- ✅ Methodology framework
- ✅ Theo dõi execution với tasks
- ✅ AI task expansion
- ✅ Research capabilities
- ✅ MCP integration
- ✅ Multi-provider AI

**Kết quả**: Nền tảng phát triển AI hoàn chỉnh từ ý tưởng đến deployment!

---

## 📊 So Sánh Nhanh

| Khía Cạnh | TaskFlow-CLI | OpenSBBL (Hiện tại) | OpenSBBL (Sau tích hợp) |
|-----------|-------------|---------------------|-------------------------|
| **Blueprint Creation** | ❌ | ✅ | ✅ |
| **Task Management** | ✅ | ❌ | ✅ |
| **AI Expansion** | ✅ | ❌ | ✅ |
| **Research** | ✅ | ❌ | ✅ |
| **MCP Server** | ✅ | ❌ | ✅ |
| **Methodology** | ❌ | ✅ | ✅ |
| **Templates** | ❌ | ✅ | ✅ |
| **License** | MIT + Commons | MIT | MIT |
| **Focus** | Execution | Planning | Planning + Execution |

---

## 🎓 Tài Liệu Chi Tiết

- 📖 [English Analysis](./taskflow-cli-integration-analysis.md)
- 📖 [Phân Tích Tiếng Việt](../docs_vi/taskflow-cli-integration-analysis.md)

---

**Cập nhật**: 2025-12-02  
**Trạng thái**: Ready for Implementation

