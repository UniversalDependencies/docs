---
layout: base
title:  'Statistics of cop in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `cop`

This relation is universal.

5325 nodes (1%) are attached to their parents as `cop`.

5320 instances of `cop` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.6381220657277.

The following 15 pairs of parts of speech are connected with `cop`: <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (2379; 45% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (1531; 29% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (571; 11% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (296; 6% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (203; 4% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (86; 2% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (79; 1% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (68; 1% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (38; 1% instances), <tt><a href="ar_nyuad-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (31; 1% instances), <tt><a href="ar_nyuad-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (21; 0% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (12; 0% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	_	w	CCONJ	CONJ	_	5	cc	_	_
2	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	5	cop	_	_
3	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	_
4	_	_	ADJ	DET+ADJ+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	amod	_	_
5	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
8	_	b	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	7	nmod	_	_
10	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	9	nmod:poss	_	_
11	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	10	nmod:poss	_	_
12	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	11	nmod:poss	_	_
13	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	7	appos	_	_
14	_	mArt$nkw	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	13	flat:name	_	_
15	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	5	obj	_	_
16	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nmod:poss	_	_
17	_	_	SCONJ	SUB_CONJ	_	18	mark	_	_
18	_	_	NOUN	DET+NOUN+NSUFF_MASC_PL_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	15	obj	_	_
19	_	_	VERB	PV+PVSUFF_SUBJ:3MP	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Act	18	ccomp	_	_
20	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	19	obj	_	_
21	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	20	amod	_	_
22	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	19	nmod	_	_
24	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	23	nmod:poss	_	_
25	_	qlEp	PROPN	NOUN+NSUFF_FEM_SG	Definite=Ind|Gender=Fem|Number=Sing	24	flat:name	_	_
26	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	23	nmod	_	_
27	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	26	nmod:poss	_	_
28	_	_	PUNCT	PUNC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 cop	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod:poss	_	_
5	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	3	appos	_	_
6	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	5	flat:name	_	_
7	_	_	SCONJ	SUB_CONJ	_	8	mark	_	_
8	_	_	NOUN	DET+NOUN+NSUFF_MASC_DU_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Dual	2	obj	_	_
9	_	_	ADJ	DET+ADJ+NSUFF_MASC_DU_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Dual	8	amod	_	_
10	_	_	SCONJ	REL_PRON	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	13	mark	_	_
11	_	_	AUX	PV+PVSUFF_SUBJ:3MD	Gender=Masc|Mood=Ind|Number=Dual|Person=3|Voice=Act	13	cop	_	_
12	_	_	ADP	PREP	AdpType=Prep	13	case	_	_
13	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	8	nmod	_	_
14	_	hA	PRON	POSS_PRON_3FS	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	nmod:poss	_	_
15	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3MD	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Dual|Person=3|Voice=Pass	8	ccomp	_	_
16	_	_	ADP	PREP	AdpType=Prep	17	case	_	_
17	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	_
18	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 cop	color:blue
1	_	w	CCONJ	CONJ	_	3	cc	_	_
2	_	s	PART	FUT_PART	_	3	dep	_	_
3	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
4	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	3	nsubj	_	_
5	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	4	nmod:poss	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
8	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
9	_	lwsyAnw	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	appos	_	_
10	_	bwrty	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	9	flat:name	_	_
11	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	3	advmod	_	_
12	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	11	nmod:poss	_	_
13	_	_	ADP	PREP	AdpType=Prep	14	case	_	_
14	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	nmod	_	_
15	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
16	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	_
17	_	_	PUNCT	PUNC	_	3	punct	_	_
18	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	21	mark	_	_
19	_	s	AUX	FUT_PART	_	21	dep	_	_
20	_	_	AUX	IV3MS+IV+IVSUFF_MOOD:I	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	21	cop	_	_
21	_	_	ADJ	ADJ_NUM	Definite=Ind|Gender=Masc|Number=Sing	3	obj	_	_
22	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	21	nmod	_	_
23	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	nmod:poss	_	_
24	_	_	ADP	PREP	AdpType=Prep	25	case	_	_
25	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	21	nmod	_	_
26	_	_	NOUN	NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Plur	25	nmod:poss	_	_
27	_	_	PROPN	DET+NOUN_PROP	Definite=Def|Gender=Masc|Number=Sing	26	nmod:poss	_	_
28	_	_	NUM	NOUN_NUM+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|NumForm=Word	27	nummod	_	_
29	_	_	PUNCT	PUNC	_	3	punct	_	_

~~~


