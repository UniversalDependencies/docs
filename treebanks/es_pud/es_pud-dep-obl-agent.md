---
layout: base
title:  'Statistics of obl:agent in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="es_pud-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="es_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

62 nodes (0%) are attached to their parents as `obl:agent`.

59 instances of `obl:agent` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.51612903225806.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (41; 66% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (20; 32% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:agent	color:blue
1	Quizás	quizás	ADV	RB	_	3	advmod	_	_
2	no	no	ADV	RB	Polarity=Neg	3	advmod	_	_
3	importe	importar	VERB	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	PunctType=Comm	9	punct	_	_
5	ya	ya	ADV	RB	_	9	mark	_	_
6	que	que	ADP	IN	_	5	fixed	_	_
7	no	no	ADV	RB	Polarity=Neg	9	advmod	_	_
8	estaré	estar	AUX	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	9	aux	_	_
9	preocupado	preocupar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	advcl	_	_
10	por	por	ADP	IN	_	12	case	_	_
11	mucho	mucho	DET	DT	Gender=Masc|Number=Sing|NumType=Card|PronType=Ind	12	det	_	_
12	tiempo	tiempo	NOUN	NN	Gender=Masc|Number=Sing	9	obl:agent	_	SpaceAfter=No
13	.	.	PUNCT	.	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 obl:agent	color:blue
1	Mientras	mientras	ADP	IN	_	9	discourse	_	_
2	tanto	tanto	ADV	RB	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	,	PunctType=Comm	1	punct	_	_
4	su	su	PRON	DTP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	_
5	puesto	puesto	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj:pass	_	_
6	de	de	ADP	IN	_	7	case	_	_
7	tribuno	tribuno	NOUN	NN	Gender=Masc|Number=Sing	5	nmod	_	_
8	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
9	ocupado	ocupar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
10	por	por	ADP	IN	_	11	case	_	_
11	Marco	Marco	PROPN	NNP	Gender=Masc|Number=Sing	9	obl:agent	_	_
12	Antonio	Antonio	PROPN	NNP	Gender=Masc|Number=Sing	11	flat:name	_	SpaceAfter=No
13	,	,	PUNCT	,	PunctType=Comm	16	punct	_	_
14	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	16	nsubj	_	_
15	lo	él	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	16	obj	_	_
16	desempeñó	desempeñar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	acl:relcl	_	_
17	hasta	hasta	ADP	IN	_	18	case	_	_
18	diciembre	diciembre	NOUN	NN	Gender=Masc|Number=Sing	16	obl	_	SpaceAfter=No
19	.	.	PUNCT	.	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 obl:agent	color:blue
1	Alejandra	Alejandra	PROPN	NNP	Gender=Fem|Number=Sing	14	nsubj	_	_
2	González	González	PROPN	NNP	Gender=Fem|Number=Sing	1	flat:name	_	_
3	Anaya	Anaya	PROPN	NNP	Gender=Fem|Number=Sing	1	flat:name	_	SpaceAfter=No
4	,	,	PUNCT	,	PunctType=Comm	5	punct	_	_
5	uno	uno	NOUN	NN	Gender=Masc|Number=Sing	1	appos	_	_
6	de	de	ADP	IN	_	8	case	_	_
7	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	directores	director	NOUN	NN	Gender=Masc|Number=Plur	5	nmod	_	_
9	creativos	creativo	ADJ	JJ	Gender=Masc|Number=Plur	8	amod	_	_
10	de	de	ADP	INDT	_	12	case	_	_
11	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	desfile	desfile	NOUN	NN	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
13	,	,	PUNCT	,	PunctType=Comm	5	punct	_	_
14	explicó	explicar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
15	a	a	ADP	IN	_	17	case	_	_
16	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	CNN	CNN	PROPN	NNP	Gender=Fem|Number=Sing	14	obl	_	_
18	por	por	ADP	IN	_	19	case	_	_
19	qué	qué	PRON	WP	PronType=Int	22	obl:agent	_	_
20	México	México	PROPN	NNP	Number=Sing	22	nsubj	_	_
21	ha	haber	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	22	aux	_	_
22	decidido	decidir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	ccomp	_	_
23	que	que	SCONJ	IN	_	27	mark	_	_
24	ahora	ahora	ADV	RB	_	27	advmod	_	_
25	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	_
26	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	momento	momento	NOUN	NN	Gender=Masc|Number=Sing	22	ccomp	_	_
28	de	de	ADP	IN	_	29	case	_	_
29	presentar	presentar	VERB	VB	VerbForm=Inf	27	xcomp	_	_
30	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	espectáculo	espectáculo	NOUN	NN	Gender=Masc|Number=Sing	29	obj	_	_
32	como	como	ADP	IN	_	33	case	_	_
33	este	este	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	31	nmod	_	SpaceAfter=No
34	.	.	PUNCT	.	PunctType=Peri	14	punct	_	_

~~~


