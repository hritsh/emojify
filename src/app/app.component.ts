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
    "Z":"🅉"
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
    document.getElementById("outputHeading")!.innerHTML = "Copied!";
    setTimeout(function(){
        document.getElementById('outputHeading')!.innerHTML = "Output (Click to Copy)";
    }, 2000);
  }
  
}
