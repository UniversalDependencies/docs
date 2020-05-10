---
layout: base
title:  'Statistics of punct in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `punct`

This relation is universal.

2892 nodes (10%) are attached to their parents as `punct`.

1764 instances of `punct` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.53838174273859.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (1358; 47% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (1067; 37% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (234; 8% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (96; 3% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (51; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (32; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (27; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (14; 0% instances), <tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-PART.html">PART</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 punct	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	wy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	'n	yn	AUX	impf	_	4	aux	_	_
4	eilio	eilio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	Elin	Elin	PROPN	person	_	4	obj	_	_
6	Jones	Jones	PROPN	person	_	5	flat:name	_	_
7	ar	ar	ADP	prep	_	8	case	_	_
8	gyfer	cyfer	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
9	swydd	swydd	NOUN	noun	Gender=Fem|Number=Sing	8	nmod	_	_
10	y	y	DET	art	_	11	det	_	_
11	Llywydd	llywydd	NOUN	noun	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 punct	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	5	case	_	_
5	ti	ti	PRON	indep	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	ddod	dod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	3	acl	_	_
7	cyn	cyn	ADP	prep	_	8	case	_	_
8	yfory	yfory	ADV	adv	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 punct	color:blue
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


