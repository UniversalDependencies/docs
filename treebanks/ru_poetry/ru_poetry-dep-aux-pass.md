---
layout: base
title:  'Statistics of aux:pass in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-aux.html">aux</a></tt>.

23 nodes (0%) are attached to their parents as `aux:pass`.

21 instances of `aux:pass` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8695652173913.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (22; 96% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Но	но	CCONJ	_	_	8	cc	_	before=<se><line_meter="Х4ж"/>
2	почто	почто	ADV	_	Degree=Pos|PronType=Int	8	advmod	_	_
3	по	по	ADP	_	_	4	case	_	_
4	воле	воля	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	7	obl	_	_
5	рока	рок	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	before=<rhyme-zone/>|after=<br/>
6	Быть	быть	AUX	_	VerbForm=Inf|Voice=Act	7	aux:pass	_	before=<line_meter="Х4м"/>
7	отпущены	отпустить	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	8	xcomp	_	_
8	должны	должен	ADJ	_	Degree=Pos|Number=Plur|Variant=Short	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
9	?	?	PUNCT	_	_	8	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 aux:pass	color:blue
1	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	before=<p_class="verse"><line_meter="Я4ж"/><se>
2	видел	видеть	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	как	как	SCONJ	_	_	11	mark	_	_
5	посланник	посланник	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
6	рая	рай	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	before=<rhyme-zone/>|after=<br/>
7	Две	два	NUM	_	Animacy=Inan|Case=Acc|Gender=Fem|NumForm=Word|NumType=Card	8	nummod:gov	_	before=<line_meter="Я4м"/>
8	души	душа	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	11	obj	_	_
9	в	в	ADP	_	_	10	case	_	_
10	небо	небо	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	11	obl	_	_
11	уносил	уносить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	before=<rhyme-zone/>|SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	<br/>
13	И	и	CCONJ	_	_	15	cc	_	before=<line_meter="Я4ж"/>
14	та	тот	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	15	nsubj	_	_
15	прекрасна	прекрасный	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	11	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	и	и	CCONJ	_	_	18	cc	_	_
18	другая	другой	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	15	conj	_	before=<rhyme-zone/>|SpaceAfter=No
19	,	,	PUNCT	_	_	23	punct	_	<br/>
20	Но	но	CCONJ	_	_	23	cc	_	before=<line_meter="Я4м"/>
21	образ	образ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	23	nsubj:pass	_	_
22	их	их	DET	_	Poss=Yes|PronType=Prs	21	det	_	_
23	различен	различный	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	2	conj	_	_
24	был	быть	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	23	aux:pass	_	before=<rhyme-zone/>|SpaceAfter=No
25	:	:	PUNCT	_	_	2	punct	_	</se></p>

~~~


