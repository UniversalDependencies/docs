---
layout: base
title:  'Statistics of xcomp in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `xcomp`

This relation is universal.

397 nodes (2%) are attached to their parents as `xcomp`.

376 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.30226700251889.

The following 17 pairs of parts of speech are connected with `xcomp`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (216; 54% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (72; 18% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (28; 7% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (19; 5% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (19; 5% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (16; 4% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (11; 3% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Todavía	todavía	ADV	RB	_	2	advmod	_	_
2	quedan	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	preguntas	_	NOUN	NN	Gender=Fem|Number=Plur	2	nsubj	_	_
4	sin	sin	ADP	IN	_	5	case	_	_
5	responder	responder	VERB	VB	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 xcomp	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	cine	cine	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	había	haber	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux	_	_
4	cambiado	cambiar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	tan	tan	ADV	RB	_	6	advmod	_	_
6	drásticamente	drásticamente	ADV	RB	_	4	advmod	_	_
7	que	que	ADP	IN	_	10	case	_	_
8	Hollywood	Hollywood	PROPN	NNP	Number=Sing	10	nsubj	_	_
9	había	haber	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
10	alejado	alejar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	xcomp	_	_
11	a	a	ADP	INDT	_	13	case	_	_
12	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	público	público	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	_
14	familiar	familiar	ADJ	JJ	Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	_	_

~~~


