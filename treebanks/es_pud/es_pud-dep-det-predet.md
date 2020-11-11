---
layout: base
title:  'Statistics of det:predet in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-det.html">det</a></tt>.

31 nodes (0%) are attached to their parents as `det:predet`.

31 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `det:predet`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (27; 87% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (2; 6% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det:predet	color:blue
1	No	_	ADV	RB	Polarity=Neg	4	advmod	_	_
2	todo	_	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	4	det:predet	_	_
3	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	mundo	_	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
5	puede	poder	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	superar	_	VERB	VB	Aspect=Imp|VerbForm=Fin	0	root	_	_
7	lo	él	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obj	_	_
8	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 det:predet	color:blue
1	En	_	ADP	IN	_	2	case	_	_
2	1538	_	NUM	CD	Gender=Masc|NumType=Card	6	obl	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Inquisición	_	NOUN	NN	Gender=Fem|Number=Sing	6	nsubj	_	Proper=True
5	española	_	ADJ	JJ	Gender=Fem|Number=Sing	4	amod	_	Proper=True
6	advirtió	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	a	_	ADP	IN	_	9	case	_	_
8	sus	_	PRON	DTP$	Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	9	det	_	_
9	miembros	_	NOUN	NN	Gender=Masc|Number=Plur	6	obl	_	_
10	que	_	SCONJ	IN	_	12	mark	_	_
11	no	_	ADV	RB	Polarity=Neg	12	advmod	_	_
12	creyeran	_	VERB	VBC	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
13	todo	_	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	15	det:predet	_	_
14	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	15	det	_	_
15	que	_	PRON	REL	Gender=Masc|Number=Sing|PronType=Int,Rel	16	obj	_	_
16	decía	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	ccomp	_	_
17	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	Malleus	_	PROPN	NNP	Gender=Masc|Number=Sing	16	nsubj	_	SpaceAfter=No
19	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det:predet	color:blue
1	Durante	_	ADP	IN	_	4	case	_	_
2	sus	_	PRON	DTP$	Gender=Fem|Number=Plur|Person=3|Poss=Yes|PronType=Prs	4	det:predet	_	_
3	varias	_	DET	DT	Gender=Fem|Number=Plur|PronType=Ind	4	det	_	_
4	colaboraciones	_	NOUN	NN	Gender=Fem|Number=Plur	9	obl	_	SpaceAfter=No
5	,	_	PUNCT	,	_	4	punct	_	_
6	no	_	ADV	RB	Polarity=Neg	9	advmod	_	_
7	está	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
8	muy	_	ADV	RB	_	9	advmod	_	_
9	claro	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
10	quien	_	PRON	WP	Number=Sing|PronType=Int,Rel	14	nsubj	_	_
11	de	_	ADP	IN	_	13	case	_	_
12	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
13	dos	_	NUM	CD	Gender=Masc|NumType=Card	10	nmod	_	_
14	imaginó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	ccomp	_	_
15	algunas	_	DET	DT	Gender=Fem|Number=Plur|PronType=Ind	16	det	_	_
16	soluciones	_	NOUN	NN	Gender=Fem|Number=Plur	14	obj	_	_
17	estilísticas	_	ADJ	JJ	Gender=Fem|Number=Plur	16	amod	_	_
18	en	_	ADP	IN	_	20	case	_	_
19	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	arreglos	_	NOUN	NN	Gender=Masc|Number=Plur	16	nmod	_	_
21	que	_	PRON	REL	Gender=Masc|Number=Plur|PronType=Int,Rel	24	nsubj	_	_
22	lego	_	ADV	RB	_	24	advmod	_	_
23	los	él	PRON	PRP	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	24	obj	_	_
24	caracterizó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	acl:relcl	_	_
25	a	_	ADP	IN	_	26	case	_	_
26	ambos	_	NOUN	NN	Gender=Masc|Number=Plur	24	obl	_	_
27	como	_	ADP	IN	_	28	case	_	_
28	artistas	_	NOUN	NN	Gender=Masc|Number=Plur	24	obl	_	_
29	de	_	ADP	IN	_	30	case	_	_
30	estilo	_	NOUN	NN	Gender=Masc|Number=Sing	28	nmod	_	SpaceAfter=No
31	.	_	PUNCT	.	_	9	punct	_	_

~~~


