---
layout: base
title:  'npadvmod'
shortdef : 'noun phrase as adverbial modifier'
---


## npadvmod : noun phrase as adverbial modifier
This relation captures various places where something syntactically a noun phrase (NP) is used as an adverbial modifier in a sentence.   These usages include: (i) a measure phrase, which is the relation between the head of an ADJP/ADVP/PP and the head of a measure phrase modifying the ADJP/ADVP; (ii) noun phrases giving an extent inside a VP which are not objects; (iii) financial constructions involving an adverbial or PP-like NP, notably the following construction *$5 a share*, where the second NP means "per share"; (iv) floating reflexives; and (v) certain other absolutive NP constructions. A temporal modifier (tmod) is a subclass of npadvmod which is distinguished as a separate relation. 

~~~ sdparse
The director is 65 years old
npadvmod(old, years)
~~~



~~~ sdparse
6 feet long
npadvmod(long, feet)
~~~



~~~ sdparse
Shares eased a fraction
npadvmod(eased, fraction)
~~~



~~~ sdparse
IBM earned $ 5 a share
npadvmod($, share)
~~~



~~~ sdparse
The silence is itself significant
npadvmod(significant, itself)
~~~

 

