import FrenchVerbConjugation from './FrenchVerbConjugation';

export default class FrenchVerb {
  constructor(text, regular, stemchanging) {
    this.text = text;
    this.regular = regular;
    this.stemchanging = stemchanging;
  }

  getConjugations() {
    const conjugation = new FrenchVerbConjugation(this.text);

    if (this.text === 'être') {
      conjugation.present = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
      conjugation.future = ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'];
      conjugation.imperfect = ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'];
      conjugation.simplePast = ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'];
      conjugation.presentSubjunctive = ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'];
    } else if (this.text === 'avoir') {
      conjugation.present = ['ai', 'as', 'est', 'a', 'avons', 'avez', 'ont'];
      conjugation.future = ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'];
      conjugation.imperfect = ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'];
      conjugation.simplePast = ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'];
      conjugation.presentSubjunctive = ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'];
    } else if (this.text === 'aller') {
      conjugation.present = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];
      conjugation.imperfect = ['allais', 'allais', 'allait', 'allions', 'alliez', 'allaient'];
      conjugation.future = ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'];
      conjugation.simplePast = ['allai', 'allas', 'alla', 'allâmes', 'allâtes', 'allèrent'];
      conjugation.presentSubjunctive = ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'];
    } else if (this.isEr() && this.regular) {
      const stem = this.text.substring(0, this.text.length - 2);

      conjugation.present = ['e', 'es', 'e', 'ons', 'ez', 'ent'].map(function(suffix) {
        return stem + suffix;
      });

      conjugation.future = ['ai', 'as', 'a', 'ons', 'ez', 'ont'].map(function(suffix) {
        return stem + suffix;
      });

      conjugation.imperfect = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(function(suffix) {
        return stem + suffix;
      });

      conjugation.simplePast = ['ai', 'as', 'a', 'âmes', 'âtes', 'âtes'].map(function(suffix) {
        return stem + suffix;
      });

      conjugation.presentSubjunctive = ['e', 'es', 'e', 'ions', 'iez', 'ent'].map(function(suffix) {
        return stem + suffix;
      });
    }

    return conjugation;
  }

  isIr() {
    return this.text.endsWith('ir') || this.text.endsWith('ìr')|| this.text.endsWith('ír');
  }

  isEr() {
    return this.text.endsWith('er') || this.text.endsWith('ér') || this.text.endsWith('èr');
  }

  isRe() {
    return this.text.endsWith('re') || this.text.endsWith('ré') || this.text.endsWith('rè');
  }
}