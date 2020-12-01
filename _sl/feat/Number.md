---
layout: feature
title: 'Number'
shortdef: 'number'
udver: '2'
---

In Slovenian, `Number` is an inflectional feature of [nouns](NOUN) and [proper nouns](PROPN), and other parts of speech ([adjectives](ADJ), [auxiliaries](AUX), [determiners](DET), [numerals](NUM), [pronouns](PRON), [verbs](VERB)) that mark agreement with nouns.

Slovenian distinguishes three `Number` values: `singular`, `dual` and `plural`. [Plurale tantum](u-feat/Number) and [Singulare tantum](u-feat/Number) are not explicitly marked and are tagged as `plural` or `singular`, respectively.

### <a name="Sing">`Sing`</a>: singular number

#### Examples

* _kolo_ "one bicycle"
* _en gospod_ "one gentleman"
* _moja pisarna_ "my office"
* _sem_ "I am"

### <a name="Dual">`Dual`</a>: dual number

#### Examples

* _kolesi_ "two bicycles"
* _dva gospoda_ "two gentlemen"
* _moji pisarni_ "my two offices"
* _sva_ "we (two) are"

### <a name="Plur">`Plur`</a>: plural number

#### Examples

* _kolesa_ "two bicycles"
* _trije gospodi_ "three gentlemen"
* _moje pisarne_ "my (three or more) offices"
* _smo_ "we (three or four) are"

### Conversion from JOS

All tokens with feature Number=singular are converted to `Number=Sing`, all tokens with Number=dual are converted to `Number=Dual` and all tokens with Number=plural are converted to `Number=Plur`.
<!-- Interlanguage links updated Čt lis 12 09:43:03 CET 2020 -->
