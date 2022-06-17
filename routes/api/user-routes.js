const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/users')
    .get(getAllUsers, getUserById)
    .post(createNewUser)
    .put(updateUser)
    .delete(deleteUser);

router  
    .route('/users/:userId/:friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;

