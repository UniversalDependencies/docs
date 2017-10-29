---
layout: base
title:  'Statistics of cop in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `cop`

This relation is universal.

289 nodes (1%) are attached to their parents as `cop`.

264 instances of `cop` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88927335640138.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (139; 48% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (135; 47% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cop	color:blue
1	Tenemos	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	un	_	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
3	gran	_	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
4	equipo	_	NOUN	NN	Gender=Masc|Number=Sing	1	obj	_	_
5	y	_	CCONJ	CC	_	8	cc	_	_
6	es	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	8	cop	_	_
7	nuestra	_	PRON	DTP$	Gender=Fem|Number=Sing|Person=1	8	det	_	_
8	oportunidad	_	NOUN	NN	Gender=Fem|Number=Sing	1	conj	_	_
9	para	_	ADP	IN	_	10	case	_	_
10	progresar	_	VERB	VB	Aspect=Imp|Voice=Act	8	xcomp	_	SpaceAfter=No
11	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cop	color:blue
1	A	_	ADP	IN	_	10	advmod	_	_
2	lo	_	DET	DT	Gender=Masc|Number=Sing	1	fixed	_	_
3	mejor	_	NOUN	NN	Gender=Masc|Number=Sing	1	fixed	_	_
4	el	_	DET	DT	Gender=Masc|Number=Sing	5	det	_	_
5	código	_	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
6	de	_	ADP	IN	_	7	case	_	_
7	vestimenta	_	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
8	era	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	10	cop	_	_
9	muy	_	ADV	RB	_	10	advmod	_	_
10	conservador	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Fueran	_	VERB	VBC	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past|Voice=Act	11	advcl	_	_
2	cuales	_	PRON	REL	Gender=Fem|Number=Plur	1	ccomp	_	_
3	fueran	_	AUX	VBC	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past|Voice=Act	2	cop	_	_
4	las	_	DET	DT	Gender=Fem|Number=Plur	5	det	_	_
5	reglas	_	NOUN	NN	Gender=Fem|Number=Plur	2	nsubj	_	SpaceAfter=No
6	,	_	PUNCT	,	_	1	punct	_	_
7	las	_	DET	DT	Gender=Fem|Number=Plur	8	det	_	_
8	peleas	_	NOUN	NN	Gender=Fem|Number=Plur	11	nsubj	_	_
9	a	_	ADP	IN	_	11	advmod	_	_
10	menudo	_	NOUN	NN	Gender=Masc|Number=Sing	9	fixed	_	_
11	tenían	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
12	como	_	ADP	IN	_	13	case	_	_
13	resultado	_	NOUN	NN	Gender=Masc|Number=Sing	11	obl	_	_
14	la	_	DET	DT	Gender=Fem|Number=Sing	15	det	_	_
15	muerte	_	NOUN	NN	Gender=Fem|Number=Sing	11	obj	_	_
16	de	_	ADP	IN	_	17	case	_	_
17	uno	_	NOUN	NN	Gender=Masc|Number=Sing	15	nmod	_	_
18	de	_	ADP	IN	_	20	case	_	_
19	los	_	DET	DT	Gender=Masc|Number=Plur	20	det	_	_
20	sementales	_	NOUN	NN	Gender=Masc|Number=Plur	17	nmod	_	SpaceAfter=No
21	.	_	PUNCT	.	_	11	punct	_	_

~~~


