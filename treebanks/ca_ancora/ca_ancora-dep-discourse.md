---
layout: base
title:  'Statistics of discourse in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `discourse`

This relation is universal.

1 nodes (0%) are attached to their parents as `discourse`.

1 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `discourse`: <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-INTJ.html">INTJ</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 21 discourse	color:blue
1	Torres	Torres	PROPN	np0000p	_	3	nsubj	3:nsubj	ArgTem=arg0:agt|Entity=(CESSCATAAP2001020524863c3-person-1-CorefType:ident,gstype:spec)
2	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	publicat	publicar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
4	anteriorment	anteriorment	ADV	rg	_	3	advmod	3:advmod	ArgTem=argM:tmp
5	dues	dos	NUM	dn0fp0	Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	6	nummod	6:nummod	Entity=(CESSCATAAP2001020524863c5-other-2-gstype:spec
6	novel·les	novel·la	NOUN	ncfp000	Gender=Fem|Number=Plur	3	obj	3:obj	ArgTem=arg1:pat
7	d'	de	ADP	sps00	_	8	case	8:case	SpaceAfter=No
8	humor	humor	NOUN	ncms000	Gender=Masc|Number=Sing	6	nmod	6:nmod	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	11	punct	11:punct	Entity=(CESSCATAAP2001020524863c5-other-3-CorefType:pred.definit,gstype:spec
10	'	'	PUNCT	fz	PunctType=Quot	11	punct	11:punct	SpaceAfter=No|Entity=(NOCOREF:Spec.other-other-2-gstype:spec(NOCOREF:Spec.other-other-2-gstype:spec
11	Ceguera	ceguera	NOUN	np0000a	Foreign=Yes	6	appos	6:appos	MWE=Ceguera_de_amor|MWEPOS=PROPN
12	de	de	ADP	_	Foreign=Yes	13	case	13:case	_
13	amor	amor	NOUN	_	Foreign=Yes	11	nmod	11:nmod	SpaceAfter=No
14	'	'	PUNCT	fz	PunctType=Quot	11	punct	11:punct	Entity=NOCOREF:Spec.other)
15	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	16	punct	16:punct	SpaceAfter=No|Entity=(NOCOREF:Spec.date-time-2-gstype:spec
16	1992	1992	NOUN	_	_	11	appos	11:appos	SpaceAfter=No
17	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	16	punct	16:punct	Entity=NOCOREF:Spec.date)NOCOREF:Spec.other)
18	i	i	CCONJ	cc	_	24	cc	24:cc	_
19	'	'	PUNCT	fz	PunctType=Quot	24	punct	24:punct	SpaceAfter=No|Entity=(NOCOREF:Spec.other-other-6-gstype:spec(NOCOREF:Spec.other-other-6-gstype:spec
20	¡	¡	PUNCT	np0000a	_	24	punct	24:punct	MWE=¡_Oh_,_es_él_!|MWEPOS=PROPN
21	Oh	oh	INTJ	_	_	24	discourse	24:discourse	_
22	,	,	PUNCT	_	_	21	punct	21:punct	_
23	es	ser	AUX	_	Foreign=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	24:cop	_
24	él	él	PRON	_	Foreign=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	conj	11:conj	_
25	!	!	PUNCT	_	_	24	punct	24:punct	SpaceAfter=No
26	'	'	PUNCT	fz	PunctType=Quot	24	punct	24:punct	Entity=NOCOREF:Spec.other)
27	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	28	punct	28:punct	SpaceAfter=No|Entity=(NOCOREF:Spec.date-time-2-gstype:spec
28	1994	1994	NOUN	_	_	24	appos	24:appos	SpaceAfter=No
29	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	28	punct	28:punct	SpaceAfter=No|Entity=NOCOREF:Spec.date)NOCOREF:Spec.other)CESSCATAAP2001020524863c5)CESSCATAAP2001020524863c5)
30	;	;	PUNCT	fx	PunctType=Semi	32	punct	32:punct	_
31	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	32	det	32:det	Entity=(CESSCATAAP2001020524863c6-other-2-gstype:spec
32	llibre	llibre	NOUN	ncms000	Gender=Masc|Number=Sing	6	appos	6:appos	_
33	de	de	ADP	sps00	_	34	case	34:case	_
34	viatges	viatge	NOUN	ncmp000	Gender=Masc|Number=Plur	32	nmod	32:nmod	SpaceAfter=No
35	,	,	PUNCT	fc	PunctType=Comm	37	punct	37:punct	Entity=(NOCOREF:Spec.other-other-3-gstype:spec
36	'	'	PUNCT	fz	PunctType=Quot	37	punct	37:punct	SpaceAfter=No|Entity=(CESSCATAAP2001020524863c6-other-2-CorefType:pred.definit,gstype:spec
37	Amor	Amor	PROPN	np0000a	_	32	appos	32:appos	MWE=Amor_América|MWEPOS=PROPN
38	América	América	PROPN	_	_	37	flat	37:flat	SpaceAfter=No
39	'	'	PUNCT	fz	PunctType=Quot	37	punct	37:punct	Entity=CESSCATAAP2001020524863c6)
40	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	41	punct	41:punct	SpaceAfter=No|Entity=(NOCOREF:Spec.date-time-2-gstype:spec
41	1994	1994	NOUN	_	_	37	appos	37:appos	SpaceAfter=No
42	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	41	punct	41:punct	SpaceAfter=No|Entity=NOCOREF:Spec.date)NOCOREF:Spec.other)
43	;	;	PUNCT	fx	PunctType=Semi	32	punct	32:punct	Entity=CESSCATAAP2001020524863c6)
44	i	i	CCONJ	cc	_	46	cc	46:cc	_
45	una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	46	det	46:det	Entity=(CESSCATAAP2001020524863c7--2
46	recopilació	recopilació	NOUN	ncfs000	Gender=Fem|Number=Sing	6	conj	6:conj	_
47	d'	de	ADP	sps00	_	48	case	48:case	SpaceAfter=No
48	articles	article	NOUN	ncmp000	Gender=Masc|Number=Plur	46	nmod	46:nmod	_
49	periodístics	periodístic	ADJ	aq0mp0	Gender=Masc|Number=Plur	48	amod	48:amod	SpaceAfter=No
50	,	,	PUNCT	fc	PunctType=Comm	54	punct	54:punct	Entity=(NOCOREF:Spec.other-other-5-gstype:spec(CESSCATAAP2001020524863c7--5-CorefType:pred.definit
51	'	'	PUNCT	fz	PunctType=Quot	54	punct	54:punct	SpaceAfter=No
52	Como	como	SCONJ	np0000a	Foreign=Yes	54	case	54:case	MWE=Como_una_gota|MWEPOS=PROPN
53	una	un	DET	_	Foreign=Yes|Gender=Fem|Number=Sing|PronType=Art	54	det	54:det	_
54	gota	gota	NOUN	_	Foreign=Yes	46	appos	46:appos	SpaceAfter=No
55	'	'	PUNCT	fz	PunctType=Quot	54	punct	54:punct	Entity=CESSCATAAP2001020524863c7)
56	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	57	punct	57:punct	SpaceAfter=No|Entity=(NOCOREF:Spec.date-time-2-gstype:spec
57	1996	1996	NOUN	_	_	54	appos	54:appos	SpaceAfter=No
58	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	57	punct	57:punct	SpaceAfter=No|Entity=NOCOREF:Spec.date)NOCOREF:Spec.other)CESSCATAAP2001020524863c7)
59	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


