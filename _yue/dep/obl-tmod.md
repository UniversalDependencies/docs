---
layout: relation
title: 'obl:tmod'
shortdef: 'temporal modifier'
udver: '2'
---

The relation `obl:tmod` is used for temporal nouns acting as temporal modifiers of clauses.

~~~ conllu
# visual-style 5 3 obl:tmod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	但係	_	ADV	_	_	5	advmod	_	but
2	我	_	PRON	_	_	5	nsubj	_	1SG
3	琴日	_	NOUN	_	_	5	obl:tmod	_	yesterday
4	先至	_	ADV	_	_	5	advmod	_	only-then
5	收	_	VERB	_	_	0	root	_	receive
6	到	_	VERB	_	_	5	compound:vv	_	arrive
7	信	_	NOUN	_	_	5	obj	_	letter
8	喎	_	PART	_	_	5	discourse:sp	_	SP

1	"But	_	_	_	_	0	_	_	_
2	I	_	_	_	_	0	_	_	_
3	didn't	_	_	_	_	0	_	_	_
4	receive	_	_	_	_	0	_	_	_
5	any	_	_	_	_	0	_	_	_
6	letters	_	_	_	_	0	_	_	_
7	until	_	_	_	_	0	_	_	_
8	yesterday."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 2 obl:tmod	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	到	_	ADP	_	_	2	case	_	until
2	而家	_	NOUN	_	_	4	obl:tmod	_	now
3	先	_	ADV	_	_	4	advmod	_	only
4	走	_	VERB	_	_	0	root	_	go

1	"only	_	_	_	_	0	_	_	_
2	now	_	_	_	_	0	_	_	_
3	leave"	_	_	_	_	0	_	_	_

~~~

The temporal noun may be part of a complex noun phrase.

~~~ conllu
# visual-style 6 5 obl:tmod	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	喺	_	ADP	_	_	5	case	_	during
2	捉	_	VERB	_	_	5	acl	_	catch
3	賊	_	NOUN	_	_	2	obj	_	thief
4	嘅	_	PART	_	_	2	mark:rel	_	REL
5	時候	_	NOUN	_	_	6	obl:tmod	_	time
6	受	_	VERB	_	_	0	root	_	receive
7	咗	_	AUX	_	_	6	aux	_	PERF
8	傷	_	NOUN	_	_	6	compound:vo	_	injury

1	"(they	_	_	_	_	0	_	_	_
2	were)	_	_	_	_	0	_	_	_
3	injured	_	_	_	_	0	_	_	_
4	during	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	time	_	_	_	_	0	_	_	_
7	they	_	_	_	_	0	_	_	_
8	were	_	_	_	_	0	_	_	_
9	catching	_	_	_	_	0	_	_	_
10	thieves"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 7 3 obl:tmod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	佢哋	_	PRON	_	_	7	nsubj	_	three
2	三	_	NUM	_	_	3	nummod	_	three
3	日	_	NOUN	_	_	7	obl:tmod	_	CL:days
4	前	_	ADP	_	_	3	case:loc	_	before
5	喺	_	ADP	_	_	6	case	_	in
6	九龍灣	_	PROPN	_	_	7	obl	_	Kowloon-Bay
7	失事	_	VERB	_	_	0	root	_	have-accident

1	"they	_	_	_	_	0	_	_	_
2	had	_	_	_	_	0	_	_	_
3	an	_	_	_	_	0	_	_	_
4	accident	_	_	_	_	0	_	_	_
5	in	_	_	_	_	0	_	_	_
6	Kowloon	_	_	_	_	0	_	_	_
7	Bay	_	_	_	_	0	_	_	_
8	three	_	_	_	_	0	_	_	_
9	days	_	_	_	_	0	_	_	_
10	ago"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
