-- D1 schema for AI Training Coaching enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  stripe_session_id TEXT NOT NULL UNIQUE,
  email             TEXT,
  name              TEXT,
  country           TEXT,
  package           TEXT NOT NULL,
  price_id          TEXT,
  amount            REAL NOT NULL,
  currency          TEXT NOT NULL,
  status            TEXT NOT NULL DEFAULT 'paid',
  created_at        TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments (email);
