import express from "express";
import { products } from "../models/products";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    formsCss: true,
    productCss: true,
    activeAddProduct: true
  });
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export { router, products };
