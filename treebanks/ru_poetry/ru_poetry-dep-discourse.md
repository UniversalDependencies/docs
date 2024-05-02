---
layout: base
title:  'Statistics of discourse in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `discourse`

This relation is universal.

165 nodes (0%) are attached to their parents as `discourse`.

161 instances of `discourse` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44242424242424.

The following 14 pairs of parts of speech are connected with `discourse`: <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt> (62; 38% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt> (54; 33% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PART.html">PART</a></tt> (17; 10% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt> (9; 5% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt> (4; 2% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt> (3; 2% instances), <tt><a href="ru_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt> (3; 2% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-PART.html">PART</a></tt>-<tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-PART.html">PART</a></tt>-<tt><a href="ru_poetry-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 discourse	color:blue
1	--	--	PUNCT	_	_	13	punct	_	before=<se><line_meter="Я6ж"/>
2	«	«	PUNCT	_	_	13	punct	_	SpaceAfter=No
3	Эх	эх	INTJ	_	_	13	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	--	--	PUNCT	_	_	6	punct	_	_
6	закричал	закричать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	13	parataxis	_	_
7	старик	старик	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	в	в	ADP	_	_	9	case	_	_
9	сердцах	сердце	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Plur	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	--	--	PUNCT	_	_	13	punct	_	_
12	какое	какой	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	13	det	_	_
13	детство	детство	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	before=<rhyme-zone/>|SpaceAfter=No
14	!	!	PUNCT	_	_	13	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 discourse	color:blue
1	Но	но	CCONJ	_	_	11	cc	_	before=<se><line_meter="Я6ж"/>|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	ах	ах	INTJ	_	_	11	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	о	о	ADP	_	_	6	case	_	_
6	чем	что	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Rel	11	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	о	о	ADP	_	_	9	case	_	_
9	чем	что	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Rel	6	conj	_	_
10	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	мышлю	мыслить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	дерзновенный	дерзновенный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	vocative	_	before=<rhyme-zone/>|SpaceAfter=No
14	!	!	PUNCT	_	_	11	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	ишь	ишь	PART	_	_	4	discourse	_	before=<se><line_meter="Х5м"/>|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	как	как	ADV	_	Degree=Pos|PronType=Exc	4	advmod	_	_
4	изучила	изучить	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	лисью	лисий	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	рысь	рысь	NOUN	_	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	before=<rhyme-zone/>|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	</se><br/>

~~~


