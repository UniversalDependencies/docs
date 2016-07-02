---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
---

### Description
A proper noun is a noun (or nominal content word) that is the name (or part of
the name) of a specific individual, place, or object. Acronyms made of a
proper noun or proper nouns should also be tagged `PROPN`.

#### Examples

* [fi] _Pekka_ first name, _Helsinki_ city name
* [fi] _EU_ "European Union"

~~~ conllu
# sentence-text: Lisäksi pienen vastaanhangoittelun jälkeen pupu suostui jatkamaan iltaa Suxessiin ja kenties jopa Klubillekin.
1       Lisäksi lisäksi ADV     Adv     _       6       advmod  _       _
2       pienen  pieni   ADJ     A       Case=Gen|Degree=Pos|Number=Sing 3       amod    _       _
3       vastaanhangoittelun     vastaanhangoittelu      NOUN    N       Case=Gen|Number=Sing    6       nmod    _
       _
4       jälkeen jälkeen ADP     Adp     AdpType=Post    3       case    _       _
5       pupu    pupu    NOUN    N       Case=Nom|Number=Sing    6       nsubj   7:nsubj _
6       suostui suostua VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
7       jatkamaan       jatkaa  VERB    V       Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act   6       xcomp
   _       _
8       iltaa   ilta    NOUN    N       Case=Par|Number=Sing    7       dobj    _       _
9       Suxessiin       Suxess  PROPN   N       Case=Ill|Number=Sing    7       nmod    _       _
10      ja      ja      CONJ    C       _       9       cc      _       _
11      kenties kenties ADV     Adv     _       13      advmod  _       _
12      jopa    jopa    ADV     Adv     _       13      advmod  _       _
13      Klubillekin     Klubi   PROPN   N       Case=All|Clitic=Kin|Number=Sing 9       conj    7:nmod  SpaceAfter=No
14      .       .       PUNCT   Punct   _       6       punct   _       _
~~~

~~~ conllu
# sentence-text: Eilisellä yökyläreissulla katsoimme ystäväni kanssa aivan mahtavan animaation nimeltään Cloudy with a
 Chance of Meatballs.
1       Eilisellä       eilinen ADJ     A       Case=Ade|Degree=Pos|Number=Sing 2       amod    _       _
2       yökyläreissulla yö#kylä#reissu  NOUN    N       Case=Ade|Number=Sing    3       nmod    _       _
3       katsoimme       katsoa  VERB    V       Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 0
       root    _       _
4       ystäväni        ystävä  NOUN    N       Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1   3       nmod
    _       _
5       kanssa  kanssa  ADP     Adp     AdpType=Post    4       case    _       _
6       aivan   aivan   ADV     Adv     _       7       advmod  _       _
7       mahtavan        mahtava ADJ     A       Case=Gen|Degree=Pos|Number=Sing 8       amod    _       _
8       animaation      animaatio       NOUN    N       Case=Gen|Number=Sing    3       dobj    _       _
9       nimeltään       nimi    NOUN    N       Case=Abl|Number=Sing|Person[psor]=3     10      nmod    _       _
10      Cloudy  Cloudy  PROPN   N       _       8       appos   _       _
11      with    with    PROPN   N       _       10      name    _       _
12      a       a       PROPN   N       _       10      name    _       _
13      Chance  Chance  PROPN   N       _       10      name    _       _
14      of      of      PROPN   N       _       10      name    _       _
15      Meatballs       Meatballs       PROPN   N       Case=Nom|Number=Sing    10      name    _       SpaceAfter=No
16      .       .       PUNCT   Punct   _       3       punct   _       _
~~~

~~~ conllu
# sentence-text: Kaikkihan alkoi siitä, että kipitin laivaan H&M:n brunssilta.
1       Kaikkihan       kaikki  PRON    Pron    Case=Nom|Clitic=Han|Number=Sing|PronType=Ind    2       nsubj   _
       _
2       alkoi   alkaa   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
3       siitä   se      PRON    Pron    Case=Ela|Number=Sing|PronType=Dem       2       nmod    _       SpaceAfter=No
4       ,       ,       PUNCT   Punct   _       6       punct   _       _
5       että    että    SCONJ   C       _       6       mark    _       _
6       kipitin kipittää        VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 3
       ccomp   _       _
7       laivaan laiva   NOUN    N       Case=Ill|Number=Sing    6       nmod    _       _
8       H&M:n   H&M     PROPN   N       Abbr=Yes|Case=Gen|Number=Sing   9       nmod:poss       _       _
9       brunssilta      brunssi NOUN    N       Case=Abl|Number=Sing    6       nmod    _       SpaceAfter=No
10      .       .       PUNCT   Punct   _       2       punct   _       _
~~~
