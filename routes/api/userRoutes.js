const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteSingleUser).put(updateSingleUser);

module.exports = router;
