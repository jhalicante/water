import jwt from 'jsonwebtoken';
import config from '../config/Config';

class SignUpController {
  SignUp(req, res) {
    res.header('Content-Type', 'application/json');

    var token = jwt.sign({ foo: 'bar' }, config.jwt_secret_key, {expiresIn: '1d'});
    var decoded = jwt.verify(token, config.jwt_secret_key);

    if(req.body.fname != undefined && 
        req.body.lname != undefined && 
        req.body.email != undefined && 
        req.body.password != undefined &&
        req.body.type != undefined) {
        
        var data = {
            uid : config.genuid(),
            fname : req.body.fname,
            lname : req.body.lname,        
            username : req.body.username,
            password : req.body.password,
            user_type : 'customer'
        };

        con.query('SELECT * from user_accounts WHERE username="'+data.username+'" ', function (error, results, fields) {
            if (error){
                res.status(200)
                .send({
                    errorCode : 400,
                    er : error,
                    message : 'Unable to check details',
                });
            }
            else {
                if(results.length >= 1) {
                    res.status(200)
                    .send({
                        errorCode : 0,
                        message: 'username already exists'
                    });
                } 
                else { 
                    con.query('INSERT INTO user_accounts SET ? ', [data], function (error, results, fields) {
                        if (error){
                            res.status(200)
                            .send({
                                errorCode : 400,
                                data : error,
                                message : 'Unable to register an account',
                                response : {
                                    errorMessage : error
                                }
                            });
                        }
                        else {
                            res.status(200)
                            .send({
                                errorCode : 0,
                                message: 'sucessfully registered'
                            });    
                        }
                    });
                }
            }
    
        });   
    }
    else {
        res.status(200)
        .send({
            errorCode : 400,
            message: 'no valid parameters'
        });       
    }
  }
}

const _SignUpController = new SignUpController();
export default _SignUpController;
