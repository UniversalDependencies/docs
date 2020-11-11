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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 expl:pass	color:blue
1	A	a	ADP	ADP	AdpType=Prep	3	case	_	_
2	cada	cada	DET	DET	Number=Sing|PronType=Tot	3	det	_	_
3	residente	residente	NOUN	NOUN	Number=Sing	8	obj	_	_
4	del	del	ADP	ADP	AdpType=Preppron	5	case	_	_
5	campo	campo	NOUN	NOUN	Gender=Masc|Number=Sing	3	nmod	_	_
6	se	él	PRON	PRON	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	8	expl:pass	_	_
7	le	él	PRON	PRON	Case=Dat|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	entrega	entregar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	cupón	cupón	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 38 expl:pass	color:blue
1	Ello	él	PRON	PRON	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	significa	significar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	SCONJ	_	23	mark	_	_
4	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	26	26	NUM	NUM	NumForm=Digit|NumType=Card	6	nummod	_	_
6	cents	cent	NOUN	NOUN	Gender=Masc|Number=Plur	23	nsubj	_	_
7	de	de	ADP	ADP	AdpType=Prep	8	case	_	_
8	diferencia	diferencia	NOUN	NOUN	Gender=Fem|Number=Sing	6	nmod	_	_
9	entre	entre	ADP	ADP	AdpType=Prep	12	case	_	_
10	las	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
11	dos	dos	NUM	NUM	Number=Plur|NumType=Card	10	nummod	_	_
12	hamburguesas	hamburguesa	NOUN	NOUN	Gender=Fem|Number=Plur	8	nmod	_	_
13	(	(	PUNCT	PUNCT	PunctSide=Ini|PunctType=Brck	14	punct	_	SpaceAfter=No
14	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
15	de	de	ADP	ADP	AdpType=Prep	14	case	_	_
16	Barcelona	Barcelona	PROPN	PROPN	_	14	appos	_	_
17	y	y	CCONJ	CCONJ	_	18	cc	_	_
18	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	conj	_	_
19	de	de	ADP	ADP	AdpType=Prep	18	case	_	_
20	Berlín	Berlín	PROPN	PROPN	_	18	appos	_	SpaceAfter=No
21	)	)	PUNCT	PUNCT	PunctSide=Fin|PunctType=Brck	14	punct	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	PunctType=Comm	14	punct	_	_
23	equivalen	equivaler	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
24	a	a	ADP	ADP	AdpType=Prep	23	case	_	_
25	más	más	ADV	ADV	Degree=Cmp	28	advmod	_	_
26	de	de	ADP	ADP	AdpType=Prep	25	case	_	_
27	43	43	NUM	NUM	NumForm=Digit|NumType=Card	25	nummod	_	_
28	pesetas	peseta	NOUN	NOUN	NumForm=Digit	24	conj	_	SpaceAfter=No
29	,	,	PUNCT	PUNCT	PunctType=Comm	35	punct	_	_
30	es	es	NOUN	NOUN	_	35	cc	_	MWE=es_decir|MWEPOS=CCONJ
31	decir	decir	NOUN	NOUN	_	30	fixed	_	SpaceAfter=No
32	,	,	PUNCT	PUNCT	PunctType=Comm	30	punct	_	_
33	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
34	mismo	mismo	DET	DET	Gender=Masc|Number=Sing|PronType=Dem	33	det	_	_
35	25%	25/100	SYM	SYM	NumForm=Digit|NumType=Frac	24	conj	_	_
36	que	que	PRON	PRON	PronType=Int,Rel	35	obl	_	_
37	si	si	SCONJ	SCONJ	_	36	mark	_	_
38	se	él	PRON	PRON	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	36	expl:pass	_	_
39	hace	hacer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	36	case	_	_
40	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	_	_
41	comparación	comparación	NOUN	NOUN	Gender=Fem|Number=Sing	36	obj	_	_
42	en	en	ADP	ADP	AdpType=Prep	43	case	_	_
43	pesetas	peseta	NOUN	NOUN	Gender=Fem|Number=Plur	36	obl	_	SpaceAfter=No
44	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 23 expl:pass	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	grupo	grupo	NOUN	NOUN	Gender=Masc|Number=Sing	6	nsubj	_	_
3	británico	británico	ADJ	ADJ	Gender=Masc|Number=Sing	2	amod	_	_
4	se	él	PRON	PRON	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
5	ha	haber	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	visto	ver	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	obligado	obligado	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	6	obj	_	_
8	a	a	ADP	ADP	AdpType=Prep	9	mark	_	_
9	aplazar	aplazar	VERB	VERB	VerbForm=Inf	7	xcomp	_	_
10	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	conciertos	concierto	NOUN	NOUN	Gender=Masc|Number=Plur	9	obj	_	_
12	que	que	PRON	PRON	PronType=Int,Rel	13	iobj	_	_
13	tenía	tener	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	acl	_	_
14	programados	programado	ADJ	ADJ	Gender=Masc|Number=Plur|VerbForm=Part	24	xcomp	_	_
15	para	para	ADP	ADP	AdpType=Prep	18	case	_	_
16	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
17	próximo	próximo	ADJ	ADJ	Gender=Masc|Number=Sing	18	amod	_	_
18	martes	martes	NOUN	NOUN	AdvType=Tim	24	obl	_	_
19	en	en	ADP	ADP	AdpType=Prep	20	case	_	_
20	Razzmatazz	Razzmatazz	PROPN	PROPN	_	24	obl	_	_
21	(	(	PUNCT	PUNCT	PunctSide=Ini|PunctType=Brck	22	punct	_	SpaceAfter=No
22	que	que	PRON	PRON	PronType=Int,Rel	24	nsubj:pass	_	_
23	se	él	PRON	PRON	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	14	expl:pass	_	_
24	pospone	posponer	VERB	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	_	_
25	al	al	ADP	ADP	AdpType=Preppron	26	case	_	_
26	25	25	NUM	NUM	NumForm=Digit|NumType=Card	24	obl	_	MWE=25_de_abril|MWEPOS=NOUN
27	de	de	ADP	ADP	AdpType=Prep	28	case	_	_
28	abril	abril	NOUN	NOUN	_	26	compound	_	SpaceAfter=No
29	)	)	PUNCT	PUNCT	PunctSide=Fin|PunctType=Brck	34	punct	_	_
30	y	y	CCONJ	CCONJ	_	34	cc	_	SpaceAfter=No
31	,	,	PUNCT	PUNCT	PunctType=Comm	34	punct	_	_
32	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
33	día	día	NOUN	NOUN	Gender=Masc|Number=Sing	34	obl	_	_
34	después	después	ADV	ADV	_	14	conj	_	SpaceAfter=No
35	,	,	PUNCT	PUNCT	PunctType=Comm	34	punct	_	_
36	en	en	ADP	ADP	AdpType=Prep	34	case	_	_
37	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	38	det	_	_
38	Sala	Sala	PROPN	PROPN	_	34	nmod	_	MWE=Sala_Multiusos|MWEPOS=PROPN
39	Multiusos	Multiusos	PROPN	PROPN	_	38	flat	_	_
40	de	de	ADP	ADP	AdpType=Prep	41	case	_	_
41	Zaragoza	Zaragoza	PROPN	PROPN	_	38	nmod	_	SpaceAfter=No
42	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


