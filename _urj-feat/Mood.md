---
layout: feature
title: 'Mood'
shortdef: 'mood'
---

### Description

Mood is a feature that expresses modality and subclassifies finite verb forms.
Uralic verbs are commonly suffixed for mood, sometimes mood is intermixed with
tense and/or aspect in Uralic inflectional systems.

### `Ind`: Indicative mood

Indicative is the neutral mood, usually without overt suffix. In some
dictionaries an indicative form is also the dictionary entry form, i.e., 
lemma or.

#### Indicative examples

* [fi] _juoksen_ "I run", _tapamme_ "we kill"

~~~ conllu
# sentence-text: Se, mitä viime aikoina on tapahtunut on se, että ilmiölle tuli uusi nimi.
1       Se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       9       nsubj:cop       _       SpaceA
fter=No
2       ,       ,       PUNCT   Punct   _       7       punct   _       _
3       mitä    mikä    PRON    Pron    Case=Par|Number=Sing|PronType=Rel       7       nsubj   _       _
4       viime   viime   ADJ     A       _       5       amod    _       _
5       aikoina aika    NOUN    N       Case=Ess|Number=Plur    7       nmod    _       _
6       on      olla    AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 7       aux
     _       _
7       tapahtunut      tapahtua        VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   1       acl:relcl       _       _
8       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 9       cop
     _       _
9       se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       0       root    _       SpaceAfter=No
10      ,       ,       PUNCT   Punct   _       13      punct   _       _
11      että    että    SCONJ   C       _       13      mark    _       _
12      ilmiölle        ilmiö   NOUN    N       Case=All|Number=Sing    13      nmod    _       _
13      tuli    tulla   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 9       ccomp
   _       _
14      uusi    uusi    ADJ     A       Case=Nom|Degree=Pos|Number=Sing 15      amod    _       _
15      nimi    nimi    NOUN    N       Case=Nom|Number=Sing    13      nsubj   _       SpaceAfter=No
16      .       .       PUNCT   Punct   _       9       punct   _       _
~̃~~

### `Imp`: Imperative mood

Imperative mood is used for giving orders or requests. It is sometimes mixed
with other related moods.

#### Imperative examples

* [fi] _juokse_ "run! (you)", _tappakaamme_ "we should kill"

~~~ conllu
# sentence-text: Katsokaa ihmeessä tämä elokuva, jos Monsterit OY ja muut ihanuudet kolahtavat yhtään.
1       Katsokaa        katsoa  VERB    V       Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act    0       root
    _       _
2       ihmeessä        ihmeessä        ADV     Adv     _       1       advmod  _       _
3       tämä    tämä    PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       4       det     _       _
4       elokuva elo#kuva        NOUN    N       Case=Nom|Number=Sing    1       dobj    _       SpaceAfter=No

~~~

### `Cnd`: Conditional mood

Conditional mood is used to express actions that would have taken place under
some circumstances but they actually did not / do not happen.

#### Conditional examples

* [fi] _juoksisin_ "I would run", _tappaisimme_ "we would kill"

~~~ conllu
# sentence-text: Jospa joku ystävällinen sielu auttaisi kassieni kanssa.
1       Jospa   jospa   ADV     Adv     _       5       advmod  _       _
2       joku    joku    PRON    Pron    Case=Nom|Number=Sing|PronType=Ind       4       det     _       _
3       ystävällinen    ystävällinen    ADJ     A       Case=Nom|Degree=Pos|Number=Sing 4       amod    _       _
4       sielu   sielu   NOUN    N       Case=Nom|Number=Sing    5       nsubj   _       _
5       auttaisi        auttaa  VERB    V       Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act    0       root
    _       _
6       kassieni        kassi   NOUN    N       Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=1   5       nmod
    _       _
7       kanssa  kanssa  ADP     Adp     AdpType=Post    6       case    _       SpaceAfter=No
8       .       .       PUNCT   Punct   _       5       punct   _       _
~~~

### `Pot`: Potential mood

Potential mood is used to express uncertainty. See also: Aspect.

#### Potential examples

* [fi] _juossen_ "I might run", _tappanemme_ "we may kill"

~~~ conllu
# sentence-text: Tästä lähes vuosisadan laajuisesta näkökulmasta saanen mainita kaksi seikkaa.
1       Tästä   tämä    PRON    Pron    Case=Ela|Number=Sing|PronType=Dem       5       det     _       _
2       lähes   lähes   ADV     Adv     _       4       advmod  _       _
3       vuosisadan      vuosi#sata      NOUN    N       Case=Gen|Number=Sing    4       nmod:poss       _       _
4       laajuisesta     laajuinen       ADJ     A       Case=Ela|Degree=Pos|Number=Sing 5       amod    _       _
5       näkökulmasta    näkö#kulma      NOUN    N       Case=Ela|Number=Sing    6       nmod    _       _
6       saanen  saada   VERB    V       Mood=Pot|Number=Sing|Person=1|VerbForm=Fin|Voice=Act    0       root    _
       _
7       mainita mainita VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    6       xcomp   _       _
8       kaksi   kaksi   NUM     Num     Case=Nom|Number=Sing|NumType=Card       9       nummod  _       _
9       seikkaa seikka  NOUN    N       Case=Par|Number=Sing    7       dobj    _       SpaceAfter=No
10      .       .       PUNCT   Punct   _       6       punct   _       _
~~~

### `Jus`: Jussive mood

The jussive mood expresses the desire that the action happens. Some uses of
other moods  may overlap with jussive, for example in Finnish potential
inflection set.

#### Jussive examples

None in Finnish

### `Opt`: Optative mood

Optative is mood for desired actions. For example Finnish optative is used
in archaic literal style for proclamations.

#### Optative examples

* [fi] _olla_ "to be", _ollos_ "may you be"

### Eventive mood

The eventive mood is used in Finnish grammars of the combination of potential
and conditional moods. It has mainly archaic poetic significance and does not
occur in the current treabanks. If it were it might be marked as `Cnd|Pot`?

