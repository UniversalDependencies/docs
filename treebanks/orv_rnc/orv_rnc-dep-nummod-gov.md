---
layout: base
title:  'Statistics of nummod:gov in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nummod.html">nummod</a></tt>.

190 nodes (1%) are attached to their parents as `nummod:gov`.

172 instances of `nummod:gov` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50526315789474.

The following 6 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (180; 95% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	а	а	CCONJ	_	_	6	cc	_	_
2	в	въ	ADP	_	_	4	case	_	_
3	тои	тотъ	DET	_	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	грамотки	грамотка	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
5	было	быти	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes	6	aux	_	_
6	послано	послати	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	два	два	NUM	_	Case=Nom|Gender=Masc	8	nummod:gov	_	_
8	списка	списокъ	NOUN	_	Case=Nom|Gender=Masc|Number=Count	6	nsubj:pass	_	_
9	с	съ	ADP	_	_	10	case	_	_
10	челобитнои	челобитная	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
11	и	и	CCONJ	_	_	13	cc	_	_
12	з	съ	ADP	_	_	13	case	_	_
13	ѕаписи	запись	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	conj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod:gov	color:blue
1	Имаши	имѣти	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Norm=Имаши
2	премного	премного	NUM	_	Case=Acc	4	nummod:gov	_	Norm=премного
3	таковыхъ	таковой	DET	_	Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	4	det	_	Norm=таковыхъ
4	домашныхъ	домашний	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	1	obj	_	Norm=домашныхъ
5	своихъ	свой	DET	_	Case=Gen|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	4	det	_	Norm=своихъ|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	Norm=,
7	Россіе	Россия	PROPN	_	Case=Voc|Gender=Fem|Number=Sing	1	vocative	_	Norm=Россіе|SpaceAfter=No
8	:	:	PUNCT	_	_	9	punct	_	Norm=:
9	возри	возрѣти	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	1	parataxis	_	Norm=возри
10	вⸯ	въ	ADP	_	_	12	case	_	Norm=въ
11	своꙗ	свой	DET	_	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	12	det	_	Norm=своꙗ
12	Исторіи	история	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	9	obl	_	Norm=Исторіи|SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	Norm=,
14	и	и	CCONJ	_	_	15	cc	_	Norm=и
15	ꙋвидиши	увидѣти	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	9	conj	_	Norm=ꙋвидиши
16	собстве(н)ное	собственный	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	19	amod	_	Norm=собственное
17	о	о	ADP	_	_	18	case	_	Norm=о
18	тебѣ	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	19	nmod	_	Norm=тебѣ
19	смо(т)реніе	смотрение	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	15	obj	_	Norm=смотреніе
20	Бж҃іе	божий	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	19	amod	_	Norm=Божіе|SpaceAfter=No
21	.	.	PUNCT	_	_	1	punct	_	Norm=.

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 34 nummod:gov	color:blue
1	А	а	CCONJ	_	_	2	cc	_	_
2	привито	привити	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	г.	государь	NOUN	_	Abbr=Yes	2	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	к	къ	ADP	_	_	8	case	_	_
7	тем	тотъ	DET	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Dem	8	det	_	_
8	пенькам	пенекъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	2	obl	_	_
9	московским	московский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	8	amod	_	_
10	150	150	NUM	_	Case=Nom|NumForm=Digit	11	nummod:gov	_	_
11	черенков	черенокъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	2	nsubj:pass	_	SpaceAfter=No
12	;	;	PUNCT	_	_	17	punct	_	_
13	да	да	CCONJ	_	_	17	cc	_	_
14	к	къ	ADP	_	_	16	case	_	_
15	старым	старый	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	16	amod	_	_
16	пенькам	пенекъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	17	obl	_	_
17	привито	привити	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	conj	_	_
18	в	въ	ADP	_	_	19	case	_	_
19	Павловском	Павловское	PROPN	_	Case=Loc|Gender=Neut|Number=Sing	17	obl	_	_
20	и	и	CCONJ	_	_	22	cc	_	_
21	на	на	ADP	_	_	22	case	_	_
22	Силине	Силино	PROPN	_	Case=Loc|Gender=Neut|Number=Sing	19	conj	_	_
23	100	100	NUM	_	Case=Nom|NumForm=Digit	25	compound	_	_
24	же	же	PART	_	_	23	advmod	_	_
25	50	50	NUM	_	Case=Nom|NumForm=Digit	26	nummod:gov	_	_
26	черенков	черенокъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	17	nsubj:pass	_	SpaceAfter=No
27	;	;	PUNCT	_	_	33	punct	_	_
28	и	и	CCONJ	_	_	33	cc	_	_
29	всево	всего	ADV	_	Degree=Pos	33	advmod	_	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	_	_
31	г.	государь	NOUN	_	Abbr=Yes	29	parataxis	_	SpaceAfter=No
32	,	,	PUNCT	_	_	31	punct	_	_
33	привито	привити	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	conj	_	_
34	300	300	NUM	_	Case=Nom|NumForm=Digit	33	nummod:gov	_	_
35	черенков	черенокъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	33	nsubj:pass	_	SpaceAfter=No
36	.	.	PUNCT	_	_	2	punct	_	_

~~~


