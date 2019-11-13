---
layout: base
title:  'Statistics of obj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `obj`

This relation is universal.

874 nodes (5%) are attached to their parents as `obj`.

679 instances of `obj` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46567505720824.

The following 14 pairs of parts of speech are connected with `obj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (497; 57% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (176; 20% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (125; 14% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (38; 4% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (15; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	nid	ni	PART	neg	_	2	advmod	_	_
2	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	Sioned	Sioned	PROPN	person	_	2	nsubj	_	_
4	ddim	dim	PART	neg	Mutation=SM	2	advmod	_	_
5	yn	yn	AUX	impf	_	6	aux	_	_
6	astudio	astudio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
7	llenyddiaeth	llenyddiaeth	NOUN	noun	Gender=Fem|Number=Sing	6	obj	_	_
8	o	o	ADP	prep	_	9	case	_	_
9	gwbl	cwbl	ADJ	pos	Degree=Pos|Mutation=SM	6	advcl	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
1	Mi	mi	PART	aff	_	2	advmod	_	_
2	gefais	cael	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=1|Tense=Past	0	root	_	_
3	i	i	PRON	indep	Number=Sing|Person=1	2	nsubj	_	_
4	fy	fy	PRON	dep	Number=Sing|Person=1|PronType=Prs	5	obj	_	_
5	ngheni	ceni	NOUN	verbnoun	Mutation=NM|Number=Sing|VerbForm=Vnoun	2	ccomp	_	_
6	yng	yn	ADP	prep	_	7	case	_	_
7	Nghaerdydd	Caerdydd	PROPN	place	Mutation=NM	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obj	color:blue
1	Adawes	gadael	VERB	verb	Gender=Fem|Mood=Ind|Mutation=SM|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	i	i	PRON	indep	Number=Sing|Person=1	1	nsubj	_	SpaceAfter=No
3	'm	fy	PRON	dep	Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	sgidiau	esgid	NOUN	noun	Gender=Fem|Number=Plur	1	obj	_	_
5	fi	i	PRON	indep	Number=Sing|Person=1|PronType=Prs	4	expl	_	_
6	rywle	rhywle	ADV	adv	Mutation=SM	1	advcl	_	_
7	fan	man	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	6	obl	_	_
8	hyn	hyn	PRON	dem	Number=Plur|PronType=Dem	7	det	_	SpaceAfter=No
9	,	,	PUNCT	punct	_	13	punct	_	_
10	dw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=1|Tense=Pres	13	cop	_	_
11	i	i	PRON	indep	Number=Sing|Person=1	13	nsubj	_	SpaceAfter=No
12	'n	yn	PART	pred	_	13	case:pred	_	_
13	siŵr	siŵr	ADJ	pos	Degree=Pos	1	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	12	punct	_	SpacesAfter=\n

~~~


