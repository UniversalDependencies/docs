---
layout: postag
title: 'VERB'
shortdef: 'verb'
---

### Description

Verbs typically inflect for tense, mood and person and signal events and
actions.  Verbs inflect with personal suffixes as well as tense, aspect, mood
suffixes. Uralic verbs may often have large number of nominal forms with more
or less full paradigms, typically annotated in grammars as infinitives and
participles. There's no best practice on selecting whether a word form should
be a derived new word or a form of a verb.

#### Examples

* [fi] _juosta_ "run"
* [fi] _ei_ "no", _en_ "I do not", _älkää_ "you must not"
* [fi] _syönyt_ "eaten", _olin <b>syömässä</b>_ "I was <b>eating</b>",
  _<b>syövä</b> mies_ "<b>eating</b> man"

~~~ conllu
# sentence-text: Onneksi sitä ei missään vaiheessa restauroitu samalla tavoin kuin Uppsalan tuomiokirkkoa.
1       Onneksi onneksi ADV     Adv     _       6       advmod  _       _
2       sitä    se      PRON    Pron    Case=Par|Number=Sing|PronType=Dem       6       dobj    _       _
3       ei      ei      VERB    V       Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act        6       neg
     _       _
4       missään mikään  PRON    Pron    Case=Ine|Number=Sing|PronType=Ind       5       det     _       _
5       vaiheessa       vaihe   NOUN    N       Case=Ine|Number=Sing    6       nmod    _       _
6       restauroitu     restauroida     VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass  0       root    _       _
7       samalla sama    PRON    Pron    Case=Ade|Number=Sing|PronType=Ind       8       det     _       _
8       tavoin  tapa    NOUN    N       Case=Ins|Number=Plur    6       nmod    _       _
9       kuin    kuin    SCONJ   C       _       11      mark    _       _
10      Uppsalan        Uppsala PROPN   N       Case=Gen|Number=Sing    11      nmod:poss       _       _
11      tuomiokirkkoa   tuomio#kirkko   NOUN    N       Case=Par|Number=Sing    7       advcl   10:name SpaceAfter=No
12      .       .       PUNCT   Punct   _       6       punct   _       _
~~~


