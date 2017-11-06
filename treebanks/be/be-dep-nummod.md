---
layout: base
title:  'Statistics of nummod in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="be-dep-nummod-gov.html">nummod:gov</a></tt>.

45 nodes (1%) are attached to their parents as `nummod`.

43 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31111111111111.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-NUM.html">NUM</a></tt> (32; 71% instances), <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (9; 20% instances), <tt><a href="be-pos-X.html">X</a></tt>-<tt><a href="be-pos-NUM.html">NUM</a></tt> (3; 7% instances), <tt><a href="be-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
2	Мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
3	часта	часта	ADV	RB	Degree=Pos	4	advmod	_	_
4	рухаемся	рухацца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	дзесьці	дзесьці	ADV	RB	Degree=Pos	9	advmod	_	_
6	паміж	паміж	ADP	IN	_	9	case	_	_
7	гэтымі	гэты	DET	DT	Case=Ins|Number=Plur|PronType=Dem	9	det	_	_
8	двума	два	NUM	CD	Case=Ins|Gender=Masc|NumType=Card	9	nummod	_	_
9	падыходамі	падыход	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Пры	пры	ADP	IN	_	2	case	_	_
2	гэтым	гэта	PRON	DT	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	3	obl	_	_
3	характэрны	характэрны	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
4	рост	рост	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
5	рублёвых	рублёвы	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	6	amod	_	_
6	укладаў	уклад	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	_
7	(	(	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
8	на	на	ADP	IN	_	11	case	_	_
9	2,5	2,5	NUM	CD	NumType=Card	10	compound	_	_
10	трлн	трлн	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	11	nummod	_	_
11	рублёў	рубель	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	parataxis	_	_
12	за	за	ADP	IN	_	14	case	_	_
13	два	два	NUM	CD	Animacy=Inan|Case=Acc|Gender=Masc|NumType=Card	14	nummod:gov	_	_
14	месяцы	месяц	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	parataxis	_	SpaceAfter=No
15	)	)	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	Самы	самы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
2	цёплы	цёплы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	красавіка	красавік	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	SpellErr=Yes
4	выдаўся	выдацца	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
5	ў	ў	ADP	IN	_	7	case	_	_
6	2000	2000	ADJ	ORD	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	годзе	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	калі	калі	SCONJ	IN	_	12	mark	_	_
10	сярэдняя	сярэдні	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
11	тэмпература	тэмпература	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	_
12	склала	скласцi	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	advcl	_	_
13	каля	каля	ADP	IN	_	15	case	_	_
14	11	11	NUM	CD	Case=Gen|NumType=Card	15	nummod	_	SpaceAfter=No
15	°С	°с	X	X	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	12	obj	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


