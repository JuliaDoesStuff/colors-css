import convert = require("color-convert");
import colors = require("./colors.json");

interface ColorTypes {
	/**
	 * The color type HEX.
	 */
	hex: string;
	/**
	 * The color type RGB.
	 */
	rgb: [number, number, number];
	/**
	 * The color type HSL.
	 */
	hsl: [number, number, number];
	/**
	 * The color type HSV.
	 */
	hsv: [number, number, number];
	/**
	 * The color type HWB.
	 */
	hwb: [number, number, number];
	/**
	 * The color type CMYK.
	 */
	cmyk: [number, number, number, number];
	/**
	 * The color type XYZ.
	 */
	xyz: [number, number, number];
	/**
	 * The color type LAB.
	 */
	lab: [number, number, number];
	/**
	 * The color type LCH.
	 */
	lch: [number, number, number];
	/**
	 * The color type KEYWORD.
	 */
	keyword: string;
	/**
	 * The color type ANSI16.
	 */
	ansi16: number;
	/**
	 * The color type ANSI256.
	 */
	ansi256: number;
	/**
	 * The color type HCG.
	 */
	hcg: [number, number, number];
	/**
	 * The color type APPLE.
	 */
	apple: [number, number, number];
}

class Colors {
	/**
	 * The CSS color `aliceblue`.
	 */
	aliceblue: any;
	/**
	 * The CSS color `antiquewhite`.
	 */
	antiquewhite: any;
	/**
	 * The CSS color `aqua`.
	 */
	aqua: any;
	/**
	 * The CSS color `aquamarine`.
	 */
	aquamarine: any;
	/**
	 * The CSS color `azure`.
	 */
	azure: any;
	/**
	 * The CSS color `beige`.
	 */
	beige: any;
	/**
	 * The CSS color `bisque`.
	 */
	bisque: any;
	/**
	 * The CSS color `black`.
	 */
	black: any;
	/**
	 * The CSS color `blanchedalmond`.
	 */
	blanchedalmond: any;
	/**
	 * The CSS color `blue`.
	 */
	blue: any;
	/**
	 * The CSS color `blueviolet`.
	 */
	blueviolet: any;
	/**
	 * The CSS color `brown`.
	 */
	brown: any;
	/**
	 * The CSS color `burlywood`.
	 */
	burlywood: any;
	/**
	 * The CSS color `cadetblue`.
	 */
	cadetblue: any;
	/**
	 * The CSS color `chartreuse`.
	 */
	chartreuse: any;
	/**
	 * The CSS color `chocolate`.
	 */
	chocolate: any;
	/**
	 * The CSS color `coral`.
	 */
	coral: any;
	/**
	 * The CSS color `cornflowerblue`.
	 */
	cornflowerblue: any;
	/**
	 * The CSS color `cornsilk`.
	 */
	cornsilk: any;
	/**
	 * The CSS color `crimson`.
	 */
	crimson: any;
	/**
	 * The CSS color `cyan`.
	 */
	cyan: any;
	/**
	 * The CSS color `darkblue`.
	 */
	darkblue: any;
	/**
	 * The CSS color `darkcyan`.
	 */
	darkcyan: any;
	/**
	 * The CSS color `darkgoldenrod`.
	 */
	darkgoldenrod: any;
	/**
	 * The CSS color `darkgray`.
	 */
	darkgray: any;
	/**
	 * The CSS color `darkgreen`.
	 */
	darkgreen: any;
	/**
	 * The CSS color `darkgrey`.
	 */
	darkgrey: any;
	/**
	 * The CSS color `darkkhaki`.
	 */
	darkkhaki: any;
	/**
	 * The CSS color `darkmagenta`.
	 */
	darkmagenta: any;
	/**
	 * The CSS color `darkolivegreen`.
	 */
	darkolivegreen: any;
	/**
	 * The CSS color `darkorange`.
	 */
	darkorange: any;
	/**
	 * The CSS color `darkorchid`.
	 */
	darkorchid: any;
	/**
	 * The CSS color `darkred`.
	 */
	darkred: any;
	/**
	 * The CSS color `darksalmon`.
	 */
	darksalmon: any;
	/**
	 * The CSS color `darkseagreen`.
	 */
	darkseagreen: any;
	/**
	 * The CSS color `darkslateblue`.
	 */
	darkslateblue: any;
	/**
	 * The CSS color `darkslategray`.
	 */
	darkslategray: any;
	/**
	 * The CSS color `darkslategrey`.
	 */
	darkslategrey: any;
	/**
	 * The CSS color `darkturquoise`.
	 */
	darkturquoise: any;
	/**
	 * The CSS color `darkviolet`.
	 */
	darkviolet: any;
	/**
	 * The CSS color `deeppink`.
	 */
	deeppink: any;
	/**
	 * The CSS color `deepskyblue`.
	 */
	deepskyblue: any;
	/**
	 * The CSS color `dimgray`.
	 */
	dimgray: any;
	/**
	 * The CSS color `dimgrey`.
	 */
	dimgrey: any;
	/**
	 * The CSS color `dodgerblue`.
	 */
	dodgerblue: any;
	/**
	 * The CSS color `firebrick`.
	 */
	firebrick: any;
	/**
	 * The CSS color `floralwhite`.
	 */
	floralwhite: any;
	/**
	 * The CSS color `forestgreen`.
	 */
	forestgreen: any;
	/**
	 * The CSS color `fuchsia`.
	 */
	fuchsia: any;
	/**
	 * The CSS color `gainsboro`.
	 */
	gainsboro: any;
	/**
	 * The CSS color `ghostwhite`.
	 */
	ghostwhite: any;
	/**
	 * The CSS color `gold`.
	 */
	gold: any;
	/**
	 * The CSS color `goldenrod`.
	 */
	goldenrod: any;
	/**
	 * The CSS color `gray`.
	 */
	gray: any;
	/**
	 * The CSS color `green`.
	 */
	green: any;
	/**
	 * The CSS color `greenyellow`.
	 */
	greenyellow: any;
	/**
	 * The CSS color `grey`.
	 */
	grey: any;
	/**
	 * The CSS color `honeydew`.
	 */
	honeydew: any;
	/**
	 * The CSS color `hotpink`.
	 */
	hotpink: any;
	/**
	 * The CSS color `indianred`.
	 */
	indianred: any;
	/**
	 * The CSS color `indigo`.
	 */
	indigo: any;
	/**
	 * The CSS color `ivory`.
	 */
	ivory: any;
	/**
	 * The CSS color `khaki`.
	 */
	khaki: any;
	/**
	 * The CSS color `lavender`.
	 */
	lavender: any;
	/**
	 * The CSS color `lavenderblush`.
	 */
	lavenderblush: any;
	/**
	 * The CSS color `lawngreen`.
	 */
	lawngreen: any;
	/**
	 * The CSS color `lemonchiffon`.
	 */
	lemonchiffon: any;
	/**
	 * The CSS color `lightblue`.
	 */
	lightblue: any;
	/**
	 * The CSS color `lightcoral`.
	 */
	lightcoral: any;
	/**
	 * The CSS color `lightcyan`.
	 */
	lightcyan: any;
	/**
	 * The CSS color `lightgoldenrodyellow`.
	 */
	lightgoldenrodyellow: any;
	/**
	 * The CSS color `lightgray`.
	 */
	lightgray: any;
	/**
	 * The CSS color `lightgreen`.
	 */
	lightgreen: any;
	/**
	 * The CSS color `lightgrey`.
	 */
	lightgrey: any;
	/**
	 * The CSS color `lightpink`.
	 */
	lightpink: any;
	/**
	 * The CSS color `lightsalmon`.
	 */
	lightsalmon: any;
	/**
	 * The CSS color `lightseagreen`.
	 */
	lightseagreen: any;
	/**
	 * The CSS color `lightskyblue`.
	 */
	lightskyblue: any;
	/**
	 * The CSS color `lightslategray`.
	 */
	lightslategray: any;
	/**
	 * The CSS color `lightslategrey`.
	 */
	lightslategrey: any;
	/**
	 * The CSS color `lightsteelblue`.
	 */
	lightsteelblue: any;
	/**
	 * The CSS color `lightyellow`.
	 */
	lightyellow: any;
	/**
	 * The CSS color `lime`.
	 */
	lime: any;
	/**
	 * The CSS color `limegreen`.
	 */
	limegreen: any;
	/**
	 * The CSS color `linen`.
	 */
	linen: any;
	/**
	 * The CSS color `magenta`.
	 */
	magenta: any;
	/**
	 * The CSS color `maroon`.
	 */
	maroon: any;
	/**
	 * The CSS color `mediumaquamarine`.
	 */
	mediumaquamarine: any;
	/**
	 * The CSS color `mediumblue`.
	 */
	mediumblue: any;
	/**
	 * The CSS color `mediumorchid`.
	 */
	mediumorchid: any;
	/**
	 * The CSS color `mediumpurple`.
	 */
	mediumpurple: any;
	/**
	 * The CSS color `mediumseagreen`.
	 */
	mediumseagreen: any;
	/**
	 * The CSS color `mediumslateblue`.
	 */
	mediumslateblue: any;
	/**
	 * The CSS color `mediumspringgreen`.
	 */
	mediumspringgreen: any;
	/**
	 * The CSS color `mediumturquoise`.
	 */
	mediumturquoise: any;
	/**
	 * The CSS color `mediumvioletred`.
	 */
	mediumvioletred: any;
	/**
	 * The CSS color `midnightblue`.
	 */
	midnightblue: any;
	/**
	 * The CSS color `mintcream`.
	 */
	mintcream: any;
	/**
	 * The CSS color `mistyrose`.
	 */
	mistyrose: any;
	/**
	 * The CSS color `moccasin`.
	 */
	moccasin: any;
	/**
	 * The CSS color `navajowhite`.
	 */
	navajowhite: any;
	/**
	 * The CSS color `navy`.
	 */
	navy: any;
	/**
	 * The CSS color `oldlace`.
	 */
	oldlace: any;
	/**
	 * The CSS color `olive`.
	 */
	olive: any;
	/**
	 * The CSS color `olivedrab`.
	 */
	olivedrab: any;
	/**
	 * The CSS color `orange`.
	 */
	orange: any;
	/**
	 * The CSS color `orangered`.
	 */
	orangered: any;
	/**
	 * The CSS color `orchid`.
	 */
	orchid: any;
	/**
	 * The CSS color `palegoldenrod`.
	 */
	palegoldenrod: any;
	/**
	 * The CSS color `palegreen`.
	 */
	palegreen: any;
	/**
	 * The CSS color `paleturquoise`.
	 */
	paleturquoise: any;
	/**
	 * The CSS color `palevioletred`.
	 */
	palevioletred: any;
	/**
	 * The CSS color `papayawhip`.
	 */
	papayawhip: any;
	/**
	 * The CSS color `peachpuff`.
	 */
	peachpuff: any;
	/**
	 * The CSS color `peru`.
	 */
	peru: any;
	/**
	 * The CSS color `pink`.
	 */
	pink: any;
	/**
	 * The CSS color `plum`.
	 */
	plum: any;
	/**
	 * The CSS color `powderblue`.
	 */
	powderblue: any;
	/**
	 * The CSS color `purple`.
	 */
	purple: any;
	/**
	 * The CSS color `rebeccapurple`.
	 */
	rebeccapurple: any;
	/**
	 * The CSS color `red`.
	 */
	red: any;
	/**
	 * The CSS color `rosybrown`.
	 */
	rosybrown: any;
	/**
	 * The CSS color `royalblue`.
	 */
	royalblue: any;
	/**
	 * The CSS color `saddlebrown`.
	 */
	saddlebrown: any;
	/**
	 * The CSS color `salmon`.
	 */
	salmon: any;
	/**
	 * The CSS color `sandybrown`.
	 */
	sandybrown: any;
	/**
	 * The CSS color `seagreen`.
	 */
	seagreen: any;
	/**
	 * The CSS color `seashell`.
	 */
	seashell: any;
	/**
	 * The CSS color `sienna`.
	 */
	sienna: any;
	/**
	 * The CSS color `silver`.
	 */
	silver: any;
	/**
	 * The CSS color `skyblue`.
	 */
	skyblue: any;
	/**
	 * The CSS color `slateblue`.
	 */
	slateblue: any;
	/**
	 * The CSS color `slategray`.
	 */
	slategray: any;
	/**
	 * The CSS color `slategrey`.
	 */
	slategrey: any;
	/**
	 * The CSS color `snow`.
	 */
	snow: any;
	/**
	 * The CSS color `springgreen`.
	 */
	springgreen: any;
	/**
	 * The CSS color `steelblue`.
	 */
	steelblue: any;
	/**
	 * The CSS color `tan`.
	 */
	tan: any;
	/**
	 * The CSS color `teal`.
	 */
	teal: any;
	/**
	 * The CSS color `thistle`.
	 */
	thistle: any;
	/**
	 * The CSS color `tomato`.
	 */
	tomato: any;
	/**
	 * The CSS color `turquoise`.
	 */
	turquoise: any;
	/**
	 * The CSS color `violet`.
	 */
	violet: any;
	/**
	 * The CSS color `wheat`.
	 */
	wheat: any;
	/**
	 * The CSS color `white`.
	 */
	white: any;
	/**
	 * The CSS color `whitesmoke`.
	 */
	whitesmoke: any;
	/**
	 * The CSS color `yellow`.
	 */
	yellow: any;
	/**
	 * The CSS color `yellowgreen`.
	 */
	yellowgreen: any;

