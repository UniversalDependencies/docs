---
layout: postag
title: 'NUM'
shortdef: 'numeral'
udver: '2'
---

### Definition

A numeral is a word, functioning most typically as a determiner, adjective, or pronoun, that expresses a number and a relation to the number, such as quantity, sequence, frequency or fraction.

Note that cardinal numerals are covered by `NUM` whether they are used as determiners or not and whether they are expressed as words _(չորս)_, digits _(4)_, or Armenian letters _(Դ)_. Other words functioning as determiners, including pronominal quantifiers: demonstrative (_հանչաք, հէնչափ/hančak’, hēnčap’_ “that much”); indefinite (_մէկ մի/mēk mi_ “some”); definite (_ամէն/amēn_ “every”) are tagged [DET]().

Note that some words that may be traditionally called numerals, are not tagged `NUM`, based on their syntactic and morphological behavior. _Adverbial (multiplicative)_ numerals are tagged as adverbs [ADV](), _ordinal_ numerals are tagged as adjectives [ADJ]().

If a numeral inflects as a noun, it is tagged [NOUN]().

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
-	_մէկ (մեկ)_/_mēk (mek)_ “one”, _երկու_/_erkow_ “two”, _իրեք (երեք)_/_irek’ (erek’)_ “three”, _չորս_/_čors_ “four”, _հինգ (հինկ)_/_hing (hink)_ “five”, _տասնու(վ)իրեք_/_tasnow(v)irek’_ “thirteen”, _քսանուչորս_/_k’sanowčors_ “twenty-four”, _քառսուն_/_k’aṙsown_ “forty”, _երկու հարոյր_/_erkow haroyr_ “two hundred”
-	_Ա, Ժ, Է, ԺԱ, Ն, Ռ_ “1, 10, 7, 11, 400, 1000”
-	_կէս_/_kēs_ “one-half”, _չարէկ_/_čarēk_ “quarter”: denominators of fractions constitute a separate class of cardinal numerals.

### Counterexamples

-	_առջի_/_aṙǰi_ “first”, _երկուսում_/_erkowsowm_ “second”, _իրեքում_/_irek’owm_ “third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [NumType]() feature reveals their semantic relation to numbers.
- _մէկ-մէկ_/_mēk-mēk_ “one at a time”, _երկու-երկու_/_erkow-erkow_ “two at a time”, _իրեք-իրեք_/_irek’-irek’_ “three at a time”: adverbial distributive numerals. They are tagged [ADV](), and the [NumType]() feature reveals their semantic relation to numbers.

### Border cases

- _միատակ_/_miatak_ “once”, _չորստակ_/_čorstak_ “four times”, are not considered numerals. They are tagged either [ADJ]() or [ADV]().
-	_հարոյր/հարուր/հարիր/հարիւր/haroyr/harowr/harir/hariwr “hundred”, հազար/hazar_ “thousand”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns. When they denote an indefinite large quantity rather than an exact numeric value, they are tagged [NOUN](). In exact numeric expressions, they are tagged `NUM`. 
<!-- Interlanguage links updated Po 29. června 2026, 17:41:56 CEST -->
