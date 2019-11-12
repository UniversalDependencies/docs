---
layout: base
title:  'Statistics of nummod in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="be_hse-dep-nummod-entity.html">nummod:entity</a></tt>, <tt><a href="be_hse-dep-nummod-gov.html">nummod:gov</a></tt>.

39 nodes (0%) are attached to their parents as `nummod`.

38 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38461538461538.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (32; 82% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (5; 13% instances), <tt><a href="be_hse-pos-SYM.html">SYM</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (2; 5% instances).


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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nummod	color:blue
1	Па	па	ADP	IN	_	2	case	_	_
2	паведамленні	паведамленне	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	10	obl	_	_
3	УКДБ	УКДБ	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	у	у	ADP	IN	_	6	case	_	_
6	асноўным	асноўнае	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	10	obl	_	_
7	у	у	ADP	IN	_	8	case	_	_
8	галіне	галіна	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	_	_
9	ўкладчыкі	ўкладчык	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	_
10	ўносілі	ўносіць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	ў	ў	ADP	IN	_	12	case	_	_
12	набыццё	набыццё	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	10	obl	_	_
13	акцый	акцыя	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	12	nmod	_	_
14	сумы	сума	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	10	obj	_	_
15	да	да	ADP	IN	_	18	case	_	_
16	10	10	NUM	CD	Case=Gen|NumType=Card	17	compound	_	_
17	тыс.	тыс.	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	18	nummod	_	_
18	даляраў	даляр	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	10	punct	_	_

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
15	°С	°с	SYM	SYM	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	12	obj	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


