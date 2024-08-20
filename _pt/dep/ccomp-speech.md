---
layout: relation
title: 'ccomp:speech'
shortdef: 'direct quotation'
udver: '2'
---

The `ccomp:speech` relation is a specialization of `ccomp` used for reported speech through direct quotation, when the exact spoken words are stated in the sentence.

~~~ sdparse
" A busca por reparos aumentou cerca de 30 % em este ano " , diz Dalva . \n " The search for repairs increased by around 30 % this year " , says Dalva .

ccomp:speech(diz,aumentou)
punct(aumentou,"-1)
punct(aumentou,"-14)
punct(aumentou,,)
~~~

~~~ sdparse
A polícia informou : " Foram 40 mil vítimas de o golpe " . \n The police reported : " There were 40 thousand victims of the scam . "

ccomp:speech(informou,Foram)
punct(Foram,"-5)
punct(Foram,"-13)
punct(Foram,:)
~~~

Direct quotation can also be used without quotation marks:

~~~ sdparse
Foram 40 mil vítimas de o golpe , informou a polícia . \n There were 40 thousand victims of the scam , the police reported .

ccomp:speech(informou,Foram)
punct(Foram,,)
~~~

When the reported speech is introduced by `SCONJ`, the clause is annotated as a regular `ccomp`:

~~~ sdparse
A polícia informou que foram 40 mil vítimas do golpe . \n The police reported that there were 40 thousand victims of the scam .

ccomp(informou,foram)
mark(foram,que)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:53 CEST -->
