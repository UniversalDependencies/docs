---
layout: base
title:  'Statistics of csubj in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ru_poetry-dep-csubj-pass.html">csubj:pass</a></tt>.

154 nodes (0%) are attached to their parents as `csubj`.

122 instances of `csubj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.62987012987013.

The following 13 pairs of parts of speech are connected with `csubj`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (79; 51% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (53; 34% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	слезы	слеза	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	obj	_	before=<se>
2	прочь	прочь	ADV	_	Degree=Pos	0	root	_	_
3	--	--	PUNCT	_	_	4	punct	_	_
4	надо	надо	VERB	_	_	2	parataxis	_	_
5	жить	жить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	csubj	_	before=<rhyme-zone/>|SpaceAfter=No
6	:	:	PUNCT	_	_	8	punct	_	<br/>
7	С	с	ADP	_	_	8	case	_	before=<line_meter="Ан3ж"/>
8	нами	мы	PRON	_	Case=Ins|Number=Plur|Person=1|PronType=Prs	4	parataxis	_	_
9	молодость	молодость	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	вера	вера	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	conj	_	_
12	и	и	CCONJ	_	_	13	cc	_	_
13	сила	сила	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	conj	_	before=<rhyme-zone/>|SpaceAfter=No
14	!	!	PUNCT	_	_	2	punct	_	</se></p><p_class="date"><noindex>Вторая половина 1863</noindex></p>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 csubj	color:blue
1	Просмотреть	просмотреть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	6	csubj	_	before=<p_class="verse"><line_meter="Х4ж"/><se>
2	такую	такой	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	скуку	скука	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	obj	_	before=<rhyme-zone/>
4	--	--	PUNCT	_	_	6	punct	_	<br/>
5	Не	не	PART	_	Polarity=Neg	6	advmod	_	before=<line_meter="Х4м"/>
6	последняя	последний	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
7	из	из	ADP	_	_	8	case	_	_
8	мук	мука	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	6	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
9	...	...	PUNCT	_	_	6	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	храпеть	храпеть	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	3	csubj	_	before=<se>
2	не	не	PART	_	Polarity=Neg	3	advmod	_	_
3	дело	дело	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	before=<rhyme-zone/>|after=<br/>
4	Над	над	ADP	_	_	5	case	_	before=<line_meter="Х4м"/>
5	бумагой	бумага	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	obl	_	_
6	со	со	ADP	_	_	7	case	_	_
7	свечой	свеча	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	obl	_	before=<rhyme-zone/>|SpaceAfter=No
8	:	:	PUNCT	_	_	11	punct	_	<br/>
9	Долго	долго	ADV	_	Degree=Pos	11	advmod	_	before=<line_meter="Х4ж"/>
10	ль	ль	PART	_	_	9	advmod	_	_
11	вспыхнуть	вспыхнуть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	3	parataxis	_	SpaceAfter=No
12	?	?	PUNCT	_	_	3	punct	_	</se>

~~~


