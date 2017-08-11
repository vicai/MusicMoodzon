var cors = require('cors');
var express = require('express');
var path = require('path');
var request = require('request');
var webpack = require('webpack');

var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var client_id = '1aaab51e-b8bd-447a-b5e3-f52da99ae897';
var campaign_id = 'e0cf2d5d-05b7-43d4-9c9c-4f514e5cdd6d';
var client_secret = 'MG26d5e7sLt5AllWTYpYfGKotvLY1wc1va-O4dmi3sXigqxwKV9vLVRTkKM0RIddFNaSsjIFl7Mup7zvPERfzA';
var encodedToken = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

app.use(cors());

app.get('/ping', function (req, res) {
  res.json({msg: 'Hello, Amazon!'})
});

app.get('/moodzon/token', function (req, res) {
  request({
    method: 'post',
    uri: 'https://auth.svcs.verizon.com/vzconnect/token?grant_type=client_credentials',
    headers: {'Authorization': `Basic ${encodedToken}`}
  }).pipe(res);
});

app.get('/moodzon/eligibility', function (req, res) {
  const { phoneNumber, accessToken } = req.query;
  request({
    withCredentials: true,
    url: `https://perks.svcs.verizon.com/mobileperks/redeem/${campaign_id}?mdn=${phoneNumber}`,
    headers: {'Authorization': `Bearer ${accessToken}`}
  }).pipe(res);
});


/*
Prototype for redemption token design
 */
const REDEMPTION_INFO_BY_TOKEN = {}; //REDIS OR SOMETHING ELSE

function generateRedemptionToken() {
  return "7d9d2ee0-52f5-48f1-977d-6eca9b74a1c8" //use node-guid or something like that
}

function storeRedemptionInfo(campaignId, phoneNumber) {
  const token = generateRedemptionToken()
  REDEMPTION_INFO_BY_TOKEN[token] = {
    campaignId,
    phoneNumber,
  };
  
  return token
}

function getRedemptionInfo() {
  return REDEMPTION_INFO_BY_TOKEN[token];
}

app.get('/eligibility', function (req, res) {
  const { phoneNumber, accessToken } = req.query;
  request({
    withCredentials: true,
    url: `https://perks.svcs.verizon.com/mobileperks/redeem/${campaign_id}?mdn=${phoneNumber}`,
    headers: {'Authorization': `Bearer ${accessToken}`}
  }).pipe(function(){
    const redemptionToken = storeRedemptionInfo(campaign_id, phoneNumber);
    //give the response the token
  })
});

app.get('/redeem', function (req, res) {
  const { accessToken, redemptionToken } = req.query;
  const redemptionInfo = getRedemptionInfo();
  const phoneNumber = redemptionInfo.phoneNumber;
  
  request({
    withCredentials: true,
    url: `TODO`,
    headers: {'Authorization': `Bearer ${accessToken}`}
  }).pipe(res);
});
/*
Prototype for redemption token design end
 */



app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3002, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3002/');
});
