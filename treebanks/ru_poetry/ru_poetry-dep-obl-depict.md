---
layout: base
title:  'Statistics of obl:depict in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `obl:depict`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_poetry-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_poetry-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_poetry-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_poetry-dep-obl-tmod.html">obl:tmod</a></tt>.

21 nodes (0%) are attached to their parents as `obl:depict`.

12 instances of `obl:depict` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.66666666666667.

The following 5 pairs of parts of speech are connected with `obl:depict`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (12; 57% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (4; 19% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:depict	color:blue
1	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	before=<p_class="verse"><line_meter="Д4ж 0*2*2*2*1"/><se>
2	уезжала	уезжать	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	веселой	веселый	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	2	obl:depict	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	весенней	весенний	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	3	conj	_	before=<rhyme-zone/>|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 obl:depict	color:blue
1	Вздувал	вздувать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	before=<p_class="verse"><line_meter="Я4ж"/><se>
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	горн	горн	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
4	рабочим	рабочий	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	гневом	гнев	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	iobj	_	before=<rhyme-zone/>|after=<br/>
6	Коммунистической	коммунистический	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	before=<line_meter="Я4м"/>
7	мечты	мечта	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	before=<rhyme-zone/>|after=<br/>
8	И	и	CCONJ	_	_	14	cc	_	before=<line_meter="Я4ж"/>|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	опьянен	опьянить	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	14	obl:depict	_	_
11	его	его	DET	_	Poss=Yes|PronType=Prs	12	det	_	_
12	напевом	напев	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	10	obl:agent	_	before=<rhyme-zone/>|SpaceAfter=No
13	,	,	PUNCT	_	_	10	punct	_	<br/>
14	Ковал	ковать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	before=<line_meter="Я4м"/>
15	железные	железный	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	16	amod	_	_
16	цветы	цветок	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	14	obj	_	before=<rhyme-zone/>|SpaceAfter=No
17	.	.	PUNCT	_	_	1	punct	_	</se></p><p_class="date"><noindex>&lt;1917&gt;</noindex></p>

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 obl:depict	color:blue
1	А	а	CCONJ	_	_	3	cc	_	before=<se><line_meter="Я6м"/>
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	люблю	любить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	18	punct	_	_
5	когда	когда	SCONJ	_	_	18	mark	_	_
6	по	по	ADP	_	_	7	case	_	_
7	комнате	комната	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	18	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	мой	мой	DET	_	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	10	det	_	_
10	друг	друг	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	18	vocative	_	before=<rhyme-zone/>|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	<br/>
12	Смеясь	смеяться	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Mid	18	advcl	_	before=<line_meter="Я6м"/>|SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	_
14	балдой	балда	NOUN	_	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	15	nmod	_	_
15	балда	балда	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	18	obl:depict	_	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	18	nsubj	_	_
18	закружишься	закружиться	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Mid	3	ccomp	_	_
19	вдруг	вдруг	ADV	_	Degree=Pos	18	advmod	_	before=<rhyme-zone/>|SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	</se><br/>

~~~


