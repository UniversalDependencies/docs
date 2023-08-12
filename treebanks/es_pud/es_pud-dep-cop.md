---
layout: base
title:  'Statistics of cop in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `cop`

This relation is universal.

273 nodes (1%) are attached to their parents as `cop`.

248 instances of `cop` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.91575091575092.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (134; 49% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (127; 47% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (7; 3% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cop	color:blue
1	Tenemos	_	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	gran	gran	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
4	equipo	equipo	NOUN	NN	Gender=Masc|Number=Sing	1	obj	_	_
5	y	y	CCONJ	CC	_	8	cc	_	_
6	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	nuestra	_	PRON	DTP$	Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	det	_	_
8	oportunidad	oportunidad	NOUN	NN	Gender=Fem|Number=Sing	1	conj	_	_
9	para	para	ADP	IN	_	10	case	_	_
10	progresar	progresar	VERB	VB	VerbForm=Inf	8	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cop	color:blue
1	A	a	ADP	IN	_	10	advmod	_	_
2	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	1	fixed	_	_
3	mejor	mejor	NOUN	NN	Gender=Masc|Number=Sing	1	fixed	_	_
4	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	código	código	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
6	de	de	ADP	IN	_	7	case	_	_
7	vestimenta	vestimenta	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
8	era	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
9	muy	muy	ADV	RB	_	10	advmod	_	_
10	conservador	conservador	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Eso	eso	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj	_	_
2	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	0	root	_	_
4	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	_
5	hace	hacer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
6	que	que	SCONJ	IN	_	7	mark	_	_
7	sigamos	seguir	VERB	VBC	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
8	volviendo	volver	VERB	VBG	VerbForm=Ger	7	xcomp	_	_
9	a	a	ADP	IN	_	11	case	_	_
10	por	por	ADP	IN	_	11	case	_	_
11	más	_	ADV	RBR	Degree=Cmp	8	advmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


