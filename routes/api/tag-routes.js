const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  try {
    Tag.findAll({
      include: [
        { model: Product }
      ]
    }).then(m_tag => res.json(m_tag));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        { model: Product }
      ]
    })
    .then(m_tag => {
      if (!m_tag) {
        res.status(404).json({ message: "Can't find tag with this Id" }); 
        return; 
      }
      res.status(200).json(m_tag);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    Tag.create({
      tag_name: req.body.tag_name
    }).then(m_tag => res.status(200).json(m_tag));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    Tag.update(req.body, {
      where: {
          id: req.params.id
      }
    })
      .then(m_tag => {
          if (!m_tag[0]) {
              res.status(404).json({ message: "Can't find tag with this Id" });
              return;
          }
          res.status(200).json(m_tag);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    Tag.destroy({
      where: {
          id: req.params.id
      }
    })
      .then(m_tag => {
          if (!m_tag) {
              res.status(404).json({ message: "Can't find tag with this Id" });
              return;
          }
          res.status(200).json(m_tag);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
