import chalk = require("chalk");
import convert = require("color-convert");
import Colors = require(".");
import colors = require("./colors.json");

const colorTypes = [
	"hex",
	"rgb",
	"hsl",
	"hsv",
	"hwb",
	"cmyk",
	"xyz",
	"lab",
	"lch",
	"keyword",
	"ansi16",
	"ansi256",
	"hcg",
	"apple"
]

function cli(argv: string[]) {
	if (!argv[0]) return console.log([
		"Format: colors (hex/keyword)",
		"",
		"List of CSS (keyword) colors:",
		Object.keys(colors).join(", ")
	].join("\n"));
	
	let color = Colors.color(argv[0]);
	let colorMessage = [];
	for (const colorType of colorTypes) {
		colorMessage.push(`${colorType.toUpperCase()}: ${chalk.hex(convert[colorType].hex ? convert[colorType].hex(color[colorType]) : color.hex)(color[colorType] instanceof Array ? color[colorType].join(", ") : color[colorType])}`);
	}

	console.log(colorMessage.join("\n"));
}

export = cli;