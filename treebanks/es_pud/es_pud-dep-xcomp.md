---
layout: base
title:  'Statistics of xcomp in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `xcomp`

This relation is universal.

356 nodes (2%) are attached to their parents as `xcomp`.

334 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.69943820224719.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (191; 54% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (75; 21% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (29; 8% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (20; 6% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (20; 6% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Van	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
2	a	_	ADP	IN	_	1	fixed	_	_
3	ir	_	VERB	VB	Aspect=Imp|VerbForm=Fin	0	root	_	_
4	a	_	ADP	IN	_	6	case	_	_
5	por	_	ADP	IN	_	4	fixed	_	_
6	todas	_	NOUN	NN	Gender=Fem|Number=Plur	3	obl	_	_
7	y	_	CCONJ	CC	_	9	cc	_	_
8	a	_	SCONJ	IN	_	9	mark	_	_
9	intentar	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	6	conj	_	_
10	ganar	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	9	xcomp	_	_
11	a	_	ADP	IN	_	12	case	_	_
12	Inglaterra	_	PROPN	NNP	Number=Sing	10	obl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Todavía	_	ADV	RB	_	2	advmod	_	_
2	quedan	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	preguntas	_	NOUN	NN	Gender=Fem|Number=Plur	2	nsubj	_	_
4	sin	_	ADP	IN	_	5	case	_	_
5	responder	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	3	xcomp	_	SpaceAfter=No
6	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 xcomp	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	cine	_	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	había	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	cambiado	_	VERB	VBN	VerbForm=Fin	0	root	_	_
5	tan	_	ADV	RB	_	6	advmod	_	_
6	drásticamente	_	ADV	RB	_	4	advmod	_	_
7	que	_	ADP	IN	_	10	case	_	_
8	Hollywood	_	PROPN	NNP	Number=Sing	10	nsubj	_	_
9	había	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	aux	_	_
10	alejado	_	VERB	VBN	VerbForm=Fin	5	xcomp	_	_
11	a	a	ADP	INDT	_	13	case	_	_
12	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	público	_	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	_
14	familiar	_	ADJ	JJ	Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	4	punct	_	_

~~~


