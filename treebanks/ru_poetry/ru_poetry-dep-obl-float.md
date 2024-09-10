---
layout: base
title:  'Statistics of obl:float in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_poetry-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_poetry-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_poetry-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_poetry-dep-obl-tmod.html">obl:tmod</a></tt>.

51 nodes (0%) are attached to their parents as `obl:float`.

38 instances of `obl:float` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07843137254902.

The following 7 pairs of parts of speech are connected with `obl:float`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (33; 65% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (11; 22% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (3; 6% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obl:float	color:blue
1	Да	да	CCONJ	_	_	4	cc	_	before=<se>
2	ведь	ведь	PART	_	_	4	advmod	_	_
3	не	не	PART	_	Polarity=Neg	4	advmod	_	_
4	могу	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	же	же	PART	_	_	4	advmod	_	_
6	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
7	жить	жить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	xcomp	_	_
8	--	--	PUNCT	_	_	9	punct	_	_
9	поймите	понять	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	4	parataxis	_	_
10	сами	сам	DET	_	Case=Nom|Number=Plur|PronType=Emp	9	obl:float	_	before=<rhyme-zone/>|SpaceAfter=No
11	!	!	PUNCT	_	_	4	punct	_	</se>

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:float	color:blue
1	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	before=<p_class="verse"><line_meter="Я4м"/><se>
2	сам	сам	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	3	obl:float	_	_
3	киргиз	киргиз	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	</se>

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 obl:float	color:blue
1	Так	так	ADV	_	Degree=Pos|PronType=Dem	7	advmod	_	before=<se><line_meter="Я6м"/>
2	мышеловкою	мышеловка	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	7	obl	_	_
3	захлопнутая	захлопнуть	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	amod	_	_
4	мышь	мышь	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	before=<rhyme-zone/>|after=<br/>
5	В	в	ADP	_	_	6	case	_	before=<line_meter="Я6ж"/>
6	ней	она	PRON	_	Case=Loc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obl	_	_
7	бьется	биться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
8	до	до	ADP	_	_	9	case	_	_
9	утра	утро	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	вся	весь	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	12	obl:float	_	_
12	мокрая	мокрый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	advcl	_	_
13	от	от	ADP	_	_	14	case	_	_
14	пота	пот	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	obl	_	before=<rhyme-zone/>|SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	</se></p>

~~~


