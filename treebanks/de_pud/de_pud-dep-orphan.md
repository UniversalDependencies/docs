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
1	Durán	Durán	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	fungiert	fungieren	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	als	als	CCONJ	CC	_	4	cc	_	_
4	Sprecher	Sprecher	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	Ángel	Ángel	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	conj	_	orig_deprel=nsubj
7	Pintado	Pintado	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	flat:name	_	_
8	als	als	CCONJ	CC	_	6	orphan	_	orig_deprel=cc
9	Schatzmeister	Schatzmeister	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	orphan	_	orig_deprel=root|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 28 orphan	color:blue
1	Es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	3	expl	_	_
2	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	möglich	möglich	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	17	punct	_	_
5	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	6	det	_	_
6	Phase	Phase	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	17	obj	_	_
7	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3	8	det	_	_
8	Mondes	Mond	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	6	nmod	_	_
9	an	an	ADP	IN	_	12	case	_	_
10	einem	ein	DET	DT	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing|Person=3	12	det	_	_
11	bestimmten	bestimmt	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Person=3	12	amod	_	InflectionType=Mixed
12	Tag	Tag	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
13	vor	vor	ADP	IN	_	15	case	_	_
14	zweitausend	zweitausend	NUM	CD	NumType=Card	15	nummod	_	_
15	Jahren	Jahr	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	12	nmod	_	_
16	zu	zu	PART	RP	_	17	mark	_	_
17	ermitteln	ermitteln	VERB	VB	_	3	csubj	_	SpaceAfter=No
18	,	,	PUNCT	,	_	20	punct	_	_
19	aber	aber	CCONJ	CC	_	20	cc	_	_
20	nicht	nicht	ADV	RB	Degree=Pos|Polarity=Neg	3	conj	_	SpaceAfter=No
21	,	,	PUNCT	,	_	28	punct	_	_
22	ob	ob	SCONJ	CC	_	28	mark	_	_
23	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	28	nsubj	_	_
24	von	von	ADP	IN	_	25	case	_	_
25	Wolken	Wolke	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	28	obl	_	_
26	oder	oder	CCONJ	CC	_	27	cc	_	_
27	Nebel	Nebel	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	25	conj	_	_
28	verdeckt	verdeckt	ADJ	JJ	Degree=Pos	20	orphan	_	orig_deprel=obj
29	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	28	cop	_	SpaceAfter=No
30	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 orphan	color:blue
1	Eine	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Person=3	3	det	_	_
2	schwedische	schwedisch	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Person=3	3	amod	_	InflectionType=Mixed|Proper=True
3	Studie	Studie	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	_
4	zeigt	zeigen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	15	punct	_	_
6	dass	dass	SCONJ	CC	_	15	mark	_	_
7	die	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|Person=3	8	det	_	_
8	Tiere	Tier	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur|Person=3	15	nsubj	_	_
9	jenseits	jenseits	ADP	IN	_	12	case	_	_
10	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	12	det	_	_
11	zweimonatigen	zweimonatig	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Person=3	12	amod	_	InflectionType=Weak
12	Brutzeit	Brutzeit	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	15	obl	_	_
13	nur	nur	ADV	RB	Degree=Pos	14	advmod	_	_
14	selten	selten	ADV	RB	Degree=Pos	15	advmod	_	_
15	landen	landen	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	4	ccomp	_	SpaceAfter=No
16	,	,	PUNCT	,	_	18	punct	_	_
17	wenn	wenn	CCONJ	CC	_	18	orphan	_	orig_deprel=mark
18	überhaupt	überhaupt	ADV	RB	Degree=Pos	15	conj	_	orig_deprel=advmod|SpaceAfter=No
19	.	.	PUNCT	.	_	4	punct	_	_

~~~


