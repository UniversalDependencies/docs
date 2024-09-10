---
layout: base
title:  'Statistics of conj in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `conj`

This relation is universal.

3 nodes (0%) are attached to their parents as `conj`.

3 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `conj`: <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (2; 67% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 51 53 conj	color:blue
1	_	_	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	3	nmod:poss	_	_
5	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	4	nmod:poss	_	_
6	_	w	CCONJ	CONJ	_	7	cc	_	_
7	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	obj	_	_
8	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
9	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	flat	_	_
10	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
11	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	10	ccomp	_	_
12	_	_	ADP	PREP	AdpType=Prep	13	case	_	_
13	_	hA	PRON	PRON_3FS	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
14	_	_	ADP	PREP	AdpType=Prep	16	case	_	_
15	_	_	SCONJ	SUB_CONJ	_	16	mark	_	_
16	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	iobj	_	_
17	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	16	advmod	_	_
18	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	17	nmod:poss	_	_
19	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	nmod:poss	_	_
20	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	19	amod	_	_
21	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	16	ccomp	_	_
22	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	21	nsubj	_	_
23	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	22	nmod:poss	_	_
24	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	23	amod	_	_
25	_	_	PRON	REL_PRON	Definite=Ind|Gender=Fem|Number=Sing	23	nmod	_	_
26	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	25	ccomp	_	_
27	_	_	ADP	PREP	AdpType=Prep	28	case	_	_
28	_	hA	PRON	PRON_3FS	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	26	obj	_	_
29	_	_	PROPN	NOUN_PROP+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	26	nsubj	_	_
30	_	_	ADP	PREP	AdpType=Prep	31	case	_	_
31	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	26	iobj	_	_
32	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	21	advmod	_	_
33	_	_	NUM	NOUN_NUM	NumForm=Digit	35	nummod	_	_
34	_	_	NUM	NOUN_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	33	compound	_	_
35	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	32	nmod:poss	_	_
36	_	_	ADJ	ADJ+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	35	amod	_	_
37	_	_	PUNCT	PUNC	_	32	punct	_	_
38	_	_	VERB	IV3FS+IV_PASS+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Pass	32	ccomp	_	_
39	_	_	ADP	PREP	AdpType=Prep	40	case	_	_
40	_	hA	PRON	PRON_3FS	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	38	obj	_	_
41	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	38	nsubj	_	_
42	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	41	amod	_	_
43	_	_	ADP	PREP	AdpType=Prep	44	case	_	_
44	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	42	obj	_	_
45	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	44	nmod:poss	_	_
46	_	w	CCONJ	CONJ	_	47	cc	_	_
47	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	44	obj	_	_
48	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	47	amod	_	_
49	_	b	ADP	PREP	AdpType=Prep	50	case	_	_
50	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	41	obj	_	_
51	_	_	NUM	NOUN_NUM+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|NumForm=Word	54	nummod	_	_
52	_	_	CCONJ	CONJ	_	53	cc	_	_
53	_	_	NUM	NOUN_NUM	NumForm=Digit	51	conj	_	_
54	_	_	NUM	NOUN_NUM+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	50	nmod:poss	_	_
55	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	54	obj	_	_
56	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 conj	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	_
4	_	_	SCONJ	SUB_CONJ	_	2	mark	_	_
5	_	_	AUX	IV3FS+IV+IVSUFF_MOOD:S	Gender=Fem|Mood=Sub|Number=Sing|Person=3|Voice=Act	6	cop	_	_
6	_	_	NOUN	NOUN_QUANT+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	dep	_	_
7	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod:poss	_	_
8	_	_	ADJ	DET+ADJ+NSUFF_MASC_PL_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	7	amod	_	_
9	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	6	amod	_	_
10	_	w	CCONJ	CONJ	_	11	cc	_	_
11	_	_	NOUN	NOUN_QUANT+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	6	conj	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	11	nmod:poss	_	_
13	_	_	ADJ	DET+ADJ+NSUFF_MASC_PL_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	12	amod	_	_
14	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	11	amod	_	_
15	_	_	PUNCT	PUNC	_	11	punct	_	_
16	_	f	CCONJ	CONJ	_	17	cc	_	_
17	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	11	ccomp	_	_
18	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	17	nsubj	_	_
19	_	"	PUNCT	PUNC	_	20	punct	_	_
20	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	nmod:poss	_	_
21	_	"	PUNCT	PUNC	_	20	punct	_	_
22	_	w	CCONJ	CONJ	_	23	cc	_	_
23	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	18	obj	_	_
24	_	_	NOUN	NOUN+CASE_DEF_GEN	AdpType=Prep|Case=Gen|Definite=Com|Gender=Masc|Number=Sing	23	nmod:poss	_	_
25	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	24	nmod:poss	_	_
26	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	AdpType=Prep|Case=Acc|Definite=Com|Gender=Fem|Number=Sing	17	obj	_	_
27	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	26	nmod:poss	_	_
28	_	b	ADP	PREP	_	29	case	_	_
29	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	26	obj	_	_
30	_	_	ADP	PREP	_	31	case	_	_
31	_	_	NOUN	DET+ADJ+NSUFF_MASC_PL_GEN	AdpType=Prep|Case=Gen|Definite=Def|Gender=Masc|Number=Plur	29	obj	_	_
32	_	w	CCONJ	CONJ	_	33	cc	_	_
33	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	17	ccomp	_	_
34	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	33	nsubj	_	_
35	_	b	ADP	PREP	_	36	case	_	_
36	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	33	obj	_	_
37	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	36	nmod:poss	_	_
38	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	37	amod	_	_
39	_	.	PUNCT	PUNC	_	2	punct	_	_

~~~