	/**
	 * The Colors constructor.
	 * @param {string} type The type of color to use.
	 */
	constructor(type: string) {
		this.aliceblue = convert.hex[type] ? convert.hex[type](colors.aliceblue) : colors.aliceblue;
		this.antiquewhite = convert.hex[type] ? convert.hex[type](colors.antiquewhite) : colors.antiquewhite;
		this.aqua = convert.hex[type] ? convert.hex[type](colors.aqua) : colors.aqua;
		this.aquamarine = convert.hex[type] ? convert.hex[type](colors.aquamarine) : colors.aquamarine;
		this.azure = convert.hex[type] ? convert.hex[type](colors.azure) : colors.azure;
		this.beige = convert.hex[type] ? convert.hex[type](colors.beige) : colors.beige;
		this.bisque = convert.hex[type] ? convert.hex[type](colors.bisque) : colors.bisque;
		this.black = convert.hex[type] ? convert.hex[type](colors.black) : colors.black;
		this.blanchedalmond = convert.hex[type] ? convert.hex[type](colors.blanchedalmond) : colors.blanchedalmond;
		this.blue = convert.hex[type] ? convert.hex[type](colors.blue) : colors.blue;
		this.blueviolet = convert.hex[type] ? convert.hex[type](colors.blueviolet) : colors.blueviolet;
		this.brown = convert.hex[type] ? convert.hex[type](colors.brown) : colors.brown;
		this.burlywood = convert.hex[type] ? convert.hex[type](colors.burlywood) : colors.burlywood;
		this.cadetblue = convert.hex[type] ? convert.hex[type](colors.cadetblue) : colors.cadetblue;
		this.chartreuse = convert.hex[type] ? convert.hex[type](colors.chartreuse) : colors.chartreuse;
		this.chocolate = convert.hex[type] ? convert.hex[type](colors.chocolate) : colors.chocolate;
		this.coral = convert.hex[type] ? convert.hex[type](colors.coral) : colors.coral;
		this.cornflowerblue = convert.hex[type] ? convert.hex[type](colors.cornflowerblue) : colors.cornflowerblue;
		this.cornsilk = convert.hex[type] ? convert.hex[type](colors.cornsilk) : colors.cornsilk;
		this.crimson = convert.hex[type] ? convert.hex[type](colors.crimson) : colors.crimson;
		this.cyan = convert.hex[type] ? convert.hex[type](colors.cyan) : colors.cyan;
		this.darkblue = convert.hex[type] ? convert.hex[type](colors.darkblue) : colors.darkblue;
		this.darkcyan = convert.hex[type] ? convert.hex[type](colors.darkcyan) : colors.darkcyan;
		this.darkgoldenrod = convert.hex[type] ? convert.hex[type](colors.darkgoldenrod) : colors.darkgoldenrod;
		this.darkgray = convert.hex[type] ? convert.hex[type](colors.darkgray) : colors.darkgray;
		this.darkgreen = convert.hex[type] ? convert.hex[type](colors.darkgreen) : colors.darkgreen;
		this.darkgrey = convert.hex[type] ? convert.hex[type](colors.darkgrey) : colors.darkgrey;
		this.darkkhaki = convert.hex[type] ? convert.hex[type](colors.darkkhaki) : colors.darkkhaki;
		this.darkmagenta = convert.hex[type] ? convert.hex[type](colors.darkmagenta) : colors.darkmagenta;
		this.darkolivegreen = convert.hex[type] ? convert.hex[type](colors.darkolivegreen) : colors.darkolivegreen;
		this.darkorange = convert.hex[type] ? convert.hex[type](colors.darkorange) : colors.darkorange;
		this.darkorchid = convert.hex[type] ? convert.hex[type](colors.darkorchid) : colors.darkorchid;
		this.darkred = convert.hex[type] ? convert.hex[type](colors.darkred) : colors.darkred;
		this.darksalmon = convert.hex[type] ? convert.hex[type](colors.darksalmon) : colors.darksalmon;
		this.darkseagreen = convert.hex[type] ? convert.hex[type](colors.darkseagreen) : colors.darkseagreen;
		this.darkslateblue = convert.hex[type] ? convert.hex[type](colors.darkslateblue) : colors.darkslateblue;
		this.darkslategray = convert.hex[type] ? convert.hex[type](colors.darkslategray) : colors.darkslategray;
		this.darkslategrey = convert.hex[type] ? convert.hex[type](colors.darkslategrey) : colors.darkslategrey;
		this.darkturquoise = convert.hex[type] ? convert.hex[type](colors.darkturquoise) : colors.darkturquoise;
		this.darkviolet = convert.hex[type] ? convert.hex[type](colors.darkviolet) : colors.darkviolet;
		this.deeppink = convert.hex[type] ? convert.hex[type](colors.deeppink) : colors.deeppink;
		this.deepskyblue = convert.hex[type] ? convert.hex[type](colors.deepskyblue) : colors.deepskyblue;
		this.dimgray = convert.hex[type] ? convert.hex[type](colors.dimgray) : colors.dimgray;
		this.dimgrey = convert.hex[type] ? convert.hex[type](colors.dimgrey) : colors.dimgrey;
		this.dodgerblue = convert.hex[type] ? convert.hex[type](colors.dodgerblue) : colors.dodgerblue;
		this.firebrick = convert.hex[type] ? convert.hex[type](colors.firebrick) : colors.firebrick;
		this.floralwhite = convert.hex[type] ? convert.hex[type](colors.floralwhite) : colors.floralwhite;
		this.forestgreen = convert.hex[type] ? convert.hex[type](colors.forestgreen) : colors.forestgreen;
		this.fuchsia = convert.hex[type] ? convert.hex[type](colors.fuchsia) : colors.fuchsia;
		this.gainsboro = convert.hex[type] ? convert.hex[type](colors.gainsboro) : colors.gainsboro;
		this.ghostwhite = convert.hex[type] ? convert.hex[type](colors.ghostwhite) : colors.ghostwhite;
		this.gold = convert.hex[type] ? convert.hex[type](colors.gold) : colors.gold;
		this.goldenrod = convert.hex[type] ? convert.hex[type](colors.goldenrod) : colors.goldenrod;
		this.gray = convert.hex[type] ? convert.hex[type](colors.gray) : colors.gray;
		this.green = convert.hex[type] ? convert.hex[type](colors.green) : colors.green;
		this.greenyellow = convert.hex[type] ? convert.hex[type](colors.greenyellow) : colors.greenyellow;
		this.grey = convert.hex[type] ? convert.hex[type](colors.grey) : colors.grey;
		this.honeydew = convert.hex[type] ? convert.hex[type](colors.honeydew) : colors.honeydew;
		this.hotpink = convert.hex[type] ? convert.hex[type](colors.hotpink) : colors.hotpink;
		this.indianred = convert.hex[type] ? convert.hex[type](colors.indianred) : colors.indianred;
		this.indigo = convert.hex[type] ? convert.hex[type](colors.indigo) : colors.indigo;
		this.ivory = convert.hex[type] ? convert.hex[type](colors.ivory) : colors.ivory;
		this.khaki = convert.hex[type] ? convert.hex[type](colors.khaki) : colors.khaki;
		this.lavender = convert.hex[type] ? convert.hex[type](colors.lavender) : colors.lavender;
		this.lavenderblush = convert.hex[type] ? convert.hex[type](colors.lavenderblush) : colors.lavenderblush;
		this.lawngreen = convert.hex[type] ? convert.hex[type](colors.lawngreen) : colors.lawngreen;
		this.lemonchiffon = convert.hex[type] ? convert.hex[type](colors.lemonchiffon) : colors.lemonchiffon;
		this.lightblue = convert.hex[type] ? convert.hex[type](colors.lightblue) : colors.lightblue;
		this.lightcoral = convert.hex[type] ? convert.hex[type](colors.lightcoral) : colors.lightcoral;
		this.lightcyan = convert.hex[type] ? convert.hex[type](colors.lightcyan) : colors.lightcyan;
		this.lightgoldenrodyellow = convert.hex[type] ? convert.hex[type](colors.lightgoldenrodyellow) : colors.lightgoldenrodyellow;
		this.lightgray = convert.hex[type] ? convert.hex[type](colors.lightgray) : colors.lightgray;
		this.lightgreen = convert.hex[type] ? convert.hex[type](colors.lightgreen) : colors.lightgreen;
		this.lightgrey = convert.hex[type] ? convert.hex[type](colors.lightgrey) : colors.lightgrey;
		this.lightpink = convert.hex[type] ? convert.hex[type](colors.lightpink) : colors.lightpink;
		this.lightsalmon = convert.hex[type] ? convert.hex[type](colors.lightsalmon) : colors.lightsalmon;
		this.lightseagreen = convert.hex[type] ? convert.hex[type](colors.lightseagreen) : colors.lightseagreen;
		this.lightskyblue = convert.hex[type] ? convert.hex[type](colors.lightskyblue) : colors.lightskyblue;
		this.lightslategray = convert.hex[type] ? convert.hex[type](colors.lightslategray) : colors.lightslategray;
		this.lightslategrey = convert.hex[type] ? convert.hex[type](colors.lightslategrey) : colors.lightslategrey;
		this.lightsteelblue = convert.hex[type] ? convert.hex[type](colors.lightsteelblue) : colors.lightsteelblue;
		this.lightyellow = convert.hex[type] ? convert.hex[type](colors.lightyellow) : colors.lightyellow;
		this.lime = convert.hex[type] ? convert.hex[type](colors.lime) : colors.lime;
		this.limegreen = convert.hex[type] ? convert.hex[type](colors.limegreen) : colors.limegreen;
		this.linen = convert.hex[type] ? convert.hex[type](colors.linen) : colors.linen;
		this.magenta = convert.hex[type] ? convert.hex[type](colors.magenta) : colors.magenta;
		this.maroon = convert.hex[type] ? convert.hex[type](colors.maroon) : colors.maroon;
		this.mediumaquamarine = convert.hex[type] ? convert.hex[type](colors.mediumaquamarine) : colors.mediumaquamarine;
		this.mediumblue = convert.hex[type] ? convert.hex[type](colors.mediumblue) : colors.mediumblue;
		this.mediumorchid = convert.hex[type] ? convert.hex[type](colors.mediumorchid) : colors.mediumorchid;
		this.mediumpurple = convert.hex[type] ? convert.hex[type](colors.mediumpurple) : colors.mediumpurple;
		this.mediumseagreen = convert.hex[type] ? convert.hex[type](colors.mediumseagreen) : colors.mediumseagreen;
		this.mediumslateblue = convert.hex[type] ? convert.hex[type](colors.mediumslateblue) : colors.mediumslateblue;
		this.mediumspringgreen = convert.hex[type] ? convert.hex[type](colors.mediumspringgreen) : colors.mediumspringgreen;
		this.mediumturquoise = convert.hex[type] ? convert.hex[type](colors.mediumturquoise) : colors.mediumturquoise;
		this.mediumvioletred = convert.hex[type] ? convert.hex[type](colors.mediumvioletred) : colors.mediumvioletred;
		this.midnightblue = convert.hex[type] ? convert.hex[type](colors.midnightblue) : colors.midnightblue;
		this.mintcream = convert.hex[type] ? convert.hex[type](colors.mintcream) : colors.mintcream;
		this.mistyrose = convert.hex[type] ? convert.hex[type](colors.mistyrose) : colors.mistyrose;
		this.moccasin = convert.hex[type] ? convert.hex[type](colors.moccasin) : colors.moccasin;
		this.navajowhite = convert.hex[type] ? convert.hex[type](colors.navajowhite) : colors.navajowhite;
		this.navy = convert.hex[type] ? convert.hex[type](colors.navy) : colors.navy;
		this.oldlace = convert.hex[type] ? convert.hex[type](colors.oldlace) : colors.oldlace;
		this.olive = convert.hex[type] ? convert.hex[type](colors.olive) : colors.olive;
		this.olivedrab = convert.hex[type] ? convert.hex[type](colors.olivedrab) : colors.olivedrab;
		this.orange = convert.hex[type] ? convert.hex[type](colors.orange) : colors.orange;
		this.orangered = convert.hex[type] ? convert.hex[type](colors.orangered) : colors.orangered;
		this.orchid = convert.hex[type] ? convert.hex[type](colors.orchid) : colors.orchid;
		this.palegoldenrod = convert.hex[type] ? convert.hex[type](colors.palegoldenrod) : colors.palegoldenrod;
		this.palegreen = convert.hex[type] ? convert.hex[type](colors.palegreen) : colors.palegreen;
		this.paleturquoise = convert.hex[type] ? convert.hex[type](colors.paleturquoise) : colors.paleturquoise;
		this.palevioletred = convert.hex[type] ? convert.hex[type](colors.palevioletred) : colors.palevioletred;
		this.papayawhip = convert.hex[type] ? convert.hex[type](colors.papayawhip) : colors.papayawhip;
		this.peachpuff = convert.hex[type] ? convert.hex[type](colors.peachpuff) : colors.peachpuff;
		this.peru = convert.hex[type] ? convert.hex[type](colors.peru) : colors.peru;
		this.pink = convert.hex[type] ? convert.hex[type](colors.pink) : colors.pink;
		this.plum = convert.hex[type] ? convert.hex[type](colors.plum) : colors.plum;
		this.powderblue = convert.hex[type] ? convert.hex[type](colors.powderblue) : colors.powderblue;
		this.purple = convert.hex[type] ? convert.hex[type](colors.purple) : colors.purple;
		this.rebeccapurple = convert.hex[type] ? convert.hex[type](colors.rebeccapurple) : colors.rebeccapurple;
		this.red = convert.hex[type] ? convert.hex[type](colors.red) : colors.red;
		this.rosybrown = convert.hex[type] ? convert.hex[type](colors.rosybrown) : colors.rosybrown;
		this.royalblue = convert.hex[type] ? convert.hex[type](colors.royalblue) : colors.royalblue;
		this.saddlebrown = convert.hex[type] ? convert.hex[type](colors.saddlebrown) : colors.saddlebrown;
		this.salmon = convert.hex[type] ? convert.hex[type](colors.salmon) : colors.salmon;
		this.sandybrown = convert.hex[type] ? convert.hex[type](colors.sandybrown) : colors.sandybrown;
		this.seagreen = convert.hex[type] ? convert.hex[type](colors.seagreen) : colors.seagreen;
		this.seashell = convert.hex[type] ? convert.hex[type](colors.seashell) : colors.seashell;
		this.sienna = convert.hex[type] ? convert.hex[type](colors.sienna) : colors.sienna;
		this.silver = convert.hex[type] ? convert.hex[type](colors.silver) : colors.silver;
		this.skyblue = convert.hex[type] ? convert.hex[type](colors.skyblue) : colors.skyblue;
		this.slateblue = convert.hex[type] ? convert.hex[type](colors.slateblue) : colors.slateblue;
		this.slategray = convert.hex[type] ? convert.hex[type](colors.slategray) : colors.slategray;
		this.slategrey = convert.hex[type] ? convert.hex[type](colors.slategrey) : colors.slategrey;
		this.snow = convert.hex[type] ? convert.hex[type](colors.snow) : colors.snow;
		this.springgreen = convert.hex[type] ? convert.hex[type](colors.springgreen) : colors.springgreen;
		this.steelblue = convert.hex[type] ? convert.hex[type](colors.steelblue) : colors.steelblue;
		this.tan = convert.hex[type] ? convert.hex[type](colors.tan) : colors.tan;
		this.teal = convert.hex[type] ? convert.hex[type](colors.teal) : colors.teal;
		this.thistle = convert.hex[type] ? convert.hex[type](colors.thistle) : colors.thistle;
		this.tomato = convert.hex[type] ? convert.hex[type](colors.tomato) : colors.tomato;
		this.turquoise = convert.hex[type] ? convert.hex[type](colors.turquoise) : colors.turquoise;
		this.violet = convert.hex[type] ? convert.hex[type](colors.violet) : colors.violet;
		this.wheat = convert.hex[type] ? convert.hex[type](colors.wheat) : colors.wheat;
		this.white = convert.hex[type] ? convert.hex[type](colors.white) : colors.white;
		this.whitesmoke = convert.hex[type] ? convert.hex[type](colors.whitesmoke) : colors.whitesmoke;
		this.yellow = convert.hex[type] ? convert.hex[type](colors.yellow) : colors.yellow;
		this.yellowgreen = convert.hex[type] ? convert.hex[type](colors.yellowgreen) : colors.yellowgreen;
	}

