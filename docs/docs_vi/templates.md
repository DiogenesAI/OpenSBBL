# 📋 Các Mẫu Dự Án SBBL (Templates)

Dưới đây là 20 mẫu dự án được tuyển chọn để giúp bạn bắt đầu với SBBL.

> **💡 Lưu ý:** SBBL **không phụ thuộc công nghệ** (technology agnostic). Các mẫu dưới đây chỉ là gợi ý stack phổ biến, bạn hoàn toàn có thể thay thế bất kỳ thành phần nào (ví dụ: thay Next.js bằng Vue, hoặc Node.js bằng Go) trong Blueprint của mình.

## 🚀 Ứng Dụng Web

### 1. SaaS MVP (Dịch vụ Đăng ký)
Phù hợp để ra mắt sản phẩm phần mềm dạng dịch vụ nhanh chóng.
- **Tầm nhìn**: Ứng dụng web có khả năng mở rộng, mô hình thu phí định kỳ.
- **Kiến trúc**: Monolith (để phát triển nhanh) hoặc Serverless.
- **Lựa chọn Stack**:
  - *JS/TS*: Next.js + Supabase + Stripe
  - *Python*: Django + PostgreSQL + Stripe
  - *PHP*: Laravel + MySQL + Paddle
  - *Go*: Go Fiber + PostgreSQL

### 2. AI Chatbot / Trợ lý ảo
Xây dựng giao diện LLM riêng.
- **Tầm nhìn**: Giao diện hội thoại thông minh.
- **Kiến trúc**: Event-driven / Streaming response.
- **Lựa chọn Stack**:
  - *Frontend*: Next.js / SvelteKit / Streamlit (Python)
  - *AI Provider*: OpenAI / Anthropic / Local LLM (Ollama)
  - *Vector DB*: Pinecone / Milvus / pgvector

### 3. Cửa Hàng E-commerce
Nền tảng bán lẻ trực tuyến.
- **Tầm nhìn**: Trải nghiệm mua sắm nhanh, tối ưu SEO.
- **Kiến trúc**: Headless Commerce.
- **Lựa chọn Stack**:
  - *Storefront*: Next.js / Nuxt / Hydrogen
  - *Backend*: Shopify / MedusaJS (Mã nguồn mở) / Saleor
  - *CMS*: Strapi / Sanity

### 4. Admin Dashboard / Công cụ nội bộ
Quản lý vận hành và dữ liệu.
- **Tầm nhìn**: Bảng điều khiển tập trung.
- **Kiến trúc**: SPA (Single Page App).
- **Lựa chọn Stack**:
  - *Low-code*: Appsmith / Tooljet
  - *React*: Refine / React Admin
  - *Vue*: Vben Admin
  - *Backend*: Directus / NestJS

### 5. Job Board / Trang Rao Vặt
Nền tảng danh sách tìm kiếm.
- **Tầm nhìn**: Trang tin tuyển dụng hoặc rao vặt ngách.
- **Kiến trúc**: SSR (Server Side Rendering) để tốt cho SEO.
- **Lựa chọn Stack**:
  - *Fullstack*: Remix / Next.js / Laravel
  - *Tìm kiếm*: Algolia / Meilisearch (Mã nguồn mở) / Elasticsearch

## 📱 Mobile & Desktop

### 6. Ứng Dụng Di Động Đa Nền Tảng
iOS và Android từ một mã nguồn.
- **Tầm nhìn**: Trải nghiệm như ứng dụng gốc (native).
- **Lựa chọn Stack**:
  - *React*: React Native (Expo)
  - *Dart*: Flutter
  - *Web-based*: Ionic / Capacitor

### 7. Ứng Dụng Desktop
App máy tính hiệu năng cao.
- **Tầm nhìn**: Công cụ desktop mạnh mẽ.
- **Lựa chọn Stack**:
  - *Hiện đại*: Tauri (Rust + Web)
  - *Tiêu chuẩn*: Electron (Node + Web)
  - *Native*: .NET MAUI / Swift / Qt (C++)

### 8. Tiện Ích Trình Duyệt (Extension)
Add-on cho Chrome/Firefox/Edge.
- **Tầm nhìn**: Mở rộng tính năng trình duyệt.
- **Lựa chọn Stack**:
  - *Framework*: Plasmo / WXT
  - *Core*: Vanilla JS / React / Vue

## 📝 Nội Dung & Cộng Đồng

