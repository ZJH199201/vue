const express = require("express");
const server = express();
const ejs = require("ejs");
const Multer = require("multer");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");

//前端访问的接口
const webRouter = express.Router();
//后台访问的接口
const nodeRouter = express.Router();
server.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});
server.listen(8084);
server.use(Multer({ dest: "./static/images/allUser" }).any());
server.use("/myNode", nodeRouter);
server.use("/myWeb", webRouter);

 

webRouter.use("/login", (req, res) => {
    
    // res.header("Access-Control-Allow-Origin", "*");
    // console.log(req.query);
    //   var Pool = mysql.createPool({
    //       host: "localhost",
    //       user: "root",
    //       password: "123456",
    //       database: "chad"
    //   });
      console.log(req.query.aa);
    //   Pool.getConnection((err, con) => {
    //       if (err) {
    //           res.send({ ok: 0, msg: "数据库连接失败了" });
    //       } else {
    //           var { user,pass } = req.query;
    //           con.query(
    //               "SELECT * FROM `blogsUser` WHERE username='" +
    //                   user + "';",
    //               (err, data) => {
    //                   if (data == '' || data == undefined) {
    //                       con.query(
    //                           'INSERT INTO `blogsUser` (`username`,`userpass`) VALUES("' +
    //                               user +
    //                               '","' +
    //                               pass +
    //                               '");',
    //                           (err, data) => {
    //                               console.log(err);
    //                               if (err) {
    //                                   res.send({
    //                                       ok: 0,
    //                                       msg:
    //                                           "数据库连接失败了"
    //                                   });
    //                               } else {
    //                                   res.send({
    //                                       ok: 1,
    //                                       msg:"注册成功",
    //                                       data: data
    //                                   });
    //                               }
    //                               con.end();
    //                           }
    //                       );
    //                   } else {
    //                       res.send({ ok: 0, msg: "用户名已存在" });
    //                       con.end();
    //                   }
    //               }
    //           );
    //       }
    //   });
        res.send({
            ok: req.query.aa
        })
});


webRouter.use("/my", (req, res) => {

      console.log(req.query.ass);
   
        res.send({
            oss: req.query.ass
        })
});
webRouter.use("/bin", (req, res) => {

    console.log(req.query.bin);
 
      res.send({
          bin: req.query.bin
      })
});
server.use("", express.static("./allMyModel"));