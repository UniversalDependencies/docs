---
layout: feature
title: 'Number'
shortdef: 'number'
---

Number is a feature of nouns, pronouns and numbers as well as of verbs and
adjectives that mark agreement with them.
Number is a common morphological feature. It is used for both number of
nominals and number in verbal inflection. Number in Uralic languages can
typically appear multiple times as a layered feature, e.g. in possession as
number of nominals and number of possessors. For layered features, see
`Number[psor]` and `Number[psed]`.

### `Sing`: Singular

A singular noun denotes one person, animal or thing.

#### Singular examples

* [fi] _talo_ "house", _minä_ "I", _yksi_ "one", _kolme_ "three"
* [fi] _syön_ "I eat", _juokset_ "you (singular) run"

~~~ conllu
# sentence-text: Roolitus oli hyvin onnistunut.
1       Roolitus        roolitus        NOUN    N       Case=Nom|Number=Sing    4       nsubj:cop       _       _
2       oli     olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 4       cop
     _       _
3       hyvin   hyvin   ADV     Adv     _       4       advmod  _       _
4       onnistunut      onnistunut      ADJ     A       Case=Nom|Degree=Pos|Number=Sing 0       root    _       SpaceAfter=No
5       .       .       PUNCT   Punct   _       4       punct   _       _
~̃~~

### `Plur`: Singular

A plural noun denotes number of person, animal or thing.

#### Plural examples

* [fi] _talot_ "houses", _me_ "we", _yhdet_ "lit. ones", _kolmet_ "lit. threes"
* [fi] _syömme_ "we eat", _juoksette_ "you (plural) run"

~~~ conllu
# sentence-text: Sisustajan perheessä on tupaantuliaisjuhlat ja jäimme kaupunkiin niiden vuoksi.
1       Sisustajan      sisustaja       NOUN    N       Case=Gen|Number=Sing    2       nmod:poss       _       _
2       perheessä       perhe   NOUN    N       Case=Ine|Number=Sing    3       nmod    _       _
3       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
4       tupaantuliaisjuhlat     tupaantuliaiset#juhla   NOUN    N       Case=Nom|Number=Plur    3       nsubj   _
       _
5       ja      ja      CONJ    C       _       3       cc      _       _
6       jäimme  jäädä   VERB    V       Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 3       conj
    _       _
7       kaupunkiin      kaupunki        NOUN    N       Case=Ill|Number=Sing    6       nmod    _       _
8       niiden  se      PRON    Pron    Case=Gen|Number=Plur|PronType=Dem       6       nmod    _       _
9       vuoksi  vuoksi  ADP     Adp     AdpType=Post    8       case    _       SpaceAfter=No
10      .       .       PUNCT   Punct   _       3       punct   _       _
~~~

### `Dual`: Singular

A Dual noun denotes two person, animal or thing.

#### Dual examples

None in Finnish.
