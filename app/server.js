import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 80;

app.use(express.json());

const DEMO_EMAIL = process.env.DEMO_EMAIL;
const DEMO_PASSWORD = process.env.DEMO_PASSWORD;

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (
    DEMO_EMAIL &&
    DEMO_PASSWORD &&
    email === DEMO_EMAIL &&
    password === DEMO_PASSWORD
  ) {
    return res.json({ success: true });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`FluxOps server listening on port ${PORT}`);
});
