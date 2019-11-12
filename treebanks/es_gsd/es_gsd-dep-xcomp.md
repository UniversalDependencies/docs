---
layout: base
title:  'Statistics of xcomp in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `xcomp`

This relation is universal.

2016 nodes (0%) are attached to their parents as `xcomp`.

2013 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.70982142857143.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-VERB.html">VERB</a></tt> (1527; 76% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (329; 16% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (93; 5% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (31; 2% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="es_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="es_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="es_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="es_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Esto	este	PRON	_	Number=Sing|PronType=Dem	2	nsubj	_	_
2	permitió	permitir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	ADP	_	_	4	case	_	_
4	Smart	smart	PROPN	_	_	2	iobj	_	_
5	asistir	asistir	VERB	_	VerbForm=Inf	2	xcomp	_	_
6	a	a	ADP	_	_	8	case	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Pembroke	pembroke	PROPN	_	_	5	obl	_	_
9	College	college	PROPN	_	_	8	flat	_	_
10	de	de	ADP	_	_	11	case	_	_
11	Cambridge	cambridge	PROPN	_	_	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 xcomp	color:blue
1	Gracias	gracia	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
2	Lupe	lupe	PROPN	_	_	1	dep	_	_
3	y	y	CCONJ	_	_	4	cc	_	_
4	Ana	ana	PROPN	_	_	2	conj	_	_
5	por	por	ADP	_	_	6	mark	_	_
6	hacer	hacer	VERB	_	VerbForm=Inf	1	advcl	_	_
7	me	yo	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	6	iobj	_	_
8	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	vida	vida	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
10	más	más	ADV	_	Degree=Cmp	11	advmod	_	_
11	fácil	fácil	ADJ	_	Number=Sing	6	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Pueden	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	ser	ser	AUX	_	VerbForm=Inf	3	cop	_	_
3	unicelulares	unicelular	NOUN	_	Gender=Masc|Number=Plur|VerbForm=Part	1	xcomp	_	_
4	y	y	CCONJ	_	_	5	cc	_	_
5	talófitos	talófito	NOUN	_	Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


