---
layout: relation
title: 'nmod:lmod'
shortdef: 'noun modifier that describes the position/location relative to its parent noun'
udver: '2'
---

This is a special class of [nmod]().
This deprel is used in Javanese grammar for locative nouns such as:
* _sajroning_ "inside" such as in _ing sajroning_ "in" + _bak sampah_ "waste bin" = "in the waste bin"

The syntax is similar with locative nouns for Indonesian.

~~~ sdparse
ing sajroning bak sampah \n in the waste bin
case(bak, ing)
nmod:lmod(bak, sajroning)
nmod(bak, sampah)
case(bin, in)
~~~


<!-- Interlanguage links updated Pá kvě 14 11:09:11 CEST 2021 -->
