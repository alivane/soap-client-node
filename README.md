# soap-client-node

> Soap client support https / http wsdl

# Install with npm 
```javascript
  npm install soap-client-node
```
# Module

> urls

key          | value
------------ | --------------------------------------------------------------------------------------
url          | 'https://xxxx?wsdl' OR 'http://xxxx?wsdl' ( This can be http, '?wsdl is required' )
xmlns        | 'http://xxxxxxx.com/' (XML Namespaces - The xmlns Attribute)

> methodParams

key          | value
------------ | ------------------------------
type          | 'POST' OR 'GET'
method        | 'example' //method to call

> params

key          | value
------------ | ---------
xxxxx        | 'xxxxxx'
xxxxx        | 'xxxxxx'

> Example

```javascript

var client = require('soap-client-node');

var urls = {
  url: 'https://xxxxxxx?wsdl', 
  xmlns: 'http://xxxxxxx.com/'
}

var methodParams = {
  type: 'POST', 
  method: 'example' 
}

var params = { 
  username: 'userxxxx',
  password: 'passxxxx',
  x: 'xxxxx',
  y: 'yyyyy'
}

client.createClient(urls, methodParams, params, function(err, result){
  if(err){
    console.log('>>>>' + err + '<<<<');
  }else{
    console.log(result, 'in json')
    console.log(JSON.stringify(result), 'result')
  }
});

```
> Body request

```javascript
  
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://xxxxxxx.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:example>
         <username>userxxxx</username>
         <password>passxxxx</password>
         <x>xxxxx</x>
         <y>yyyyy</y>
      </ws:example>
   </soapenv:Body>
</soapenv:Envelope>


```
