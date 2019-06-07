---
layout: base
title:  'Statistics of det in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `det`

This relation is universal.

4202 nodes (1%) are attached to their parents as `det`.

4198 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06568300809139.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (3959; 94% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (107; 3% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (94; 2% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (24; 1% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (13; 0% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 det	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nsubj	_	_
4	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
5	_	_	PUNCT	PUNC	_	4	punct	_	_
6	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	4	flat	_	_
7	_	_	ADP	PREP	AdpType=Prep	8	case	_	_
8	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	2	obj	_	_
9	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod:poss	_	_
10	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	amod	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	obj	_	_
13	_	_	SCONJ	SUB_CONJ	_	14	mark	_	_
14	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	iobj	_	_
15	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	14	amod	_	_
16	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	_
17	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	16	nmod	_	_
18	_	_	ADP	PREP	AdpType=Prep	19	case	_	_
19	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	obj	_	_
20	_	_	PUNCT	PUNC	_	14	punct	_	_
21	_	_	ADP	PREP	AdpType=Prep	22	case	_	_
22	_	_	PRON	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	14	iobj	_	_
23	_	_	VERB	VERB	Gender=Masc|Number=Sing|Person=3	22	xcomp	_	_
24	_	_	DET	DEM_PRON_MS	Definite=Ind|Gender=Masc|Number=Sing	25	det	_	_
25	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	23	obj	_	_
26	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	:	PUNCT	PUNC	_	2	punct	_	_
4	_	_	PUNCT	PUNC	_	6	punct	_	_
5	_	_	ADV	NEG_PART	Polarity=Neg	6	advmod	_	_
6	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:J	Aspect=Imp|Gender=Masc|Mood=Jus|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
7	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
8	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	6	advmod	_	_
9	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	8	nmod:poss	_	_
10	_	_	DET	DET	_	11	det	_	_
11	_	_	NUM	NOUN_NUM	NumForm=Digit	9	nummod	_	_
12	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	amod	_	_
13	_	_	PUNCT	PUNC	_	6	punct	_	_
14	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	_	w	CCONJ	CONJ	_	3	cc	_	_
2	_	_	PRON	PRON_3MS	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
3	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	_	_	DET	DET	_	5	det	_	_
5	_	13	ADJ	NOUN_NUM	_	3	amod	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	5	obj	_	_
8	_	l	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	5	iobj	_	_
10	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	9	flat	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	5	iobj	_	_
13	_	h	PRON	POSS_PRON_3MS	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nmod:poss	_	_
14	_	_	PUNCT	PUNC	_	15	punct	_	_
15	_	Arkw	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	_
16	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	15	flat	_	_
17	_	_	PUNCT	PUNC	_	15	punct	_	_
18	_	w	CCONJ	CONJ	_	19	cc	_	_
19	_	_	DET	DET	_	5	obj	_	_
20	_	20	ADJ	NOUN_NUM	_	19	amod	_	_
21	_	_	ADP	PREP	AdpType=Prep	22	case	_	_
22	_	_	NOUN	ADJ+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	19	obj	_	_
23	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	22	nmod:poss	_	_
24	_	_	ADJ	NOUN_NUM+NSUFF_FEM_SG+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	23	amod	_	_
25	_	w	CCONJ	CONJ	_	27	cc	_	_
26	_	_	DET	DEM_PRON_MS	Definite=Ind|Gender=Masc|Number=Sing	27	nsubj	_	_
27	_	_	NOUN	NOUN+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	obj	_	_
28	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	27	amod	_	_
29	_	l	ADP	PREP	AdpType=Prep	30	case	_	_
30	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	27	obj	_	_
31	_	_	PUNCT	PUNC	_	3	punct	_	_

~~~


