export default class TextSearcher {
  constructor(words, characterSwaps) {
    this.words = words;
    this.characterSwaps = characterSwaps;
    this.wordIndex = this.getIndex();
  }

  search(text) {
    const normalizedText = this.normalize(text);
    return normalizedText in this.wordIndex ? this.wordIndex[normalizedText] : [];
  }

  getIndex() {
    const result = {};

    for (var wordIndex = 0; wordIndex < this.words.length; wordIndex++) {
      const word = this.words[wordIndex];

      for (var length = 1; length < word.length + 1; length++) {
        const substring = word.substring(0, length);
        const normalizedSubstring = this.normalize(substring);

        if (normalizedSubstring in result) {
          result[normalizedSubstring].push(word);
        } else {
          result[normalizedSubstring] = [word];
        }
      }
    }

    return result;
  }

  normalize(text) {
    let result = '';
    const lowerCaseText = text.toLowerCase();

    for (var characterIndex = 0; characterIndex < lowerCaseText.length; characterIndex++) {
      const character = lowerCaseText.charAt(characterIndex);

      if (character in this.characterSwaps) {
        result += this.characterSwaps[character];
      } else {
        result += character;
      }
    }

    return result;
  }
}