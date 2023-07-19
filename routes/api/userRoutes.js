const router = require('express').Router();
const {
  getUsers,
  addFriends,
  getSingleUser,
  deleteSingleUser,
  deleteSingleFriend,
  updateSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteSingleUser).put(updateSingleUser).post(addFriends);

// /api/users/friends/:friendId
router.route('friends/:userId').delete(deleteSingleFriend);

module.exports = router;
