---
layout: base
title:  'Statistics of acl in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ru_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

229 nodes (1%) are attached to their parents as `acl`.

158 instances of `acl` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.17467248908297.

The following 15 pairs of parts of speech are connected with `acl`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (174; 76% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (17; 7% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (13; 6% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl	color:blue
1	Но	_	CCONJ	CC	_	2	cc:preconj	_	_
2	осталось	_	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
3	еще	_	ADV	RB	_	4	advmod	_	_
4	много	_	DET	DT	Animacy=Inan|Case=Gen|Number=Plur	6	det	_	_
5	неотвеченный	_	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Long|VerbForm=Part|Voice=Pass	6	acl	_	_
6	вопросов	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	2	obl	_	SpaceAfter=No
7	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 acl	color:blue
1	Используя	_	VERB	VBG	Aspect=Imp|VerbForm=Part	6	acl	_	_
2	совет	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	1	obj	_	_
3	Александра	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	2	nmod	_	SpaceAfter=No
4	,	_	PUNCT	,	_	1	punct	_	_
5	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	смог	_	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
7	найти	_	VERB	VB	Aspect=Perf	6	xcomp	_	_
8	компромисс	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	7	obj	_	SpaceAfter=No
9	:	_	PUNCT	:	_	11	punct	_	_
10	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	_
11	поступит	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	6	parataxis	_	_
12	в	_	ADP	IN	_	13	case	_	_
13	университет	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	11	obl	_	SpaceAfter=No
14	,	_	PUNCT	,	_	16	punct	_	_
15	но	_	CCONJ	CC	_	16	cc	_	_
16	будет	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	11	conj	_	_
17	изучать	_	VERB	VB	Aspect=Imp	16	xcomp	_	_
18	литературу	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	17	obj	_	SpaceAfter=No
19	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 acl	color:blue
1	Спешивший	_	VERB	VBN	Animacy=Anim|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Long|VerbForm=Part|Voice=Act	5	acl	_	_
2	захватить	_	VERB	VB	Aspect=Perf	1	xcomp	_	_
3	Кадеш	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	2	obj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	Рамзес	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
6	II	_	ADJ	JJ	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Variant=Long	5	flat	_	Proper=True
7	допустил	_	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
8	серьезную	_	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Variant=Long	10	amod	_	_
9	тактическую	_	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Variant=Long	10	amod	_	_
10	ошибку	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	7	obj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

~~~


