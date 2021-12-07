const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  try {
    Product.findAll({
      include: [
        { model: Category, model: Tag }
      ]
    }).then(m_product => res.status(200).json(m_product));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    Product.findOne({
      where: {
        id: req.params.id
      },
      include: [
        { model: Category, model: Tag }
      ]
    })
    .then(m_product => {
      if (!m_product) {
        res.status(404).json({ message: "Can't find product with this Id" }); 
        return; 
      }
      res.status(200).json(m_product);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
  Product.create(req.body)
    .then((m_product) => {
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      res.status(200).json(m_product);
    })
    .then((m_productTagIds) => res.status(200).json(m_productTagIds));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((m_product) => {
        return ProductTag.findAll({ where: { product_id: req.params.id } });
      })
      .then((m_productTags) => {
        const productTagIds = m_productTags.map(({ tag_id }) => tag_id);
        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });
        const productTagsToRemove = m_productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);

        return Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      })
    .then((updatedProductTags) => res.json(updatedProductTags));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    Product.destroy({
      where: {
          id: req.params.id
      }
    })
      .then(m_product => {
          if (!m_product) {
              res.status(404).json({ message: "Can't find product with this Id" });
              return;
          }
          res.status(200).json(m_product);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
