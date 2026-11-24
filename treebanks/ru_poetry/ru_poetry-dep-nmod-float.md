---
layout: base
title:  'Statistics of nmod:float in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `nmod:float`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ru_poetry-dep-nmod-pronmod.html">nmod:pronmod</a></tt>.

4 nodes (0%) are attached to their parents as `nmod:float`.

4 instances of `nmod:float` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 2 pairs of parts of speech are connected with `nmod:float`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (3; 75% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 14 nmod:float	color:blue
1	Реки	река	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	before=<p_class="verse"><line_meter="Аф3ж 1*2*2*1"/><se>
2	незаконная	незаконный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	дочка	дочка	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	12	dislocated	_	before=<rhyme-zone/>|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	<br/>
5	Племянница	племянница	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	3	appos	_	before=<line_meter="Аф3ж 1*2*2*1"/>
6	жаркого	жаркий	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
7	лета	лето	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	<br/>
9	Скользит	скользить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	before=<line_meter="Аф3ж 1*2*2*1"/>
10	по	по	ADP	_	_	11	case	_	_
11	воде	вода	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	9	obl	_	_
12	оморочка	оморочка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	<br/>
14	Вся	весь	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	19	nmod:float	_	before=<line_meter="Аф3ж 1*2*2*1"/>
15	--	--	PUNCT	_	_	19	punct	_	_
16	точно	точно	PART	_	_	19	advmod	_	_
17	из	из	ADP	_	_	19	case	_	_
18	яркого	яркий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	света	свет	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	obl	_	before=<rhyme-zone/>|SpaceAfter=No
20	.	.	PUNCT	_	_	9	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:float	color:blue
1	Все	всё	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	3	nmod:float	_	before=<se><line_meter="Х5ж"/>
2	в	в	ADP	_	_	3	case	_	_
3	свету	свет	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl:depict	_	_
4	проходят	проходить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	тучи	туча	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
6	мимо	мимо	ADV	_	Degree=Pos	4	advmod	_	before=<rhyme-zone/>|SpaceAfter=No
7	...	...	PUNCT	_	_	4	punct	_	</se><br/>

~~~


