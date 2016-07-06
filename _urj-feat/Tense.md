---
layout: feature
title: 'Tense'
shortdef: 'tense'
---

### Description

Tense feature matches the inflectional endings in verbs. Sometimes the suffix
for tense-aspect-mood can be one together, in these cases all features can be
used.  Tense is a feature that specifies the time when the action took / takes
/ will take place, in relation to the current moment or to another action in
the utterance. In Uralic grammars there have been various practices in
refering to present/future tense and past/preterite tense, in Universal
dependencies we use `Pres` for common non-past and `Past` for common past,
unless language has more complex tense system.

### `Pres`: Present tense

Present tense is used for events happening in the current time. In many Uralic
languages used in future constructions as well.

#### Present examples

* [fi] _juoksen_ "I eat", _tapamme_ "we kill"

~~~ conllu
# sentence-text: Vernan sienisalaatti syntyy näin:
1       Vernan  Verna   PROPN   N       Case=Gen|Number=Sing    2       nmod:poss       _       _
2       sienisalaatti   sieni#salaatti  NOUN    N       Case=Nom|Number=Sing    3       nsubj   _       _
3       syntyy  syntyä  VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
4       näin    näin    ADV     Adv     _       3       advmod  _       SpaceAfter=No
~~~

### `Past`: Past or preterite tense

Past tense is used for events happening in the passed time.

#### Present examples

* [fi] _juoksin_ "I ran", _tapoimme_ "we killed"

~~~ conllu
# sentence-text: Sain näytön kuitenkin toimimaan, kuten videosta näkyy.
1       Sain    saada   VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
2       näytön  näyttö  NOUN    N       Case=Gen|Number=Sing    4       nsubj   _       _
3       kuitenkin       kuitenkin       ADV     Adv     _       1       advmod  _       _
4       toimimaan       toimia  VERB    V       Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act   1       xcomp:ds        _       SpaceAfter=No
5       ,       ,       PUNCT   Punct   _       8       punct   _       _
6       kuten   kuten   SCONJ   C       _       8       mark    _       _
7       videosta        video   NOUN    N       Case=Ela|Number=Sing    8       nmod    _       _
8       näkyy   näkyä   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 1       advcl
   _       SpaceAfter=No
9       .       .       PUNCT   Punct   _       1       punct   _       _
~~~
