module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_product()
      .then(product => res.status(200).send(products))
      .catch(() => res.status(500).send());
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
  }
};
