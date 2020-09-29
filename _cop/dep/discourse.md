---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

Function label for discourse particles, such as negative/affirmative answers (yes, …) or interjections (oh! Hah! etc.). The discourse particle is usually connected to the root of its clause using the `discourse` function.

~~~ sdparse
ϩⲁⲙⲟⲓ/CONJ ⲟⲛ/ADV ⲛⲉ/AUX ϣⲁ/AUX ⲧⲉⲧⲛ/PRON ϭⲱ/VERB ⲛ/ADP ⲧⲉⲓ/DET ϩⲉ/NOUN ⲡⲉ/AUX \n Oh, would that you would stop in this way! 

discourse(ϭⲱ, ϩⲁⲙⲟⲓ)
advmod(ϭⲱ, ⲟⲛ)
mark(ϭⲱ, ⲛⲉ)
aux(ϭⲱ, ϣⲁ)
nsubj(ϭⲱ, ⲧⲉⲧⲛ)
cop(ϭⲱ, ⲡⲉ)
nmod(ϭⲱ, ϩⲉ)
det(ϩⲉ, ⲧⲉⲓ)
case(ϩⲉ, ⲛ)
~~~

The appelation particle ⲱ 'oh (NAME)!' is attached to the head of the nominal expression (the vocative), even if it is not the root of the clause:

~~~ sdparse
ⲱ ⲡ ⲛⲟⲩⲧⲉ ⲥⲱⲧⲙ ⲉⲣⲟ ⲓ \n Oh God, hear me! 

vocative(ⲥⲱⲧⲙ, ⲛⲟⲩⲧⲉ)
discourse(ⲛⲟⲩⲧⲉ, ⲱ)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:16 CEST 2020 -->
