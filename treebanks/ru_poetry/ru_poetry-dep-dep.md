---
layout: base
title:  'Statistics of dep in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `dep`

This relation is universal.

2 nodes (0%) are attached to their parents as `dep`.

1 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-X.html">X</a></tt> (1; 50% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-SYM.html">SYM</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 dep	color:blue
1	И	и	CCONJ	_	_	3	cc	_	before=<line_meter="Я5м"/>
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	храплю	храпеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	простой	простой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	солдат	солдат	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
6	в	в	ADP	_	_	7	case	_	_
7	душе	душа	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	13	obl	_	before=<rhyme-zone/>|after=<br/>
8	Сигнув	сигнуть	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	13	advcl	_	before=<line_meter="Я5ж"/>
9	от	от	ADP	_	_	11	case	_	_
10	неприступного	неприступный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	постоя	постой	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	obl	_	before=<rhyme-zone/>|after=<br/>
12	Хозяйка	хозяйка	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	before=<line_meter="Я5м"/>
13	повторяет	повторять	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
14	букву	буква	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	13	obj	_	_
15	«	«	PUNCT	_	_	16	punct	_	before=<rhyme-zone/>|SpaceAfter=No
16	ше	ше	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|InflClass=Ind|Number=Sing	14	appos	_	SpaceAfter=No
17	»	»	PUNCT	_	_	16	punct	_	<br/>
18	Зане	зане	SCONJ	_	_	20	mark	_	before=<line_meter="Я5ж"/>
19	се	се	X	_	_	20	dep	_	_
20	тише	тихо	ADV	_	Degree=Cmp	13	conj	_	_
21	но	но	CCONJ	_	_	24	cc	_	_
22	терпеть	терпеть	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	24	xcomp	_	_
23	не	не	PART	_	Polarity=Neg	24	advmod	_	_
24	стоит	стоить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	conj	_	before=<rhyme-zone/>|after=</se></p><p_class="date"><noindex>1. X. 1924 На улице</noindex></p>

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 dep	color:blue
1	Не	не	PART	_	Polarity=Neg	2	advmod	_	before=<p_class="verse"><line_meter="Аф4ж 1*2*2*2*1"/><se>
2	очень	очень	ADV	_	Degree=Pos	4	advmod	_	_
3	словам	слово	NOUN	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Plur	4	iobj	_	_
4	доверять	доверять	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	6	csubj	_	_
5	--	--	PUNCT	_	_	4	punct	_	_
6	невозможно	невозможный	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
7	;	;	PUNCT	_	_	11	punct	_	<br/>
8	слова	слово	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	11	nsubj	_	before=<line_meter="Аф5ж 1*2*2*2*2*1"/>
9	--	--	PUNCT	_	_	8	punct	_	_
10	это	это	PART	_	_	11	expl	_	_
11	край	край	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
12	*	*	SYM	_	_	11	dep	_	SpaceAfter=No
13	,	,	PUNCT	_	_	17	punct	_	_
14	потому	потому	ADV	_	Degree=Pos|PronType=Dem	17	mark	_	_
15	что	что	SCONJ	_	_	14	fixed	_	_
16	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	17	nsubj	_	_
17	отвечают	отвечать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl	_	before=<rhyme-zone/>|after=<br/>
18	не	не	PART	_	Polarity=Neg	19	advmod	_	before=<line_meter="Аф4ж 1*2*2*2*1"/>
19	сами	сам	DET	_	Case=Nom|Number=Plur|PronType=Emp	17	iobj	_	_
20	себе	себя	PRON	_	Case=Dat|PronType=Prs|Reflex=Yes	19	fixed	_	SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	_
22	а	а	CCONJ	_	_	23	cc	_	_
23	чему-то	что-то	PRON	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing|PronType=Ind	19	conj	_	_
24	иному	иной	DET	_	Case=Dat|Gender=Masc|Number=Sing|PronType=Tot	23	det	_	before=<rhyme-zone/>
25	--	--	PUNCT	_	_	27	punct	_	<br/>
26	такому	такой	DET	_	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	27	det	_	before=<line_meter="Аф4м 1*2*2*2*0"/>
27	иному	иной	DET	_	Case=Dat|Gender=Masc|Number=Sing|PronType=Tot	23	det	_	SpaceAfter=No
28	,	,	PUNCT	_	_	32	punct	_	_
29	что	что	SCONJ	_	_	32	mark	_	_
30	впрямь	впрямь	ADV	_	Degree=Pos	32	advmod	_	_
31	не	не	PART	_	Polarity=Neg	32	advmod	_	_
32	найдешь	найти	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	27	acl:relcl	_	before=<rhyme-zone/>|SpaceAfter=No
33	.	.	PUNCT	_	_	6	punct	_	</se></p>

~~~


