---
layout: base
title:  'Statistics of flat in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="gd_arcosg-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="gd_arcosg-dep-flat-name.html">flat:name</a></tt>.

371 nodes (1%) are attached to their parents as `flat`.

371 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35309973045822.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (362; 98% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="gd_arcosg-pos-DET.html">DET</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	is	is	AUX	Wp-i	Tense=Pres	3	cop	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	fixed	_	_
3	àireamh	àireamh	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	fòn	fòn	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	dìomhair	dìomhair	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
6	a’	an	DET	Tdsmg	Case=Gen|Gender=Masc|Number=Sing	7	det	_	_
7	phoilis	poilis	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
8	an	an	ADP	Sp	_	9	case	_	_
9	Inbhir	Inbhir	PROPN	Nt	_	7	nmod	_	_
10	Nis	Nis	PROPN	Nt	_	9	flat	_	_
11	-	-	PUNCT	Fb	_	3	punct	_	_
12	720	720	NUM	Mn	_	3	nsubj	_	_
13	367	367	NUM	Mn	_	12	flat	_	SpaceAfter=No
14	.	.	PUNCT	Fe	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat	color:blue
1	Tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	Dé	Dé	PROPN	Nn	_	1	nsubj	_	_
3	a-Nis	a-Nis	PROPN	Nn	_	2	flat:name	_	SpaceAfter=No
4	?	?	PROPN	Nn	_	2	flat:name	_	_
5	a’	ag	PART	Sa	_	6	case	_	_
6	frithealadh	fritheal	NOUN	Nv	VerbForm=Vnoun	1	xcomp:pred	_	_
7	dhan	do	ADP	Sp	_	9	case	_	_
8	an	an	DET	Tdsf	Gender=Fem|Number=Sing	9	det	_	_
9	òigridh	òigridh	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	6	obl	_	_
10	cuideachd	cuideachd	ADV	Rg	_	6	advmod	_	_
11	air	air	ADP	Sp	_	12	case	_	_
12	BBC	BBC	NOUN	Y	_	6	obl	_	SpaceAfter=No
13	2	2	NUM	Mn	_	12	flat	_	_
14	feasgar	feasgar	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	6	obl:tmod	_	_
15	Diardaoin	diardaoin	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 flat	color:blue
1	Chaidh	rach	VERB	V-s	Tense=Past	0	root	_	_
2	am	an	DET	Tdsm	Gender=Masc|Number=Sing	3	det	_	_
3	Ball-Pàrlamaid	ball-pàrlamaid	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
4	Libearalach	libearalach	ADJ	Aq-smn	Case=Nom|Gender=Masc|Number=Sing	3	amod	_	_
5	Deamocratach	deamocratach	ADJ	Aq-smn	Case=Nom|Gender=Masc|Number=Sing	3	amod	_	SpaceAfter=No
6	,	,	PUNCT	Fi	_	7	punct	_	_
7	Teàrlach	Teàrlach	PROPN	Nn-mn	Case=Nom|Gender=Masc	3	appos	_	_
8	Ceannadach	Ceannadach	PROPN	Nn	_	7	flat:name	_	_
9	as	as	ADP	Sp	_	10	case	_	_
10	àicheadh	àicheadh	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	_
11	gu	gu	PART	Qa	PartType=Cmpl	12	mark:prt	_	_
12	fulaing	fulaing	VERB	V-f--d	Tense=Fut	10	ccomp	_	_
13	an	an	DET	Tdsf	Gender=Fem|Number=Sing	14	det	_	_
14	sgìre	sgìre	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	_
15	pàrlamaid	pàrlamaid	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	_
16	aig	aig	ADP	Sp	_	17	case	_	_
17	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	14	nmod	_	_
18	,	,	PUNCT	Fi	_	19	punct	_	_
19	Ros	Ros	PROPN	Nt	_	14	appos	_	SpaceAfter=No
20	,	,	PUNCT	Fi	_	21	punct	_	_
21	an	an	DET	Tdsm	Gender=Masc|Number=Sing	19	conj	_	_
22	t-Eilean	Eilean	PROPN	Nt	_	21	flat	_	_
23	Sgiathanach	Sgiathanach	PROPN	Nt	_	21	flat	_	_
24	agus	agus	CCONJ	Cc	_	25	cc	_	_
25	Inbhir	Inbhir	PROPN	Nt	_	19	conj	_	_
26	Nis	Nis	PROPN	Nt	_	25	flat	_	_
27	an	an	PROPN	Nt	_	25	flat	_	_
28	Iar	Iar	PROPN	Nt	_	25	flat	_	SpaceAfter=No
29	,	,	PUNCT	Fi	_	31	punct	_	_
30	ma	ma	SCONJ	Cs	_	31	mark	_	_
31	thèid	rach	VERB	V-f	Tense=Fut	12	conj	_	_
32	a	a	DET	Dp3sm	Gender=Masc|Number=Sing|Person=3|Poss=Yes	33	obj	_	_
33	thaghadh	tagh	NOUN	Nv	VerbForm=Inf	31	xcomp	_	_
34	mar	mar	SCONJ	Cs	_	36	mark	_	_
35	a	a	PART	Q-r	PartType=Vb|PronType=Rel	36	mark:prt	_	_
36	tha	bi	VERB	V-p	Tense=Pres	31	advcl	_	_
37	dùil	dùil	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	36	nsubj	_	_
38	mar	mar	ADP	Sp	_	39	case	_	_
39	cheannard	ceannard	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	37	nmod	_	_
40	ùr	ùr	ADJ	Aq-smd	Case=Dat|Gender=Masc|Number=Sing	39	amod	_	_
41	air	air	ADP	Sp	_	44	case	_	_
42	na	an	DET	Tdpm	Gender=Masc|Number=Plur	44	det	_	_
43	Lib	lib	ADJ	Ar	_	44	amod	_	_
44	Deamaich	deamach	NOUN	Ncpmd	Case=Dat|Gender=Masc|Number=Plur	39	nmod	_	SpaceAfter=No
45	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


