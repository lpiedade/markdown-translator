# Markdown Übersetzer

：[中文](./README.zh.md)

> Übersetzen Sie Markdown-Datei direkt mit Azure Text Translate-API

## Voraussetzungen

Holen Sie sich den Text Übersetzungs-API- [Azure-kognitive Dienste](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/translator-text-how-to-signup)

## Schnellstart

### Verwenden Sie als Cli

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

### Verwenden Sie als Binärdateien

> Ausführen von Markdown-Translator ohne Node-Umgebung

-   Aktualisieren Sie config.json mit Ihrer Azure Text Translate-API.
-   Lauf `npm run dist:mac` um für Macos zu bauen und `npm run dist:win` für Fenster.
-   Führen Sie die dist-Binärdateien wie cli aus, z. `./markdown-translator translate --src README.md --dest README.zh.md --to zh`

> Ändern Sie dist-Skripte entsprechend Ihrer Plattform. Weitere Informationen finden Sie unter [hier](https://github.com/zeit/pkg)

### Verwenden Sie als Modul

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

Beachten Sie, dass es einige meinungsgeschüttete Ausfälle gibt: von standardmäßig „en“ bis „z“.
Das Argument Region ist optional.
