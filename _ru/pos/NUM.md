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
e.g. they require that the counted noun phrase be in Genitive.
They are not similar to adjectives (unlike their English counterparts).

In addition, several types of (non-pronominal) numerals, such as ordinal
numerals and multiplicative numerals, are tagged [ADJ]() or [ADV](), based on
their syntactic and morphological behavior.

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
- _I, II, III, IV, V, MMXIV_
- _один, два, три, четыре, пять, семьдесят&nbsp;_ “one, two, three, four, five, seventy”
- _половина, треть, четверть &nbsp;_ “one-half, one third, quarter”: denominators of fractions constitute a separate class of cardinal numerals.
- _двое, трое, четверо, пятеро&nbsp;_ “four, five”: collective numerals (see [specific-syntax](http://universaldependencies.org/ru/overview/specific-syntax.html#collectives) on their morphosyntactic behavior).
- _сколько, столько, предостаточно&nbsp;_ “how many, this many, more than enough”: pronominal quantifiers of imprecise quantity.

### Counterexamples

- _первый, второй, третий&nbsp;_ “first, second, third”: adjectival ordinal numerals. They are tagged [ADJ](), and the [ru-feat/NumType]() feature reveals their semantic relation to numbers.
- _впервые&nbsp;_ “for the first time”: adverbial ordinal numerals. They are tagged [ADV](), and the [ru-feat/NumType]() feature reveals their semantic relation to numbers.
- _однажды, дважды, трижды&nbsp;_ “once, twice, three times”: multiplicative numerals. They are tagged [ADV](), and the [ru-feat/NumType]() feature reveals their semantic relation to numbers.
- _пара, тройка, четверка&nbsp;_ “pair, triplet, foursome”: n-tuples _(n-tice)&nbsp;_ are not considered numerals in the Russian grammar. They are tagged [NOUN]().
- _единица, двойка, тройка, четверка, пятерка&nbsp;_ “number one, number two, number three, number four, number five”: names of numbers, or of objects identified by the number (e.g. of a bus route). They are not considered numerals and they are tagged [NOUN]().

### Border cases
- _тысяча, миллион, миллиард, триллион&nbsp;_ “thousand, million, billion, trillion”: words for large quantities are ambiguous between cardinal numerals (tagged `NUM`) and nouns.
  If they inflect as nouns, they are tagged [NOUN](); but the borderline is fuzzy.
  For instance, in phrases like _<b>тысячи</b> людей вышли на улицы_ (“<b>thousands</b> of people went on the streets”),
  _тысячи&nbsp;_ is a noun.
  In numeric expressions, e.g. _110 <b>тысяч</b> долларов&nbsp;_ (“110 <b>thousand</b> dollars”), it is a cardinal numeral.
- _много, мало, немного, немало, несколько, достаточно&nbsp;_ “many, few, not many, a lot, several, enough”: pronominal quantifiers are ambiguous between cardinal numerals (tagged `NUM` when they refer to imprecise quantities) and adverbs (tagged [ADV]() when they refer to degree/intensity). As a rule, the latter have verbs, adjectives, and adverbs as their head (e.g. _я был несколько груб_ “I was a bit rude”). Note that the words _более, больше, менее, меньше_ “more than, less than” are considered comparative forms of the numerals _много_ and _мало_ when they are used in constructions with cardinal numerals, e.g. _более пяти студентов_ “more than five students” (see [specific-syntax](http://universaldependencies.org/ru/overview/specific-syntax.html#more-than)).
<!-- Interlanguage links updated Út zář 29 20:23:00 CEST 2020 -->
