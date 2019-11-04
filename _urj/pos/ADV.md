---
layout: postag
title: 'ADV'
shortdef: 'adverb'
udver: '2'
---

### Description

Adverbs are words that modify verbs, clauses or other ad-words, but
not nouns. Adverbs are commonly derived from all parts-of-speech, sometimes
the distinction between adverb and inflection is not clear. Most common adverb
derivation for most languages is from verb to manner of acting, e.g. [fi]
_kauniisti_ "beautifully" (< _kaunis_ "beautiful).

#### Examples

* [fi] _nopeasti_ "fast", _nopeammin_ "faster"
* [fi] _maanantaisin_ "on mondays", _kahdesti_ "twice"
* [fi] _käsin_ "manually" (< _käsi_ "hand", instructive being inflection as
  well)
* [fi] _puolueittain_ "party by party" (< _puolue_ "party" + distributive)

~~~ conllu
# sentence-text: Isäni, ajoittain henkisesti hukassa ja usein fyysisesti eksyksissä oleva, pakonomaisesti vitsejä vääntä mies voi olla raskaskin huolehdittava.
1       Isäni   isä     NOUN    N       Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1   19      nsubj:cop
       _       SpaceAfter=No
2       ,       ,       PUNCT   Punct   _       15      punct   _       _
3       ajoittain       ajoittain       ADV     Adv     _       5       advmod  _       _
4       henkisesti      henkisesti      ADV     Adv     _       5       advmod  _       _
5       hukassa hukassa ADV     Adv     _       10      advmod  _       _
6       ja      ja      CONJ    C       _       5       cc      _       _
7       usein   usein   ADV     Adv     _       9       advmod  _       _
8       fyysisesti      fyysisesti      ADV     Adv     _       9       advmod  _       _
9       eksyksissä      eksyksissä      ADV     Adv     _       5       conj    10:advmod       _
10      oleva   olla    VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act   15
      acl     _       SpaceAfter=No
11      ,       ,       PUNCT   Punct   _       14      punct   _       _
12      pakonomaisesti  pakko#omaisesti ADV     Adv     _       14      advmod  _       _
13      vitsejä vitsi   NOUN    N       Case=Par|Number=Plur    14      dobj    _       _
14      vääntä  vääntää VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|Typo=Yes|VerbForm=Part|Voice=Act  10      conj    15:acl  _
15      mies    mies    NOUN    N       Case=Nom|Number=Sing    1       appos   _       _
16      voi     voida   AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 19      aux
     _       _
17      olla    olla    VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    19      cop     _       _
18      raskaskin       raskas  ADJ     A       Case=Nom|Clitic=Kin|Degree=Pos|Number=Sing      19      amod    _
       _
19      huolehdittava   huolehtia       VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass  0       root    _       SpaceAfter=No
20      .       .       PUNCT   Punct   _       19      punct   _       _
~̃~~


~~~ conllu
# sentence-text: Kuvaajissa on siis puolueittain kyllä- ja ei-vastauksien määrät.
1       Kuvaajissa      kuvaaja NOUN    N       Case=Ine|Number=Plur    2       nmod    _       _
2       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
3       siis    siis    ADV     Adv     _       2       advmod  _       _
4       puolueittain    puolueittain    ADV     Adv     _       2       advmod  _       _
5       kyllä-  kyllä   ADV     Adv     _       8       nmod:poss       _       _
6       ja      ja      CONJ    C       _       5       cc      _       _
7       ei-vastauksien  ei#vastaus      NOUN    N       Case=Gen|Number=Plur    5       conj    8:nmod:poss     _
8       määrät  määrä   NOUN    N       Case=Nom|Number=Plur    2       nsubj   _       SpaceAfter=No
9       .       .       PUNCT   Punct   _       2       punct   _       _
~~~
