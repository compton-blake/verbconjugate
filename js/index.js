import TextSearcher from './french/TextSearcher';
import FrenchVerb from './french/FrenchVerb';
import FrenchLibrary from './french/FrenchLibrary';

var characterSwaps = {
  'à': 'a',
  'á': 'a',
  'ä': 'a',
  'æ': 'a',
  'ã': 'a',
  'å': 'a',
  'è': 'e',
  'é': 'e',
  'ê': 'e',
  'ë': 'e',
  'ē': 'e',
  'ė': 'e',
  'ę': 'e',
  'î': 'i',
  'ï': 'i',
  'í': 'i',
  'ī': 'i',
  'į': 'i',
  'ì': 'i',
  'ô': 'o',
  'ö': 'o',
  'ò': 'o',
  'ó': 'o',
  'œ': 'o',
  'ø': 'o',
  'ō': 'o',
  'õ': 'o',
  'û': 'u',
  'ü': 'u',
  'ù': 'u',
  'ú': 'u',
  'ū': 'u'
};

const frenchLibrary = new FrenchLibrary();
const frenchWordFinder = new TextSearcher(frenchLibrary.getWords(), characterSwaps);

window.onSearchInput = function(word) {
  const matches = frenchWordFinder.search(word);
  const frenchConjugationTableElement = document.querySelector('french-conjugation-table');

  if (matches.length === 1) {
    const verb = frenchLibrary.getWord(matches[0]);

    frenchConjugationTableElement.set('word', verb);
    frenchConjugationTableElement.set('conjugation', verb.getConjugations());

    frenchConjugationTableElement.parentElement.style.display = 'inline';
  } else {
    frenchConjugationTableElement.parentElement.style.display = 'none';
  }
};