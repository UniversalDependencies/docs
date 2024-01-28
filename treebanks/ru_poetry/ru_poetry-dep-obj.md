---
layout: base
title:  'Statistics of obj in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `obj`

This relation is universal.

2349 nodes (4%) are attached to their parents as `obj`.

1400 instances of `obj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.11068539804172.

The following 16 pairs of parts of speech are connected with `obj`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1811; 77% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (415; 18% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (36; 2% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt> (26; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (25; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (11; 0% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	В	в	ADP	_	_	3	case	_	before=<se><line_meter="Ан3м 2*2*2*0"/>
2	первый	первый	ADJ	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	3	amod	_	_
3	раз	раз	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obl	_	_
4	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
5	такое	такой	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obj	_	_
6	постиг	постигнуть	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	<br/>
8	Что	что	SCONJ	_	_	9	mark	_	before=<line_meter="Ан3м 2*2*2*0"/>
9	боятся	бояться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	5	ccomp	_	_
10	промолвить	промолвить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	9	xcomp	_	_
11	уста	уста	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	9	nsubj	_	before=<rhyme-zone/>|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	</se></p>

~~~


