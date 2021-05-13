---
layout: base
title:  'Statistics of parataxis in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `parataxis`

This relation is universal.

59 nodes (0%) are attached to their parents as `parataxis`.

59 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.5084745762712.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (12; 20% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (10; 17% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (10; 17% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (7; 12% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (7; 12% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Beth	peth	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
2	am	am	ADP	iprep	_	3	case	_	_
3	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nmod	_	_
4	dere	dod	VERB	verb	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	1	parataxis	_	_
5	i	i	ADP	prep	_	6	mark	_	_
6	ymuno	ymuno	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	4	xcomp	_	_
7	gyda	gyda	ADP	prep	_	8	case	_	_
8	ni	ni	PRON	indep	Number=Plur|Person=1|PronType=Prs	6	obl	_	SpaceAfter=No
9	!	!	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 parataxis	color:blue
1	Safwn	sefyll	VERB	verb	Mood=Imp|Number=Sing|Person=1|VerbForm=Fin	0	root	_	_
2	ar	ar	ADP	prep	_	3	case	_	_
3	bont	pont	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	1	obl	_	_
4	arall	arall	ADJ	pos	Degree=Pos	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	7	punct	_	_
6	wrth	wrth	ADP	prep	_	7	case	_	_
7	ymyl	ymyl	NOUN	noun	Gender=Fem|Number=Sing	3	nmod	_	_
8	y	y	DET	art	_	9	det	_	_
9	maes	maes	NOUN	noun	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	punct	_	12	punct	_	_
11	yn	yn	AUX	impf	_	12	aux	_	_
12	ysgwyd	ysgwyd	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	parataxis	_	_
13	y	y	DET	art	_	14	det	_	_
14	strwythur	strwythur	NOUN	noun	Gender=Masc|Number=Sing	12	obj	_	_
15	metal	metal	NOUN	noun	Gender=Masc|Number=Sing	14	nmod	_	_
16	fel	fel	ADP	prep	_	17	case	_	_
17	teyrnged	teyrnged	NOUN	noun	Gender=Masc|Number=Sing	12	obl	_	_
18	i	i	ADP	prep	_	19	case	_	_
19	brotestwyr	protestwr	NOUN	noun	Gender=Masc|Mutation=SM|Number=Plur	17	nmod	_	_
20	Hong	Hong	PROPN	place	Gender=Masc|Number=Sing	19	nmod	_	_
21	Kong	Kong	PROPN	place	Gender=Masc|Number=Sing	20	nmod	_	_
22	2019	2019	NUM	num	_	19	nmod	_	SpaceAfter=No
23	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	croeso	croeso	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	i	i	ADP	prep	_	4	case	_	_
4	bawb	pawb	PRON	indef	Mutation=SM|PronType=Ind	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	7	punct	_	_
6	nid	ni	PART	neg	_	7	advmod	_	_
7	oes	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
8	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	7	nsubj	_	_
9	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	11	cop	_	_
10	yn	yn	PART	pred	_	11	case:pred	_	_
11	aelod	aelod	NOUN	noun	Gender=Masc|Number=Sing	8	acl	_	_
12	o	o	ADP	prep	_	14	case	_	SpaceAfter=No
13	'r	y	DET	art	_	14	det	_	_
14	Gymdeithas	cymdeithas	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\n

~~~


