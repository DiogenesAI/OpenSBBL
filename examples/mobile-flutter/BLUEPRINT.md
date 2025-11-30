# Fitness Tracker - Flutter Edition

## 1. Spark (The Idea)
**Vision**: A beautiful, smooth 60fps fitness tracking application for iOS and Android that works offline-first.
**Target Audience**: Gym goers, Health enthusiasts.
**Problem**: Web-based mobile apps feel sluggish; Native apps require two codebases.
**Solution**: A single codebase Flutter app that compiles to native ARM code.

## 2. Tech Stack
- **Framework**: Flutter 3.x (Dart)
- **State Management**: Riverpod (Compile-safe state)
- **Backend**: Firebase (Auth, Firestore, Cloud Functions)
- **Local Database**: Isar or Hive (NoSQL, super fast)
- **Maps**: Google Maps Flutter

## 3. Architecture
- **Pattern**: MVVM (Model-View-ViewModel) or Clean Architecture
- **Strategy**: Offline-first (Read from local DB, sync to Cloud in background)
- **UI**: Material 3 (Android) + Cupertino (iOS) adaptive design

## 4. Data Models (Dart)
```dart
@collection
class Workout {
  Id id = Isar.autoIncrement;
  
  late String name;
  late DateTime date;
  
  @Backlink(to: 'workout')
  final exercises = IsarLinks<Exercise>();
}

@collection
class Exercise {
  Id id = Isar.autoIncrement;
  
  late String name;
  late int sets;
  late int reps;
  late double weight;
}
```

## 5. Implementation Roadmap
- **Phase 1**: UI Prototyping (Widgets & Navigation)
- **Phase 2**: Local Database Implementation (Isar)
- **Phase 3**: Firebase Integration (Auth & Sync)
- **Phase 4**: Polish & Animations

## 6. Business Rules
- App must be fully functional without internet.
- Sync happens automatically when connection is restored.
- Premium features (AI coaching) require subscription.
