import express from "express";
import path from "path";
import bodyParser from "body-parser";

import { router as adminRouter } from "./routes/admin";
import { router as shopRouter } from "./routes/shop";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.render("404", { pageTitle: "Page not found", path: "/" });
});

app.listen(3000);
