const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');

// router.get('/', studentsCtrl.getStudents);
router.post('/create', studentsCtrl.create);

module.exports = router;