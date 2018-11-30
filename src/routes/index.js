import express from 'express';
const router = express.Router();

import config from '../config/Config'; // Config

// Controller Controller
import SignInCtrlr from '../controller/SignIn';
import SignUpCtrlr from '../controller/SignUp';
import WSCtrlr from '../controller/WaterStation';
import OrdersCtrlr from '../controller/Orders';

//**************************//
//***   API Router       ***//
//**************************//

// Entry API URL
router.post(config.apiVersion+'/signin', SignInCtrlr.SignIn);
router.post(config.apiVersion+'/signup', SignUpCtrlr.SignUp);

// Search Water Station
router.get(config.apiVersion+'/search', WSCtrlr.Search);

// Customer Orders Water Stations
router.get(config.apiVersion+'/orders/customer', OrdersCtrlr.OrderList);
router.get(config.apiVersion+'/orders/delivery', OrdersCtrlr.DeliveryOrderList);
router.post(config.apiVersion+'/orders/customer/submit-order', OrdersCtrlr.SubmitOrders);
router.post(config.apiVersion+'/orders/delivery/deliver-now', OrdersCtrlr.DeliverNow);


export default router;
