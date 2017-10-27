---
layout: base
title:  'Statistics of orphan in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `orphan`

This relation is universal.

10 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 8 pairs of parts of speech are connected with `orphan`: <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (3; 30% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 orphan	color:blue
1	Durán	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	fungiert	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	als	_	CCONJ	CC	_	4	cc	_	_
4	Sprecher	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	SpaceAfter=No
5	,	_	PUNCT	,	_	6	punct	_	_
6	Ángel	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	conj	_	orig_deprel=nsubj
7	Pintado	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	flat:name	_	_
8	als	_	CCONJ	CC	_	6	orphan	_	orig_deprel=cc
9	Schatzmeister	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	orphan	_	orig_deprel=root|SpaceAfter=No
10	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 28 orphan	color:blue
1	Es	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	3	expl	_	_
2	ist	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	möglich	_	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
4	,	_	PUNCT	,	_	17	punct	_	_
5	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	6	det	_	_
6	Phase	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	17	obj	_	_
7	des	_	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3	8	det	_	_
8	Mondes	_	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	6	nmod	_	_
9	an	_	ADP	IN	_	12	case	_	_
10	einem	_	DET	DT	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing|Person=3	12	det	_	_
11	bestimmten	_	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Person=3	12	amod	_	InflectionType=Mixed
12	Tag	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
13	vor	_	ADP	IN	_	15	case	_	_
14	zweitausend	_	NUM	CD	NumType=Card	15	nummod	_	_
15	Jahren	_	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	12	nmod	_	_
16	zu	_	PART	RP	_	17	mark	_	_
17	ermitteln	_	VERB	VB	_	3	csubj	_	SpaceAfter=No
18	,	_	PUNCT	,	_	20	punct	_	_
19	aber	_	CCONJ	CC	_	20	cc	_	_
20	nicht	_	ADV	RB	Degree=Pos|Polarity=Neg	3	conj	_	SpaceAfter=No
21	,	_	PUNCT	,	_	28	punct	_	_
22	ob	_	SCONJ	CC	_	28	mark	_	_
23	er	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	28	nsubj	_	_
24	von	_	ADP	IN	_	25	case	_	_
25	Wolken	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	28	obl	_	_
26	oder	_	CCONJ	CC	_	27	cc	_	_
27	Nebel	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	25	conj	_	_
28	verdeckt	_	ADJ	JJ	Degree=Pos	20	orphan	_	orig_deprel=obj
29	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	28	cop	_	SpaceAfter=No
30	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 orphan	color:blue
1	Eine	_	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Person=3	3	det	_	_
2	schwedische	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Person=3	3	amod	_	InflectionType=Mixed|Proper=True
3	Studie	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	_
4	zeigt	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
5	,	_	PUNCT	,	_	15	punct	_	_
6	dass	_	SCONJ	CC	_	15	mark	_	_
7	die	_	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|Person=3	8	det	_	_
8	Tiere	_	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur|Person=3	15	nsubj	_	_
9	jenseits	_	ADP	IN	_	12	case	_	_
10	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	12	det	_	_
11	zweimonatigen	_	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Person=3	12	amod	_	InflectionType=Weak
12	Brutzeit	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	15	obl	_	_
13	nur	_	ADV	RB	Degree=Pos	14	advmod	_	_
14	selten	_	ADV	RB	Degree=Pos	15	advmod	_	_
15	landen	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	4	ccomp	_	SpaceAfter=No
16	,	_	PUNCT	,	_	18	punct	_	_
17	wenn	_	CCONJ	CC	_	18	orphan	_	orig_deprel=mark
18	überhaupt	_	ADV	RB	Degree=Pos	15	conj	_	orig_deprel=advmod|SpaceAfter=No
19	.	_	PUNCT	.	_	4	punct	_	_

~~~


