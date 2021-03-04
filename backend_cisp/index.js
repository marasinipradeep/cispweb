const express = require('express');
const port = 4000;
const host = 'localhost';
const app = express();
const routes = require('./routes');
const users = require('./users');
module.exports=app;


// Route to root url
// app.get('/', function (request, response) {
//     response.send('Hello World');
// });


// Route to login handlers
// app.get('/login', function(req, res){
//     res.send({
//         title: 'Express Login'
//     });
// });



// app.get('/users', users.list);

app.listen(port, function () {
    console.log(`${host} Listening on port: ${port}` );
});
app.use('/', routes);