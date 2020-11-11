---
layout: base
title:  'Statistics of mark in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `mark`

This relation is universal.

661 nodes (2%) are attached to their parents as `mark`.

661 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44326777609682.

The following 15 pairs of parts of speech are connected with `mark`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (502; 76% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (76; 11% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (46; 7% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (8; 1% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	Peidiwch	peidio	VERB	verb	Mood=Imp|Number=Plur|Person=2	0	root	_	_
2	â	â	ADP	prep	_	3	mark	_	_
3	chyffwrdd	cyffwrdd	NOUN	verbnoun	Mutation=AM|Number=Sing|VerbForm=Vnoun	1	xcomp	_	SpaceAfter=No
4	!	!	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	oedd	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Imp	0	root	_	_
3	o	e	PRON	indep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	newydd	newydd	AUX	ante	_	5	aux	_	_
5	fywta	bywta	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
6	pan	pan	SCONJ	sconj	_	7	mark	_	_
7	gyrhaeddodd	cyrraedd	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=3|Tense=Past	2	advcl	_	_
8	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	chwaer	chwaer	NOUN	noun	Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	Peidiwch	peidio	VERB	verb	Mood=Imp|Number=Plur|Person=2	0	root	_	_
2	â	â	ADP	prep	_	3	case	_	_
3	mynd	mynd	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
4	allan	allan	ADV	adv	_	3	advmod	_	_
5	os	os	SCONJ	sconj	_	6	mark	_	_
6	oes	oes	NOUN	noun	Gender=Fem|Number=Sing	3	advcl	_	_
7	annwyd	annwyd	NOUN	noun	Gender=Masc|Number=Sing	6	nsubj	_	_
8	ar	ar	ADP	iprep	_	9	case	_	_
9	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	6	obl	_	_
10	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	9	compound:redup	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


