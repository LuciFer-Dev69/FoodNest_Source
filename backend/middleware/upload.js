import multer from "multer";
import path from "path";

// ── Memory storage (Vercel-compatible) ──────────────────────────────────────
// Vercel's serverless runtime has a read-only filesystem, so we cannot use
// diskStorage. Files are held in memory (req.file.buffer) and converted to
// base64 data URIs for storage in MongoDB.
const storage = multer.memoryStorage();

const fileFilter = (_req, file, cb) => {
  const allowed = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".mp4", ".mov", ".webm"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only image/video files (jpg, jpeg, png, webp, gif, mp4, mov, webm) are allowed."), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

export const communityUpload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

// ── Helper: convert an uploaded file buffer to a base64 data URI ─────────────
// Controllers call this instead of using req.file.filename.
export function fileToDataUri(file) {
  if (!file || !file.buffer) return null;
  const base64 = file.buffer.toString("base64");
  return `data:${file.mimetype};base64,${base64}`;
}
