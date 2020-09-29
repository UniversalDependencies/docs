---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

The `mark` relation applies to a function word that marks a subordinate clause. It can be distributed at its beginning (1,3) or at its end (2,4). We take a broad definition of "subordinate" to include adverbial clauses of any kind (see [advcl]()).

For relative clauses, nominalized clauses, and adjectives formed with 嘅 _ge3_, see [mark:rel](). For the manner adverbializer 噉 _gam2_, see [mark:adv]().

~~~ conllu
# visual-style 3 1 mark	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	如果	_	SCONJ	_	_	3	mark	_	if
2	我	_	PRON	_	_	3	nsubj	_	1SG
3	買	_	VERB	_	_	0	root	_	buy
4	藥	_	NOUN	_	_	3	obj	_	medicine
5	返嚟	_	VERB	_	_	3	compound:dir	_	come-back
6	...	_	PUNCT	_	_	3	punct	_	_

1	"If	_	_	_	_	0	_	_	_
2	I	_	_	_	_	0	_	_	_
3	buy	_	_	_	_	0	_	_	_
4	medicine	_	_	_	_	0	_	_	_
5	back..."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 3 mark	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	要	_	AUX	_	_	8	advcl	_	want
2	玩	_	VERB	_	_	1	xcomp	_	play
3	嘅話	_	SCONJ	_	_	1	mark	_	COND
4	就	_	ADV	_	_	8	advmod	_	then
5	將	_	ADP	_	_	7	case	_	ZOENG
6	件	_	NOUN	_	_	7	det	_	CL
7	事	_	NOUN	_	_	8	obl	_	affair
8	搞	_	VERB	_	_	0	root	_	make
9	大	_	ADJ	_	_	8	compound:vv	_	big
10	佢	_	ADJ	_	_	8	expl	_	3SP

1	"If	_	_	_	_	0	_	_	_
2	somebody	_	_	_	_	0	_	_	_
3	wants	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	play,	_	_	_	_	0	_	_	_
6	then	_	_	_	_	0	_	_	_
7	we'll	_	_	_	_	0	_	_	_
8	make	_	_	_	_	0	_	_	_
9	it	_	_	_	_	0	_	_	_
10	worse	_	_	_	_	0	_	_	_
11	(lit.	_	_	_	_	0	_	_	_
12	make	_	_	_	_	0	_	_	_
13	it	_	_	_	_	0	_	_	_
14	big)."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 9 8 mark	color:blue
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	搶	_	VERB	_	_	0	root	_	steal
3	走	_	VERB	_	_	2	compound:vv	_	go-away
4	咗	_	AUX	_	_	2	aux	_	PERF
5	佢	_	PRON	_	_	7	nmod	_	3SG
6	嘅	_	PART	_	_	5	case	_	GEN
7	襪	_	NOUN	_	_	2	obj	_	socks
8	嚟	_	SCONJ	_	_	9	mark	_	to
9	著	_	VERB	_	_	2	advcl	_	wear

1	"You	_	_	_	_	0	_	_	_
2	stole	_	_	_	_	0	_	_	_
3	his	_	_	_	_	0	_	_	_
4	socks	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	wear	_	_	_	_	0	_	_	_
7	them."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 4 mark	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	走	_	VERB	_	_	6	advcl	_	go
3	咗	_	AUX	_	_	2	aux	_	PERF
4	之後	_	ADP	_	_	2	mark	_	after
5	，	_	PUNCT	_	_	2	punct	_	_
6	希望	_	VERB	_	_	0	root	_	hope
7	你	_	PRON	_	_	8	nsubj	_	2SG
8	開開心心	_	ADJ	_	_	6	ccomp	_	happy

1	"After	_	_	_	_	0	_	_	_
2	she	_	_	_	_	0	_	_	_
3	leaves,	_	_	_	_	0	_	_	_
4	she	_	_	_	_	0	_	_	_
5	hopes	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	you	_	_	_	_	0	_	_	_
8	will	_	_	_	_	0	_	_	_
9	be	_	_	_	_	0	_	_	_
10	happy."	_	_	_	_	0	_	_	_

~~~

Note that in the last example the localizer 之後 is still tagged as `ADP` despite its grammatilized function here as a temporal subordinator.
<!-- Interlanguage links updated Út zář 29 20:43:21 CEST 2020 -->
