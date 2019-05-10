---
layout: base
title:  'Statistics of nummod:gov in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nummod.html">nummod</a></tt>.

51 nodes (0%) are attached to their parents as `nummod:gov`.

45 instances of `nummod:gov` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52941176470588.

The following 4 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (48; 94% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	а	а	CCONJ	_	_	6	cc	_	_
2	в	въ	ADP	_	_	4	case	_	_
3	тои	тотъ	DET	_	Case=Loc|Gender=Fem|Number=Sing	4	det	_	_
4	грамотки	грамотка	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
5	было	быти	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes	6	aux	_	_
6	послано	послати	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	два	два	NUM	_	Case=Nom|Gender=Masc	8	nummod:gov	_	_
8	списка	списокъ	NOUN	_	Case=Nom|Gender=Masc|Number=Dual	6	nsubj:pass	_	_
9	с	съ	ADP	_	_	10	case	_	_
10	челобитнои	челобитная	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
11	и	и	CCONJ	_	_	13	cc	_	_
12	з	съ	ADP	_	_	13	case	_	_
13	ѕаписи	запись	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	conj	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 30 nummod:gov	color:blue
1	И	и	CCONJ	_	_	2	cc	_	_
2	езди	ѣздити	VERB	Tense=Aor	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	нареченый	наречи	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Long|VerbForm=Part|Voice=Pass	4	amod	_	_
4	владыка	владыка	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
5	Феофил	Феофилъ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
6	с	съ	ADP	_	_	7	case	_	_
7	посадники	посадникъ	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	4	nmod	_	_
8	новгородцкими	новгородский	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	7	amod	_	_
9	и	и	CCONJ	_	_	12	cc	_	_
10	с	съ	ADP	_	_	12	case	_	_
11	житьими	житий	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	12	amod	_	_
12	людми	людие/люди/человѣкъ$	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	7	conj	_	_
13	на	на	ADP	_	_	14	case	_	_
14	Коростынѣ	Коростыня	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	2	obl	_	_
15	и	и	CCONJ	_	_	16	cc	_	_
16	докончал	докончати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	2	conj	_	_
17	мирѣ	миръ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	16	obj	_	_
18	съ	съ	ADP	_	_	19	case	_	_
19	княземъ	князь	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	16	obl	_	_
20	великим	великий	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	19	amod	_	SpaceAfter=No
21	;	;	PUNCT	_	_	23	punct	_	_
22	и	и	CCONJ	_	_	23	cc	_	_
23	даша	дати	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
24	князю	князь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	23	iobj	_	_
25	великому	великий	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	24	amod	_	_
26	Ивану	Иванъ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	24	appos	_	_
27	Васильевичю	Василиевичь	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	26	flat:name	_	_
28	новгородци	новгородецъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	23	nsubj	_	_
29	полшестѣнацать	полшестѣнацать	NUM	_	Case=Acc	30	compound	_	_
30	тысячи	тысяча	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	31	nummod:gov	_	_
31	рублев	рубль	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	23	obj	_	SpaceAfter=No
32	,	,	PUNCT	_	_	34	punct	_	_
33	и	и	CCONJ	_	_	34	cc	_	_
34	целоваша	цѣловати	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
35	новгородци	новгородецъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	34	nsubj	_	_
36	крестъ	крестъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	34	obj	_	_
37	князю	князь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	34	iobj	_	_
38	великому	великий	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	37	amod	_	SpaceAfter=No
39	,	,	PUNCT	_	_	45	punct	_	_
40	што	што	SCONJ	_	_	45	mark	_	_
41	за	за	ADP	_	_	42	case	_	_
42	короля	король	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	45	obl	_	_
43	новгородцемь	новгородецъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	45	iobj	_	_
44	не	не	PART	_	Polarity=Neg	45	advmod	_	_
45	задаватися	задаватися	VERB	_	Aspect=Imp|Reflex=Yes|VerbForm=Inf	34	ccomp	_	_
46	и	и	CCONJ	_	_	51	cc	_	_
47	очицевъ	отчичь	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	51	obj	_	_
48	из	изъ	ADP	_	_	49	case	_	_
49	Литвы	Литва	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	51	obl	_	_
50	не	не	PART	_	Polarity=Neg	51	advmod	_	_
51	приимать	приимати	VERB	_	Aspect=Imp|VerbForm=Inf	45	conj	_	SpaceAfter=No
52	;	;	PUNCT	_	_	57	punct	_	_
53	а	а	CCONJ	_	_	57	cc	_	_
54	все	весь	DET	_	Case=Acc|Gender=Neut|Number=Sing	55	det	_	_
55	то	тотъ	DET	_	Case=Acc|Gender=Neut|Number=Sing	57	obj	_	_
56	Богу	Богъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	57	nsubj	_	_
57	попущающу	попущати	VERB	_	Aspect=Imp|Case=Dat|Gender=Masc|Number=Sing|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	2	conj	_	_
58	грѣх	грѣхъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	57	obl	_	_
59	ради	ради	ADP	_	_	58	case	_	_
60	наших	нашъ	DET	_	Case=Gen|Gender=Masc|Number=Plur|Poss=Yes	58	det	_	SpaceAfter=No
61	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod:gov	color:blue
1	Потому	потому	ADV	_	Degree=Pos	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	vocative	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	8	nsubj:pass	_	_
6	немало	немало	NUM	_	Case=Nom	5	nummod:gov	_	_
7	и	и	PART	_	_	8	advmod	_	_
8	написано	написати	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	_	28	punct	_	_
10	а	а	CCONJ	_	_	28	cc	_	_
11	платежщиков	платежчикъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	28	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	28	vocative	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	11	appos	_	SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	_
17	которые	который	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	22	nsubj	_	_
18	у	въ	ADP	_	_	21	case	_	_
19	твоих	твой	DET	_	Case=Loc|Gender=Neut|Number=Plur|Poss=Yes	21	det	_	_
20	государевых	государевъ	ADJ	_	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Variant=Long	21	amod	_	_
21	делах	дѣло	NOUN	_	Case=Loc|Gender=Neut|Number=Plur	22	obl	_	_
22	ходим	ходити	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	15	acl:relcl	_	SpaceAfter=No
23	,	,	PUNCT	_	_	22	punct	_	_
24	одна	одинъ	NUM	_	Case=Nom|Gender=Fem|Number=Sing	28	nummod	_	_
25	и	и	CCONJ	_	_	27	cc	_	_
26	с	съ	ADP	_	_	27	case	_	_
27	восмьдесят	восмьдесятъ	NUM	_	Case=Ins	24	conj	_	_
28	человек	человѣкъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	8	conj	_	SpaceAfter=No
29	.	.	PUNCT	_	_	8	punct	_	_

~~~


