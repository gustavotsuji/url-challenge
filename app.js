const express = require('express');
const {getShortUrl, saveUrl, addCount} = require('./service/urlService')
const shorterner = require('./utils/shorterner')

const app = express();

app.get('/:url', function (req, res) {
    const { url } = req.params

    let savedUrl = urlService.getShortUrl(url)
    if(!savedUrl) {
        res.status(404)
    }

    addCount(url)

    return res.status(200).json(savedUrl)
});

app.post('/', async(req, res) => {
  const  url = 'http://www.google.com'
  let myUrl = await getShortUrl(url)
  if(savedUrl) {
    const shortUrl = shorterner.encode(url)
    myUrl = saveUrl({originalUrl: url, shortUrl})
  }

  res.send(myUrl.toJson())
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});