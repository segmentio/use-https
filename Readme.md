
# use-https

  Determine whether scripts need to be loaded over HTTPS.

## Installation

    $ component install segmentio/use-https

## Example

  At `https://example.com`...

```js
var https = require('use-https');

https(); // true
https('//site.com'); // "http://site.com"
```

## API

### useHttps()
  
  Return a `Boolean` of whether you need to load any scripts over HTTPS to keep the document secure.

### useHttps(agnosticUrl)
  
  Return the `agnosticUrl` (starts with `//`) with either `https:` or `http:` prepended as the protocol.

## License

  MIT
