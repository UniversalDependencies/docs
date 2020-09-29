---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. The main predicate of the clause (the verb or predicate adjective) is the governor. 
In Italian, this relation is used only with clitic pronouns in the following cases:

*	Pronouns in pronominal verbs which do not have a semantic role, such as *si* in *vergognarsi*.

~~~ sdparse
Allora mi sono innervosita .
expl(innervosita, mi)
~~~
~~~ sdparse
Dove si trova Hebron ?
expl(trova, si)
~~~

* For verbs which are true reflexives.

~~~ sdparse
E si massacrano ancora .
expl(massacrano, si)
~~~
~~~ sdparse
Si erano slegati tra loro .
expl(slegati, Si)
~~~

*	Existential construction with verb to be (*c'è*, *ci sono*).

~~~ sdparse
In armeria ci sono 300 armature .
expl(sono, ci)
~~~
~~~ sdparse
C'è gente nuova da ieri in pista .
expl(è, C')
~~~

**NB** Whenever possible, clitic pronouns are assigned a label that reflect their grammatical function. For this reason, if the pronoun appears in a reflexive construction of a transitive or intransitive active verb, than it's treated as <code>dobj</code> or <code>iobj</code>. 
In Italian clitics also appears in passive and impersonal constructions. For that, see the subclasses [expl:pass]() and [expl:impers]().


The relation <code>expl:impers</code> is a sub-class of <code>expl</code>, specific for the impersonal use of the clitic pronoun *si*. We can have an impersonal construction for every verb (transitive or intransitive) when the role of subject is played by the clitic itself, as an undefined subject.

~~~ sdparse
Si prevede che viaggerà .
expl:impers(prevede, Si)
~~~

If there's a clitic in a construction with a modal or an auxiliary verb, than generally it is an impersonal construction. 

~~~ sdparse
Si può procedere a sequestro .
expl:impers(procedere, Si)
~~~

In the construction with both *ci* and *si* (construction of the impersonal *ci*), the first clitic is marked as <code>expl</code>, while *si* as <code>expl:impers</code>, as follows.  

~~~ sdparse
E' stata quello che ci si attendeva .
expl:impers(attendeva, si)
expl(attendeva, ci)
~~~

The relation <code>expl:pass</code> is a sub-class of <code>expl</code>, specific for the passivizing use of the clitic *si*. We can have this construction only for transitive verbs at the 3° singular or plural person form. The verb comes with the clitic pronoun, which does not cover any syntactic or semantic role of the verb. The role of subject is played by the syntactic object, which becomes a passive subject (<code>nsubjpass</code>).

~~~ sdparse
Fra quattro giorni si aprirà il Salone internazionale di l' automobile
expl:pass(aprirà, si)
nsubj:pass(aprirà, Salone)
~~~
~~~ sdparse
Si puniscano i praticanti stregnoni .
expl:pass(puniscano, Si)
nsubj:pass(puniscano, praticanti)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:31 CEST 2020 -->
