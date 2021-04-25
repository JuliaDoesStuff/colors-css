# colors-css
Get all the colors that are included in CSS.

[![npm](https://img.shields.io/npm/v/colors-css)](https://npm.im/colors-css)
[![npm](https://img.shields.io/npm/dt/colors-css)](https://npm.im/colors-css)
[![David](https://img.shields.io/david/bwbjustin/colors-css)](https://david-dm.org/bwbjustin/colors-css)
[![David](https://img.shields.io/david/dev/bwbjustin/colors-css)](https://david-dm.org/bwbjustin/colors-css?type=dev)
[![GitHub](https://img.shields.io/github/license/bwbjustin/colors-css)](https://github.com/bwbjustin/colors-css/blob/master/LICENSE)  
[![NPM](https://nodei.co/npm/colors-css.png)](https://nodei.co/npm/colors-css/)

# Colors
All CSS colors are properties of an initiated `Colors` class, which takes the type of color to use. For example:
```js
const Colors = require("colors-css");
const colors = new Colors("hex");
colors.red; // FF0000
Colors.color("DEADED").hex; // DEADED
```
```js
const Colors = require("colors-css");
const colors = new Colors("rgb");
colors.red; // [255, 0, 0]
Colors.color("DEADED").rgb; // [222, 173, 237]
```

The list of color types that are included are:

Color Type | Format
-----------|-------
hex | string
rgb | [number, number, number]
hsl | [number, number, number]
hsv | [number, number, number]
hwb | [number, number, number]
cmyk | [number, number, number, number]
xyz | [number, number, number]
lab | [number, number, number]
lch | [number, number, number]
keyword | string
ansi16 | number
ansi256 | number
hcg | [number, number, number]
apple | [number, number, number]

# CLI
The CLI allows you to view a color and all its different formats.

Format: `colors (hex/keyword)`

# License
This project is licensed under the [MIT License](https://github.com/bwbjustin/colors-css/blob/master/LICENSE).