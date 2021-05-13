---
layout: base
title:  'Statistics of expl:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_ancora-dep-expl-pv.html">expl:pv</a></tt>.

2232 nodes (0%) are attached to their parents as `expl:pass`.

2009 instances of `expl:pass` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26926523297491.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2227; 100% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl:pass	color:blue
1	A	a	ADP	_	_	3	case	_	_
2	cada	cada	DET	_	Number=Sing|PronType=Tot	3	det	_	_
3	residente	residente	NOUN	_	Number=Sing	9	obj	_	_
4	de	de	ADP	_	_	6	case	_	_
5	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	campo	campo	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	expl:pass	_	_
8	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
9	entrega	entregar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	cupón	cupón	NOUN	_	Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	_	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 38 expl:pass	color:blue
1	Ello	él	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	significa	significar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	_	_	23	mark	_	_
4	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	26	26	NUM	_	NumForm=Digit|NumType=Card	6	nummod	_	_
6	cents	cent	NOUN	_	Gender=Masc|Number=Plur	23	nsubj	_	_
7	de	de	ADP	_	_	8	case	_	_
8	diferencia	diferencia	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
9	entre	entre	ADP	_	_	12	case	_	_
10	las	el	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
11	dos	dos	NUM	_	Number=Plur|NumType=Card	10	nummod	_	_
12	hamburguesas	hamburguesa	NOUN	_	Gender=Fem|Number=Plur	8	nmod	_	_
13	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	14	punct	_	SpaceAfter=No
14	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
15	de	de	ADP	_	_	14	case	_	_
16	Barcelona	Barcelona	PROPN	_	_	14	appos	_	_
17	y	y	CCONJ	_	_	18	cc	_	_
18	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	conj	_	_
19	de	de	ADP	_	_	18	case	_	_
20	Berlín	Berlín	PROPN	_	_	18	appos	_	SpaceAfter=No
21	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	14	punct	_	SpaceAfter=No
22	,	,	PUNCT	_	PunctType=Comm	14	punct	_	_
23	equivalen	equivaler	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
24	a	a	ADP	_	_	23	case	_	_
25	más	más	ADV	_	Degree=Cmp	28	advmod	_	_
26	de	de	ADP	_	_	25	case	_	_
27	43	43	NUM	_	NumForm=Digit|NumType=Card	25	nummod	_	_
28	pesetas	peseta	NOUN	_	NumForm=Digit	24	conj	_	SpaceAfter=No
29	,	,	PUNCT	_	PunctType=Comm	35	punct	_	_
30	es	es	NOUN	_	_	35	cc	_	MWE=es_decir|MWEPOS=CCONJ
31	decir	decir	NOUN	_	_	30	fixed	_	SpaceAfter=No
32	,	,	PUNCT	_	PunctType=Comm	30	punct	_	_
33	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
34	mismo	mismo	DET	_	Gender=Masc|Number=Sing|PronType=Dem	33	det	_	_
35	25%	25/100	SYM	_	NumForm=Digit|NumType=Frac	24	conj	_	_
36	que	que	PRON	_	PronType=Int,Rel	35	obl	_	_
37	si	si	SCONJ	_	_	36	mark	_	_
38	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	36	expl:pass	_	_
39	hace	hacer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	36	case	_	_
40	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	_	_
41	comparación	comparación	NOUN	_	Gender=Fem|Number=Sing	36	obj	_	_
42	en	en	ADP	_	_	43	case	_	_
43	pesetas	peseta	NOUN	_	Gender=Fem|Number=Plur	36	obl	_	SpaceAfter=No
44	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 23 expl:pass	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	grupo	grupo	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	británico	británico	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
5	ha	haber	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	visto	ver	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	obligado	obligado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	6	obj	_	_
8	a	a	ADP	_	_	9	mark	_	_
9	aplazar	aplazar	VERB	_	VerbForm=Inf	7	xcomp	_	_
10	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	conciertos	concierto	NOUN	_	Gender=Masc|Number=Plur	9	obj	_	_
12	que	que	PRON	_	PronType=Int,Rel	13	iobj	_	_
13	tenía	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	acl	_	_
14	programados	programado	ADJ	_	Gender=Masc|Number=Plur|VerbForm=Part	24	xcomp	_	_
15	para	para	ADP	_	_	18	case	_	_
16	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
17	próximo	próximo	ADJ	_	Gender=Masc|Number=Sing	18	amod	_	_
18	martes	martes	NOUN	_	AdvType=Tim	24	obl	_	_
19	en	en	ADP	_	_	20	case	_	_
20	Razzmatazz	Razzmatazz	PROPN	_	_	24	obl	_	_
21	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	22	punct	_	SpaceAfter=No
22	que	que	PRON	_	PronType=Int,Rel	24	nsubj:pass	_	_
23	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	14	expl:pass	_	_
24	pospone	posponer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	_	_
25	a	a	ADP	_	_	27	case	_	_
26	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	25	25	NUM	_	NumForm=Digit|NumType=Card	24	obl	_	MWE=25_de_abril|MWEPOS=NOUN
28	de	de	ADP	_	_	29	case	_	_
29	abril	abril	NOUN	_	_	27	compound	_	SpaceAfter=No
30	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	35	punct	_	_
31	y	y	CCONJ	_	_	35	cc	_	SpaceAfter=No
32	,	,	PUNCT	_	PunctType=Comm	35	punct	_	_
33	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	día	día	NOUN	_	Gender=Masc|Number=Sing	35	obl	_	_
35	después	después	ADV	_	_	14	conj	_	SpaceAfter=No
36	,	,	PUNCT	_	PunctType=Comm	35	punct	_	_
37	en	en	ADP	_	_	35	case	_	_
38	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	39	det	_	_
39	Sala	Sala	PROPN	_	_	35	nmod	_	MWE=Sala_Multiusos|MWEPOS=PROPN
40	Multiusos	Multiusos	PROPN	_	_	39	flat	_	_
41	de	de	ADP	_	_	42	case	_	_
42	Zaragoza	Zaragoza	PROPN	_	_	39	nmod	_	SpaceAfter=No
43	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


