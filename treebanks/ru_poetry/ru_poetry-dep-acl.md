---
layout: base
title:  'Statistics of acl in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ru_poetry-dep-acl-relcl.html">acl:relcl</a></tt>.

437 nodes (1%) are attached to their parents as `acl`.

306 instances of `acl` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28146453089245.

The following 16 pairs of parts of speech are connected with `acl`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (292; 67% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (48; 11% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (46; 11% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (17; 4% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Запутал	запутать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	before=<se><line_meter="Я4ж"/>
2	ноги	нога	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	1	obj	_	_
3	пешеходу	пешеход	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	1	iobj	_	before=<rhyme-zone/>|after=<br/>
4	туман	туман	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	before=<line_meter="Я4м"/>|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	нависший	нависнуть	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	acl	_	_
7	над	над	ADP	_	_	8	case	_	_
8	травой	трава	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	6	obl	_	before=<rhyme-zone/>|SpaceAfter=No
9	...	...	PUNCT	_	_	1	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	Но	но	CCONJ	_	_	9	cc	_	before=<se><line_meter="Ан3ж"/>
2	рука	рука	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	перед	перед	ADP	_	_	5	case	_	_
5	тем	то	PRON	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	9	obl	_	_
6	как	как	SCONJ	_	_	7	mark	_	_
7	погладить	погладить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	5	acl	_	before=<rhyme-zone/>|SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	<br/>
9	Задрожит	задрожать	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	before=<line_meter="Ан3м"/>|SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	не	не	PART	_	Polarity=Neg	12	advmod	_	_
12	узнает	узнавать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	_
13	меня	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	12	obj	_	before=<rhyme-zone/>|SpaceAfter=No
14	.	.	PUNCT	_	_	9	punct	_	</se></p><p_class="date"><noindex>1967</noindex></p>

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 acl	color:blue
1	И	и	CCONJ	_	_	2	cc	_	before=<se><line_meter="Я4ж"/>
2	близость	близость	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	чьих-то	чей-то	DET	_	Case=Gen|Number=Plur|Poss=Yes|PronType=Ind	10	det	_	_
4	длинных	длинный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	10	acl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	длинных	длинный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	4	conj	_	before=<rhyme-zone/>|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	<br/>
8	Красиво	красиво	ADV	_	Degree=Pos	9	advmod	_	before=<line_meter="Я4м"/>
9	загнутых	загнуть	VERB	_	Aspect=Perf|Case=Gen|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	4	conj	_	_
10	ресниц	ресница	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	</se></p><p_class="date"><noindex>1905</noindex></p>

~~~


