import jwt from 'jsonwebtoken';
import config from '../config/Config';


class OrdersController {
  OrderList(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type', 'application/json'); 

    var uid = req.query.uid;

    let query = "SELECT ";
            query += "user_accounts.fname as DeliveryFname, ";
            query += "user_accounts.lname as DeliveryLname, ";
            query += "orders.transaction_id, ";
            query += "orders.customer_id, ";
            query += "orders.delivery_id, ";
            query += "orders.quantity, ";
            query += "orders.status, ";
            query += "orders.description ";
        query += "FROM ";
            query += "user_accounts ";
        query += "INNER JOIN orders ON user_accounts.uid = orders.delivery_id ";
        query += "WHERE ";
            query += "orders.customer_id = '"+uid+"' ";
    con.query(query, function (error, results, fields) {
        if (error){
          res.status(200)
          .send({
            errorCode : 400,
            message : 'Unable to search'
          });
        }
        else {
          if(results.length >= 1) {
            res.status(200)
            .send({
              errorCode : 0,
              message: 'Successfully retrieved',
              response : results
            });
          } else {
            res.status(200)
            .send({
              errorCode : 400,
              message: 'Invalid query',
            });    
          }
        }
    });
  }

  DeliveryOrderList(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type', 'application/json'); 

    var uid = req.query.uid;

    let query = "SELECT ";
            query += "user_accounts.fname as CustomerFname, ";
            query += "user_accounts.lname as CustomerLname, ";
            query += "user_accounts.latitude as CustomerLat, ";
            query += "user_accounts.longitude as CustomerLon, ";
            query += "orders.ID, ";            
            query += "orders.transaction_id, ";
            query += "orders.customer_id, ";
            query += "orders.delivery_id, ";
            query += "orders.quantity, ";
            query += "orders.status, ";
            query += "orders.description ";
        query += "FROM ";
            query += "user_accounts ";
        query += "INNER JOIN orders ON user_accounts.uid = orders.customer_id ";
        query += "WHERE ";
            query += "orders.delivery_id = '"+uid+"' ";
    con.query(query, function (error, results, fields) {
        if (error){
          res.status(200)
          .send({
            errorCode : 400,
            message : 'Unable to search'
          });
        }
        else {
          if(results.length >= 1) {
            res.status(200)
            .send({
              errorCode : 0,
              message: 'Successfully retrieved',
              response : results
            });
          } else {
            res.status(200)
            .send({
              errorCode : 400,
              message: 'Invalid query',
            });    
          }
        }
    });
  }


  SubmitOrders(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type', 'application/json'); 

    var trans_id = new Date(),
        customer_id = req.body.customer_uid,
        delivery_id = req.body.deliveryUID,
        qty = req.body.qty,
        description = req.body.description;

    console.log(req.body);

    let query = "INSERT INTO `orders`(`ID`, `transaction_id`, `customer_id`, `delivery_id`, `quantity`, `description`, `status`) ";
    query +="VALUES (null,'"+trans_id+"','"+customer_id+"','"+delivery_id+"','"+qty+"','"+description+"','waiting')";
    con.query(query, function (error, results, fields) {
        if (error){
          res.status(200)
          .send({
            errorCode : 400,
            message : 'Unable to submit order'
          });
        }
        else {
            res.status(200)
            .send({
                errorCode : 0,
                message: 'Successfully submitted',
            });
        }
    });
  }


  DeliverNow(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type', 'application/json'); 

    var transID = req.body.transID;

    console.log(req.body.transID);

    let query = "UPDATE `orders` SET `status` = 'delivering' WHERE `orders`.`ID` = '"+transID+"';";
    con.query(query, function (error, results, fields) {
        if (error){
          res.status(200)
          .send({
            errorCode : 400,
            message : 'Unable to submit order'
          });
        }
        else {
            res.status(200)
            .send({
                errorCode : 0,
                message: 'Successfully updated',
            });
        }
    });
  }



}

const _OrdersController = new OrdersController();
export default _OrdersController;
