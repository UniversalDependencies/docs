---
layout: base
title:  'Statistics of expl in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `expl`

This relation is universal.

24 nodes (0%) are attached to their parents as `expl`.

24 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.41666666666667.

The following 5 pairs of parts of speech are connected with `expl`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PART.html">PART</a></tt> (11; 46% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (8; 33% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-PART.html">PART</a></tt> (3; 13% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Это	это	PART	_	_	4	expl	_	before=<se><line_meter="Х4ж"/>
2	к	к	ADP	_	_	3	case	_	_
3	нам	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	4	obl	_	_
4	пришел	прийти	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	и	и	CCONJ	_	_	6	cc	_	_
6	сел	сесть	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	before=<rhyme-zone/>
7	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	<br/>
8	На	на	ADP	_	_	9	case	_	before=<line_meter="Х2м"/>
9	крыльцо	крыльцо	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	obl	_	before=<rhyme-zone/>|SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	expl	_	before=<se><line_meter="Ан3д"/>
2	новая	новый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	жизнь	жизнь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	начинается	начинаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	<br/>
6	Ни	ни	PART	_	Polarity=Neg	8	advmod	_	before=<line_meter="Ан2д"/>
7	на	на	ADP	_	_	8	case	_	_
8	что	что	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Neg	10	obl	_	_
9	не	не	PART	_	Polarity=Neg	10	advmod	_	_
10	похожая	похожий	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	before=<rhyme-zone/>|SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	</se></p><p_class="date"><noindex>Шанхай, 1949</noindex></p>

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 expl	color:blue
1	Нечего	нечего	VERB	_	Case=Gen|Polarity=Neg	0	root	_	before=<se><line_meter="Дк5м 0*2*2*0*2*0"/>
2	и	и	PART	_	_	3	advmod	_	_
3	вспоминать	вспоминать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	1	csubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	надо	надо	VERB	_	_	1	conj	_	_
6	стрелять	стрелять	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	5	csubj	_	before=<rhyme-zone/>|SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	--	--	PUNCT	_	_	10	punct	_	<br/>
9	Это	это	PART	_	_	10	expl	_	before=<line_meter="Дк3м 0*2*1*0"/>
10	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	conj	_	_
11	--	--	PUNCT	_	_	13	punct	_	_
12	просто	просто	PART	_	_	13	advmod	_	_
13	так	так	ADV	_	Degree=Pos|PronType=Dem	10	orphan	_	before=<rhyme-zone/>|SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	</se><br/>

~~~


