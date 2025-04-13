---
layout: base
title:  'Statistics of dep in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `dep`

This relation is universal.

24 nodes (0%) are attached to their parents as `dep`.

24 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41666666666667.

The following 6 pairs of parts of speech are connected with `dep`: <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (17; 71% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (2; 8% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (2; 8% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en_partut-pos-X.html">X</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep	color:blue
1	This	this	DET	DD	Number=Sing|PronType=Dem	2	det	_	_
2	photograph	photograph	NOUN	S	Number=Sing	4	nsubj:pass	_	SpaceAfter=No
3	's	's	PART	PART	_	2	case	_	_
4	taken	take	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
5	1950	1950	NUM	N	NumType=Card	4	obl	_	SpaceAfter=No
6	s	s	X	X	_	5	dep	_	_
7	in	in	ADP	E	_	8	case	_	_
8	Saudi	Saudi	PROPN	SP	_	4	obl	_	_
9	Arabia	Arabia	PROPN	SP	_	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dep	color:blue
1	China	China	PROPN	SP	_	2	nsubj	_	_
2	emerged	emerge	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	from	from	ADP	E	_	10	case	_	_
4	the	the	DET	RD	Definite=Def|PronType=Art	10	det	_	_
5	late-1990	late-1990	ADJ	A	Degree=Pos	10	amod	_	SpaceAfter=No
6	'	'	X	X	_	5	dep	_	SpaceAfter=No
7	s	s	X	X	_	5	dep	_	_
8	Asian	Asian	ADJ	A	Degree=Pos	10	amod	_	_
9	financial	financial	ADJ	A	Degree=Pos	10	amod	_	_
10	crisis	crisis	NOUN	S	Number=Sing	2	obl	_	_
11	as	as	ADP	E	_	17	case	_	_
12	the	the	DET	RD	Definite=Def|PronType=Art	13	det	_	_
13	region	region	NOUN	S	Number=Sing	17	nmod	_	SpaceAfter=No
14	's	's	PART	PART	_	13	case	_	_
15	most	most	ADV	B	_	16	advmod	_	_
16	resilient	resilient	ADJ	A	Degree=Pos	17	amod	_	_
17	economy	economy	NOUN	S	Number=Sing	2	obl	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	21	punct	_	_
19	and	and	CCONJ	CC	_	21	cc	_	_
20	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	21	nsubj	_	_
21	suspect	suspect	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	conj	_	_
22	the	the	DET	RD	Definite=Def|PronType=Art	23	det	_	_
23	same	same	NOUN	S	Number=Sing	26	nsubj	_	_
24	will	will	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	26	aux	_	_
25	be	be	AUX	V	VerbForm=Inf	26	cop	_	_
26	true	true	ADJ	A	Degree=Pos	21	ccomp	_	_
27	this	this	DET	DD	Number=Sing|PronType=Dem	28	det	_	_
28	time	time	NOUN	S	Number=Sing	26	obl	_	SpaceAfter=No
29	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 dep	color:blue
1	and	and	CCONJ	CC	_	3	cc	_	_
2	the	the	DET	RD	Definite=Def|PronType=Art	3	det	_	_
3	extension	extension	NOUN	S	Number=Sing	0	root	_	_
4	of	of	ADP	E	_	6	case	_	_
5	the	the	DET	RD	Definite=Def|PronType=Art	6	det	_	_
6	content	content	NOUN	S	Number=Sing	3	nmod	_	_
7	of	of	ADP	E	_	12	case	_	_
8	the	the	DET	RD	Definite=Def|PronType=Art	12	det	_	_
9	technical	technical	ADJ	A	Degree=Pos	12	amod	_	_
10	and	and	CCONJ	CC	_	11	cc	_	_
11	operational	operational	ADJ	A	Degree=Pos	9	conj	_	_
12	back	back	NOUN	S	_	6	nmod	_	SpaceAfter=No
13	-	-	X	X	_	12	dep	_	SpaceAfter=No
14	up	up	ADV	B	_	12	dep	_	_
15	to	to	ADP	E	_	17	case	_	_
16	administrative	administrative	ADJ	A	Degree=Pos	17	amod	_	_
17	support	support	NOUN	S	Number=Sing	12	nmod	_	_
18	for	for	ADP	E	_	20	case	_	_
19	active	active	ADJ	A	Degree=Pos	20	amod	_	_
20	investigations	investigation	NOUN	S	Number=Plur	17	nmod	_	SpaceAfter=No
21	,	,	PUNCT	FF	_	17	punct	_	_
22	with	with	ADP	E	_	23	case	_	_
23	intermediation	intermediation	NOUN	S	Number=Sing	17	nmod	_	_
24	by	by	ADP	E	_	25	case	_	_
25	Europol	Europol	PROPN	SP	_	23	nmod	_	SpaceAfter=No
26	.	.	PUNCT	FS	_	3	punct	_	_

~~~


