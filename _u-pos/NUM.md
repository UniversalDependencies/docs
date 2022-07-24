---
layout: postag
title: 'NUM'
shortdef: 'numeral'
udver: '2'
---

### Definition

A numeral is a word, functioning most typically as a determiner,
adjective or pronoun, that expresses a number and a relation to the
number, such as quantity, sequence, frequency or fraction.

Note that cardinal numerals are covered by `NUM` whether they are used
as determiners or not (as in _Windows <b>Seven</b>_) and whether they
are expressed as words _(four)_, digits _(4)_ or Roman numerals
_(IV)_. Other words functioning as determiners (including quantifiers
such as _many_ and _few_) are tagged [DET]().

Note that there are words that may be traditionally called numerals in
some languages (e.g. Czech) but which are not tagged `NUM`. Such
non-cardinal numerals belong to other parts of speech in our universal
tagging scheme, based mainly on syntactic criteria: ordinal numerals
are [adjectives](ADJ) _(first, second, third)_ or [adverbs](ADV) ([cs]
_poprvé_ "for the first time"), multiplicative numerals are adverbs
_(once, twice)_ etc.

Word tokens consisting of digits and (optionally) punctuation characters are 
generally considered cardinal numbers and tagged as `NUM`. 
This includes numeric date/time formats (_11:00_) and phone numbers.
Words mixing digits and alphabetic characters should, however, ordinarily 
be excluded. In English, for example, pluralized numbers 
(_the <b>1970s</b>_, _the <b>seventies</b>_) are treated as plural [NOUN]()s, 
while mixed alphanumeric street addresses (_221B_) and product names 
(_130XE_) are [PROPN]().

Related features: [NumForm](), [NumType]()

### Examples

- _0, 1, 2, 3, 4, 5, 2014, 1000000, 3.14159265359_
- _11/11/1918_, _11:00_
- _one, two, three, seventy-seven_
- _I, II, III, IV, V, MMXIV_

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a numeral?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsANumeral.htm)
- [Wikipedia: Numeral](http://en.wikipedia.org/wiki/Numeral_%28linguistics%29)
<!-- Interlanguage links updated So kvě 14 19:01:52 CEST 2022 -->
