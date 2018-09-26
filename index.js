"use strict";

var request = require('request');
var xmlJS = require('xml2js');

function createClient(urls, methodParams, params, callback){
  // RECORD PARAMS
  var requestStringSoap = '';
  for(var i in params){
    requestStringSoap += '<'+i+'>' + params[i] + '</'+i+'>';
  }

  // SOAP header and body
  var requestHeaders = {
    'content-type': 'text/xml;charset=UTF-8'
  };

  var requestBody =
    '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="'+urls.xmlns+'"> \
       <soapenv:Header/> \
       <soapenv:Body> \
          <ws:'+methodParams.method+'> \
             '+ requestStringSoap +' \
          </ws:'+methodParams.method+'> \
       </soapenv:Body> \
    </soapenv:Envelope>';

  // REQUEST SOAP
  var requestOptions = {
    'method': methodParams.type,
    'url': urls.url,
    'qs': { 'wsdl': urls.url},
    'headers': requestHeaders,
    'body': requestBody
  };

  request(requestOptions, function (error, response, body) {
    if (error) {
      try {
        throw new Error(error);
      } catch (e) {
        console.log(e.name + ': ' + e.message);
        return callback(e.message, {});
      }
    }else {
      xmlJS.parseString(body, function (err, result) {
          if(err){
            try {
              throw new Error(err);
            } catch (e) {
              console.log(e.name + ': ' + e.message);
              return callback(e.message, {});
            }
          }else{
            return callback(null, result);
          }
      });
    }
  });
}

exports.createClient = createClient;
