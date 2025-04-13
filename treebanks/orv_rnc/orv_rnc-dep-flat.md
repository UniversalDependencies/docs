---
layout: base
title:  'Statistics of flat in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="orv_rnc-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="orv_rnc-dep-flat-name.html">flat:name</a></tt>.

21 nodes (0%) are attached to their parents as `flat`.

21 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71428571428571.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (6; 29% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (5; 24% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 19% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 14% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	а	а	CCONJ	_	_	6	cc	_	norm="а"
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	norm="я"|Decl=X|End=0
3	за	за	ADP	_	_	5	case	_	norm="за"|check=@
4	ту	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	norm="ту"|Decl=X|End=у|check=@
5	кѡрѡву	корова	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	norm="кѡрѡву"|Decl=1a|End=у|check=@
6	взялъ	взяти	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	norm="взялъ"|Decl=X|End=ъл
7	пол	полъ	NUM	_	Case=Acc|NumForm=Word|NumType=Frac	9	nummod:gov	_	norm="пол"|Decl=X|End=0
8	четверта	четвертый	NUM	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Word|NumType=Frac|Variant=Short	10	nummod:gov	_	upos="ANUM"|norm="четверта"|Decl=ANUM|End=а
9	десять	десять	NUM	_	Case=Acc|NumForm=Word|NumType=Card	8	flat	_	norm="десять"|Decl=X|End=ь0
10	алтынъ	алтынъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	6	obj	_	norm="алтынъ"|Decl=2|End=ъ0

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat	color:blue
1	Въ	въ	ADP	_	_	8	case	_	Norm="Въ"
2	нынѣшнемъ	нынѣшний	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	Norm="нынѣшнемъ"|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	Norm=","
4	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	vocative	_	Norm="государь"|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	Norm=","
6	въ	въ	ADP	_	_	8	case	_	Norm="въ"
7	206	206	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit	8	amod	_	Norm="206"
8	году	годъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	15	obl:tmod	_	Norm="году"|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	Norm=","
10	генваря	генварь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	8	flat	_	Norm="генваря"
11	въ	въ	ADP	_	_	13	case	_	Norm="въ"
12	3	3	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit	13	amod	_	Norm="3"
13	день	день	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	10	nmod	_	Norm="день"|SpaceAfter=No
14	,	,	PUNCT	_	_	8	punct	_	Norm=","
15	билъ	бити	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	Norm="билъ"
16	челомъ	чело	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	15	obj	_	Norm="челомъ"
17	тебѣ	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	15	iobj	_	Norm="тебѣ"
18	великому	великий	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	Norm="великому"
19	государю	государь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	17	appos	_	Norm="государю"
20	[	[	PUNCT	_	_	21	punct	_	Norm="["|SpaceAfter=No
21	полная	полный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	19	parataxis	_	Norm="полная"|SpaceAfter=No
22	]	]	PUNCT	_	_	21	punct	_	Norm="["
23	на	на	ADP	_	_	24	case	_	Norm="на"
24	Кунгурѣ	Кунгуръ	PROPN	_	Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	28	obl	_	Norm="Кунгурѣ"
25	въ	въ	ADP	_	_	27	case	_	Norm="въ"
26	приказной	приказный	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	27	amod	_	Norm="приказной"
27	избѣ	изба	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	28	obl	_	Norm="избѣ"
28	подалъ	подати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	15	conj	_	Norm="подалъ"
29	челобитную	челобитная	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	28	obj	_	Norm="челобитную"
30	мнѣ	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	28	iobj	_	Norm="мнѣ"
31	холопу	холопъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	30	appos	_	Norm="холопу"
32	твоему	твой	DET	_	Case=Dat|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	31	det	_	Norm="твоему"
33	кунгурецъ	кунгурецъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	15	nsubj	_	Norm="кунгурецъ"
34	посадцкой	посадский	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	35	amod	_	Norm="посадцкой"
35	человѣкъ	человѣкъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	33	appos	_	Norm="человѣкъ"
36	Ивашко	Ивашко	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	35	appos	_	Norm="Ивашко"
37	Флоровъ	Флоровъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	36	flat:name	_	Norm="Флоровъ"|SpaceAfter=No
38	.	.	PUNCT	_	_	15	punct	_	Norm="."

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Пятыи	пятый	ADJ	ORD	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	2	amod	_	upos="ANUM"|norm="Пятыи"|Decl=ANUM|End=иы|check=@
2	собор	соборъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	norm="собор"|Decl=2|End=0|check=@
3	бысть	быти	VERB	Tense=Aor	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	norm="бысть"|Decl=X|End=ьтс
4	в	въ	ADP	_	_	5	case	_	norm="в"|check=@
5	Констянтинѣграде	Констянтинградъ	PROPN	_	Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	3	obl	_	norm="Констянтинѣграде"|Decl=2|End=е|check=@
6	въ	въ	ADP	_	_	7	case	_	norm="въ"|check=@
7	25	25	ADJ	ORD	Case=Acc|Gender=Neut|Number=Sing|NumForm=Digit|NumType=Ord	3	obl:tmod	_	upos="ANUM"|norm="25"|Decl=ANUM|End=_|check=@
8	июля	июль	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	7	flat	_	norm="июля"|Decl=2|End=я|SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	norm=","
10	святых	святой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	norm="святых"|Decl=X|End=хы|check=@
11	отецъ	отецъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	norm="отецъ"|Decl=2|End=ъ0|check=@
12	164	164	NUM	_	Case=Gen|Gender=Masc|NumForm=Digit|NumType=Card	11	nummod	_	norm="164"|Decl=X|End=_|SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	norm=","
14	при	при	ADP	_	_	15	case	_	norm="при"|check=@
15	цари	царь	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	3	obl:tmod	_	norm="цари"|Decl=2|End=и|check=@
16	Устиянѣ	Устиянъ	PROPN	_	Case=Loc|Gender=Masc|NameType=Giv|Number=Sing	15	appos	_	norm="Устиянѣ"|Decl=2|End=ѣ|SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	norm=","
18	на	на	ADP	_	_	20	case	_	norm="на"|check=@
19	суемысленнаго	суемысленный	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	20	amod	_	norm="суемысленнаго"|Decl=X|End=ога|check=@
20	Оригена	Оригенъ	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	2	nmod	_	norm="Оригена"|Decl=2|End=а|SpaceAfter=No|check=@
21	.	.	PUNCT	_	_	3	punct	_	norm="."

~~~


