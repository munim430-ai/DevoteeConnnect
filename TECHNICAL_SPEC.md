# DevoteeConnect: Technical Specification & System Architecture

## 1. Executive Vision & Aesthetics
**DevoteeConnect** is an ultra-premium, distraction-free digital ecosystem for the global ISKCON community. The application serves as a "Digital Sanga," bridging traditional practice with high-performance networking.

### Design System: "Matte Divinity"
*   **Color Palette:**
    *   Primary: `Matte Black (#0D0D0D)` - Represents the depth of the spiritual void.
    *   Accent: `Premium Gold (#D4AF37)` - Represents divine sovereignty.
    *   Surface: `Matte Gray (#1A1A1A)` - For clean, functional elevation.
*   **GEBUK Typography:**
    *   **Titles:** 40px Bold, tracking-tight, Premium Gold.
    *   **Subtitles:** 12px Medium, tracking-widest, uppercase Matte Gray.
    *   **Body:** 16px Inter, high legibility.

---

## 2. Advanced Features Specification

### A. Sanga & Proximity Matcher
*   **Engine:** PostGIS-enabled geo-queries.
*   **Logic:**
    1.  Capture user coordinates via `navigator.geolocation`.
    2.  Query `users` and `sanga_groups` tables using the Haversine formula.
    3.  Filter by `secrecy_level` and `initiation_status` to ensure privacy.
*   **Radius:** Dynamic scaling from 5km to 100km.

### B. Sadhana Tracker & Digital Mala
*   **UX:** Interactive Haptic Feedback on each bead tap.
*   **Persistence:** Local-first syncing with background Firebase update to ensure zero-latency counting.
*   **Mentorship Sync:** Opt-in WebSocket stream to mentors for real-time accountability.

### C. Smart Calendar Engine
*   **Calculation:** Modified lunicolar algorithms for Vaisnava Tithis.
*   **Data Points:** Hyper-local Parana times (fast-breaking) calculated via GPS.
*   **Alerts:** Push notifications 12 hours before Ekadashi.

### D. AI Wisdom Guide (RAG)
*   **Stack:** Vector Database (Pinecone) + Gemini 1.5 Pro.
*   **Process:** 
    1.  User enters philosophical query.
    2.  System retrieves top-k relevant verses from Srimad Bhagavatam and Bhagavad-gita purports.
    3.  Model synthesizes answer citing specific Verse numbers.

### E. Seva & Micro-Gifting Engine
*   **Payment:** Stripe Connect for secure globally-compliant temple sponsorship.
*   **ledger:** Transparent crypto-graphically signed ledger for Go-Seva and Anna-Daan transparency.

---

## 3. Data Architecture (SQL Schema)

```sql
-- Core User Profiles
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  spiritual_name VARCHAR(255),
  legal_name VARCHAR(255),
  initiation_status VARCHAR(50) CHECK (initiation_status IN ('Aspirant', 'Initiated', 'Mentor')),
  location_lat DOUBLE PRECISION,
  location_lng DOUBLE PRECISION,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sadhana Tracking
CREATE TABLE sadhana_logs (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  japa_rounds INTEGER DEFAULT 0,
  scripture_minutes INTEGER DEFAULT 0,
  log_date DATE DEFAULT CURRENT_DATE,
  UNIQUE(user_id, log_date)
);

-- Community Groups
CREATE TABLE sanga_groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  mentor_id UUID REFERENCES users(id),
  location_point GEOGRAPHY(Point, 4326),
  meeting_frequency VARCHAR(50)
);

-- Virtual Satsang
CREATE TABLE satsang_rooms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_name VARCHAR(255),
  host_id UUID REFERENCES users(id),
  is_live BOOLEAN DEFAULT false,
  start_time TIMESTAMP WITH TIME ZONE
);
```

---

## 4. Component & Folder Hierarchy

```text
/src
  /components
    /navigation
      - BottomNav.tsx        (Interactive tab switcher)
      - Header.tsx           (Premium branding)
    /typography
      - GebukHeader.tsx      (Themed titles/subtitles)
    /audio
      - KirtanPlayer.tsx     (HD audio controls)
      - StreamRoom.tsx       (Virtual Satsang UI)
    /features
      /sadhana               (MalaCounter, StatsGraph)
      /sanga                 (MapView, DevoteeCard)
      /ai                    (WisdomChat, KnowledgeSource)
      /seva                  (DonationForm, ImpactLedger)
  /services
    - locationService.ts     (Geo-logic)
    - calendarService.ts     (Tithi math)
    - aiService.ts           (RAG integration)
  /store
    - useSadhanaStore.ts     (Local state management)
```
