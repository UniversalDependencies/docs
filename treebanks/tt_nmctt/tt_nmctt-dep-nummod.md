---
layout: base
title:  'Statistics of nummod in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `nummod`

This relation is universal.

14 nodes (1%) are attached to their parents as `nummod`.

14 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71428571428571.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt> (9; 64% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt> (3; 21% instances), <tt><a href="tt_nmctt-pos-SYM.html">SYM</a></tt>-<tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt> (2; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nummod	color:blue
1	Җилнең	җил	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	LangID=TT
2	көче	көч	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	8	nsubj	_	LangID=TT
3	секундына	секунд	NOUN	_	Case=Dat|Number=Sing|Person[psor]=3	7	nmod	_	CSPoint=секунд§ына|LangID=MIXED[RU§TT]
4	15	15	NUM	_	_	7	nummod	_	LangID=TT
5	-	-	PUNCT	_	_	4	punct	_	LangID=OTHER
6	20	20	NUM	_	_	4	flat	_	LangID=TT
7	метр	метр	NOUN	_	Case=Nom|Number=Sing	8	xcomp	_	LangID=RU
8	булыр	бул	VERB	_	Mood=Irr|Tense=Fut|VerbForm=Part	10	advcl	_	LangID=TT
9	дип	ди	VERB	_	VerbForm=Conv	8	mark	_	LangID=TT
10	фаразлана	фаразла	VERB	_	Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LangID=TT|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Әлегә	әле	ADV	_	_	11	advmod	_	LangID=TT
2	билгесез	билгесез	ADJ	_	_	3	amod	_	LangID=TT
3	кеше	кеше	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	LangID=TT
4	27	27	NUM	_	NumType=Card	5	nummod	_	LangID=TT
5	яшьлек	яшьлек	ADJ	_	_	6	amod	_	LangID=TT
6	ир-атны	ир-ат	NOUN	_	Case=Acc|Number=Sing	11	obj	_	LangID=TT
7	Skoda	Skoda	NOUN	_	Case=Nom|Foreign=Yes|Number=Sing	8	nmod	_	LangID=OTHER
8	автомобиле	автомобиль	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	9	nmod	_	CSPoint=автомобил§е|LangID=MIXED[RU§TT]
9	тәгәрмәче	тәгәрмәч	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	10	nmod	_	LangID=TT
10	астына	ас	NOUN	_	Case=Dat|Number=Sing|Person[psor]=3	11	obl	_	LangID=TT
11	эткән	эт	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	LangID=TT|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Быел	быел	ADV	_	_	3	advmod	_	LangID=TT
2	Хаҗга	хаҗ	NOUN	_	Case=Dat|Number=Sing	3	obl	_	LangID=TT
3	бару	бар	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	10	obl	_	LangID=TT
4	өчен	өчен	ADP	_	_	3	case	_	LangID=TT
5	алдан	ал	NOUN	_	Case=Abl|Number=Sing	6	obl	_	LangID=TT
6	түләү	түлә	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	10	nsubj	_	LangID=TT
7	2500	2500	NUM	_	NumType=Card	8	nummod	_	LangID=TT
8	$	$	SYM	_	_	10	obj	_	LangID=OTHER
9	тәшкил	тәшкил	NOUN	_	Case=Nom|Number=Sing	10	compound:lvc	_	LangID=TT
10	итә	ит	VERB	_	Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


