const express = require('express');
const router = express.Router();
const classesCtrl = require('../../controllers/api/classes');

router.get('/', classesCtrl.getMyStudents)
router.get('/index', classesCtrl.index);
router.post('/create', classesCtrl.create);
router.post('/addstu', classesCtrl.createstu);

module.exports = router;