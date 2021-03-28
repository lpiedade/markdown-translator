const chunk = require('lodash.chunk');
const flatten = require('lodash.flatten');
const fs = require('fs');

const {parseToTree, getTextTobeTranslated, stringifyToDoc} = require('./lib/parseMarkdown');
const {translate} = require('./lib/translateByAWS');

module.exports = ({
  src, from, to, subscriptionKey, region
}) => {
  return new Promise((resolve, reject) => {
    const tree = parseToTree(src);
    const nodeArr = getTextTobeTranslated(tree);
    const textArr = nodeArr.reduce((prev = [], cur) => {
      if(cur && cur.value) {
        prev.push({
          text: cur.value
        });
      }
      return prev;
    }, []);
    //console.log(textArr); 
    const translatePromises = []
    for (let eachText of textArr) {
      translatePromises.push(translate(eachText['text'], {
        from, to, subscriptionKey, region
      }));
    }
  
    Promise.all(translatePromises).then(data => {
      //let data = flatten(dataArr);
      for (let node of nodeArr) {
        if(node && node.value) {
          const result = data.shift();
          if (result && result['TranslatedText']) {
            node.value = result['TranslatedText']
          }
        }
      }
      resolve(stringifyToDoc(tree));
    }).catch(reject);
  })
}
