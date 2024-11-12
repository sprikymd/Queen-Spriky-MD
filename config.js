const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'S7piBIyS#gfAIAXyNrGCZraG_-lC_aklSy517ElkvM0ODDx-yqyk', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://ayesha:1234@undefined/?replicaSet=atlas-qltedm-shard-0&ssl=true&authSource=admin',// Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94758900210',    // Enter Your Owner Number
};
