---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
udver: '2'
---

Ukrainian has a complex system of [numerals](uk-pos/NUM).

From the syntactic point of view, some numtypes behave like adjectives and some behave like adverbs. They are tagged [uk-pos/ADJ]() and
[uk-pos/ADV]() respectively. Thus the `NumType` feature applies to several different parts of speech:

* [uk-pos/NUM](): cardinal numerals
* [uk-pos/DET](): quantifiers
* [uk-pos/ADJ](): adjectival ordinal and some generic numerals
* [uk-pos/ADV](): adverbial (e.g. ordinal and multiplicative) numerals

### <a name="Card">`Card`</a>: cardinal number or corresponding interrogative / relative / indefinite / demonstrative word

#### Examples

* _один, два, три&nbsp;_ “one, two, three”
* _скільки&nbsp;_ “how many”
* _кілька&nbsp;_ “several”
* _стільки&nbsp;_ “so many”

### <a name="Ord">`Ord`</a>: ordinal number

This is a subtype of adjective or adverb.

#### Examples

Adjectival

* _перший&nbsp;_ “first”; _другий&nbsp;_ “second”, _третій&nbsp;_ “third”

Adverbial

* _вперше&nbsp;_ “for the first time”; _вдруге&nbsp;_ “for the second time”; _втретє&nbsp;_ “for the third time”

### <a name="Mult">`Mult`</a>: multiplicative numeral

This is a subtype of adverb.

#### Examples

* _двічі&nbsp;_ “twice”; _тричі&nbsp;_ “three times”

### <a name="Frac">`Frac`</a>: fraction

This is a subtype of cardinal numbers. It may denote a fraction or just the denominator of the fraction.

#### Examples

* _пів / половина&nbsp;_ “half”; _третина&nbsp;_ “one third”; _чверть / четвертина&nbsp;_ “quarter”

### <a name="Sets">`Sets`</a>: number of sets of things

Morphologically distinct class of numerals used to count sets of things, or nouns that are pluralia tantum.

#### Examples

* _<b>двоє</b> / <b>троє</b> штанів / черевиків&nbsp;_ “<b>two</b> / <b>three</b> [pairs of] pants / shoes”;
 as opposed to normal cardinal numbers: _дві / три штатини&nbsp;_ “two / three half-pants”; _два / три черевика&nbsp;_ “two / three shoes”. Note that this form is also used with animate nouns.

### <a name="Gen">`Gen`</a>: generic numeral

A numeral that is neither of the above.

#### Examples

* _<b>четверо, п'ятеро, десятеро</b>&nbsp;_ (specific forms of four, five, ten; they are morphologically, syntactically and stylistically distinct from the default forms _чотири, п'ять, десять_)
* _<b>подвійний, потрійний</b>&nbsp;_ (twofold, threefold; these are morphologically and syntactically adjectives)
* _<b>вдвоє, втроє, вчетверо</b>&nbsp;_ (twofold, threefold, fourfold; these are morphologically and syntactically adverbs)

<!-- Interlanguage links updated Čt lis 12 09:43:04 CET 2020 -->
