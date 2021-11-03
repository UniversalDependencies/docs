---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `xcomp`

This relation is universal.

365 nodes (2%) are attached to their parents as `xcomp`.

353 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.89315068493151.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (181; 50% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (63; 17% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (28; 8% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (26; 7% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (21; 6% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (18; 5% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (8; 2% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Quem	_	PRON	WP	_	2	nsubj	_	_
2	consegue	conseguir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	parar	_	VERB	VB	_	2	xcomp	_	_
4	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	time	time	NOUN	NN	Gender=Masc|Number=Sing	3	obj	_	_
6	de	de	ADP	INDT	_	8	case	_	_
7	a	o	DET	_	Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Austrália	Austrália	PROPN	NNP	Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	?	?	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	A	o	DET	DT	Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	razão	razão	NOUN	NN	Gender=Fem|Number=Sing	12	nsubj	_	_
3	para	para	ADP	IN	_	4	case	_	_
4	anunciar	_	VERB	VB	_	2	xcomp	_	_
5	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	vídeo	vídeo	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	_
7	em	em	ADP	INDT	_	9	case	_	_
8	a	o	DET	_	Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Alemanha	Alemanha	PROPN	NNP	Gender=Fem|Number=Sing	4	obl	_	_
10	não	não	ADV	RB	Polarity=Neg	12	advmod	_	_
11	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
12	clara	claro	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Para	_	ADP	IN	_	2	case	_	_
2	já	já	ADV	RB	_	7	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	os	o	DET	DT	Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	analistas	analista	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj	_	_
6	estão	estar	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	cop	_	_
7	hesitantes	hesitante	ADJ	JJ	Gender=Masc|Number=Plur	0	root	_	_
8	em	em	ADP	IN	_	9	case	_	_
9	eliminar	_	VERB	VB	_	7	xcomp	_	_
10	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	serviço	serviço	NOUN	NN	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	_	_

~~~


