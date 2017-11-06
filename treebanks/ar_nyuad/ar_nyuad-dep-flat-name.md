---
layout: base
title:  'Statistics of flat:name in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ar_nyuad-dep-flat.html">flat</a></tt>.

15524 nodes (2%) are attached to their parents as `flat:name`.

15524 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20085029631538.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt> (15464; 100% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt> (54; 0% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt> (6; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
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
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 flat:name	color:blue
1	_	w	CCONJ	CONJ	_	14	cc	_	_
2	_	_	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	NOUN	NOUN	Definite=Ind|Gender=Masc|Number=Sing	14	nmod	_	_
4	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod:poss	_	_
5	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	amod	_	_
6	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Fem|Number=Sing	7	mark	_	_
7	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	4	ccomp	_	_
8	_	hA	PRON	PVSUFF_DO:3FS	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
10	_	_	ADJ	DET+ADJ+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	_
11	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	9	appos	_	_
12	_	_	PROPN	DET+NOUN_PROP	Definite=Def|Gender=Masc|Number=Sing	11	flat:name	_	_
13	_	_	PUNCT	PUNC	_	14	punct	_	_
14	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
15	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	14	obj	_	_
16	_	b	ADP	PREP	AdpType=Prep	17	case	_	_
17	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	14	nmod	_	_
18	_	_	ADP	PREP	AdpType=Prep	19	case	_	_
19	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	_
20	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	19	nmod	_	_
21	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	19	flat:name	_	_
22	_	_	PROPN	DET+NOUN_PROP	Definite=Def|Gender=Masc|Number=Sing	19	flat:name	_	_
23	_	w	CCONJ	CONJ	_	19	cc	_	_
24	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	19	conj	_	_
25	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	24	amod	_	_
26	_	_	PUNCT	PUNC	_	14	punct	_	_
27	_	_	PUNCT	PUNC	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 flat:name	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	SCONJ	SUB_CONJ	_	7	mark	_	_
4	_	_	PUNCT	PUNC	_	7	punct	_	_
5	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
6	_	_	PART	NEG_PART	Polarity=Neg	7	aux	_	_
7	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:S	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
8	_	_	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	7	nmod	_	_
10	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nmod:poss	_	_
11	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	_
12	_	l	ADP	PREP	AdpType=Prep	13	case	_	_
13	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	11	nmod	_	_
14	_	_	ADJ	DET+ADJ_NUM	Definite=Def|Gender=Masc|Number=Sing	2	parataxis	_	_
15	_	_	ADP	NOUN_NUM+CASE_DEF_GEN	AdpType=Prep|Case=Gen|Definite=Com|Gender=Masc|Number=Sing	16	case	_	_
16	_	_	PROPN	PREP	_	14	nmod	_	_
17	_	_	PUNCT	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	7	punct	_	_
18	_	_	PUNCT	PUNC	_	2	punct	_	_
19	_	,	ADJ	PUNC	_	2	amod	_	_
20	_	_	ADV	ADJ+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	29	advmod	_	_
21	_	_	SCONJ	PREP	_	29	mark	_	_
22	_	_	PUNCT	SUB_CONJ	_	29	punct	_	_
23	_	"	NOUN	PUNC	_	29	nsubj	_	_
24	_	_	ADJ	NOUN+NSUFF_FEM_PL+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	23	amod	_	_
25	_	_	NOUN	ADJ+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Fem|Number=Sing	24	nmod:poss	_	_
26	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	23	nmod	_	_
27	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	26	advmod	_	_
28	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	27	flat:name	_	_
29	_	_	ADJ	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	19	amod	_	_
30	_	_	ADP	ADJ+NSUFF_FEM_SG+CASE_INDEF_NOM	AdpType=Prep|Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	31	case	_	_
31	_	l	VERB	PREP	_	29	xcomp	_	_
32	_	_	NOUN	IV1P+IV+IVSUFF_MOOD:S	Gender=Masc|Mood=Sub|Number=Plur|Person=1|Voice=Act	31	nmod	_	_
33	_	_	ADP	NOUN+CASE_INDEF_ACC	AdpType=Prep|Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	34	case	_	_
34	_	_	NOUN	PREP	_	31	nmod	_	_
35	_	_	DET	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	36	det	_	_
36	_	_	NOUN	DEM_PRON_P	Definite=Ind|Gender=Masc|Number=Plur	34	nmod:poss	_	_
37	_	_	CCONJ	DET+NOUN+NSUFF_MASC_PL_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	34	cc	_	_
38	_	w	NOUN	CONJ	_	34	conj	_	_
39	_	_	ADP	DET+NOUN+CASE_DEF_GEN	AdpType=Prep|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	40	case	_	_
40	_	_	NOUN	PREP	_	38	nmod	_	_
41	_	_	PRON	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	40	nmod:poss	_	_
42	_	hm	ADP	POSS_PRON_3MP	AdpType=Prep|Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3	43	case	_	_
43	_	_	NOUN	PREP	_	38	nmod	_	_
44	_	_	CCONJ	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	43	cc	_	_
45	_	w	NOUN	CONJ	_	43	conj	_	_
46	_	_	PUNCT	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	29	punct	_	_
47	_	_	PUNCT	PUNC	_	2	punct	_	_
48	_	_	NUM	PUNC	_	2	parataxis	_	_

~~~


