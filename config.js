const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'W2wiHShA#cq6qZGEdlOXPotO8fL1FRcUHJBRpxtn6IPHFVT39QXw', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://elisaqueen525:1234@cluster0.qf2vrdx.mongodb.net/',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94758900210',    // Enter Your Owner Number
};
