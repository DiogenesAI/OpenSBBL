# Focus Mode - Chrome Extension

## 1. Spark (The Idea)
**Vision**: A browser extension that helps users stay focused by blocking distracting sites and tracking productivity time.
**Target Audience**: Students, Remote workers.
**Problem**: Social media feeds are engineered to steal attention.
**Solution**: A local-first extension that enforces Pomodoro timers and blocks feeds.

## 2. Tech Stack
- **Framework**: Plasmo (The Next.js for Browser Extensions)
- **UI**: React + TailwindCSS
- **Storage**: Chrome Storage API (Sync)
- **Background**: Service Workers (Manifest V3)

## 3. Architecture
- **Components**:
  - **Popup**: Quick controls (Start/Stop timer).
  - **Options Page**: Settings & Whitelist.
  - **Content Script**: Injects blocking overlay on distracted sites.
  - **Background Service**: Handles timer logic and notifications.

## 4. Manifest V3 Config (Plasmo)
```json
{
  "manifest_version": 3,
  "name": "Focus Mode",
  "permissions": [
    "storage",
    "tabs",
    "alarms",
    "notifications"
  ],
  "host_permissions": [
    "https://*/*",
    "http://*/*"
  ],
  "background": {
    "service_worker": "background.ts"
  }
}
```

## 5. Implementation Roadmap
- **Phase 1**: Popup UI & Timer Logic
- **Phase 2**: Site Blocking (Content Script)
- **Phase 3**: Settings & Configuration
- **Phase 4**: Gamification (Streaks/Stats)

## 6. Business Rules
- Timer continues running even if browser is closed (using Alarms API).
- Blocking cannot be disabled during a "Focus Session" (Hard mode).
- Data syncs across user's Chrome devices.
