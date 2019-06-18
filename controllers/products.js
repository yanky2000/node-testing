import { Product } from "../models/product";

export function getAddProduct(req, res, next) {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    formsCss: true,
    productCss: true,
    activeAddProduct: true
  });
}

export function postAddProduct(req, res) {
  console.log(req.body.title);
 const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
}

export function getProducts(req, res, next) {
  Product.fetchAll( products => {
      res.render("shop", {
        pageTitle: "Shop",
        products,
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productsCss: true
      });
  });
}
