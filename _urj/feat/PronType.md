---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
---

### Description

This feature typically applies to pronouns, determiners, pronominal numerals 
(quantifiers) and pronominal adverbs. This feature is used for pro-words that
are not under `PRON` part of speech, e.g. pro-adjectives and pro-adverbs.

### `Prs`: Personal pronouns

Personal pronouns are pretty standard, most Uralic languages will have at
least singulars and plurals in first, second and third person. Some will also
include duals as well as inclusive and exclusive first persons.

#### Personal examples

* [fi] _minä_ "I", _sinä_ "you", _hän_ "he, she"

~~~ conllu
# sentence-text: Se sai ainakin minut uskomaan uuteen tapaan tehdä elokuvia.
1       Se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       2       nsubj   _       _
2       sai     saada   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
3       ainakin ainakin ADV     Adv     _       4       advmod  _       _
4       minut   minä    PRON    Pron    Case=Acc|Number=Sing|Person=1|PronType=Prs      5       nsubj   _       _
5       uskomaan        uskoa   VERB    V       Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act   2       xcomp:ds        _       _
6       uuteen  uusi    ADJ     A       Case=Ill|Degree=Pos|Number=Sing 7       amod    _       _
7       tapaan  tapa    NOUN    N       Case=Ill|Number=Sing    5       nmod    _       _
8       tehdä   tehdä   VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    7       acl     _       _
9       elokuvia        elo#kuva        NOUN    N       Case=Par|Number=Plur    8       dobj    _       SpaceAfter=No
10      .       .       PUNCT   Punct   _       2       punct   _       _
~~~

### `Rcp`: Reciprocal pronouns

Reciprocal pronouns refer to number of things each, most typically two people
at each other. 

#### Reciprocal examples

* [fi] _toinen [...] toisiaan_ "each other"

~~~ conllu
# sentence-text: Rakkaus ilmentyy siinä, miten kohtelemme toinen toisiamme.
1       Rakkaus rakkaus NOUN    N       Case=Nom|Number=Sing    2       nsubj   _       _
2       ilmentyy        ilmentyä        VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Ac
t 0       root    _       _
3       siinä   se      PRON    Pron    Case=Ine|Number=Sing|PronType=Dem       2       nmod    _       SpaceAfter=No
4       ,       ,       PUNCT   Punct   _       6       punct   _       _
5       miten   miten   ADV     Adv     _       6       advmod  _       _
6       kohtelemme      kohdella        VERB    V       Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Ac
t 3       ccomp   _       _
7       toinen  toinen  PRON    Pron    Case=Nom|Number=Sing|PronType=Rcp       6       dobj    _       _
8       toisiamme       toinen  PRON    Pron    Case=Par|Number=Plur|Number[psor]=Plur|Person[psor]=1|PronType=Rcp
      7       mwe     _       SpaceAfter=No
9       .       .       PUNCT   Punct   _       2       punct   _       _

### `Int`: Interrogative pronouns

Interrogative pronouns are used questions. As a lexical feature, it is used for
pronouns that are intrinsically questions, rather than all which have question
enclitic particle, however, in practice many cases of pronouns with
cliticsa are seen as lexicalised interrogatives.

#### Interrogative examples

* [fi] _kuka_ "who", _mitä_ "what"

~~~ conllu
# sentence-text: Mitä minä puhun?
1       Mitä    mikä    PRON    Pron    Case=Par|Number=Sing|PronType=Int       3       dobj    _       _
2       minä    minä    PRON    Pron    Case=Nom|Number=Sing|Person=1|PronType=Prs      3       nsubj   _       _
3       puhun   puhua   VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       SpaceAfter=No
4       ?       ?       PUNCT   Punct   _       3       punct   _       _
~~~

### `Rel`: Relative pronouns

Relative pronouns are used with relative clauses.

#### Relative examples

* [fi] _joka_ "which", _mikä_ "that"

~~~ conllu

# sentence-text: Näin lehdessä ilmoituksen, jolla etsittiin tutkimushenkilöitä Alzheimer-projektiin jollekin Turun yli
opiston laitokselle.
1       Näin    nähdä   VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
2       lehdessä        lehti   NOUN    N       Case=Ine|Number=Sing    1       nmod    _       _
3       ilmoituksen     ilmoitus        NOUN    N       Case=Gen|Number=Sing    1       dobj    _       SpaceAfter=No
4       ,       ,       PUNCT   Punct   _       6       punct   _       _
5       jolla   joka    PRON    Pron    Case=Ade|Number=Sing|PronType=Rel       6       nmod    _       _
6       etsittiin       etsiä   VERB    V       Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass     3       acl:relcl
       _       _
