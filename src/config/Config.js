/*
*   DB Connection
*/
import crypto from 'crypto';

let algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';


module.exports = {
    project_title : 'Water Station API',
    jwt_secret_key : 'waterstationapi',
    port : process.env.PORT || 9090,
    host_name : 'https://fastfood-mob-app.herokuapp.com',
    apiVersion : '/api/v1',
    // database: {
    //     multipleStatements: true,
    //     socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
    //     host  : 'localhost',
    //     user   : 'root',
    //     password  : 'root',
    //     database   : 'water_station',
    // },
    database: {
        multipleStatements: true,
        host  : 'us-cdbr-iron-east-01.cleardb.net',
        user   : 'b3cb40578e3cfc',
        password  : '04ace0c3',
        database   : 'heroku_3d6bdd955993ad0',
    },
    encrypt : (val) => {
        var text = val.toString();
        var cipher = crypto.createCipher(algorithm,password)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    },
    decrypt(val){
        var text = val.toString();        
        var decipher = crypto.createDecipher(algorithm,password)
        var dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    },
    genuid() {
        var d = new Date().valueOf();
        var n = d.toString();
    
        var result = '';
        var length = 32;
        var p = 0;
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
        for (var i = length; i > 0; --i){
            result += ((i & 1) && n.charAt(p) ? '' + n.charAt(p) + '' : chars[Math.floor(Math.random() * chars.length)]);
            if(i & 1) p++;
        };
        var output = 'UID'+result+''+d;
        return output.toString().toUpperCase();
    }
       
      
}
