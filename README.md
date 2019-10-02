# jsgraph-sd-ellipse

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Create an ellipse annotation for jsgraph based on a define number of SD.

Inspired by [this article](https://forums.ni.com/t5/LabVIEW/how-do-I-add-a-95-confidence-ellipse-to-an-XY-scatter-plot/td-p/1285226?profile.language=en).

## Installation

`$ npm i jsgraph-sd-ellipse`

## Usage

```js
import {getEllipse} from 'jsgraph-sd-ellipse';

let const = getEllipse({
      x: [1, 2, 3, 4, 5, 6],
      y: [1, 4, 2, 5, 3, 6],
    },{
        nbSD:3
    });
```

## [API Documentation](https://cheminfo.github.io/jsgraph-sd-ellipse/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/jsgraph-sd-ellipse.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/jsgraph-sd-ellipse
[travis-image]: https://img.shields.io/com/travis/cheminfo/jsgraph-sd-ellipse/master.svg?style=flat-square
[travis-url]: https://travis-ci.com/cheminfo/jsgraph-sd-ellipse
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/jsgraph-sd-ellipse.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo/jsgraph-sd-ellipse
[download-image]: https://img.shields.io/npm/dm/jsgraph-sd-ellipse.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/jsgraph-sd-ellipse
