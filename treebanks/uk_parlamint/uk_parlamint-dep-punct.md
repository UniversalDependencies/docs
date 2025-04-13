---
layout: base
title:  'Statistics of punct in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `punct`

This relation is universal.

9426 nodes (18%) are attached to their parents as `punct`.

4884 instances of `punct` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.67568427753024.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (4648; 49% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (2474; 26% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (635; 7% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (607; 6% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (545; 6% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (179; 2% instances), <tt><a href="uk_parlamint-pos-PART.html">PART</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (118; 1% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (105; 1% instances), <tt><a href="uk_parlamint-pos-X.html">X</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (29; 0% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (27; 0% instances), <tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (21; 0% instances), <tt><a href="uk_parlamint-pos-ADP.html">ADP</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (20; 0% instances), <tt><a href="uk_parlamint-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances), <tt><a href="uk_parlamint-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="uk_parlamint-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uk_parlamint-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Дякую	дякувати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	за	за	ADP	ADP	Case=Acc	3	case	_	_
3	увагу	увага	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
1	Двосторонній	двосторонній	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
2	товарообіг	товарообіг	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	більше	більше	ADV	ADV	Degree=Cmp	4	advmod	_	_
4	8,5	8,5	NUM	NUM	Case=Gen|NumType=Card	5	nummod	_	_
5	мільярда	мільярд	NOUN	NUM	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Card	6	nummod:gov	_	_
6	доларів	долар	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 punct	color:blue
1	У	у	ADP	ADP	Case=Gen	2	case	_	_
2	нас	ми	PRON	PRON	Animacy=Anim|Case=Gen|Number=Plur|Person=1|PronType=Prs	4	obl	_	_
3	надзвичайно	надзвичайно	ADV	ADV	_	4	advmod	_	_
4	великі	великий	ADJ	ADJ	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
5	економічні	економічний	ADJ	ADJ	Case=Nom|Number=Plur	10	amod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	_	_
7	політичні	політичний	ADJ	ADJ	Case=Nom|Number=Plur	5	conj	_	_
8	і	і	CCONJ	CCONJ	_	9	cc	_	_
9	інші	інший	DET	DET	Case=Nom|Number=Plur|PronType=Ind	5	conj	_	_
10	зв'язки	зв'язок	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


