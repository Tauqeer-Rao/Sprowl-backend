const express = require('express');
const router = express.Router();
const authControllerFounder = require('../controllers/auth/authControllerFounder');
const authControllerInvester = require('../controllers/auth/authControllerInvester');
const authControllerWorker = require('../controllers/auth/authControllerWorker')
const authControllerCustomer = require('../controllers/auth/authControllerCustomer');

const userControllerFounder = require('../controllers/FounderControllers/userController')
const productContollerFounder = require('../controllers/FounderControllers/productController')

const productContollerInvester = require('../controllers/InvesterControllers/productController')
const userControllerInvester = require('../controllers/InvesterControllers/userController')

const userControllerWorker = require('../controllers/WorkerControllers/userController')

const productContollerCustomer = require('../controllers/CustomerControllers/productController')
const userControllerCustomer = require('../controllers/CustomerControllers/userController')



//****************************** */ Routes founder

router.post('/founder/login', authControllerFounder.login);
router.post('/founder/signup', authControllerFounder.signup);

//User Routes
router.post('/founder/user/create', userControllerFounder.createUser);
router.get('/founder/user/getall', userControllerFounder.getAllUsers);
router.get('/founder/user/:userId', userControllerFounder.getUserById);
router.put('/founder/user/:userId', userControllerFounder.updateUserById);
router.delete('/founder/user/:userId', userControllerFounder.deleteUserById);

//Product Routes
router.post('/founder/product/create', productContollerFounder.createProduct);
router.get('/founder/product/getAllProducts', productContollerFounder.getAllProducts);
router.get('/founder/product/:productId', productContollerFounder.getProductById);
router.put('/founder/product/:productId', productContollerFounder.updateProductById);
router.delete('/founder/product/:productId', productContollerFounder.deleteProductById);



// ***********************Routes Invester

router.post('/invester/login', authControllerInvester.login);
router.post('/invester/signup', authControllerInvester.signup);

//User Routes
router.post('/invester/user/create', userControllerInvester.createUser);
router.get('/invester/user/getall', userControllerInvester.getAllUsers);
router.get('/invester/user/:userId', userControllerInvester.getUserById);
router.put('/invester/user/:userId', userControllerInvester.updateUserById);
router.delete('/invester/user/:userId', userControllerInvester.deleteUserById);

//Product Routes
router.post('/invester/product/create', productContollerInvester.createProduct);
router.get('/invester/product/getAllProducts', productContollerInvester.getAllProducts);
router.get('/invester/product/:productId', productContollerInvester.getProductById);
router.put('/invester/product/:productId', productContollerInvester.updateProductById);
router.delete('/invester/product/:productId', productContollerInvester.deleteProductById);



// ***********************Routes Worker

router.post('/worker/login', authControllerWorker.login);
router.post('/worker/signup', authControllerWorker.signup);

//User Routes
router.post('/worker/user/create', userControllerWorker.createUser);
router.get('/worker/user/getall', userControllerWorker.getAllUsers);
router.get('/worker/user/:userId', userControllerWorker.getUserById);
router.put('/worker/user/:userId', userControllerWorker.updateUserById);
router.delete('/worker/user/:userId', userControllerWorker.deleteUserById);

// //Product Routes
// router.post('/invester/product/create', productContollerInvester.createProduct);
// router.get('/invester/product/getAllProducts', productContollerInvester.getAllProducts);
// router.get('/invester/product/:productId', productContollerInvester.getProductById);
// router.put('/invester/product/:productId', productContollerInvester.updateProductById);
// router.delete('/invester/product/:productId', productContollerInvester.deleteProductById);


// ***********************Routes Customer

router.post('/customer/login', authControllerCustomer.login);
router.post('/customer/signup', authControllerCustomer.signup);

//User Routes
router.post('/customer/user/create', userControllerCustomer.createUser);
router.get('/customer/user/getall', userControllerCustomer.getAllUsers);
router.get('/customer/user/:userId', userControllerCustomer.getUserById);
router.put('/customer/user/:userId', userControllerCustomer.updateUserById);
router.delete('/customer/user/:userId', userControllerCustomer.deleteUserById);

//Product Routes
router.post('/customer/product/create', productContollerCustomer.createProduct);
router.get('/customer/product/getAllProducts', productContollerCustomer.getAllProducts);
router.get('/customer/product/:productId', productContollerCustomer.getProductById);
router.put('/customer/product/:productId', productContollerCustomer.updateProductById);
router.delete('/customer/product/:productId', productContollerCustomer.deleteProductById);


module.exports = router;