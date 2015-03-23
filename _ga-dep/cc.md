---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

The `cc' label markes the relation between the first conjunct of a coordinated phrase and its coordinating conjunction. In Irish, a coordinating conjunction takes the form of _agus_ `and', _nó_ `or', _ná_ `than'.
UD takes the first conjunct as the head of a coordinated phrase. (Note that this differs from the Irish Dependency Treebank structure, where the coordinating conjunction is the head of the cooordinated phrase.)

_caidreamh a bhunú le bainc cheannais <b>agus</b> le hinstitiúidí airgeadais i dtíortha eile_ to establish a relationship between central banks <b>and</b> financial institutions in other countries.

~~~ conllx
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


Coordination of more than two elements is as follows (note there is also embedded coordination within the main coordinated phrase).

_Gáis a úsáidtear i gcannaí aerasóil áirithe, i gcuisneoirí agus i ndéantús cupán agus coimeádán plaisteach áirithe_ \n `Gas that is used in some aerosol cans, in refrigerators <b>and</b> in the making of some plastic cups <b>and</b> containers'

~~~ conllx
1	gcannaí	canna	NOUN	NOUN	_	3	root	_	_
2	aerasóil	aerasól	NOUN	NOUN	_	1	compound	_	_
3	áirithe	áirithe	ADJ	ADJ	_	1	amod	_	_
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	i	i	ADP	ADP	_	6	case	_	_
6	gcuisneoirí	cuisneoir	NOUN	NOUN	_	1	conj	_	_
7	agus	agus	CONJ	CONJ	_	1	cc	_	_
8	i	i	ADP	ADP	_	9	case	_	_
9	ndéantús	déantús	NOUN	NOUN	_	1	conj	_	_
10	cupán	cupán	NOUN	NOUN	_	9	compound	_	_
11	agus	agus	CONJ	CONJ	_	10	cc	_	_
12	coimeádán	coimeádán	NOUN	NOUN	_	10	conj	_	_
13	plaisteach	plaisteach	ADJ	ADJ	_	12	amod	_	_
14	áirithe	áirithe	ADJ	ADJ	_	12	amod	_	_
~~~


