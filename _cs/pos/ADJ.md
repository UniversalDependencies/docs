---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
udver: '2'
---

### Definition

Adjectives are words that typically modify nouns and specify their
properties or attributes. They may also function as predicates, as in

_To auto je zelené.&nbsp;_ “The car is green.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]()
for determiners and [NUM]() for cardinal numerals.

In accord with the UD approach,
adjectival ordinal numerals _(první, sedmý, stopadesátý)&nbsp;_
are tagged as adjectives, although the traditional grammar classifies
them as numerals. They behave like adjectives both morphologically and
syntactically, with the exception that they cannot be compared and
negated.

Most Czech adjectives inflect for
[cs-feat/Gender]() _(velký – velká – velké)&nbsp;_ “big”,
[cs-feat/Number]() _(velký – velcí),&nbsp;_
[cs-feat/Case]() _(velký – velkého – velkému – velkém – velkým),&nbsp;_
[cs-feat/Degree]() _(velký – větší – největší),&nbsp;_ and
[cs-feat/Polarity]() _(velký – nevelký).&nbsp;_

### Examples

- _velký&nbsp;_ “big”
- _starý&nbsp;_ “old”
- _zelený&nbsp;_ “green”
- _nejneobhospodařovávatelnějšímu&nbsp;_ “to the most uncultivatable” (the longest Czech word)
- _otcův, matčin&nbsp;_ “father's, mother's” (possessive adjectives)
- _první, druhý, třetí&nbsp;_ “first, second, third”
- _udělaný&nbsp;_ “done” (passive participial adjective, see below)
- _scvrklý&nbsp;_ “shrivelled” (past participial adjective)
- _dělající&nbsp;_ “doing” (present participial adjective, derived from present transgressive)
- _udělavší&nbsp;_ “having done” (past participial adjective, derived from past transgressive)

### Border cases

Passive participles lie on the border between verbs and adjectives.
Since release 2.0, both short and long forms are tagged `ADJ`, although
they may have verbal features in addition to the adjectival ones.
For example:

- Short: _nesen, nesena, neseno, neseni, neseny_ &nbsp;“carried”
- Long: _nesený, nesená, nesené, nesení, nesené_ &nbsp;“carried”

Their meaning is almost identical but the usage slightly varies.
Both groups can be used in nominal predication with [copula](cs-dep/cop).
Only the short forms can be used to form the passive voice
(but it may be sometimes difficult to distinguish from copula constructions, see [AUX]()).
On the other hand, the long forms inflect for case and thus
can modify nouns. (Occasionally even the short form may inflect for case
but it is extremely rare in the modern language. Example:
_nesenu_ is the short form of feminine singular accusative.
The corresponding long form is _nesenou_.)

There is an analogy with some adjectives that preserved so called nominal (short) forms.
And these adjectives are not derived from verbs. Example:

- Short (nominal) forms: _stár, stára, stáro_ &nbsp;“old”
- Default long (pronominal) forms: _starý, stará, staré_ &nbsp;“old”

The nominal forms are used in predication,
the standard forms both in predication and to modify nouns.

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an adjective?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAnAdjective.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Adjective)
<!-- Interlanguage links updated Út zář 29 18:40:42 CEST 2020 -->
