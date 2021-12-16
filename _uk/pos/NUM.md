---
layout: postag
title: 'NUM'
shortdef: 'numeral'
---

### Definition

A numeral is a word, functioning most typically as a determiner, adjective or pronoun, that expresses a number and a relation to the
number, such as quantity, sequence, frequency or fraction.

Note that cardinal numerals are covered by `NUM` whether they are used as determiners or not (as in _Windows <b>7</b>_) and whether they are expressed as words _(чотири)_, digits _(4)_ or Roman numerals _(IV)_.

Ukrainian grammar distinguishes several subclasses of _pronominal numerals (quantifiers):_
interrogative and relative _(скільки&nbsp;_ “how many”);
demonstrative _(стільки&nbsp;_ “this many”);
indefinite _(кілька, багато, мало&nbsp;_ “several, many, few”).
These words behave similarly to (most) cardinal numbers, e.g. they require that the counted noun phrase be in genitive and have different forms depending on the case (with the exception of _мало&nbsp;_ “little, few”. They are not similar to adjectives (unlike their English counterparts). However, in accord with the UD standard, they should be tagged [DET](), not `NUM`.

In addition, several types of (non-pronominal) numerals, such as ordinal numerals and multiplicative numerals, are tagged [ADJ]() or [ADV](), based on their syntactic and morphological behavior.

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
- _I, II, III, IV, V, MMXIV_
- _один, два, три, чотири, п'ять, сімдесят&nbsp;_ “one, two, three, four, five, seventy”
- _половина, третина, четвертина (чверть)&nbsp;_ “one-half, one third, quarter”: denominators of fractions constitute a separate class of cardinal numerals. (They are not considered numerals in the Ukrainian grammar. They are tagged [NOUN]().)
- _четверо, п'ятеро&nbsp;_ “four, five” (These are special forms, so-called generic numerals.)
- _одні, двоє, троє&nbsp;_ “one set of, two sets of, three sets of”

### Counterexamples

- _перший, другий, третій&nbsp;_ “first, second, third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [uk-feat/NumType]() feature reveals their semantic relation to numbers.
- _вперше, вдруге, втретє&nbsp;_ “for the first time, for the second time, for the third time”: adverbial ordinal numerals. They are tagged [ADV](), and the [uk-feat/NumType]() feature reveals their semantic relation to numbers.
- _двічі, тричі&nbsp;_ “twice, three times”: multiplicative numerals. They are tagged [ADV](), and the [uk-feat/NumType]() feature reveals their semantic relation to numbers.
- _двійня, дует, трійня, тріо, квартет&nbsp;_ “pair, triplet, foursome”: n-tuples _(n-tice)&nbsp;_ are not considered numerals in the Ukrainian grammar. They are tagged [NOUN]().
- _одиниця, двійка, трійка, четвірка, п'ятірка&nbsp;_ “number one, number two, number three, number four, number five”: names of numbers, or of objects identified by the number (e.g. of a bus route). They are not considered numerals and they are tagged [NOUN]().
- _тисяча, мільйон, мільярд, трильйон&nbsp;_ “thousand, million, billion, trillion”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns.
  If they inflect as nouns, they are tagged [NOUN](); but the borderline is fuzzy.
  For instance, in phrases like _<b>тисячі</b> людей взяли участь в демонстації&nbsp;_ (“<b>thousands</b> of people demonstrated in the streets”),   _тисячі&nbsp;_ is a noun.
  In numeric expressions, e.g. _132 <b>тисячі</b> доларів&nbsp;_ (“132 <b>thousand</b> dollars”), it is a cardinal numeral.
<!-- Interlanguage links updated St lis 3 20:58:12 CET 2021 -->
