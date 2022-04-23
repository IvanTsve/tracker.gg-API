const express = require('express');
const app = express();
const cors = require('cors')
const config = require('./config/config');
const routes =  require('./config/routes');
const cookieParser = require('cookie-parser');

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(cookieParser());

app.listen(config.PORT,()=>{
    console.log(`http://localhost:${config.PORT}/`);
})