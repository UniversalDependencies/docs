---
layout: base
title:  'Statistics of amod in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `amod`

This relation is universal.

62082 nodes (8%) are attached to their parents as `amod`.

61732 instances of `amod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81078251344995.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (54777; 88% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (2978; 5% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (1674; 3% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (1316; 2% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (674; 1% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (386; 1% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (82; 0% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (70; 0% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (66; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (31; 0% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (14; 0% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt> (14; 0% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 26 amod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 amod	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	l	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	kAmbws	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	obj	_	_
5	_	_	PRON	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
6	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	7	cop	_	_
7	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	5	xcomp	_	_
8	_	_	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_
10	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	iobj	_	_
13	_	_	ADJ	DET+ADJ	Definite=Def|Gender=Masc|Number=Sing	12	amod	_	_
14	_	_	SCONJ	SUB_CONJ	_	15	mark	_	_
15	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
16	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	15	obj	_	_
17	_	_	ADP	PREP	AdpType=Prep	18	case	_	_
18	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	15	iobj	_	_
19	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	18	nmod:poss	_	_
20	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


