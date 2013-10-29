
# use-https

  Detemine whether scripts need to be loaded over HTTPS.

## Installation

    $ component install segmentio/use-https

## Example

```js
var https = require('use-https');
var url = https ? 'https:' + domain : 'http:' + domain;
```

## API

### useHttps
  
  Boolean of whether you need to load any scripts over HTTPS to keep the document secure.

## License

  MIT
