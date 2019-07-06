import express from "express";
import { getAddProduct, postAddProduct } from "../controllers/products";

export const adminRouter = express.Router();

adminRouter.get("/add-product", getAddProduct).post("/add-product", postAddProduct);

