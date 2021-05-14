---
layout: relation
title: 'compound:a'
shortdef: 'adjective compound'
udver: '2'
---

This deprel is a special class of [compound]() that represents adjective compound.
The tokens with this deprel should have an adjective parent. Together with their parents, they form adjectives with new meanings. The position of the _compound:a_ token can be before or after its adjective parent. For example:
* _luar biasa_ "extraordinary/remarkable" = _luar_ "outside" (NOUN) + _biasa_ "ordinary" (ADJ) 
* _buta aksara_ "illiterate" = _buta_ "blind" (ADJ) + _aksara_ "alphabet" (NOUN)

~~~ sdparse
kesuksesan luar biasa \n remarkable success
amod(kesuksesan, biasa)
compound:a(biasa, luar)
amod(success, remarkable)
~~~

~~~ sdparse
dia ketahuan buta aksara \n he was caught illiterate 
nsubj:pass(ketahuan, dia)
xcomp(ketahuan, buta)
compound:a(buta, aksara)
xcomp(caught, illiterate)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:56 CEST 2021 -->
