---
layout: postag
title: 'X'
shortdef: 'other'
---

### Description

The tag `X` is used for words that for some reason cannot be assigned a real
part-of-speech category. X is typically used for foreign language material or 
other un-processable data.

It is foreseeable that in many Uralic language data code-switching is more
common, the other language parts should be tagged `X` throughout?

#### Examples

* [fi] _cookie_, _open-source_


~~~ conllu
# sentence-text: Prototyypissä on siis viisi nappia: start, stop, reset, ensimmäisen digitin (numeron) valinta sekä to
isen digitin valinta.
1       Prototyypissä   proto#tyyppi    NOUN    N       Case=Ine|Number=Sing    2       nmod    _       _
2       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
3       siis    siis    ADV     Adv     _       2       advmod  _       _
4       viisi   viisi   NUM     Num     Case=Nom|Number=Sing|NumType=Card       5       nummod  _       _
5       nappia  nappi   NOUN    N       Case=Par|Number=Sing    2       nsubj   _       SpaceAfter=No
6       :       :       PUNCT   Punct   _       7       punct   _       _
7       start   start   X       Foreign Foreign=Foreign 5       appos   _       SpaceAfter=No
8       ,       ,       PUNCT   Punct   _       7       punct   _       _
9       stop    stop    X       Foreign Foreign=Foreign 7       conj    5:appos SpaceAfter=No
10      ,       ,       PUNCT   Punct   _       7       punct   _       _
11      reset   reset   X       Foreign Foreign=Foreign 7       conj    5:appos SpaceAfter=No
12      ,       ,       PUNCT   Punct   _       7       punct   _       _
13      ensimmäisen     ensimmäinen     ADJ     Num     Case=Gen|Number=Sing|NumType=Ord        14      nummod  _
       _
14      digitin digit   X       Foreign Foreign=Foreign 18      nmod:gobj       _       _
15      (       (       PUNCT   Punct   _       16      punct   _       SpaceAfter=No
16      numeron numero  NOUN    N       Case=Gen|Number=Sing    14      appos   _       SpaceAfter=No
17      )       )       PUNCT   Punct   _       16      punct   _       _
18      valinta valinta NOUN    N       Case=Nom|Number=Sing    7       conj    5:appos _
19      sekä    sekä    CONJ    C       _       7       cc      _       _
20      toisen  toinen  ADJ     Num     Case=Gen|Number=Sing|NumType=Ord        21      nummod  _       _
21      digitin digit   X       Foreign Foreign=Foreign 22      nmod:gobj       _       _
22      valinta valinta NOUN    N       Case=Nom|Number=Sing    7       conj    5:appos SpaceAfter=No
23      .       .       PUNCT   Punct   _       2       punct   _       _
~~~
