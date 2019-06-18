import fs from "fs";
import path from "path";
import { rootDir } from "../utils/path";

const p = path.join(rootDir, "data", "products.json");

export class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}

function getProductsFromFile(cb) {
  fs.readFile(p, (err, fileContent) => {
    if (err) cb([]);
    cb(JSON.parse(fileContent));
  });
}
