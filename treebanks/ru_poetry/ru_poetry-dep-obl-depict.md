---
layout: base
title:  'Statistics of obl:depict in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `obl:depict`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="ru_poetry-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_poetry-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_poetry-dep-obl-tmod.html">obl:tmod</a></tt>.

24 nodes (0%) are attached to their parents as `obl:depict`.

14 instances of `obl:depict` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.375.

The following 5 pairs of parts of speech are connected with `obl:depict`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (13; 54% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (5; 21% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (1; 4% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 obl:depict	color:blue
1	Сестер	сестра	NOUN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Plur	3	nmod	_	before=<p_class="verse"><line_meter="Я4ж"/><se>
2	кастальских	кастальский	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	1	amod	_	_
3	благостыни	благостыня	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	obl	_	before=<rhyme-zone/>|after=<br/>
4	Лишен	лишить	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	8	obl:depict	_	before=<line_meter="Я4м"/>|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj:pass	_	_
7	Роком	рок	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	8	obl:agent	_	_
8	удален	удалить	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	before=<rhyme-zone/>|after=<br/>
9	В	в	ADP	_	_	10	case	_	before=<line_meter="Я4ж"/>
10	изгнанье	изгнанье	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	8	obl	_	_
11	на	на	ADP	_	_	12	case	_	_
12	брега	брег	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	8	obl	_	_
13	Горыни	Горынь	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	12	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
14	.	.	PUNCT	_	_	8	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:depict	color:blue
1	Все	всё	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	3	nmod:float	_	before=<se><line_meter="Х5ж"/>
2	в	в	ADP	_	_	3	case	_	_
3	свету	свет	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl:depict	_	_
4	проходят	проходить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	тучи	туча	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
6	мимо	мимо	ADV	_	Degree=Pos	4	advmod	_	before=<rhyme-zone/>|SpaceAfter=No
7	...	...	PUNCT	_	_	4	punct	_	</se><br/>

~~~


