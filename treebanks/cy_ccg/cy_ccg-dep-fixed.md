---
layout: base
title:  'Statistics of fixed in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `fixed`

This relation is universal.

78 nodes (0%) are attached to their parents as `fixed`.

78 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08974358974359.

The following 12 pairs of parts of speech are connected with `fixed`: <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (35; 45% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (14; 18% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (6; 8% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (4; 5% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (3; 4% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (2; 3% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	SpaceAfter=No
3	'r	y	DET	art	_	5	det	_	_
4	drydedd	trydydd	ADJ	ord	Degree=Pos|Gender=Fem|Mutation=SM	5	amod	_	_
5	blaned	blaned	NOUN	noun	Gender=Fem|Number=Sing	0	root	_	_
6	oddi	oddi	ADP	prep	_	9	case	_	_
7	wrth	wrth	ADP	prep	_	6	fixed	_	_
8	yr	y	DET	art	_	9	det	_	_
9	haul	haul	NOUN	noun	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 fixed	color:blue
1	Cilwenu	cilwenu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	0	root	_	_
2	hyd	hyd	ADP	prep	_	1	obl	_	_
3	yn	yn	ADP	prep	_	2	fixed	_	_
4	oed	oed	NOUN	noun	Gender=Masc|Number=Sing	2	fixed	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	7	punct	_	_
6	mewn	mewn	ADP	prep	_	7	case	_	_
7	ffordd	ffordd	NOUN	noun	Gender=Fem|Number=Sing	1	obl	_	_
8	eironig	geironig	ADJ	pos	Degree=Pos|Mutation=SM	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Efallai	efallai	ADV	adv	_	3	advmod	_	_
2	y	y	DET	art	_	3	det	_	_
3	dewch	dod	VERB	verb	Mood=Ind|Number=Plur|Person=2|Tense=Fut	0	root	_	_
4	i	i	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	digwyddiad	digwyddiad	NOUN	noun	Gender=Masc|Number=Sing	3	obl	_	_
7	eich	eich	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	hun	hun	PRON	refl	Number=Sing|PronType=Rcp	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	punct	_	10	punct	_	_
10	hyd	hyd	NOUN	noun	Gender=Masc|Number=Sing	3	advmod	_	_
11	yn	yn	ADP	prep	_	10	fixed	_	_
12	oed	oed	NOUN	noun	Gender=Masc|Number=Sing	10	fixed	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


