---
layout: relation
title: 'parataxis:insert'
shortdef: 'paratactic insert'
udver: '2'
---

The specialization is used in the PoSTWITA, a tweet corpus, for parenthetical clauses that cannot be considered independent from the governing predicate

~~~ sdparse
Monti è sempre più forte temo
parataxis:insert(forte, temo)
~~~

In KIParlaForest it is also used for a short reporting clause that is inserted into, or added after, the clause whose content it reports or comments on. The inserted clause consists of a verb of saying or knowing (*dicono* "they say", *sai* "you know"); it is not an argument of the verb and does not introduce the content, so it is not [ccomp]() or [ccomp:reported](ccomp-reported). The inserted verb is attached to the head of the clause it refers to.

~~~ conllu
# text = non lo so sai
1	non	non	ADV	_	_	3	advmod	_	_
2	lo	lo	PRON	_	_	3	obj	_	_
3	so	sapere	VERB	_	_	0	root	_	_
4	sai	sapere	VERB	_	_	3	parataxis:insert	_	_
~~~

In the following example the first *dicono* is the root and governs the reported content; the second one, at the end, repeats the reporting after the long reported stretch and is attached to *piange*.

~~~ conllu
# text = che poi dicono che quando viene giù piange perché non vuol lasciare dicono
1	che	che	SCONJ	_	_	3	mark	_	_
2	poi	poi	ADV	_	_	3	advmod	_	_
3	dicono	dire	VERB	_	_	0	root	_	_
4	che	che	SCONJ	_	_	6	mark	_	_
5	quando	quando	SCONJ	_	_	6	mark	_	_
6	viene	venire	VERB	_	_	3	ccomp	_	_
7	giù	giù	ADV	_	_	6	advmod	_	_
8	piange	piangere	VERB	_	_	3	xcomp	_	_
9	perché	perché	SCONJ	_	_	12	mark	_	_
10	non	non	ADV	_	_	12	advmod	_	_
11	vuol	volere	AUX	_	_	12	aux	_	_
12	lasciare	lasciare	VERB	_	_	8	advcl	_	_
13	dicono	dire	VERB	_	_	8	parataxis:insert	_	_
~~~

It differs from [parataxis:parenth](parataxis-parenth), which marks a parenthetical clause with content of its own (*così come descritto sul programma*), and from [parataxis:restart](parataxis-restart), where the speaker abandons a construction and restarts it.


<!-- Interlanguage links updated Út 30. června 2026, 11:00:40 CEST -->
