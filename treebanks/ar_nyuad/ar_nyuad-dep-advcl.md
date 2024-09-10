---
layout: base
title:  'Statistics of advcl in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `advcl`

This relation is universal.

2 nodes (0%) are attached to their parents as `advcl`.

2 instances of `advcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.

The following 1 pairs of parts of speech are connected with `advcl`: <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 20 advcl	color:blue
1	_	w	CCONJ	CONJ	_	4	cc	_	_
2	_	_	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	NOUN	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	4	obj	_	_
4	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
5	_	_	NOUN	NOUN+NSUFF_MASC_PL_NOM_POSS	Case=Nom|Definite=Com|Gender=Masc|Number=Plur	4	nsubj	_	_
6	_	_	PROPN	DET+NOUN_PROP	Definite=Def|Gender=Masc|Number=Sing	5	nmod:poss	_	_
7	_	_	ADP	PREP	AdpType=Prep	8	case	_	_
8	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	4	iobj	_	_
9	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	8	nmod:poss	_	_
10	_	b	ADP	PREP	AdpType=Prep	11	case	_	_
11	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	4	iobj	_	_
12	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	11	nmod:poss	_	_
13	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod:poss	_	_
14	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	_
15	_	w	CCONJ	CONJ	_	16	cc	_	_
16	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	14	obj	_	_
17	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	14	nmod	_	_
18	_	w	CCONJ	CONJ	_	20	cc	_	_
19	_	_	AUX	PSEUDO_VERB	_	20	obj	_	_
20	_	hm	PRON	PRON_3MP	Definite=Def|Gender=Masc|Number=Plur|Person=3	4	advcl	_	_
21	_	_	ADJ	ADJ+NSUFF_MASC_PL_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	20	amod	_	_
22	_	l	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	obj	_	_
24	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	23	advmod	_	_
25	_	hmA	PRON	POSS_PRON_3D	Case=Gen|Definite=Def|Gender=Masc|Number=Dual|Person=3|PronType=Prs	24	nmod:poss	_	_
26	_	b	ADP	PREP	AdpType=Prep	27	case	_	_
27	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	23	obj	_	_
28	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	27	amod	_	_
29	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	27	advmod	_	_
30	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	29	nmod:poss	_	_
31	_	_	CCONJ	CONJ	_	32	cc	_	_
32	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	30	obj	_	_
33	_	f	CCONJ	CONJ	_	20	cc	_	_
34	_	_	PRON	PRON_3D	Case=Nom|Definite=Ind|Gender=Masc|Number=Dual|Person=3|PronType=Prs	20	nsubj	_	_
35	_	_	AUX	PV+PVSUFF_SUBJ:3MD	Gender=Masc|Mood=Ind|Number=Dual|Person=3|Voice=Act	34	cop	_	_
36	_	w	CCONJ	CONJ	_	38	obj	_	_
37	_	_	ADV	NEG_PART	Polarity=Neg	38	advmod	_	_
38	_	_	VERB	IV3MD+IV+IVSUFF_SUBJ:D_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Dual|Person=3|Voice=Act	34	ccomp	_	_
39	_	_	ADJ	ADJ_COMP+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	38	amod	_	_
40	_	_	NOUN	DET+NOUN+NSUFF_MASC_PL_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	39	nmod	_	_
41	_	_	ADP	PREP	AdpType=Prep	42	case	_	_
42	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	39	obj	_	_
43	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	42	nmod:poss	_	_
44	_	w	CCONJ	CONJ	_	47	cc	_	_
45	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	47	nsubj	_	_
46	_	hmA	PRON	POSS_PRON_3D	Case=Gen|Definite=Def|Gender=Masc|Number=Dual|Person=3|PronType=Prs	45	nmod:poss	_	_
47	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	38	obj	_	_
48	_	w	CCONJ	CONJ	_	50	cc	_	_
49	_	_	ADV	NEG_PART	Polarity=Neg	50	advmod	_	_
50	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:S	Aspect=Imp|Gender=Fem|Mood=Sub|Number=Sing|Person=3|Voice=Act	47	xcomp	_	_
51	_	w	CCONJ	CONJ	_	53	cc	_	_
52	_	_	AUX	PSEUDO_VERB	_	53	obj	_	_
53	_	hm	PRON	PRON_3MP	Definite=Def|Gender=Masc|Number=Plur|Person=3	50	nsubj	_	_
54	_	_	VERB	IV3MP+IV+IVSUFF_SUBJ:MP_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Act	53	ccomp	_	_
55	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	54	obj	_	_
56	_	hmA	PRON	POSS_PRON_3D	Case=Gen|Definite=Def|Gender=Masc|Number=Dual|Person=3|PronType=Prs	55	nmod:poss	_	_
57	_	l	ADP	PREP	AdpType=Prep	58	case	_	_
58	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	55	obj	_	_
59	_	hmA	PRON	POSS_PRON_3D	Case=Gen|Definite=Def|Gender=Masc|Number=Dual|Person=3|PronType=Prs	58	nmod:poss	_	_
60	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	58	amod	_	_
61	_	_	PUNCT	PUNC	_	4	punct	_	_

~~~


