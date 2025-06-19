const newman = require('newman');
require('dotenv').config();


newman.run({
    collection:`https://api.postman.com/collections/45884066-bbcfe1fa-0ec4-4242-b64d-1572b6737564?access_key=${process.env.pmatKey}`,

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
            
    }

}, function (err) {
    if (err) { throw err; }
        console.log('Collection run complete!');
   
    
});