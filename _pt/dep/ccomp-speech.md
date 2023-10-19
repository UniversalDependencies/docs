---
layout: relation
title: 'ccomp:speech'
shortdef: 'direct speech'
udver: '2'
---

The `ccomp:speech` relation is a specialization of `ccomp` used for direct speech, when the exact spoken words are stated in the sentence.

~~~ sdparse
" A busca por reparos aumentou cerca de 30 % em este ano " , diz Dalva . \n " The search for repairs increased by around 30 % this year " , says Dalva .

ccomp:speech(diz,aumentou)
punct(aumentou,"-1)
punct(aumentou,"-14)
punct(aumentou,,)
~~~

Direct speech can also be encoded without quotes or any other marks:

~~~ sdparse
Foram 40 mil vítimas de o golpe , informou a polícia . \n There were 40 thousand victims of the coup , the police reported .

ccomp:speech(informou,Foram)
punct(Foram,,)
~~~
