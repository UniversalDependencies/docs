---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

The `cc' label markes the relation between the first conjunct of a coordinated phrase and its coordinating conjunction. In Irish, a coordinating conjunction takes the form of _agus_ `and', _nó_ `or', _ná_ `than'.
UD takes the first conjunct as the head of a coordinated phrase. (Note that this differs from the Irish Dependency Treebank structure, where the coordinating conjunction is the head of the cooordinated phrase.)

_caidreamh a bhunú le bainc cheannais <b>agus</b> le hinstitiúidí airgeadais i dtíortha eile_ to establish a relationship between banking authorities <b>and</b> financial institutions in other countries.

~~~ conllu
1	caidreamh	caidreamh	NOUN	NOUN	_	3	dobj	_	_
2	a	a	PART	PART	_	3	mark	_	_
3	bhunú	bunú	NOUN	NOUN	_	0	root	_	_
4	le	le	ADP	ADP	_	5	case	_	_
5	bainc	banc	NOUN	NOUN	_	3	nmod	_	_
6	cheannais	ceannas	NOUN	NOUN	_	5	compound	_	_
7	agus	agus	CONJ	CONJ	_	5	cc	_	_
8	le	le	ADP	ADP	_	9	case	_	_
9	hinstitiúidí	institiúid	NOUN	NOUN	_	5	conj	_	_
10	airgeadais	airgeadas	NOUN	NOUN	_	9	compound	_	_
11	i	i	ADP	ADP	_	12	case	_	_
12	dtíortha	tír	NOUN	NOUN	_	9	nmod	_	_
25	eile	eile	DET	DET	_	12	det	_	_
~~~




