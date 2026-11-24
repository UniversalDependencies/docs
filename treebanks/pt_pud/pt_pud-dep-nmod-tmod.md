---
layout: base
title:  'Statistics of nmod:tmod in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-nmod.html">nmod</a></tt>.

10 nodes (0%) are attached to their parents as `nmod:tmod`.

10 instances of `nmod:tmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (8; 80% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (2; 20% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nmod:tmod	color:blue
1	Ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	obteve	obter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	um	um	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Mestrado	mestrado	NOUN	NN	Gender=Masc|Number=Sing	2	obj	_	_
5	(	(	PUNCT	(	_	7	punct	_	SpaceAfter=No
6	em	em	ADP	IN	_	7	case	_	_
7	Artes	arte	NOUN	NN	Gender=Fem|Number=Plur	4	nmod	_	Proper=True|SpaceAfter=No
8	)	)	PUNCT	)	_	7	punct	_	_
9	em	em	ADP	IN	_	10	case	_	_
10	21	_	NUM	CD	Gender=Masc	2	obl	_	_
11	abril	abril	NOUN	NN	Gender=Masc|Number=Sing	10	obl:tmod	_	_
12	1882	_	NUM	CD	Gender=Masc	11	nmod:tmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 nmod:tmod	color:blue
1	Em	_	ADP	IN	_	2	case	_	_
2	On	On	PROPN	NNP	Gender=Masc|Number=Sing	12	obl	_	_
3	a	a	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	2	flat	_	_
4	Wing	Wing	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	2	flat	_	_
5	and	and	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	2	flat	_	_
6	a	a	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	2	flat	_	_
7	Prayer	Prayer	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	2	flat	_	_
8	(	(	PUNCT	(	_	9	punct	_	SpaceAfter=No
9	1992	_	NUM	CD	Gender=Masc	2	nmod:tmod	_	SpaceAfter=No
10	)	)	PUNCT	)	_	9	punct	_	_
11	se	_	PRON	SE	Person=3	12	expl:pv	_	_
12	reuniu	reunir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
13	com	_	ADP	IN	_	16	case	_	_
14	o	o	DET	PDT	Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
15	seu	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	16	det	_	_
16	colega	colega	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
17	de	de	ADP	INDT	_	19	case	_	_
18	os	o	DET	_	Gender=Masc|Number=Plur|PronType=Art	19	det	_	_
19	Stealers	Stealers	PROPN	NNP	Gender=Masc|Number=Plur	16	nmod	_	_
20	Wheel	Wheel	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Plur	19	flat	_	SpaceAfter=No
21	,	,	PUNCT	,	_	22	punct	_	_
22	Egan	Egan	PROPN	NNP	Gender=Masc|Number=Sing	16	appos	_	SpaceAfter=No
23	,	,	PUNCT	,	_	22	punct	_	_
24	em	em	ADP	IN	_	26	case	_	_
25	diversas	_	DET	DT	Gender=Fem|Number=Plur	26	det	_	_
26	faixas	faixa	NOUN	NN	Gender=Fem|Number=Plur	12	obl	_	SpaceAfter=No
27	.	.	PUNCT	.	_	12	punct	_	_

~~~


