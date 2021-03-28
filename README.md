# Markdown Translator

其他语言：[中文](./README.zh.md)

> Directly translate markdown file using Azure or AWS Text Translate API.
This is a fork of [this project](https://github.com/menthays/markdown-translator/).

## Prerequisites

- Get Text Translate API Key from [Azure Cognitive Services](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/translator-text-how-to-signup) or 
- create AWS credentials (access_key_id and secret_access_key) and assign permissions to the AWS translate API (`translate:TranslateText` action is sufficient)

## Quick Start
### Use as cli
```bash
# install cli
npm install markdown-translator -g

# set key and region from Azure Text Translate API
md-translator set --key <your key>
md-translator set --region <your region>

# do translate
md-translator translate --src README.md --dest README.zh.md --to zh

# get more infomation
md-translator --help

```
In case AWS is being used the credentials are currently fetched from the environment (TODO represent in config).

### Use as binaries
> Run markdown-translator without Node environment

- Update config.json with your Azure Text Translate API.
- Run `npm run dist:mac` to build for macos and `npm run dist:win` for windows.
- Run the dist binary files like cli, e.g, `./markdown-translator translate --src README.md --dest README.zh.md --to zh`

> Modify dist scripts according to your platform. Find more at [here](https://github.com/zeit/pkg)

### Use as a module
```bash
# install module
npm install markdown-translator
```

```javascript
const markdownTranslate = require('markdown-translator')
markdownTranslate({
  src: pathToSrcFile,
  from: languageToTranslateFrom,
  to: languageToTranslateTo,
  subscriptionKey: yourSubscriptionKey,
  region: theRegionOfYourAzureInstance
}).then(res => {
  // deal with result
})
```

Note that there are some opinionated defaults: from is by default 'en', to 'zh'.
The region argument is optional.


### Examples

The file README.zh.md is translated using Azure Translate, the file README.de.md was created using the AWS version.