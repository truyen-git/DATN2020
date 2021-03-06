const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
/*const AuthCtrl = require('../controllers/auth');*/

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/req-reset-password', ctrlUser.ResetPassword);
router.post('/new-password', ctrlUser.NewPassword);
router.post('/valid-password-token', ctrlUser.ValidPasswordToken);


module.exports = router;



