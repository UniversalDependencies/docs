---
layout: base
title:  'Statistics of nummod in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="uk_parlamint-dep-nummod-gov.html">nummod:gov</a></tt>.

211 nodes (0%) are attached to their parents as `nummod`.

143 instances of `nummod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6303317535545.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (188; 89% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (16; 8% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Двосторонній	двосторонній	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
2	товарообіг	товарообіг	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	більше	більше	ADV	ADV	Degree=Cmp	4	advmod	_	_
4	8,5	8,5	NUM	NUM	Case=Gen|NumType=Card	5	nummod	_	_
5	мільярда	мільярд	NOUN	NUM	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Card	6	nummod:gov	_	_
6	доларів	долар	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Оце	оце	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	expl	_	_
2	питання	питання	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	номер	номер	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nummod	_	_
4	один	один	NUM	NUM	Case=Nom|Gender=Masc|NumType=Card	3	nummod	_	SpaceAfter=No
5	!	!	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nummod	color:blue
1	Але	але	CCONJ	CCONJ	_	3	cc	_	_
2	не	не	PART	PART	Polarity=Neg	3	advmod:neg	_	_
3	можу	могти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	не	не	PART	PART	Polarity=Neg	5	advmod:neg	_	_
5	відповісти	відповісти	VERB	VERB	Aspect=Perf|VerbForm=Inf	3	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	10	punct	_	_
7	два	два	NUM	NUM	Case=Nom|Gender=Masc|NumType=Card	9	nummod	_	_
8	попередні	попередній	ADJ	ADJ	Case=Nom|Number=Plur	9	amod	_	_
9	виступаючі	виступаючий	ADJ	ADJ	Animacy=Inan|Aspect=Imp|BadStyle=Yes|Case=Nom|Number=Plur|VerbForm=Part|Voice=Act	10	nsubj	_	_
10	задали	задати	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	3	parataxis	_	_
11	дуже	дуже	ADV	ADV	Degree=Pos	12	advmod	_	_
12	хороший	хороший	ADJ	ADJ	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	тон	тон	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obj	_	_
14	дискусії	дискусія	NOUN	NOUN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


