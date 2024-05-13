---
layout: base
title:  'Statistics of xcomp in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `xcomp`

This relation is universal.

470 nodes (2%) are attached to their parents as `xcomp`.

449 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.88936170212766.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (258; 55% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (71; 15% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (34; 7% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (28; 6% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (26; 6% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (19; 4% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (19; 4% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
11	más	más	ADV	RBR	Degree=Cmp	8	advmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Todavía	todavía	ADV	RB	_	2	advmod	_	_
2	quedan	quedar	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	preguntas	pregunta	NOUN	NN	Gender=Fem|Number=Plur	2	nsubj	_	_
4	sin	sin	ADP	IN	_	5	case	_	_
5	responder	responder	VERB	VB	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	automóvil	automóvil	NOUN	NN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	explotó	explotar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	en	en	ADP	IN	_	5	case	_	_
5	llamas	llama	NOUN	NN	Gender=Fem|Number=Plur	3	obl	_	_
6	y	y	CCONJ	CC	_	8	cc	_	_
7	Kenseth	Kenseth	PROPN	NNP	Gender=Masc|Number=Sing	8	nsubj	_	_
8	salió	salir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	_
9	ileso	ileso	ADJ	JJ	Gender=Masc|Number=Sing	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


