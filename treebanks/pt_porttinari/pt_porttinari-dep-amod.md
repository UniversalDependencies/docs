---
layout: base
title:  'Statistics of amod in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `amod`

This relation is universal.

6617 nodes (4%) are attached to their parents as `amod`.

4926 instances of `amod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16941212029621.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (6188; 94% instances), <tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (253; 4% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (142; 2% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (15; 0% instances), <tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="pt_porttinari-pos-X.html">X</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Viver	viver	VERB	_	VerbForm=Inf	0	root	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	vida	vida	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	_
4	real	real	ADJ	_	Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	_
6	em	em	ADP	_	_	9	mark	_	_
7	vez	vez	NOUN	_	Gender=Fem|Number=Sing	6	fixed	_	_
8	de	de	ADP	_	_	6	fixed	_	_
9	ficar	ficar	VERB	_	VerbForm=Inf	1	advcl	_	_
10	com	com	ADP	_	_	12	case	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	celular	celular	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	_
13	em	em	ADP	_	_	15	case	_	_
14	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	mão	mão	NOUN	_	Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	A	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	última	último	ADJ	_	Gender=Fem|Number=Sing	1	amod	_	_
3	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	4	obj	_	_
4	atropelou	atropelar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	em	em	ADP	_	_	7	case	_	_
6	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	domingo	domingo	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	Dom	Dom	PROPN	_	_	4	nsubj	_	_
2	Pedro	Pedro	PROPN	_	_	1	flat:name	_	_
3	1º	1º	ADJ	_	Gender=Masc|NumType=Ord	1	amod	_	_
4	levantou	levantar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	espada	espada	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
7	e	e	CCONJ	_	_	8	cc	_	_
8	gritou	gritar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	Fora	fora	ADV	_	_	8	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	Temer	Temer	PROPN	_	_	10	vocative	_	SpaceAfter=No
13	!	!	PUNCT	_	_	10	punct	_	SpaceAfter=No
14	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


