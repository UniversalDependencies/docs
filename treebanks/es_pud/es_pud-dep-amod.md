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

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1243; 95% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (59; 5% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Le	él	PRON	PRP	Case=Dat|Number=Sing|Person=3|PronType=Prs	2	obl:arg	_	_
2	apasiona	apasionar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	guitarra	guitarra	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	y	y	CCONJ	CC	_	6	cc	_	_
6	dio	dar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
7	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	concierto	concierto	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	_
9	allí	allí	ADV	RB	_	6	advmod	_	_
10	ese	ese	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
11	mismo	mismo	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	_
12	año	año	NOUN	NN	Gender=Masc|Number=Sing	6	obl:tmod	_	SpaceAfter=No
13	.	.	PUNCT	.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Su	su	PRON	DTP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
2	primer	primero	ADJ	JJ	Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	_
3	rey	rey	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
4	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
5	Mojmír	Mojmír	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj	_	_
6	I	i	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	Proper=True
7	(	(	PUNCT	(	PunctSide=Ini|PunctType=Brck	8	punct	_	SpaceAfter=No
8	reinó	reinar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	parataxis	_	_
9	de	de	ADP	INDT	_	11	case	_	_
10	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	830-846	830-846	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	8	obl	_	SpaceAfter=No
12	)	)	PUNCT	)	PunctSide=Fin|PunctType=Brck	8	punct	_	SpaceAfter=No
13	.	.	PUNCT	.	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 amod	color:blue
1	Puede	poder	VERB	VBC	ExtPos=ADV|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	advmod	_	_
2	que	que	ADP	IN	_	1	fixed	_	_
3	BA	BA	PROPN	NNP	Number=Sing	8	nsubj	_	_
4	e	e	CCONJ	CC	_	5	cc	_	_
5	IAG	IAG	PROPN	NNP	Number=Sing	3	conj	_	_
6	lo	él	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	8	obj	_	_
7	hayan	haber	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	aux	_	_
8	descubierto	descubrir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	y	y	CCONJ	CC	_	11	cc	_	_
10	puedan	poder	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	ofrecer	ofrecer	VERB	VB	VerbForm=Inf	8	conj	_	_
12	algo	algo	PRON	NN	Number=Sing|PronType=Ind	11	obj	_	_
13	relativamente	relativamente	ADV	RB	_	14	advmod	_	_
14	fiable	fiable	ADJ	JJ	Number=Sing	12	amod	_	SpaceAfter=No
15	.	.	PUNCT	.	PunctType=Peri	8	punct	_	_

~~~


