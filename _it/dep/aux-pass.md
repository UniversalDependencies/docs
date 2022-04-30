---
layout: relation
title: 'aux:pass'
shortdef: 'passive auxiliary'
udver: '2'
---

A passive auxiliary (*essere*/*venire*) of a clause is a non-main verb of the clause which conveys information about the passive voice. 

~~~ sdparse
L' escursione era guidata da Castiglioni
aux:pass(guidata, era)
~~~
~~~ sdparse
Le norme sono determinate da leggi speciali
aux:pass(determinate, sono)
~~~

Sometimes the verb *essere* to be can be substituted by other verbs that assume the same function, like *andare* (to go) and *venire* (to come). 

*Andare* is used both to express a very strong need (see the first example below), or for passive progressive forms with an impersonal value.

~~~ sdparse
I programmi vanno coordinati .
aux:pass(vanno, coordinati)
~~~
~~~ sdparse
Il documento è andato perduto .
aux:pass(perduto, andato)
aux(perduto, è)
~~~

*Venire* is used as <code>aux:pass</code> to clearly express the passive information when the main verb is ambiguous: some verbs, like *lavare* to wash, with *essere* as auxiliary might seem a description of a property rather than passice forms, while with *venire* the passive construction is evident (*la finestra è lavata* vs *la finestra viene lavata [da qualcuno]*). Note in fact that *venire* is only used for simple tenses, because in past tenses the passive action is expressed by the participle (see the next section for how to annotate it).

~~~ sdparse
Quando venne costruito il Titanic ?
aux:pass(costruito, venne)
~~~
~~~ sdparse
Cosa viene prodotto da la Oracle ?
aux:pass(prodotto, viene)
~~~
~~~ sdparse
La sua immagine viene liquidata
aux:pass(liquidata, viene)
~~~

Note that periphrastic tenses in passive constructions are marked as follows, by distinguishing between the passive auxiliary (i.e. that immediately preceding the verbal head) which is marked as <code>aux:pass</code> and the tense auxiliaries (the preceding ones) which are marked as [aux]().

~~~ sdparse
è stato trovato
aux:pass(trovato, stato)
aux(trovato, è)
~~~
~~~ sdparse
potrebbe essere stato trovato
aux:pass(trovato, stato)
aux(trovato, essere)
aux(trovato, potrebbe)
~~~
<!-- Interlanguage links updated St lis 3 20:58:41 CET 2021 -->
