---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `xcomp`

This relation is universal.

330 nodes (1%) are attached to their parents as `xcomp`.

318 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.03636363636364.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (177; 54% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (64; 19% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (28; 8% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (22; 7% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (8; 2% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 xcomp	color:blue
1	A	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	expedição	_	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	foi	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:pass	_	_
4	liderada	_	VERB	VBN	Aspect=Perf|Gender=Fem|Number=Sing	0	root	_	_
5	por	por	ADP	INDT	_	7	case	_	_
6	o	o	DET	_	Gender=Masc|Number=Sing	7	det	_	_
7	General	_	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	_
8	Joseph	_	PROPN	NNP	Gender=Masc|Number=Sing	7	appos	_	_
9	Burgoyne	_	PROPN	NNP	Gender=Masc|Number=Sing	8	flat:name	_	SpaceAfter=No
10	,	_	PUNCT	,	_	12	punct	_	_
11	quem	_	PRON	WP	_	12	nsubj	_	_
12	visava	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past	7	acl:relcl	_	_
13	alcançar	_	VERB	VB	_	12	xcomp	_	_
14	Albany	_	PROPN	NNP	Gender=Fem|Number=Sing	13	obj	_	SpaceAfter=No
15	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	A	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	razão	_	NOUN	NN	Gender=Fem|Number=Sing	12	nsubj	_	_
3	para	_	ADP	IN	_	4	case	_	_
4	anunciar	_	VERB	VB	_	2	xcomp	_	_
5	o	_	DET	DT	Gender=Masc|Number=Sing	6	det	_	_
6	vídeo	_	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	_
7	em	em	ADP	INDT	_	9	case	_	_
8	a	o	DET	_	Gender=Fem|Number=Sing	9	det	_	_
9	Alemanha	_	PROPN	NNP	Gender=Fem|Number=Sing	4	obl	_	_
10	não	_	ADV	RB	Polarity=Neg	12	advmod	_	_
11	é	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
12	clara	_	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Para	_	ADP	IN	_	2	case	_	_
2	já	_	ADV	RB	_	7	xcomp	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	os	_	DET	DT	Gender=Masc|Number=Plur	5	det	_	_
5	analistas	_	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj	_	_
6	estão	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	cop	_	_
7	hesitantes	_	ADJ	JJ	Gender=Masc|Number=Plur	0	root	_	_
8	em	_	ADP	IN	_	9	case	_	_
9	eliminar	_	VERB	VB	_	7	xcomp	_	_
10	o	_	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
11	serviço	_	NOUN	NN	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	7	punct	_	_

~~~


