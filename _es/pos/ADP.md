---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

The ADP tag is used exclusively for prepositions in Spanish, as the language does not have postpositions. Prepositions typically precede a noun or pronoun and provide additional information about its role in the sentence. They can indicate location, direction, time, manner, or other relationships.

List of prepositions in Spanish:

_a_ "to, at"
_ante_ "before, in the presence of"
_bajo_ "under, below"
_cabe_ "beside"
_con_ "with"
_contra_ "against"
_de_ "of, from"
_desde_ "since, from"
_en_ "in, on, at"
_entre_ "between, among"
_hacia_ "toward"
_hasta_ "until, up to"
_para_ "for, in order to"
_por_ "by, for, through"
_según_ "according to"
_sin_ "without"
_sobre_ "on, over, about"
_tras_ "after, behind"

Note that some prepositions can be followed by a pronoun, creating contractions. In Universal Dependencies, these contractions are represented as multi-word tokens, with each part assigned its original POS tag. Here are two examples of sentences featuring the contractions _al_ (a + el) "to the" and _del_ (de + el) "of/from the", which are the two typical contractions with prepositions in Spanish.

###Example 1

~~~conllu
text = Vamos al parque
text_en = Let's go to the park
1    Vamos    ir    VERB
2-3    al    _     _
2   a     a    ADP
3   e    el    DET
4   parque    parque    NOUN
~~~

###Example 2

~~~conllu
text = La llave está debajo del coche
text_en = The key is under the car
1   La          el          DET
2   llave       llave       NOUN
3   está        estar       VERB
4   debajo      debajo      ADP
5-6 del         _           _
5   de          de          ADP
6   el          el          DET
7   coche       coche       NOUN
~~~

In both examples, the contractions _al_ and _del_ are represented as multi-word tokens (2-3 and 5-6, respectively), with each part assigned its original POS tag (ADP for _a_ and _de_ DET for "el").

