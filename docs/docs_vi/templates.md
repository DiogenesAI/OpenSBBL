# Thư Viện Template SBBL

Chào mừng đến với thư viện template SBBL! Đây là các blueprint được tạo sẵn cho các trường hợp sử dụng phổ biến.

## 🚀 Cách Sử Dụng

1. **Chọn Template**: Chọn template phù hợp nhất với ý tưởng của bạn.
2. **Khởi Tạo**: Sử dụng CLI để tạo blueprint từ template.
   ```bash
   sbbl init --template <template-name>
   ```
3. **Tùy Chỉnh**: Điền vào các chi tiết cụ thể của dự án (tên, tầm nhìn, quy tắc nghiệp vụ).
4. **Build**: Sử dụng blueprint đã hoàn thiện với AI.

---

## 📋 Danh Sách Template

| Template | Mô Tả | Tech Stack | CLI Command |
|----------|-------|------------|-------------|
| **1. SaaS MVP** | Nền tảng SaaS B2B/B2C tiêu chuẩn | Next.js, Supabase, Stripe | `saas-mvp` |
| **2. AI App** | Ứng dụng tích hợp LLM (Chat/GenAI) | Next.js, OpenAI, Pinecone | `ai-app` |
| **3. E-Commerce** | Cửa hàng trực tuyến đầy đủ tính năng | Next.js, Shopify/Stripe | `ecommerce` |
| **4. Mobile App** | Ứng dụng di động đa nền tảng | React Native, Supabase | `mobile-app` |
| **5. Dashboard** | Admin panel & phân tích dữ liệu | React, Tremor, Postgres | `dashboard` |
| **6. CMS** | Hệ quản trị nội dung | Next.js, Sanity/Strapi | `cms` |

---

## 1. SaaS MVP Template

**Phù hợp cho**: Startup, Indie Hackers, B2B Tools.

### Blueprint Content

```markdown
# [Project Name] - SaaS MVP

## Vision
[Mô tả sản phẩm của bạn ở đây. Nó giải quyết vấn đề gì? Ai là người dùng?]

## Tech Stack
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, Shadcn UI
- **Backend**: Supabase (Auth, Database, Realtime)
- **Payments**: Stripe
- **Deployment**: Vercel
- **Email**: Resend

## Architecture
- Client-side rendering cho dashboard
- Server components cho SEO pages
- Supabase RLS cho bảo mật
- Webhooks cho Stripe events

## Database Schema
```sql
-- Users & Auth
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users,
  email TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  billing_status TEXT DEFAULT 'free',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions (Stripe sync)
CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY, -- Stripe ID
  user_id UUID REFERENCES users(id),
  status TEXT,
  price_id TEXT,
  current_period_end TIMESTAMPTZ
);

-- Your Core Data
CREATE TABLE items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Implementation Roadmap
### Week 1: Foundation
- [ ] Setup Next.js + Supabase
- [ ] Implement Auth (Login/Register/Reset)
- [ ] Setup Stripe Checkout

### Week 2: Core Features
- [ ] CRUD operations for items
- [ ] Dashboard UI
- [ ] User settings

### Week 3: Launch Prep
- [ ] Landing page
- [ ] SEO meta tags
- [ ] Analytics setup

## Business Rules
- Free tier: Max 5 items
- Pro tier ($19/mo): Unlimited items
- Trial: 14 days
```

---

## 2. AI-Powered App Template

**Phù hợp cho**: Chatbots, Content Generators, Analysis Tools.

### Blueprint Content

```markdown
# [Project Name] - AI App

## Vision
[Mô tả ứng dụng AI của bạn. Nó sử dụng AI để làm gì?]

## Tech Stack
- **Frontend**: Next.js 14, Vercel AI SDK
- **AI Model**: OpenAI GPT-4 / Claude 3
- **Vector DB**: Pinecone / Supabase pgvector
- **Backend**: Next.js API Routes (Edge Runtime)

## Architecture
- Streaming responses cho UX tốt nhất
- RAG (Retrieval Augmented Generation) cho context
- Rate limiting để kiểm soát chi phí

## Database Schema
```sql
-- Chats
CREATE TABLE chats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  title TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chat_id UUID REFERENCES chats(id),
  role TEXT CHECK (role IN ('user', 'assistant')),
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documents (for RAG)
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT,
  embedding VECTOR(1536) -- OpenAI embedding size
);
```

## Implementation Roadmap
### Week 1: Chat Interface
- [ ] Setup Vercel AI SDK
- [ ] Chat UI (bubbles, streaming)
- [ ] Basic OpenAI integration

### Week 2: Advanced AI
- [ ] Implement RAG (Vector search)
- [ ] Prompt engineering & optimization
- [ ] Chat history persistence

### Week 3: Monetization
- [ ] Token usage tracking
- [ ] Credit system / Subscription
```

---

## 3. E-Commerce Template

**Phù hợp cho**: Online Stores, Digital Products, Marketplaces.

### Blueprint Content

```markdown
# [Project Name] - E-Commerce Store

## Vision
[Mô tả cửa hàng của bạn. Bạn bán gì? Khách hàng là ai?]

## Tech Stack
- **Storefront**: Next.js 14 (Commerce)
- **CMS/Backend**: Shopify (Headless) hoặc MedusaJS
- **Payments**: Stripe / PayPal
- **Search**: Algolia

## Architecture
- Static Site Generation (SSG) cho trang sản phẩm (tốc độ cao)
- Dynamic rendering cho cart & checkout
- Image optimization cực kỳ quan trọng

