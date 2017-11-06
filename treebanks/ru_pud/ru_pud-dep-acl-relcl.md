---
layout: base
title:  'Statistics of acl:relcl in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-acl.html">acl</a></tt>.

162 nodes (1%) are attached to their parents as `acl:relcl`.

162 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.11111111111111.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (119; 73% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (16; 10% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Обычно	_	ADV	RB	_	3	advmod	_	_
2	это	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
3	исполнители	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Person=3	0	root	_	SpaceAfter=No
4	,	_	PUNCT	,	_	6	punct	_	_
5	которые	_	DET	WDT	Animacy=Anim|Case=Nom|Number=Plur	6	nsubj	_	_
6	хотят	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	3	acl:relcl	_	_
7	сделать	_	VERB	VB	Aspect=Perf	6	xcomp	_	_
8	кучу	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	7	obj	_	_
9	вещей	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur|Person=3	8	nmod	_	SpaceAfter=No
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 acl:relcl	color:blue
1	В	_	ADP	IN	_	3	case	_	_
2	это	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	3	det	_	_
3	время	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3	7	obl	_	_
4	его	_	DET	PRP$	Case=Acc|Gender[psor]=Masc|Number[psor]=Sing|Person=3|PronType=Prs	5	det	_	_
5	место	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3	7	obj	_	_
6	трибуна	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	5	nmod	_	_
7	занимал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
8	Марк	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
9	Антоний	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	8	flat	_	SpaceAfter=No
10	,	_	PUNCT	,	_	12	punct	_	_
11	который	_	DET	WDT	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
12	оставался	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	9	acl:relcl	_	_
13	в	_	ADP	IN	_	15	case	_	_
14	этой	_	DET	DT	Animacy=Inan|Gender=Fem|Number=Sing	15	det	_	_
15	должности	_	NOUN	NN	Animacy=Inan|Gender=Fem|Number=Sing|Person=3	12	obl	_	_
16	до	_	ADP	IN	_	17	case	_	_
17	декабря	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	12	obl	_	SpaceAfter=No
18	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Джордж	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj:pass	_	_
2	был	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	3	aux:pass	_	_
3	поражен	_	VERB	VBN	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
4	тем	_	DET	DT	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	3	iobj	_	SpaceAfter=No
5	,	_	PUNCT	,	_	8	punct	_	_
6	что	_	ADP	IN	_	8	mark	_	_
7	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
8	считал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	4	acl:relcl	_	_
9	упадком	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Person=3	8	advmod	_	_
10	их	_	DET	PRP$	Case=Gen|Number[psor]=Plur|Person=3|PronType=Prs	11	det	_	_
11	нравов	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	9	nmod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	3	punct	_	_

~~~


