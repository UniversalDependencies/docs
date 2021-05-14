---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate.
The main predicate of the clause (the verb or predicate adjective) is the governor. 
In Italian, this relation is used only with clitic pronouns in the following cases:

* Pronouns in pronominal verbs which do not have a semantic role, such as *si* in *vergognarsi*.

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

* Existential construction with verb to be (*c'è*, *ci sono*).

~~~ sdparse
In armeria ci sono 300 armature .
expl(sono, ci)
~~~
~~~ sdparse
C'è gente nuova da ieri in pista .
expl(è, C')
~~~

**NB** Whenever possible, clitic pronouns are assigned a label that reflect their grammatical function. For this reason, if the pronoun appears in a reflexive construction of a transitive or intransitive active verb, than it's treated as <code>obj</code> or <code>iobj</code>. 

In Italian clitics also appears in passive and impersonal constructions.
For that, see the subclasses [expl:pass](expl-pass) and [expl:impers](expl-impers).

<!-- Interlanguage links updated Pá kvě 14 11:09:04 CEST 2021 -->
