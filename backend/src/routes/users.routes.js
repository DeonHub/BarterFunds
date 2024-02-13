const express = require("express");
const router = express.Router();

const { getUsers,
        getUser,
        editUser,
        deleteUser,
        blockUser
     } = require('../controllers/users.controllers');

const checkAuth = require('../middleware/check-auth');

router.get("/", checkAuth, getUsers);
router.get("/:userId", checkAuth, getUser);
router.patch("/:userId", checkAuth, editUser);
router.patch("/:userId", checkAuth, blockUser);
router.delete("/:userId", checkAuth, deleteUser);


module.exports = router;
