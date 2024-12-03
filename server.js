const express = require('express');
const server = express();


function homepage(req, res, next){

   

    res.send("Welcome to Homepage");
}

server.get('/hompage', homepage);


    function contactUs(req, res, next){
        res.send("welcome to contact page");
    }

    server.get('/contactpage', contactUs)

    function about(req, res, next){

        res.send("HERE IS ALL ABOUT");
        }
        
        server.get('/about', about);


        function defaults(req, res, next){
            res.send("Page Doesn't Exist");
        }

        server.use(defaults)

        function severstarted(){
            console.log(`sever is running on port 3000`)
        }
        
      

        server.listen(3000, severstarted );
    