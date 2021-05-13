---
layout: base
title:  'Statistics of mark in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `mark`

This relation is universal.

739 nodes (2%) are attached to their parents as `mark`.

739 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45466847090663.

The following 16 pairs of parts of speech are connected with `mark`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (558; 76% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (91; 12% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (42; 6% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (16; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (8; 1% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 mark	color:blue
1	yr	y	PART	aff	_	6	advmod	_	_
2	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
3	y	y	DET	art	_	4	det	_	_
4	tŷ	tŷ	NOUN	noun	Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
5	'n	yn	PART	pred	_	6	case:pred	_	_
6	wag	gwag	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
7	wedi	wedi	SCONJ	sconj	_	10	mark	_	_
8	i	i	ADP	prep	_	9	case	_	_
9	bawb	pawb	PRON	indef	Mutation=SM|PronType=Ind	10	nsubj	_	_
10	adael	gadael	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	6	advcl	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


