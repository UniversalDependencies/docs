---
layout: relation
title: 'parataxis:parenth'
shortdef: 'parenthetical'
udver: '2'
---

The specialization is used in KIParla, a corpus of spoken Italian, for parenthetical clauses inserted inside another clause, which comment on or qualify it and after which the main clause continues. The parenthetical is attached to the head of the clause it interrupts. It differs from [parataxis:insert](parataxis-insert), which is used for an inserted reporting clause (*dicono*, *sai*), and from [parataxis:restart](parataxis-restart), where the speaker abandons the main construction.

~~~ conllu
# text = il colloquio consiste così come descritto sul programma nella analisi
1	il	il	DET	_	_	2	det	_	_
2	colloquio	colloquio	NOUN	_	_	3	nsubj	_	_
3	consiste	consistere	VERB	_	_	0	root	_	_
4	così	così	ADV	_	_	6	advmod	_	_
5	come	come	SCONJ	_	_	6	mark	_	_
6	descritto	descrivere	VERB	_	_	3	parataxis:parenth	_	_
7-8	sul	_	_	_	_	_	_	_	_
7	su	su	ADP	_	_	9	case	_	_
8	il	il	DET	_	_	9	det	_	_
9	programma	programma	NOUN	_	_	6	obl	_	_
10-11	nella	_	_	_	_	_	_	_	_
10	in	in	ADP	_	_	12	case	_	_
11	la	il	DET	_	_	12	det	_	_
12	analisi	analisi	NOUN	_	_	3	obl	_	_
~~~
