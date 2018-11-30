import jwt from 'jsonwebtoken';
import config from '../config/Config';


class SignInController {
  SignIn(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Content-Type', 'application/json');

    var token = jwt.sign({ foo: 'bar' }, config.jwt_secret_key, {expiresIn: '1d'});
    var decoded = jwt.verify(token, config.jwt_secret_key);

    var username = req.body.username;
    var password = req.body.password;

    con.query('SELECT * from user_accounts WHERE username="'+username+'" AND password="'+password+'" ', function (error, results, fields) {
        if (error){
          res.status(200)
          .send({
            errorCode : 400,
            message : 'Unable to login an account'
          });
        }
        else {
          if(results.length == 1) {
            res.status(200)
            .send({
              errorCode : 0,
              message: 'Successfully retrieved',
              response : {
                token : token,
                profile : {
                  uid : results[0].uid,
                  username : results[0].username,
                  user_type : results[0].user_type,
                  fname : results[0].fname,
                  lname : results[0].lname,
                }
              }
            });
          } else {
            res.status(200)
            .send({
              errorCode : 400,
              message: 'Invalid email or password'
            });    
          }

        }

    });
  }
}

const _SignInController = new SignInController();
export default _SignInController;
