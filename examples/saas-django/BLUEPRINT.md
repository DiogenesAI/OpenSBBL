# Enterprise SaaS Starter - Django Edition

## 1. Spark (The Idea)
**Vision**: A robust, enterprise-grade SaaS boilerplate built for longevity and security, focusing on B2B customers who need data compliance.
**Target Audience**: Enterprise developers, B2B startups.
**Problem**: Modern JS stacks move too fast; enterprises need stability and standard security patterns.
**Solution**: A "batteries-included" Django template with pre-configured auth, tenancy, and billing.

## 2. Tech Stack
- **Language**: Python 3.12+
- **Framework**: Django 5.0 (The web framework for perfectionists with deadlines)
- **Frontend**: Django Templates + HTMX (for interactivity without complexity) + TailwindCSS
- **Database**: PostgreSQL 16
- **Cache**: Redis
- **Task Queue**: Celery
- **AI**: LangChain (Python) + OpenAI

## 3. Architecture
- **Pattern**: Monolithic MVC (Model-View-Controller)
- **Deployment**: Docker Compose (Dev) / Kubernetes (Prod)
- **Authentication**: Django Allauth (Standard session-based auth)
- **API**: Django Ninja (FastAPI-like syntax for internal APIs)

## 4. Database Schema (Core)
```python
class Tenant(models.Model):
    name = models.CharField(max_length=100)
    subdomain = models.CharField(max_length=100, unique=True)
    plan = models.CharField(choices=PLANS, default='FREE')

class User(AbstractUser):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE)
    role = models.CharField(choices=ROLES)

class Document(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    vector_embedding = VectorField(dimensions=1536) # pgvector
```

## 5. Implementation Roadmap
- **Phase 1**: Core Setup (Django, Docker, PostgreSQL)
- **Phase 2**: Multi-tenancy & Auth
- **Phase 3**: Billing Integration (Stripe)
- **Phase 4**: AI RAG Implementation (LangChain + pgvector)

## 6. Business Rules
- Each user must belong to a Tenant.
- Free plan tenants are limited to 100 documents.
- Data must be isolated between tenants (Row-level security recommended).
