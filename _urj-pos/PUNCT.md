---
layout: postag
title: 'PUNCT'
shortdef: 'punctuation'
---

### Description

Punctuation marks are non-alphabetical characters and character groups used in
many languages to delimit linguistic units in printed text. Uralic languages
share mostly the same limited set of punctuation marks.

#### Examples

* [fi] _.,!,?,",–_
* [fi] _..._

~̃~~ conllu
# sentence-text: Vähän samanlainen tunne kuin silloin, kun ystävämme vei meidät kerran ylöstuomiokirkon torniin.
1       Vähän   vähän   ADV     Adv     _       2       advmod  _       _
2       samanlainen     samanlainen     ADJ     A       Case=Nom|Degree=Pos|Number=Sing 3       amod    _       _
3       tunne   tunne   NOUN    N       Case=Nom|Number=Sing    0       root    _       _
4       kuin    kuin    SCONJ   C       _       5       mark    _       _
5       silloin silloin ADV     Adv     _       2       advcl   _       SpaceAfter=No
6       ,       ,       PUNCT   Punct   _       9       punct   _       _
7       kun     kun     SCONJ   C       _       9       mark    _       _
8       ystävämme       ystävä  NOUN    N       Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1   9       nsubj
   _       _
9       vei     viedä   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 5       advcl
   _       _
10      meidät  minä    PRON    Pron    Case=Acc|Number=Plur|Person=1|PronType=Prs      9       dobj    _       _
11      kerran  kerran  ADV     Adv     _       9       advmod  _       _
12      ylös    ylös    ADV     Adv     _       14      advmod  _       SpaceAfter=No
13      tuomiokirkon    tuomio#kirkko   NOUN    N       Case=Gen|Number=Sing    14      nmod:poss       _       _
14      torniin torni   NOUN    N       Case=Ill|Number=Sing    9       nmod    _       SpaceAfter=No
15      .       .       PUNCT   Punct   _       3       punct   _       _
~~~
