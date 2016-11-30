---
layout: relation
title: 'expl:pass'
shortdef: 'expletive passive'
---

The relation <code>expl:pass</code> is a sub-class of <code>expl</code>, specific for the passivizing use of the clitic *si*. We can have this construction only for transitive verbs at the 3° singular or plural person form. The verb comes with the clitic pronoun, which does not cover any syntactic or semantic role of the verb. The role of subject is played by the syntactic object, which becomes a passive subject (<code>nsubjpass</code>).

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
