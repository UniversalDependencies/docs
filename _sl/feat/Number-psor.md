---
layout: feature
title: 'Number[psor]'
shortdef: 'possessor’s number'
udver: '2'
---

Possessive [pronouns](PRON) and [determiners](DET) may have two different numbers: that of the possessed object (in agreement with the modifying noun, inflectional feature) and that of the possessor (inherent, lexical feature). The `Number[psor]` feature denotes the possessor's number.

### <a name="Sing">`Sing`</a>: singular possessor

#### Examples

* _<b>moj</b> balon_ “my balloon” `Number[psor]=Sing|Number=Sing`
* _<b>moja</b> balona_ “my (two) balloons” `Number[psor]=Sing|Number=Dual`
* _<b>moji</b> baloni_ “my (three or more) balloons” `Number[psor]=Sing|Number=Plur`

### <a name="Dual">`Dual`</a>: dual possessor

#### Examples

* _<b>najin</b> balon_ “my and your balloon” `Number[psor]=Dual|Number=Sing`
* _<b>najina</b> balona_ “my and your (two) balloons” `Number[psor]=Dual|Number=Dual`
* _<b>najini</b> baloni_ “my and your (three or more) balloons” `Number[psor]=Dual|Number=Plur`

### <a name="Plur">`Plur`</a>: plura possessor

#### Examples

* _<b>naš</b> balon_ “our balloon” `Number[psor]=Plur|Number=Sing`
* _<b>naša</b> balona_ “our (two) balloons” `Number[psor]=Plur|Number=Dual`
* _<b>naši</b> baloni_ “our (three or more) balloons” `Number[psor]=Plur|Number=Plur`

### Conversion from JOS

All pronouns with feature Owner_number=singular are converted to `Number[psor]=Sing`, all pronouns with Owner_number=dual are converted to `Number[psor]=Dual` and all pronouns with Owner_number=plural are converted to `Number[psor]=Plur`.


<!-- Interlanguage links updated St lis 3 20:58:24 CET 2021 -->
