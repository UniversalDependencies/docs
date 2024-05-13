---
layout: base
title:  'Statistics of compound in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="tt_nmctt-dep-compound-lvc.html">compound:lvc</a></tt>.

28 nodes (1%) are attached to their parents as `compound`.

16 instances of `compound` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28571428571429.

The following 7 pairs of parts of speech are connected with `compound`: <tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt>-<tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt> (12; 43% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (6; 21% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (5; 18% instances), <tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-SYM.html">SYM</a></tt> (1; 4% instances), <tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Без	без	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nmod	_	LangID=TT
2	проект	проект	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	LangID=RU
3	якынча	якынча	ADV	_	_	5	advmod	_	LangID=TT
4	2	2	NUM	_	NumType=Card	5	compound	_	LangID=TT
5	миллиард	миллиард	NUM	_	NumType=Card	6	nummod	_	LangID=RU
6	сум	сум	NOUN	_	Case=Nom|Number=Sing	8	obj	_	LangID=TT
7	тәшкил	тәшкил	NOUN	_	Case=Nom|Number=Sing	8	compound:lvc	_	LangID=TT
8	итә	итә	VERB	_	Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	Чистай	Чистай	PROPN	_	Case=Nom|Number=Sing	5	nmod	_	LangID=TT
2	-	-	PUNCT	_	_	3	punct	_	LangID=OTHER
3	Түбән	түбән	ADJ	_	_	1	conj	_	LangID=TT
4	Кама	Кама	PROPN	_	Case=Nom|Number=Sing	3	compound	_	LangID=RU
5	автоюлының	автоюл	NOUN	Case=Gen|Number=Sing|Person[psor]=3	_	9	nmod	_	CSPoint=авто§юлының|LangID=MIXED[RU§TT]
6	Ширәмәт	Ширәмәт	PROPN	_	Case=Nom|Number=Sing	7	nmod	_	LangID=TT
7	авылы	авыл	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	8	nmod	_	LangID=TT
8	янындагы	ян	NOUN	_	Case=Loc|Number=Sing|Person[psor]=3	9	amod	_	LangID=TT
9	өлешен	өлеш	NOUN	_	Case=Acc|Number=Sing|Person[psor]=3	13	obj	_	LangID=TT
10	120	120	NUM	_	NumType=Card	11	compound	_	LangID=TT
11	миллион	миллион	NUM	_	NumType=Card	12	nummod	_	LangID=RU
12	сумга	сум	NOUN	_	Case=Dat|Number=Sing	13	obl	_	LangID=TT
13	ремонтлау	ремонтла	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	14	nsubj	_	CSPoint=ремонт§лау|LangID=MIXED[RU§TT]
14	планлаштырылган	планлаштыр	VERB	_	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	CSPoint=план§лаштырылган|LangID=MIXED[RU§TT]|SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound	color:blue
1	Кичәне	кичә	NOUN	_	Case=Acc|Number=Sing	9	obj	_	LangID=TT
2	«	«	PUNCT	_	_	3	punct	_	LangID=OTHER|SpaceAfter=No
3	Татар	татар	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	LangID=TT|SpaceAfter=No
4	-	-	PUNCT	_	_	5	punct	_	LangID=OTHER|SpaceAfter=No
5	информ	информ	NOUN	_	Case=Nom|Number=Sing	3	compound	_	LangID=RU|SpaceAfter=No
6	»	»	PUNCT	_	_	3	punct	_	LangID=OTHER
7	агентлыгы	агентлык	NOUN	Case=Nom|Number=Sing|Person[psor]=3	_	9	nsubj	_	CSPoint=агент§лыгы|LangID=MIXED
8	онлайн	онлайн	ADV	_	_	9	advmod	_	LangID=RU
9	күрсәтә	күрсәт	VERB	_	Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


