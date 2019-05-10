---
layout: base
title:  'Statistics of xcomp in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `xcomp`

This relation is universal.

14575 nodes (2%) are attached to their parents as `xcomp`.

14536 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.2483704974271.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (4729; 32% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (4528; 31% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (3779; 26% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (484; 3% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (403; 3% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (226; 2% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (142; 1% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (122; 1% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (52; 0% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (29; 0% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (25; 0% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (18; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (17; 0% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (15; 0% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 19 xcomp	color:blue
1	_	_	VERB	IV3MS+IV_PASS+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Pass	0	root	_	_
2	_	_	ADP	PREP	AdpType=Prep	4	case	_	_
3	_	_	SCONJ	SUB_CONJ	_	4	mark	_	_
4	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	1	obj	_	_
5	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	4	nmod:poss	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	4	obj	_	_
8	_	_	PUNCT	PUNC	_	4	punct	_	_
9	_	_	PUNCT	PUNC	_	4	punct	_	_
10	_	_	NUM	NOUN_NUM+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing|NumForm=Word	11	nummod	_	_
11	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
12	_	_	ADP	PREP	AdpType=Prep	13	case	_	_
13	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	11	obj	_	_
14	_	_	ADP	PREP	AdpType=Prep	16	case	_	_
15	_	_	NUM	NOUN_NUM	NumForm=Digit	16	nummod	_	_
16	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	11	iobj	_	_
17	_	_	PUNCT	PUNC	_	4	punct	_	_
18	_	_	PUNCT	PUNC	_	4	punct	_	_
19	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	4	xcomp	_	_
20	_	_	ADP	PREP	AdpType=Prep	21	case	_	_
21	_	_	NOUN	NOUN_QUANT+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	19	obj	_	_
22	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	21	nmod:poss	_	_
23	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	22	nmod:poss	_	_
24	_	_	ADP	PREP	AdpType=Prep	25	case	_	_
25	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	19	iobj	_	_
26	_	_	PUNCT	PUNC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 xcomp	color:blue
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 xcomp	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nsubj	_	_
4	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	nmod:poss	_	_
5	_	_	SCONJ	SUB_CONJ	_	6	mark	_	_
6	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
7	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	6	ccomp	_	_
8	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	7	nsubj	_	_
9	_	_	NOUN	NOUN_QUANT+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	8	nmod:poss	_	_
10	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	nmod:poss	_	_
11	_	_	CCONJ	CONJ	_	12	cc	_	_
12	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	8	obj	_	_
13	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	12	nmod:poss	_	_
14	_	hA	PRON	POSS_PRON_3FS	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	nmod:poss	_	_
15	_	_	PUNCT	PUNC	_	6	punct	_	_
16	_	w	CCONJ	CONJ	_	18	cc	_	_
17	_	_	ADV	NEG_PART	Polarity=Neg	18	advmod	_	_
18	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:J	Aspect=Imp|Gender=Fem|Mood=Jus|Number=Sing|Person=3|Voice=Act	6	xcomp	_	_
19	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	18	xcomp	_	_
20	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	19	obj	_	_
21	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	20	nmod	_	_
22	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


