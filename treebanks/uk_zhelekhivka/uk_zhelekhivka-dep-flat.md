---
layout: base
title:  'Statistics of flat in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="uk_zhelekhivka-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk_zhelekhivka-dep-flat-name.html">flat:name</a></tt>.

25 nodes (0%) are attached to their parents as `flat`.

25 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt> (24; 96% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat	color:blue
1	Як	як	ADV	ADV	PronType=Int	5	advmod	_	TokenRange=3443:3445
2	же	же	PART	PART	_	5	discourse	_	TokenRange=3446:3448
3	з	з	ADP	ADP	Case=Ins	4	case	_	TokenRange=3449:3450
4	нею	вона	PRON	PRON	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	obl	_	TokenRange=3451:3454
5	буде	бути	VERB	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	TokenRange=3455:3459
6	по	по	ADP	ADP	Case=Loc	7	case	_	TokenRange=3460:3462
7	думцї	думка	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	parataxis	_	TokenRange=3463:3468
8	п	п.	NOUN	NOUN	Abbr=Yes|Animacy=Anim|Case=Gen|Gender=Masc|InflClass=Ind|Number=Sing	7	nmod	_	SpaceAfter=No|TokenRange=3469:3470
9	.	.	PUNCT	PUNCT	_	8	punct	_	TokenRange=3470:3471
10	Рише	Рише	PROPN	PART	Animacy=Anim|Case=Gen|Gender=Masc|InflClass=Ind|NameType=Sur|Number=Sing	8	flat	_	SpaceAfter=No|TokenRange=3472:3476
11	?	?	PUNCT	PUNCT	_	5	punct	_	TokenRange=3476:3477

~~~


~~~ conllu
# visual-style 64	bgColor:blue
# visual-style 64	fgColor:white
# visual-style 63	bgColor:blue
# visual-style 63	fgColor:white
# visual-style 63 64 flat	color:blue
1	Виклад	виклад	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	TokenRange=2708:2714
2	його	його	DET	PRON	Case=Nom|Gender=Masc|InflClass=Ind|Number=Sing|Person=3|Poss=Yes|PronType=Prs	1	det	_	TokenRange=2715:2719
3	був	бути	AUX	AUX	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	cop	_	TokenRange=2720:2723
4	завсїгди	завсігди	ADV	ADV	_	6	advmod	_	TokenRange=2724:2732
5	строго	строго	ADV	ADV	Degree=Pos	6	advmod	_	TokenRange=2733:2739
6	річевий	річевий	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|TokenRange=2740:2747
7	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=2747:2748
8	через	через	ADP	ADP	Case=Acc	9	case	_	TokenRange=2749:2754
9	те	те	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obl	_	TokenRange=2755:2757
10	сухий	сухий	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	conj	_	TokenRange=2758:2763
11	і	і	CCONJ	CCONJ	_	13	cc	_	TokenRange=2764:2765
12	не	не	PART	PART	Polarity=Neg	13	advmod:neg	_	TokenRange=2766:2768
13	поривав	поривати	VERB	VERB	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	conj	_	TokenRange=2769:2776
14	слухача	слухач	NOUN	NOUN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	13	obj	_	SpaceAfter=No|TokenRange=2777:2784
15	;	;	PUNCT	PUNCT	_	20	punct	_	TokenRange=2784:2785
16	нїчого	ніщо	PRON	PRON	Animacy=Inan|Case=Gen|PronType=Neg	20	nsubj	_	TokenRange=2786:2792
17	в	в	ADP	ADP	Case=Loc	18	case	_	TokenRange=2793:2794
18	нїм	він	PRON	PRON	Case=Loc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	obl	_	TokenRange=2795:2798
19	не	не	PART	PART	Polarity=Neg	20	advmod:neg	_	TokenRange=2799:2801
20	зраджувало	зраджувати	VERB	VERB	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	parataxis	_	SpaceAfter=No|TokenRange=2802:2812
21	,	,	PUNCT	PUNCT	_	30	punct	_	TokenRange=2812:2813
22	що	що	SCONJ	SCONJ	_	30	mark	_	TokenRange=2814:2816
23	в	в	ADP	ADP	Case=Loc	24	case	_	TokenRange=2817:2818
24	грудях	груди	NOUN	NOUN	Animacy=Inan|Case=Loc|Number=Ptan	30	obl	_	TokenRange=2819:2825
25	того	той	DET	DET	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	29	det	_	TokenRange=2826:2830
26	назверх	назверх	ADV	ADV	_	28	advmod	_	TokenRange=2831:2838
27	зовсїм	зовсім	ADV	ADV	_	28	advmod	_	TokenRange=2839:2845
28	холодного	холодний	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	TokenRange=2846:2855
29	чоловіка	чоловік	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	24	nmod	_	TokenRange=2856:2864
30	билось	битися	VERB	VERB	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Fin	20	ccomp	_	TokenRange=2865:2871
31	добре	добрий	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	36	amod	_	SpaceAfter=No|TokenRange=2872:2877
32	,	,	PUNCT	PUNCT	_	33	punct	_	TokenRange=2877:2878
33	щире	щирий	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	31	conj	_	SpaceAfter=No|TokenRange=2879:2883
34	,	,	PUNCT	PUNCT	_	35	punct	_	TokenRange=2883:2884
35	жичливе	жичливий	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	31	conj	_	TokenRange=2885:2892
36	серце	серце	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	30	nsubj	_	SpaceAfter=No|TokenRange=2893:2898
37	;	;	PUNCT	PUNCT	_	39	punct	_	TokenRange=2898:2899
38	він	він	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	39	nsubj	_	TokenRange=2900:2903
39	визначав	визначати	VERB	VERB	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	parataxis	_	TokenRange=2904:2912
40	ся	сей	DET	DET	PronType=Prs|Reflex=Yes	39	expl:pv	_	TokenRange=2913:2915
41	великою	великий	ADJ	ADJ	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	42	amod	_	TokenRange=2916:2923
42	прихильностию	прихильність	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	39	obl	_	TokenRange=2924:2937
43	для	для	ADP	ADP	Case=Gen	45	case	_	TokenRange=2938:2941
44	своїх	свій	DET	DET	Case=Gen|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	45	det	_	TokenRange=2942:2947
45	слухачів	слухач	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	42	nmod	_	TokenRange=2948:2956
46	і	і	CCONJ	CCONJ	_	51	cc	_	TokenRange=2957:2958
47	до	до	ADP	ADP	Case=Gen	51	case	_	TokenRange=2959:2961
48	укр	укр.	NOUN	ADJ	Abbr=Yes|Case=Gen|Gender=Fem|InflClass=Ind|Number=Sing	51	amod	_	SpaceAfter=No|TokenRange=2962:2965
49	.	.	PUNCT	PUNCT	_	48	punct	_	TokenRange=2965:2966
50	академічної	академічний	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	51	amod	_	TokenRange=2967:2978
51	молодїжи	молодіж	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	45	conj	_	TokenRange=2979:2987
52	взагалї	взагалі	ADV	ADV	_	51	nmod	_	SpaceAfter=No|TokenRange=2988:2995
53	,	,	PUNCT	PUNCT	_	59	punct	_	TokenRange=2995:2996
54	як	як	SCONJ	SCONJ	_	59	mark	_	TokenRange=2997:2999
55	се	се	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	59	obj	_	TokenRange=3000:3002
56	згідно	згідно	ADV	ADV	ExtPos=ADP	58	case	_	TokenRange=3003:3009
57	з	з	ADP	ADP	Case=Ins	56	fixed	_	TokenRange=3010:3011
58	правдою	правда	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	59	obl	_	TokenRange=3012:3019
59	ствердили	ствердити	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	39	advcl	_	TokenRange=3020:3029
60	в	в	ADP	ADP	Case=Loc	62	case	_	TokenRange=3030:3031
61	надгробнім	надгробний	ADJ	ADJ	Case=Loc|Gender=Neut|Number=Sing	62	amod	_	TokenRange=3032:3042
62	слові	слово	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	59	obl	_	TokenRange=3043:3048
63	проф.	проф.	NOUN	NOUN	Abbr=Yes|Animacy=Anim|Case=Nom|Gender=Masc|InflClass=Ind|Number=Sing	59	nsubj	_	TokenRange=3049:3054
64	д-р	д-р	NOUN	NOUN	Abbr=Yes|Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	63	flat	_	TokenRange=3055:3058
65	Василь	Василь	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	63	flat	_	NameType=Giv|TokenRange=3059:3065
66	Сїмович	Сімович	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	65	flat:name	_	NameType=Pat|TokenRange=3066:3073
67	і	і	CCONJ	CCONJ	_	68	cc	_	TokenRange=3074:3075
68	студент	студент	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	63	conj	_	TokenRange=3076:3083
69	Навроцький	Навроцький	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	68	flat	_	NameType=Sur|SpaceAfter=No|TokenRange=3084:3094
70	.	.	PUNCT	PUNCT	_	6	punct	_	TokenRange=3094:3095

~~~


