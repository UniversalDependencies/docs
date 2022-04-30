---
layout: base
title:  'Statistics of case in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="cy_ccg-dep-case-pred.html">case:pred</a></tt>.

4662 nodes (11%) are attached to their parents as `case`.

4658 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37215787215787.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (3472; 74% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (481; 10% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (395; 8% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (154; 3% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (94; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (30; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (14; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (9; 0% instances), <tt><a href="cy_ccg-pos-PART.html">PART</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Ond	ond	CCONJ	cconj	_	3	cc	_	_
2	nid	ni	PART	neg	_	3	advmod	_	_
3	oes	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	3	nsubj	_	_
5	i	i	ADP	iprep	_	6	case	_	_
6	e	e	PRON	indep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
7	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	4	acl	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Eistedd	eistedd	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	0	root	_	_
2	yn	yn	AUX	impf	_	3	aux	_	_
3	syllu	syllu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	advcl	_	_
4	ar	ar	ADP	prep	_	6	case	_	_
5	y	y	DET	art	_	6	det	_	_
6	cerflun	cerflun	NOUN	noun	Gender=Masc|Number=Sing	3	obl	_	_
7	o	o	ADP	prep	_	8	case	_	_
8	Hedd	Hedd	PROPN	person	_	6	nmod	_	_
9	Wyn	Wyn	PROPN	place	Gender=Masc|Number=Sing	8	flat:name	_	_
10	a	a	CCONJ	cconj	_	11	cc	_	_
11	chael	cael	NOUN	verbnoun	Mutation=AM|Number=Sing|VerbForm=Vnoun	1	conj	_	_
12	clywed	clywed	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	11	ccomp	_	_
13	y	y	DET	art	_	14	det	_	_
14	stori	stori	NOUN	noun	Gender=Fem|Number=Sing	12	obj	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


