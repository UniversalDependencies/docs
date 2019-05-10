---
layout: base
title:  'Statistics of csubj in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `csubj`

This relation is universal.

15 nodes (0%) are attached to their parents as `csubj`.

12 instances of `csubj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.4.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (10; 67% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 csubj	color:blue
1	і	и	CCONJ	_	_	5	cc	_	_
2	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
3	пожалуи	пожаловати	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	5	discourse	_	_
4	приятель	приятель	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
5	доложи	доложити	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
6	у	у	ADP	_	_	7	case	_	_
7	Савы	Сава	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	5	obl	_	_
8	Еѳимовича	Еѳимовичь	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	7	flat:name	_	_
9	Боровитинова	Боровитиновъ	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	7	flat:name	_	_
10	бѣз	безъ	ADP	_	_	11	case	_	_
11	чево	что	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Rel	13	obl	_	_
12	невозможно	невозможный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	5	ccomp	_	_
13	быть	быти	VERB	_	VerbForm=Inf	12	csubj	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 30 csubj	color:blue
1	А	а	CCONJ	_	_	11	cc	_	_
2	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
3	какъ	какъ	ADV	_	Degree=Pos	5	advmod	_	_
4	есть	быти	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	християне	християнинъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	11	advcl	_	_
6	по	по	ADP	_	_	8	case	_	_
7	християнскому	християнский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	8	amod	_	_
8	обычаю	обычай	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	11	obl	_	_
9	со	съ	ADP	_	_	10	case	_	_
10	смирением	смирение	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	11	obl	_	_
11	напоминаем	напоминати	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
12	и	и	CCONJ	_	_	17	cc	_	_
13	бранитися	бранитися	VERB	_	Aspect=Imp|Reflex=Yes|VerbForm=Inf	17	xcomp	_	_
14	с	съ	ADP	_	_	15	case	_	_
15	тобою	ты	PRON	_	Case=Ins|Number=Sing|Person=2|PronType=Prs	13	obl	_	_
16	не	не	PART	_	Polarity=Neg	17	advmod	_	_
17	хотим	хотѣти	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	11	conj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	24	punct	_	_
19	занеже	занеже	SCONJ	_	_	24	mark	_	_
20	тебѣ	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	24	iobj	_	_
21	со	съ	ADP	_	_	22	case	_	_
22	мною	я	PRON	_	Case=Ins|Number=Sing|Person=1|PronType=Prs	23	obl	_	_
23	бранитися	бранитися	VERB	_	Aspect=Imp|Reflex=Yes|VerbForm=Inf	24	csubj	_	_
24	честь	честь	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	17	advcl	_	SpaceAfter=No
25	,	,	PUNCT	_	_	31	punct	_	_
26	а	а	CCONJ	_	_	31	cc	_	_
27	мнѣ	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	31	iobj	_	_
28	с	съ	ADP	_	_	29	case	_	_
29	тобою	ты	PRON	_	Case=Ins|Number=Sing|Person=2|PronType=Prs	30	obl	_	_
30	бранитися	бранитися	VERB	_	Aspect=Imp|Reflex=Yes|VerbForm=Inf	31	csubj	_	_
31	безчестье	безчестье	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	24	conj	_	SpaceAfter=No
32	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 67	bgColor:blue
# visual-style 67	fgColor:white
# visual-style 66	bgColor:blue
# visual-style 66	fgColor:white
# visual-style 66 67 csubj	color:blue
1	А	а	CCONJ	_	_	3	cc	_	_
2	ныне	нынѣ	ADV	_	Degree=Pos	3	advmod	_	_
3	слышимъ	слышати	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	11	punct	_	_
5	что	что	SCONJ	_	_	11	mark	_	_
6	в	въ	ADP	_	_	8	case	_	_
7	твоей	твой	DET	_	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes	8	det	_	_
8	земли	земля	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	11	obl	_	_
9	ариянская	ариянский	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	10	amod	_	_
10	вѣра	вѣра	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
11	начинается	начинатися	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
12	явно	явно	ADV	_	Degree=Pos	11	advmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	24	punct	_	_
14	а	а	CCONJ	_	_	24	cc	_	_
15	гдѣ	гдѣ	ADV	_	Degree=Pos	19	acl	_	_
16	ариянская	ариянский	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	17	amod	_	_
17	вѣра	вѣра	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	15	punct	_	_
19	тут	тутъ	ADV	_	Degree=Pos	24	advmod	_	_
20	и	и	PART	_	_	22	advmod	_	_
21	Христово	христовъ	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	22	amod	_	_
22	имя	имя	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	24	nsubj	_	_
23	не	не	PART	_	Polarity=Neg	24	advmod	_	_
24	вмѣщается	вмѣщатися	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	3	conj	_	SpaceAfter=No
25	,	,	PUNCT	_	_	31	punct	_	_
26	понеже	понеже	SCONJ	_	_	31	mark	_	_
27	Арий	Арий	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	31	nsubj	_	_
28	Христову	христовъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	29	amod	_	_
29	имени	имя	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	31	nmod	_	_
30	истовый	истовый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	31	amod	_	_
31	врагъ	врагъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	24	advcl	_	SpaceAfter=No
32	,	,	PUNCT	_	_	45	punct	_	_
33	и	и	CCONJ	_	_	34	cc	_	_
34	гдѣ	гдѣ	ADV	_	Degree=Pos	39	acl:relcl	_	_
35	ариева	ариевъ	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	36	amod	_	_
36	вѣра	вѣра	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	34	nsubj	_	SpaceAfter=No
37	,	,	PUNCT	_	_	34	punct	_	_
38	и	и	CCONJ	_	_	45	cc	_	_
39	тут	тутъ	ADV	_	Degree=Pos	45	advmod	_	_
40	и	и	CCONJ	_	_	41	cc	_	_
41	Христосъ	Христосъ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	45	nsubj	_	_
42	ни	ни	PART	_	Polarity=Neg	45	advmod	_	_
43	в	въ	ADP	_	_	45	case	_	_
44	кою	кой	DET	_	Case=Acc|Gender=Fem|Number=Sing	45	det	_	_
45	ползу	полза	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	31	conj	_	_
46	есть	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	45	cop	_	SpaceAfter=No
47	,	,	PUNCT	_	_	50	punct	_	_
48	и	и	CCONJ	_	_	50	cc	_	_
49	не	не	PART	_	Polarity=Neg	50	advmod	_	_
50	подобает	подобати	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	31	conj	_	_
51	християнством	християнство	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	52	xcomp	_	_
52	звати	звати	VERB	_	Aspect=Imp|VerbForm=Inf	50	xcomp	_	_
53	и	и	CCONJ	_	_	57	cc	_	_
54	християны	християнинъ	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	57	xcomp	_	_
55	тѣх	тотъ	DET	_	Case=Acc|Gender=Masc|Number=Plur	56	det	_	_
56	людей	людие/люди/человѣкъ$	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	57	obj	_	_
57	именовати	именовати	VERB	_	Aspect=Imp|VerbForm=Inf	52	conj	_	_
58	и	и	CCONJ	_	_	66	cc	_	_
59	о	о	ADP	_	_	61	case	_	_
60	християнской	християнский	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	61	amod	_	_
61	крови	кровь	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	67	obl	_	_
62	тѣмъ	тотъ	DET	_	Case=Dat|Gender=Masc|Number=Plur	63	det	_	_
63	людемъ	людие/люди/человѣкъ$	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	66	iobj	_	_
64	нѣ	нѣ	PART	_	Polarity=Neg	66	advmod	_	_
65	о	о	ADP	_	_	66	case	_	_
66	чем	что	PRON	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Rel	31	conj	_	_
67	тужити	тужити	VERB	_	Aspect=Imp|VerbForm=Inf	66	csubj	_	SpaceAfter=No
68	.	.	PUNCT	_	_	3	punct	_	_

~~~


