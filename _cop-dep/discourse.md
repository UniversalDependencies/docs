---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
---

Function label for discourse particles, such as negative/affirmative answers (yes, …) or interjections (oh! Hah! etc.). The discourse particle is connected to the root of its clause using the `discourse` function.

~~~ sdparse
ϩⲁⲙⲟⲓ/CONJ ⲟⲛ/ADV ⲛⲉ/AUX ϣⲁ/AUX ⲧⲉⲧⲛ/PRON ϭⲱ/VERB ⲛ/ADP ⲧⲉⲓ/DET ϩⲉ/NOUN ⲡⲉ/AUX \n Oh, would that you would stop in this way! 

discourse(ϭⲱ, ϩⲁⲙⲟⲓ)
advmod(ϭⲱ, ⲟⲛ)
mark(ϭⲱ, ⲛⲉ)
aux(ϭⲱ, ϣⲁ)
nsubj(ϭⲱ, ⲧⲉⲧⲛ)
cop(ϭⲱ, ⲡⲉ)
nmod(ϭⲱ, ϩⲉ)
det(ⲧⲉⲓ, ϩⲉ)
case(ϩⲉ, ⲛ)
~~~
