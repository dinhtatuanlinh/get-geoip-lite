var getIP = require("ipware")().get_ip;
var geoip = require("geoip-lite");

let getclientIP = (req, res, next) => {
    
    var ipInfo = getIP(req);
    console.log(ipInfo);
    let ip = '207.97.227.239';
    var geo = geoip.lookup(ip);
    console.log(geo);
    // {
    //     range: [ 247162880, 247164927 ],
    //     country: 'VN',
    //     region: 'SG',
    //     eu: '0',
    //     timezone: 'Asia/Ho_Chi_Minh',
    //     city: 'Ho Chi Minh City',
    //     ll: [ 10.8142, 106.6438 ],
    //     metro: 0,
    //     area: 1000
    //   }
    geo.ip = ipInfo.clientIp;
    // res.status(200).json(geo);
    let clientInfo = JSON.stringify(ipInfo);

    res.send(clientInfo);
};
module.exports = {
    getclientIP: getclientIP,
};
