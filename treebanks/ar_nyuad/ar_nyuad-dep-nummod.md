---
layout: base
title:  'Statistics of nummod in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `nummod`

This relation is universal.

13611 nodes (2%) are attached to their parents as `nummod`.

7182 instances of `nummod` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27360223348762.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (7198; 53% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (2309; 17% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (1587; 12% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (926; 7% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (877; 6% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (639; 5% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (36; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	PUNCT	PUNC	_	6	punct	_	_
5	_	_	NUM	NOUN_NUM	NumForm=Digit	6	nummod	_	_
6	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
7	_	_	PUNCT	PUNC	_	6	punct	_	_
8	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	nmod	_	_
9	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod:poss	_	_
10	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	2	obj	_	_
11	_	_	ADJ	ADJ+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	amod	_	_
12	_	_	ADP	PREP	AdpType=Prep	13	case	_	_
13	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	11	obj	_	_
14	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	13	nmod:poss	_	_
15	_	_	PUNCT	PUNC	_	16	punct	_	_
16	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	13	nmod	_	_
17	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	16	nmod	_	_
18	_	_	PUNCT	PUNC	_	16	punct	_	_
19	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	advmod	_	_
20	_	_	SCONJ	SUB_CONJ	_	21	mark	_	_
21	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	19	ccomp	_	_
22	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	21	obj	_	_
23	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	22	nmod:poss	_	_
24	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	23	nmod:poss	_	_
25	_	gryhAwnd	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	24	nmod:poss	_	_
26	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	23	amod	_	_
27	_	_	PRON	REL_PRON	Definite=Ind|Gender=Fem|Number=Sing	23	nmod	_	_
28	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	27	xcomp	_	_
29	_	_	NOUN	NOUN_QUANT+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	28	obj	_	_
30	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	29	nmod:poss	_	_
31	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	30	amod	_	_
32	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 nummod	color:blue
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


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 nummod	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	3	nmod:poss	_	_
5	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	advmod	_	_
6	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	5	nmod:poss	_	_
7	_	_	NOUN	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod:poss	_	_
8	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	_
9	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	flat	_	_
10	_	w	CCONJ	CONJ	_	11	cc	_	_
11	_	sAndwn	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	obj	_	_
12	_	stwl	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	11	flat	_	_
13	_	_	ADP	PREP	AdpType=Prep	14	case	_	_
14	_	_	NOUN	DET+NOUN+NSUFF_MASC_DU_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Dual	6	obj	_	_
15	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	14	nmod	_	_
16	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	15	flat	_	_
17	_	w	CCONJ	CONJ	_	18	cc	_	_
18	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	15	obj	_	_
19	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	18	flat	_	_
20	_	_	NUM	NOUN_NUM	NumForm=Digit	22	nummod	_	_
21	_	_	PUNCT	PUNC	_	22	punct	_	_
22	_	_	NUM	NOUN_NUM	NumForm=Digit	6	nummod	_	_
23	_	_	PUNCT	PUNC	_	22	punct	_	_
24	_	_	CCONJ	CONJ	_	22	cc	_	_
25	_	_	NUM	NOUN_NUM	NumForm=Digit	22	nummod	_	_
26	_	_	CCONJ	CONJ	_	22	cc	_	_
27	_	_	NUM	NOUN_NUM	NumForm=Digit	22	nummod	_	_
28	_	_	CCONJ	CONJ	_	22	cc	_	_
29	_	_	NUM	NOUN_NUM	NumForm=Digit	22	nummod	_	_
30	_	_	CCONJ	CONJ	_	22	cc	_	_
31	_	_	NUM	NOUN_NUM	NumForm=Digit	22	nummod	_	_
32	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


