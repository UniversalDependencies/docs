---
layout: feature
title: 'Degree'
shortdef: 'degree of comparison'
---

### Description

Degree of comparison is a feature of adjectives, some adverbs, and verbs in 
participle form. Comparative suffixes can sometimes be used with common nouns
as well. Typically there are three degrees of comparison: positive or first,
comparative or second and superlative or third degree. Some descriptions
include exaggerative degrees, e.g. [hu] _legeslegjobb_ "better than best", 
however it is commonly treated as derivation, compounding or just separate
lexemes and appears typically in very limited situations.

### `Pos`: Positive or first degree

Positive degree is the neutral, typically unmarked form.

#### Positive examples

* [fi] _kaunis_ "pretty", _nopeasti_ "fast", _kauas_ "far"

~~~ conllu
# sentence-text: Pientä painostusta ilmassa, jos nyt rehellisiä ollaan.
1       Pientä  pieni   ADJ     A       Case=Par|Degree=Pos|Number=Sing 2       amod    _       _
2       painostusta     painostus       NOUN    N       Case=Par|Number=Sing    0       root    _       _
3       ilmassa ilma    NOUN    N       Case=Ine|Number=Sing    2       nmod    _       SpaceAfter=No
4       ,       ,       PUNCT   Punct   _       7       punct   _       _
5       jos     jos     SCONJ   C       _       7       mark    _       _
6       nyt     nyt     ADV     Adv     _       7       advmod  _       _
7       rehellisiä      rehellinen      ADJ     A       Case=Par|Degree=Pos|Number=Plur 2       advcl   _       _
8       ollaan  olla    VERB    V       Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass     7       cop     _       SpaceAfter=No
9       .       .       PUNCT   Punct   _       2       punct   _       _
~~~

### `Cmp`: Comparative or second degree

Comparative is used for comparison or comparable qualities.

#### Comparative examples

* [fi] _kauniimpi_ "prettier", _nopeammin_ "faster", _kauemmas_ "further"
* [fi] _ranta_ (noun) "a beach", _rannemmas_ "further towards / into a beach"

~~~ conllu
# sentence-text: Toivottavasti se on parempi kuin eilinen mahalasku.
1       Toivottavasti   toivottavasti   ADV     Adv     _       4       advmod  _       _
2       se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       4       nsubj:cop       _       _
3       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 4       cop
     _       _
4       parempi hyvä    ADJ     A       Case=Nom|Degree=Cmp|Number=Sing 0       root    _       _
5       kuin    kuin    SCONJ   C       _       7       mark    _       _
6       eilinen eilinen ADJ     A       Case=Nom|Degree=Pos|Number=Sing 7       amod    _       _
7       mahalasku       maha#lasku      NOUN    N       Case=Nom|Number=Sing    4       advcl   _       SpaceAfter=No
8       .       .       PUNCT   Punct   _       4       punct   _       _
~~~

### `Sup`: Superlative or third degree

Superlative is used for ultimate within compared group quality.

#### Superlative examples

* [fi] _kaunein_ "prettiest", _nopeimmin_ (or _nopeiten_) "fastest", _kauimmas_ 
  "furthest"

~~~ conllu
# sentence-text: Joulun suurin tarkoitus on muistuttaa meitä suurimmasta rakkaudesta.
1       Joulun  joulu   NOUN    N       Case=Gen|Number=Sing    2       nmod:poss       _       _
2       suurin  suuri   ADJ     A       Case=Nom|Degree=Sup|Number=Sing 3       amod    _       _
3       tarkoitus       tarkoitus       NOUN    N       Case=Nom|Number=Sing    5       nsubj:cop       _       _
4       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 5       cop
     _       _
5       muistuttaa      muistuttaa      VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    0       root
    _       _
6       meitä   minä    PRON    Pron    Case=Par|Number=Plur|Person=1|PronType=Prs      5       dobj    _       _
7       suurimmasta     suuri   ADJ     A       Case=Ela|Degree=Sup|Number=Sing 8       amod    _       _
8       rakkaudesta     rakkaus NOUN    N       Case=Ela|Number=Sing    5       nmod    _       SpaceAfter=No
9       .       .       PUNCT   Punct   _       5       punct   _       _
~~~