### 9. Blog Cá Nhân / Portfolio
Trưng bày dự án và bài viết.
- **Tầm nhìn**: Website tĩnh, tốc độ cực nhanh.
- **Kiến trúc**: SSG (Static Site Generation).
- **Lựa chọn Stack**:
  - *JS*: Astro / Next.js
  - *Go*: Hugo
  - *Ruby*: Jekyll

### 10. Trang Tài Liệu (Documentation)
Tài liệu kỹ thuật.
- **Tầm nhìn**: Tài liệu rõ ràng, dễ tra cứu.
- **Lựa chọn Stack**:
  - *React*: Docusaurus / Nextra
  - *Vue*: VitePress
  - *Python*: MkDocs

### 11. Diễn Đàn Cộng Đồng
Nền tảng thảo luận.
- **Tầm nhìn**: Trung tâm cộng đồng dạng luồng (thread).
- **Lựa chọn Stack**:
  - *Hiện đại*: Discourse (Ruby) / Flarum (PHP)
  - *Custom*: Node.js + Prisma + PostgreSQL

### 12. Learning Management System (LMS)
Nền tảng khóa học.
- **Tầm nhìn**: Bán và quản lý khóa học.
- **Lựa chọn Stack**:
  - *Mã nguồn mở*: Moodle / Open edX
  - *Custom*: MERN Stack / Django

## 🛠️ Công Cụ & Tiện Ích

### 13. Chat / Messaging App
Giao tiếp thời gian thực.
- **Tầm nhìn**: Nhắn tin tức thời, lưu lịch sử.
- **Kiến trúc**: WebSocket / PubSub.
- **Lựa chọn Stack**:
  - *Backend*: Go (Gorilla WebSocket) / Elixir (Phoenix) / Node.js (Socket.io)
  - *Database*: ScyllaDB / Cassandra / Redis

### 14. CLI Tool
Công cụ dòng lệnh.
- **Tầm nhìn**: Tăng năng suất qua terminal.
- **Lựa chọn Stack**:
  - *Rust*: Clap
  - *Go*: Cobra
  - *Node*: Commander / Oclif
  - *Python*: Typer / Click

### 15. High-Performance API
Dịch vụ backend.
- **Tầm nhìn**: API độ trễ thấp, chịu tải cao.
- **Lựa chọn Stack**:
  - *Rust*: Actix / Axum
  - *Go*: Gin / Echo
  - *Java*: Spring Boot
  - *C#*: ASP.NET Core

## 🏢 Doanh Nghiệp & Chuyên Biệt

### 16. Cộng Tác Real-time (Whiteboard)
Bảng vẽ nhiều người dùng.
- **Tầm nhìn**: Không gian làm việc trực quan chung.
- **Lựa chọn Stack**:
  - *Sync Engine*: Yjs / Automerge (CRDTs)
  - *Backend*: Hocuspocus / Liveblocks

### 17. Nền Tảng Newsletter / Email
Tự động hóa marketing.
- **Tầm nhìn**: Phân phối email số lượng lớn.
- **Lựa chọn Stack**:
  - *Self-hosted*: Listmonk (Go) / Mautic (PHP)
  - *Cloud*: AWS SES + Custom Frontend

### 18. Web3 / DApp
Ứng dụng phi tập trung.
- **Tầm nhìn**: Tương tác với blockchain.
- **Lựa chọn Stack**:
  - *EVM*: Wagmi + Viem + Solidity
  - *Solana*: Anchor + React

### 19. Social Media Dashboard
Quản lý mạng xã hội.
- **Tầm nhìn**: Lên lịch và phân tích.
- **Lựa chọn Stack**:
  - *Fullstack*: T3 Stack / Nuxt
  - *Backend*: Serverless Functions

### 20. Microservices System
Hệ thống quy mô lớn.
- **Tầm nhìn**: Các dịch vụ độc lập, dễ mở rộng.
- **Kiến trúc**: Event-driven Microservices.
- **Lựa chọn Stack**:
  - *Điều phối*: Kubernetes / Docker Swarm
  - *Giao tiếp*: gRPC / Kafka / RabbitMQ
  - *Dịch vụ*: Kết hợp Go, Java, Node.js

---

## 💡 Cách lựa chọn?

SBBL khuyến khích bạn chọn stack phù hợp với **năng lực của team** và **yêu cầu dự án**.

- **Cần Tốc độ phát triển?** → Chọn Monoliths (Laravel, Django, Next.js).
- **Cần Hiệu năng/Quy mô?** → Chọn Go, Rust, Elixir.
- **Cần AI/Data?** → Python là số 1, nhưng JS/TS cũng đang bắt kịp nhanh.
