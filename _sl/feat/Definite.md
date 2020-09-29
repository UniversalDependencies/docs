---
layout: feature
title: 'Definite'
shortdef: 'definiteness or state'
---

Definiteness in Slovenian is an inflectional feature of masculine word forms in nominative and accusative singular that distinguishes whether we are talking about something known and concrete, or something general or unknown. It is currently marked on some [adjectives](ADJ) and some [determiners](DET).

### `Ind`: indefinite

#### Examples

* _<b>rdeč</b> avto_ "a red car"
* _<b>dvojen</b> umor_ "a double homicide"
* _<b>drug</b> način_ "another way"
* _<b>sosedov</b> sin_ "neighbour's son"

### `Def`: definite

#### Examples

* _<b>rdeči</b> avto_ "the red car"
* _<b>dvojni</b> umor_ "the double homicide"
* _<b>drugi</b> način_ "the other way"
* _<b>slovenski</b> grb_ "the Slovenian coat-of-arms"

### Conversion from JOS

All adjectives and numerals with feature Definiteness=yes are converted to `Definite=Def` and all adjectives and numerals with feature Definiteness=no are converted to `Definite=Ind`.

However, note that definiteness has not been sufficiently solved within JOS, as it could also be attributed to other POS categories or category types, such as ordinal written numerals (_prvi, drugi, tretji_) and pronouns (_neki_). Consequently, some inconsistencies occur, as different JOS categories are merged into one UD category. For example, JOS-adjective _slovenski_ "Slovenian" has feature `Definite=Def`, whereas JOS-numeral _prvi_ "the first" does not have any `Definite` feature, although they are both tagged as UD `ADJ` and display identical grammatical characteristics.
<!-- Interlanguage links updated Út zář 29 20:31:34 CEST 2020 -->
