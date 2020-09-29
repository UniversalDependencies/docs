---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Czech uses a combination of oblique morphological cases and prepositions to express semantic case.
Unlike in the original annotation of the Prague Dependency Treebank, prepositions in UD are treated as dependents
of the noun they attach to. The relation between the noun and the preposition is labeled `case`.

~~~ sdparse
V pátek.Acc jsme si cestou.Ins do Francie.Gen povídali o té události.Loc . \n On Friday we-have ourselves during-the-journey to France talked about the event .
case(pátek.Acc, V)
case(Friday, On)
case(Francie.Gen, do)
case(France, to)
case(události.Loc, o)
case(event, about)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:20 CEST 2020 -->
