---
layout: postag
title: 'DET'
shortdef: 'determiner'
---

### Description

Determiners are words that modify nouns or noun phrases. Determiners are 
scarcely used in Uralic grammar tradition, however, Hungarian has proper
 articles that are analysed as determiners.

Some pronouns, demonstratives for example, could be re-analysed as determiners,
as well as some non-inflecting adjectives.

#### Examples

* [fi] _se_ "that", _yksi_ "one"
* [fi] _mikä_ "what"

~~~ conllu
#13770
1       Syököön syödä   VERB    V,Act,Imprt,Sg3 Mood=Imp|Number=Sing|Person=3|Voice=Act 0       root    _       _
2       kannon  kanto   NOUN    N,Sg,Gen        Case=Gen|Number=Sing    3       nmod    _       _
3       nokassa nokka   NOUN    N,Sg,Ine        Case=Ine|Number=Sing    1       nmod    _       _
4       tai     tai     CONJ    Pcle,CC _       3       cc      _       _
5       pihalla piha    NOUN    N,Sg,Ade        Case=Ade|Number=Sing    3       conj    _       _
6       ,       ,       PUNCT   Pun     _       3       punct   _       FTB-rel=phrm
7       ihan    ihan    ADV     Pcle    _       12      advmod  _       _
8       missä   missä   ADV     Adv,Interr      PronType=Int    12      advmod  _       _
9       sille   se      DET     Pron,Dem,Sg,All Case=All|Number=Sing|PronType=Dem       10      det     _       _
10      ryökäleelle     ryökäle NOUN    N,Sg,All        Case=All|Number=Sing    12      nmod    _       _
11      parhaiten       parhaiten       ADV     Adv,Sup Degree=Sup      12      advmod  _       _
12      maistuu maistua VERB    V,Act,Ind,Pres,Sg3      Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act      3
       conj    _       _
13      .       .       PUNCT   Pun     _       12      punct   _       _
~~~

~~~ conllu
#16987
1       Voi     voi     INTJ    Pcle,Interj     _       2       dep     _       Missed-Deprel=attr
2       vittu   vittu   INTJ    Pcle,Interj     _       4       dep     _       _
3       mikä    mikä    DET     Pron,Interr,Sg,Nom      Case=Nom|Number=Sing|PronType=Int       4       det     _
       _
4       jätkä   jätkä   NOUN    N,Sg,Nom        Case=Nom|Number=Sing    0       root    _       _
5       .       .       PUNCT   Pun     _       4       punct   _       _
~~~
