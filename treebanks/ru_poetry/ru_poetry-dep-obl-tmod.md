---
layout: base
title:  'Statistics of obl:tmod in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_poetry-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_poetry-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_poetry-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_poetry-dep-obl-pronmod.html">obl:pronmod</a></tt>.

121 nodes (0%) are attached to their parents as `obl:tmod`.

85 instances of `obl:tmod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.42148760330579.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (110; 91% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl:tmod	color:blue
1	Знаешь	знать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	before=<se><line_meter="Х4д"/>|SpaceAfter=No
2	:	:	PUNCT	_	_	9	punct	_	_
3	повар	повар	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
4	в	в	ADP	_	_	6	case	_	_
5	старом	старый	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	валенке	валенок	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	nmod	_	before=<rhyme-zone/>|after=<br/>
7	Утром	утро	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	9	obl:tmod	_	before=<line_meter="Х4м"/>
8	мышку	мышка	NOUN	_	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing	9	obj	_	_
9	увидал	увидать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	before=<rhyme-zone/>|SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:tmod	color:blue
1	Соблазны	соблазн	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	before=<p_class="verse"><line_meter="Я5м"/><se>
2	льда	лед	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	растут	расти	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	как	как	SCONJ	_	_	6	case	_	_
6	опыт	опыт	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	obl	_	_
7	дней	день	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	<br/>
9	Который	который	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	before=<line_meter="Я5ж"/>
10	ночью	ночь	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	11	obl:tmod	_	_
11	явственен	явственный	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	6	acl:relcl	_	_
12	в	в	ADP	_	_	13	case	_	_
13	молчаньи	молчанье	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	11	obl	_	before=<rhyme-zone/>|SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Кажду	каждый	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Tot|Variant=Short	2	det	_	before=<p_class="verse"><line_meter="Х4м"/><se>
2	ночь	ночь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obl:tmod	_	_
3	она	она	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	в	в	ADP	_	_	5	case	_	_
5	лучах	луч	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	</se><br/>

~~~


