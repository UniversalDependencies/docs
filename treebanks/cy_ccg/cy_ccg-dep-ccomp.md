---
layout: base
title:  'Statistics of ccomp in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `ccomp`

This relation is universal.

669 nodes (2%) are attached to their parents as `ccomp`.

653 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.39760837070254.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (327; 49% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (143; 21% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (56; 8% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (51; 8% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (29; 4% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (26; 4% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (18; 3% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 ccomp	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Mi	mi	PART	aff	_	2	advmod	_	_
2	gefais	cael	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	i	i	PRON	indep	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
4	fy	i	PRON	dep	Number=Sing|Person=1|PronType=Prs	5	obj	_	_
5	ngeni	geni	NOUN	verbnoun	Mutation=NM|Number=Sing|VerbForm=Vnoun	2	ccomp	_	_
6	yng	yn	ADP	prep	_	7	case	_	_
7	Nghaerdydd	Caerdydd	PROPN	place	Mutation=NM	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Yr	y	PART	aff	_	2	advmod	_	_
2	wyf	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	yn	yn	AUX	impf	_	4	aux	_	_
4	amau	amau	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	SpaceAfter=No
5	'n	yn	PART	pred	_	6	case:pred	_	_
6	gryf	cryf	ADJ	pos	Degree=Pos|Mutation=SM	4	advmod	_	_
7	nad	na	PART	neg	_	8	advmod	_	_
8	ydym	bod	VERB	verb	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


