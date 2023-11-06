---
layout: base
title:  'Statistics of advmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod`

This relation is universal.
There are 9 language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-cmp.html">advmod:cmp</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

92 nodes (2%) are attached to their parents as `advmod`.

75 instances of `advmod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78260869565217.

The following 11 pairs of parts of speech are connected with `advmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (58; 63% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (15; 16% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (4; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (4; 4% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod	color:blue
1	Очконясь	очка	NOUN	N	Case=Nom|Definite=Def|Degree=Dim|Number=Sing	2	nsubj	_	_
2	велясь	велямс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	_
3	пильгозень	пильге	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	obl:lmod	_	_
4	лангс	ланга	ADP	Adp	Case=Ill	3	case	_	_
5	и	и	CCONJ	CC	_	8	cc	_	_
6	цють	цють	ADV	Adv	_	8	advmod	_	_
7	ашезе	аш	AUX	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Polarity=Neg|Tense=Past|VerbForm=Fin	8	aux:neg	_	_
8	синде	синдемс	VERB	V	Connegative=Yes	2	conj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advmod	color:blue
1	Рамаль	рамамс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3	0	root	_	_
2	хуш	хуш	ADV	Adv	_	5	advmod	_	_
3	тядязень	тядя	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nmod	_	_
4	муськома	муськомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|VerbForm=Vnoun	5	nmod	_	_
5	очконц	очка	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obj	_	_
6	эшка	эшка	ADP	Adp	AdpType=Post|Case=Cmp	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod	color:blue
1	Сясы	сяс	SCONJ	CS	Clitic=I	5	mark	_	_
2	синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
3	сембе	сембе	ADV	Adv	_	2	advmod	_	_
4	и	и	CCONJ	CC	_	5	cc:preconj	_	_
5	лётчикт	лётчик	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	космонавтт	космонавт	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


