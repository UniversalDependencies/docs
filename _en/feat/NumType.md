---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
udver: '2'
---

In English, numerical expressions such as cardinal and ordinal numbers have a `NumType` feature.

### <a name="Card">`Card`</a>: cardinal number

Cardinal numbers with the PTB tag `CD`.

#### Examples

* _one, 11, ..._

### <a name="Ord">`Ord`</a>: ordinal number

Ordinal numbers with the PTB tag `JJ`.

#### Examples

* _second, 23rd, ..._

(Note that our automatic feature extractor only marks written-out ordinal numbers up to _tenth_ as ordinal numbers. Ordinals expressed with digits such as _42nd_ can be arbitrarily large.)

### <a name="Mult">`Mult`</a>: multiplicative numbers

#### Examples

The following adverbs with the PTB tag `RB`:

* _once, twice_


<!-- Interlanguage links updated Pá kvě 14 11:08:36 CEST 2021 -->
