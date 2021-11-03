---
layout: base
title:  'Statistics of nummod in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `nummod`

This relation is universal.

7 nodes (1%) are attached to their parents as `nummod`.

7 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42857142857143.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt> (5; 71% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Татарстанда	Татарстан	PROPN	_	Case=Loc|Number=Sing	3	obl	_	LangID=TT
2	томан	томан	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	LangID=TT
3	төшәчәк	төш	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Part	0	root	_	LangID=TT|SpaceAfter=No
4	,	,	PUNCT	_	_	12	punct	_	LangID=OTHER
5	күз	күз	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	LangID=TT
6	күреме	күрем	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	11	nsubj	_	LangID=TT
7	500	500	NUM	_	NumType=Card	8	nummod	_	LangID=TT
8	метр	метр	NOUN	_	Case=Nom|Number=Sing	11	xcomp	_	LangID=RU
9	яки	яки	CCONJ	_	_	10	cc	_	LangID=TT
10	кимрәк	ким	ADJ	_	Degree=Cmp	8	conj	_	LangID=TT
11	булырга	бул	VERB	_	VerbForm=Inf	12	advcl	_	LangID=TT
12	мөмкин	мөмкин	ADJ	_	_	3	parataxis	_	LangID=TT|SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	LangID=OTHER

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


