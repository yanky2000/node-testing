import express from "express";
import { getProducts } from "../controllers/products";

export const shopRouter = express.Router();
shopRouter.get("/", getProducts);

