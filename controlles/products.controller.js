module.exports.productsController = {
  getProducts: (req, res) => {
    res.send("файл создан");
  },

  postProducts: (req, res) => {
    res.send("файл изменен");
  },
  deleteProducts: (req, res) => {
    res.send("файл удален");
  },
};
