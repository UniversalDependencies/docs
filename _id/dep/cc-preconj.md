---
layout: relation
title: 'cc:preconj'
shortdef: 'preconjunct'
udver: '2'
---

This is a subtype of [cc]().
This deprel is used in Indonesian grammar for word _baik_ in clause _baik A maupun B_ "both A and B". For example:
* _Baik Jakarta maupun Bandung sama macetnya._ "Both Jakarta and Bandung are equally congested.".
* _Baik saat masih hidup maupun setelah wafat._ "Both while alive and after death."


~~~ sdparse
ROOT Baik Jakarta maupun Bandung sama macet nya . \n Both Jakarta and Bandung are equally congested .
cc:preconj(Jakarta-2, Baik)
nsubj(macet, Jakarta-2)
root(ROOT, macet)
cc(Bandung-4, maupun)
conj(Jakarta-2, Bandung-4)
advmod(sama, macet)
det(macet, nya)
punct(macet, .)
cc:preconj(Jakarta-10, Both)
cc(Bandung-12, and)
conj(Jakarta-10, Bandung-12)
~~~

~~~ sdparse
ROOT Baik saat masih hidup maupun setelah wafat . \n Both while alive and after death .
cc:preconj(hidup, Baik)
mark(hidup, saat)
advmod(hidup, masih)
root(ROOT, hidup)
cc(wafat, maupun)
mark(wafat, setelah)
punct(hidup, .)
cc:preconj(alive, Both)
cc(death, and)
conj(alive, death)
~~~


