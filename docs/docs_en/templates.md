# 📋 SBBL Project Templates

Here are 20 curated project templates to help you get started with SBBL. 

> **💡 Note:** SBBL is **technology agnostic**. These templates provide recommended stacks, but you are free to swap any component (e.g., replace Next.js with Vue, or Node.js with Go) in your Blueprint.

## 🚀 Web Applications

### 1. SaaS MVP (Subscription Service)
Perfect for launching a software-as-a-service product.
- **Vision**: A scalable, subscription-based web application.
- **Architecture**: Monolith (for speed) or Serverless.
- **Stack Options**:
  - *JS/TS*: Next.js + Supabase + Stripe
  - *Python*: Django + PostgreSQL + Stripe
  - *PHP*: Laravel + MySQL + Paddle
  - *Go*: Go Fiber + PostgreSQL

### 2. AI Chatbot / Assistant
Build your own LLM interface.
- **Vision**: An intelligent conversational interface.
- **Architecture**: Event-driven / Streaming response.
- **Stack Options**:
  - *Frontend*: Next.js / SvelteKit / Streamlit (Python)
  - *AI Provider*: OpenAI / Anthropic / Local LLM (Ollama)
  - *Vector DB*: Pinecone / Milvus / pgvector

### 3. E-commerce Store
Online retail platform.
- **Vision**: A fast, SEO-optimized shopping experience.
- **Architecture**: Headless Commerce.
- **Stack Options**:
  - *Storefront*: Next.js / Nuxt / Hydrogen
  - *Backend*: Shopify / MedusaJS (Open Source) / Saleor
  - *CMS*: Strapi / Sanity

### 4. Admin Dashboard / Internal Tool
Business operations and data management.
- **Vision**: Centralized control panel for data.
- **Architecture**: SPA (Single Page App).
- **Stack Options**:
  - *Low-code*: Appsmith / Tooljet
  - *React*: Refine / React Admin
  - *Vue*: Vben Admin
  - *Backend*: Directus / NestJS

### 5. Job Board / Listing Site
Directory style platform.
- **Vision**: Niche listing platform with search.
- **Architecture**: SSR (Server Side Rendering) for SEO.
- **Stack Options**:
  - *Fullstack*: Remix / Next.js / Laravel
  - *Search*: Algolia / Meilisearch (Open Source) / Elasticsearch

## 📱 Mobile & Desktop

### 6. Cross-Platform Mobile App
iOS and Android from one codebase.
- **Vision**: Native-like mobile experience.
- **Stack Options**:
  - *React*: React Native (Expo)
  - *Dart*: Flutter
  - *Web-based*: Ionic / Capacitor

### 7. Desktop Application
Native desktop apps using web or native tech.
- **Vision**: High-performance desktop tool.
- **Stack Options**:
  - *Modern*: Tauri (Rust + Web)
  - *Standard*: Electron (Node + Web)
  - *Native*: .NET MAUI / Swift / Qt (C++)

### 8. Browser Extension
Add-on for Chrome/Firefox/Edge.
- **Vision**: Enhance browser functionality.
- **Stack Options**:
  - *Framework*: Plasmo / WXT
  - *Core*: Vanilla JS / React / Vue

## 📝 Content & Community

### 9. Personal Blog / Portfolio
Showcase work and writing.
- **Vision**: Fast, static content site.
- **Architecture**: SSG (Static Site Generation).
- **Stack Options**:
  - *JS*: Astro / Next.js
  - *Go*: Hugo
  - *Ruby*: Jekyll

### 10. Documentation Site
Technical docs.
- **Vision**: Clear, searchable documentation.
- **Stack Options**:
  - *React*: Docusaurus / Nextra
  - *Vue*: VitePress
  - *Python*: MkDocs

### 11. Community Forum
Discussion platform.
- **Vision**: Thread-based community hub.
- **Stack Options**:
  - *Modern*: Discourse (Ruby) / Flarum (PHP)
  - *Custom*: Node.js + Prisma + PostgreSQL

### 12. Learning Management System (LMS)
Course platform.
- **Vision**: Sell and manage online courses.
- **Stack Options**:
  - *Open Source*: Moodle / Open edX
  - *Custom*: MERN Stack / Django

## 🛠️ Tools & Utilities

### 13. Chat / Messaging App
Real-time communication.
- **Vision**: Instant messaging with history.
- **Architecture**: WebSocket / PubSub.
- **Stack Options**:
  - *Backend*: Go (Gorilla WebSocket) / Elixir (Phoenix) / Node.js (Socket.io)
  - *Database*: ScyllaDB / Cassandra / Redis

### 14. CLI Tool
Developer utility.
- **Vision**: Terminal-based productivity.
- **Stack Options**:
  - *Rust*: Clap
  - *Go*: Cobra
  - *Node*: Commander / Oclif
  - *Python*: Typer / Click

### 15. High-Performance API
Backend service.
- **Vision**: Low latency API.
- **Stack Options**:
  - *Rust*: Actix / Axum
  - *Go*: Gin / Echo
  - *Java*: Spring Boot
  - *C#*: ASP.NET Core

## 🏢 Enterprise & Specialized

### 16. Real-time Collaboration (Whiteboard)
Multiplayer canvas.
- **Vision**: Collaborative visual workspace.
- **Stack Options**:
  - *Sync Engine*: Yjs / Automerge (CRDTs)
  - *Backend*: Hocuspocus / Liveblocks

### 17. Newsletter / Email Platform
Marketing automation.
- **Vision**: Email distribution.
- **Stack Options**:
  - *Self-hosted*: Listmonk (Go) / Mautic (PHP)
  - *Cloud*: AWS SES + Custom Frontend

### 18. Web3 / DApp
Blockchain interaction.
- **Vision**: Decentralized application.
- **Stack Options**:
  - *EVM*: Wagmi + Viem + Solidity
  - *Solana*: Anchor + React

### 19. Social Media Dashboard
Social management.
- **Vision**: Schedule and analyze posts.
- **Stack Options**:
  - *Fullstack*: T3 Stack / Nuxt
  - *Backend*: Serverless Functions

### 20. Microservices System
Large scale architecture.
- **Vision**: Decoupled, scalable services.
- **Architecture**: Event-driven Microservices.
- **Stack Options**:
  - *Orchestration*: Kubernetes / Docker Swarm
  - *Communication*: gRPC / Kafka / RabbitMQ
  - *Services*: Mix of Go, Java, Node.js

---

## 💡 How to choose?

SBBL encourages you to choose the stack that fits your **team's expertise** and **project requirements**.

- **Need Speed?** → Go with Monoliths (Laravel, Django, Next.js).
- **Need Scale?** → Go with Go, Rust, Elixir.
- **Need AI?** → Python is king, but JS/TS is catching up fast.
