/*jshint node: true */
/*jshint esnext: true */
"use strict";

var pry = require('pryjs');
          
module.exports = {
    
    index: function*(next) {

        var Users = [];
        require('../models/user').find({}, function (err, docs) {
            if(!err) {
                return err;
            } else {
                docs.forEach(function(user) {
                    Users.push(user);
                });
                return true;
            }
        });

        var users = [
            {
                "name": "Luke Skywalker"
            }
        ];

        yield this.render('home', { title: 'Test page', users: users });
    }

};
