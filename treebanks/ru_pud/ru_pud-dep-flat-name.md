---
layout: base
title:  'Statistics of flat:name in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_pud-dep-flat-foreign.html">flat:foreign</a></tt>.

222 nodes (1%) are attached to their parents as `flat:name`.

222 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26576576576577.

The following 7 pairs of parts of speech are connected with `flat:name`: <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (103; 46% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (96; 43% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (14; 6% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Ее	ее	DET	PRP$	_	3	det	_	_
2	последняя	последний	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	книга	книга	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	о	о	ADP	IN	_	5	case	_	_
5	Маргарет	Маргарет	PROPN	NNP	Animacy=Anim|Case=Loc|Gender=Fem|Number=Sing	3	nmod	_	_
6	Дуглас	Дуглас	PROPN	NNP	Animacy=Anim|Case=Loc|Gender=Fem|Number=Sing	5	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	графине	графиня	NOUN	NN	Animacy=Anim|Case=Loc|Gender=Fem|Number=Sing	5	appos	_	_
9	Леннокс	Леннокс	PROPN	NNP	Animacy=Anim|Case=Loc|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:name	color:blue
1	Я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	3	nsubj	_	_
2	также	также	ADV	RB	Degree=Pos	3	advmod	_	_
3	задаюсь	задаваться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	вопросом	вопрос	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	повлиял	повлиять	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	_	_
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
1	Первым	первый	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	королем	король	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
3	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
4	Моймир	Моймир	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
5	I	I	ADJ	ORD	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	flat:name	_	Proper=True
6	(	(	PUNCT	(	_	7	punct	_	SpaceAfter=No
7	управлял	управлять	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
8	в	в	ADP	IN	_	12	case	_	_
9	830	830	ADJ	ORD	_	12	amod	_	SpaceAfter=No
10	—	—	PUNCT	-	_	11	punct	_	SpaceAfter=No
11	846	846	ADJ	ORD	_	9	conj	_	_
12	гг.	год	NOUN	NN	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
13	)	)	PUNCT	)	_	7	punct	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


