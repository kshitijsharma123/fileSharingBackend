import express from "express";
import { connectDB } from "./config/db.js";
const PORT = 3534;

import cors from "cors";


const app = express();

// Import Router
import fileRoute from "./router/file.router.js";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let urlHits = new Object();

app.use((req, res, next) => {
  const { url, ip } = req;
  const identifier = `${url}-${ip}`;
  urlHits[identifier] = (urlHits[identifier] || 0) + 1;
  console.log({
    url,
    ip,
    urlHitCount: urlHits[identifier],
  });

  next();
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/files", fileRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log({ serverLive: true, PORT });
  });
});

export { app };
