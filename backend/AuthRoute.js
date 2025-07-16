const { SignupAuth, LoginAuth } = require('./AuthController');
const {userVerification} = require('./AuthMiddleware');
const router = require('express').Router();

router.post('/', userVerification);
router.post('/signup', SignupAuth);
router.post('/login', LoginAuth);
router.get('/', (req, res) => {
  res.send('API is running 🎉');
});


module.exports = router;