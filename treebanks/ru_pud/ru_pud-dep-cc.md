---
layout: base
title:  'Statistics of cc in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `cc`

This relation is universal.

599 nodes (3%) are attached to their parents as `cc`.

599 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2754590984975.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (225; 38% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (210; 35% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (67; 11% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (58; 10% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (9; 2% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	То	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	5	punct	_	_
3	что	что	SCONJ	IN	_	5	obj	_	_
4	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	что	что	SCONJ	IN	_	9	obj	_	_
8	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	_
11	на	на	ADP	IN	_	13	case	_	_
12	самом	самый	ADJ	JJ	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	деле	дело	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	14	obl	_	_
14	невероятно	невероятный	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Эта	этот	DET	DT	Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	структура	структура	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	деньги	деньги	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	3	obj	_	_
5	за	за	ADP	IN	_	7	case	_	_
6	счет	счет	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	fixed	_	_
7	спонсорства	спонсорство	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	obl	_	_
8	и	и	CCONJ	CC	_	9	cc	_	_
9	рекламы	реклама	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	«	«	PUNCT	``	_	3	punct	_	SpaceAfter=No
2	Мне	я	PRON	PRP	Case=Dat|Number=Sing|Person=1	3	iobj	_	_
3	нравились	нравиться	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
4	горячие	горячий	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
5	и	и	CCONJ	CC	_	6	cc	_	_
6	страстные	страстный	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	4	conj	_	_
7	цвета	цвет	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	SpaceAfter=No
8	»	»	PUNCT	'	_	3	punct	_	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	_	_
10	—	—	PUNCT	-	_	11	punct	_	_
11	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
12	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


