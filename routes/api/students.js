const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');

router.get('/grades/:id', studentsCtrl.getGrades);
router.post('/:id', studentsCtrl.create);

module.exports = router;