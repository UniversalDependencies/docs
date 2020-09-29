---
layout: feature
title: 'Number'
shortdef: 'number'
---

In Slovenian, `Number` is an inflectional feature of [nouns](NOUN) and [proper nouns](PROPN), and other parts of speech ([adjectives](ADJ), [auxiliaries](AUX), [determiners](DET), [numerals](NUM), [pronouns](PRON), [verbs](VERB)) that mark agreement with nouns.

Slovenian distinguishes three `Number` values: `singular`, `dual` and `plural`. [Plurale tantum](u-feat/Number) and [Singulare tantum](u-feat/Number) are not explicitly marked and are tagged as `plural` or `singular`, respectively.

### `Sing`: singular number

#### Examples

* _kolo_ "one bicycle"
* _en gospod_ "one gentleman"
* _moja pisarna_ "my office"
* _sem_ "I am"

### `Dual`: dual number

#### Examples

* _kolesi_ "two bicycles"
* _dva gospoda_ "two gentlemen"
* _moji pisarni_ "my two offices"
* _sva_ "we (two) are"

### `Plur`: plural number

#### Examples

* _kolesa_ "two bicycles"
* _trije gospodi_ "three gentlemen"
* _moje pisarne_ "my (three or more) offices"
* _smo_ "we (three or four) are"

### Conversion from JOS

All tokens with feature Number=singular are converted to `Number=Sing`, all tokens with Number=dual are converted to `Number=Dual` and all tokens with Number=plural are converted to `Number=Plur`.
<!-- Interlanguage links updated Út zář 29 18:40:56 CEST 2020 -->
