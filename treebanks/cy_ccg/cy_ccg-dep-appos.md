---
layout: base
title:  'Statistics of appos in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `appos`

This relation is universal.

211 nodes (1%) are attached to their parents as `appos`.

211 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.34123222748815.

The following 18 pairs of parts of speech are connected with `appos`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (88; 42% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (52; 25% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (20; 9% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (10; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (8; 4% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (8; 4% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	Dyma	dyma	ADV	adv	_	2	advmod	_	_
2	fersiwn	fersiwn	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
3	Elise	Elise	PROPN	person	Gender=Masc|Number=Sing	2	nmod	_	_
4	o	o	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	gân	cân	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	2	nmod	_	_
7	Un	un	NUM	num	_	8	nummod	_	_
8	Seren	Seren	NOUN	noun	Gender=Masc|Number=Sing	6	appos	_	_
9	gan	gan	ADP	prep	_	10	case	_	_
10	Delwyn	Delwyn	PROPN	person	Gender=Masc|Number=Sing	2	nmod	_	_
11	Siôn	Siôn	PROPN	person	Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	Cafodd	cael	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	Owain	Owain	PROPN	person	_	1	nsubj	_	_
3	Gwynedd	Gwynedd	PROPN	place	Gender=Masc|Number=Sing	2	flat:name	_	_
4	ddau	dau	NUM	num	Gender=Masc|Mutation=SM	5	nummod	_	_
5	fab	mab	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	1	obj	_	_
6	gan	gan	ADP	iprep	_	7	case	_	_
7	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nmod	_	_
8	,	,	PUNCT	punct	_	9	punct	_	_
9	Dafydd	Dafydd	PROPN	person	_	5	appos	_	_
10	a	a	CCONJ	cconj	_	11	cc	_	_
11	Rhodri	Rhodri	PROPN	person	_	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 16 appos	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	geiriau	gair	NOUN	noun	Gender=Masc|Number=Plur	1	nsubj	_	_
4	wedi	wedi	AUX	ante	_	6	aux	_	_
5	eu	hwy	PRON	dep	Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	ysgrifennu	ysgrifennu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
7	gan	gan	ADP	prep	_	8	case	_	_
8	John	John	PROPN	person	_	6	nmod:agent	_	_
9	Howel	Howel	PROPN	person	Gender=Masc|Number=Sing	8	flat:name	_	_
10	(	(	PUNCT	punct	_	11	punct	_	SpaceAfter=No
11	1774	1774	NUM	num	_	9	nmod	_	SpaceAfter=No
12	-	-	PUNCT	punct	_	13	punct	_	SpaceAfter=No
13	1830	1830	NUM	num	_	11	nmod	_	SpaceAfter=No
14	)	)	PUNCT	punct	_	11	punct	_	_
15	sef	sef	ADV	adv	_	16	advmod	_	_
16	bardd	bardd	NOUN	noun	Gender=Masc|Number=Sing	8	appos	_	_
17	a	a	CCONJ	cconj	_	18	cc	_	_
18	golygydd	golygydd	NOUN	noun	Gender=Masc|Number=Sing	16	conj	_	_
19	llenyddol	llenyddol	ADJ	pos	Degree=Pos	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


