# Finnish SSN util

Currently used for validating a Finnish Social Security Number.

## Installation

    npm i -S finnish-ssn-util

## Usage

```
var FinnishSsn = require('finnish-ssn-util');
if(new FinnishSsn().validate('121212-1212')) {
  // yep
} else {
  // nope
}
```
