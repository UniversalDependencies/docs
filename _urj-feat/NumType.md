---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
---

### Description

Numeral types are used for lexical sub-categorisation of numerals. Common
classes include cardinals and ordinals, sometimes also approximatives etc.


### `Card`: Cardinal

#### Cardinal examples

* [fi] _kolme_ "three" 
* [u] _27_

~~~ conllu
# sentence-text: Voitelin pari leipää ja söin aamiaisen vuoteessa takkatulen loisteessa lukien mielenkiintoista kirjaa
 suomalaisten talonpoikaislevottomuuksista 1050-luvulla.
1       Voitelin        voidella        VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Ac
t 0       root    _       _
2       pari    pari    NUM     Num     Case=Nom|Number=Sing|NumType=Card       3       nummod  _       _
3       leipää  leipä   NOUN    N       Case=Par|Number=Sing    1       dobj    _       _
4       ja      ja      CONJ    C       _       1       cc      _       _
5       söin    syödä   VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 1       conj
    _       _
6       aamiaisen       aamiainen       NOUN    N       Case=Gen|Number=Sing    5       dobj    _       _
~~~

### `Ord`: Ordinal

Sometimes ordinals are marked as adjectives in their main part of speech
classification, the NumType feature should(?) be used with adjectives.

#### Ordinal examples

* [fi] _kolmas_, _3._, _III_ "third"

~~~ conllu
# sentence-text: Uudet käyttäjät pystyvät käyttämään tilejään niin kuin nytkin ensimmäiset 6 kuukautta.
1       Uudet   uusi    ADJ     A       Case=Nom|Degree=Pos|Number=Plur 2       amod    _       _
2       käyttäjät       käyttäjä        NOUN    N       Case=Nom|Number=Plur    3       nsubj   4:nsubj _
3       pystyvät        pystyä  VERB    V       Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0
       root    _       _
4       käyttämään      käyttää VERB    V       Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act   3       xcomp
   _       _
5       tilejään        tili    NOUN    N       Case=Par|Number=Plur|Person[psor]=3     4       dobj    _       _
6       niin    niin    ADV     Adv     _       4       advmod  _       _
7       kuin    kuin    SCONJ   C       _       8       mark    _       _
8       nytkin  nyt     ADV     Adv     Clitic=Kin      6       advcl   _       _
9       ensimmäiset     ensimmäinen     ADJ     Num     Case=Nom|Number=Plur|NumType=Ord        11      nummod  _
       _
10      6       6       NUM     Num     NumType=Card    11      nummod  _       _
11      kuukautta       kuu#kausi       NOUN    N       Case=Par|Number=Sing    4       nmod    _       SpaceAfter=No
12      .       .       PUNCT   Punct   _       3       punct   _       _
~~~


### `Mult`: Multiplicative

#### Multiplicative examples

* [fi] _kolmesti_ "thrice"

### `Dist`: Distributive

#### Distributive examples

### `Frac`: Fractional

#### Fractional examples

* [fi] _kolmannes_ "one third"
