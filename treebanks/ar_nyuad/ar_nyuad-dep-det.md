---
layout: base
title:  'Statistics of det in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `det`

This relation is universal.

5284 nodes (1%) are attached to their parents as `det`.

4714 instances of `det` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34102952308857.

The following 14 pairs of parts of speech are connected with `det`: <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (4215; 80% instances), <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (272; 5% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (166; 3% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (150; 3% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (134; 3% instances), <tt><a href="ar_nyuad-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (117; 2% instances), <tt><a href="ar_nyuad-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (66; 1% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (56; 1% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (38; 1% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (32; 1% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (18; 0% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (13; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 det	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3FS	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	2	nsubj	_	_
4	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	3	appos	_	_
5	_	_	PUNCT	PUNC	_	4	punct	_	_
6	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
7	_	_	ADP	PREP	AdpType=Prep	8	case	_	_
8	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	2	nmod	_	_
9	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod:poss	_	_
10	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	amod	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
13	_	_	SCONJ	SUB_CONJ	_	14	mark	_	_
14	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	_
15	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	14	amod	_	_
16	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	_
17	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	16	nmod	_	_
18	_	_	ADP	PREP	AdpType=Prep	19	case	_	_
19	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	_
20	_	_	PUNCT	PUNC	_	14	punct	_	_
21	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
22	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	23	mark	_	_
23	_	_	VERB	VERB	Gender=Masc|Number=Sing|Person=3	14	xcomp	_	_
24	_	_	DET	DEM_PRON_MS	Definite=Ind|Gender=Masc|Number=Sing	25	det	_	_
25	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	23	obj	_	_
26	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 det	color:blue
1	_	w	CCONJ	CONJ	_	8	cc	_	_
2	_	b	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	DET	DEM_PRON_MS	Definite=Ind|Gender=Masc|Number=Sing	8	det	_	_
4	_	_	AUX	IV3MS+IV+IVSUFF_MOOD:I	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	8	cop	_	_
5	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	_
6	_	AlSdr	PROPN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	5	appos	_	_
7	_	_	AUX	VERB_PART	_	8	aux	_	_
8	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
9	_	_	PART	NEG_PART	Polarity=Neg	11	dep	_	_
10	_	_	ADP	PREP	AdpType=Prep	11	case	_	_
11	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
12	_	_	CCONJ	CONJ	_	11	cc	_	_
13	_	_	ADP	PREP	AdpType=Prep	14	case	_	_
14	_	_	PROPN	NOUN_PROP+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	11	conj	_	_
15	_	_	PUNCT	PUNC	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 det	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	PUNCT	PUNC	_	5	punct	_	_
4	_	_	PRON	PRON_1S	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	2	amod	_	_
6	_	_	VERB	IV1S+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Voice=Act	5	xcomp	_	_
7	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	6	obj	_	_
8	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	amod	_	_
9	_	_	PUNCT	PUNC	_	5	punct	_	_
10	_	_	ADV	ADJ+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	advmod	_	_
11	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	10	advmod	_	_
12	_	_	DET	DEM_PRON_MS	Definite=Ind|Gender=Masc|Number=Sing	11	det	_	_
13	_	_	PUNCT	PUNC	_	17	punct	_	_
14	_	_	SCONJ	SUB_CONJ	_	17	mark	_	_
15	_	h	SCONJ	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3	17	mark	_	_
16	_	_	PART	NEG_PART	Polarity=Neg	17	aux	_	_
17	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	10	ccomp	_	_
18	_	_	ADV	ADV	Definite=Ind|Gender=Masc|Number=Sing	17	dep	_	_
19	_	_	NOUN	NOUN+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	17	nsubj	_	_
20	_	l	ADP	PREP	AdpType=Prep	21	case	_	_
21	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	19	nmod	_	_
22	_	_	PUNCT	PUNC	_	17	punct	_	_
23	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


