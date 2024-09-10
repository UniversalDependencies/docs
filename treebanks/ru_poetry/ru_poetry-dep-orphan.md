---
layout: base
title:  'Statistics of orphan in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `orphan`

This relation is universal.

70 nodes (0%) are attached to their parents as `orphan`.

43 instances of `orphan` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31428571428571.

The following 11 pairs of parts of speech are connected with `orphan`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (34; 49% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (7; 10% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt> (7; 10% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (7; 10% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 orphan	color:blue
1	Доброго	добрый	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	before=<p_class="verse"><line_meter="Тк4ж 0*3*1*2*1"/><se>
2	начала	начало	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	0	root	_	_
3	Нового	новый	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	года	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	<br/>
5	Синьору	синьор	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	2	orphan	_	before=<line_meter="Я3ж 1*1*1*1"/>
6	и	и	CCONJ	_	_	7	cc	_	_
7	синьоре	синьора	NOUN	_	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No
8	!	!	PUNCT	_	_	2	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 orphan	color:blue
1	Знаешь	знать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis:discourse	_	before=<p_class="verse"><line_meter="Д4ж 0*2*2*2*1"/><se>|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	сейчас	сейчас	ADV	_	Degree=Pos|PronType=Dem	7	orphan	_	_
4	бы	бы	AUX	_	Mood=Cnd	7	aux	_	_
5	в	в	ADP	_	_	7	case	_	_
6	сосновые	сосновый	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	7	amod	_	_
7	боры	бор	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
8	:	:	PUNCT	_	_	11	punct	_	<br/>
9	Хвоя	хвоя	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	before=<line_meter="Д4м 0*2*2*2*0"/>
10	зеленая	зеленый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
11	пахнет	пахнуть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
12	весной	весна	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	11	iobj	_	before=<rhyme-zone/>|SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 orphan	color:blue
1	Любовь	любовь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	vocative	_	before=<p_class="verse"><line_meter="Дк4м 1*2*2*1*0"/><se>|SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	о	о	INTJ	_	_	4	discourse	_	_
4	любовь	любовь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	0	root	_	_
7	опять	опять	ADV	_	Degree=Pos	6	orphan	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	опять	опять	ADV	_	Degree=Pos	7	conj	_	before=<rhyme-zone/>|SpaceAfter=No
10	!	!	PUNCT	_	_	6	punct	_	</se><br/>

~~~


