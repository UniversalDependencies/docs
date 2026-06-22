---
layout: postag
title: 'NUM'
shortdef: 'numeral'
udver: '2'
---

### Definition

A numeral is a word, functioning most typically as a determiner, adjective or pronoun, that expresses a number and a relation to the number, such as quantity, sequence, frequency or fraction.

Note that cardinal numerals are covered by `NUM` whether they are used as determiners or not (as in _Windows <b>7</b>_) and whether they are expressed as words _(չորս)_/_(čors)_, digits _(4)_, Roman numerals _(IV)_, or Armenian letters _(Դ)_. Other words functioning as determiners (including pronominal quantifiers: interrogative and relative (_քանի_/_k’ani_ “how many”); demonstrative (_այսքան_/_aysk’an_ “this many”); indefinite (_մի քանի_/_mi k’ani_ “several”); definite (_բոլոր_/_bolor_ “all”, _ողջ_/_oġǰ_ “whole”) are tagged [DET]().

Note that some words that may be traditionally called numerals, are not tagged `NUM`, based on their syntactic and morphological behavior.

Note that there are no _adverbial ordinal_ and _multiplicative numerals_ in Armenian.

If the numerals inflect as nouns, they are tagged [NOUN]().

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
- _I, II, III, IV, V, MMXIV_
-	_մեկ_/_mek_ “one”, _երկու_/_erkow_ “two”, _երեք_/_erek’_ “three”, _չորս_/_čors_ “four”, _հինգ_/_hing_ “five”, _յոթանասուն_/_yot’anasown_ “seventy”
-	_Ա, Ժ, Է, ԺԱ, Ն, Ռ_ “1, 10, 7, 11, 400, 1000”
-	_կես_/_kes_ “one-half”, _քառորդ_/_k’aṙord_ “quarter”: denominators of fractions constitute a separate class of cardinal numerals.

### Counterexamples

- _առաջին_/_aṙaǰin_ “first”, _երկրորդ_/_erkrord_ “second”, _երրորդ_/_errord_ “third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [NumType]() feature reveals their semantic relation to numbers.
- _մեկ-մեկ_/_mek-mek_ “one at a time”, _երկու-երկու_/_erkow-erkow_ “two at a time”, _երեք-երեք_/_erek’-erek’ “three at a time”_: adverbial distibutive numerals. They are tagged [ADV](), and the [NumType]() feature reveals their semantic relation to numbers.
- _մեկ_/_mek_ “number one”, _երկուս_/_erkows_ “number two”, _երեք_/_erek’_ “number three”, _չորս_/_čors_ “number four”, _հինգ_/_hing_ “number five”: names of numbers, or of objects identified by the number (e.g. of a bus route). They are not considered numerals and they are tagged [NOUN]().

### Border cases

- _երիցս_/_eric’s_ “thrice”, _չորիցս_/_čoric’s_ “four-time(s)”, _բազմիցս_/_bazmic’s_ “many-time(s)”, _եռապատիկ_/_eṙapatik_ “threefold”, _քառապատիկ_/_k’aṙapatik_ “fourfolde”, _բազմապատիկ_/_bazmapatik_ “n-fold”, _եռակի_/_eṙaki_ “triple”, _քառակի_/_k’aṙaki_ “quadruple”, _բազմակի_/_bazmaki_ “n-tuples (n-tice)” are not considered numerals in the Armenian grammar. They are tagged either [ADJ]() or [ADV]().
- _տասնյակ, հարյուրյակ, հնգանոց, իննոց, 20-ական, 30-ական (թվականներին)&nbsp;_ “a ten, a hundred, five-note, nine-note, by twenty, thirthies” are not considered numerals in the Armenian grammar. They are tagged either [ADJ]() or [NOUN]().
-	_հարյուրավոր, հազարավոր, միլիոնավոր, միլիարդավոր&nbsp;_ “hundreds of, thousands of, millions of, billions of”: expressions _-s of_, for instance, in phrases like _<b>հազարավոր</b> մարդիկ էին դուրս եկել փողոց&nbsp;_ “<b>thousands</b> of people went on the streets” are adjectives and tagged [ADJ]().
-	_հարյուր, հազար&nbsp;_ “hundred, thousand”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns. If they inflect as nouns, they are tagged [NOUN](); but the borderline is fuzzy. For instance, in phrases like _<b>հազար</b> ասացի&nbsp;_ “I told thousand times”, _<b>հազար</b> մարդ&nbsp;_ “thousand (many different) people”, _հազար_ is a noun. In numeric expressions, e.g. _110 <b>հազար</b> դոլար&nbsp;_ (“110 thousand dollars”), it is a cardinal numeral (see [specific syntax](../specific-syntax.html)).
<!-- Interlanguage links updated St 6. května 2026, 20:42:03 CEST -->
