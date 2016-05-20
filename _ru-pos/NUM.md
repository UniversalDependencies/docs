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
are expressed as words _(четыре)_, digits _(4)_ or Roman numerals
_(IV)_.

Russian grammar distinguishes several subclasses of _pronominal numerals (quantifiers):_
interrogative and relative _(сколько&nbsp;_ “how many”);
demonstrative _(столько&nbsp;_ “this many”);
indefinite _(несколько&nbsp;_ “several”).
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
- _один, два, три, четыре, пять, семьдесят&nbsp;_ “one, two, three, four, five, seventy”
- _половина, треть, четверть &nbsp;_ “one-half, one third, quarter”: denominators of fractions constitute a separate class of cardinal numerals.
- _четверо, пятеро&nbsp;_ “four, five” (These are special forms, so-called generic numerals. They are used rarely, in literary or archaic style.)

### Counterexamples

- _первый, второй, третий&nbsp;_ “first, second, third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [ru-feat/NumType]() feature reveals their semantic relation to numbers.
- _впервые&nbsp;_ “for the first time”: adverbial ordinal numerals. They are tagged [ADV](), and the [ru-feat/NumType]() feature reveals their semantic relation to numbers.
- _однажды, дважды, трижды&nbsp;_ “once, twice, three times”: multiplicative numerals. They are tagged [ADV](), and the [ru-feat/NumType]() feature reveals their semantic relation to numbers.
- _двое, трое, четверо, пятеро&nbsp;_ “twofold, three kinds of, four kinds of, five kinds of: generic numerals. They are tagged [ADJ]().
- _пара, тройка, четверка&nbsp;_ “pair, triplet, foursome”: n-tuples _(n-tice)&nbsp;_ are not considered numerals in the Czech grammar. They are tagged [NOUN]().
- _единица, двойка, тройка, четверка, пятерка&nbsp;_ “number one, number two, number three, number four, number five”: names of numbers, or of objects identified by the number (e.g. of a bus route). They are not considered numerals and they are tagged [NOUN]().
- _тысяча, миллион, биллион, триллион&nbsp;_ “thousand, million, billion, trillion”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns.
  If they inflect as nouns, they are tagged [NOUN](); but the borderline is fuzzy.
  For instance, in phrases like _<b>тысячи</b> людей вышли на улицы_ (“<b>thousands</b> of people went on the streets”),
  _тысячи&nbsp;_ is a noun.
  In numeric expressions, e.g. _110 <b>тысяч</b> долларов&nbsp;_ (“110 <b>thousand</b> dollars”), it is a cardinal numeral.
