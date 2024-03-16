const router = require("express").Router();
const {
  models: { Collection },
} = require("../db");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const collection = await Collection.findAll({
      where: {
        collectionNum: req.params.id,
      },
    });
    res.json(collection);
  } catch (err) {
    next(err);
  }
});
