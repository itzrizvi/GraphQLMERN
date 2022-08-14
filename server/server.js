// ALL REQUIRES
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000; // PORT



// CREATING APP
const app = express();




// SERVER LISTENING
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${port}`);
})
