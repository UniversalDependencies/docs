---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nsubj.html">nsubj</a></tt>.

117 nodes (0%) are attached to their parents as `nsubj:pass`.

61 instances of `nsubj:pass` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.76068376068376.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (88; 75% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (17; 15% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (5; 4% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:pass	color:blue
1	а	а	CCONJ	_	_	4	advmod	_	_
2	ꙋ	у	ADP	_	_	3	case	_	_
3	неи	она	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	obl	_	_
4	послана	послати	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
5	челобитная	челобитная	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
6	я	и	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	det	_	_
7	за	за	ADP	_	_	8	case	_	_
8	рꙋкою	рука	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	5	nmod	_	_
9	влдки	владыка	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
10	гсдрю	государь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	4	iobj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	Роспись	роспись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	рыбе	рыба	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	5	nsubj:pass	_	_
5	прислана	прислати	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	acl:relcl	_	_
6	ис	изъ	ADP	_	_	8	case	_	_
7	Селецкой	селецкий	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	слободки	слободка	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	obl	_	_
9	с	съ	ADP	_	_	10	case	_	_
10	Ларионом	Ларионъ	PROPN	_	Case=Ins|Gender=Masc|Number=Sing	5	obl	_	_
11	Офонасьевым	Офонасьевъ	PROPN	_	Case=Ins|Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 40 nsubj:pass	color:blue
1	И	и	CCONJ	_	_	6	cc	_	_
2	стерлядей	стерлядь	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	г.	государь	NOUN	_	Abbr=Yes	2	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	написано	написати	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	42	42	NUM	_	Case=Nom|Gender=Fem	8	nummod:gov	_	_
8	стерляди	стерлядь	NOUN	_	Case=Nom|Gender=Fem|Number=Count	6	nsubj:pass	_	SpaceAfter=No
9	;	;	PUNCT	_	_	16	punct	_	_
10	против	противъ	ADP	_	_	14	case	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	г.	государь	NOUN	_	Abbr=Yes	14	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	письма	письмо	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	16	obl	_	_
15	стерляди	стерлядь	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	16	nsubj	_	_
16	сошлись	сойтися	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Mid	6	parataxis	_	_
17	четкою	четка	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	16	iobj	_	SpaceAfter=No
18	;	;	PUNCT	_	_	24	punct	_	_
19	а	а	CCONJ	_	_	24	cc	_	_
20	лещей	лещь	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	24	nsubj:pass	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	г.	государь	NOUN	_	Abbr=Yes	20	parataxis	_	SpaceAfter=No
23	,	,	PUNCT	_	_	22	punct	_	_
24	написано	написати	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	conj	_	_
25	в	въ	ADP	_	_	26	case	_	_
26	памяти	память	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	24	obl	_	_
27	10	10	NUM	_	Case=Nom|NumForm=Digit	20	nummod:gov	_	SpaceAfter=No
28	,	,	PUNCT	_	_	32	punct	_	_
29	а	а	CCONJ	_	_	32	cc	_	_
30	против	противъ	ADP	_	_	31	case	_	_
31	памяти	память	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	32	obl	_	_
32	нет	нѣтъ	VERB	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	24	conj	_	SpaceAfter=No
33	,	,	PUNCT	_	_	34	punct	_	_
34	г.	государь	NOUN	_	Abbr=Yes	32	parataxis	_	SpaceAfter=No
35	,	,	PUNCT	_	_	34	punct	_	_
36	дву	два	NUM	_	Case=Gen|Gender=Masc	37	nummod	_	_
37	лещей	лещь	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	32	nsubj	_	SpaceAfter=No
38	,	,	PUNCT	_	_	39	punct	_	_
39	принято	приняти	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	32	parataxis	_	_
40	8	8	NUM	_	Case=Nom|NumForm=Digit	39	nsubj:pass	_	SpaceAfter=No
41	.	.	PUNCT	_	_	6	punct	_	_

~~~


