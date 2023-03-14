const express = require('express');
const router = express.Router();
const classesCtrl = require('../../controllers/api/classes');

router.get('/id/:newStu', classesCtrl.setId)
router.get('/index', classesCtrl.index);
router.get('/:userId', classesCtrl.getStudents)
router.post('/create', classesCtrl.create);
router.post('/addstu', classesCtrl.createstu);
router.post('/createAss/:classId', classesCtrl.createAss);

module.exports = router;