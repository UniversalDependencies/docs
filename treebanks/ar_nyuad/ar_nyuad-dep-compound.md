---
layout: base
title:  'Statistics of compound in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `compound`

This relation is universal.

979 nodes (0%) are attached to their parents as `compound`.

978 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1123595505618.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (978; 100% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	NOUN	DET+ADJ+NSUFF_MASC_PL_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	3	nmod:poss	_	_
5	_	_	ADP	PREP	AdpType=Prep	6	case	_	_
6	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	2	obj	_	_
7	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	6	nmod:poss	_	_
8	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	flat	_	_
9	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	iobj	_	_
10	_	_	NUM	NOUN_NUM	NumForm=Digit	12	nummod	_	_
11	_	_	NUM	NOUN_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	10	compound	_	_
12	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	9	nmod:poss	_	_
13	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	9	advmod	_	_
14	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	13	nmod:poss	_	_
15	_	_	NUM	NOUN_NUM+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing|NumForm=Word	17	nummod	_	_
16	_	_	NUM	NOUN_NUM+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	15	compound	_	_
17	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	13	nmod	_	_
18	_	_	SCONJ	SUB_CONJ	_	20	mark	_	_
19	_	_	ADV	NEG_PART	Polarity=Neg	20	advmod	_	_
20	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
21	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	20	nsubj	_	_
22	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	amod	_	_
23	_	l	ADP	PREP	AdpType=Prep	24	case	_	_
24	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	21	obj	_	_
25	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	24	nmod:poss	_	_
26	_	_	PART	NOUN	Definite=Ind|Gender=Masc|Number=Sing	29	mark	_	_
27	_	_	ADP	PREP	AdpType=Prep	29	case	_	_
28	_	_	NUM	NOUN_NUM	NumForm=Digit	29	nummod	_	_
29	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	20	obj	_	_
30	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 103	bgColor:blue
# visual-style 103	fgColor:white
# visual-style 104	bgColor:blue
# visual-style 104	fgColor:white
# visual-style 104 103 compound	color:blue
1	_	_	PUNCT	PUNC	_	2	punct	_	_
2	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	_	_	ADJ	DET+ADJ+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	amod	_	_
4	_	:	PUNCT	PUNC	_	2	punct	_	_
5	_	_	ADV	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	advmod	_	_
6	_	_	PUNCT	PUNC	_	5	punct	_	_
7	_	_	PROPN	NOUN_PROP+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	5	nmod	_	_
8	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
9	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod:poss	_	_
10	_	_	ADJ	DET+ADJ_COMP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	_
11	_	w	CCONJ	CONJ	_	12	cc	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	obj	_	_
13	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	amod	_	_
14	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	amod	_	_
15	_	_	ADP	PREP	AdpType=Prep	16	case	_	_
16	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	8	obj	_	_
17	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	16	nmod:poss	_	_
18	_	_	ADP	PREP	AdpType=Prep	19	case	_	_
19	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	8	iobj	_	_
20	_	_	PUNCT	PUNC	_	2	punct	_	_
21	_	_	NUM	NOUN_NUM	NumForm=Digit	2	nummod	_	_
22	_	_	CCONJ	CONJ	_	21	cc	_	_
23	_	_	NUM	NOUN_NUM	NumForm=Digit	24	obj	_	_
24	_	_	ADV	NOUN_PROP+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	21	advmod	_	_
25	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
26	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	25	nmod:poss	_	_
27	_	l	ADP	PREP	AdpType=Prep	28	case	_	_
28	_	_	NOUN	DET+NOUN+NSUFF_MASC_PL_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	25	obj	_	_
29	_	w	CCONJ	CONJ	_	30	cc	_	_
30	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	28	obj	_	_
31	_	_	ADP	PREP	AdpType=Prep	32	case	_	_
32	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	25	iobj	_	_
33	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	32	nmod:poss	_	_
34	_	_	ADP	PREP	AdpType=Prep	35	case	_	_
35	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	25	iobj	_	_
36	_	_	ADP	PREP	AdpType=Prep	37	case	_	_
37	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	25	iobj	_	_
38	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	37	nmod:poss	_	_
39	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	38	nmod:poss	_	_
40	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	39	nmod:poss	_	_
41	_	_	PUNCT	PUNC	_	2	punct	_	_
42	_	_	ADV	NOUN_PROP+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	advmod	_	_
43	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
44	_	_	NOUN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	43	nmod	_	_
45	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	43	amod	_	_
46	_	_	ADP	PREP	AdpType=Prep	47	case	_	_
47	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	43	obj	_	_
48	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	47	nmod:poss	_	_
49	_	_	ADP	PREP	AdpType=Prep	50	case	_	_
50	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	43	iobj	_	_
51	_	_	PUNCT	PUNC	_	2	punct	_	_
52	_	_	ADV	NOUN_PROP+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	advmod	_	_
53	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	2	nmod	_	_
54	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	53	amod	_	_
55	_	_	ADP	PREP	AdpType=Prep	56	case	_	_
56	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	53	obj	_	_
57	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	56	nmod:poss	_	_
58	_	_	ADP	PREP	AdpType=Prep	59	case	_	_
59	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	53	iobj	_	_
60	_	_	PUNCT	PUNC	_	2	punct	_	_
61	_	_	NUM	NOUN_NUM	NumForm=Digit	2	nummod	_	_
62	_	_	PUNCT	PUNC	_	61	punct	_	_
63	_	_	NUM	NOUN_NUM	NumForm=Digit	64	nummod	_	_
64	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	61	advmod	_	_
65	_	_	ADJ	DET+ADJ_NUM+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	64	amod	_	_
66	_	TBupdate	PROPN	FOREIGN	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
67	_	AwlmbyA	PROPN	ADJ+NSUFF_MASC_DU_NOM_POSS	Case=Nom|Definite=Com|Gender=Masc|Number=Dual	66	flat	_	_
68	_	_	ADP	PREP	AdpType=Prep	69	case	_	_
69	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	66	obj	_	_
70	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	69	nmod:poss	_	_
71	_	_	ADP	PREP	AdpType=Prep	72	case	_	_
72	_	lAs	PROPN	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	66	iobj	_	_
73	_	fygAs	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	72	flat	_	_
74	_	_	PUNCT	PUNC	_	2	punct	_	_
75	_	_	NUM	NOUN_NUM	NumForm=Digit	78	nummod	_	_
76	_	_	PUNCT	PUNC	_	75	punct	_	_
77	_	_	NUM	NOUN_NUM	NumForm=Digit	75	compound	_	_
78	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
79	_	_	PROPN	DET+ADJ_NUM	Definite=Def|Gender=Masc|Number=Sing	78	flat	_	_
80	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
81	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	80	nmod:poss	_	_
82	_	_	ADP	PREP	AdpType=Prep	83	case	_	_
83	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	80	obj	_	_
84	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	83	nmod:poss	_	_
85	_	_	ADP	PREP	AdpType=Prep	86	case	_	_
86	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	80	iobj	_	_
87	_	_	PUNCT	PUNC	_	2	punct	_	_
88	_	_	NUM	NOUN_NUM	NumForm=Digit	2	nummod	_	_
89	_	_	PUNCT	PUNC	_	88	punct	_	_
90	_	_	NUM	NOUN_NUM	NumForm=Digit	88	nummod	_	_
91	_	_	ADP	PREP	AdpType=Prep	92	case	_	_
92	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	88	obj	_	_
93	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
94	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	93	nmod:poss	_	_
95	_	_	ADP	PREP	AdpType=Prep	96	case	_	_
96	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	93	obj	_	_
97	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	96	nmod:poss	_	_
98	_	_	ADP	PREP	AdpType=Prep	99	case	_	_
99	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	93	iobj	_	_
100	_	_	PUNCT	PUNC	_	2	punct	_	_
101	_	_	NUM	NOUN_NUM	NumForm=Digit	104	nummod	_	_
102	_	_	PUNCT	PUNC	_	101	punct	_	_
103	_	_	NUM	NOUN_NUM	NumForm=Digit	104	compound	_	_
104	_	_	ADV	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	advmod	_	_
105	_	_	ADJ	DET+ADJ_NUM+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	104	amod	_	_
106	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
107	_	twfAlws	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	106	nmod:poss	_	_
108	_	kAkwsys	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	107	flat	_	_
109	_	_	ADP	PREP	AdpType=Prep	110	case	_	_
110	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	106	obj	_	_
111	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	110	nmod:poss	_	_
112	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


