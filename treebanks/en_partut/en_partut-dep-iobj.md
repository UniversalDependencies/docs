---
layout: base
title:  'Statistics of iobj in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `iobj`

This relation is universal.

33 nodes (0%) are attached to their parents as `iobj`.

33 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.45454545454545.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (22; 67% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (8; 24% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	2	nsubj	_	_
2	gives	give	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	them	they	PRON	PE	Number=Plur|Person=3|PronType=Prs	2	iobj	_	_
4	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
5	competitive	competitive	ADJ	A	Degree=Pos	6	amod	_	_
6	edge	edge	NOUN	S	Number=Sing	2	obj	_	_
7	for	for	ADP	E	_	10	case	_	_
8	the	the	DET	RD	Definite=Def|PronType=Art	10	det	_	_
9	interim	interim	ADJ	A	Degree=Pos	10	amod	_	_
10	period	period	NOUN	S	Number=Sing	2	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 iobj	color:blue
1	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No
2	Balzac	Balzac	PROPN	SP	_	4	nsubj	_	_
3	often	often	ADV	B	_	4	advmod	_	_
4	fell	fall	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	ill	ill	ADJ	A	Degree=Pos	4	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	4	punct	_	_
7	finally	finally	ADV	B	_	8	advmod	_	_
8	causing	cause	VERB	V	VerbForm=Ger	4	advcl	_	_
9	the	the	DET	RD	Definite=Def|PronType=Art	10	det	_	_
10	headmaster	headmaster	NOUN	S	Number=Sing	8	iobj	_	_
11	to	to	PART	PART	_	12	mark	_	_
12	contact	contact	VERB	V	VerbForm=Inf	8	xcomp	_	_
13	his	his	DET	AP	Poss=Yes|PronType=Prs	14	nmod:poss	_	_
14	family	family	NOUN	S	Number=Sing	12	obj	_	_
15	with	with	ADP	E	_	16	case	_	_
16	news	news	NOUN	S	Number=Sing	12	obl	_	_
17	of	of	ADP	E	_	20	case	_	_
18	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	20	det	_	_
19	"	"	PUNCT	FB	_	20	punct	_	SpaceAfter=No
20	sort	sort	NOUN	S	Number=Sing	16	nmod	_	_
21	of	of	ADP	E	_	23	case	_	_
22	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	23	det	_	_
23	coma	coma	NOUN	S	Number=Sing	20	nmod	_	SpaceAfter=No
24	"	"	PUNCT	FB	_	20	punct	_	SpaceAfter=No
25	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 iobj	color:blue
1	The	the	DET	RD	Definite=Def|PronType=Art	3	det	_	_
2	indoor	indoor	ADJ	A	Degree=Pos	3	amod	_	_
3	setting	setting	NOUN	S	Number=Sing	15	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	combined	combine	VERB	V	Tense=Past|VerbForm=Part	3	acl	_	_
6	with	with	ADP	E	_	9	case	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	9	det	_	_
8	Jacobean	jacobean	ADJ	A	Degree=Pos	9	amod	_	_
9	fashion	fashion	NOUN	S	Number=Sing	5	obl	_	_
10	for	for	ADP	E	_	13	case	_	_
11	lavishly	lavishly	ADV	B	_	12	advmod	_	_
12	staged	stag	VERB	V	Tense=Past|VerbForm=Part	13	acl	_	_
13	masques	masque	NOUN	S	Number=Plur	9	nmod	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	13	punct	_	_
15	allowed	allow	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
16	Shakespeare	Shakespeare	PROPN	SP	_	15	iobj	_	_
17	to	to	PART	PART	_	18	mark	_	_
18	introduce	introduce	VERB	V	VerbForm=Inf	15	xcomp	_	_
19	more	more	ADV	B	Degree=Cmp	20	advmod	_	_
20	elaborate	elaborate	ADJ	A	Degree=Pos	22	amod	_	_
21	stage	stage	NOUN	S	Number=Sing	22	nmod	_	_
22	devices	device	NOUN	S	Number=Plur	18	obj	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	15	punct	_	_

~~~


