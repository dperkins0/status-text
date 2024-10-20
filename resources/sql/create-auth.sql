CREATE TABLE IF NOT EXISTS auth (
  credentialID TEXT NOT NULL PRIMARY KEY,
  userId TEXT NOT NULL,
  credentialPublicKey TEXT NOT NULL,
  counter INTEGER,
  credentialDeviceType TEXT,
  credentialBackedUp INTEGER,
  transports TEXT,
  aaguid TEXT
);