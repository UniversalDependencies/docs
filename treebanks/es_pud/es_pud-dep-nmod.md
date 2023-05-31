---
layout: base
title:  'Statistics of nmod in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `nmod`

This relation is universal.

1802 nodes (8%) are attached to their parents as `nmod`.

1789 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.09933407325194.

The following 20 pairs of parts of speech are connected with `nmod`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1274; 71% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (343; 19% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (69; 4% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (31; 2% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (23; 1% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="es_pud-pos-X.html">X</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	máximo	máximo	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	permitido	_	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
4	es	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	IN	_	7	case	_	_
6	5 000	5 000	NUM	CD	Gender=Masc|NumType=Card	7	nummod	_	_
7	$	_	NOUN	NN	Gender=Masc|Number=Plur	4	obl	_	_
8	por	por	ADP	IN	_	9	case	_	_
9	persona	persona	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
1	¿	¿	PUNCT	.	_	6	punct	_	SpaceAfter=No
2	Y	y	CCONJ	CC	_	6	discourse	_	_
3	cuál	cuál	PRON	WP	Number=Sing|PronType=Int	6	nsubj	_	_
4	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	postura	postura	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
7	de	de	ADP	IN	_	8	case	_	_
8	Australia	Australia	PROPN	NNP	Number=Sing	6	nmod	_	SpaceAfter=No
9	?	?	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 nmod	color:blue
1	De	de	ADP	IN	_	2	case	_	_
2	junio	junio	NOUN	NN	Gender=Masc|Number=Sing	11	obl	_	_
3	a	a	ADP	IN	_	4	case	_	_
4	agosto	agosto	NOUN	NN	Gender=Masc|Number=Sing	2	nmod	_	_
5	de	de	ADP	INDT	_	7	case	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	2010	2010	NUM	CD	Gender=Masc|NumType=Card	2	nmod	_	_
8	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	hambruna	hambruna	NOUN	NN	Gender=Fem|Number=Sing	11	nsubj	_	_
10	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	11	compound:prt	_	_
11	impuso	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	en	en	ADP	IN	_	13	case	_	_
13	Sahel	Sahel	PROPN	NNP	Number=Sing	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	_	_

~~~