	/**
	 * Gets any color from the HEX or KEYWORD color type.
	 * @param {string} color The HEX or KEYWORD color to input.
	 * @returns {ColorTypes} 14 color types:
	 * - hex: The color type HEX.
	 * - rgb: The color type RGB.
	 * - hsl: The color type HSL.
	 * - hsv: The color type HSV.
	 * - hwb: The color type HWB.
	 * - cmyk: The color type CMYK.
	 * - xyz: The color type XYZ.
	 * - lab: The color type LAB.
	 * - lch: The color type LCH.
	 * - keyword: The color type KEYWORD.
	 * - ansi16: The color type ANSI16.
	 * - ansi256: The color type ANSI256.
	 * - hcg: The color type HCG.
	 * - apple: The color type APPLE.
	 */
	static color(color: string): ColorTypes {
		return {
			// @ts-ignore
			hex: Object.keys(colors).includes(color) ? convert.keyword.hex(color) : convert.rgb.hex(convert.hex.rgb(color)),
			// @ts-ignore
			rgb: Object.keys(colors).includes(color) ? convert.keyword.rgb(color) : convert.hex.rgb(color),
			// @ts-ignore
			hsl: Object.keys(colors).includes(color) ? convert.keyword.hsl(color) : convert.hex.hsl(color),
			// @ts-ignore
			hsv: Object.keys(colors).includes(color) ? convert.keyword.hsv(color) : convert.hex.hsv(color),
			// @ts-ignore
			hwb: Object.keys(colors).includes(color) ? convert.keyword.hwb(color) : convert.hex.hwb(color),
			// @ts-ignore
			cmyk: Object.keys(colors).includes(color) ? convert.keyword.cmyk(color) : convert.hex.cmyk(color),
			// @ts-ignore
			xyz: Object.keys(colors).includes(color) ? convert.keyword.xyz(color) : convert.hex.xyz(color),
			// @ts-ignore
			lab: Object.keys(colors).includes(color) ? convert.keyword.lab(color) : convert.hex.lab(color),
			// @ts-ignore
			lch: Object.keys(colors).includes(color) ? convert.keyword.lch(color) : convert.hex.lch(color),
			// @ts-ignore
			keyword: Object.keys(colors).includes(color) ? convert.hex.keyword(convert.keyword.hex(color)) : convert.hex.keyword(color),
			// @ts-ignore
			ansi16: Object.keys(colors).includes(color) ? convert.keyword.ansi16(color) : convert.hex.ansi16(color),
			// @ts-ignore
			ansi256: Object.keys(colors).includes(color) ? convert.keyword.ansi256(color) : convert.hex.ansi256(color),
			// @ts-ignore
			hcg: Object.keys(colors).includes(color) ? convert.keyword.hcg(color) : convert.hex.hcg(color),
			// @ts-ignore
			apple: Object.keys(colors).includes(color) ? convert.keyword.apple(color) : convert.hex.apple(color)
		}
	}
}

export = Colors;