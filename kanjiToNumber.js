//kanjiToNumber.js
//七千八百二十三とかを7823とかに変換するJavaScriptのプログラム
function kanjiToNumber(kanji) {
  const kanjiNums = {
    零: 0,
    〇: 0,
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
  };
  const kanjiPowers = {
    十: 10,
    百: 100,
    千: 1000,
    万: 10000,
    億: 100000000,
    兆: 1000000000000,
  };

  let result = 0; // 最終結果
  let currentSection = 0; // 現在のセクション（万未満の値）
  let tempNum = 0; // 直前の数字

  for (let i = 0; i < kanji.length; i++) {
    const char = kanji[i];

    if (kanjiNums[char] !== undefined) {
      tempNum = kanjiNums[char];
    } else if (kanjiPowers[char] !== undefined) {
      const power = kanjiPowers[char];
      if (tempNum === 0) tempNum = 1; // 単位だけの場合（例: "十"）

      if (power >= 10000) {
        // 万、億、兆の場合、現在のセクションを確定して新しいセクションを開始
        if (currentSection > 0) {
          result += currentSection;
        }
        currentSection = tempNum * power;
        tempNum = 0;
      } else {
        // 十、百、千の場合、現在のセクションに加算
        currentSection += tempNum * power;
        tempNum = 0;
      }
    }
  }

  // 残りのセクションと数字を加算
  result += currentSection + tempNum;
  return result;
}

// テスト
console.log(kanjiToNumber("七千八百二十三")); // 7823
console.log(kanjiToNumber("百五")); // 105
console.log(kanjiToNumber("三千二百万")); // 32000000
