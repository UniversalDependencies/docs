---
layout: base
title:  'Statistics of acl in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ru_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

246 nodes (1%) are attached to their parents as `acl`.

178 instances of `acl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.04878048780488.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (195; 79% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (16; 7% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (10; 4% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	3	nsubj	_	_
2	также	также	ADV	CC	_	3	advmod	_	_
3	задаюсь	задаваться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
4	вопросом	вопрос	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	повлиял	повлиять	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	4	acl	_	_
7	ли	ли	PART	RP	_	6	advmod	_	_
8	на	на	ADP	IN	_	9	case	_	_
9	это	это	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	obl	_	_
10	Кубок	кубок	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
11	Дэвиса	Дэвис	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	Это	это	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
2	то	то	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	что	что	PRON	WP	Animacy=Inan|Case=Nom|Gender=Neut	5	nsubj	_	_
5	заставляет	заставлять	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	acl	_	_
6	нас	мы	PRON	PRP	Case=Acc|Number=Plur|Person=1	5	obj	_	_
7	возвращаться	возвращаться	VERB	VB	Aspect=Imp	5	xcomp	_	_
8	снова	снова	ADV	RB	_	7	advmod	_	_
9	и	и	CCONJ	CC	_	10	cc	_	_
10	снова	снова	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 acl	color:blue
1	Спешивший	спешить	VERB	VBN	Animacy=Anim|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Long|VerbForm=Part|Voice=Act	5	acl	_	_
2	захватить	захватить	VERB	VB	Aspect=Perf	1	xcomp	_	_
3	Кадеш	Кадеш	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	1	punct	_	_
5	Рамзес	Рамзес	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
6	II	II	ADJ	JJ	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Variant=Long	5	flat:name	_	Proper=True
7	допустил	допустить	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
8	серьезную	серьезный	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Variant=Long	10	amod	_	_
9	тактическую	тактический	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Variant=Long	10	amod	_	_
10	ошибку	ошибка	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


