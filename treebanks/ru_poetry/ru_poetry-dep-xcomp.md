---
layout: base
title:  'Statistics of xcomp in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `xcomp`

This relation is universal.

431 nodes (1%) are attached to their parents as `xcomp`.

306 instances of `xcomp` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31554524361949.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (294; 68% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (65; 15% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (43; 10% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (18; 4% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Не	не	PART	_	Polarity=Neg	2	advmod	_	before=<p_class="verse"><line_meter="Х5ж"/><se>
2	могу	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
4	приняться	приняться	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Mid	2	xcomp	_	_
5	за	за	ADP	_	_	6	case	_	_
6	дело	дело	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	obl	_	before=<rhyme-zone/>|SpaceAfter=No
7	;	;	PUNCT	_	_	10	punct	_	<br/>
8	Меня	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	10	obj	_	before=<line_meter="Х5м"/>
9	тусклое	тусклый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	11	amod	_	_
10	манит	манить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
11	окно	окно	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 xcomp	color:blue
1	И	и	CCONJ	_	_	4	cc	_	before=<se><line_meter="Ан4ж 2*2*2*2*1"/>
2	на	на	ADP	_	_	3	case	_	_
3	ночь	ночь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
4	стало	стать	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	все	всё	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	4	nsubj	_	_
6	в	в	ADP	_	_	8	case	_	_
7	этом	этот	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	мире	мир	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	_
9	похоже	похожий	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	4	xcomp	_	before=<rhyme-zone/>|SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Всё	всё	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	2	nsubj	_	before=<p_class="verse"><line_meter="Дк3д 2*4*2"/><se>
2	наладится	наладиться	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	образуется	образовываться	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Mid	2	conj	_	before=<rhyme-zone/>|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	<br/>
6	Виноватые	виноватый	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	7	nsubj	_	before=<line_meter="Дк3д 2*4*2"/>
7	станут	стать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	conj	_	_
8	судьями	судья	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	7	xcomp	_	before=<rhyme-zone/>|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	</se><br/>

~~~


