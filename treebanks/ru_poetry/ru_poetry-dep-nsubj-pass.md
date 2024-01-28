---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ru_poetry-dep-nsubj-outer.html">nsubj:outer</a></tt>.

180 nodes (0%) are attached to their parents as `nsubj:pass`.

121 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18888888888889.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (121; 67% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (49; 27% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Дар	дар	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	dislocated	_	before=<p_class="verse"><line_meter="Х4ж"/><se>
2	прекрасный	прекрасный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	дар	дар	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	conj	_	_
5	широкий	широкий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	before=<rhyme-zone/>
6	--	--	PUNCT	_	_	1	punct	_	<br/>
7	Крепостные	крепостной	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	9	nsubj:pass	_	before=<line_meter="Х4м"/>
8	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	9	iobj	_	_
9	даны	дать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
10	!	!	PUNCT	_	_	9	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Все	всё	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	2	nsubj:pass	_	before=<se><line_meter="Дк3ж 2*2*1*1"/>
2	поругано	поругать	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	и	и	CCONJ	_	_	4	cc	_	_
4	пропало	пропасть	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	before=<rhyme-zone/>|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	<br/>
6	Разумеется	разуметься	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	10	parataxis:discourse	_	before=<line_meter="Дк3м 2*2*1*0"/>|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	ни	ни	PART	_	Polarity=Neg	10	advmod	_	_
9	за	за	ADP	_	_	10	case	_	_
10	грош	грош	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	before=<rhyme-zone/>|SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nsubj:pass	color:blue
1	Рос	расти	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	before=<p_class="verse"><line_meter="Я4м"/><se>
2	на	на	ADP	_	_	3	case	_	_
3	опушке	опушка	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	1	obl	_	_
4	рощи	роща	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
5	клен	клен	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
6	,	,	PUNCT	_	_	12	punct	_	<br/>
7	В	в	ADP	_	_	8	case	_	before=<line_meter="Я4м"/>
8	березку	березка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	12	obl	_	_
9	был	быть	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	_	_
10	тот	тот	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
11	клен	клен	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	12	nsubj:pass	_	_
12	влюблен	влюбленный	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	1	conj	_	before=<rhyme-zone/>|SpaceAfter=No
13	.	.	PUNCT	_	_	1	punct	_	</se><br/>

~~~


