---
layout: base
title:  'Statistics of expl:impers in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="es_ancora-dep-expl-pv.html">expl:pv</a></tt>.

356 nodes (0%) are attached to their parents as `expl:impers`.

337 instances of `expl:impers` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30337078651685.

The following 3 pairs of parts of speech are connected with `expl:impers`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (354; 99% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:impers	color:blue
1	No	no	ADV	rn	Polarity=Neg	3	advmod	3:advmod	_
2	se	él	PRON	p0000000	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:impers	3:expl:impers	_
3	trata	tratar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	de	de	ADP	sps00	_	6	case	6:case	_
5	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	cumplido	cumplido	NOUN	ncms000	Gender=Masc|Number=Sing	3	obj	3:obj	_
7	vaporoso	vaporoso	ADJ	aq0ms0	Gender=Masc|Number=Sing	6	amod	6:amod	_
8	y	y	CCONJ	cc	_	9	cc	9:cc	_
9	obsequioso	obsequioso	ADJ	aq0ms0	Gender=Masc|Number=Sing	7	conj	7:conj	SpaceAfter=No
10	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 43 expl:impers	color:blue
1	Se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	2	expl:pass	2:expl:pass	_
2	establecieron	establecer	VERB	vmis3p0	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	también	también	ADV	rg	_	2	advmod	2:advmod	_
4	tres	tres	NUM	dn0cp0	Number=Plur|NumType=Card	5	nummod	5:nummod	_
5	tipos	tipo	NOUN	ncmp000	Gender=Masc|Number=Plur	2	nsubj	2:nsubj	_
6	de	de	ADP	sps00	_	7	case	7:case	_
7	duelo	duelo	NOUN	ncms000	Gender=Masc|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
8	:	:	PUNCT	fd	PunctType=Colo	10	punct	10:punct	_
9	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	10:det	_
10	decretorios	decretorio	NOUN	ncmp000	Gender=Masc|Number=Plur	5	appos	5:appos	_
11	o	o	CCONJ	cc	_	12	cc	12:cc	_
12	a	a	ADP	rg	_	10	conj	10:conj	MWE=a_muerte|MWEPOS=ADV
13	muerte	muerte	NOUN	_	_	12	fixed	12:fixed	SpaceAfter=No
14	,	,	PUNCT	fc	PunctType=Comm	16	punct	16:punct	_
15	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	16:det	_
16	propugnatorios	propugnatorio	NOUN	ncmp000	Gender=Masc|Number=Plur	10	appos	10:appos	_
17	o	o	CCONJ	cc	_	16	cc	16:cc	_
18	a	a	ADP	aq0cn0	_	20	case	20:case	MWE=a_primera_sangre|MWEPOS=ADJ
19	primera	primera	ADJ	_	_	16	appos	16:appos	_
20	sangre	sangre	ADJ	_	_	19	amod	19:amod	SpaceAfter=No
21	,	,	PUNCT	fc	PunctType=Comm	26	punct	26:punct	_
22	en	en	ADP	sps00	_	24	case	24:case	_
23	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	24	det	24:det	_
24	que	que	PRON	pr0cn000	PronType=Int,Rel	26	obl	26:obl	_
25	se	él	PRON	p0000000	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	26	expl:impers	26:expl:impers	_
26	combatía	combatir	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	acl	16:acl	_
27	para	para	ADP	sps00	_	28	mark	28:mark	_
28	lavar	lavar	VERB	vmn0000	VerbForm=Inf	26	advcl	26:advcl	_
29	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	30:det	_
30	honor	honor	NOUN	ncms000	Gender=Masc|Number=Sing	28	obj	28:obj	_
31	pero	pero	CCONJ	cc	_	33	cc	33:cc	_
32	sin	sin	ADP	sps00	_	33	case	33:case	_
33	ánimo	ánimo	NOUN	ncms000	Gender=Masc|Number=Sing	28	conj	28:conj	_
34	de	de	ADP	sps00	_	35	mark	35:mark	_
35	matar	matar	VERB	vmn0000	VerbForm=Inf	33	acl	33:acl	_
36	y	y	CCONJ	cc	_	45	cc	45:cc	_
37	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	45	det	45:det	_
38	satisfactorios	satisfactorio	ADJ	aq0mp0	Gender=Masc|Number=Plur	45	amod	45:amod	SpaceAfter=No
39	,	,	PUNCT	fc	PunctType=Comm	45	punct	45:punct	_
40	en	en	ADP	sps00	_	42	case	42:case	_
41	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	42	det	42:det	_
42	que	que	PRON	pr0cn000	PronType=Int,Rel	45	obl	45:obl	_
43	se	él	PRON	p0000000	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	45	expl:impers	45:expl:impers	_
44	estaba	estar	AUX	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	45	cop	45:cop	_
45	dispuesto	dispuesto	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	10	conj	10:conj	_
46	a	a	ADP	sps00	_	47	mark	47:mark	_
47	desistir	desistir	VERB	vmn0000	VerbForm=Inf	45	acl	45:acl	_
48	de	de	ADP	spcms	_	50	case	50:case	_
49	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	50	det	50:det	_
50	enfrentamiento	enfrentamiento	NOUN	ncms000	Gender=Masc|Number=Sing	47	obj	47:obj	_
51	en	en	ADP	sps00	_	53	case	53:case	_
52	cualquier	cualquiera	DET	di0cs0	Number=Sing|PronType=Ind	53	det	53:det	_
53	momento	momento	NOUN	ncms000	Gender=Masc|Number=Sing	47	obl	47:obl	_
54	si	si	SCONJ	cs	_	57	mark	57:mark	_
55	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	56	det	56:det	_
56	ofensor	ofensor	NOUN	ncms000	Gender=Masc|Number=Sing	57	nsubj	57:nsubj	_
57	prestaba	prestar	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	45	advcl	45:advcl	_
58	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	60	det	60:det	_
59	debida	debido	ADJ	aq0fsp	Gender=Fem|Number=Sing|VerbForm=Part	60	amod	60:amod	_
60	satisfacción	satisfacción	NOUN	ncfs000	Gender=Fem|Number=Sing	57	obj	57:obj	SpaceAfter=No
61	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 expl:impers	color:blue
1	Todas	todo	DET	di0fp0	Gender=Fem|Number=Plur|PronType=Tot	2	det	2:det	_
2	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	3:det	_
3	guerras	guerra	NOUN	ncfp000	Gender=Fem|Number=Plur	5	nsubj	5:nsubj	ClusterId=CESS-CAST-P-19990701-26_a-c20|ClusterType=Gen|MentionSpan=1-3
4	son	ser	AUX	vsip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
5	infames	infame	ADJ	aq0cp0	Number=Plur	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
7	se	él	PRON	p0000000	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	12	expl:impers	12:expl:impers	_
8	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	12:aux	ClusterId=CESS-CAST-P-19990701-26_a-c21|ClusterType=|MentionSpan=7-13
9	de	de	ADP	sps00	_	12	case	12:case	_
10	estar	estar	AUX	vmn0000	VerbForm=Inf	12	cop	12:cop	_
11	contra	contra	ADP	sps00	_	12	case	12:case	_
12	ellas	él	PRON	pp3fp000	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs	5	advcl	5:advcl	SpaceAfter=No|ClusterId=CESS-CAST-P-19990701-26_a-c20|ClusterType=Gen|MentionSpan=12|MentionMisc=CorefType:ident
13	,	,	PUNCT	fc	PunctType=Comm	17	punct	17:punct	_
14	pero	pero	CCONJ	cc	_	17	cc	17:cc	_
15	eso	ese	PRON	pd0ns000	Number=Sing|PronType=Dem	17	nsubj	17:nsubj	ClusterId=CESS-CAST-P-19990701-26_a-c21|ClusterType=|MentionSpan=15|MentionMisc=ClusterTypeMismatch:Gen:,CorefType:dx.prop
16	no	no	ADV	rn	Polarity=Neg	17	advmod	17:advmod	_
17	significa	significar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	12:conj	_
18	que	que	SCONJ	cs	_	22	mark	22:mark	_
19	no	no	ADV	rn	Polarity=Neg	22	advmod	22:advmod	_
20	debas	deber	AUX	vmsp2s0	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	22	aux	22:aux	_
21	estar	estar	AUX	vmn0000	VerbForm=Inf	22	cop	22:cop	_
22	preparado	preparado	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	17	xcomp	17:xcomp	_
23	por	por	ADP	sps00	_	27	mark	27:mark	_
24	si	si	SCONJ	cs	_	27	mark	27:mark	_
25	te	tú	PRON	pp2cs000	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	27	iobj	27:iobj	ClusterId=CESS-CAST-P-19990701-26_a-c22|ClusterType=Gen|MentionSpan=25|MentionMisc=CorefType:ident
26	la	él	PRON	pp3fsa00	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	27	obj	27:obj	ClusterId=CESS-CAST-P-19990701-26_a-c20|ClusterType=Gen|MentionSpan=26|MentionMisc=CorefType:ident
27	declara	declarar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	advcl	22:advcl	_
28	alguien	alguien	PRON	pi0cs000	Number=Sing|PronType=Ind	27	nsubj	27:nsubj	SpaceAfter=No|ClusterId=CESS-CAST-P-19990701-26_a-s27.sn.68|ClusterType=Gen|MentionSpan=28
29	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


