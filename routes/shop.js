import express from "express";
import { products } from "../models/products";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    products,
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productsCss: true
  });
});

export { router };
