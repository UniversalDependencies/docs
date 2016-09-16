---
layout: postag
title: 'ADP'
shortdef: 'adposition'
---

### Definition

`ADP` is used for adpositions, i.e., prepositions and postpositions (many
Uralic languages won't make strict distinctions). Adpositions have nominal
complements that can be identified by the cases, or the complement may be
encoded by a possessive suffix on the adposition itself. `ADP` can be separated
from `ADV` by lack of complement or if the complement is verb or a clause.

Adpositions are often derived from defective or historic nominal paradigms, the
tagging should follow modern diachronic analysis instead of etymological.


#### Examples

* [fi] _alla_ "under", _alta_ "from under", _alle_ "to under"
* [fi] _vuoksi_ "because of", _vuokseni_, "because of me"


~~~ conllu
# sentence-text: Pakkaslumi narisee terävästi kengän alla.
1       Pakkaslumi      pakkas#lumi     NOUN    N       Case=Nom|Number=Sing    2       nsubj   _       _
2       narisee narista VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
3       terävästi       terävästi       ADV     Adv     _       2       advmod  _       _
4       kengän  kenkä   NOUN    N       Case=Gen|Number=Sing    2       nmod    _       _
5       alla    alla    ADP     Adp     AdpType=Post    4       case    _       SpaceAfter=No
6       .       .       PUNCT   Punct   _       2       punct   _       _
~~~

~~~ conllu
# sentence-text: Kesken oppitunnin seiskaluokkalainen poika viittaa innokkaasti.
1       Kesken  kesken  ADP     Adp     AdpType=Prep    2       case    _       _
2       oppitunnin      oppi#tunti      NOUN    N       Case=Gen|Number=Sing    5       nmod    _       _
3       seiskaluokkalainen      seiska#luokka   ADJ     A       Case=Nom|Degree=Pos|Derivation=Lainen|Number=Sing
       4       amod    _       _
4       poika   poika   NOUN    N       Case=Nom|Number=Sing    5       nsubj   _       _
5       viittaa viitata VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
6       innokkaasti     innokkaasti     ADV     Adv     _       5       advmod  _       SpaceAfter=No
7       .       .       PUNCT   Punct   _       5       punct   _       _
~~~

~~~ conllu
# sentence-text: Ehkä kivointa oli kuitenkin se, kun lounaspöydässä viereemme istui EU:ssa työskentelevät Andrea ja Te
rese.
1       Ehkä    ehkä    ADV     Adv     _       2       advmod  _       _
2       kivointa        kiva    ADJ     A       Case=Par|Degree=Sup|Number=Sing 0       root    _       _
3       oli     olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 2       cop
     _       _
4       kuitenkin       kuitenkin       ADV     Adv     _       2       advmod  _       _
5       se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       2       nsubj:cop       _       SpaceA
fter=No
6       ,       ,       PUNCT   Punct   _       10      punct   _       _
7       kun     kun     SCONJ   C       _       10      mark    _       _
8       lounaspöydässä  lounas#pöytä    NOUN    N       Case=Ine|Number=Sing    10      nmod    _       _
9       viereemme       viereen ADP     Adp     AdpType=Prep|Number[psor]=Plur|Person[psor]=1   10      advmod  _
       _
10      istui   istua   VERB    V       Mood=Ind|Number=Plur|Person=3|Style=Coll|Tense=Past|VerbForm=Fin|Voice=Act
      5       advcl   _       _
11      EU:ssa  EU      PROPN   N       Abbr=Yes|Case=Ine|Number=Sing   12      nmod    _       _
12      työskentelevät  työskennellä    VERB    V       Case=Nom|Degree=Pos|Number=Plur|PartForm=Pres|VerbForm=Part|Voice=Act   13      acl     15:acl  _
13      Andrea  Andrea  PROPN   N       Case=Nom|Number=Sing    10      nsubj   _       _
14      ja      ja      CONJ    C       _       13      cc      _       _
15      Terese  Terese  PROPN   N       Case=Nom|Number=Sing    13      conj    10:nsubj        SpaceAfter=No
16      .       .       PUNCT   Punct   _       2       punct   _       _
~~~

