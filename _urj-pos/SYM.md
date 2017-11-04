---
layout: postag
title: 'SYM'
shortdef: 'symbol'
---

### Description

A symbol is a word-like entity that differs from ordinary words by form,
function, or both.  Symbols are character sequences other than those in punct
part of speech.

Symbols in many Uralic languages inflect like common nominals, e.g. with an
intervening punctuation.

#### Examples

* [fi] _$_, _:-)_, _☺_, _<3_, _♡_
* [fi] _www.google.fi:ssä_ "in www.google.fi"

~~~ conllu
# sentence-text: Tuotteista voit lukea lisää ja niistä voi tilata Ethnic Cosme
ticsin kotisivulta.:)
1       Tuotteista      tuote   NOUN    N       Case=Ela|Number=Plur    3
       nmod    _       _
2       voit    voida   AUX     V       Mood=Ind|Number=Sing|Person=2|Tense=Pr
es|VerbForm=Fin|Voice=Act 3       aux     _       _
3       lukea   lukea   VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voi
ce=Act    0       root    _       _
4       lisää   lisää   ADV     Adv     _       3       advmod  _       _
5       ja      ja      CONJ    C       _       3       cc      _       _
6       niistä  se      PRON    Pron    Case=Ela|Number=Plur|PronType=Dem
       8       nmod    _       _
7       voi     voida   AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Pr
es|VerbForm=Fin|Voice=Act 8       aux     _       _
8       tilata  tilata  VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voi
ce=Act    3       conj    _       _
9       Ethnic  Ethnic  PROPN   N       _       11      nmod:poss       _
       _
10      Cosmeticsin     Cosmetics       PROPN   N       Case=Gen|Number=Sing
    9       name    _       _
11      kotisivulta     koti#sivu       NOUN    N       Case=Abl|Number=Sing
    8       nmod    _       SpaceAfter=No
12      .       .       PUNCT   Punct   _       3       punct   _       SpaceA
fter=No
13      :)      :)      SYM     Symb    _       3       discourse       _
       _
~~~

~̃~~ conllu
# sentence-text: Tässä mallissa on sama 6,1 -litrainen Hemi -moottori kuin SRT
-8:ssa, mutta väri on erikoinen "Detonator Yellow" ja siinä on mustat teippaukset.
1       Tässä   tämä    PRON    Pron    Case=Ine|Number=Sing|PronType=Dem
       2       det     _       _
2       mallissa        malli   NOUN    N       Case=Ine|Number=Sing    3
       nmod    _       _
3       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root    _       _
4       sama    sama    PRON    Pron    Case=Nom|Number=Sing|PronType=Ind
       8       det     _       _
5       6,1     6,1     NUM     Num     NumType=Card    6       nummod  _
       _
6       -litrainen      litra   ADJ     A       Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing 8       amod    _       _
7       Hemi    Hemi    PROPN   N       Case=Nom|Number=Sing    8       compound:nn     _       _
8       -moottori       moottori        NOUN    N       Case=Nom|Number=Sing
    3       nsubj   _       _
9       kuin    kuin    SCONJ   C       _       10      mark    _       _
10      SRT-8:ssa       SRT#8   SYM     Symb    Case=Ine        4       advcl
   _       SpaceAfter=No
11      ,       ,       PUNCT   Punct   _       3       punct   _       _
12      mutta   mutta   CONJ    C       _       3       cc      _       _
13      väri    väri    NOUN    N       Case=Nom|Number=Sing    17      nsubj:cop       _       _
14      on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 17      cop     _       _
15      erikoinen       erikoinen       ADJ     A       Case=Nom|Degree=Pos|Number=Sing 17      amod    _       _
16      "       "       PUNCT   Punct   _       17      punct   _       SpaceAfter=No
17      Detonator       Detonator       PROPN   N       _       3       conj
    _       _
18      Yellow  Yellow  PROPN   N       Case=Nom|Number=Sing    17      name
    _       SpaceAfter=No
19      "       "       PUNCT   Punct   _       17      punct   _       _
20      ja      ja      CONJ    C       _       17      cc      _       _
21      siinä   se      PRON    Pron    Case=Ine|Number=Sing|PronType=Dem
       22      nmod    _       _
22      on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 17      conj    _       _
23      mustat  musta   ADJ     A       Case=Nom|Degree=Pos|Number=Plur 24
      amod    _       _
24      teippaukset     teippaus        NOUN    N       Case=Nom|Number=Plur
    22      nsubj   _       SpaceAfter=No
25      .       .       PUNCT   Punct   _       3       punct   _       _
~~~
