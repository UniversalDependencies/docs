---
layout: base
title:  'Statistics of parataxis in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `parataxis`

This relation is universal.

106 nodes (0%) are attached to their parents as `parataxis`.

105 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.5566037735849.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (73; 69% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (11; 10% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (8; 8% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (7; 7% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 parataxis	color:blue
1	Su	_	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	voz	_	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	compound:prt	_	_
4	escuchó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	literalmente	_	ADV	RB	_	4	advmod	_	_
6	por	_	ADP	IN	_	9	case	_	_
7	todo	_	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
8	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	mundo	_	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
10	,	_	PUNCT	,	_	11	punct	_	_
11	dijo	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	_
12	Leive	_	PROPN	NNP	Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 parataxis	color:blue
1	Fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
2	muy	_	ADV	RB	_	3	advmod	_	_
3	amable	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
4	y	_	CCONJ	CC	_	6	cc	_	_
5	lo	él	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obj	_	_
6	aceptó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
7	como	_	ADP	IN	_	9	case	_	_
8	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	hombre	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
10	,	_	PUNCT	,	_	11	punct	_	_
11	estoy	estar	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
12	más	_	ADV	RBR	Degree=Cmp	11	advmod	_	_
13	que	_	ADP	IN	_	14	case	_	_
14	enfadado	_	ADJ	JJ	Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
15	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Día	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
2	tres	_	NUM	CD	Gender=Masc|NumType=Card	1	appos	_	SpaceAfter=No
3	,	_	PUNCT	,	_	4	punct	_	_
4	estaba	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
5	de	_	ADP	IN	_	6	case	_	_
6	vuelta	_	NOUN	NN	Gender=Fem|Number=Sing	4	obl	_	_
7	en	_	ADP	IN	_	8	case	_	_
8	Emicro	_	PROPN	NNP	Number=Sing	4	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


