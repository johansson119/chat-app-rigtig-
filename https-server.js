const fs = require('fs');
const https = require('https');
const app = require('./app'); // din Express-app

// Indlæs self-signed certifikat og nøgle
const options = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem'),
};

// Start HTTPS server på port 3443
https.createServer(options, app).listen(3443, () => {
  console.log("HTTPS server kører på https://46.101.250.223:3443");
});
