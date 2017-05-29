# Finnish SSN util

Currently used for validating a Finnish Social Security Number.

## Installation

´npm i -S finnish-ssn`

## Usage

```
require('finnish-ssn');
if(new FinnishSsn().validate('121212-1212')) {
  // yep
} else {
  // nope
}
```
