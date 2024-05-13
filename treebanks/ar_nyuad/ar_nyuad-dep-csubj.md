---
layout: base
title:  'Statistics of csubj in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `csubj`

This relation is universal.

1091 nodes (0%) are attached to their parents as `csubj`.

1079 instances of `csubj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.57745187901008.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (656; 60% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (277; 25% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (66; 6% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (38; 3% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (20; 2% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ar_nyuad-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ar_nyuad-pos-X.html">X</a></tt>-<tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 15 csubj	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	l	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	kAmbws	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
5	_	_	SCONJ	REL_PRON	Definite=Ind|Gender=Masc|Number=Sing	7	mark	_	_
6	_	_	AUX	PV+PVSUFF_SUBJ:3MS	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	7	cop	_	_
7	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	4	xcomp	_	_
8	_	_	ADP	PREP	AdpType=Prep	9	case	_	_
9	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
10	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
13	_	_	ADJ	DET+ADJ	Definite=Def|Gender=Masc|Number=Sing	12	amod	_	_
14	_	_	SCONJ	SUB_CONJ	_	15	mark	_	_
15	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	csubj	_	_
16	_	_	PROPN	DET+NOUN_PROP+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	15	obj	_	_
17	_	_	ADP	PREP	AdpType=Prep	18	case	_	_
18	_	_	NOUN	NOUN+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	15	nmod	_	_
19	_	_	NOUN	DET+NOUN+NSUFF_FEM_PL+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	18	nmod:poss	_	_
20	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	_	w	CCONJ	CONJ	_	3	cc	_	_
2	_	_	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	_	_	SCONJ	SUB_CONJ	_	5	mark	_	_
5	_	_	VERB	IV3MS+IV_PASS+IVSUFF_MOOD:S	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Voice=Pass	3	csubj	_	_
6	_	_	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
8	_	_	NOUN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
9	_	_	PUNCT	PUNC	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 csubj	color:blue
1	_	w	CCONJ	CONJ	_	2	cc	_	_
2	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
3	_	_	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	h	PRON	PRON_3MS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nmod	_	_
5	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
6	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	5	nmod:poss	_	_
7	_	_	ADV	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	advmod	_	_
8	_	w	ADV	SUB_CONJ	_	10	advmod	_	_
9	_	_	PRON	PRON_3MS	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	_	_	VERB	IV3MS+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	2	ccomp	_	_
11	_	_	ADP	PREP	AdpType=Prep	12	case	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	_
13	_	_	PUNCT	PUNC	_	15	punct	_	_
14	_	_	ADP	PREP	AdpType=Prep	15	case	_	_
15	_	k	PRON	PRON_2MS	Definite=Def|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nmod	_	_
16	_	_	SCONJ	SUB_CONJ	_	18	mark	_	_
17	_	lA	PART	NEG_PART	Polarity=Neg	18	aux	_	_
18	_	_	VERB	IV2MS+IV+IVSUFF_MOOD:S	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=2|Voice=Act	15	csubj	_	_
19	_	_	SCONJ	SUB_CONJ	_	20	mark	_	_
20	_	k	PRON	PRON_2MS	Definite=Def|Gender=Masc|Number=Sing|Person=2|PronType=Prs	18	obj	_	_
21	_	_	ADJ	ADJ+CASE_INDEF_NOM	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	2	parataxis	_	_
22	_	_	ADP	PREP	AdpType=Prep	23	case	_	_
23	_	y	SCONJ	PRON_1S	Definite=Def|Gender=Masc|Number=Sing|Person=1	21	mark	_	_
24	_	b	ADP	PREP	AdpType=Prep	25	case	_	_
25	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	21	nmod	_	_
26	_	_	PUNCT	PUNC	_	15	punct	_	_
27	_	_	PUNCT	PUNC	_	2	punct	_	_

~~~


