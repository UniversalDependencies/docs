---
layout: base
title:  'Statistics of appos in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `appos`

This relation is universal.

285 nodes (1%) are attached to their parents as `appos`.

285 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.84912280701754.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (153; 54% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (50; 18% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (31; 11% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (26; 9% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (13; 5% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 appos	color:blue
1	Eu	_	PRON	PRP	Case=Nom|Number=Sing|Person=1	3	nsubj	_	_
2	também	também	ADV	RB	_	3	advmod	_	_
3	penso	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
4	se	_	SCONJ	IN	_	8	mark	_	_
5	a	o	DET	DT	Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Taça	taça	NOUN	NN	Gender=Fem|Number=Sing	8	nsubj	_	Proper=True
7	Davis	Davis	PROPN	NNP	Gender=Fem|Number=Sing	6	appos	_	_
8	desempenhou	desempenhar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	ccomp	_	_
9	algum	_	DET	DT	Gender=Masc|Number=Sing	10	det	_	_
10	papel	papel	NOUN	NN	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Um	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	ingresso	ingresso	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	F1	_	NOUN	NN	Gender=Fem|Number=Sing	2	appos	_	_
4	garante	garantir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	acesso	acesso	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	_
6	a	a	ADP	INDT	_	8	case	_	_
7	o	o	DET	_	Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	concerto	concerto	NOUN	NN	Gender=Masc|Number=Sing	5	nmod	_	_
9	em	em	ADP	INDT	_	12	case	_	_
10	o	o	DET	_	Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	mesmo	_	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
12	dia	dia	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 appos	color:blue
1	E	_	CCONJ	CC	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	claro	claro	ADV	RB	_	5	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	tem	ter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Bob	Bob	PROPN	NNP	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	uma	um	DET	DT	Gender=Fem|Number=Sing	11	det	_	_
10	constante	constante	ADJ	JJ	Gender=Fem|Number=Sing	11	amod	_	_
11	fonte	fonte	NOUN	NN	Gender=Fem|Number=Sing	7	appos	_	_
12	de	de	ADP	IN	_	13	case	_	_
13	entretenimento	entretenimento	NOUN	NN	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


