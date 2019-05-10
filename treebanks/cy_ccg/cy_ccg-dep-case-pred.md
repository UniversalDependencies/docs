---
layout: base
title:  'Statistics of case:pred in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `case:pred`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-case.html">case</a></tt>.

227 nodes (2%) are attached to their parents as `case:pred`.

227 instances of `case:pred` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07488986784141.

The following 6 pairs of parts of speech are connected with `case:pred`: <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (151; 67% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (66; 29% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (5; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case:pred	color:blue
1	Mae	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	7	cop	_	SpaceAfter=No
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case:pred	color:blue
1	Mae	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case:pred	color:blue
1	Yn	yn	PART	pred	_	2	case:pred	_	_
2	ddigon	digon	ADV	adv	Mutation=SM	7	advmod	_	_
3	naturiol	naturiol	ADJ	pos	Degree=Pos	2	amod	_	_
4	mae	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	7	cop	_	_
5	bwyta	bwyta	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	7	nsubj	_	_
6	yn	yn	PART	pred	_	7	case:pred	_	_
7	rhan	rhan	NOUN	noun	Gender=Fem|Number=Sing	0	root	_	_
8	bwysig	pwysig	ADJ	pos	Degree=Pos|Mutation=SM	7	amod	_	_
9	o	o	ADP	prep	_	11	case	_	_
10	bob	pob	ADJ	pos	Degree=Pos|Mutation=SM	11	amod	_	_
11	gwyliau	gŵyl	NOUN	noun	Gender=Fem|Number=Plur	7	nmod	_	_
12	a	a	CCONJ	cconj	_	14	cc	_	_
13	phob	pob	ADJ	pos	Degree=Pos|Mutation=AM	14	amod	_	_
14	taith	taith	NOUN	noun	Gender=Fem|Number=Sing	11	conj	_	_
15	tramor	tramor	ADJ	pos	Degree=Pos	14	amod	_	SpaceAfter=No
16	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\n

~~~


