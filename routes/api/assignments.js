const express = require('express');
const router = express.Router();
const assignmentsCtrl = require('../../controllers/api/assignments');

router.get('/:classId', assignmentsCtrl.getStudents);
router.post('/create/:assignmentId', assignmentsCtrl.create);

module.exports = router;