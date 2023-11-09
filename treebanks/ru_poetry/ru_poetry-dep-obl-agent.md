---
layout: base
title:  'Statistics of obl:agent in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_poetry-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_poetry-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_poetry-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_poetry-dep-obl-tmod.html">obl:tmod</a></tt>.

131 nodes (0%) are attached to their parents as `obl:agent`.

88 instances of `obl:agent` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.45038167938931.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (112; 85% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (15; 11% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:agent	color:blue
1	Ночь	ночь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj:pass	_	before=<se><line_meter="Х4ж"/>
2	усеяна	усеять	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	звездами	звезда	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	2	obl:agent	_	before=<rhyme-zone/>|SpaceAfter=No
4	;	;	PUNCT	_	_	5	punct	_	<br/>
5	Било	бить	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	before=<line_meter="Х4м"/>
6	час	час	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	второй	второй	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	9	nsubj	_	_
9	настал	настать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	before=<rhyme-zone/>|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:agent	color:blue
1	Признаю	признавать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	before=<se><line_meter="Х5ж"/>
2	всё	всё	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	6	nsubj:pass	_	_
5	тобой	ты	PRON	_	Case=Ins|Number=Sing|Person=2|PronType=Prs	6	obl:agent	_	_
6	любимо	любить	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	acl:relcl	_	before=<rhyme-zone/>|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	<br/>
8	Радуйся	радоваться	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	1	conj	_	before=<line_meter="Х5м"/>|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	Наталья	Наталья	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv|Number=Sing	8	vocative	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	веселись	веселиться	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	1	conj	_	before=<rhyme-zone/>|SpaceAfter=No
13	!	!	PUNCT	_	_	1	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:agent	color:blue
1	В	в	ADP	_	_	2	case	_	before=<p_class="verse"><line_meter="Я5м 1*1*1*1*1*0"/><se>
2	невероятности	невероятность	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	/	/	PUNCT	_	_	5	punct	_	_
4	английский	английский	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	дух	дух	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	<br/>
7	не	не	PART	_	Polarity=Neg	8	advmod	_	before=<line_meter="Я5ж 1*1*1*1*1*1"/>
8	объясним	объяснимый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	5	conj	_	_
9	ничем	ничто	PRON	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing|PronType=Neg	8	obl:agent	_	_
10	американец	американец	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	_	before=<rhyme-zone/>|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	<br/>
12	неведеньем	неведенье	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	10	conj	_	before=<line_meter="Я5ж 1*1*1*1*1*1"/>|SpaceAfter=No
13	/	/	PUNCT	_	_	12	punct	_	_
14	прекрасен	прекрасный	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	2	conj	_	_
15	африканец	африканец	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	<br/>
17	не	не	PART	_	Polarity=Neg	18	advmod	_	before=<line_meter="Я5м 1*1*1*1*1*0"/>
18	выбирает	выбирать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
19	грек	грек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	SpaceAfter=No
20	/	/	PUNCT	_	_	21	punct	_	_
21	одно	один	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	18	obj	_	_
22	из	из	ADP	_	_	23	case	_	_
23	двух	два	NUM	_	Case=Gen|NumForm=Word|NumType=Card	21	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
24	.	.	PUNCT	_	_	2	punct	_	</se></p>

~~~


