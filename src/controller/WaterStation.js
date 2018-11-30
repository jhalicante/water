import jwt from 'jsonwebtoken';
import config from '../config/Config';


class WSController {
  Search(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type', 'application/json'); 

    var query = req.query.query;
    con.query('SELECT * from user_accounts WHERE fname LIKE "%'+query+'%" AND user_type="delivery" ', function (error, results, fields) {
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
              message: 'No results',
            });    
          }
        }
    });
  }
}

const _WSController = new WSController();
export default _WSController;
