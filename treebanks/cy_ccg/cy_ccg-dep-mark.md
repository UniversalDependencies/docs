---
layout: base
title:  'Statistics of mark in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `mark`

This relation is universal.

868 nodes (2%) are attached to their parents as `mark`.

868 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51152073732719.

The following 18 pairs of parts of speech are connected with `mark`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (635; 73% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (105; 12% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (65; 7% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (22; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (14; 2% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	Peidiwch	peidio	VERB	verb	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
2	â	â	ADP	prep	_	3	mark	_	_
3	chyffwrdd	cyffwrdd	NOUN	verbnoun	Mutation=AM|Number=Sing|VerbForm=Vnoun	1	xcomp	_	SpaceAfter=No
4	!	!	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	Yr	y	PART	aff	_	2	advmod	_	_
2	oeddwn	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
3	i	i	PRON	indep	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
4	wedi	wedi	AUX	ante	_	5	aux	_	_
5	paratoi	paratoi	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
6	fy	i	PRON	dep	Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	_	_
7	mwyd	bwyd	NOUN	noun	Gender=Masc|Mutation=NM|Number=Sing	5	obj	_	_
8	pan	pan	SCONJ	sconj	_	9	mark	_	_
9	ffoniodd	ffonio	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	advcl	_	_
10	Ifan	Ifan	PROPN	person	Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	yr	y	PART	aff	_	5	advmod	_	_
2	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
3	pawb	pawb	PRON	indef	PronType=Ind	5	nsubj	_	_
4	yn	yn	PART	pred	_	5	case:pred	_	_
5	drist	trist	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
6	achos	achos	SCONJ	sconj	_	7	mark	_	_
7	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	advcl	_	_
8	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	7	nsubj	_	_
9	ddim	dim	PART	neg	Mutation=SM	7	advmod	_	_
10	wedi	wedi	AUX	ante	_	11	aux	_	_
11	ennill	ennill	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	7	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	5	punct	_	SpacesAfter=\n

~~~


