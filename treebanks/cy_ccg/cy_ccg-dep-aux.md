---
layout: base
title:  'Statistics of aux in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `aux`

This relation is universal.

396 nodes (4%) are attached to their parents as `aux`.

394 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14393939393939.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (388; 98% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	wy	bod	VERB	verb	Number=Sing|Person=1|Tense=Pres	0	root	_	_
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	Mae	bod	VERB	verb	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	Nest	dod	VERB	verb	Mutation=NM|Number=Sing|Person=2|Tense=Past	1	nsubj	_	_
3	wedi	wedi	AUX	ante	_	6	aux	_	_
4	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	6	cop	_	_
5	yn	yn	PART	pred	_	6	case:pred	_	_
6	dda	da	ADJ	pos	Degree=Pos|Mutation=SM	1	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 aux	color:blue
1	Tarddodd	tarddu	VERB	verb	Number=Sing|Person=3|Tense=Past	0	root	_	_
2	yr	y	DET	art	_	3	det	_	_
3	enw	enw	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
4	Saesneg	saesneg	ADJ	pos	Degree=Pos	3	amod	_	_
5	ar	ar	ADP	prep	_	7	case	_	_
6	yr	y	DET	art	_	7	det	_	_
7	iaith	iaith	NOUN	noun	Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	11	punct	_	_
9	sef	sef	CCONJ	cconj	_	11	cc	_	_
10	"	"	PUNCT	punct	_	11	punct	_	SpaceAfter=No
11	Welsh	welsh	NOUN	noun	_	7	appos	_	SpaceAfter=No
12	"	"	PUNCT	punct	_	11	punct	_	SpaceAfter=No
13	,	,	PUNCT	punct	_	15	punct	_	_
14	fel	fel	CCONJ	cconj	_	15	cc	_	_
15	ecsonim	ecsonim	NOUN	noun	Gender=Masc|Number=Sing	1	obl	_	_
16	a	a	PRON	rel	PronType=Rel	17	obj	_	_
17	roddwyd	rhoi	VERB	verb	Mutation=SM|Person=Impers|Tense=Past	15	acl:relcl	_	_
18	i	i	ADP	prep	_	20	case	_	SpaceAfter=No
19	'w	eu	PRON	dep	Number=Plur|Person=3|Poss=Yes|PronType=Prs	20	nmod:poss	_	_
20	siaradwyr	siaradwr	NOUN	noun	Gender=Masc|Number=Plur	17	obl	_	_
21	gan	gan	ADP	prep	_	23	case	_	_
22	yr	y	DET	art	_	23	det	_	_
23	Eingl-Sacsoniaid	Eingl-Sacsoniad	NOUN	noun	Number=Plur	17	obl:agent	_	SpaceAfter=No
24	,	,	PUNCT	punct	_	25	punct	_	_
25	sy	bod	VERB	verb	Number=Sing|Person=3|Relative=Rel|Tense=Pres	15	acl:relcl	_	SpaceAfter=No
26	'n	yn	AUX	impf	_	25	aux	_	_
27	golygu	golygu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	25	xcomp	_	_
28	"	"	PUNCT	punct	_	29	punct	_	SpaceAfter=No
29	iaith	iaith	NOUN	noun	Gender=Fem|Number=Sing	27	obj	_	_
30	estron	estron	ADJ	pos	Degree=Pos	29	amod	_	SpaceAfter=No
31	"	"	PUNCT	punct	_	29	punct	_	SpaceAfter=No
32	.	.	PUNCT	punct	_	25	punct	_	SpacesAfter=\n

~~~