7       tutkimushenkilöitä      tutkimus#henkilö        NOUN    N       Case=Par|Number=Plur    6       dobj    _
       _
8       Alzheimer-projektiin    Alzheimer#projekti      NOUN    N       Case=Ill|Number=Sing    7       nmod    _
       _
9       jollekin        jokin   PRON    Pron    Case=All|Number=Sing|PronType=Ind       12      det     _       _
10      Turun   Turku   PROPN   N       Case=Gen|Number=Sing    11      nmod:poss       _       _
11      yliopiston      yli#opisto      NOUN    N       Case=Gen|Number=Sing    12      nmod:poss       10:name _
12      laitokselle     laitos  NOUN    N       Case=All|Number=Sing    8       nmod    _       SpaceAfter=No
13      .       .       PUNCT   Punct   _       1       punct   _       _
~~~


### `Dem`: Demonstrative pronouns

Demonstrative pronouns are: this, that and it, and their plurals.

#### Demonstrative examples

* [fi] _tämä_ "this", _tuo_ "that", _se_ "it"

~~~ conllu
# sentence-text: Toivottavasti tuo tuosta tokenisi itsestään.
1       Toivottavasti   toivottavasti   ADV     Adv     _       4       advmod  _       _
2       tuo     tuo     PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       4       nsubj   _       _
3       tuosta  tuosta  ADV     Adv     _       4       advmod  _       _
4       tokenisi        toeta   VERB    V       Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act    0       root
    _       _
5       itsestään       itsestään       ADV     Adv     _       4       advmod  _       SpaceAfter=No
6       .       .       PUNCT   Punct   _       4       punct   _       _
~~~

### `Ind`: Indefinite pronouns

Pronouns that refer to indefinite quantities or qualities of nouns, in some
grammars overlaps with e.g. quantifier pronouns (which do not exist in Universal
features).

#### Indefinite examples

* [fi] _jokin_ "something", _kaikki_ "all"

~~~ conllu
# sentence-text: Huumoria oli tarpeeksi, eräs tärkeä teema oli tiede ja elokuvaseura oli mahtavaa.
1       Huumoria        huumori NOUN    N       Case=Par|Number=Sing    3       nsubj:cop       _       _
2       oli     olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 3       cop
     _       _
3       tarpeeksi       tarpeeksi       ADV     Adv     _       0       root    _       SpaceAfter=No
4       ,       ,       PUNCT   Punct   _       3       punct   _       _
5       eräs    eräs    PRON    Pron    Case=Nom|Number=Sing|PronType=Ind       7       det     _       _
6       tärkeä  tärkeä  ADJ     A       Case=Nom|Degree=Pos|Number=Sing 7       amod    _       _
7       teema   teema   NOUN    N       Case=Nom|Number=Sing    9       nsubj:cop       _       _
8       oli     olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 9       cop
     _       _
9       tiede   tiede   NOUN    N       Case=Nom|Number=Sing    3       conj    _       _
10      ja      ja      CONJ    C       _       3       cc      _       _
11      elokuvaseura    elo#kuva#seura  NOUN    N       Case=Nom|Number=Sing    13      nsubj:cop       _       _
12      oli     olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 13      cop
     _       _
13      mahtavaa        mahtava ADJ     A       Case=Par|Degree=Pos|Number=Sing 3       conj    _       SpaceAfter=No
14      .       .       PUNCT   Punct   _       3       punct   _       _
~~~

### `Art`: Article pronouns

For words that are articles. Mainly used in Uralic dependencies for Hungarian,
or loans from other related languages.

#### Article examples

None in Finnish.

### `Neg`: Negative pronouns

Negative pronouns are lexically negative by themselves. They are not used in
Universal dependencies for pronouns that go with negation, e.g. not with
[fi] _ei <b>koskaan</b>_, _ei <b>mikään</b>_ etc. 

#### Negative examples

None in Finnish.

### `Tot`: Total / collective pronouns

Total pronouns are used for some collectives.

#### Total examples

None in Finnish
