const express = require('express');
const { isAuthenticatedUser } = require('../controllers/admin');
const { addMember, updateMember, deleteMember, getMembers,getAllMembers } = require('../controllers/memberController');
const router = express.Router();


// router.route("/member/new").post(isAuthenticatedUser, addMember)
// router.route("/member/:id").put(isAuthenticatedUser, updateMember).delete(isAuthenticatedUser, deleteMember)
router.route("/members/:session/:year").get(getMembers)

router.route("/member").get(getAllMembers)
router.route("/member").post(addMember)
router.route("/member/:id").put(updateMember).delete(deleteMember)

module.exports = router;