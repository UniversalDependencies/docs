---
layout: feature
title: 'Reflex'
shortdef: 'reflexive'
---

### Description

Boolean feature, typically of pronouns or determiners. It tells whether the
word is reflexive, i.e. refers to the subject of its clause.  This is a lexical
feature in UD and should not be used for e.g. reflexive inflection of verbs
that is common some Uralic languages that we haven't annotated yet.

### `Yes`: is reflexive



#### Reflexive examples

* [fi] _itse_ "self"


~~~ conllu
# sentence-text: Emme saa unohtaa myöskään itseämme.
1       Emme    ei      VERB    V       Negative=Neg|Number=Plur|Person=1|VerbForm=Fin|Voice=Act        2       neg
     _       _
2       saa     saada   VERB    V       Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin        0       root    _
       _
3       unohtaa unohtaa VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    2       xcomp   _       _
4       myöskään        myöskään        ADV     Adv     _       5       advmod  _       _
5       itseämme        itse    PRON    Pron    Case=Par|Number=Sing|Number[psor]=Plur|Person[psor]=1|Reflex=Yes
        3       dobj    _       SpaceAfter=No
6       .       .       PUNCT   Punct   _       2       punct   _       _
~~~

