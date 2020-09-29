---
layout: relation
title: 'csubj:pass'
shortdef: 'clausal passive subject'
udver: '2'
---

A clausal subject with a value: passive is a clausal syntactic subject of a passive
clause (or more generally, any voice where the proto-agent argument does not become the subject 
of the clause).

Participle passive (the meaning is “It is said that belief will save us.”)

~~~ sdparse
Казано е, вярата ще ни спаси . \n Said is, belief will us save .
csubj:pass(Казано, спаси)
csubj:pass(Said, save)
~~~

Reflexive passive (the meaning is “It is costly for one on our Earth to be a human.”)

~~~ sdparse
Скъпо се плаща на тая земя да бъдеш човек . \n Costly REFL.pay at this land to be a-human .
csubj:pass(плаща, бъдеш)
csubj:pass(REFL.pay, be)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:49 CEST 2020 -->
