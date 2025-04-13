---
layout: base
title:  'Statistics of csubj:outer in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="orv_rnc-dep-csubj-pass.html">csubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:outer`.

2 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 38 csubj:outer	color:blue
1	А	а	CCONJ	_	_	14	cc	_	norm="А"
2	гостю	гость	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	3	iobj	_	norm="гостю"|Decl=2|End=ю
3	гостити	гостити	VERB	_	VerbForm=Inf|Voice=Act	14	csubj:outer	_	norm="гостити"|Decl=X|End=ит
4	новгородчкому	новгородский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	norm="новгородчкому"|Decl=X|End=умо
5	по	по	ADP	_	_	7	case	_	norm="по"|check=@
6	местеревѣ	местеревъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	7	amod	_	norm="местеревѣ"|Decl=X|End=ѣ|check=@
7	земли	земля	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	3	obl	_	norm="земли"|Decl=1a|End=и|check=@
8	и	и	CCONJ	_	_	11	cc	_	norm="и"
9	по	по	ADP	_	_	11	case	_	norm="по"|check=@
10	местеревымъ	местеревъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	norm="местеревымъ"|Decl=X|End=ъмы|check=@
11	городамъ	городъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	7	conj	_	norm="городамъ"|Decl=2|End=ъма|SpaceAfter=No|check=@
12	,	,	PUNCT	_	_	13	punct	_	norm=","
13	путь	путь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	norm="путь"|Decl=2|End=ь0
14	чистъ	чистый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	norm="чистъ"|Decl=X|End=ъ0|SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	norm=","
16	и	и	CCONJ	_	_	17	cc	_	norm="и"
17	горою	гора	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	13	nmod	_	norm="горою"|Decl=1a|End=юо
18	и	и	CCONJ	_	_	19	cc	_	norm="и"
19	вод[ою]	вода	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	17	conj	_	norm="водою"|Decl=1a|End=юо|SpaceAfter=No
20	,	,	PUNCT	_	_	22	punct	_	norm=","
21	а	а	CCONJ	_	_	22	cc	_	norm="а"
22	купити	купити	VERB	_	VerbForm=Inf|Voice=Act	14	conj	_	norm="купити"|Decl=X|End=ит
23	имъ	и	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	22	iobj	_	norm="имъ"|Decl=X|End=ъм
24	и	и	CCONJ	_	_	25	cc	_	norm="и"
25	продати	продати	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	22	conj	_	norm="продати"|Decl=X|End=ит
26	товаръ	товаръ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	22	obj	_	norm="товаръ"|Decl=2|End=ъ0|check=@
27	всякѣи	всякий	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	26	det	_	norm="всякѣи"|Decl=X|End=иѣ|check=@
28	без	безъ	ADP	_	_	29	case	_	norm="без"|check=@
29	вывѣта	вывѣтъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	22	obl	_	norm="вывѣта"|Decl=2|End=а|check=@
30	и	и	CCONJ	_	_	32	cc	_	norm="и"
31	безъ	безъ	ADP	_	_	32	case	_	norm="безъ"|check=@
32	рубежа	рубежъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	29	conj	_	norm="рубежа"|Decl=2|End=а|SpaceAfter=No|check=@
33	;	;	PUNCT	_	_	45	punct	_	norm=";"
34	такоже	также	ADV	ADVPRO	Degree=Pos|PronType=Dem	45	cc	_	norm="такоже"
35	и	и	CCONJ	_	_	34	fixed	_	norm="и"
36	немечкому	нѣмецкий	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	37	amod	_	norm="немечкому"|Decl=X|End=умо|check=@
37	гостю	гость	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	38	iobj	_	norm="гостю"|Decl=2|End=ю|check=@
38	гостити	гостити	VERB	_	VerbForm=Inf|Voice=Act	45	csubj:outer	_	norm="гостити"|Decl=X|End=ит
39	по	по	ADP	_	_	41	case	_	norm="по"|check=@
40	новгородчкои	новгородский	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	41	amod	_	norm="новгородчкои"|Decl=X|End=ио|check=@
41	отцынѣ	отчина	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	38	obl	_	norm="отцынѣ"|Decl=1a|End=ѣ|SpaceAfter=No|check=@
42	,	,	PUNCT	_	_	38	punct	_	norm=","
43	путь	путь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	45	nsubj	_	norm="путь"|Decl=2|End=ь0
44	ему	и	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	43	iobj	_	norm="ему"|Decl=X|End=ум
45	чистъ	чистый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	14	conj	_	norm="чистъ"|Decl=X|End=ъ0|SpaceAfter=No
46	,	,	PUNCT	_	_	48	punct	_	norm=","
47	и	и	CCONJ	_	_	48	cc	_	norm="и"
48	горою	гора	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	43	nmod	_	norm="горою"|Decl=1a|End=юо
49	и	и	CCONJ	_	_	50	cc	_	norm="и"
50	водою	вода	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	48	conj	_	norm="водою"|Decl=1a|End=юо|SpaceAfter=No
51	,	,	PUNCT	_	_	53	punct	_	norm=","
52	а	а	CCONJ	_	_	53	cc	_	norm="а"
53	торговати	торговати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	45	conj	_	norm="торговати"|Decl=X|End=ит
54	ему	и	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	53	iobj	_	norm="ему"|Decl=X|End=ум
55	всякимъ	всякий	DET	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Tot	56	det	_	norm="всякимъ"|Decl=X|End=ъми|check=@
56	товаромъ	товаръ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	53	obj	_	norm="товаромъ"|Decl=2|End=ъмо|check=@
57	без	безъ	ADP	_	_	58	case	_	norm="без"|check=@
58	вывѣта	вывѣтъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	53	obl	_	norm="вывѣта"|Decl=2|End=а|check=@
59	и	и	CCONJ	_	_	61	cc	_	norm="и"
60	без	безъ	ADP	_	_	61	case	_	norm="без"|check=@
61	рубежа	рубежъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	58	conj	_	norm="рубежа"|Decl=2|End=а|SpaceAfter=No|check=@
62	.	.	PUNCT	_	_	14	punct	_	norm="."

~~~


