---
layout: base
title:  'Statistics of vocative in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `vocative`

This relation is universal.

2 nodes (0%) are attached to their parents as `vocative`.

1 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.5.

The following 2 pairs of parts of speech are connected with `vocative`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-X.html">X</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 vocative	color:blue
1	Eso	eso	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	2	nsubj	_	_
2	es	ser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	det	_	_
4	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	6	obj	_	_
5	no	no	ADV	RB	Polarity=Neg	6	advmod	_	_
6	necesitamos	necesitar	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	en	en	ADP	IN	_	9	case	_	_
8	nuestro	nuestro	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	9	det	_	_
9	país	país	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	PunctType=Comm	11	punct	_	_
11	amigos	amigo	NOUN	NN	Gender=Masc|Number=Plur	2	vocative	_	SpaceAfter=No
12	.	.	PUNCT	.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 11 vocative	color:blue
1	Por	por	ADP	IN	_	2	case	_	_
2	suerte	suerte	NOUN	NN	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
3	,	,	PUNCT	,	PunctType=Comm	2	punct	_	_
4	alguien	alguien	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
5	de	de	ADP	IN	_	6	case	_	_
6	Sony	Sony	PROPN	NNP	Number=Sing	4	nmod	_	_
7	Australia	Australia	PROPN	NNP	Number=Sing	6	appos	_	_
8	dijo	decir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	:	:	PUNCT	:	PunctType=Colo	19	punct	_	_
10	"	"	PUNCT	``	PunctType=Quot	19	punct	_	SpaceAfter=No
11	Ey	ey	X	UH	_	19	vocative	_	SpaceAfter=No
12	,	,	PUNCT	,	PunctType=Comm	11	punct	_	_
13	por	por	ADP	IN	_	19	discourse	_	_
14	cierto	cierto	NOUN	NN	Gender=Masc|Number=Sing	13	fixed	_	SpaceAfter=No
15	,	,	PUNCT	,	PunctType=Comm	13	punct	_	_
16	¿	¿	PUNCT	.	PunctSide=Ini|PunctType=Qest	19	punct	_	SpaceAfter=No
17	os	tú	PRON	SE	Case=Acc,Dat|Number=Plur|Person=2|PrepCase=Npr|PronType=Prs	19	compound:prt	_	_
18	habéis	haber	AUX	VBC	Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin	19	aux	_	_
19	dado	dar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	ccomp	_	_
20	cuenta	cuenta	NOUN	NN	Gender=Fem|Number=Sing	19	obj	_	_
21	de	de	ADP	IN	_	22	case	_	_
22	esto	esto	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	20	nmod	_	SpaceAfter=No
23	?	?	PUNCT	.	PunctSide=Fin|PunctType=Qest	19	punct	_	SpaceAfter=No
24	"	"	PUNCT	''	PunctType=Quot	19	punct	_	_
25	dice	decir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	parataxis	_	_
26	Pall	Pall	PROPN	NNP	Number=Sing	25	nsubj	_	SpaceAfter=No
27	.	.	PUNCT	.	PunctType=Peri	25	punct	_	_

~~~


