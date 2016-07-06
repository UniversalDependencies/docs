---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
---

### Description

Even though the name of the feature seems to suggest that it is used
exclusively with verbs, it is not the case. Some verb forms in some languages
actually form a gray zone between verbs and other parts of speech (nouns,
adjectives and adverbs). For instance, participles may be either classified as
verbs or as adjectives, depending on language and context. In both cases
VerbForm=Part may be used to separate them from other verb forms or other types
of adjectives.

Uralic verbs have rich inflection / derivation pattern for for infinite forms,
these are marked using `VerbForm` feature. However, Finnish uses additional
features `InfType` and `PartType` to enumerate all the different verb forms,
this needs some unifying.

### `Fin`: Finite

Finite is used for regularly inflected verb form.  Verbs that inflect for mood
(Mood), tense (Tense) or person (Person) are finite and are assigned the
VerbForm value Fin.

#### Finite examples

* [fi] _juoksen_ "I run"

~~~ conllu
# sentence-text: Rajoitukset ovat  seuraavanlaiset:
1       Rajoitukset     rajoitus        NOUN    N       Case=Nom|Number=Plur    3       nsubj:cop       _       _
2       ovat    olla    VERB    V       Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 3       cop
     _       _
3       seuraavanlaiset seuraavanlainen ADJ     A       Case=Nom|Degree=Pos|Number=Plur 0       root    _       SpaceAfter=No

~~~

### `Inf`: Infinitive

Infinitive is a form of verb most typically used in syntactic expressions, 
verb chains and so forth. Uralic infinitives share features of nouns, and may
have case inflection for example. It is notable that Uralic languages will have
more than one infinitive form often, and often one of these is the citation
form for dictionaries, i.e. lemma, but it is not shared between languages:
Finnish lemma is "A infintive", Estonian "MA infinitive" and Hungarian is a
finite form.

#### Infinitive examples

* [fi] _juosta_ "to run", _nähdäkseni_ "in order for me to see", _kuollessa_
  "while dying", _syömättä_ "without having eaten"

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

~̃~~


### `Part`: Participle

Participle is a form of verb also used in syntactic expressions and verb
chains, that shares features with adjectives. Like infinitives, Uralic
adjectives have number of variants. For example in Finnish participles have
full paradigms, i.e.  act as derivatoinal suffix in effect, but there's also
clearly distinguishable syntactic use for subset of the forms. e.g. as a part
of analytic temporal construction like "perfect tense": compare _olen juossut_
"I have ran" to _eilen juosseilla miehillä_ "the men that ran yesterday, 
literally yesterday ran+pl+ade man+pl+ade"

#### Participle examples

* [fi] _juossut_ "ran", _näkevä_ "seeing", _syömäni_ "that I ate", 
  _kuolematon_ "immortal, lit. undieable"

~~~ conllu
# sentence-text: Spotify ilmoitti tänään lisäävänsä rajoituksia Spotify Free- ja Open-tileille.
1       Spotify Spotify PROPN   N       Case=Nom|Number=Sing    2       nsubj   4:nsubj _
2       ilmoitti        ilmoittaa       VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Ac
t 0       root    _       _
3       tänään  tänään  ADV     Adv     _       2       advmod  _       _
4       lisäävänsä      lisätä  VERB    V       Case=Gen|Degree=Pos|Number=Sing|PartForm=Pres|Person[psor]=3|VerbForm=Part|Voice=Act    2       xcomp   _       _
5       rajoituksia     rajoitus        NOUN    N       Case=Par|Number=Plur    4       dobj    _       _
6       Spotify Spotify PROPN   N       Case=Nom|Number=Sing    10      compound:nn     _       _
7       Free-   Free-   X       Foreign Foreign=Foreign 6       name    _       _
8       ja      ja      CONJ    C       _       7       cc      _       _
9       Open    Open    X       Foreign Foreign=Foreign 7       conj    6:name  SpaceAfter=No
10      -tileille       tili    NOUN    N       Case=All|Number=Plur    4       nmod    _       SpaceAfter=No
11      .       .       PUNCT   Punct   _       2       punct   _       _
~~~

