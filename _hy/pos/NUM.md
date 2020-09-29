---
layout: postag
title: 'NUM'
shortdef: 'numeral'
udver: '2'
---

### Definition

A numeral is a word, functioning most typically as a determiner, adjective or pronoun, that expresses a number and a relation to the number, such as quantity, sequence, frequency or fraction.

Note that cardinal numerals are covered by `NUM` whether they are used as determiners or not (as in _Windows <b>7</b>_) and whether they are expressed as words _(չորս)_, digits _(4)_, Roman numerals _(IV)_, or Armenian alphabet tools _(Դ)_. Other words functioning as determiners (including pronominal quantifiers: interrogative and relative (_քանի_ “how many”); demonstrative (_այսքան_ “this many”); indefinite (_մի քանի_ “several”); definite (_բոլոր, ողջ_ “all, whole”) are tagged [DET]().

Note that some words that may be traditionally called numerals, are not tagged `NUM`, based on their syntactic and morphological behavior.

Note that there are no _adverbial ordinal_ and _multiplicative numerals_ in Armenian.

If the numerals inflect as nouns, they are tagged [NOUN]().

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
- _I, II, III, IV, V, MMXIV_
-	_մեկ, երկու, երեք, չորս, հինգ, յոթանասուն&nbsp;_ “one, two, three, four, five, seventy”
-	_Ա, Ժ, Է, ԺԱ, Ն, Ռ_ “1, 10, 7, 11, 400, 1000”
-	_կես, քառորդ&nbsp;_ “one-half, quarter”: denominators of fractions constitute a separate class of cardinal numerals.

### Counterexamples

- _առաջին, երկրորդ, երրորդ&nbsp;_ “first, second, third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [NumType]() feature reveals their semantic relation to numbers.
- _մեկ-մեկ, երկու-երկու, երեք-երեք&nbsp;_ “one at a time, two at a time, three at a time”: adverbial distibutive numerals. They are tagged [ADV](), and the [NumType]() feature reveals their semantic relation to numbers.
- _մեկ, երկուս, երեք, չորս, հինգ&nbsp;_ “number one, number two, number three, number four, number five”: names of numbers, or of objects identified by the number (e.g. of a bus route). They are not considered numerals and they are tagged [NOUN]().

### Border cases

- _երիցս, չորիցս, բազմիցս, եռապատիկ, քառապատիկ, բազմապատիկ, եռակի, քառակի, բազմակի&nbsp;_ “thrice, four-time(s), many-time(s)”: n-tuples _(n-tice)&nbsp;_ are not considered numerals in the Armenian grammar. They are tagged either [ADJ]() or [ADV]().
- _տասնյակ, հարյուրյակ, հնգանոց, իննոց, 20-ական, 30-ական (թվականներին)&nbsp;_ “a ten, a hundred, five-note, nine-note, by twenty, thirthies” are not considered numerals in the Armenian grammar. They are tagged either [ADJ]() or [NOUN]().
-	_հարյուրավոր, հազարավոր, միլիոնավոր, միլիարդավոր&nbsp;_ “hundreds of, thousands of, millions of, billions of”: expressions _-s of_, for instance, in phrases like _<b>հազարավոր</b> մարդիկ էին դուրս եկել փողոց&nbsp;_ “<b>thousands</b> of people went on the streets” are adjectives and tagged [ADJ]().
-	_հարյուր, հազար&nbsp;_ “hundred, thousand”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns. If they inflect as nouns, they are tagged [NOUN](); but the borderline is fuzzy. For instance, in phrases like _<b>հազար</b> ասացի&nbsp;_ “I told thousand times”, _<b>հազար</b> մարդ&nbsp;_ “thousand (many different) people”, _հազար_ is a noun. In numeric expressions, e.g. _110 <b>հազար</b> դոլար&nbsp;_ (“110 thousand dollars”), it is a cardinal numeral (see [specific syntax](../specific-syntax.html)).
<!-- Interlanguage links updated Út zář 29 20:42:56 CEST 2020 -->
