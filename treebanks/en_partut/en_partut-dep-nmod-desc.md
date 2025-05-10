---
layout: base
title:  'Statistics of nmod:desc in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_partut-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_partut-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

141 nodes (0%) are attached to their parents as `nmod:desc`.

141 instances of `nmod:desc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02836879432624.

The following 3 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (77; 55% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (45; 32% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (19; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:desc	color:blue
1	Mr	mister	NOUN	S	Number=Sing	2	nmod:desc	_	_
2	Berenguer	Berenguer	PROPN	SP	_	7	vocative	_	_
3	Fuster	Fuster	PROPN	SP	_	2	flat	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
6	shall	shall	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	check	check	VERB	V	VerbForm=Inf	0	root	_	_
8	all	all	PRON	PE	Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	this	this	PRON	PD	Number=Sing|PronType=Dem	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:desc	color:blue
1	Madam	madam	NOUN	S	Number=Sing	2	nmod:desc	_	_
2	President	president	NOUN	S	Number=Sing	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	on	on	ADP	E	_	6	case	_	_
5	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
6	point	point	NOUN	S	Number=Sing	0	root	_	_
7	of	of	ADP	E	_	8	case	_	_
8	order	order	NOUN	S	Number=Sing	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nmod:desc	color:blue
1	his	his	DET	AP	Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	Captain	Captain	PROPN	SP	_	3	nmod:desc	_	_
3	Ahab	Ahab	PROPN	SP	_	12	nsubj	_	_
4	in	in	ADP	E	_	5	case	_	_
5	Moby	Moby	PROPN	SP	_	3	nmod	_	SpaceAfter=No
6	-	-	PUNCT	FF	_	5	punct	_	SpaceAfter=No
7	Dick	dick	NOUN	S	Number=Sing	5	flat	_	_
8	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	12	det	_	_
10	classic	classic	ADJ	A	Degree=Pos	12	amod	_	_
11	tragic	tragic	ADJ	A	Degree=Pos	12	amod	_	_
12	hero	hero	NOUN	S	Number=Sing	0	root	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	12	punct	_	_
14	inspired	inspire	VERB	V	Tense=Past|VerbForm=Part	12	acl	_	_
15	by	by	ADP	E	_	17	case	_	_
16	King	King	PROPN	SP	_	17	nmod:desc	_	_
17	Lear	Lear	PROPN	SP	_	14	obl	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	12	punct	_	_

~~~


