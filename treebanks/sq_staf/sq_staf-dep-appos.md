---
layout: base
title:  'Statistics of appos in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `appos`

This relation is universal.

10 nodes (0%) are attached to their parents as `appos`.

10 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3.

The following 6 pairs of parts of speech are connected with `appos`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	U	u	AUX	_	_	2	aux	_	_
2	shfaq	shfaj	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	0	root	_	_
3	të	të	PART	_	_	5	mark	_	_
4	më	më	PRON	Case=Acc|Number=Sing|Person=1|PronType=Prs	_	5	iobj	_	_
5	kujtonte	kujtoj	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	_	2	xcomp	_	_
6	mëkatin	mëkat	NOUN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	_	5	obj	_	_
7	tim	im	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	_	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_
9	për	për	ADP	_	_	10	case	_	_
10	pasojë	pasojë	NOUN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	_	5	obl	_	_
11	ndëshkimin	ndëshkim	NOUN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	_	10	appos	_	_
12	tim	im	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	_	11	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	Por	Por	CCONJ	_	_	22	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	dajë	dajë	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	22	nsubj	_	_
4	Berti	Berti	PROPN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	pasi	pasi	SCONJ	_	_	7	mark	_	_
7	gjerbi	gjerb	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	22	advcl	_	_
8	edhe	edhe	ADV	_	_	9	advmod	_	_
9	gllënjkën	gllënjkë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	obj	_	_
10	e	e	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	11	det:adj	_	_
11	fundit	fundit	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
12	të	të	DET	_	Gender=Fem|Number=Sing	13	det	_	_
13	verës	verë	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod:poss	_	_
14	dhe	dhe	CCONJ	_	_	15	cc	_	_
15	uli	ul	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	7	conj	_	_
16	gotën	gotë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	15	obj	_	_
17	e	e	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	18	det:adj	_	_
18	qelqtë	qelqtë	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	_
19	mbi	mbi	ADP	_	_	20	case	_	_
20	tryezë	tryezë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	15	obl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	7	punct	_	_
22	tha	them	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
23	se	se	SCONJ	_	_	30	mark	_	SpaceAfter=No
24	,	,	PUNCT	_	_	23	punct	_	_
25	tekefundit	tekefundit	ADV	_	_	30	advmod	_	SpaceAfter=No
26	,	,	PUNCT	_	_	25	punct	_	_
27	nuk	nuk	PART	_	_	30	advmod	_	_
28	ishte	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	30	cop	_	_
29	një	një	DET	_	_	30	det	_	_
30	ide	ide	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	22	ccomp	_	_
31	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	32	det:adj	_	_
32	keqe	keq	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	30	amod	_	_
33	dhe	dhe	CCONJ	_	_	38	cc	_	_
34	se	se	SCONJ	_	_	38	mark	_	_
35	nuk	nuk	PART	_	_	38	advmod	_	_
36	do	do	PART	_	_	38	mark	_	_
37	u	u	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	38	iobj	_	_
38	kushtonte	kushtoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	30	conj	_	_
39	asgjë	asgjë	PRON	_	PronType=Ind	38	obj	_	SpaceAfter=No
40	,	,	PUNCT	_	_	38	punct	_	_
41	nëse	nëse	SCONJ	_	_	43	mark	_	_
42	e	e	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	43	obj	_	_
43	mbanin	mbaj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	38	advcl	_	_
44	parasysh	parasysh	ADV	_	_	43	advmod	_	_
45	si	si	ADP	_	_	47	case	_	_
46	një	një	DET	_	_	47	det	_	_
47	mundësi	mundësi	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	43	obl	_	SpaceAfter=No
48	.	.	PUNCT	_	_	22	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 appos	color:blue
1	Siç	siç	SCONJ	_	_	2	mark	_	end_char=573|start_char=570
2	bante	ban	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	end_char=579|start_char=574
3	dikur	dikoj	ADV	_	AdvType=Tim	2	advmod	_	end_char=585|start_char=580
4	i	i	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	5	det:adj	_	end_char=587|start_char=586
5	urti	urt	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	end_char=592|start_char=588
6	Odise	Odise	PROPN	_	_	5	appos	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	end_char=599|start_char=598

~~~


