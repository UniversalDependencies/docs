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
Baik Jakarta maupun Bandung sama macet nya . \n Both Jakarta and Bandung are equally congested .
cc:preconj(Jakarta-2, Baik)
cc(Bandung-4, maupun)
conj(Jakarta-2, Bandung-4)
cc:preconj(Jakarta-11, Both)
cc(Bandung-13, and)
conj(Jakarta-11, Bandung-13)
~~~

~~~ sdparse
Baik saat masih hidup maupun setelah wafat . \n Both while alive and after death .
cc:preconj(hidup, Baik)
cc(wafat, maupun)
conj(hidup, wafat)
cc:preconj(alive, Both)
cc(death, and)
conj(alive, death)
~~~


<!-- Interlanguage links updated St lis 3 20:58:44 CET 2021 -->
