

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic-NYUAD)

This relation is universal.

725 nodes (0%) are attached to their parents as `compound`.

725 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.00137931034483.

The following 2 pairs of parts of speech are connected with `compound`: [ar-pos/NUM]()-[ar-pos/NUM]() (724; 100% instances), [ar-pos/NOUN]()-[ar-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	NOUN	DET+ADJ+NSUFF_MASC_PL_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	3	nmod:poss	_	_
5	_	_	ADP	PREP	AdpType=Prep	6	case	_	_
6	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
7	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	6	nmod:poss	_	_
8	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	flat:name	_	_
9	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	obj	_	_
10	_	_	NUM	NOUN_NUM	NumForm=Digit	11	compound	_	_
11	_	_	NUM	NOUN_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	12	nummod	_	_
12	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	9	nmod:poss	_	_
13	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	9	advmod	_	_
14	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	13	nmod:poss	_	_
15	_	_	NUM	NOUN_NUM+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing|NumForm=Word	16	compound	_	_
16	_	_	NUM	NOUN_NUM+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	17	nummod	_	_
17	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	13	nmod	_	_
18	_	_	SCONJ	SUB_CONJ	_	20	mark	_	_
19	_	_	PART	NEG_PART	Polarity=Neg	20	aux	_	_
20	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
21	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	20	nsubj	_	_
22	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	amod	_	_
23	_	l	ADP	PREP	AdpType=Prep	24	case	_	_
24	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	21	nmod	_	_
25	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	24	nmod:poss	_	_
26	_	None	PART	NOUN	Definite=Ind|Gender=Masc|Number=Sing	29	dep	_	_
27	_	_	ADP	PREP	AdpType=Prep	29	case	_	_
28	_	_	NUM	NOUN_NUM	NumForm=Digit	29	nummod	_	_
29	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	20	nmod	_	_
30	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 43 compound	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	l	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
5	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	4	amod	_	_
6	_	_	SCONJ	SUB_CONJ	_	7	mark	_	_
7	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	csubj	_	_
8	_	_	ADJ	ADJ_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	7	amod	_	_
9	_	_	ADP	PREP	AdpType=Prep	10	case	_	_
10	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	8	nmod	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
13	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	12	amod	_	_
14	_	_	SCONJ	SUB_CONJ	_	15	mark	_	_
15	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
16	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	15	ccomp	_	_
17	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Fem|Number=Sing	16	obj	_	_
18	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	17	nmod:poss	_	_
19	_	_	PUNCT	PUNC	_	20	punct	_	_
20	_	_	PROPN	DET+NOUN_PROP	Definite=Def|Gender=Masc|Number=Sing	18	nmod:poss	_	_
21	_	_	PUNCT	PUNC	_	20	punct	_	_
22	_	l	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	16	nmod	_	_
24	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	23	nmod:poss	_	_
25	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	24	amod	_	_
26	_	_	PUNCT	PUNC	_	15	punct	_	_
27	_	f	CCONJ	CONJ	_	15	cc	_	_
28	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	15	conj	_	_
29	_	_	ADP	PREP	AdpType=Prep	30	case	_	_
30	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	28	nmod	_	_
31	_	w	CCONJ	CONJ	_	15	cc	_	_
32	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	15	conj	_	_
33	_	_	ADP	PREP	AdpType=Prep	34	case	_	_
34	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	32	nmod	_	_
35	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	32	obj	_	_
36	_	_	ADP	PREP	AdpType=Prep	37	case	_	_
37	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	35	nmod	_	_
38	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	37	nmod:poss	_	_
39	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	37	amod	_	_
40	_	_	PUNCT	PUNC	_	2	punct	_	_
41	_	_	PART	FOCUS_PART	_	45	mark	_	_
42	_	_	DET	DET	_	43	det	_	_
43	_	_	NUM	NOUN_NUM	NumForm=Digit	45	compound	_	_
44	_	_	NUM	NOUN_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	45	nummod	_	_
45	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	2	parataxis	_	_
46	_	l	ADP	PREP	AdpType=Prep	47	case	_	_
47	_	kwlwskwf	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	45	nmod	_	_
48	_	_	PUNCT	PUNC	_	45	punct	_	_
49	_	f	PART	CONNEC_PART	_	45	nmod	_	_
50	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	45	ccomp	_	_
51	_	_	SCONJ	SUB_CONJ	_	52	mark	_	_
52	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	45	obj	_	_
53	_	_	PART	NEG_PART	Polarity=Neg	54	aux	_	_
54	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:J	Aspect=Imp|Gender=Masc|Mood=Jus|Number=Sing|Person=3|Voice=Act	52	xcomp	_	_
55	_	b	ADP	PREP	AdpType=Prep	56	case	_	_
56	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	54	nmod	_	_
57	_	hA	PRON	POSS_PRON_3FS	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	56	nmod:poss	_	_
58	_	_	ADP	PREP	AdpType=Prep	59	case	_	_
59	_	_	ADV	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	56	advmod	_	_
60	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	59	nmod:poss	_	_
61	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	60	nmod:poss	_	_
62	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	61	amod	_	_
63	_	_	ADP	PREP	AdpType=Prep	64	case	_	_
64	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	61	nmod	_	_
65	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	64	amod	_	_
66	_	_	PUNCT	PUNC	_	45	punct	_	_

~~~


