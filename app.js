const express = require("express");
const bodyParser = require('body-parser')

const path = require("path");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/admin', adminRoutes.router);
app.use(shopRoutes)

app.use((req, res, next) => {
  res.render('404', {pageTitle: 'Page not found'})
});

app.listen(3000);

