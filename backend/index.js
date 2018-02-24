var express = require('express');
var axios = require('axios');
var cors = require('cors')


var app = express();
app.use(cors())

let port = 8080;
let earliest_timestamp = 1439164800; //GMT: Monday, August 10, 2015 12:00:00 AM
let current_timestamp = earliest_timestamp;
let days_passed = 0;
let seconds = 86400;
let symbol = "ETH"
let api_endpoint = "https://min-api.cryptocompare.com/data/dayAvg?"; 

let btc_rate = 0;
let eth_rate = 0;
let xrp_rate = 0;

function update(){
	if (days_passed > 900){
		days_passed = 0;
		current_timestamp = earliest_timestamp;
	}
	days_passed += 1;
	current_timestamp += days_passed * seconds;
	axios.get(api_endpoint + "fsym=BTC&tsym=USD&toTs=" + current_timestamp + "&avgType=MidHighLow")
	     .then(function(response){
	     	btc_rate = (response.data.USD);
	     });
	axios.get(api_endpoint + "fsym=ETH&tsym=USD&toTs=" + current_timestamp + "&avgType=MidHighLow")
     	 .then(function(response){
     	    eth_rate = (response.data.USD);
     	 });
    axios.get(api_endpoint + "fsym=XRP&tsym=USD&toTs=" + current_timestamp + "&avgType=MidHighLow")
     	 .then(function(response){
     	    xrp_rate = (response.data.USD);
     	 });
	console.log("Updated", btc_rate, eth_rate, xrp_rate);
}

app.get('/', function(req, res) {
	let ret = {
		btc : btc_rate,
		eth : eth_rate,
		xrp : xrp_rate,
		timestamp : current_timestamp
	};
    res.send(JSON.stringify(ret));
});

app.listen(port, function(){
    console.log("Listening on port " + port);
});

setInterval(update, 3000);