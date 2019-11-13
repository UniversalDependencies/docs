---
layout: base
title:  'Statistics of flat in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="cy_ccg-dep-flat-name.html">flat:name</a></tt>.

94 nodes (1%) are attached to their parents as `flat`.

94 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0531914893617.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (83; 88% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Fe	fe	PART	aff	_	3	advmod	_	SpaceAfter=No
2	'i	ei	PRON	dep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	sefydlwyd	sefydlu	VERB	verb	Mood=Ind|Person=0|Tense=Past	0	root	_	_
4	yn	yn	ADP	prep	_	5	case	_	_
5	1922	1922	NUM	num	_	3	obl	_	_
6	gan	gan	ADP	prep	_	7	case	_	_
7	Syr	syr	NOUN	noun	Gender=Masc|Number=Sing	3	obl:agent	_	_
8	Ifan	Ifan	PROPN	person	_	7	flat	_	_
9	ab	ab	NOUN	noun	Gender=Masc|Number=Sing	8	flat:name	_	_
10	Owen	Owen	PROPN	person	_	9	flat:name	_	_
11	Edwards	Edwards	PROPN	person	_	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Rhyddhawyd	rhyddhau	VERB	verb	Mood=Ind|Person=0|Tense=Past	0	root	_	_
2	un	un	NUM	num	_	3	nummod	_	_
3	albwm	albwm	NOUN	noun	Gender=Masc|Number=Sing	1	obj	_	_
4	o	o	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	enw	enw	NOUN	noun	Gender=Masc|Number=Sing	3	nmod	_	_
7	Cariad	cariad	NOUN	noun	Gender=Masc|Number=Sing	6	flat	_	_
8	Cywir	Cywir	ADJ	pos	Degree=Pos|Number=Sing	7	amod	_	_
9	ar	ar	ADP	prep	_	10	case	_	_
10	label	label	NOUN	noun	Gender=Fem|Number=Sing	1	obl	_	_
11	Sain	Sain	PROPN	org	Gender=Fem|Number=Sing	10	flat	_	_
12	ym	yn	ADP	prep	_	13	case	_	_
13	1984	1984	NUM	num	_	1	obl	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 flat	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
2	'n	yn	AUX	impf	_	3	aux	_	_
3	gwahanu	gwahanu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
4	yr	y	DET	art	_	5	det	_	_
5	IJsselmeer	Ijsselmeer	PROPN	place	_	3	obj	_	_
6	oddi	oddi	ADP	prep	_	9	case	_	_
7	wrth	wrth	ADP	prep	_	6	fixed	_	_
8	y	y	DET	art	_	9	det	_	_
9	Waddenzee	Waddenzee	PROPN	place	Gender=Masc|Number=Sing	3	obj	_	_
10	ac	a	CCONJ	cconj	_	12	cc	_	_
11	yn	yn	AUX	impf	_	12	aux	_	_
12	cysylltu	cysylltu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	3	conj	_	_
13	taleithiau	talaith	NOUN	noun	Gender=Masc|Number=Plur	12	obj	_	_
14	Noord-Holland	Noord-holland	PROPN	place	Gender=Fem|Number=Sing	13	nmod	_	_
15	a	a	CCONJ	cconj	_	16	cc	_	_
16	Friesland	Friesland	PROPN	place	Gender=Fem|Number=Sing	14	conj	_	_
17	ar	ar	ADP	prep	_	20	case	_	_
18	hyd	hyd	ADP	prep	_	17	fixed	_	_
19	y	y	DET	art	_	20	det	_	_
20	briffordd	priffordd	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	12	obl	_	_
21	Rijksweg	Rijksweg	PROPN	place	_	20	flat	_	_
22	7	7	NUM	num	_	20	flat	_	SpaceAfter=No
23	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


