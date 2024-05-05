---
layout: base
title:  'Statistics of fixed in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `fixed`

This relation is universal.

297 nodes (1%) are attached to their parents as `fixed`.

297 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07407407407407.

The following 19 pairs of parts of speech are connected with `fixed`: <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (129; 43% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (59; 20% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (19; 6% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (16; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (12; 4% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (12; 4% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (8; 3% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (6; 2% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-DET.html">DET</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PART.html">PART</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	Bu	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	porthladd	porthladd	NOUN	noun	Gender=Masc|Number=Sing	5	nsubj	_	_
4	yn	yn	PART	pred	_	5	case:pred	_	_
5	bwysig	pwysig	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
6	i	i	ADP	prep	_	8	case	_	SpaceAfter=No
7	'r	y	DET	art	_	8	det	_	_
8	dref	tref	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	5	obl	_	_
9	ar	ar	ADP	prep	_	12	case	_	_
10	hyd	hyd	ADP	prep	_	9	fixed	_	_
11	y	y	DET	art	_	12	det	_	_
12	canrifoedd	canrif	NOUN	noun	Gender=Fem|Number=Plur	5	obl	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	5	punct	_	SpacesAfter=\n

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
8	eironig	eironig	ADJ	pos	Degree=Pos	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
2	cynllunio	cynllunio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	10	csubj	_	_
3	eich	chi	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	taith	taith	NOUN	noun	Gender=Fem|Number=Sing	2	obj	_	_
5	i	i	ADP	prep	_	8	case	_	_
6	fyny	fyny	ADV	adv	_	5	fixed	_	SpaceAfter=No
7	'r	y	DET	art	_	8	det	_	_
8	Wyddfa	Wyddfa	PROPN	place	Gender=Fem|Number=Sing	4	nmod	_	_
9	yn	yn	PART	pred	_	10	case:pred	_	_
10	bwysig	pwysig	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
11	iawn	iawn	ADV	adv	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	10	punct	_	SpacesAfter=\n

~~~


