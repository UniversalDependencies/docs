---
layout: base
title:  'Statistics of nummod in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nummod`

This relation is universal.

417 nodes (0%) are attached to their parents as `nummod`.

324 instances of `nummod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.43645083932854.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (343; 82% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (37; 9% instances), <tt><a href="en_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (17; 4% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="en_lines-pos-SYM.html">SYM</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	There	there	PRON	EX	_	2	expl	_	SpaceAfter=No
2	's	be	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	one	one	NUM	CARD-SG	NumType=Card	4	nummod	_	_
4	thing	thing	NOUN	SG-NOM	Number=Sing	2	nsubj	_	_
5	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	SpaceAfter=No
6	'll	will	AUX	PRES-AUX	VerbForm=Fin	7	aux	_	_
7	do	do	VERB	INF	VerbForm=Inf	4	acl:relcl	_	_
8	for	for	ADP	_	_	9	case	_	_
9	you	you	PRON	PERS-P2	_	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	Comma	_	11	punct	_	_
11	though	though	ADV	_	_	2	advmod	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Access	Access	PROPN	SG-NOM	Case=Nom	3	nsubj	_	_
2	2002	2002	NUM	ID	NumType=Card	1	nummod	_	_
3	provides	provide	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	a	a	DET	IND-SG	Definite=Ind|PronType=Art	6	det	_	_
5	PivotTable	PivotTable	NOUN	SG-NOM	Number=Sing	6	compound	_	_
6	view	view	NOUN	SG-NOM	Number=Sing	3	obj	_	_
7	for	for	ADP	_	_	8	case	_	_
8	datasheets	datasheet	NOUN	PL-NOM	Number=Plur	3	obl	_	_
9	and	and	CCONJ	_	_	10	cc	_	_
10	forms	form	NOUN	PL-NOM	Number=Plur	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nummod	color:blue
1	It	it	PRON	PERS-SG	_	3	nsubj	_	SpaceAfter=No
2	's	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	two	two	NUM	CARD-PL	NumType=Card	0	root	_	_
4	to	to	ADP	_	_	5	case	_	_
5	one	one	NUM	CARD-SG	NumType=Card	3	nummod	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	7	punct	_	_
7	bottom	bottom	NOUN	SG-NOM	Number=Sing	3	obl	_	_
8	of	of	ADP	_	_	10	case	_	_
9	the	the	DET	DEF	Definite=Def|PronType=Art	10	det	_	_
10	ninth	ninth	ADJ	ORD	Degree=Pos	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	3	punct	_	_

~~~


