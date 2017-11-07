/**
 * Created by xiexing on 2017/11/2.
 */

var ws = require("nodejs-websocket");

var PORT = 3000;

var server = ws.createServer(function (conn){
    console.log("New connection");

    conn.on("text",function(str){
        console.log("Received"+str);
        conn.sendText(str);
    })
    conn.on("close",function(code,reason){
        console.log("Connection closed");
    })
}).listen(PORT)

console.log("websocket server listening on port " + PORT);