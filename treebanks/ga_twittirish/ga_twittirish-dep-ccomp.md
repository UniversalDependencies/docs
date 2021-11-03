---
layout: base
title:  'Statistics of ccomp in UD_Irish-TwittIrish'
udver: '2'
---

## Treebank Statistics: UD_Irish-TwittIrish: Relations: `ccomp`

This relation is universal.

77 nodes (0%) are attached to their parents as `ccomp`.

73 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.4025974025974.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (35; 45% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (23; 30% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ga_twittirish-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_twittirish-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
1	Really	really	ADV	_	_	2	advmod	_	Lang=en
2	tired	tired	ADJ	_	_	0	root	_	Lang=en|SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	_
4	Wish	Wish	VERB	_	_	2	parataxis	_	Lang=en
5	nach	nach	PART	_	_	6	mark:prt	_	Lang=ga
6	raibh	bí	VERB	_	_	4	ccomp	_	Lang=ga
7	aon	aon	DET	_	_	8	det	_	Lang=ga
8	obair	obair	NOUN	_	_	6	nsubj	_	Lang=ga
9	le	le	ADP	_	_	10	case	_	Lang=ga
10	déanamh	déanamh	NOUN	_	_	6	xcomp	_	Lang=ga
11	agam	ag	ADP	_	_	10	obl:prep	_	Lang=ga|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	agus	agus	SCONJ	_	_	2	mark	_	Lang=ga
2	muideanna	muid	NOUN	_	_	0	root	_	Lang=ga
3	ag	ag	ADP	_	_	4	case	_	Lang=ga
4	ceapadh	ceapadh	NOUN	_	_	2	xcomp	_	Lang=ga
5	go	go	PART	_	_	6	mark:prt	_	Lang=ga
6	raibh	bí	VERB	_	_	2	ccomp	_	Lang=ga
7	an	an	DET	_	_	8	det	_	Lang=ga
8	tsaimhraidh	samhraidh	NOUN	_	_	6	nsubj	_	CorrectForm=samhraidh|Lang=ga
9	ag	ag	ADP	_	_	10	case	_	Lang=ga
10	teacht	teacht	NOUN	_	_	6	xcomp	_	Lang=ga|SpaceAfter=No
11	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Má	má	SCONJ	_	_	2	mark	_	Lang=ga
2	deir	abair	VERB	_	_	18	advcl	_	Lang=ga
3	duine	duine	NOUN	_	_	2	nsubj	_	Lang=ga|SpaceAfter=No
4	:	:	PUNCT	_	_	7	punct	_	_
5	“	“	PUNCT	_	_	7	punct	_	SpaceAfter=No
6	Mo	mo	DET	_	_	7	nmod:poss	_	Lang=ga
7	ghrá-sa	grá	NOUN	_	_	2	ccomp	_	Lang=ga
8	Dia	Dia	PROPN	_	_	7	appos	_	Lang=ga|SpaceAfter=No
9	”	”	PUNCT	_	_	7	punct	_	_
10	agus	agus	CCONJ	_	_	12	cc	_	Lang=ga
11	gur	is	AUX	_	_	12	cop	_	Lang=ga
12	fuath	fuath	NOUN	_	_	7	conj	_	Lang=ga
13	leis	le	ADP	_	_	12	obl:prep	_	Lang=ga
14	a	a	DET	_	_	15	nmod:poss	_	Lang=ga
15	bhráthair	bráthair	NOUN	_	_	12	obj	_	Lang=ga|SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	is	is	AUX	_	_	18	cop	_	Lang=ga
18	bréagach	bréagach	NOUN	_	_	0	root	_	Lang=ga
19	é	é	PRON	_	_	18	nsubj	_	Lang=ga|SpaceAfter=No
20	,	,	PUNCT	_	_	18	punct	_	SpaceAfter=No
21	...	...	PUNCT	_	_	18	punct	_	_
22	1	1	NUM	_	_	18	parataxis	_	_
23	Eoin	Eoin	PROPN	_	_	18	obl:tmod	_	_
24	4:19	4:19	NUM	_	_	23	flat	_	SpaceAfter=No
25	-	-	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	5:4	5:4	NUM	_	_	24	nmod	_	_

~~~


