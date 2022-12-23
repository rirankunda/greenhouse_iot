const express = require('express');
const { application } = require('express');
let mqtt = require('mqtt')

const connectUrl = `mqtt://eu1.cloud.thethings.network:1883`
const client = mqtt.connect(connectUrl, {
clean: true,
connectTimeout: 4000,
username: 'greenhouse-groupe4@ttn',
password: 'NNSXS.QOBIR2XZFT46IWCANTDLQD3VUMO7ES55NWTCWJA.UVWFU2HJ6GDPJMPC3OKT5M74K7QIUJI3WPJDULHFUCCW2AAE774A',
reconnectPeriod: 1000,
})
client.on('connect', () => {
var topic = "v3/greenhouse-groupe4@ttn/devices/eui-70b3d57ed005638c/up";console.log('Connected')
client.subscribe(topic); //single topic
console.log("connected +subscribed");
});
//handle errors
client.on("error", function (error) {
console.log("Can't connect" + error);
process.exit(1)
});


var data1;
var data2;
var data3;

client.on("message", function (topic, message, packet) {
    var getDataFromTTN = JSON.parse(message);
    data1 = Math.round(getDataFromTTN.uplink_message.decoded_payload.degreesC * 100)/100;
    data2 = Math.round(getDataFromTTN.uplink_message.decoded_payload.humidity * 100)/100;
    data3 = Math.round(getDataFromTTN.uplink_message.decoded_payload.distance * 100)/100;
    console.log("message is " + message);
    finaldata = message;
    console.log("topic is " + topic);



});




// app.post('/parameters',function(req,res){
//     var tmp = req.body.humidity;
//     var tmp1 = req.body.tank;

//     console.log(tmp)  // stackoverflow0
//     console.log(tmp1)  // stackoverflow1
// });
exports.data = function(req, res) {

    res.render('webpage.ejs', { temp: data1, hum : data2, dist: data3});
    // var temp = req.body.humidity; 
    // console.log(temp)

    // if finaldata.TankVolume < minimumalert

};



exports.parameters = function(req, res) {
    res.render('parameterspage.ejs');
   
};


