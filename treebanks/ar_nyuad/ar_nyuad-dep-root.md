---
layout: base
title:  'Statistics of root in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `root`

This relation is universal.

19738 nodes (3%) are attached to their parents as `root`.

19738 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55638869186341.

The following 15 pairs of parts of speech are connected with `root`: -<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (13954; 71% instances), -<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (2558; 13% instances), -<tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt> (1576; 8% instances), -<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (375; 2% instances), -<tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt> (348; 2% instances), -<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (317; 2% instances), -<tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt> (271; 1% instances), -<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (185; 1% instances), -<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (41; 0% instances), -<tt><a href="ar_nyuad-pos-PUNCT.html">PUNCT</a></tt> (40; 0% instances), -<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (37; 0% instances), -<tt><a href="ar_nyuad-pos-PART.html">PART</a></tt> (23; 0% instances), -<tt><a href="ar_nyuad-pos-X.html">X</a></tt> (11; 0% instances), -<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), -<tt><a href="ar_nyuad-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	_	w	CCONJ	CONJ	_	3	cc	_	_
2	_	_	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	_	_	SCONJ	SUB_CONJ	_	5	mark	_	_
5	_	_	VERB	IV3MS+IV_PASS+IVSUFF_MOOD:S	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Voice=Pass	3	xcomp	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	obj	_	_
8	_	_	NOUN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
9	_	_	PUNCT	PUNC	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	_	_	NUM	NOUN_NUM	NumForm=Digit	1	nummod	_	_
3	_	_	PUNCT	PUNC	_	4	punct	_	_
4	_	_	PROPN	ABBREV	_	1	nmod	_	_
5	_	_	PROPN	ABBREV	_	4	flat	_	_
6	_	_	PUNCT	PUNC	_	4	punct	_	_
7	_	_	PUNCT	PUNC	_	1	punct	_	_
8	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	1	ccomp	_	_
9	_	_	NOUN	NOUN+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	8	nsubj	_	_
10	_	_	ADJ	ADJ+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	9	amod	_	_
11	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	11	nmod	_	_
13	_	_	SCONJ	SUB_CONJ	_	15	mark	_	_
14	_	_	NUM	NOUN_NUM	NumForm=Digit	15	nummod	_	_
15	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	8	obj	_	_
16	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	15	advmod	_	_
17	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	16	nmod:poss	_	_
18	_	_	NUM	NOUN_NUM	NumForm=Digit	16	nummod	_	_
19	_	_	ADP	PREP	AdpType=Prep	20	case	_	_
20	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	18	obj	_	_
21	_	_	NOUN	NOUN	Definite=Ind|Gender=Masc|Number=Sing	20	nmod:poss	_	_
22	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	nmod:poss	_	_
23	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3MP	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Pass	15	ccomp	_	_
24	_	w	CCONJ	CONJ	_	25	cc	_	_
25	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Pass	15	ccomp	_	_
26	_	_	NUM	NOUN_NUM+NSUFF_FEM_SG+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumForm=Word	27	nummod	_	_
27	_	_	ADJ	ADJ+NSUFF_MASC_PL_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	25	nsubj	_	_
28	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	25	advmod	_	_
29	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	28	nmod:poss	_	_
30	_	w	CCONJ	CONJ	_	31	cc	_	_
31	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	29	obj	_	_
32	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	25	advmod	_	_
33	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	32	nmod:poss	_	_
34	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	33	nmod:poss	_	_
35	_	_	ADP	PREP	AdpType=Prep	36	case	_	_
36	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	33	obj	_	_
37	_	_	PUNCT	PUNC	_	1	punct	_	_

~~~


