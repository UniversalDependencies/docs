---
layout: base
title:  'Statistics of nummod in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nummod`

This relation is universal.

167 nodes (1%) are attached to their parents as `nummod`.

152 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05389221556886.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (153; 92% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Bu	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
2	farw	marw	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	0	root	_	_
3	yn	yn	ADP	prep	_	4	case	_	_
4	79	79	NUM	num	_	2	obl	_	_
5	oed	oed	NOUN	noun	Gender=Masc|Number=Sing	4	nmod	_	_
6	ar	ar	ADP	prep	_	8	case	_	_
7	15	15	NUM	num	_	8	nummod	_	_
8	Mehefin	Mehefin	NOUN	noun	Gender=Masc|Number=Sing	2	obl	_	_
9	2004	2004	NUM	num	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	ymgyrchwyr	ymgyrchwr	NOUN	noun	Gender=Masc|Number=Plur	1	nsubj	_	_
3	iaith	iaith	NOUN	noun	Gender=Fem|Number=Sing	2	nmod	_	_
4	wedi	wedi	AUX	ante	_	5	aux	_	_
5	gosod	gosod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
6	sticeri	sticeri	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	obl	_	_
7	ar	ar	ADP	prep	_	9	case	_	_
8	wyth	wyth	NUM	num	_	9	nummod	_	_
9	deg	deg	NUM	num	Gender=Masc|Number=Sing	5	obl	_	_
10	o	o	ADP	prep	_	11	case	_	_
11	arwyddion	arwydd	NOUN	noun	Gender=Masc|Number=Plur	9	nmod	_	_
12	ffyrdd	ffordd	NOUN	noun	Gender=Masc|Number=Plur	11	nmod	_	_
13	Cyngor	cyngor	NOUN	noun	Gender=Masc|Number=Sing	12	nmod	_	_
14	Wrecsam	Wrecsam	NOUN	noun	Gender=Fem|Number=Sing	13	flat	_	_
15	dros	dros	ADP	prep	_	17	case	_	_
16	y	y	DET	art	_	17	det	_	_
17	penwythnos	penwythnos	NOUN	noun	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
18	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Dirwyon	dirwyo	NOUN	noun	Gender=Masc|Number=Plur	7	nsubj	_	_
2	o	o	ADP	prep	_	4	case	_	_
3	60000	60000	NUM	num	_	4	nummod	_	_
4	ewro	Ewro	PROPN	work	_	1	nmod	_	_
5	fu	bod	AUX	aux	Mood=Ind|Mutation=SM|Number=Sing|Person=3|Tense=Past	7	cop	_	SpaceAfter=No
6	'r	y	DET	art	_	7	det	_	_
7	dyfarniad	dyfarniad	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
8	i	i	ADP	prep	_	11	case	_	SpaceAfter=No
9	'r	y	DET	art	_	11	det	_	_
10	tri	tri	NUM	num	_	11	nummod	_	_
11	arall	arall	NOUN	noun	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\n

~~~


