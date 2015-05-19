---
layout: relation
title: 'case'
shortdef: 'case marking'
---

Postpositions and particles attach to a noun phrase.

~~~ sdparse
太郎 が 東京 へ 行く 。\n Taro NOM Tokyo TO go .
case(太郎, が)
case(東京, へ)
nsubj(行く, 太郎)
nmod(行く, 東京)
~~~

~~~ sdparse
太郎 の 家 \n Taro OF house
case(太郎, の)
nmod(家, 太郎)
~~~
