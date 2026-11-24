---
layout: base
title:  'Statistics of amod in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `amod`

This relation is universal.

730 nodes (4%) are attached to their parents as `amod`.

435 instances of `amod` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20547945205479.

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (677; 93% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (32; 4% instances), <tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (19; 3% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_alienista-pos-X.html">X</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	alienista	alienista	NOUN	_	Number=Sing	3	nsubj	_	_
3	fez	fazer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	gesto	gesto	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	magnífico	magnífico	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	e	e	CCONJ	_	_	9	cc	_	_
9	respondeu	responder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	SpaceAfter=No
10	:	:	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	Ora	ora	INTJ	_	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	todo	todo	DET	_	Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
4	esse	esse	DET	_	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	trabalho	trabalho	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
6	levava	levar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	lhe	lhe	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	6	iobj	_	_
8	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	obj	_	_
9	melhor	melhor	ADJ	_	Number=Sing	8	amod	_	_
10	e	e	CCONJ	_	_	11	cc	_	_
11	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	conj	_	_
12	mais	mais	ADV	_	_	11	advmod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	tempo	tempo	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	Era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
2	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	grande	grande	ADJ	_	Number=Sing	4	amod	_	_
4	homem	homem	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	austero	austero	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	Hipócrates	Hipócrates	PROPN	_	_	4	appos	_	_
8	forrado	forrar	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	7	amod	_	_
9	de	de	ADP	_	_	10	case	_	_
10	Catão	Catão	PROPN	_	_	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


