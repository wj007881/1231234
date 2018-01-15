'use strict';

module.exports = function(Stories) {
    Stories.sayhi = function (callback) {
        callback(null,"hi");
    };
    Stories.remoteMethod(
        "sayHi",
        {
            "accepts":[],
            "return":[
                {"arg":"result","type":"string"}
            ],
            "http":{
                "verb":"get",
                "path":"/say-hi"
            }
        }
    );   
   
};

