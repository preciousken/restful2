const express = require('express');
const router = express.Router();
const {updateUser,deleteUser,getSingleUser, getAllUsers,countUser} = require('../controllers/user')
const {verifyToken, verifyUser, verifyAdmin} = require('../utilities/verifyToken')
// update
router.put('/update/:id',updateUser)
// delete
router.delete('/delete/:id',deleteUser)
// get
router.get('/one/:id',getSingleUser)
// get all
router.get('/all',getAllUsers)
// count users
router.get('/userCount',countUser)

module.exports = router;
