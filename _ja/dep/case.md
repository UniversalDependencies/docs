---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

In Japanese, case markers are particles attaching to a noun phrase.
The particles are tagged as "[ADP]()" in UD Japanese.

Typical case markers are as follows:

- が / *ga* for nominative
- を / *o* for accusative
- に / *ni* for dative, locative etc.
- の / *no* for genitive
- へ / *e* for locative etc.

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
