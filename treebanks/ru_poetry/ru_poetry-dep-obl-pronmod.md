---
layout: base
title:  'Statistics of obl:pronmod in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `obl:pronmod`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_poetry-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_poetry-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_poetry-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_poetry-dep-obl-tmod.html">obl:tmod</a></tt>.

4 nodes (0%) are attached to their parents as `obl:pronmod`.

3 instances of `obl:pronmod` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `obl:pronmod`: <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (2; 50% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:pronmod	color:blue
1	Потому	потому	ADV	_	Degree=Pos|ExtPos=SCONJ|PronType=Dem	13	mark	_	before=<se><line_meter="Тк8м 2*1*2*2*1*2*3*2*0"/>
2	что	что	SCONJ	_	_	1	fixed	_	_
3	в	в	ADP	_	_	4	case	_	_
4	мире	мир	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	который	который	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	_	_
7	имеет	иметь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	свойство	свойство	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	7	obj	_	_
9	деваться	деваться	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	8	acl	_	_
10	непонятно	непонятный	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	11	obl:pronmod	_	_
11	куда	куда	ADV	_	Degree=Pos|PronType=Rel	9	advmod	_	before=<rhyme-zone/>|SpaceAfter=No
12	,	,	PUNCT	_	_	4	punct	_	<br/>
13	Лучше	лучше	ADJ	_	Degree=Pos	0	root	_	before=<line_meter="Ак7м 0*2*1*3*5*1*2*0"/>
14	ни	ни	PART	_	Polarity=Neg	16	advmod	_	_
15	в	в	ADP	_	_	16	case	_	_
16	чем	ничто	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Neg	18	obl	_	_
17	не	не	PART	_	Polarity=Neg	18	advmod	_	_
18	клясться	клясться	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	13	csubj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	22	punct	_	_
20	а	а	CCONJ	_	_	22	cc	_	_
21	одновременно	одновременно	ADV	_	Degree=Pos	22	advmod	_	_
22	говорить	говорить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	18	conj	_	_
23	«	«	PUNCT	_	_	24	punct	_	SpaceAfter=No
24	Нет	нет	PART	_	Polarity=Neg	22	parataxis	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	нет	нет	PART	_	Polarity=Neg	24	conj	_	SpaceAfter=No
27	»	»	PUNCT	_	_	24	punct	_	_
28	и	и	CCONJ	_	_	30	cc	_	_
29	«	«	PUNCT	_	_	30	punct	_	SpaceAfter=No
30	Да	да	PART	_	_	24	conj	_	SpaceAfter=No
31	,	,	PUNCT	_	_	32	punct	_	_
32	да	да	PART	_	_	30	conj	_	before=<rhyme-zone/>|SpaceAfter=No
33	»	»	PUNCT	_	_	30	punct	_	SpaceAfter=No
34	.	.	PUNCT	_	_	13	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 obl:pronmod	color:blue
1	И	и	CCONJ	_	_	11	cc	_	before=<p_class="verse"><line_meter="Я3д 1*1*1*2"/><se>
2	вот	вот	PART	_	_	11	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	чтоб	чтоб	SCONJ	_	Mood=Cnd	5	mark	_	_
5	помянуть	помянуть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	11	advcl	_	_
6	Христа	Христос	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Prs|Number=Sing	5	obj	_	<br/>
7	Достойно	достойно	ADV	_	Degree=Pos	5	advmod	_	before=<line_meter="Я3д 1*1*1*2"/>
8	его	его	DET	_	Poss=Yes|PronType=Prs	9	det	_	_
9	имени	имя	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	5	punct	_	<br/>
11	Давайте	давать	VERB	_	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	before=<line_meter="Я3д 1*1*1*2"/>
12	проведем	провести	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	11	xcomp	_	_
13	сей	сей	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	14	det	_	_
14	день	день	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	obj	_	<br/>
15	Как	как	ADV	_	Degree=Pos|PronType=Rel	17	advmod	_	before=<line_meter="Я3м 1*1*1*0"/>
16	можно	можно	VERB	_	_	15	obl:pronmod	_	_
17	веселей	весело	ADV	_	Degree=Cmp	12	advmod	_	SpaceAfter=No
18	!..	!..	PUNCT	_	_	11	punct	_	</se></p>

~~~


