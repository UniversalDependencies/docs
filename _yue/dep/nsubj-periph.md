---
layout: relation
title: 'nsubj:periph'
shortdef: 'postposed subject'
udver: '2'
---

The default word order in Cantonese is SVO, that is, the subject normally precedes and the object
follows the verb. Other word orders, like VOS, are communicatively marked.
We use the `nsubj:periph` subtype of the [nsubj]() relation for subjects that follow the object.

~~~ sdparse
好 煩 呀 ， 你 ！ \n so annoying , you !
advmod(煩, 好)
discourse:sp(煩, 呀)
nsubj:periph(煩, 你)
punct(你, ，)
punct(煩, ！)
~~~

“You are so annoying!”

<!-- Interlanguage links updated Pá kvě 14 11:09:14 CEST 2021 -->
