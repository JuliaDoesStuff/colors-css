import assert = require("assert");
import convert = require("color-convert");
import Colors = require("..");
import colors = require("../colors.json");

describe("Colors", () => {
	describe("maroon", () => {
		it("should return the HEX color of maroon", () => {
			assert.strictEqual(colors.maroon, new Colors("hex").maroon);
		});
	});
	describe("red", () => {
		it("should return the RGB color of red", () => {
			assert.strictEqual(JSON.stringify(convert.hex.rgb(colors.red)), JSON.stringify(new Colors("rgb").red));
		});
	});
	describe("saddlebrown", () => {
		it("should return the CMYK color of saddlebrown", () => {
			assert.strictEqual(JSON.stringify(convert.hex.cmyk(colors.saddlebrown)), JSON.stringify(new Colors("cmyk").saddlebrown));
		});
	});
	describe("color", () => {
		it("should return the RGB color of DEADED", () => {
			assert.strictEqual(JSON.stringify(convert.hex.rgb("DEADED")), JSON.stringify(Colors.color("DEADED").rgb));
		});
	});
});