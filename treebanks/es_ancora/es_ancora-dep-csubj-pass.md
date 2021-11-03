---
layout: base
title:  'Statistics of csubj:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 25 csubj:pass	color:blue
1	De	de	ADP	sps00	_	5	case	5:case	MWE=De_acuerdo_con|MWEPOS=ADP
2	acuerdo	acuerdo	NOUN	_	_	1	fixed	1:fixed	_
3	con	con	ADP	_	_	1	fixed	1:fixed	_
4	su	su	DET	dp3cs0	Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	5:det	ClusterId=CESS-CAST-P-20000401-64-c3|ClusterType=Spec|MentionSpan=4|MentionMisc=CorefType:ident
5	versión	versión	NOUN	ncfs000	Gender=Fem|Number=Sing	10	obl	10:obl	SpaceAfter=No|ClusterId=CESS-CAST-P-20000401-64-s10.sn.6|ClusterType=Gen|MentionSpan=4-5
6	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
7	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
8	agente	agente	NOUN	nccs000	Number=Sing	10	nsubj	10:nsubj	ClusterId=CESS-CAST-P-20000401-64-c4|ClusterType=Gen|MentionSpan=7-8|MentionMisc=CorefType:ident
9	la	él	PRON	pp3fsa00	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	10	obj	10:obj	ClusterId=CESS-CAST-P-20000401-64-c3|ClusterType=Spec|MentionSpan=9|MentionMisc=CorefType:ident
10	insultó	insultar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
11	aludiendo	aludir	VERB	vmg0000	VerbForm=Ger	10	advcl	10:advcl	_
12	a	a	ADP	sps00	_	14	case	14:case	_
13	sus	su	DET	dp3cp0	Number=Plur|Person=3|Poss=Yes|PronType=Prs	14	det	14:det	ClusterId=CESS-CAST-P-20000401-64-c3|ClusterType=Spec|MentionSpan=13|MentionMisc=CorefType:ident
14	orígenes	origen	NOUN	ncmp000	Gender=Masc|Number=Plur	11	obj	11:obj	ClusterId=CESS-CAST-P-20000401-64-s10.sn.28|ClusterType=Gen|MentionSpan=13-15
15	étnicos	étnico	ADJ	aq0mp0	Gender=Masc|Number=Plur	14	amod	14:amod	SpaceAfter=No
16	,	,	PUNCT	fc	PunctType=Comm	24	punct	24:punct	_
17	e	e	CCONJ	cc	_	24	cc	24:cc	_
18	incluso	incluso	ADV	rg	_	24	advmod	24:advmod	_
19	en	en	ADP	sps00	_	21	case	21:case	_
20	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	21:det	_
21	grabación	grabación	NOUN	ncfs000	Gender=Fem|Number=Sing	18	nmod	18:nmod	ClusterId=CESS-CAST-P-20000401-64-c1|ClusterType=Gen|MentionSpan=20-21|MentionMisc=CorefType:ident
22	se	él	PRON	p0000000	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	24	expl:impers	24:expl:impers	_
23	le	él	PRON	pp30sa00	Case=Dat|Number=Sing|Person=3|PronType=Prs	24	obj	24:obj	ClusterId=CESS-CAST-P-20000401-64-c4|ClusterType=Gen|MentionSpan=23|MentionMisc=CorefType:ident
24	oye	oír	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	conj	10:conj	_
25	gritar	gritar	VERB	vmn0000	VerbForm=Inf	24	csubj:pass	24:csubj:pass	_
26	en	en	ADP	sps00	_	27	case	27:case	_
27	tono	tono	NOUN	ncms000	Gender=Masc|Number=Sing	25	obl	25:obl	ClusterId=CESS-CAST-P-20000401-64-s10.sn.65|ClusterType=Gen|MentionSpan=27-28
28	indignado	indignado	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	27	amod	27:amod	SpaceAfter=No
29	:	:	PUNCT	fd	PunctType=Colo	35	punct	35:punct	_
30	"	"	PUNCT	fe	PunctType=Quot	35	punct	35:punct	SpaceAfter=No
31	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	35	punct	35:punct	SpaceAfter=No
32	Qué	qué	PRON	pt0cs000	Number=Sing|PronType=Int,Rel	35	nsubj	35:nsubj	_
33	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	cop	35:cop	_
34	este	este	DET	dd0ms0	Gender=Masc|Number=Sing|PronType=Dem	35	det	35:det	_
35	zoco	zoco	NOUN	ncms000	Gender=Masc|Number=Sing	25	ccomp	25:ccomp	SpaceAfter=No|ClusterId=CESS-CAST-P-20000401-64-s10.sn.81|ClusterType=Gen|MentionSpan=34-35
36	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	35	punct	35:punct	_
37	Todo	todo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Tot	38	det	38:det	_
38	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	39	det	39:det	_
39	mundo	mundo	NOUN	ncms000	Gender=Masc|Number=Sing	35	obl	35:obl	ClusterId=CESS-CAST-P-20000401-64-s10.sn.88|ClusterType=Gen|MentionSpan=37-39
40	contra	contra	ADP	sps00	_	42	case	42:case	_
41	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	42	det	42:det	_
42	coche	coche	NOUN	ncms000	Gender=Masc|Number=Sing	39	nmod	39:nmod	SpaceAfter=No|ClusterId=CESS-CAST-P-20000401-64-c11|ClusterType=Gen|MentionSpan=41-42|MentionMisc=CorefType:ident
43	"	"	PUNCT	fe	PunctType=Quot	35	punct	35:punct	SpaceAfter=No
44	.	.	PUNCT	fp	PunctType=Peri	10	punct	10:punct	_

~~~


