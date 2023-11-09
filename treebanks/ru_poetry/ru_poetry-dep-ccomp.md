---
layout: base
title:  'Statistics of ccomp in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `ccomp`

This relation is universal.

181 nodes (0%) are attached to their parents as `ccomp`.

174 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.94475138121547.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (131; 72% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (18; 10% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (11; 6% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (6; 3% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	В	в	ADP	_	_	2	case	_	before=<se><line_meter="Д3м~Д3м"/>
2	веке	век	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	_
3	прогресса	прогресс	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	скажи	сказать	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Int	9	nsubj	_	_
8	казаков	казак	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	9	obj	_	_
9	угадал	угадать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	_	SpaceAfter=No
10	?	?	PUNCT	_	_	5	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Отчего	отчего	ADV	_	Degree=Pos|PronType=Int	3	advmod	_	before=<p_class="verse"><line_meter="Х3ж"/><se>
2	--	--	PUNCT	_	_	1	punct	_	_
3	поведай	поведать	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	before=<rhyme-zone/>
4	--	--	PUNCT	_	_	3	punct	_	<br/>
5	Грустны	грустный	ADJ	_	Degree=Pos|Number=Plur|Variant=Short	3	ccomp	_	before=<line_meter="Х3ж"/>
6	их	их	DET	_	Poss=Yes|PronType=Prs	7	det	_	_
7	мотивы	мотив	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
8	?	?	PUNCT	_	_	3	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Те	тот	DET	_	Case=Nom|Number=Plur|PronType=Dem	2	nsubj	_	before=<p_class="verse"><line_meter="Х4м"/><se>
2	твердят	твердить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	что	что	SCONJ	_	_	6	mark	_	_
5	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
6	кровь	кровь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	ccomp	_	before=<rhyme-zone/>|SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	<br/>
8	Те	тот	DET	_	Case=Nom|Number=Plur|PronType=Dem	11	nsubj	_	before=<line_meter="Х4ж"/>
9	--	--	PUNCT	_	_	8	punct	_	_
10	духовная	духовный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
11	потреба	потреба	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	conj	_	before=<rhyme-zone/>|SpaceAfter=No
12	...	...	PUNCT	_	_	2	punct	_	</se><br/>

~~~


