import { Component } from '@angular/core';
import { Emojify } from '@gaikema/emojify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = "Start typing here...";
  output: string[] = Array(9).fill("");
  titles: string[] = ["Emojipasta", "Emoji", "Square", "Bubble", "Black Bubble", "Medivial", "Cursive", "Outline", "Japanese"];

  onInput(text: string): void {
    this.output = [this.emojipasta(text), this.emojiReplace(text), this.squareReplace(text), this.bubbleReplace(text), this.blackBubbleReplace(text), this.medivialReplace(text), this.cursiveReplace(text), this.outlineReplace(text), this.japaneseReplace(text)];
  }

  emojipasta(text: string): string {
    if (text.length == 0) {
      return "";
    }
    var emojifyTest = new Emojify(text);
    return emojifyTest.emojify();
  }

  emojiReplace(text: string): string {
    let result = text.replace(/[\w?!#$*]/gi, m => this.emojiMap[m]);
    return result;
  }

  squareReplace(text: string): string {
    let result = text.replace(/[\w]/gi, m => this.squareMap[m]);
    return result;
  }

  bubbleReplace(text: string): string {
    let result = text.replace(/[\w]/gi, m => this.bubbleMap[m]);
    return result;
  }

  blackBubbleReplace(text: string): string {
    let result = text.replace(/[\w]/gi, m => this.blackBubbleMap[m]);
    return result;
  }

  medivialReplace(text: string): string {
    let result = text.replace(/[\w]/gi, m => this.medivialMap[m]);
    return result;
  }

  cursiveReplace(text: string): string {
    let result = text.replace(/[\w]/gi, m => this.cursiveMap[m]);
    return result;
  }

  outlineReplace(text: string): string {
    let result = text.replace(/[\w]/gi, m => this.outlineMap[m]);
    return result;
  }

  japaneseReplace(text: string): string {
    let result = text.replace(/[\w]/gi, m => this.japaneseMap[m]);
    return result;
  }

  copyMessage(event: Event): void {
    let elementId: string = (event.target as Element).id;
    const element = document.getElementById(elementId) as HTMLInputElement | null;

    if (element != null) {
      element.innerHTML = "COPIED!";
      element.style.color="white";
      element.style.backgroundColor="#282935";
      setTimeout(function(){
        element.innerHTML = "COPY";
        element.style.color="";
        element.style.backgroundColor="";
      }, 1500);
    }

    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.output[parseInt(elementId)];
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    // alert("Copied to clipboard!")
  }

  emojiMap: { [key: string]: string } = {
    "0": "0️⃣",
    "1": "1️⃣",
    "2": "2️⃣",
    "3": "3️⃣",
    "4": "4️⃣",
    "5": "5️⃣",
    "6": "6️⃣",
    "7": "7️⃣",
    "8": "8️⃣",
    "9": "9️⃣",
    "a": "🅰️",
    "b": "🅱️",
    "c": "©️",
    "d": "🄳",
    "e": "📧",
    "f": "🄵",
    "g": "🄶",
    "h": "♓️",
    "i": "ℹ️",
    "j": "🄹",
    "k": "🄺",
    "l": "🄻",
    "m": "♏️",
    "n": "♑️",
    "o": "🅾️",
    "p": "🅿️",
    "q": "🅀",
    "r": "®️",
    "s": "💲",
    "t": "✝️",
    "u": "⛎",
    "v": "♈️",
    "w": "🅆",
    "x": "❎",
    "y": "🅈",
    "z": "🅉",
    "A": "🅰️",
    "B": "🅱️",
    "C": "©️",
    "D": "🄳",
    "E": "📧",
    "F": "🄵",
    "G": "🄶",
    "H": "♓️",
    "I": "ℹ️",
    "J": "🄹",
    "K": "🄺",
    "L": "🄻",
    "M": "♏️",
    "N": "♑️",
    "O": "🅾️",
    "P": "🅿️",
    "Q": "🅀",
    "R": "®️",
    "S": "💲",
    "T": "✝️",
    "U": "⛎",
    "V": "♈️",
    "W": "🅆",
    "X": "❎",
    "Y": "🅈",
    "Z": "🅉",
    "?": "❓",
    "!": "❗",
    "#": "#️⃣",
    "$": "💰",
    "*": "*️⃣"
  };

  squareMap: { [key: string]: string } = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "a": "🄰",
    "b": "🄱",
    "c": "🄲",
    "d": "🄳",
    "e": "🄴",
    "f": "🄵",
    "g": "🄶",
    "h": "🄷",
    "i": "🄸",
    "j": "🄹",
    "k": "🄺",
    "l": "🄻",
    "m": "🄼",
    "n": "🄽",
    "o": "🄾",
    "p": "🄿",
    "q": "🅀",
    "r": "🅁",
    "s": "🅂",
    "t": "🅃",
    "u": "🅄",
    "v": "🅅",
    "w": "🅆",
    "x": "🅇",
    "y": "🅈",
    "z": "🅉",
    "A": "🄰",
    "B": "🄱",
    "C": "🄲",
    "D": "🄳",
    "E": "🄴",
    "F": "🄵",
    "G": "🄶",
    "H": "🄷",
    "I": "🄸",
    "J": "🄹",
    "K": "🄺",
    "L": "🄻",
    "M": "🄼",
    "N": "🄽",
    "O": "🄾",
    "P": "🄿",
    "Q": "🅀",
    "R": "🅁",
    "S": "🅂",
    "T": "🅃",
    "U": "🅄",
    "V": "🅅",
    "W": "🅆",
    "X": "🅇",
    "Y": "🅈",
    "Z": "🅉"
  };

  bubbleMap: { [key: string]: string } = {
    "0": "⓪",
    "1": "①",
    "2": "②",
    "3": "③",
    "4": "④",
    "5": "⑤",
    "6": "⑥",
    "7": "⑦",
    "8": "⑧",
    "9": "⑨",
    "a": "ⓐ",
    "b": "ⓑ",
    "c": "ⓒ",
    "d": "ⓓ",
    "e": "ⓔ",
    "f": "ⓕ",
    "g": "ⓖ",
    "h": "ⓗ",
    "i": "ⓘ",
    "j": "ⓙ",
    "k": "ⓚ",
    "l": "ⓛ",
    "m": "ⓜ",
    "n": "ⓝ",
    "o": "ⓞ",
    "p": "ⓟ",
    "q": "ⓠ",
    "r": "ⓡ",
    "s": "ⓢ",
    "t": "ⓣ",
    "u": "ⓤ",
    "v": "ⓥ",
    "w": "ⓦ",
    "x": "ⓧ",
    "y": "ⓨ",
    "z": "ⓩ",
    "A": "Ⓐ",
    "B": "Ⓑ",
    "C": "Ⓒ",
    "D": "Ⓓ",
    "E": "Ⓔ",
    "F": "Ⓕ",
    "G": "Ⓖ",
    "H": "Ⓗ",
    "I": "Ⓘ",
    "J": "Ⓙ",
    "K": "Ⓚ",
    "L": "Ⓛ",
    "M": "Ⓜ",
    "N": "Ⓝ",
    "O": "Ⓞ",
    "P": "Ⓟ",
    "Q": "Ⓠ",
    "R": "Ⓡ",
    "S": "Ⓢ",
    "T": "Ⓣ",
    "U": "Ⓤ",
    "V": "Ⓥ",
    "W": "Ⓦ",
    "X": "Ⓧ",
    "Y": "Ⓨ",
    "Z": "Ⓩ"
  };

  blackBubbleMap: { [key: string]: string } = {
    "0": "⓿",
    "1": "➊",
    "2": "➋",
    "3": "➌",
    "4": "➍",
    "5": "➎",
    "6": "➏",
    "7": "➐",
    "8": "➑",
    "9": "➒",
    "a": "🅐",
    "b": "🅑",
    "c": "🅒",
    "d": "🅓",
    "e": "🅔",
    "f": "🅕",
    "g": "🅖",
    "h": "🅗",
    "i": "🅘",
    "j": "🅙",
    "k": "🅚",
    "l": "🅛",
    "m": "🅜",
    "n": "🅝",
    "o": "🅞",
    "p": "🅟",
    "q": "🅠",
    "r": "🅡",
    "s": "🅢",
    "t": "🅣",
    "u": "🅤",
    "v": "🅥",
    "w": "🅦",
    "x": "🅧",
    "y": "🅨",
    "z": "🅩",
    "A": "🅐",
    "B": "🅑",
    "C": "🅒",
    "D": "🅓",
    "E": "🅔",
    "F": "🅕",
    "G": "🅖",
    "H": "🅗",
    "I": "🅘",
    "J": "🅙",
    "K": "🅚",
    "L": "🅛",
    "M": "🅜",
    "N": "🅝",
    "O": "🅞",
    "P": "🅟",
    "Q": "🅠",
    "R": "🅡",
    "S": "🅢",
    "T": "🅣",
    "U": "🅤",
    "V": "🅥",
    "W": "🅦",
    "X": "🅧",
    "Y": "🅨",
    "Z": "🅩",
  };

  medivialMap: { [key: string]: string } = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "a": "𝖆",
    "b": "𝖇",
    "c": "𝖈",
    "d": "𝖉",
    "e": "𝖊",
    "f": "𝖋",
    "g": "𝖌",
    "h": "𝖍",
    "i": "𝖎",
    "j": "𝖏",
    "k": "𝖐",
    "l": "𝖑",
    "m": "𝖒",
    "n": "𝖓",
    "o": "𝖔",
    "p": "𝖕",
    "q": "𝖖",
    "r": "𝖗",
    "s": "𝖘",
    "t": "𝖙",
    "u": "𝖚",
    "v": "𝖛",
    "w": "𝖜",
    "x": "𝖝",
    "y": "𝖞",
    "z": "𝖟",
    "A": "𝕬",
    "B": "𝕭",
    "C": "𝕮",
    "D": "𝕯",
    "E": "𝕰",
    "F": "𝕱",
    "G": "𝕲",
    "H": "𝕳",
    "I": "𝕴",
    "J": "𝕵",
    "K": "𝕶",
    "L": "𝕷",
    "M": "𝕸",
    "N": "𝕹",
    "O": "𝕺",
    "P": "𝕻",
    "Q": "𝕼",
    "R": "𝕽",
    "S": "𝕾",
    "T": "𝕿",
    "U": "𝖀",
    "V": "𝖁",
    "W": "𝖂",
    "X": "𝖃",
    "Y": "𝖄",
    "Z": "𝖅"
  }

  cursiveMap: { [key: string]: string } = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "a": "𝓪",
    "b": "𝓫",
    "c": "𝓬",
    "d": "𝓭",
    "e": "𝓮",
    "f": "𝓯",
    "g": "𝓰",
    "h": "𝓱",
    "i": "𝓲",
    "j": "𝓳",
    "k": "𝓴",
    "l": "𝓵",
    "m": "𝓶",
    "n": "𝓷",
    "o": "𝓸",
    "p": "𝓹",
    "q": "𝓺",
    "r": "𝓻",
    "s": "𝓼",
    "t": "𝓽",
    "u": "𝓾",
    "v": "𝓿",
    "w": "𝔀",
    "x": "𝔁",
    "y": "𝔂",
    "z": "𝔃",
    "A": "𝓐",
    "B": "𝓑",
    "C": "𝓒",
    "D": "𝓓",
    "E": "𝓔",
    "F": "𝓕",
    "G": "𝓖",
    "H": "𝓗",
    "I": "𝓘",
    "J": "𝓙",
    "K": "𝓚",
    "L": "𝓛",
    "M": "𝓜",
    "N": "𝓝",
    "O": "𝓞",
    "P": "𝓟",
    "Q": "𝓠",
    "R": "𝓡",
    "S": "𝓢",
    "T": "𝓣",
    "U": "𝓤",
    "V": "𝓥",
    "W": "𝓦",
    "X": "𝓧",
    "Y": "𝓨",
    "Z": "𝓩"
  }

  outlineMap: { [key: string]: string } = {
    "0": "𝟘",
    "1": "𝟙",
    "2": "𝟚",
    "3": "𝟛",
    "4": "𝟜",
    "5": "𝟝",
    "6": "𝟞",
    "7": "𝟟",
    "8": "𝟠",
    "9": "𝟡",
    "a": "𝕒",
    "b": "𝕓",
    "c": "𝕔",
    "d": "𝕕",
    "e": "𝕖",
    "f": "𝕗",
    "g": "𝕘",
    "h": "𝕙",
    "i": "𝕚",
    "j": "𝕛",
    "k": "𝕜",
    "l": "𝕝",
    "m": "𝕞",
    "n": "𝕟",
    "o": "𝕠",
    "p": "𝕡",
    "q": "𝕢",
    "r": "𝕣",
    "s": "𝕤",
    "t": "𝕥",
    "u": "𝕦",
    "v": "𝕧",
    "w": "𝕨",
    "x": "𝕩",
    "y": "𝕪",
    "z": "𝕫",
    "A": "𝔸",
    "B": "𝔹",
    "C": "ℂ",
    "D": "𝔻",
    "E": "𝔼",
    "F": "𝔽",
    "G": "𝔾",
    "H": "ℍ",
    "I": "𝕀",
    "J": "𝕁",
    "K": "𝕂",
    "L": "𝕃",
    "M": "𝕄",
    "N": "ℕ",
    "O": "𝕆",
    "P": "ℙ",
    "Q": "ℚ",
    "R": "ℝ",
    "S": "𝕊",
    "T": "𝕋",
    "U": "𝕌",
    "V": "𝕍",
    "W": "𝕎",
    "X": "𝕏",
    "Y": "𝕐",
    "Z": "ℤ"
  }

  japaneseMap: { [key: string]: string } = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "a": "卂",
    "b": "乃",
    "c": "匚",
    "d": "ᗪ",
    "e": "乇",
    "f": "千",
    "g": "Ꮆ",
    "h": "卄",
    "i": "丨",
    "j": "ﾌ",
    "k": "Ҝ",
    "l": "ㄥ",
    "m": "爪",
    "n": "几",
    "o": "ㄖ",
    "p": "卩",
    "q": "Ɋ",
    "r": "尺",
    "s": "丂",
    "t": "ㄒ",
    "u": "ㄩ",
    "v": "ᐯ",
    "w": "山",
    "x": "乂",
    "y": "ㄚ",
    "z": "乙",
    "A": "卂",
    "B": "乃",
    "C": "匚",
    "D": "ᗪ",
    "E": "乇",
    "F": "千",
    "G": "Ꮆ",
    "H": "卄",
    "I": "丨",
    "J": "ﾌ",
    "K": "Ҝ",
    "L": "ㄥ",
    "M": "爪",
    "N": "几",
    "O": "ㄖ",
    "P": "卩",
    "Q": "Ɋ",
    "R": "尺",
    "S": "丂",
    "T": "ㄒ",
    "U": "ㄩ",
    "V": "ᐯ",
    "W": "山",
    "X": "乂",
    "Y": "ㄚ",
    "Z": "乙"
  }
}