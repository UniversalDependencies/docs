---
layout: base
title:  'Statistics of amod in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `amod`

This relation is universal.

4705 nodes (7%) are attached to their parents as `amod`.

3654 instances of `amod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21317747077577.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (4281; 91% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (319; 7% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (60; 1% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (25; 1% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 amod	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Горящим	гореть	VERB	_	Aspect=Imp|Case=Ins|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	before=<p_class="verse"><line_meter="Я4ж"/><se>
2	лезвием	лезвие	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	5	iobj	_	_
3	зарницы	зарница	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	before=<rhyme-zone/>|after=<br/>
4	восток	восток	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	before=<line_meter="Я4ж"/>
5	поджег	поджечь	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	крыло	крыло	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	obj	_	_
7	вороны	ворона	NOUN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	before=<rhyme-zone/>|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	И	и	CCONJ	_	_	7	cc	_	before=<se><line_meter="Я6м"/>
2	Первый	первый	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	3	amod	_	_
3	Александр	Александр	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	7	nsubj	_	_
4	будь	быть	AUX	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	7	cop	_	_
5	Первым	первый	ADJ	_	Case=Ins|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	7	amod	_	_
6	ей	она	PRON	_	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	iobj	_	_
7	Петром	Петр	PROPN	_	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
8	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	</se></p><p_class="date"><noindex>20 марта 1801<br/>Казань</noindex></p>

~~~


