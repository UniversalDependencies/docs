---
layout: base
title:  'Statistics of csubj:outer in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ru_taiga-dep-csubj-pass.html">csubj:pass</a></tt>.

6 nodes (0%) are attached to their parents as `csubj:outer`.

6 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.66666666666667.

The following 6 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 csubj:outer	color:blue
1	А	а	CCONJ	_	_	15	cc	_	_
2	вот	вот	PART	_	_	3	advmod	_	_
3	какие	какой	DET	_	Case=Nom|Number=Plur|PronType=Rel	5	det	_	_
4	конкретные	конкретный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	5	amod	_	_
5	условия	условие	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
6	необходимы	необходимый	ADJ	_	Degree=Pos|Number=Plur|Variant=Short	15	csubj:outer	_	_
7	для	для	ADP	_	_	8	case	_	_
8	выделения	выделение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	obl	_	_
9	нулевых	нулевой	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	10	amod	_	_
10	единиц	единица	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	8	nmod	_	_
11	--	--	PUNCT	_	_	14	punct	_	_
12	на	на	ADP	_	_	14	case	_	_
13	этот	этот	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	14	det	_	_
14	вопрос	вопрос	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	17	nmod	_	_
15	возможны	возможный	ADJ	_	Degree=Pos|Number=Plur|Variant=Short	0	root	_	_
16	разные	разный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	17	amod	_	_
17	ответы	ответ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	15	nsubj	_	SpaceAfter=No
18	.	.	PUNCT	_	_	15	punct	_	sent_after='</p>\n<p>'

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj:outer	color:blue
1	С	с	ADP	_	_	2	case	_	_
2	некоторыми	некоторый	DET	_	Case=Ins|Number=Plur|PronType=Ind	3	obl	_	_
3	водиться	водиться	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	5	csubj:outer	_	feat="Transit=Intr"|_
4	--	--	PUNCT	_	_	3	punct	_	_
5	лучше	лучше	ADJ	_	Degree=Cmp	0	root	_	pos="PRED"|_
6	в	в	ADP	_	_	7	case	_	_
7	крапиву	крапива	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
8	садиться	садиться	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	5	csubj	_	feat="Transit=Intr"|_
9	Пусть	пусть	PART	_	_	12	advmod	_	_
10	и	и	PART	_	_	11	advmod	_	_
11	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	_
12	приходят	приходить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	feat="Transit=Intr"|SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 csubj:outer	color:blue
1	Они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	сочиняли	сочинять	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Tran"|_
3	стихи	стихи	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	разучивали	разучивать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	feat="Transit=Tran"|_
6	песни	песня	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	готовили	готовить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	feat="Transit=Tran"|_
9	самодеятельные	самодеятельный	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	10	amod	_	_
10	концерты	концерт	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	8	obj	_	_
11	и	и	CCONJ	_	_	12	cc	_	_
12	писали	писать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	feat="Transit=Intr,Tran"|_
13	на	на	ADP	_	_	14	case	_	_
14	досках	доска	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	12	obl	_	SpaceAfter=No
15	:	:	PUNCT	_	_	21	punct	_	_
16	«	«	PUNCT	_	_	21	punct	_	SpaceAfter=No
17	Последний	последний	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	_
18	день	день	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	21	csubj:outer	_	_
19	--	--	PUNCT	_	_	18	punct	_	_
20	учиться	учиться	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	21	csubj	_	feat="Transit=Intr"|_
21	лень	лень	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	12	parataxis	_	SpaceAfter=No
22	,	,	PUNCT	_	_	24	punct	_	_
23	и	и	CCONJ	_	_	24	cc	_	_
24	просим	просить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	21	conj	_	feat="Transit=Tran"|_
25	вас	вы	PRON	_	Case=Acc|Number=Plur|Person=2|PronType=Prs	24	obj	_	SpaceAfter=No
26	,	,	PUNCT	_	_	27	punct	_	_
27	учителей	учитель	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	25	appos	_	SpaceAfter=No
28	,	,	PUNCT	_	_	27	punct	_	_
29	не	не	PART	_	Polarity=Neg	30	advmod	_	_
30	мучить	мучить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	24	xcomp	_	feat="Transit=Tran"|_
31	маленьких	маленький	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Number=Plur	32	amod	_	_
32	детей	ребенок	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	30	obj	_	SpaceAfter=No
33	»	»	PUNCT	_	_	21	punct	_	SpaceAfter=No
34	.	.	PUNCT	_	_	2	punct	_	_

~~~


