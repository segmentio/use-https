# use-https

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

  Determine whether scripts need to be loaded over HTTPS for the page to remain secure.

## Installation

    $ component install segmentio/use-https

## Example

  At `https://example.com`...

```js
var https = require('use-https');

https(); // true
https('//site.com'); // "https://site.com"
```

## API

### useHttps()
  
  Return a `Boolean` of whether you need to load any scripts over HTTPS to keep the document secure.

### useHttps(agnosticUrl)
  
  Return the `agnosticUrl` (starts with `//`) with either `https:` or `http:` prepended as the protocol.

## License

  MIT
