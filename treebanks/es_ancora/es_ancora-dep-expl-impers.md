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
1	No	no	ADV	ADV	Polarity=Neg	3	advmod	_	_
2	se	él	PRON	PRON	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:impers	_	_
3	trata	tratar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	ADP	AdpType=Prep	6	case	_	_
5	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	cumplido	cumplido	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
7	vaporoso	vaporoso	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	_
8	y	y	CCONJ	CCONJ	_	9	cc	_	_
9	obsequioso	obsequioso	ADJ	ADJ	Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 43 expl:impers	color:blue
1	Se	él	PRON	PRON	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	2	expl:pass	_	_
2	establecieron	establecer	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	también	también	ADV	ADV	_	2	advmod	_	_
4	tres	tres	NUM	NUM	Number=Plur|NumType=Card	5	nummod	_	_
5	tipos	tipo	NOUN	NOUN	Gender=Masc|Number=Plur	2	nsubj	_	_
6	de	de	ADP	ADP	AdpType=Prep	7	case	_	_
7	duelo	duelo	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	:	:	PUNCT	PUNCT	PunctType=Colo	10	punct	_	_
9	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	decretorios	decretorio	NOUN	NOUN	Gender=Masc|Number=Plur	5	appos	_	_
11	o	o	CCONJ	CCONJ	_	12	cc	_	_
12	a	a	ADP	ADP	AdpType=Prep	10	conj	_	MWE=a_muerte|MWEPOS=ADV
13	muerte	muerte	NOUN	NOUN	_	12	fixed	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	PunctType=Comm	16	punct	_	_
15	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	propugnatorios	propugnatorio	NOUN	NOUN	Gender=Masc|Number=Plur	10	appos	_	_
17	o	o	CCONJ	CCONJ	_	16	cc	_	_
18	a	a	ADP	ADP	AdpType=Prep	20	case	_	MWE=a_primera_sangre|MWEPOS=ADJ
19	primera	primera	ADJ	ADJ	_	16	appos	_	_
20	sangre	sangre	ADJ	ADJ	_	19	amod	_	SpaceAfter=No
21	,	,	PUNCT	PUNCT	PunctType=Comm	26	punct	_	_
22	en	en	ADP	ADP	AdpType=Prep	24	case	_	_
23	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	24	det	_	_
24	que	que	PRON	PRON	PronType=Int,Rel	26	obl	_	_
25	se	él	PRON	PRON	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	26	expl:impers	_	_
26	combatía	combatir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	acl	_	_
27	para	para	ADP	ADP	AdpType=Prep	28	mark	_	_
28	lavar	lavar	VERB	VERB	VerbForm=Inf	26	advcl	_	_
29	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	honor	honor	NOUN	NOUN	Gender=Masc|Number=Sing	28	obj	_	_
31	pero	pero	CCONJ	CCONJ	_	33	cc	_	_
32	sin	sin	ADP	ADP	AdpType=Prep	33	case	_	_
33	ánimo	ánimo	NOUN	NOUN	Gender=Masc|Number=Sing	28	conj	_	_
34	de	de	ADP	ADP	AdpType=Prep	35	mark	_	_
35	matar	matar	VERB	VERB	VerbForm=Inf	33	acl	_	_
36	y	y	CCONJ	CCONJ	_	45	cc	_	_
37	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	45	det	_	_
38	satisfactorios	satisfactorio	ADJ	ADJ	Gender=Masc|Number=Plur	45	amod	_	SpaceAfter=No
39	,	,	PUNCT	PUNCT	PunctType=Comm	45	punct	_	_
40	en	en	ADP	ADP	AdpType=Prep	42	case	_	_
41	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	42	det	_	_
42	que	que	PRON	PRON	PronType=Int,Rel	45	obl	_	_
43	se	él	PRON	PRON	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	45	expl:impers	_	_
44	estaba	estar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	45	cop	_	_
45	dispuesto	dispuesto	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	10	conj	_	_
46	a	a	ADP	ADP	AdpType=Prep	47	mark	_	_
47	desistir	desistir	VERB	VERB	VerbForm=Inf	45	acl	_	_
48	del	del	ADP	ADP	AdpType=Preppron	49	case	_	_
49	enfrentamiento	enfrentamiento	NOUN	NOUN	Gender=Masc|Number=Sing	47	obj	_	_
50	en	en	ADP	ADP	AdpType=Prep	52	case	_	_
51	cualquier	cualquiera	DET	DET	Number=Sing|PronType=Ind	52	det	_	_
52	momento	momento	NOUN	NOUN	Gender=Masc|Number=Sing	47	obl	_	_
53	si	si	SCONJ	SCONJ	_	56	mark	_	_
54	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	55	det	_	_
55	ofensor	ofensor	NOUN	NOUN	Gender=Masc|Number=Sing	56	nsubj	_	_
56	prestaba	prestar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	45	advcl	_	_
57	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	59	det	_	_
58	debida	debido	ADJ	ADJ	Gender=Fem|Number=Sing|VerbForm=Part	59	amod	_	_
59	satisfacción	satisfacción	NOUN	NOUN	Gender=Fem|Number=Sing	56	obj	_	SpaceAfter=No
60	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 expl:impers	color:blue
1	Todas	todo	DET	DET	Gender=Fem|Number=Plur|PronType=Tot	2	det	_	_
2	las	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	guerras	guerra	NOUN	NOUN	Gender=Fem|Number=Plur	5	nsubj	_	_
4	son	ser	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	infames	infame	ADJ	ADJ	Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
7	se	él	PRON	PRON	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	12	expl:impers	_	_
8	ha	haber	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
9	de	de	ADP	ADP	AdpType=Prep	12	case	_	_
10	estar	estar	AUX	AUX	VerbForm=Inf	12	cop	_	_
11	contra	contra	ADP	ADP	AdpType=Prep	12	case	_	_
12	ellas	él	PRON	PRON	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs	5	advcl	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	PunctType=Comm	17	punct	_	_
14	pero	pero	CCONJ	CCONJ	_	17	cc	_	_
15	eso	ese	PRON	PRON	Number=Sing|PronType=Dem	17	nsubj	_	_
16	no	no	ADV	ADV	Polarity=Neg	17	advmod	_	_
17	significa	significar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	_
18	que	que	SCONJ	SCONJ	_	22	mark	_	_
19	no	no	ADV	ADV	Polarity=Neg	22	advmod	_	_
20	debas	deber	AUX	AUX	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	22	aux	_	_
21	estar	estar	AUX	AUX	VerbForm=Inf	22	cop	_	_
22	preparado	preparado	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	17	xcomp	_	_
23	por	por	ADP	ADP	AdpType=Prep	27	mark	_	_
24	si	si	SCONJ	SCONJ	_	27	mark	_	_
25	te	tú	PRON	PRON	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	27	iobj	_	_
26	la	él	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	27	obj	_	_
27	declara	declarar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	advcl	_	_
28	alguien	alguien	PRON	PRON	Number=Sing|PronType=Ind	27	nsubj	_	SpaceAfter=No
29	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


