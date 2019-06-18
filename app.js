import express from "express";
import path from "path";
import bodyParser from "body-parser";

import { adminRouter } from "./routes/admin";
import { shopRouter } from "./routes/shop";
import { get404 } from "./controllers/404";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/admin", adminRouter);
app.get('/test', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 's.html'))
    // res.sendFile(views', 'sample')
})
app.use(shopRouter);

app.use(get404);

app.listen(3000);
