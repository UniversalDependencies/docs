---
layout: base
title:  'Statistics of acl in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `acl`

This relation is universal.

46 nodes (0%) are attached to their parents as `acl`.

46 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.23913043478261.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (20; 43% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (16; 35% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (4; 9% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	_	w	CCONJ	CONJ	_	6	cc	_	_
2	_	_	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	6	nmod	_	_
4	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod:poss	_	_
5	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	amod	_	_
6	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Pass	0	root	_	_
7	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
8	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	10	mark	_	_
9	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	10	cop	_	_
10	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	7	acl	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	NOUN	Definite=Ind|Gender=Masc|Number=Sing	10	nmod	_	_
13	_	_	ADV	ADJ+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	12	advmod	_	_
14	_	_	ADP	PREP	AdpType=Prep	15	case	_	_
15	_	_	NOUN	NOUN+NSUFF_FEM_DU_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Dual	13	nmod	_	_
16	_	_	PUNCT	PUNC	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	ADP	PREP	AdpType=Prep	6	case	_	_
5	_	_	SCONJ	SUB_CONJ	_	6	mark	_	_
6	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
7	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	9	mark	_	_
8	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	9	cop	_	_
9	_	_	ADJ	ADJ+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	6	acl	_	_
10	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	9	nmod	_	_
11	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	_
12	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	9	advmod	_	_
13	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	12	nmod:poss	_	_
14	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	13	nmod:poss	_	_
15	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	nmod:poss	_	_
16	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	amod	_	_
17	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	13	appos	_	_
18	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	17	flat:name	_	_
19	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Pass	6	ccomp	_	_
20	_	b	ADP	PREP	AdpType=Prep	21	case	_	_
21	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	19	nmod	_	_
22	_	_	PUNCT	PUNC	_	23	punct	_	_
23	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	21	nmod:poss	_	_
24	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	23	amod	_	_
25	_	_	PUNCT	PUNC	_	23	punct	_	_
26	_	l	ADP	PREP	AdpType=Prep	27	case	_	_
27	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	23	nmod	_	_
28	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	27	amod	_	_
29	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 30 acl	color:blue
1	_	w	CCONJ	CONJ	_	5	cc	_	_
2	_	_	ADV	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	5	advmod	_	_
3	_	_	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
5	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
6	_	_	PROPN	DET+NOUN_PROP	Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	_
7	_	_	SCONJ	SUB_CONJ	_	8	mark	_	_
8	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
9	_	_	PUNCT	PUNC	_	14	punct	_	_
10	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	14	cop	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	14	nsubj	_	_
13	_	_	ADP	PREP	AdpType=Prep	14	case	_	_
14	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	8	nmod	_	_
15	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	nmod:poss	_	_
16	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	14	nsubj	_	_
17	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	16	amod	_	_
18	_	w	CCONJ	CONJ	_	19	cc	_	_
19	_	_	CCONJ	CONJ	_	5	cc	_	_
20	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	21	nmod	_	_
21	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	5	conj	_	_
22	_	_	ADV	ADV	Definite=Ind|Gender=Masc|Number=Sing	21	dep	_	_
23	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	21	nsubj	_	_
24	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	23	amod	_	_
25	_	b	ADP	PREP	AdpType=Prep	26	case	_	_
26	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	23	nmod	_	_
27	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	30	mark	_	_
28	_	_	AUX	PV+PVSUFF_SUBJ:3FS	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	30	cop	_	_
29	_	_	ADP	PREP	AdpType=Prep	30	case	_	_
30	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	26	acl	_	_
31	_	_	ADV	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	21	advmod	_	_
32	_	_	SCONJ	SUB_CONJ	_	33	mark	_	_
33	_	hm	PRON	PRON_3MP	Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	31	nmod:poss	_	_
34	_	_	PART	NEG_PART	Polarity=Neg	35	aux	_	_
35	_	_	VERB	IV3MP+IV+IVSUFF_SUBJ:MP_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Act	33	ccomp	_	_
36	_	_	ADP	PREP	AdpType=Prep	37	case	_	_
37	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	35	nmod	_	_
38	_	_	ADP	PREP	AdpType=Prep	39	case	_	_
39	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	37	nmod	_	_
40	_	b	ADP	PREP	AdpType=Prep	41	case	_	_
41	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	39	nmod	_	_
42	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	41	nmod:poss	_	_
43	_	_	AUX	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	46	cop	_	_
44	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	46	nsubj	_	_
45	_	nA	PRON	POSS_PRON_1P	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=1|PronType=Prs	44	nmod:poss	_	_
46	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	35	ccomp	_	_
47	_	_	ADP	PREP	AdpType=Prep	48	case	_	_
48	_	_	DET	DEM_PRON_MS	Definite=Ind|Gender=Masc|Number=Sing	46	det	_	_
49	_	_	PUNCT	PUNC	_	5	punct	_	_

~~~


