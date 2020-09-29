---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The case relation for Mandarin Chinese is applied to various particles that mark non-clausal dependents, including the genitive 嘅 _ge3_ (1); prepositions (2, 3), including a handful of "coverbs" (4); and the valence marker 將 _zoeng1_ (5) (see [obl:patient]()); the comparative 比 _bei2_ (6); and the passive 被 _bei6_ when followed by an agent (7) (used only in formal registers).

Note that 的 _de_ has other grammaticalized functions that require the [mark:rel]() relation instead.

Postpositions, also known as "localizers", are labeled with [case:loc]() instead. 

~~~ conllu
# visual-style 1 2 case	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	你	_	PRON	_	_	3	nmod	_	2SG
2	嘅	_	PART	_	_	1	case	_	GEN
3	電話	_	NOUN	_	_	0	root	_	phone

1	"your	_	_	_	_	0	_	_	_
2	phone"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 case	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	5	nsubj	_	1SG
2	喺	_	ADP	_	_	3	case	_	at
3	公司	_	NOUN	_	_	5	obl	_	company
4	已經	_	ADV	_	_	5	advmod	_	already
5	做	_	VERB	_	_	0	root	_	do
6	完	_	VERB	_	_	5	compound:vv	_	complete
7	嘞	_	PART	_	_	5	discourse:sp	_	SP

1	"I	_	_	_	_	0	_	_	_
2	already	_	_	_	_	0	_	_	_
3	completed	_	_	_	_	0	_	_	_
4	it	_	_	_	_	0	_	_	_
5	at	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	office."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 case	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	擺	_	VERB	_	_	0	root	_	put
2	喺	_	ADP	_	_	3	case	_	on/in
3	手	_	NOUN	_	_	1	obl	_	hand
4	度	_	ADP	_	_	3	case:loc	_	place

1	"put	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	on/in	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	hand"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 case	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	為咗	_	ADP	_	_	2	case	_	for-sake-of
2	我	_	PRON	_	_	3	obl	_	1SG
3	嚟	_	VERB	_	_	0	root	_	come

1	"come	_	_	_	_	0	_	_	_
2	for	_	_	_	_	0	_	_	_
3	my"	_	_	_	_	0	_	_	_
4	sake"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 case	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	將	_	ADP	_	_	2	case	_	BA
2	佢哋	_	PRON	_	_	3	obl:patient	_	3PL
3	匿埋	_	VERB	_	_	0	root	_	hide
4	喺	_	ADP	_	_	5	case	_	in
5	房	_	NOUN	_	_	3	obl	_	room
6	度	_	ADP	_	_	5	case:loc	_	place

1	"Hide	_	_	_	_	0	_	_	_
2	them	_	_	_	_	0	_	_	_
3	in	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	room."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 case	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我哋	_	PRON	_	_	5	nsubj	_	1PL
2	比	_	ADP	_	_	3	case	_	COMP
3	佢哋	_	PRON	_	_	5	obl	_	3PL
4	早	_	ADJ	_	_	5	advmod	_	early
5	到	_	VERB	_	_	0	root	_	arrive
6	咗	_	PART	_	_	5	aux	_	PERF

1	"We	_	_	_	_	0	_	_	_
2	arrived	_	_	_	_	0	_	_	_
3	earlier	_	_	_	_	0	_	_	_
4	than	_	_	_	_	0	_	_	_
5	they	_	_	_	_	0	_	_	_
6	did."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 3 case	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	受害者	_	NOUN	_	_	5	nsubj:pass	_	victim
2	終於	_	ADV	_	_	5	case	_	finally
3	被	_	ADP	_	_	4	case	_	by
4	警察	_	NOUN	_	_	5	obl:agent	_	police
5	拯救	_	VERB	_	_	0	root	_	rescue

1	"The	_	_	_	_	0	_	_	_
2	victims	_	_	_	_	0	_	_	_
3	were	_	_	_	_	0	_	_	_
4	finally	_	_	_	_	0	_	_	_
5	rescued	_	_	_	_	0	_	_	_
6	by	_	_	_	_	0	_	_	_
7	the	_	_	_	_	0	_	_	_
8	police."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:21 CEST 2020 -->
