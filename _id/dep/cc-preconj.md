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
cc:preconj(Jakarta-3, Baik)
cc(Bandung-5, maupun)
conj(Jakarta-3, Bandung-5)
cc:preconj(Jakarta-12, Both)
cc(Bandung-14, and)
conj(Jakarta-12, Bandung-14)
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


<!-- Interlanguage links updated Pá kvě 14 11:08:55 CEST 2021 -->
