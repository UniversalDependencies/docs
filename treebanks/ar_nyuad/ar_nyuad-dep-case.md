---
layout: base
title:  'Statistics of case in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `case`

This relation is universal.

91720 nodes (12%) are attached to their parents as `case`.

91643 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11012865242041.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (69220; 75% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (7975; 9% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (7643; 8% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (2471; 3% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (1346; 1% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (1288; 1% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (847; 1% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (793; 1% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (76; 0% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (59; 0% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ar_nyuad-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 case	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 case	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
5	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
6	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	5	nmod:poss	_	_
7	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
8	_	w	CCONJ	SUB_CONJ	_	10	iobj	_	_
9	_	_	PRON	PRON_3MS	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	obj	_	_
13	_	_	PUNCT	PUNC	_	15	punct	_	_
14	_	_	ADP	PREP	AdpType=Prep	15	case	_	_
15	_	k	PRON	PRON_2MS	Definite=Def|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	iobj	_	_
16	_	_	SCONJ	SUB_CONJ	_	18	mark	_	_
17	_	lA	ADV	NEG_PART	Polarity=Neg	18	advmod	_	_
18	_	_	VERB	IV2MS+IV+IVSUFF_MOOD:S	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=2|Voice=Act	15	xcomp	_	_
19	_	_	SCONJ	SUB_CONJ	_	20	mark	_	_
20	_	k	PRON	PRON_2MS	Definite=Def|Gender=Masc|Number=Sing|Person=2|PronType=Prs	18	obj	_	_
21	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	20	amod	_	_
22	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	y	PRON	PRON_1S	Definite=Def|Gender=Masc|Number=Sing|Person=1	21	obj	_	_
24	_	b	ADP	PREP	AdpType=Prep	25	case	_	_
25	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	21	iobj	_	_
26	_	_	PUNCT	PUNC	_	15	punct	_	_
27	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


