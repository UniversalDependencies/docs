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
1	但	_	ADV	_	_	5	advmod	_	but
2	我	_	PRON	_	_	5	nsubj	_	1SG
3	昨天	_	NOUN	_	_	5	obl:tmod	_	yesterday
4	才	_	ADV	_	_	5	advmod	_	only
5	收	_	VERB	_	_	0	root	_	receive
6	到	_	VERB	_	_	5	compound:vv	_	arrive
7	信	_	NOUN	_	_	5	obj	_	letter

1	"But	_	_	_	_	0	_	_	_
2	I	_	_	_	_	0	_	_	_
3	didn't	_	_	_	_	0	_	_	_
4	receive	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	letter	_	_	_	_	0	_	_	_
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
2	現在	_	NOUN	_	_	4	obl:tmod	_	now
3	才	_	ADV	_	_	4	advmod	_	only
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
1	在	_	ADP	_	_	5	case	_	during
2	逮捕	_	VERB	_	_	5	acl	_	arrest
3	賊子	_	NOUN	_	_	2	obj	_	thief
4	的	_	PART	_	_	2	mark:rel	_	REL
5	時候	_	NOUN	_	_	6	obl:tmod	_	time
6	受	_	VERB	_	_	0	root	_	receive
7	了	_	AUX	_	_	6	aux	_	PERF
8	傷	_	NOUN	_	_	6	compound:vo	_	injury

1	"(they	_	_	_	_	0	_	_	_
2	were)	_	_	_	_	0	_	_	_
3	injured	_	_	_	_	0	_	_	_
4	during	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	time	_	_	_	_	0	_	_	_
7	they	_	_	_	_	0	_	_	_
8	arrested	_	_	_	_	0	_	_	_
9	the	_	_	_	_	0	_	_	_
10	thief"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 6 2 obl:tmod	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	三	_	NUM	_	_	2	nummod	_	three
2	天	_	NOUN	_	_	6	obl:tmod	_	CL:days
3	前	_	ADP	_	_	2	case:loc	_	before
4	在	_	ADP	_	_	5	case	_	in
5	九龍灣	_	PROPN	_	_	6	obl	_	Kowloon-Bay
6	失事	_	VERB	_	_	9	acl	_	have-accident
7	的	_	PART	_	_	6	mark:rel	_	REL
8	廢鐵	_	NOUN	_	_	9	compound	_	scrap-metal
9	車輛	_	NOUN	_	_	0	root	_	car

1	"the	_	_	_	_	0	_	_	_
2	wrecked	_	_	_	_	0	_	_	_
3	car	_	_	_	_	0	_	_	_
4	that	_	_	_	_	0	_	_	_
5	was	_	_	_	_	0	_	_	_
6	in	_	_	_	_	0	_	_	_
7	an	_	_	_	_	0	_	_	_
8	accident	_	_	_	_	0	_	_	_
9	in	_	_	_	_	0	_	_	_
10	Kowloon	_	_	_	_	0	_	_	_
11	Bay	_	_	_	_	0	_	_	_
12	three	_	_	_	_	0	_	_	_
13	days	_	_	_	_	0	_	_	_
14	ago"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:33 CEST 2020 -->
