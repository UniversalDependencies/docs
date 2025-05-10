---
layout: base
title:  'Statistics of amod in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `amod`

This relation is universal.

7452 nodes (9%) are attached to their parents as `amod`.

7092 instances of `amod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20437466451959.

The following 19 pairs of parts of speech are connected with `amod`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (7292; 98% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (80; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (14; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (11; 0% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-PART.html">PART</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Двосторонній	двосторонній	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
2	товарообіг	товарообіг	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	більше	більше	ADV	ADV	Degree=Cmp	4	advmod	_	_
4	8,5	8,5	NUM	NUM	Case=Gen|NumType=Card	5	nummod	_	_
5	мільярда	мільярд	NOUN	NUM	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Card	6	nummod:gov	_	_
6	доларів	долар	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	Так	так	ADV	ADV	PronType=Dem	2	advmod	_	_
2	звані	званий	ADJ	ADJ	Aspect=Imp|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	4	amod	_	_
3	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
4	ДНР	ДНР	PROPN	NOUN	Abbr=Yes|Animacy=Inan|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Geo|Number=Sing	13	nsubj	_	SpaceAfter=No
5	"	"	PUNCT	PUNCT	_	4	punct	_	_
6	і	і	CCONJ	CCONJ	_	8	cc	_	_
7	"	"	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
8	ЛНР	ЛНР	PROPN	PROPN	Abbr=Yes|Animacy=Inan|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Geo|Number=Sing	4	conj	_	SpaceAfter=No
9	"	"	PUNCT	PUNCT	_	8	punct	_	_
10	не	не	PART	PART	Polarity=Neg	13	advmod:neg	_	_
11	є	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	терористичними	терористичний	ADJ	ADJ	Case=Ins|Number=Plur	13	amod	_	_
13	організаціями	організація	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
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


