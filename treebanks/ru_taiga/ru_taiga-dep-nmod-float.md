---
layout: base
title:  'Statistics of nmod:float in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nmod:float`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ru_taiga-dep-nmod-pronmod.html">nmod:pronmod</a></tt>.

18 nodes (0%) are attached to their parents as `nmod:float`.

17 instances of `nmod:float` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.22222222222222.

The following 5 pairs of parts of speech are connected with `nmod:float`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (8; 44% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (4; 22% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 17% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (2; 11% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nmod:float	color:blue
1	С	с	ADP	_	_	2	case	_	_
2	потолка	потолок	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	obl	_	_
3	свисала	свисать	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Intr"|_
4	люстра	люстра	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	_
6	вся	весь	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	9	nmod:float	_	_
7	в	в	ADP	_	_	9	case	_	_
8	хрустальных	хрустальный	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	9	amod	_	_
9	серёжках	сережка	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 nmod:float	color:blue
1	Вся	весь	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	2	det	_	_
2	овощь	овощь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	огородная	огородный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	after='<br/>\n'
4	Поспела	поспеть	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Intr"|SpaceAfter=No
5	;	;	PUNCT	_	_	7	punct	_	_
6	дети	ребенок	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
7	носятся	носиться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	4	conj	_	feat="Transit=Intr"|after='<br/>\n'
8	Кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nmod:float	_	_
9	с	с	ADP	_	_	10	case	_	_
10	репой	репа	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	_
12	кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	14	nmod:float	_	_
13	с	с	ADP	_	_	14	case	_	_
14	морковкою	морковка	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	10	conj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	after='<br/>\n'
16	Подсолнечник	подсолнечник	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	17	obj	_	_
17	лущат	лущить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	feat="Transit=Tran"|SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	after='<br/>'

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 22 nmod:float	color:blue
1	Суриков	Суриков	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	26	nsubj	_	_
2	в	в	ADP	_	_	3	case	_	_
3	полотнах	полотно	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Plur	26	obl	_	_
4	«	«	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	Покорение	покорение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	appos	_	_
6	Сибири	Сибирь	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	5	nmod	_	_
7	Ермаком	Ермак	PROPN	_	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	5	nmod	_	SpaceAfter=No
8	»	»	PUNCT	_	_	5	punct	_	_
9	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	1895	1895	ADJ	_	NumForm=Digit|NumType=Ord	3	parataxis	_	pos="ANUM"|SpaceAfter=No
11	)	)	PUNCT	_	_	10	punct	_	_
12	и	и	CCONJ	_	_	14	cc	_	_
13	«	«	PUNCT	_	_	14	punct	_	SpaceAfter=No
14	Переход	переход	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	conj	_	_
15	Суворова	Суворов	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	14	nmod	_	_
16	через	через	ADP	_	_	17	case	_	_
17	Альпы	Альпы	PROPN	_	Animacy=Inan|Case=Acc|Gender=Fem|NameType=Geo|Number=Plur	14	nmod	_	SpaceAfter=No
18	»	»	PUNCT	_	_	14	punct	_	_
19	(	(	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	1899	1899	ADJ	_	NumForm=Digit|NumType=Ord	14	parataxis	_	pos="ANUM"|SpaceAfter=No
21	,	,	PUNCT	_	_	24	punct	_	_
22	оба	оба	NUM	_	Case=Nom|Gender=Masc|NumForm=Word|NumType=Sets	24	nmod:float	_	_
23	в	в	ADP	_	_	24	case	_	_
24	ГРМ	ГРМ	PROPN	_	Abbr=Yes|NameType=Com	20	list	_	SpaceAfter=No
25	)	)	PUNCT	_	_	20	punct	_	_
26	создал	создать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Tran"|_
27	величественную	величественный	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	28	amod	_	_
28	эпопею	эпопея	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	26	obj	_	_
29	подвига	подвиг	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	28	nmod	_	_
30	русского	русский	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	31	amod	_	_
31	народа	народ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	29	nmod	_	SpaceAfter=No
32	,	,	PUNCT	_	_	33	punct	_	_
33	показал	показать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	26	conj	_	feat="Transit=Tran"|_
34	его	его	DET	_	Poss=Yes|PronType=Prs	36	det	_	_
35	богатырскую	богатырский	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	36	amod	_	_
36	силу	сила	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	33	obj	_	SpaceAfter=No
37	.	.	PUNCT	_	_	26	punct	_	_

~~~


