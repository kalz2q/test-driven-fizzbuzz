const { parse } = require("kanji-number");

console.log(parse("七千八百二十三")); // 7823
console.log(parse("一億二千三百四十五万六千七百八十九")); // 123456789
