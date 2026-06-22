---
layout: postag
title: 'NUM'
shortdef: 'numeral'
udver: '2'
---

### Definition

A numeral is a word, functioning most typically as a determiner, adjective, or pronoun, that expresses a number and a relation to the number, such as quantity, sequence, frequency or fraction.

Note that cardinal numerals are covered by `NUM` whether they are used as determiners or not (as in _Windows <b>7</b>_) and whether they are expressed as words _(չորս)_/_(čors)_, digits _(4)_, Roman numerals _(IV)_, or Armenian letters _(Դ)_. Other words functioning as determiners, including pronominal quantifiers: interrogative and relative (_քանի_/_k’ani_ “how many”); demonstrative (_այսքան_/_aysk’an_ “this many”); indefinite (_մի քանի_/_mi k’ani_ “several”); definite (_բոլոր_/_bolor_ “all”, _ողջ_/_oġǰ_ “whole”) are tagged [DET]().

Note that some words that may be traditionally called numerals, are not tagged `NUM`, based on their syntactic and morphological behavior.

Note that there are no _adverbial ordinal numerals_ and _multiplicative numerals_ in Armenian.

If a numeral inflects as a noun, it is tagged [NOUN]().

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
- _I, II, III, IV, V, MMXIV_
-	_մեկ_/_mek_ “one”, _երկու_/_erkow_ “two”, _երեք_/_erek’_ “three”, _չորս_/_čors_ “four”, _հինգ_/_hing_ “five”, _յոթանասուն_/_yot’anasown_ “seventy”
-	_Ա, Ժ, Է, ԺԱ, Ն, Ռ_ “1, 10, 7, 11, 400, 1000”
-	_կես_/_kes_ “one-half”, _քառորդ_/_k’aṙord_ “quarter”: denominators of fractions constitute a separate class of cardinal numerals.

### Counterexamples

- _առաջին_/_aṙaǰin_ “first”, _երկրորդ_/_erkrord_ “second”, _երրորդ_/_errord_ “third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [NumType]() feature reveals their semantic relation to numbers.
- _մեկ-մեկ_/_mek-mek_ “one at a time”, _երկու-երկու_/_erkow-erkow_ “two at a time”, _երեք-երեք_/_erek’-erek’_ “three at a time”: adverbial distributive numerals. They are tagged [ADV](), and the [NumType]() feature reveals their semantic relation to numbers.
- _մեկ_/_mek_ “number one”, _երկուս_/_erkows_ “number two”, _երեք_/_erek’_ “number three”, _չորս_/_čors_ “number four”, _հինգ_/_hing_ “number five”: names of numbers, or of objects identified by the number (e.g. of a bus route). They are not considered numerals and they are tagged [NOUN]().

### Border cases

- _երիցս_/_eric’s_ “thrice”, _չորիցս_/_čoric’s_ “four times”, _բազմիցս_/_bazmic’s_ “many times”, _եռապատիկ_/_eṙapatik_ “threefold”, _քառապատիկ_/_k’aṙapatik_ “fourfold”, _բազմապատիկ_/_bazmapatik_ “n-fold”, _եռակի_/_eṙaki_ “triple”, _քառակի_/_k’aṙaki_ “quadruple”, _բազմակի_/_bazmaki_ “n-tuples, multiple” are not considered numerals in the Armenian grammar. They are tagged either [ADJ]() or [ADV]().
- _տասնյակ_/_tasnyak_ “a ten”, _հարյուրյակ_/_haryowryak_ “a hundred”, _հնգանոց_/_hnganoc’_ “five-note”, _իննոց_/_innoc’_ “nine-note”, _20-ական_/_20-akan_ “by twenty”, _30-ական թվականներ_/_30-akan t’vakanner_ “thirties” are not considered numerals in the Armenian grammar. They are tagged either [ADJ]() or [NOUN]().
-	_հարյուրավոր_/_haryowravor_ “hundreds of”, _հազարավոր_/_hazaravor_ “thousands of”, _միլիոնավոր_/_milionavor_ “millions of”, _միլիարդավոր_/_miliardavor_ “billions of”: expressions _-s of_, for instance, in phrases like _<b>հազարավոր</b> մարդիկ էին դուրս եկել փողոց_/_<b>hazaravor</b> mardik ēin dowrs ekel p’oġoc’_ “<b>thousands</b> of people had taken to the streets” are adjectives and tagged [ADJ]().
-	_հարյուր_/_haryowr_ “hundred”, _հազար_/_hazar_ “thousand”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns. If they inflect as nouns, they are tagged [NOUN](); but the borderline is fuzzy. For instance, in phrases like _<b>հազար</b> ասացի_/_<b>hazar</b> asac’i_ “I told you a thousand times” lit. I told thousand, _<b>հազար</b> մարդ_/_<b>hazar</b> mard_ “thousand people” (when it denotes an indefinite large quantity rather than an exact numeric value), _հազար_/_hazar_ is a noun. In numeric expressions, e.g. _110 <b>հազար</b> դոլար_/_110 <b>hazar</b> dolar_ “110 thousand dollars”, it is a cardinal numeral (see [specific syntax](../specific-syntax.html)).
<!-- Interlanguage links updated St 6. května 2026, 20:42:03 CEST -->
