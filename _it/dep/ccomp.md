---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement (<code>ccomp</code>) of a verb or a verbal predicate is a dependent clause which is a core argument. In a clausal complement the subject is not determined by obligatory control, either because the clause has its own overt subject or because the subject is arbitrary or determined anaphorically. Such clausal complements can have the following structures: 

* finite clausal complement of verbal head

~~~ sdparse
Le ha detto/VERB che il rapimento era avvenuto/VERB a scopo di furto
ccomp(detto, avvenuto)
nsubj(avvenuto, rapimento)
mark(avvenuto, che)
~~~
~~~ sdparse
Non so se/VERB qualche agenzia organizza/VERB viaggi
ccomp(so, organizza)
nsubj(organizza, agenzia)
mark(organizza, se)
~~~
~~~ sdparse
zio Adelio avrebbe preferito/VERB studiassero/VERB in Italia
ccomp(preferito, studiassero)
aux(preferito, avrebbe)
nsubj(preferito, zio)
~~~
~~~ sdparse
Dimmi/VERB dove si trova/VERB la compagnia DuPont .
ccomp(Dimmi, trova)
nsubj(trova, compagnia)
~~~

* finite clausal complement of adjectival head (as part of a verbal predicate)

~~~ sdparse
era sicuro/ADJ che non ci fossero/VERB pericoli
ccomp(sicuro, fossero)
mark(fossero, che)
nsubj(fossero, pericoli)
~~~
~~~ sdparse
Sono convinto/ADJ che la storia di Moretti sia segnata/VERB da le sue origini romane .
ccomp(convinto, segnata)
auxpass(segnata, sia)
nsubjpass(segnata, storia)
~~~
~~~ sdparse
Certo che possiedo delle prove .
ccomp(Certo, possiedo)
~~~

* infinite clausal complement of verbal head

~~~ sdparse
bisogna/VERB avviare/VERB[VerbForm=Inf] un dialogo
ccomp(bisogna, avviare)
dobj(avviare, dialogo)
~~~
~~~ sdparse
si fa/VERB per dire/VERB[VerbForm=Inf]
ccomp(fa, dire)
mark(dire, per)
~~~
~~~ sdparse
Mi fecero pagare/VERB[VerbForm=Inf] per liberare/VERB[VerbForm=Inf] due ostaggi .
ccomp(fecero, pagare)
iobj(fecero, mi)
advcl(pagare, liberare)
~~~

* infinite clausal complement of *essere*. In this case, the copula is treated as a head

~~~ sdparse
il problema allora non è domandar/VERB[VerbForm=Inf] si
ccomp(è, domandar)
expl(domandar, si)
neg(è, non)
~~~
~~~ sdparse
La differenza è che Tudjman ha sempre giocato/VERB di rimessa .
nsubj(è, differenza)
ccomp(è, giocato)
nsubj(giocato, Tudjman)
aux(giocato, ha)
~~~
~~~ sdparse
C' era sempre Franca a risolvere/VERB[VerbForm=Inf] i problemi .
ccomp(era, risolvere)
nsubj(era, Franca)
mark(risolvere, a)
~~~

**NB** Note that if the subject of the clausal complement is controlled (that is, it is the same as the higher subject, object or indirect object, with no other possible interpretation) the appropriate relation is [xcomp]().
<!-- Interlanguage links updated Út zář 29 20:23:22 CEST 2020 -->
