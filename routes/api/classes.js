const express = require('express');
const router = express.Router();
const classesCtrl = require('../../controllers/api/classes');

router.get('/', classesCtrl.index);
router.post('/create', classesCtrl.create);

module.exports = router;