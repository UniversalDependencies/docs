---
layout: base
title:  'Statistics of list in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `list`

This relation is universal.

5 nodes (0%) are attached to their parents as `list`.

5 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6.

The following 5 pairs of parts of speech are connected with `list`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 list	color:blue
1	Псан	писати	VERB	VBNH	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="Псан"
2	в	въ	ADP	IN	_	3	case	_	wf="в"
3	Берестьи	Берестье	PROPN	NPI	Case=Loc|Gender=Neut|NameType=Geo|Number=Sing	1	obl	_	wf="Берестьи"|SpaceAfter=No
4	,	,	PUNCT	-COMMA-	_	7	punct	_	_
5	на	на	ADP	IN	_	7	case	_	wf="на"
6	великом	великий	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	wf="великом"
7	соимѣ	соймъ	NOUN	NNI	Case=Loc|Gender=Masc|Number=Sing	3	nmod	_	wf="соимѣ"|SpaceAfter=No
8	,	,	PUNCT	-COMMA-	_	9	punct	_	_
9	лета	лето	NOUN	NNI	Case=Gen|Gender=Neut|Number=Sing	1	obl:tmod	_	wf="лета"
10	Бож(ъ)его	божий	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	wf="Божъего"
11	тисеча	тысяча	NOUN	NNI	Case=Nom|Gender=Fem|Number=Sing	13	compound	_	wf="тисеча"
12	пѧт(ь)сот	пятьсотъ	NUM	CD	Case=Acc|NumForm=Word|NumType=Card	13	compound	_	wf="пѧтьсот"
13	первогонадесѧт(ь)	первыйнадесять	ADJ	ORD	Case=Gen|Gender=Neut|Number=Sing|NumForm=Word|NumType=Ord	9	amod	_	wf="первогонадесѧть"|SpaceAfter=No
14	,	,	PUNCT	-COMMA-	_	15	punct	_	_
15	м(е)с(е)ца	месяцъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	18	nmod	_	wf="месеца"
16	июл(ѧ)	июль	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	15	appos	_	wf="июлѧ"
17	28	28	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	18	amod	_	_
18	ден(ь)	день	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	wf="день"|SpaceAfter=No
19	,	,	PUNCT	-COMMA-	_	20	punct	_	_
20	четвертыинадѣсѧт(ь)	четвертыйнадесять	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	18	list	_	wf="четвертыинадѣсѧть"|SpaceAfter=No
21	.	.	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 list	color:blue
1	Тежъ	тежъ	CCONJ	СС	_	14	cc	_	wf="Тежъ"
2	воить	войтъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	wf="воить"
3	нинешънии	нынешний	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	wf="нинешънии"
4	полоцъкии	полоцкий	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	wf="полоцъкии"
5	[416	416	NUM	CD	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Card	4	dep	_	_
6	об.	оборотъ	NOUN	NNI	Abbr=Yes	5	list	_	wf="об."|SpaceAfter=No
7	]	]	PUNCT	-RBR-	_	5	punct	_	_
8	и	и	CCONJ	СС	_	11	cc	_	wf="и"
9	потомъ	потомъ	ADV	RB	Degree=Pos	10	advmod	_	wf="потомъ"
10	бꙋдꙋчии	будучий	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	wf="бꙋдꙋчии"
11	воитове	войтъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Plur	2	conj	_	wf="воитове"
12	тамошнии	тамошний	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	wf="тамошнии"
13	не	не	PART	NEG	Polarity=Neg	14	advmod	_	wf="не"
14	мають	мети	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="мають"
15	в	въ	ADP	IN	_	16	case	_	wf="в"
16	плать	платъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	31	obl	_	wf="плать"
17	и	и	CCONJ	СС	_	20	cc	_	wf="и"
18	во	въ	ADP	IN	_	20	case	_	wf="во"
19	вси	весь	DET	DT	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	20	det	_	wf="вси"
20	доходы	доходъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Plur	16	conj	_	wf="доходы"
21	местскии	местский	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	20	amod	_	wf="местскии"|SpaceAfter=No
22	,	,	PUNCT	-COMMA-	_	25	punct	_	_
23	которыи	который	DET	WDT	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	25	nsubj:pass	_	wf="которыи"
24	ж	жъ	PART	RP	_	25	advmod	_	wf="ж"
25	приданы	придати	VERB	VBNH	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	20	acl:relcl	_	wf="приданы"
26	на	на	ADP	IN	_	27	case	_	wf="на"
27	ратꙋшь	ратушъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	25	obl	_	wf="ратꙋшь"
28	и	и	CCONJ	СС	_	29	cc	_	wf="и"
29	бꙋрмистромъ	бурмистръ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Plur	27	conj	_	wf="бꙋрмистромъ"|SpaceAfter=No
30	,	,	PUNCT	-COMMA-	_	25	punct	_	_
31	ꙋстꙋпатися	вступатися	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	14	xcomp	_	wf="ꙋстꙋпатися"|SpaceAfter=No
32	.	.	PUNCT	-PERIOD-	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 list	color:blue
1	ꙋ	въ	ADP	IN	_	2	case	_	wf="ꙋ"
2	Вильни	Вилня	PROPN	NPI	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	0	root	_	wf="Вильни"|SpaceAfter=No
3	,	,	PUNCT	-COMMA-	_	4	punct	_	_
4	инъдик(т)	индиктъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	2	list	_	wf="инъдикт"
5	10	10	ADJ	ORD	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	4	amod	_	_
6	.	.	PUNCT	-PERIOD-	_	2	punct	_	_

~~~


