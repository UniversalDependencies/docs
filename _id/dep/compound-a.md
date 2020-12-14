---
layout: relation
title: 'compound:a'
shortdef: 'adjective compound'
udver: '2'
---

This is a special class of [compound]() to represent adjective compound.
The token with this deprel has an adjective parent. For example:
* _luar biasa_ "extraordinary/remarkable" = _luar_ "outside" (NOUN) + _biasa_ "ordinary" (ADJ) 
* _buta aksara_ "illiterate" = _buta_ "blind" (ADJ) + _aksara_ "alphabet" (NOUN)

~~~ sdparse
kesuksesan luar biasa \n remarkable success
amod(kesuksesan, biasa)
compound:a(biasa, luar)
~~~

~~~ sdparse
dia ketahuan buta aksara \n he was caught illiterate 
nsubj:pass(ketahuan, dia)
xcomp(ketahuan, buta)
compound:a(buta, aksara)
~~~
