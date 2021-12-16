---
layout: base
title:  'Statistics of xcomp in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `xcomp`

This relation is universal.

1848 nodes (4%) are attached to their parents as `xcomp`.

1843 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.620670995671.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1376; 74% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (388; 21% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (48; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Yr	y	PART	aff	_	2	advmod	_	_
2	ydym	bod	VERB	verb	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	yn	yn	AUX	impf	_	4	aux	_	_
4	llithro	llithro	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	i	i	ADP	prep	_	6	case	_	_
6	le	lle	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
7	tywyll	tywyll	ADJ	pos	Degree=Pos	6	amod	_	_
8	dros	dros	ADP	prep	_	9	case	_	_
9	ben	pen	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Ble	ble	ADV	adv	_	4	advmod	_	_
2	i	i	ADP	prep	_	3	case	_	_
3	ni	ni	PRON	indep	Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
4	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	0	root	_	_
5	coginio	coginio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	4	xcomp	_	_
6	a	a	CCONJ	cconj	_	7	cc	_	_
7	bwyta	bwyta	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	conj	_	SpaceAfter=No
8	?	?	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	Nid	ni	PART	neg	_	2	advmod	_	_
2	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	ddim	dim	PART	neg	Mutation=SM	2	advmod	_	_
5	yn	yn	AUX	impf	_	6	aux	_	_
6	gallu	gallu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
7	clywed	clywed	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
8	yn	yn	ADP	prep	_	10	case	_	_
9	y	y	DET	art	_	10	det	_	_
10	sinema	sinema	NOUN	noun	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


