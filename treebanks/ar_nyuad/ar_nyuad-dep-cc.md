---
layout: base
title:  'Statistics of cc in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `cc`

This relation is universal.

48771 nodes (7%) are attached to their parents as `cc`.

47241 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.55561706751963.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (19347; 40% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (19117; 39% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (3512; 7% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (3333; 7% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (1343; 3% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (1311; 3% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (593; 1% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (54; 0% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (54; 0% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (48; 0% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (36; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (21; 0% instances), <tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 28 cc	color:blue
1	_	w	CCONJ	CONJ	_	5	cc	_	_
2	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	5	cop	_	_
3	_	_	NOUN	NOUN+NSUFF_MASC_PL_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	5	nsubj	_	_
4	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	amod	_	_
5	_	_	VERB	PV+PVSUFF_SUBJ:3MP	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Act	0	root	_	_
6	_	l	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	5	obj	_	_
8	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	nmod:poss	_	_
9	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	flat	_	_
10	_	_	ADP	PREP	AdpType=Prep	11	case	_	_
11	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	5	iobj	_	_
12	_	_	ADJ	ADJ	Definite=Ind|Gender=Masc|Number=Sing	11	amod	_	_
13	_	_	SCONJ	SUB_CONJ	_	14	mark	_	_
14	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	iobj	_	_
15	_	s	AUX	FUT_PART	_	16	aux	_	_
16	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	14	ccomp	_	_
17	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	16	nsubj	_	_
18	_	_	NOUN	NOUN_QUANT+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	17	nmod:poss	_	_
19	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	18	nmod:poss	_	_
20	_	_	ADP	PREP	AdpType=Prep	21	case	_	_
21	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	obj	_	_
22	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	16	nmod	_	_
23	_	_	ADP	PREP	AdpType=Prep	25	case	_	_
24	_	_	NUM	NOUN_NUM	NumForm=Digit	25	nummod	_	_
25	_	_	ADV	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	22	obj	_	_
26	_	_	PUNCT	PUNC	_	25	punct	_	_
27	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	25	appos	_	_
28	_	w	CCONJ	CONJ	_	30	cc	_	_
29	_	l	ADP	PREP	AdpType=Prep	30	case	_	_
30	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	25	obj	_	_
31	_	_	ADV	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	30	advmod	_	_
32	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	31	nmod:poss	_	_
33	_	_	PUNCT	PUNC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cc	color:blue
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


