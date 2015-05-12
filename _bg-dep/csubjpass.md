---
layout: relation
title: 'csubjpass'
shortdef: 'clausal passive subject'
---

This document is a placeholder for the language-specific documentation
for `csubjpass`.

A clausal passive subject is a clausal syntactic subject of a passive
clause (or more generally, any voice where the proto-agent argument does not become the subject 
of the clause).

Participle passive (the meaning is “It is said that belief will save us.”)

~~~ sdparse
Казано е, вярата ще ни спаси . \n Said is, belief will us save .
csubjpass(Казано, спаси)
csubjpass(Said, save)
~~~

Reflexive passive (the meaning is “It is costly for one on our Earth to be a human.”)

~~~ sdparse
Скъпо се плаща на тая земя да бъдеш човек . \n Costly REFL.pay at this land to be a-human .
csubjpass(плаща, човек)
csubjpass(REFL.pay, a-human)
~~~
