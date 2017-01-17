import FrenchVerb from './FrenchVerb';

export default class FrenchLibrary {
  constructor() {
    this.verbs = [
      new FrenchVerb('être', false, false),
      new FrenchVerb('avoir', false, false),
      new FrenchVerb('manger', true, false),
      new FrenchVerb('marcher', true, false),
      new FrenchVerb('étudier', true, false),
      new FrenchVerb('nager', true, false),
      new FrenchVerb('aller', false, false),
      new FrenchVerb('faire', false, false),
      new FrenchVerb('tenir', true, false)
    ];

    this.index = this.verbs.reduce(function(previous, next) {
      previous[next.text] = next;
      return previous;
    }, {});
  }

  getWords() {
    return this.verbs.map(verb => verb.text);
  }

  getWord(word) {
    return this.index[word];
  }
}