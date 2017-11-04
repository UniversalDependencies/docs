---
layout: postag
title: 'INTJ'
shortdef: 'interjection'
---

### Description

An interjection is a word that is used most often as an exclamation or part of
an exclamation. It typically expresses an emotional reaction, is not
syntactically related to other accompanying expressions, and may include a
combination of sounds not otherwise found in the language.  Interjections are
used for many spoken language tokens.


Enclitic discourse particles are not, at the moment, analysed at all.

Some interjections feature rich morphology or have counterparts in other parts
of speech.

#### Examples

* [fi] _nam_ "yum", _voi_ "oh", _vittu_ "fuck"

~~~ conllu
# sentence-text: Ja ehkä pakastesushia, nam!<3
1       Ja      ja      CONJ    C       _       3       cc      _       _
2       ehkä    ehkä    ADV     Adv     _       3       advmod  _       _
3       pakastesushia   pakaste#sushi   NOUN    N       Case=Par|Number=Sing    0       root    _       SpaceAfter=No
4       ,       ,       PUNCT   Punct   _       5       punct   _       _
5       nam     nam     INTJ    Interj  _       3       discourse       _       SpaceAfter=No
6       !       !       PUNCT   Punct   _       3       punct   _       SpaceAfter=No
7       <3      <3      SYM     Symb    _       3       discourse       _       _
~̃~~

~~~ conllu
#16987
1       Voi     voi     INTJ    Pcle,Interj     _       2       dep     _       Missed-Deprel=attr
2       vittu   vittu   INTJ    Pcle,Interj     _       4       dep     _       _
3       mikä    mikä    DET     Pron,Interr,Sg,Nom      Case=Nom|Number=Sing|PronType=Int       4       det     _
       _
4       jätkä   jätkä   NOUN    N,Sg,Nom        Case=Nom|Number=Sing    0       root    _       _
5       .       .       PUNCT   Pun     _       4       punct   _       _
~~~

