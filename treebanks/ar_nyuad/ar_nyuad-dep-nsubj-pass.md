---
layout: base
title:  'Statistics of nsubj:pass in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ar_nyuad-dep-nsubj.html">nsubj</a></tt>.

1622 nodes (0%) are attached to their parents as `nsubj:pass`.

1362 instances of `nsubj:pass` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41060419235512.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (1357; 84% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt> (119; 7% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (70; 4% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (30; 2% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt> (22; 1% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	SCONJ	SUB_CONJ	_	7	mark	_	_
4	_	_	PUNCT	PUNC	_	7	punct	_	_
5	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
6	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod:poss	_	_
7	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Pass	2	ccomp	_	_
8	_	_	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
10	_	_	PUNCT	PUNC	_	7	punct	_	_
11	_	w	CCONJ	CONJ	_	7	cc	_	_
12	_	_	AUX	VERB_PART	_	13	aux	_	_
13	_	_	VERB	PV+PVSUFF_SUBJ:1P	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=1|Voice=Act	7	conj	_	_
14	_	_	ADP	PREP	AdpType=Prep	15	case	_	_
15	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	13	nmod	_	_
16	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	15	nmod:poss	_	_
17	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	16	nmod:poss	_	_
18	_	w	CCONJ	CONJ	_	7	cc	_	_
19	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	7	conj	_	_
20	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	19	nsubj	_	_
21	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	20	nmod:poss	_	_
22	_	_	PUNCT	PUNC	_	7	punct	_	_
23	_	w	CCONJ	CONJ	_	7	cc	_	_
24	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	7	conj	_	_
25	_	_	ADP	PREP	AdpType=Prep	26	case	_	_
26	_	hm	PRON	PRON_3MP	Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	24	nmod	_	_
27	_	_	NOUN	NOUN	Definite=Ind|Gender=Masc|Number=Sing	24	nsubj	_	_
28	_	_	PUNCT	PUNC	_	7	punct	_	_
29	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj:pass	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	IV3FS+IV_PASS+IVSUFF_MOOD:I	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Pass	0	root	_	_
3	_	f$mAr	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	nsubj:pass	_	_
4	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	2	nmod	_	_
5	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	4	nmod:poss	_	_
6	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	5	nmod:poss	_	_
7	_	bAx	PROPN	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	6	nmod:poss	_	_
8	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	9	mark	_	_
9	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	7	xcomp	_	_
10	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
11	_	_	NUM	NOUN_NUM	NumForm=Digit	12	nummod	_	_
12	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	9	flat	_	_
13	_	_	PUNCT	PUNC	_	12	punct	_	_
14	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	12	appos	_	_
15	_	b	ADP	PREP	AdpType=Prep	16	case	_	_
16	_	_	NOUN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	9	nmod	_	_
17	_	_	NUM	NOUN_NUM	NumForm=Digit	16	nummod	_	_
18	_	l	ADP	PREP	AdpType=Prep	19	case	_	_
19	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	16	nmod	_	_
20	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nmod:poss	_	_
21	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 nsubj:pass	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV_PASS+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Pass	0	root	_	_
3	_	_	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nmod	_	_
5	_	_	SCONJ	SUB_CONJ	_	6	mark	_	_
6	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj:pass	_	_
7	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	6	xcomp	_	_
8	_	_	SCONJ	SUB_CONJ	_	9	mark	_	_
9	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
10	_	_	PART	NEG_PART	Polarity=Neg	11	aux	_	_
11	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:J	Aspect=Imp|Gender=Masc|Mood=Jus|Number=Sing|Person=3|Voice=Act	9	xcomp	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	11	obj	_	_
13	_	_	PART	RESTRIC_PART	_	14	dep	_	_
14	_	_	NOUN	NOUN_QUANT+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	11	nmod	_	_
15	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	14	nmod:poss	_	_
16	_	l	ADP	PREP	AdpType=Prep	18	case	_	_
17	_	_	SCONJ	SUB_CONJ	_	18	mark	_	_
18	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nmod	_	_
19	_	_	NOUN	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	18	nmod	_	_
20	_	mA	SCONJ	SUB_CONJ	_	21	mark	_	_
21	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	19	ccomp	_	_
22	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	_	NOUN	NOUN+NSUFF_MASC_DU_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Dual	21	nmod	_	_
24	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	nmod:poss	_	_
25	_	_	PUNCT	PUNC	_	18	punct	_	_
26	_	_	AUX	PV+PVSUFF_SUBJ:3MD	Gender=Masc|Mood=Ind|Number=Dual|Person=3|Voice=Act	28	cop	_	_
27	_	_	ADP	PREP	AdpType=Prep	28	case	_	_
28	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	nmod	_	_
29	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	28	nmod	_	_
30	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	29	nmod:poss	_	_
31	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


