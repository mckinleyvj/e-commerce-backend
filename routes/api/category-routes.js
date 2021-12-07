const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  try {
    Category.findAll({
      include: [
        { model: Product }
      ]
    }).then(m_category => res.status(200).json(m_category));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        { model: Product }
      ]
    })
    .then(m_category => {
      if (!m_category) {
        res.status(404).json({ message: "Can't find category with this Id" }); 
        return; 
      }
      res.status(200).json(m_category);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    Category.create({
      category_name: req.body.category_name
    }).then(m_category => res.status(200).json(m_category));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    Category.update(req.body, {
      where: {
          id: req.params.id
      }
    })
      .then(m_category => {
          if (!m_category[0]) {
              res.status(404).json({ message: "Can't find category with this Id" });
              return;
          }
          res.status(200).json(m_category);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
   
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
