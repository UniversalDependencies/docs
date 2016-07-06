---
layout: feature
title: 'Person'
shortdef: 'person'
---

### Description

Person is typically feature of personal and possessive pronouns / determiners,
and of verbs. On verbs it is in fact an agreement feature that marks the person
of the verb’s subject. Person is further used as a layered feature for
possessives, for further informations, see `Person[psor]` and `Person[psed]`.

### `1`: First person

First person refers towards me, us, etc.

#### Examples

* [fi] _minä_ "I", _juoksen_ "(I) run", _me_ "we", _juoksemme_ "(we) run"

~~~ conllu
# sentence-text: Millainen minä olen?
1       Millainen       millainen       ADJ     A       Case=Nom|Degree=Pos|Number=Sing 0       root    _       _
2       minä    minä    PRON    Pron    Case=Nom|Number=Sing|Person=1|PronType=Prs      1       nsubj:cop       _
       _
3       olen    olla    VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act 1       cop
     _       SpaceAfter=No
4       ?       ?       PUNCT   Punct   _       1       punct   _       _
~~~

### `2`: First person

Second person refers towards you, away from us but still within reference.

#### Examples

* [fi] _sinä_ "you (singular)", _juokset_ "(you singular) run",
  _te_ "you (plural)", _juoksette_ "(you plural) run"

~~~ conllu
# sentence-text: Toivon, että teillä kaikilla on ollut erinomainen loma, ja toivotan teille antoisaa työskentelyjaksoa
 tänä parlamenttimme vaalikauden viimeisenä vuonna.
1       Toivon  toivoa  VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       SpaceAfter=No
2       ,       ,       PUNCT   Punct   _       7       punct   _       _
3       että    että    SCONJ   C       _       7       mark    _       _
4       teillä  sinä    PRON    Pron    Case=Ade|Number=Plur|Person=2|PronType=Prs      7       nmod:own        _
       _
5       kaikilla        kaikki  PRON    Pron    Case=Ade|Number=Plur|PronType=Ind       4       det     _       _
6       on      olla    AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 7       aux
     _       _
7       ollut   olla    VERB    V       Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Pass  1
       ccomp   _       _
8       erinomainen     erinomainen     ADJ     A       Case=Nom|Degree=Pos|Number=Sing 9       amod    _       _
9       loma    loma    NOUN    N       Case=Nom|Number=Sing    7       nsubj   _       SpaceAfter=No
~~̃~

### `3`: Third person

Third person refers to thing or things outside the frame of reference, him, 
them and so forth.

#### Examples

* [fi] _hän juoksee_ "he runs", _he juoksevat_ "they run"

~~~ conllu
# sentence-text: Molemmat olivat kovin kiinnostuneita ja he olivatkin heti ottaneet yhteyttä tutkimusvastaavaan, joka oli sanonut isäni täyttävän kaikki kriteerit.
1       Molemmat        molemmat        PRON    Pron    Case=Nom|Number=Plur|PronType=Ind       4       nsubj:cop
       _       _
2       olivat  olla    VERB    V       Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 4       cop
     _       _
3       kovin   kovin   ADV     Adv     _       4       advmod  _       _
4       kiinnostuneita  kiinnostunut    ADJ     A       Case=Par|Degree=Pos|Number=Plur 0       root    _       _
5       ja      ja      CONJ    C       _       4       cc      _       _
6       he      hän     PRON    Pron    Case=Nom|Number=Plur|Person=3|PronType=Prs      9       nsubj   _       _
7       olivatkin       olla    AUX     V       Clitic=Kin|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act      9       aux     _       _
8       heti    heti    ADV     Adv     _       9       advmod  _       _
9       ottaneet        ottaa   VERB    V       Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act
   4       conj    _       _
10      yhteyttä        yhteys  NOUN    N       Case=Par|Number=Sing    9       dobj    _       _
11      tutkimusvastaavaan      tutkimus#vastaava       NOUN    N       Case=Ill|Number=Sing    10      nmod    _
       SpaceAfter=No
12      ,       ,       PUNCT   Punct   _       15      punct   _       _
13      joka    joka    PRON    Pron    Case=Nom|Number=Sing|PronType=Rel       15      nsubj   _       _
14      oli     olla    AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 15      aux
     _       _
15      sanonut sanoa   VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   11
      acl:relcl       _       _
16      isäni   isä     NOUN    N       Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1   17      nsubj   _
       _
17      täyttävän       täyttää VERB    V       Case=Gen|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act
   15      xcomp:ds        _       _
18      kaikki  kaikki  PRON    Pron    Case=Nom|Number=Sing|PronType=Ind       19      det     _       _
19      kriteerit       kriteeri        NOUN    N       Case=Nom|Number=Plur    17      dobj    _       SpaceAfter=No
20      .       .       PUNCT   Punct   _       4       punct   _       _
~~~
