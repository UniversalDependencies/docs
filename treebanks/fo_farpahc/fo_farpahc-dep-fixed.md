---
layout: base
title:  'Statistics of fixed in UD_Faroese-FarPaHC'
udver: '2'
---

## Treebank Statistics: UD_Faroese-FarPaHC: Relations: `fixed`

This relation is universal.

3 nodes (0%) are attached to their parents as `fixed`.

3 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `fixed`: <tt><a href="fo_farpahc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fo_farpahc-pos-SCONJ.html">SCONJ</a></tt> (2; 67% instances), <tt><a href="fo_farpahc-pos-ADV.html">ADV</a></tt>-<tt><a href="fo_farpahc-pos-ADP.html">ADP</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	ella	_	CCONJ	CONJ	_	3	cc	_	_
2	hví	_	ADV	WADV	_	3	advmod	_	_
3	stara	_	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
4	tit	_	PRON	PRO-N	Case=Nom	3	nsubj	_	_
5	á	_	ADP	P	_	6	case	_	_
6	okkum	_	PRON	PRO-A	Case=Acc	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	sum	_	SCONJ	C	_	16	mark	_	_
9	at	_	SCONJ	C	_	8	fixed	_	_
10	vit	_	PRON	PRO-N	Case=Nom	16	nsubj	_	_
11	av	_	ADP	P	_	13	case	_	_
12	egnum	_	ADJ	ADJ-D	Case=Dat|Degree=Pos	13	amod	_	_
13	mátti	_	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	16	obl	_	_
14	ella	_	CCONJ	CONJ	_	15	cc	_	_
15	gudsótta	_	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	13	conj	_	_
16	hövdu	_	AUX	HVDI	Mood=Ind|Tense=Past	3	advcl	_	_
17	gjört	_	VERB	DON	_	16	ccomp	_	_
18	tað	_	PRON	PRO-A	Case=Acc	16	obj	_	SpaceAfter=No
19	,	,	PUNCT	,	_	18	punct	_	_
20	at	_	SCONJ	C	_	22	mark	_	_
21	hann	_	PRON	PRO-N	Case=Nom	22	nsubj	_	_
22	gongur	_	VERB	VBPI	Mood=Ind|Tense=Pres	18	ccomp	_	SpaceAfter=No
23	?	?	PUNCT	.	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 33 fixed	color:blue
1	Men	_	CCONJ	CONJ	_	3	cc	_	_
2	eg	_	PRON	PRO-N	Case=Nom	3	nsubj	_	_
3	biði	_	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
4	ikki	_	ADV	NEG	_	3	advmod	_	_
5	eina	_	ADV	FP	_	3	advmod	_	_
6	fyri	_	ADP	P	_	7	case	_	_
7	hesum	_	DET	D-D	Case=Dat	12	obl	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	men	_	CCONJ	CONJ	_	12	cc	_	_
10	eisini	_	ADV	ALSO	_	12	advmod	_	_
11	fyri	_	ADP	P	_	12	case	_	_
12	teimum	_	PRON	PRO-D	Case=Dat	3	obl	_	SpaceAfter=No
13	,	,	PUNCT	,	_	12	punct	_	_
14	sum	_	SCONJ	C	_	18	mark	_	_
15	fyri	_	ADP	P	_	16	case	_	_
16	orð	_	NOUN	NS-A	Case=Acc|Definite=Ind|Number=Plur	18	obl	_	_
17	teirra	_	PRON	PRO-G	Case=Gen	16	nmod:poss	_	_
18	fara	_	VERB	VBPI	Mood=Ind|Tense=Pres	12	acl:relcl	_	_
19	at	_	PART	TO	_	20	mark	_	_
20	trúgva	_	VERB	VB	VerbForm=Inf	18	acl	_	_
21	á	_	ADP	P	_	22	case	_	_
22	meg	_	PRON	PRO-A	Case=Acc	20	obl	_	SpaceAfter=No
23	,	,	PUNCT	,	_	22	punct	_	_
24	at	_	SCONJ	C	_	29	mark	_	_
25	teir	_	PRON	PRO-N	Case=Nom	29	nsubj	_	_
26	allir	_	DET	Q-N	Case=Nom	25	amod	_	_
27	mega	_	AUX	MDPI	Mood=Ind|Tense=Pres	29	aux	_	_
28	vera	_	AUX	BE	VerbForm=Inf	29	cop	_	_
29	eitt	_	DET	ONE-N	Case=Nom	40	xcomp	_	SpaceAfter=No
30	,	,	PUNCT	,	_	29	punct	_	_
31	at	_	SCONJ	C	_	40	mark	_	_
32	eins	_	ADV	ADVR	Degree=Cmp	40	mark	_	_
33	og	_	ADP	P	_	32	fixed	_	_
34	tú	_	PRON	PRO-N	Case=Nom	40	obl	_	SpaceAfter=No
35	,	,	PUNCT	,	_	34	punct	_	_
36	faðir	_	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	34	vocative	_	SpaceAfter=No
37	,	,	PUNCT	,	_	36	punct	_	_
38	ert	_	AUX	BEPI	Mood=Ind|Tense=Pres	40	cop	_	_
39	í	_	ADP	P	_	40	case	_	_
40	mær	_	PRON	PRO-D	Case=Dat	3	advcl	_	_
41	og	_	CCONJ	CONJ	_	42	cc	_	_
42	eg	_	PRON	PRO-N	Case=Nom	34	conj	_	_
43	eri	_	AUX	BEPI	Mood=Ind|Tense=Pres	42	cop	_	_
44	í	_	ADP	P	_	45	case	_	_
45	tær	_	PRON	PRO-D	Case=Dat	42	obl	_	SpaceAfter=No
46	,	,	PUNCT	,	_	45	punct	_	_
47	teir	_	PRON	PRO-N	Case=Nom	52	nsubj	_	_
48	eisini	_	ADV	ALSO	_	52	advmod	_	_
49	mega	_	AUX	MDPI	Mood=Ind|Tense=Pres	52	aux	_	_
50	vera	_	AUX	BE	VerbForm=Inf	52	cop	_	_
51	í	_	ADP	P	_	52	case	_	_
52	okkum	_	PRON	PRO-D	Case=Dat	40	obl	_	SpaceAfter=No
53	,	,	PUNCT	,	_	52	punct	_	_
54	til	_	ADP	P	_	55	case	_	_
55	tess	_	PRON	PRO-G	Case=Gen	32	obl	_	_
56	at	_	SCONJ	C	_	59	mark	_	_
57	heimurin	_	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	59	nsubj	_	_
58	skal	_	AUX	MDPI	Mood=Ind|Tense=Pres	59	aux	_	_
59	trúgva	_	VERB	VB	VerbForm=Inf	55	ccomp	_	SpaceAfter=No
60	,	,	PUNCT	,	_	59	punct	_	_
61	at	_	SCONJ	C	_	64	mark	_	_
62	tú	_	PRON	PRO-N	Case=Nom	64	nsubj	_	_
63	hevur	_	AUX	HVPI	Mood=Ind|Tense=Pres	64	aux	_	_
64	sent	_	VERB	VBN	Tense=Past|VerbForm=Part	59	ccomp	_	_
65	meg	_	PRON	PRO-A	Case=Acc	64	obj	_	SpaceAfter=No
66	.	.	PUNCT	.	_	65	punct	_	_

~~~


