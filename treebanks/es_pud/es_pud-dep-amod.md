---
layout: base
title:  'Statistics of amod in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `amod`

This relation is universal.

1311 nodes (6%) are attached to their parents as `amod`.

912 instances of `amod` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15560640732265.

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1250; 95% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (57; 4% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Le	él	PRON	PRP	Case=Dat|Number=Sing|Person=3|PronType=Prs	2	iobj	_	_
2	apasiona	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	guitarra	guitarra	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	y	y	CCONJ	CC	_	6	cc	_	_
6	dio	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
7	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	concierto	concierto	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	_
9	allí	allí	ADV	RB	_	6	advmod	_	_
10	ese	ese	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
11	mismo	mismo	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	_
12	año	año	NOUN	NN	Gender=Masc|Number=Sing	6	obl:tmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Su	su	PRON	DTP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
2	primer	primer	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	rey	rey	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
4	fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
5	Mojmír	Mojmír	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj	_	_
6	I	i	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	Proper=True
7	(	(	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	reinó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
9	de	de	ADP	INDT	_	11	case	_	_
10	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	830-846	830-846	NUM	CD	Gender=Masc|NumType=Card	8	obl	_	SpaceAfter=No
12	)	)	PUNCT	)	_	8	punct	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 amod	color:blue
1	Se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	compound:prt	_	_
2	halla	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	solo	solo	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
4	frente	frente	NOUN	NN	Gender=Fem|Number=Sing	7	case	_	_
5	a	a	ADP	INDT	_	4	fixed	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	público	público	NOUN	NN	Gender=Masc|Number=Sing	3	obl	_	_
8	y	y	CCONJ	CC	_	16	cc	_	SpaceAfter=No
9	,	,	PUNCT	,	_	16	punct	_	_
10	en	en	ADP	IN	_	16	discourse	_	_
11	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	fixed	_	_
12	fondo	fondo	NOUN	NN	Gender=Masc|Number=Sing	10	fixed	_	SpaceAfter=No
13	,	,	PUNCT	,	_	10	punct	_	_
14	tiene	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	aux	_	_
15	que	que	ADP	IN	_	14	fixed	_	_
16	sacar	sacar	VERB	VB	VerbForm=Inf	3	conj	_	_
17	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	18	det	_	_
18	mejor	mejor	NOUN	NN	Gender=Masc|Number=Sing	16	obj	_	_
19	de	de	ADP	IN	_	20	case	_	_
20	sí	él	PRON	PRP	Case=Acc|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes	18	nmod	_	_
21	mismo	mismo	ADJ	JJ	Gender=Masc|Number=Sing	20	amod	_	_
22	para	para	ADP	IN	_	23	case	_	_
23	hacer	hacer	VERB	VB	VerbForm=Inf	16	xcomp	_	_
24	reír	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	23	xcomp	_	_
25	a	a	ADP	INDT	_	27	case	_	_
26	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	espectador	espectador	NOUN	NN	Gender=Masc|Number=Sing	23	obl	_	SpaceAfter=No
28	.	.	PUNCT	.	_	3	punct	_	_

~~~


