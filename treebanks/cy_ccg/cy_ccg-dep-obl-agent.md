---
layout: base
title:  'Statistics of obl:agent in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-obl.html">obl</a></tt>.

22 nodes (0%) are attached to their parents as `obl:agent`.

21 instances of `obl:agent` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.40909090909091.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (13; 59% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 23% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl:agent	color:blue
1	Fe	fe	PART	aff	_	3	advmod	_	SpaceAfter=No
2	'i	ei	PRON	dep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	sefydlwyd	sefydlu	VERB	verb	Person=Impers|Tense=Past	0	root	_	_
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 obl:agent	color:blue
1	Mae	bod	VERB	verb	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	app	app	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	sy	bod	AUX	aux	Number=Sing|Person=3|Relative=Rel|Tense=Pres	2	acl:relcl	_	_
4	newydd	newydd	AUX	ante	_	5	aux	_	SpacesAfter=\s\s
5	cael	cael	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	3	xcomp	_	_
6	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	lansio	lansio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	ccomp	_	SpaceAfter=No
8	'r	y	DET	art	_	9	det	_	_
9	wythnos	wythnos	NOUN	noun	Gender=Fem|Number=Sing	7	obl	_	_
10	yma	yma	ADV	adv	_	9	amod	_	_
11	gan	gan	ADP	prep	_	12	case	_	_
12	Brifysgol	prifysgol	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	7	obl:agent	_	_
13	Bangor	Bangor	PROPN	place	Number=Sing	12	flat	_	_
14	yn	yn	AUX	impf	_	15	aux	_	_
15	edrych	edrych	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
16	yn	yn	PART	pred	_	17	case:pred	_	_
17	hynod	hynod	ADJ	pos	Degree=Pos	15	advcl	_	_
18	o	o	ADP	prep	_	19	case	_	_
19	ddefnyddiol	defnyddiol	ADJ	pos	Degree=Pos|Mutation=SM	17	advmod	_	SpaceAfter=No
20	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 obl:agent	color:blue
1	Caiff	cael	VERB	verb	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	y	y	DET	art	_	3	det	_	_
3	copa	copa	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
4	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	wahanu	gwahanu	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	1	ccomp	_	_
6	oddi	oddi	ADP	prep	_	8	case	_	_
7	wrth	wrth	ADP	prep	_	6	fixed	_	_
8	Garnedd	Garnedd	PROPN	place	Gender=Masc|Number=Sing	5	obl	_	_
9	Llywelyn	Llywelyn	PROPN	place	_	8	flat:name	_	_
10	gan	gan	ADP	prep	_	11	case	_	_
11	Fwlch	Bwlch	PROPN	place	Gender=Masc|Mutation=SM|Number=Sing	5	obl:agent	_	_
12	Eryl	Eryl	PROPN	place	Gender=Masc|Number=Sing	11	flat:name	_	_
13	Farchog	Farchog	ADJ	pos	Degree=Pos|Number=Sing	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	punct	_	16	punct	_	_
15	gyda	gyda	ADP	prep	_	16	case	_	_
16	chlogwyni	clogwy	NOUN	noun	Gender=Fem|Mutation=AM|Number=Plur	5	obl	_	_
17	Craig	craig	NOUN	noun	Gender=Fem|Number=Sing	16	nmod	_	_
18	yr	y	DET	art	_	19	det	_	_
19	Ysfa	ysfa	NOUN	noun	Gender=Masc|Number=Sing	17	nmod	_	_
20	islaw	islaw	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	16	advmod	_	SpaceAfter=No
21	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\s\n

~~~


