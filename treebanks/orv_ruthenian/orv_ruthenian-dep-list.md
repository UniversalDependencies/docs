---
layout: base
title:  'Statistics of list in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `list`

This relation is universal.

9 nodes (0%) are attached to their parents as `list`.

9 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44444444444444.

The following 6 pairs of parts of speech are connected with `list`: <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (3; 33% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (2; 22% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 list	color:blue
1	Ап(с̃)лъ	апостолъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="Апс̃лъ"|SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	wf=","
3	оу	у	ADP	_	_	5	case	_	wf="у"|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	wf=","
5	а̃	1	ADJ	ORD	NumForm=Cyril|NumType=Ord	1	list	_	wf="а̃"|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	wf=","
7	до	до	ADP	_	_	8	case	_	wf="до"
8	ко(р)	кор	NOUN	_	Abbr=Yes	5	nmod	_	wf="кор"|SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	wf="."

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 list	color:blue
1	І	и	CCONJ	_	_	2	cc	_	wf="И"
2	мешкали	мѣшкати	VERB	_	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="мешкали"|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	wf=","
4	мови(т)	мовити	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	parataxis:discourse	_	wf="мовит"|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	wf=","
6	[	[	PUNCT	_	_	7	punct	_	wf="["|NoIndex=Yes|SpaceAfter=No
7	глоса	глоса	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	parataxis	_	wf="глоса"|NoIndex=Yes
8	на	на	ADP	_	_	9	case	_	wf="на"|NoIndex=Yes
9	полі	поле	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	7	nmod	_	wf="поли"|NoIndex=Yes
10	-	-	PUNCT	_	_	11	punct	_	wf="-"|NoIndex=Yes
11	Сꙋде(й)	судия	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	7	parataxis	_	wf="Судей"|NoIndex=Yes
12	гла(в)	глава	NOUN	_	Abbr=Yes	11	list	_	wf="глав"|NoIndex=Yes
13	г̃	3	ADJ	ORD	Case=Nom|Gender=Fem|Number=Sing|NumForm=Digit|NumType=Ord	12	amod	_	wf="г̃"|NoIndex=Yes|NoIndex=Yes|SpaceAfter=No
14	]	]	PUNCT	_	_	7	punct	_	wf="]"|NoIndex=Yes
15	сн̃ове	сынъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	wf="сн̃ове"
16	іи̃левы	израилевъ	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Variant=Short	15	amod	_	wf="ии̃левы"
17	весполъ	весполъ	ADV	_	Degree=Pos	19	advmod	_	wf="весполъ"
18	с	зъ	ADP	_	_	19	case	_	wf="с"
19	хананеѡ(м)	хананей	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	2	obl	_	wf="хананеом"|SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	wf=","
21	хетфеѡ(м)	хетфей	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	19	conj	_	wf="хетфеом"|SpaceAfter=No
22	,	,	PUNCT	_	_	24	punct	_	wf=","
23	і	и	CCONJ	_	_	24	cc	_	wf="и"
24	аммореѡ(м)	амморей	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	19	conj	_	wf="аммореом"|SpaceAfter=No
25	,	,	PUNCT	_	_	27	punct	_	wf=","
26	и	и	CCONJ	_	_	27	cc	_	wf="и"
27	ферезеѡмъ	ферезей	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	19	conj	_	wf="ферезеомъ"
28	и	и	CCONJ	_	_	30	cc	_	wf="и"
29	з(ъ)	зъ	ADP	_	_	30	case	_	wf="зъ"
30	иншими	инший	DET	_	Case=Ins|Gender=Masc|Number=Plur|PronType=Tot	19	conj	_	wf="иншими"|SpaceAfter=No
31	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


