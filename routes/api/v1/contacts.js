var express = require('express');
var router = express.Router();
var contactsModels = require('../../../models/contacts');
router.get('/', (req, res) => {
	contactsModels.find({})
	.then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })  
});

router.get('/:id', (req, res) => {
	contactsModels.findOne({id:req.params.id})
	.then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })  
});

module.exports = router;