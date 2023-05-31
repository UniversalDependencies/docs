---
layout: base
title:  'Statistics of ccomp in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `ccomp`

This relation is universal.

26983 nodes (4%) are attached to their parents as `ccomp`.

26676 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.60463995849238.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (8838; 33% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (7678; 28% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (6722; 25% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (1314; 5% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (1269; 5% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (509; 2% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (317; 1% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (149; 1% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (80; 0% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (44; 0% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (30; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (26; 0% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ar_nyuad-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 20 ccomp	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	NOUN	DET+ADJ+NSUFF_MASC_PL_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	3	nmod:poss	_	_
5	_	_	ADP	PREP	AdpType=Prep	6	case	_	_
6	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	2	obj	_	_
7	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	6	nmod:poss	_	_
8	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	flat	_	_
9	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	iobj	_	_
10	_	_	NUM	NOUN_NUM	NumForm=Digit	12	nummod	_	_
11	_	_	NUM	NOUN_NUM+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	10	compound	_	_
12	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	9	nmod:poss	_	_
13	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	9	advmod	_	_
14	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	13	nmod:poss	_	_
15	_	_	NUM	NOUN_NUM+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing|NumForm=Word	17	nummod	_	_
16	_	_	NUM	NOUN_NUM+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing|NumForm=Word	15	compound	_	_
17	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	13	nmod	_	_
18	_	_	SCONJ	SUB_CONJ	_	20	mark	_	_
19	_	_	ADV	NEG_PART	Polarity=Neg	20	advmod	_	_
20	_	_	VERB	IV3FS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
21	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	20	nsubj	_	_
22	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	amod	_	_
23	_	l	ADP	PREP	AdpType=Prep	24	case	_	_
24	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	21	obj	_	_
25	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	24	nmod:poss	_	_
26	_	_	PART	NOUN	Definite=Ind|Gender=Masc|Number=Sing	29	mark	_	_
27	_	_	ADP	PREP	AdpType=Prep	29	case	_	_
28	_	_	NUM	NOUN_NUM	NumForm=Digit	29	nummod	_	_
29	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	20	obj	_	_
30	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 ccomp	color:blue
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 ccomp	color:blue
1	_	w	CCONJ	CONJ	_	5	cc	_	_
2	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	5	cop	_	_
3	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	_
4	_	_	ADJ	DET+ADJ+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	amod	_	_
5	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	obj	_	_
8	_	b	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	7	obj	_	_
10	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	9	nmod:poss	_	_
11	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	10	nmod:poss	_	_
12	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	11	nmod:poss	_	_
13	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	_
14	_	mArt$nkw	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	13	flat	_	_
15	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	5	nmod	_	_
16	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nmod:poss	_	_
17	_	_	SCONJ	SUB_CONJ	_	18	mark	_	_
18	_	_	NOUN	DET+NOUN+NSUFF_MASC_PL_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	15	obj	_	_
19	_	_	VERB	PV+PVSUFF_SUBJ:3MP	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Act	18	ccomp	_	_
20	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	19	obj	_	_
21	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	20	amod	_	_
22	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	19	iobj	_	_
24	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	23	nmod:poss	_	_
25	_	qlEp	PROPN	NOUN+NSUFF_FEM_SG	Definite=Ind|Gender=Fem|Number=Sing	24	flat	_	_
26	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	23	nmod	_	_
27	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	26	nmod:poss	_	_
28	_	_	PUNCT	PUNC	_	5	punct	_	_

~~~


