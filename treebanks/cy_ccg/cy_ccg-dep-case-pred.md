---
layout: base
title:  'Statistics of case:pred in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `case:pred`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-case.html">case</a></tt>.

895 nodes (2%) are attached to their parents as `case:pred`.

895 instances of `case:pred` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06480446927374.

The following 10 pairs of parts of speech are connected with `case:pred`: <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (587; 66% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (274; 31% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (12; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (11; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case:pred	color:blue
1	Cytunodd	cytuno	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	nifer	nifer	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	mai	mai	SCONJ	sconj	_	7	mark	_	_
4	merched	merch	NOUN	noun	Gender=Fem|Number=Plur	7	nsubj	_	_
5	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
6	yn	yn	PART	pred	_	7	case:pred	_	_
7	waeth	gwaeth	ADJ	pos	Degree=Pos|Mutation=SM	1	ccomp	_	_
8	na	na	ADP	prep	_	9	case	_	_
9	bechgyn	bachgen	NOUN	noun	Gender=Masc|Number=Plur	7	obl	_	_
10	gyda	gyda	ADP	prep	_	11	case	_	_
11	llanast	llanast	NOUN	noun	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case:pred	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	fab	mab	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	hanesydd	hanesydd	NOUN	noun	Gender=Masc|Number=Sing	3	nmod	_	_
7	Richard	Richard	PROPN	person	_	6	flat	_	_
8	Cyril	Cyril	PROPN	person	_	7	flat:name	_	_
9	Hughes	Hughes	PROPN	person	_	7	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case:pred	color:blue
1	Bu	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
2	hefyd	hefyd	ADV	adv	_	4	advmod	_	_
3	yn	yn	PART	pred	_	4	case:pred	_	_
4	un	un	NUM	num	_	0	root	_	_
5	o	o	ADP	prep	_	7	case	_	SpaceAfter=No
6	'r	y	DET	art	_	7	det	_	_
7	cymeriadau	cymeriad	NOUN	noun	Gender=Masc|Number=Plur	4	nmod	_	_
8	sefydlog	sefydlog	ADJ	pos	Degree=Pos	7	amod	_	_
9	ar	ar	ADP	prep	_	10	case	_	_
10	Pobol	pobol	NOUN	noun	Gender=Fem|Number=Sing	7	nmod	_	_
11	y	y	DET	art	_	12	det	_	_
12	Cwm	cwm	NOUN	noun	Gender=Masc|Number=Sing	10	nmod	_	_
13	am	am	ADP	prep	_	14	case	_	_
14	gyfnod	cyfnod	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	7	nmod	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

~~~


