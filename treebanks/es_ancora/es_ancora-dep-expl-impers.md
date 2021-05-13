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
1	No	no	ADV	_	Polarity=Neg	3	advmod	_	_
2	se	él	PRON	_	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:impers	_	_
3	trata	tratar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	_	_	6	case	_	_
5	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	cumplido	cumplido	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
7	vaporoso	vaporoso	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
8	y	y	CCONJ	_	_	9	cc	_	_
9	obsequioso	obsequioso	ADJ	_	Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 43 expl:impers	color:blue
1	Se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	2	expl:pass	_	_
2	establecieron	establecer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	también	también	ADV	_	_	2	advmod	_	_
4	tres	tres	NUM	_	Number=Plur|NumType=Card	5	nummod	_	_
5	tipos	tipo	NOUN	_	Gender=Masc|Number=Plur	2	nsubj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	duelo	duelo	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	:	:	PUNCT	_	PunctType=Colo	10	punct	_	_
9	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	decretorios	decretorio	NOUN	_	Gender=Masc|Number=Plur	5	appos	_	_
11	o	o	CCONJ	_	_	12	cc	_	_
12	a	a	ADP	_	_	10	conj	_	MWE=a_muerte|MWEPOS=ADV
13	muerte	muerte	NOUN	_	_	12	fixed	_	SpaceAfter=No
14	,	,	PUNCT	_	PunctType=Comm	16	punct	_	_
15	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	propugnatorios	propugnatorio	NOUN	_	Gender=Masc|Number=Plur	10	appos	_	_
17	o	o	CCONJ	_	_	16	cc	_	_
18	a	a	ADP	_	_	20	case	_	MWE=a_primera_sangre|MWEPOS=ADJ
19	primera	primera	ADJ	_	_	16	appos	_	_
20	sangre	sangre	ADJ	_	_	19	amod	_	SpaceAfter=No
21	,	,	PUNCT	_	PunctType=Comm	26	punct	_	_
22	en	en	ADP	_	_	24	case	_	_
23	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	24	det	_	_
24	que	que	PRON	_	PronType=Int,Rel	26	obl	_	_
25	se	él	PRON	_	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	26	expl:impers	_	_
26	combatía	combatir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	acl	_	_
27	para	para	ADP	_	_	28	mark	_	_
28	lavar	lavar	VERB	_	VerbForm=Inf	26	advcl	_	_
29	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	honor	honor	NOUN	_	Gender=Masc|Number=Sing	28	obj	_	_
31	pero	pero	CCONJ	_	_	33	cc	_	_
32	sin	sin	ADP	_	_	33	case	_	_
33	ánimo	ánimo	NOUN	_	Gender=Masc|Number=Sing	28	conj	_	_
34	de	de	ADP	_	_	35	mark	_	_
35	matar	matar	VERB	_	VerbForm=Inf	33	acl	_	_
36	y	y	CCONJ	_	_	45	cc	_	_
37	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	45	det	_	_
38	satisfactorios	satisfactorio	ADJ	_	Gender=Masc|Number=Plur	45	amod	_	SpaceAfter=No
39	,	,	PUNCT	_	PunctType=Comm	45	punct	_	_
40	en	en	ADP	_	_	42	case	_	_
41	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	42	det	_	_
42	que	que	PRON	_	PronType=Int,Rel	45	obl	_	_
43	se	él	PRON	_	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	45	expl:impers	_	_
44	estaba	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	45	cop	_	_
45	dispuesto	dispuesto	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	10	conj	_	_
46	a	a	ADP	_	_	47	mark	_	_
47	desistir	desistir	VERB	_	VerbForm=Inf	45	acl	_	_
48	de	de	ADP	_	_	50	case	_	_
49	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	50	det	_	_
50	enfrentamiento	enfrentamiento	NOUN	_	Gender=Masc|Number=Sing	47	obj	_	_
51	en	en	ADP	_	_	53	case	_	_
52	cualquier	cualquiera	DET	_	Number=Sing|PronType=Ind	53	det	_	_
53	momento	momento	NOUN	_	Gender=Masc|Number=Sing	47	obl	_	_
54	si	si	SCONJ	_	_	57	mark	_	_
55	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	56	det	_	_
56	ofensor	ofensor	NOUN	_	Gender=Masc|Number=Sing	57	nsubj	_	_
57	prestaba	prestar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	45	advcl	_	_
58	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	60	det	_	_
59	debida	debido	ADJ	_	Gender=Fem|Number=Sing|VerbForm=Part	60	amod	_	_
60	satisfacción	satisfacción	NOUN	_	Gender=Fem|Number=Sing	57	obj	_	SpaceAfter=No
61	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 expl:impers	color:blue
1	Todas	todo	DET	_	Gender=Fem|Number=Plur|PronType=Tot	2	det	_	_
2	las	el	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	guerras	guerra	NOUN	_	Gender=Fem|Number=Plur	5	nsubj	_	_
4	son	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	infames	infame	ADJ	_	Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	PunctType=Comm	5	punct	_	_
7	se	él	PRON	_	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	12	expl:impers	_	_
8	ha	haber	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
9	de	de	ADP	_	_	12	case	_	_
10	estar	estar	AUX	_	VerbForm=Inf	12	cop	_	_
11	contra	contra	ADP	_	_	12	case	_	_
12	ellas	él	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs	5	advcl	_	SpaceAfter=No
13	,	,	PUNCT	_	PunctType=Comm	17	punct	_	_
14	pero	pero	CCONJ	_	_	17	cc	_	_
15	eso	ese	PRON	_	Number=Sing|PronType=Dem	17	nsubj	_	_
16	no	no	ADV	_	Polarity=Neg	17	advmod	_	_
17	significa	significar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	_
18	que	que	SCONJ	_	_	22	mark	_	_
19	no	no	ADV	_	Polarity=Neg	22	advmod	_	_
20	debas	deber	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	22	aux	_	_
21	estar	estar	AUX	_	VerbForm=Inf	22	cop	_	_
22	preparado	preparado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	17	xcomp	_	_
23	por	por	ADP	_	_	27	mark	_	_
24	si	si	SCONJ	_	_	27	mark	_	_
25	te	tú	PRON	_	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	27	iobj	_	_
26	la	él	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	27	obj	_	_
27	declara	declarar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	advcl	_	_
28	alguien	alguien	PRON	_	Number=Sing|PronType=Ind	27	nsubj	_	SpaceAfter=No
29	.	.	PUNCT	_	PunctType=Peri	5	punct	_	_

~~~


