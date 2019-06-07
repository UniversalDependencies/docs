---
layout: base
title:  'Statistics of dep in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `dep`

This relation is universal.

89 nodes (0%) are attached to their parents as `dep`.

66 instances of `dep` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 23.247191011236.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (40; 45% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (29; 33% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (5; 6% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (5; 6% instances), <tt><a href="ar_nyuad-pos-PART.html">PART</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ar_nyuad-pos-AUX.html">AUX</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 23 dep	color:blue
1	_	_	PUNCT	ABBREV	_	5	punct	_	_
2	_	_	ADP	PREP	AdpType=Prep	3	case	_	_
3	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	5	obj	_	_
4	_	_	PUNCT	PUNC	_	5	punct	_	_
5	_	_	VERB	PV+PVSUFF_SUBJ:3MS	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Voice=Act	0	root	_	_
6	_	_	NOUN	NOUN+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Masc|Number=Sing	5	nsubj	_	_
7	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod:poss	_	_
8	_	_	ADJ	DET+ADJ+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	amod	_	_
9	_	AynAky	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	6	nmod	_	_
10	_	sAyz	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	9	flat	_	_
11	_	_	NUM	NOUN_NUM	NumForm=Digit	12	nummod	_	_
12	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	5	iobj	_	_
13	_	l	ADP	PREP	AdpType=Prep	14	case	_	_
14	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	iobj	_	_
15	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	14	amod	_	_
16	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	14	amod	_	_
17	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	14	advmod	_	_
18	_	_	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	17	nmod:poss	_	_
19	_	_	ADP	PREP	AdpType=Prep	20	case	_	_
20	_	grAnAdA	PROPN	NOUN_PROP	Definite=Ind|Gender=Masc|Number=Sing	14	obj	_	_
21	_	_	NOUN	DET+NOUN+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	_
22	_	_	ADJ	DET+ADJ+CASE_DEF_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	21	amod	_	_
23	_	_	PRON	PRON_3MP	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	dep	_	_
24	_	:	PUNCT	PUNC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	_	_	DET	DEM_PRON_F	Definite=Ind|Gender=Fem|Number=Sing	2	nsubj	_	_
2	_	_	PRON	PRON_3FS	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Person=3	3	dep	_	_
3	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
4	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	amod	_	_
5	_	_	ADV	NOUN+CASE_DEF_ACC	Case=Acc|Definite=Com|Gender=Masc|Number=Sing	3	advmod	_	_
6	_	_	NOUN	DET+NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod:poss	_	_
7	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	amod	_	_
8	_	_	ADJ	DET+ADJ+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	amod	_	_
9	_	_	PUNCT	PUNC	_	3	punct	_	_
10	_	_	CCONJ	CONJ	_	11	cc	_	_
11	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_NOM	Case=Nom|Definite=Com|Gender=Fem|Number=Sing	3	obj	_	_
12	_	_	NOUN	DET+NOUN+CASE_DEF_GEN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	11	nmod:poss	_	_
13	_	AlSdr	PROPN	DET+NOUN	Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	_
14	_	_	PUNCT	PUNC	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	_	_	DET	DEM_PRON_MS	Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
2	_	_	PRON	PRON_3MS	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	dep	_	_
3	_	_	ADJ	DET+ADJ+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	_	_	PUNCT	PUNC	_	3	punct	_	_

~~~


