const express = require("express");

const app = express();

app.use(require("./router/brands.router"));
app.use(require("./router/products.route"));

const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
