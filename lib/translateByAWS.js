const merge = require('lodash.merge');
const request = require('request');
const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk')

module.exports.translate = (text, {
  from, to, subscriptionKey, region
}) => {
  return new Promise((resolve, reject) => {

    

    AWS.config.update({region: region});
    var translate = new AWS.Translate();
    var params = {
        SourceLanguageCode: from,
        TargetLanguageCode: to,
        Text: text
    };  
    translate.translateText(params, function (err, data) {
        if (err) { 
          reject(err); 
        }
        resolve(data);

      });
  })
}

