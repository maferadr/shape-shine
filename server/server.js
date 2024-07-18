const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const generalRoutes = require('./routes/general-routes');

//express middleware used to bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serve up the static assets
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
};

//app.use => require the routes
app.use('/api/', generalRoutes);

//Start de API server
app.listen(PORT, ()=>
 console.log(`API server now listening to PORT ${PORT}`),  
);

