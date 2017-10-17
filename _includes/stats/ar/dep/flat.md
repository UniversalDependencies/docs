

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic-NYUAD)

This relation is universal.
There are 1 language-specific subtypes of `flat`: [flat:name]().

901 nodes (0%) are attached to their parents as `flat`.

864 instances of `flat` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48945615982242.

The following 21 pairs of parts of speech are connected with `flat`: [ar-pos/NOUN]()-[ar-pos/PROPN]() (194; 22% instances), [ar-pos/VERB]()-[ar-pos/PROPN]() (167; 19% instances), [ar-pos/PROPN]()-[ar-pos/NUM]() (149; 17% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (135; 15% instances), [ar-pos/PROPN]()-[ar-pos/ADJ]() (38; 4% instances), [ar-pos/NOUN]()-[ar-pos/NUM]() (30; 3% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (29; 3% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (26; 3% instances), [ar-pos/NUM]()-[ar-pos/PROPN]() (24; 3% instances), [ar-pos/ADV]()-[ar-pos/PROPN]() (22; 2% instances), [ar-pos/ADJ]()-[ar-pos/PROPN]() (21; 2% instances), [ar-pos/PROPN]()-[ar-pos/NOUN]() (18; 2% instances), [ar-pos/NUM]()-[ar-pos/NOUN]() (13; 1% instances), [ar-pos/PUNCT]()-[ar-pos/PROPN]() (11; 1% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (8; 1% instances), [ar-pos/PROPN]()-[ar-pos/PROPN]() (8; 1% instances), [ar-pos/CCONJ]()-[ar-pos/NUM]() (3; 0% instances), [ar-pos/CCONJ]()-[ar-pos/NOUN]() (2; 0% instances), [ar-pos/ADV]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/CCONJ]()-[ar-pos/PROPN]() (1; 0% instances), [ar-pos/X]()-[ar-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 25 flat	color:blue
1	_	w	CCONJ	CONJ	_	5	cc	_	_
2	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	5	cop	_	_
3	_	_	NOUN	NOUN+NSUFF_MASC_PL_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	5	nsubj	_	_
4	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	amod	_	_
5	_	_	VERB	PV+PVSUFF_SUBJ:3MP	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Act	0	root	_	_
6	_	l	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	5	nmod	_	_
8	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	nmod:poss	_	_
9	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	flat:name	_	_
10	_	_	ADP	PREP	AdpType=Prep	11	case	_	_
11	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
12	_	_	ADJ	ADJ	Definite=Ind|Gender=Masc|Number=Sing	11	amod	_	_
13	_	_	SCONJ	SUB_CONJ	_	14	mark	_	_
14	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
15	_	s	PART	FUT_PART	_	16	aux	_	_
16	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	14	ccomp	_	_
17	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	16	nsubj	_	_
18	_	_	NOUN	NOUN_QUANT+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	17	nmod:poss	_	_
19	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	18	nmod:poss	_	_
20	_	_	ADP	PREP	AdpType=Prep	21	case	_	_
21	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	nmod	_	_
22	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	16	nmod	_	_
23	_	_	ADP	PREP	AdpType=Prep	25	case	_	_
24	_	_	NUM	NOUN_NUM	NumForm=Digit	25	nummod	_	_
25	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	22	flat	_	_
26	_	_	PUNCT	PUNC	_	25	punct	_	_
27	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	25	appos	_	_
28	_	w	CCONJ	CONJ	_	25	cc	_	_
29	_	l	ADP	PREP	AdpType=Prep	30	case	_	_
30	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	25	conj	_	_
31	_	_	ADV	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	30	advmod	_	_
32	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	31	nmod:poss	_	_
33	_	_	PUNCT	PUNC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 flat	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nsubj	_	_
4	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	nmod:poss	_	_
5	_	_	SCONJ	SUB_CONJ	_	6	mark	_	_
6	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
7	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Pass	6	ccomp	_	_
8	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	_
9	_	_	ADP	PREP	AdpType=Prep	10	case	_	_
10	_	_	NOUN	NOUN+NSUFF_FEM_DU_GEN_POSS	Case=Gen|Definite=Com|Gender=Fem|Number=Dual	7	nmod	_	_
11	_	_	NOUN	NOUN+NSUFF_MASC_DU_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Dual	10	nmod:poss	_	_
12	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3MD	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Dual|Person=3|Voice=Pass	11	ccomp	_	_
13	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	12	advmod	_	_
14	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	nmod:poss	_	_
15	_	_	ADP	PREP	AdpType=Prep	17	case	_	_
16	_	_	NUM	NOUN_NUM	NumForm=Digit	17	nummod	_	_
17	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	12	flat	_	_
18	_	_	PUNCT	PUNC	_	17	punct	_	_
19	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	17	appos	_	_
20	_	_	ADP	PREP	AdpType=Prep	21	case	_	_
21	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	_
22	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	tybsh	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	_
24	_	_	ADP	PREP	AdpType=Prep	26	case	_	_
25	_	_	ADJ	NOUN	Definite=Ind|Gender=Masc|Number=Sing	26	amod	_	_
26	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	23	nmod	_	_
27	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	26	amod	_	_
28	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 flat	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	DET	DEM_PRON_F	Definite=Ind|Gender=Fem|Number=Sing	4	det	_	_
4	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	_
5	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	2	obj	_	_
6	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	5	amod	_	_
7	_	_	ADP	PREP	AdpType=Prep	8	case	_	_
8	_	_	NOUN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
9	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	amod	_	_
10	_	_	ADP	PREP	AdpType=Prep	11	case	_	_
11	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
12	_	_	PUNCT	PUNC	_	11	punct	_	_
13	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	11	appos	_	_
14	_	_	NUM	NOUN_NUM	NumForm=Digit	11	flat	_	_
15	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
16	_	_	ADJ	ADJ_COMP+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	15	obj	_	_
17	_	_	ADP	PREP	AdpType=Prep	19	case	_	_
18	_	_	NUM	NOUN_NUM	NumForm=Digit	19	nummod	_	_
19	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	16	nmod	_	_
20	_	_	ADP	PREP	AdpType=Prep	21	case	_	_
21	_	_	NOUN	DET+NOUN+NSUFF_MASC_DU_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Dual	15	nmod	_	_
22	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	amod	_	_
23	_	w	CCONJ	CONJ	_	22	cc	_	_
24	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	22	conj	_	_
25	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


