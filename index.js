
/**
 * Protocol.
 */

var protocol = document.location.protocol;


/**
 * Expose whether they should use `https:` for loading scripts.
 */

module.exports = (
  protocol == 'https:' ||
  protocol == 'chrome-extension'
);