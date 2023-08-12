---
layout: base
title:  'Statistics of aux in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `aux`

This relation is universal.

3574 nodes (0%) are attached to their parents as `aux`.

3524 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34695019585898.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (3192; 89% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (202; 6% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (96; 3% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (34; 1% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (32; 1% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	SCONJ	SUB_CONJ	_	7	mark	_	_
4	_	_	PUNCT	PUNC	_	7	punct	_	_
5	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Fem|Number=Sing	7	nsubj	_	_
6	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod:poss	_	_
7	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Pass	2	ccomp	_	_
8	_	_	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_
10	_	_	PUNCT	PUNC	_	7	punct	_	_
11	_	w	CCONJ	CONJ	_	13	cc	_	_
12	_	_	AUX	VERB_PART	_	13	aux	_	_
13	_	_	VERB	PV+PVSUFF_SUBJ:1P	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=1|Voice=Act	7	ccomp	_	_
14	_	_	ADP	PREP	AdpType=Prep	15	case	_	_
15	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	13	obj	_	_
16	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	15	nmod:poss	_	_
17	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	16	nmod:poss	_	_
18	_	w	CCONJ	CONJ	_	19	cc	_	_
19	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	7	ccomp	_	_
20	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	19	nsubj	_	_
21	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	20	nmod:poss	_	_
22	_	_	PUNCT	PUNC	_	7	punct	_	_
23	_	w	CCONJ	CONJ	_	24	cc	_	_
24	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	7	ccomp	_	_
25	_	_	ADP	PREP	AdpType=Prep	26	case	_	_
26	_	hm	PRON	PRON_3MP	Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	24	obj	_	_
27	_	_	NOUN	NOUN	Definite=Ind|Gender=Masc|Number=Sing	24	nsubj	_	_
28	_	_	PUNCT	PUNC	_	7	punct	_	_
29	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 31 aux	color:blue
1	_	w	CCONJ	CONJ	_	11	cc	_	_
2	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	11	cop	_	_
3	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	_
4	_	_	ADJ	DET+ADJ+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	amod	_	_
5	_	l	ADP	PREP	AdpType=Prep	6	case	_	_
6	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	obj	_	_
7	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	amod	_	_
8	_	l	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	obj	_	_
10	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	amod	_	_
11	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
12	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	11	nmod	_	_
13	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod:poss	_	_
14	_	_	SCONJ	SUB_CONJ	_	15	mark	_	_
15	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	11	obj	_	_
16	_	_	PRON	REL_PRON	Definite=Ind|Gender=Fem|Number=Sing	15	nmod	_	_
17	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	16	ccomp	_	_
18	_	hA	PRON	IVSUFF_DO:3FS	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	17	obj	_	_
19	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	17	nsubj	_	_
20	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	19	amod	_	_
21	_	_	ADP	PREP	AdpType=Prep	22	case	_	_
22	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	17	iobj	_	_
23	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	22	nmod:poss	_	_
24	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	23	nmod:poss	_	_
25	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	24	nmod:poss	_	_
26	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	24	advmod	_	_
27	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	26	nmod:poss	_	_
28	_	w	CCONJ	CONJ	_	29	cc	_	_
29	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	27	obj	_	_
30	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	29	amod	_	_
31	_	_	AUX	VERB_PART	_	15	aux	_	_
32	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	15	xcomp	_	_
33	_	_	PUNCT	PUNC	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 aux	color:blue
1	_	w	CCONJ	CONJ	_	3	cc	_	_
2	_	s	AUX	FUT_PART	_	3	aux	_	_
3	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
4	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	3	nsubj	_	_
5	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	4	nmod:poss	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	4	obj	_	_
8	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
9	_	lwsyAnw	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
10	_	bwrty	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	9	flat	_	_
11	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	3	nmod	_	_
12	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	11	nmod:poss	_	_
13	_	_	ADP	PREP	AdpType=Prep	14	case	_	_
14	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	obj	_	_
15	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
16	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	_
17	_	_	PUNCT	PUNC	_	3	punct	_	_
18	_	_	PRON	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	3	iobj	_	_
19	_	s	AUX	FUT_PART	_	21	aux	_	_
20	_	_	AUX	IV3MS+IV+IVSUFF_MOOD:I	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	21	cop	_	_
21	_	_	ADJ	ADJ_NUM	Definite=Ind|Gender=Masc|Number=Sing	18	acl	_	_
22	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	21	nmod	_	_
23	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	nmod:poss	_	_
24	_	_	ADP	PREP	AdpType=Prep	25	case	_	_
25	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	21	obj	_	_
26	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	25	nmod:poss	_	_
27	_	_	PROPN	DET+NOUN_PROP	Definite=Def|Gender=Masc|Number=Sing	26	nmod:poss	_	_
28	_	_	NUM	NOUN_NUM+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|NumForm=Word	27	nummod	_	_
29	_	_	PUNCT	PUNC	_	3	punct	_	_

~~~


