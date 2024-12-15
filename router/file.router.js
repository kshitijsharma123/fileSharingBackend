import { Router } from "express";
import path from "path";
import {
  fileUpload,
  downloadFile,
  viewFile,
  sendEmailHandler,
} from "../Controller/file.controller.js";
import multer from "multer";

let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

let upload = multer({
  storage,
  limit: { fileSize: 100000 * 100 },
}).single("file");

const router = Router();

router.route("/send").post(sendEmailHandler);
router.route("/upload").post(upload, fileUpload);
router.route("/:uuid").get(viewFile).post(viewFile);
router.route("/download/:uuid").get(downloadFile);

export default router;
