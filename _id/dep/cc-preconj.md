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
cc:preconj(Jakarta, Baik)
nsubj(macet, Jakarta)
root(ROOT, macet)
cc(Bandung, maupun)
conj(Bandung, Jakarta)
advmod(sama, macet)
det(macet, nya)
punct(macet, .)
~~~

~~~ sdparse
ROOT Baik saat masih hidup maupun setelah wafat . \n Both while alive and after death .
cc:preconj(Baik, hidup)
mark(hidup, saat)
advmod(hidup, masih)
root(ROOT, hidup)
cc(wafat, maupun)
mark(wafat, setelah)
punct(hidup, .)
~~~


