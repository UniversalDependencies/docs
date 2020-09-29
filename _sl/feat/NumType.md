---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
---

In Slovenian UD Treebank, `NumType` is a lexical feature of [numerals](NUM) and some [adjectives](ADJ) that denote counting by numbers.

### `Card`: cardinal number

#### Examples

* _en, dva, tri_ “one, two, three”
* _1, 2, 3_
* _I, II, III_

### `Ord`: ordinal number

#### Examples

* _prvi, drugi, tretji_ “first, second, third”
* _1., 2., 3._
* _I., II., III._

### `Sets`: number of sets of things

Numerals used to count sets of things or nouns that are pluralia tantum.

#### Examples

* _enoj, dvoj, troj_ "one-fold, two-fold, three-fold"

### `Gen`: generic numeral, i.e. a numeral that is neither of the above

#### Examples

* _enojen, dvojen, trojen_ "single, double, triple"

### Conversion from JOS

All numerals with Type=cardinal are converted to `NumType=Card` and all numerals with Type=ordinal are converted to `NumType=Ord`. Numerals with Type=pronominal are either converted to `NumType=Card` (lemmas _en_ and _eden_) or to `NumType=Ord` (lemma _drug_). Numerals with Type=special are either converted to `NumType=Sets` (lemmas not ending in _-en_) or to `NumType=Gen` (lemmas ending in _-en_).

Note that other types of quantifying words have not been explicitly marked in JOS, so assigning these and other `NumType` values to other words or part-of-speech categories, such as adjectives (_enkraten, dvakraten, trikraten_), adverbs (_enkrat, dvakrat, trikrat_; _prvič, drugič, tretjič_), determiners (_veliko, malo, nekaj, koliko_) and nouns (_tretjina, polovica, četrtina_), remains for future work.
<!-- Interlanguage links updated Út zář 29 20:23:10 CEST 2020 -->
