---
layout: postag
title: 'X'
shortdef: 'other'
---
### Definition

The `X` tag is used for words that for some reason cannot be assigned a real part-of-speech category.

In Slovenian UD Treebank, this tag is mostly used for cases of code-switching where it was not meaningful to analyze the intervening language, such as _<b>Europe of knowledge</b>, <b>La connaissance de soi</b>, <b>Bundesvereinigung det Deutschen Arbeitgeberverbände</b>_. In cases where foreign-language sequences include both foreign and loan words, only foreign words are assigned the `X` tag, as in _<b>The</b> Life <b>of</b> Brian_, where both _Life_ and _Brian_ are marked as [NOUN]() and [PROPN]() respectively.

Other subcategories marked with `X` include abbreviations with dots (_dr._), URL addresses (_www.radenska.si_), news author abbreviations (_sta_) and tokens with alpha-numerical combinations (_6230i_).

#### Conversion from JOS

All tokens with tag Residual are converted to `X`. Additionally, all abreviations are also converted to `X`.
<!-- Interlanguage links updated Út zář 29 18:40:50 CEST 2020 -->
