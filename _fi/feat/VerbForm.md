---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
---

### `Fin`: finite verb

Verbs that inflect for mood ([Mood]()), tense ([Tense]()) or person
([Person]()) are finite and are assigned the `VerbForm` value `Fin`.
Additionally, the negation verb *ei* only has finite forms ([VISK §
108](http://scripta.kotus.fi/visk/sisallys.php?p=108); in Finnish),
and is always annotated with `VerbForm=Fin`.

#### Examples

* [fi] _Minä <b>ostin</b> kahvia_ "I <b>bought</b> coffee"
* [fi] _Minulla <b>ei</b> ole autoa_ "I <b>do not</b> have a car"

### `Inf`: infinitive

Words in infinitive forms are assigned the `VerbForm` value `Inf`.
Infinitive forms are further differentiated using the feature
[InfForm]().

UD Finnish recognizes three verb forms as infinitives, namely those
known as the first, second and third infinitives (alternatively termed
the A-, E- and MA-infinitives, see e.g. [VISK §
119](http://kaino.kotus.fi/visk/sisallys.php?p=119); in Finnish).

#### Examples

* [fi] _He haluavat <b>jutella</b>_ "They want to <b>talk</b>"
  (first infinitive)
* [fi] _<b>ottaen</b> huomioon_ "<b>taking</b> into account"
  (second infinitive)
* [fi] _Menen <b>katsomaan</b> musikaalia_ "I am going to <b>see</b> a musical"
  (third infinitive)

### `Part`: participle

Words in participle forms are assigned the `VerbForm` value `Part`.
Participle forms are further differentiated using the feature
[PartForm]().

#### Examples

* [fi] _Puolue on <b>saanut</b> tukea_ "The party has <b>received</b> support"

### References

* <http://en.wikipedia.org/wiki/Finnish_verb_conjugation#Infinitives_and_participles>
* <http://scripta.kotus.fi/visk/sisallys.php?p=444> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=108> (in Finnish)
* <http://kaino.kotus.fi/visk/sisallys.php?p=120> (in Finnish)
* <http://kaino.kotus.fi/visk/sisallys.php?p=121> (in Finnish)
<!-- Interlanguage links updated Út zář 29 20:23:13 CEST 2020 -->
