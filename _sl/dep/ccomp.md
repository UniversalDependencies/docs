---
layout: relation
title:  'ccomp'
shortdef : 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective. 

~~~ sdparse
Ugotovili so tudi , da je izvleček baldrijana podaljšal delovanje barbituratov . \n Found-out they-did also , that aux-PAST valerian extract prolonged effects of-barbiturates .
ccomp(Ugotovili,podaljšal)
ccomp(Found-out,prolonged)
~~~
~~~ sdparse
Prepričan sem , da je terjalo veliko korajže , je svečano rekel Tom . \n Convinced I-am , that it took a-lot-of courage , aux-PAST ceremoniously said Tom . 
ccomp(Prepričan,terjalo)
cop(Prepričan,sem)
ccomp(Convinced,took)
cop(Convinced,I-am)
~~~
~~~ sdparse
Udeležence že opozarjajo , naj med tekom ne jemljejo vode iz rok neznanih gledalcev \n Participants already they-are-warning , to during race not take water from hands of-unknown spectators
ccomp(opozarjajo,jemljejo)
ccomp(they-are-warning,take)
~~~

In predicative constructions with the copula **_biti_** '_to be_', such as in the sentence _Pomembno je, da ostanemo mirni_ 'It is important that we stay calm.', the Slovenian treebanks currently analyse such clauses as clausal subjects ([csubj]()) rather than clausal complements (`ccomp`).
<!-- Interlanguage links updated Po lis 14 15:35:14 CET 2022 -->
