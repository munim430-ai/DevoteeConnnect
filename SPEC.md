# BhaktiConnect: Development & Specification Document

## 1. Executive Product Vision
**BhaktiConnect** is an ultra-premium digital ecosystem designed to unify the global ISKCON community. Our primary goal is to bridge the gap between ancient spiritual practices and modern networking through a "Digital Temple" experience.

**Unique Value Proposition (UVP):**
*   **Spiritual Continuity:** A single point of truth for sadhana, scripture, and community.
*   **Proximity Service:** Transforming global connection into local sanga.
*   **Authentic Wisdom:** AI-enabled access to Srila Prabhupada's teachings.

**Visual Design System:**
*   **Aesthetic:** "Premium Matte" — utilizing deep matte blacks (`#0D0D0D`), soft minimalist whites (`#F9F9F9`), and metallic gold accents (`#D4AF37`) to convey royalty and sanctity.
*   **Typography:** The **GEBUK** hierarchy:
    *   **Titles:** Bold, oversized, high-contrast (Gold/White).
    *   **Body:** Minimalist sans-serif, spacious tracking.

---

## 2. Core Features & Advanced Enhancements

### A. Sanga & Proximity Networking
*   **Geo-Discovery:** Uses location services to find nearby devotees and Namahatta programs.
*   **Interest Matching:** Filter connections by specific सेवा (Seva) interests like Jiva-Daya or Book Distribution.
*   **Mentorship:** Request initiation-prep or general guidance from seasoned mentors.

### B. Digital Sadhana Tracker
*   **Interactive Mala:** A haptic-feedback counter for 108 beads with global streaks.
*   **Private Sync:** Share progress with mentors automatically for accountability.
*   **Scripture Progress:** Track reading benchmarks for Bhagavad-gita and Srimad Bhagavatam.

### C. Vaishnava Calendar & Ekadashi Portal
*   **Dynamic Calculation:** Real-time sunrise/sunset/Ekadashi times based on GPS coordinates.
*   **Alerts:** Push notifications for fast-breaking (Parana) windows.

### D. Virtual Satsang Vault
*   **HD Audio:** Low-latency streaming for kirtans and morning lectures.
*   **Interactive Q&A:** Synchronized hand-raising and question queues.

### E. [Advanced] Seva & Micro-Gifting Engine
*   **Impact Tracking:** Transparent ledger for Go-Seva (cow protection).
*   **Gamified Devotion:** Digital badges (e.g., "Gopala's Guardian") awarded for consistent Seva participation.

### F. [Advanced] AI Wisdom Guide
*   **RAG Engine:** Retrieval-Augmented Generation trained exclusively on the Bhaktivedanta VedaBase.
*   **Context Aware:** Answers tailored to a devotee's level of advancement (Neophyte to Seasoned).

---

## 3. Technical Architecture & Tech Stack

### Frontend
*   **Framework:** React Native / React (Mobile-Responsive Web Prototype).
*   **Styling:** Tailwind CSS / NativeWind.
*   **Animations:** Framer Motion / Reanimated.

### Backend & API
*   **Primary Database:** Firebase Firestore (for real-time chat and sadhana sync).
*   **Search/RAG:** Pinecone (Vector DB) + Gemini 1.5 Pro.
*   **Calculations:** Custom Node.js microservice for lunar calendar logic using Astronomy APIs.
*   **Payments:** Stripe for Seva contributions.

### State Management
*   **Zustand:** Lightweight store for auth, localization, and theme state.

---

## 4. UI/UX Folder & Component Hierarchy
```text
/src
  /components
    /common        (Button, Card, Typography)
    /sadhana       (MalaCounter, SadhanaStats)
    /sanga         (DevoteeMap, SangaCard, NearbyFilter)
    /calendar      (EkadashiTimer, FestivalAlert)
    /ai            (WisdomChat, SourceReference)
    /seva          (GiftingCart, BadgeDisplay)
  /hooks           (useLocation, useSadhana)
  /services        (geminiService, firebaseConfig)
  /store           (authStore, uiStore)
```
**Localization:** Support for Hindi, Bengali, Gujarati, Marathi, and Tamil via i18next.
