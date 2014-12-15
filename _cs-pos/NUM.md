---
layout: postag
title: 'NUM'
shortdef: 'numeral'
---

### Definition

A numeral is a word, functioning most typically as a determiner,
adjective or pronoun, that expresses a number and a relation to the
number, such as quantity, sequence, frequency or fraction.

Note that cardinal numerals are covered by `NUM` whether they are used
as determiners or not (as in _Windows <b>7</b>_) and whether they
are expressed as words _(čtyři)_, digits _(4)_ or Roman numerals
_(IV)_.

Czech grammar distinguishes several subclasses of _pronominal numerals (quantifiers):_
interrogative and relative _(kolik&nbsp;_ “how many”);
demonstrative _(tolik&nbsp;_ “this many”);
indefinite _(několik, mnoho, málo&nbsp;_ “several, many, few”).
These words behave similarly to (most) cardinal numbers,
e.g. they require that the counted noun phrase be in genitive.
They are not similar to adjectives (unlike their English counterparts).
However, in accord with the UD standard, they should be tagged [DET](), not `NUM`.

In addition, several types of (non-pronominal) numerals, such as ordinal
numerals and multiplicative numerals, are tagged [ADJ]() or [ADV](), based on
their syntactic and morphological behavior.

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
- _I, II, III, IV, V, MMXIV_
- _jeden, dva, tři, čtyři, pět, sedmdesát&nbsp;_ “one, two, three, four, five, seventy”
- _polovina, třetina, čtvrtina, pětina&nbsp;_ “one-half, one third, quarter, one fifth”: denominators of fractions constitute a separate class of cardinal numerals.
- _čtvero, patero&nbsp;_ “four, five” (These are special forms, so-called generic numerals. They are used rarely, in literary or archaic style.)
- _jedny, dvoje, troje, čtvery, patery, sedmdesátery&nbsp;_ “one set of, two sets of, three sets of, four sets of, five sets of, seventy sets of”

### Counterexamples

- _první, druhý, třetí&nbsp;_ “first, second, third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [cs-feat/NumType]() feature reveals their semantic relation to numbers.
- _poprvé, podruhé, potřetí&nbsp;_ “for the first time, for the second time, for the third time”: adverbial ordinal numerals. They are tagged [ADV](), and the [cs-feat/NumType]() feature reveals their semantic relation to numbers.
- _jednou, dvakrát, třikrát&nbsp;_ “once, twice, three times”: multiplicative numerals. They are tagged [ADV](), and the [cs-feat/NumType]() feature reveals their semantic relation to numbers.
- _dvojí, trojí, čtverý, paterý, sedmdesáterý&nbsp;_ “twofold, three kinds of, four kinds of, five kinds of, seventy kinds of”: generic numerals. They are tagged [ADJ]().
- _dvojice, trojice, čtveřice&nbsp;_ “pair, triplet, foursome”: n-tuples _(n-tice)&nbsp;_ are not considered numerals in the Czech grammar. They are tagged [NOUN]().
- _jednička, dvojka, trojka, čtyřka, pětka&nbsp;_ “number one, number two, number three, number four, number five”: names of numbers, or of objects identified by the number (e.g. of a bus route). They are not considered numerals and they are tagged [NOUN]().
- _tisíc, milión, miliarda, bilión&nbsp;_ “thousand, million, billion, trillion”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns.
  If they inflect as nouns, they are tagged [NOUN](); but the borderline is fuzzy.
  For instance, in phrases like _<b>tisíce</b> lidí demonstrovaly v&nbsp;ulicích&nbsp;_ (“<b>thousands</b> of people demonstrated in the streets”),
  _tisíce&nbsp;_ is a noun.
  In numeric expressions, e.g. _110 <b>tisíc</b> dolarů&nbsp;_ (“110 <b>thousand</b> dollars”), it is a cardinal numeral.

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a numeral?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsANumeral.htm)
- [Wikipedia: Numeral](http://en.wikipedia.org/wiki/Numeral_%28linguistics%29)
