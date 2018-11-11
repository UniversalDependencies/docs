---
layout: base
title:  'Statistics of flat:name in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_pud-dep-flat-foreign.html">flat:foreign</a></tt>.

207 nodes (1%) are attached to their parents as `flat:name`.

207 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2512077294686.

The following 5 pairs of parts of speech are connected with `flat:name`: <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (106; 51% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (82; 40% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (15; 7% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Ее	ее	DET	PRP$	Case=Nom|Gender[psor]=Fem|Number[psor]=Sing|Person=3|PronType=Prs	3	det	_	_
2	последняя	последний	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	3	amod	_	_
3	книга	книга	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	о	о	ADP	IN	_	5	case	_	_
5	Маргарет	Маргарет	PROPN	NNP	Animacy=Anim|Gender=Fem|Number=Sing	3	nmod	_	_
6	Дуглас	Дуглас	PROPN	NNP	Animacy=Anim|Gender=Fem|Number=Sing	5	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	графине	графиня	NOUN	NN	Animacy=Anim|Gender=Fem|Number=Sing	5	appos	_	_
9	Леннокс	Леннокс	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:name	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Первым	первый	ADJ	JJ	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	2	amod	_	_
2	королем	король	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
3	был	быть	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	2	cop	_	_
4	Моймир	Моймир	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
5	I	I	ADJ	JJ	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Variant=Long	4	flat:name	_	Proper=True
6	(	(	PUNCT	(	_	7	punct	_	SpaceAfter=No
7	управлял	управлять	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	2	parataxis	_	_
8	в	в	ADP	IN	_	12	case	_	_
9	830	830	NUM	CD	Animacy=Inan|Gender=Masc|Number=Sing	12	amod	_	SpaceAfter=No
10	—	—	PUNCT	-	_	11	punct	_	OrigForm=--|SpaceAfter=No
11	846	846	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	9	conj	_	_
12	гг	гг	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	SpaceAfter=No
14	)	)	PUNCT	)	_	7	punct	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


