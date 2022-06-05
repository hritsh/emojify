import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = "";
  output = "";
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
    "Z":"🅉",
    "?": "❓",
    "!": "❗",
    "#": "#️⃣",
    "$": "💰",
    "*": "*️⃣"
  };

  onInput(text: string) {
    this.output = this.emojiReplace(text)
  }

  emojiReplace(text: string): string {
    let result = text.replace(/\w/gi, m => this.emojiMap[m]);
    return result;
  }

  copyMessage() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.output;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert("Copied to clipboard!")
  }
  
}
