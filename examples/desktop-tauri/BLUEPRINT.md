# Secure Note Vault - Tauri Edition

## 1. Spark (The Idea)
**Vision**: A secure, offline-first markdown note-taking application for desktop that encrypts data at rest.
**Target Audience**: Privacy-conscious users, Journalists, Developers.
**Problem**: Electron apps are heavy (RAM hungry) and cloud apps aren't private.
**Solution**: A tiny (<10MB) app built with Rust (Tauri) and React that runs locally.

## 2. Tech Stack
- **Core**: Tauri v2 (Rust)
- **Frontend**: React + Vite
- **UI Library**: Radix UI + TailwindCSS
- **Database**: SQLite (via sqlx in Rust)
- **Encryption**: AGE (Actually Good Encryption) or Sodium

## 3. Architecture
- **Pattern**: Backend-for-Frontend (Rust handles OS/DB, JS handles UI)
- **Communication**: Tauri IPC (Inter-Process Communication)
- **Security**: Isolation pattern (No remote content allowed)

## 4. Rust Command Example
```rust
#[tauri::command]
fn save_note(title: String, content: String) -> Result<(), String> {
    let encrypted_content = encrypt_data(&content)?;
    
    let conn = Connection::open("notes.db")?;
    conn.execute(
        "INSERT INTO notes (title, content) VALUES (?1, ?2)",
        params![title, encrypted_content],
    )?;
    
    Ok(())
}
```

## 5. Implementation Roadmap
- **Phase 1**: Tauri Setup & UI Shell
- **Phase 2**: Rust Backend & SQLite Integration
- **Phase 3**: Markdown Editor (ProseMirror/TipTap)
- **Phase 4**: Encryption & File Export

## 6. Business Rules
- No data ever leaves the user's device.
- Master password is required to decrypt the database.
- App must launch in under 1 second.
