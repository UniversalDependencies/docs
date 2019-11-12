---
layout: base
title:  'Statistics of root in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `root`

This relation is universal.

956 nodes (6%) are attached to their parents as `root`.

956 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.22280334728033.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (659; 69% instances), -<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (184; 19% instances), -<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (77; 8% instances), -<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (20; 2% instances), -<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (7; 1% instances), -<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 0% instances), -<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), -<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances), -<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Cafodd	cael	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	Dylan	Dylan	PROPN	person	_	1	nsubj	_	_
3	Thomas	Thomas	PROPN	person	_	2	flat:name	_	_
4	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	obj	_	_
5	wahardd	gwahardd	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	1	ccomp	_	_
6	o	o	ADP	prep	_	8	case	_	SpaceAfter=No
7	'r	y	DET	art	_	8	det	_	_
8	dafarn	tafarn	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	5	obl	_	_
9	am	am	ADP	prep	_	10	case	_	_
10	helpu	helpu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	obl	_	_
11	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	nmod:poss	_	_
12	hunan	hun	PRON	refl	Number=Sing|PronType=Rcp	10	obl	_	_
13	i	i	ADP	prep	_	15	case	_	SpaceAfter=No
14	'r	y	DET	art	_	15	det	_	_
15	cwrw	cwrw	NOUN	noun	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
16	.	.	PUNCT	punct	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	5	case	_	_
5	ti	ti	PRON	indep	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	ddod	dod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	3	nmod	_	_
7	cyn	cyn	ADP	prep	_	8	case	_	_
8	yfory	yfory	ADV	adv	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	cop	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	duw	duw	NOUN	noun	Gender=Masc|Number=Sing	7	nsubj	_	_
4	hwn	hwn	PRON	dem	Gender=Masc|PronType=Dem	3	amod	_	_
5	hefyd	hefyd	ADV	adv	_	7	advmod	_	_
6	yn	yn	PART	pred	_	7	case:pred	_	_
7	gysylltiedig	cysylltiedig	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
8	ag	ag	ADP	prep	_	9	case	_	_
9	amser	amser	NOUN	noun	Gender=Masc|Number=Sing	7	obl	_	_
10	a	a	CCONJ	cconj	_	11	cc	_	_
11	henaint	henaint	NOUN	noun	Gender=Masc|Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\s\n

~~~


