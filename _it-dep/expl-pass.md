---
layout: relation
title: 'expl:pass'
shortdef: 'expletive passive'
---

The relation <code>expl:pass</code> is a sub-class of <code>expl</code>, specific for the passivizing use of the clitic *si*. It is admitted only when the verb is at the 3° singular or plural person form. 

The role of subject is played by the syntactic object, which becomes a passive subject (<code>nsubjpass</code>).

~~~ sdparse
Fra quattro giorni si aprirà il Salone internazionale di l' automobile
expl:pass(aprirà, si)
nsubjpass(aprirà, Salone)
~~~
~~~ sdparse
Si puniscano i praticanti stregnoni .
expl:pass(puniscano, Si)
nsubjpass(puniscano, praticanti)
~~~