## Database Schema (Custom Backend Example)
```sql
-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  price DECIMAL(10, 2),
  inventory_count INT,
  metadata JSONB
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  status TEXT DEFAULT 'pending',
  total DECIMAL(10, 2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order Items
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INT,
  price_at_purchase DECIMAL(10, 2)
);
```

## Implementation Roadmap
### Week 1: Catalog
- [ ] Product listing page
- [ ] Product detail page
- [ ] Search & Filter

### Week 2: Cart & Checkout
- [ ] Shopping cart state
- [ ] Checkout flow integration
- [ ] Order confirmation

### Week 3: Admin & Ops
- [ ] Order management dashboard
- [ ] Inventory tracking
- [ ] Email notifications
```

---

## 4. Mobile App Template

**Phù hợp cho**: Social Apps, Utility Apps, On-demand Services.

### Blueprint Content

```markdown
# [Project Name] - Mobile App

## Vision
[Mô tả ứng dụng di động của bạn. Tính năng chính là gì?]

## Tech Stack
- **Framework**: React Native (Expo)
- **Backend**: Supabase
- **Navigation**: Expo Router
- **State**: Zustand / TanStack Query

## Architecture
- Offline-first capability
- Push notifications
- Native device features (Camera, Location)

## Database Schema
```sql
-- Profiles (Extended)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users,
  username TEXT UNIQUE,
  push_token TEXT,
  last_seen TIMESTAMPTZ
);

-- Social Graph
CREATE TABLE follows (
  follower_id UUID REFERENCES profiles(id),
  following_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (follower_id, following_id)
);
```

## Implementation Roadmap
### Week 1: App Shell
- [ ] Setup Expo project
- [ ] Navigation structure (Tabs/Stack)
- [ ] Auth screens

### Week 2: Core UX
- [ ] Main feed / dashboard
- [ ] User interactions
- [ ] Camera / Location integration

### Week 3: Polish
- [ ] Push notifications
- [ ] App store assets
- [ ] Performance tuning
```

---

## 5. Dashboard Template

**Phù hợp cho**: Analytics, Admin Panels, Internal Tools.

### Blueprint Content

```markdown
# [Project Name] - Analytics Dashboard

## Vision
[Mô tả dashboard. Ai sử dụng nó? Dữ liệu gì được hiển thị?]

## Tech Stack
- **Frontend**: React (Vite) hoặc Next.js
- **Charts**: Tremor / Recharts
- **Data Grid**: TanStack Table
- **Backend**: Python (FastAPI) hoặc Node.js

## Architecture
- Data visualization focus
- Complex filtering & sorting
- Export capabilities (CSV, PDF)

## Database Schema
```sql
-- Analytics Events
CREATE TABLE events (
  id UUID PRIMARY KEY,
  event_type TEXT,
  properties JSONB,
  timestamp TIMESTAMPTZ
);

-- Aggregated Stats (Materialized View)
CREATE MATERIALIZED VIEW daily_stats AS
SELECT
  date_trunc('day', timestamp) as day,
  event_type,
  count(*) as count
FROM events
GROUP BY 1, 2;
```

## Implementation Roadmap
### Week 1: Data Layer
- [ ] API endpoints for metrics
- [ ] Database aggregation queries
- [ ] Auth & Permissions

### Week 2: Visualization
- [ ] Chart components
- [ ] Date range pickers
- [ ] Data tables with pagination

### Week 3: Advanced Features
- [ ] Export to CSV
- [ ] Saved reports
- [ ] Dark mode
```

---

## 6. CMS Template

**Phù hợp cho**: Blogs, News Sites, Documentation.

### Blueprint Content

```markdown
# [Project Name] - Content Management System

## Vision
[Mô tả CMS. Loại nội dung nào? Ai là người đọc?]

## Tech Stack
- **Frontend**: Next.js 14
- **Content Source**: MDX files / Sanity / Strapi
- **Styling**: Tailwind Typography
- **Search**: CommandBar / Algolia

## Architecture
- Static generation (SSG) cho hiệu năng tối đa
- Incremental Static Regeneration (ISR) cho cập nhật
- Image optimization

## Content Model (Example for Headless CMS)
```json
{
  "types": [
    {
      "name": "post",
      "fields": [
        { "name": "title", "type": "string" },
        { "name": "slug", "type": "slug" },
        { "name": "author", "type": "reference" },
        { "name": "body", "type": "rich-text" },
        { "name": "tags", "type": "array" }
      ]
    }
  ]
}
```

## Implementation Roadmap
### Week 1: Content Structure
- [ ] Define content models
- [ ] Setup CMS connection
- [ ] Blog listing page

### Week 2: Rendering
- [ ] Single post view
- [ ] Markdown/Rich text rendering
- [ ] Syntax highlighting

### Week 3: Discovery
- [ ] Search functionality
- [ ] Categories & Tags
- [ ] RSS Feed & Sitemap
```

---

## 🎯 Tạo Template Tùy Chỉnh

Bạn có thể tạo template riêng của mình bằng cách tạo một file Markdown theo cấu trúc trên và lưu vào thư mục templates của CLI.

**Cấu trúc file**:
```markdown
# [Tên Template]

## Vision
...

## Tech Stack
...

## Architecture
...

## Database Schema
...

## Implementation Roadmap
...

## Business Rules
...
```

---

**Cần thêm template?**
Hãy đóng góp bằng cách tạo Pull Request trên GitHub repo của chúng tôi!
