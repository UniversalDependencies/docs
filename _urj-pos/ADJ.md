---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
---

### Definition

`ADJ` pos tags is used for adjectives. These are morphologically nominals that
typically have comparative derivations as well. They modify nominals and
typically agree with the modified nominals in some of the morphological
features. Adjectives are typically relatively well established in grammars and
easy to spot.

Less standard cases:

* Pro-adjectives are tagged as `ADJ`.
* Ordinal numerals are tagged as `ADJ`.
* Participles when lexicalised are tagged as `ADJ`.

Telling `DET` apart from `ADJ`...


#### Examples

* [fi] _paha_ "evil"
* [fi] _sellainen_ "like that"
* [fi] _ensimmäinen_ "first"

~~~ conllu
# sentence-text: Varsinkin Salla Närän esittämä pornokaupan paha puuma sekä Tarja Vuolan elämäpakoinen leskirouva lunastivat paikkansa.
1       Varsinkin       varsinkin       ADV     Adv     _       7       advmod  12:advmod       _
2       Salla   Salla   PROPN   N       Case=Nom|Number=Sing    4       nsubj   _       _
3       Närän   Närä    PROPN   N       Case=Gen|Number=Sing    2       name    _       _
4       esittämä        esittää VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Agt|VerbForm=Part|Voice=Act
    7       acl     _       _
5       pornokaupan     porno#kauppa    NOUN    N       Case=Gen|Number=Sing    7       nmod:poss       _       _
6       paha    paha    ADJ     A       Case=Nom|Degree=Pos|Number=Sing 7       amod    _       _
7       puuma   puuma   NOUN    N       Case=Nom|Number=Sing    13      nsubj   _       _
8       sekä    sekä    CONJ    C       _       7       cc      _       _
9       Tarja   Tarja   PROPN   N       Case=Nom|Number=Sing    12      nmod:poss       _       _
10      Vuolan  Vuola   PROPN   N       Case=Gen|Number=Sing    9       name    _       _
11      elämäpakoinen   elämä#pakoinen  ADJ     A       Case=Nom|Degree=Pos|Number=Sing 12      amod    _       _
12      leskirouva      leski#rouva     NOUN    N       Case=Nom|Number=Sing    7       conj    13:nsubj        _
13      lunastivat      lunastaa        VERB    V       Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0       root    _       _
14      paikkansa       paikka  NOUN    N       Case=Nom|Number=Plur|Person[psor]=3     13      dobj    _       SpaceAfter=No
15      .       .       PUNCT   Punct   _       13      punct   _       _
~~~

~~~ conllu
# sentence-text: Nyt iski sellainen kevätkaipuu, ettei mitään rajaa.:(
1       Nyt     nyt     ADV     Adv     _       2       advmod  _       _
2       iski    iskeä   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
3       sellainen       sellainen       ADJ     A       Case=Nom|Degree=Pos|Number=Sing 4       amod    _       _
4       kevätkaipuu     kevät#kaipuu    NOUN    N       Case=Nom|Number=Sing    2       nsubj   _       SpaceAfter=No
5       ,       ,       PUNCT   Punct   _       8       punct   _       _
6       ettei   että#ei VERB    V       Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act        8       mark
    _       _
7       mitään  mikään  PRON    Pron    Case=Par|Number=Sing|PronType=Ind       8       det     _       _
8       rajaa   raja    NOUN    N       Case=Par|Number=Sing    4       ccomp   _       SpaceAfter=No
9       .       .       PUNCT   Punct   _       2       punct   _       SpaceAfter=No
10      :(      :(      SYM     Symb    _       2       discourse       _       _
~~~

~~~ conllu
# sentence-text: Varsinkin ensimmäisen näytöksen lopettava laulu Sirkusprinsessa oli liki veret pysäyttävä valinta.
1       Varsinkin       varsinkin       ADV     Adv     _       6       advmod  _       _
2       ensimmäisen     ensimmäinen     ADJ     Num     Case=Gen|Number=Sing|NumType=Ord        3       nummod  _
       _
3       näytöksen       näytös  NOUN    N       Case=Gen|Number=Sing    4       dobj    _       _
4       lopettava       lopettaa        VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act   5       acl     _       _
5       laulu   laulu   NOUN    N       Case=Nom|Number=Sing    6       compound:nn     _       _
6       Sirkusprinsessa sirkus#prinsessa        NOUN    N       Case=Nom|Number=Sing    11      nsubj:cop       _
       _
7       oli     olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 11      cop
     _       _
8       liki    liki    ADV     Adv     _       10      advmod  _       _
9       veret   veri    NOUN    N       Case=Nom|Number=Plur    10      dobj    _       _
10      pysäyttävä      pysäyttää       VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act   11      acl     _       _
11      valinta valinta NOUN    N       Case=Nom|Number=Sing    0       root    _       SpaceAfter=No
12      .       .       PUNCT   Punct   _       11      punct   _       _
~~~

