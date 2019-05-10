---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nsubj.html">nsubj</a></tt>.

44 nodes (0%) are attached to their parents as `nsubj:pass`.

25 instances of `nsubj:pass` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.27272727272727.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (29; 66% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (8; 18% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (4; 9% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	а	а	CCONJ	_	_	12	cc	_	_
2	крепости	крѣпость	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	12	obj	_	_
3	мои	мой	DET	_	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes	2	det	_	_
4	кои	кой	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	8	nsubj:pass	_	_
5	ꙋ	у	ADP	_	_	6	case	_	_
6	тебя	ты	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	8	obl	_	_
7	есть	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	записаны	записати	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	acl:relcl	_	_
9	и	и	CCONJ	_	_	11	cc	_	_
10	не	не	PART	_	Polarity=Neg	11	advmod	_	_
11	записаны	записати	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	8	conj	_	_
12	отдаи	отдати	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
13	пожалꙋи	пожаловати	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	12	discourse	_	_
14	Семенꙋ	Семенъ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	12	iobj	_	_
15	Еѳимовичю	Еѳимовичь	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	14	flat:name	_	_

~~~


~~~ conllu
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 55 54 nsubj:pass	color:blue
1	А	а	CCONJ	_	_	7	cc	_	_
2	священником	священникъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	7	iobj	_	_
3	всем	весь	DET	_	Case=Dat|Gender=Masc|Number=Plur	2	det	_	_
4	великопермьским	великопермский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Variant=Long	2	amod	_	_
5	также	также	ADV	_	Degree=Pos	7	advmod	_	_
6	учительная	учительный	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Variant=Long	7	obl	_	_
7	глаголю	глаголати	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	31	punct	_	_
9	чтобы	чтобы	SCONJ	_	Mood=Cnd	31	mark	_	_
10	есте	быти	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	31	aux	_	_
11	о	о	ADP	_	_	13	case	_	_
12	своем	свой	DET	_	Case=Loc|Gender=Neut|Number=Sing|Poss=Yes	13	det	_	_
13	священьстве	священьство	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	30	nmod	_	_
14	и	и	CCONJ	_	_	17	cc	_	_
15	о	о	ADP	_	_	17	case	_	_
16	душевней	душевний	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	17	amod	_	_
17	ползе	полза	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	13	conj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	колико	колико	ADV	_	Degree=Pos	20	advmod	_	_
20	мочно	мочный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	28	advcl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	20	punct	_	_
22	и	и	CCONJ	_	_	28	cc	_	_
23	о	о	ADP	_	_	28	case	_	_
24	своей	свой	DET	_	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes	28	det	_	_
25	от	отъ	ADP	_	_	26	case	_	_
26	бога	Богъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	27	obl	_	_
27	врученной	вручити	VERB	_	Aspect=Perf|Case=Loc|Gender=Fem|Number=Sing|Tense=Past|Variant=Long|VerbForm=Part|Voice=Pass	28	acl	_	_
28	пастве	паства	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	13	conj	_	_
29	всегда	всегда	ADV	_	Degree=Pos	31	advmod	_	_
30	попечение	попечение	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	31	obj	_	_
31	имели	имѣти	VERB	_	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes	7	ccomp	_	_
32	по	по	ADP	_	_	35	case	_	_
33	своему	свой	DET	_	Case=Dat|Gender=Masc|Number=Sing|Poss=Yes	35	det	_	_
34	священническому	священнический	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Long	35	amod	_	_
35	долгу	долгъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	31	obl	_	SpaceAfter=No
36	,	,	PUNCT	_	_	39	punct	_	_
37	по	по	ADP	_	_	39	case	_	_
38	господню	господень	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	39	amod	_	_
39	словеси	слово	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	35	conj	_	SpaceAfter=No
40	,	,	PUNCT	_	_	41	punct	_	_
41	глаголющему	глаголати	VERB	_	Aspect=Imp|Case=Dat|Gender=Neut|Number=Sing|Tense=Pres|Variant=Long|VerbForm=Part|Voice=Act	31	conj	_	SpaceAfter=No
42	:	:	PUNCT	_	_	51	punct	_	_
43	"	"	PUNCT	_	_	51	punct	_	SpaceAfter=No
44	Ему	онъ	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	51	iobj	_	_
45	же	же	PART	_	_	51	advmod	_	_
46	бо	бо	SCONJ	_	_	51	mark	_	SpaceAfter=No
47	,	,	PUNCT	_	_	48	punct	_	_
48	рече	рещи	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	51	parataxis	_	SpaceAfter=No
49	,	,	PUNCT	_	_	48	punct	_	_
50	много	много	NUM	_	Case=Nom	51	nsubj:pass	_	_
51	дасться	датися	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Fut|VerbForm=Fin	41	parataxis	_	SpaceAfter=No
52	,	,	PUNCT	_	_	55	punct	_	_
53	и	и	CCONJ	_	_	55	cc	_	_
54	много	много	NUM	_	Case=Nom	55	nsubj:pass	_	_
55	взыщется	взыскатися	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Fut|VerbForm=Fin	51	conj	_	_
56	от	отъ	ADP	_	_	57	case	_	_
57	него	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	55	obl	_	SpaceAfter=No
58	"	"	PUNCT	_	_	51	punct	_	SpaceAfter=No
59	,	,	PUNCT	_	_	62	punct	_	_
60	да	да	CCONJ	_	_	62	cc	_	_
61	не	не	PART	_	Polarity=Neg	62	advmod	_	_
62	осуждени	осудити	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	31	conj	_	_
63	быхом	быти	AUX	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	62	aux	_	_
64	пред	предъ	ADP	_	_	65	case	_	_
65	богом	Богъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	62	obl	_	_
66	были	быти	AUX	_	Number=Plur|Tense=Past|VerbForm=PartRes	62	aux	_	SpaceAfter=No
67	,	,	PUNCT	_	_	69	punct	_	_
68	да	да	CCONJ	_	_	69	cc	_	_
69	возмогли	возмочи	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes	31	conj	_	_
70	быхом	быти	AUX	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	69	aux	_	_
71	пред	предъ	ADP	_	_	72	case	_	_
72	господем	господь	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	69	obl	_	_
73	богом	Богъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	72	appos	_	_
74	кииждо	кийждо/кыиждо$	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	76	nsubj	_	_
75	нас	мы	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	76	obj	_	_
76	рещи	рещи	VERB	_	Aspect=Perf|VerbForm=Inf	72	acl:relcl	_	SpaceAfter=No
77	:	:	PUNCT	_	_	80	punct	_	_
78	"	"	PUNCT	_	_	80	punct	_	SpaceAfter=No
79	Се	се	PART	_	_	80	expl	_	_
80	яз	язъ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	76	parataxis	_	_
81	и	и	CCONJ	_	_	82	cc	_	_
82	дети	дѣти	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	80	appos	_	SpaceAfter=No
83	,	,	PUNCT	_	_	87	punct	_	_
84	яже	иже	PRON	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	87	obj	_	_
85	ми	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	87	iobj	_	_
86	еси	быти	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	87	aux	_	_
87	дал	дати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	82	acl:relcl	_	SpaceAfter=No
88	.	.	PUNCT	_	_	7	punct	_	_

~~~


