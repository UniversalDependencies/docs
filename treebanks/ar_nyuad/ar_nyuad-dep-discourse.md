---
layout: base
title:  'Statistics of discourse in UD_Arabic-NYUAD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-NYUAD: Relations: `discourse`

This relation is universal.

55 nodes (0%) are attached to their parents as `discourse`.

30 instances of `discourse` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.01818181818182.

The following 10 pairs of parts of speech are connected with `discourse`: <tt><a href="ar_nyuad-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (35; 64% instances), <tt><a href="ar_nyuad-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (9; 16% instances), <tt><a href="ar_nyuad-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (3; 5% instances), <tt><a href="ar_nyuad-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="ar_nyuad-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ar_nyuad-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ar_nyuad-pos-DET.html">DET</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ar_nyuad-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ar_nyuad-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_nyuad-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 discourse	color:blue
1	_	w	CCONJ	CONJ	_	11	cc	_	_
2	_	_	SCONJ	SUB_CONJ	_	3	mark	_	_
3	_	_	VERB	PV+PVSUFF_SUBJ:1S	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Voice=Act	11	ccomp	_	_
4	_	_	ADP	PREP	AdpType=Prep	5	case	_	_
5	_	hm	PRON	PRON_3MP	Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	obj	_	_
6	_	b	ADP	PREP	AdpType=Prep	7	case	_	_
7	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	3	iobj	_	_
8	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	7	nmod:poss	_	_
9	_	f	PART	RC_PART	_	11	mark	_	_
10	_	_	PART	INTERROG_PART	_	11	mark	_	_
11	_	_	VERB	IV1S+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Voice=Act	0	root	_	_
12	_	hm	PRON	IVSUFF_DO:3MP	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	obj	_	_
13	_	_	NOUN	NOUN+CASE_INDEF_ACC	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	11	nmod	_	_
14	_	_	PUNCT	PUNC	_	11	punct	_	_
15	_	_	INTJ	INTERJ	_	11	discourse	_	_
16	_	_	PUNCT	PUNC	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 discourse	color:blue
1	_	_	NOUN	DET+NOUN+CASE_DEF_NOM	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	_	_	PRON	PRON_3MS	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nmod	_	_
3	_	b	ADP	PREP	AdpType=Prep	4	case	_	_
4	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	1	obj	_	_
5	_	_	ADP	PREP	AdpType=Prep	6	case	_	_
6	_	_	NOUN	NOUN_QUANT+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Masc|Number=Sing	4	obj	_	_
7	_	_	NOUN	NOUN+CASE_INDEF_GEN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	6	nmod:poss	_	_
8	_	:	PUNCT	PUNC	_	1	punct	_	_
9	_	_	INTJ	INTERJ	_	1	discourse	_	_
10	_	_	PUNCT	PUNC	_	1	punct	_	_
11	_	_	PUNCT	PUNC	_	1	punct	_	_
12	_	_	PUNCT	PUNC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	_	_	PUNCT	PUNC	_	5	punct	_	_
2	_	_	INTJ	INTERJ	_	5	discourse	_	_
3	_	_	PUNCT	PUNC	_	5	punct	_	_
4	_	_	SCONJ	PSEUDO_VERB	_	5	mark	_	_
5	_	y	PRON	PRON_1S	Definite=Def|Gender=Masc|Number=Sing|Person=1|PronType=Prs	0	root	_	_
6	_	_	VERB	IV1S+IV+IVSUFF_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Voice=Act	5	xcomp	_	_
7	_	_	SCONJ	SUB_CONJ	_	8	mark	_	_
8	_	_	NOUN	DET+NOUN+NSUFF_MASC_PL_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	6	obj	_	_
9	_	_	NOUN	DET+NOUN+NSUFF_MASC_PL_ACC	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	8	nmod	_	_
10	_	_	ADV	NEG_PART	Polarity=Neg	11	advmod	_	_
11	_	_	VERB	IV3MP+IV+IVSUFF_SUBJ:MP_MOOD:I	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Voice=Act	8	ccomp	_	_
12	_	TBupdate	NOUN	NOUN	Definite=Ind|Gender=Masc|Number=Sing	11	obj	_	_
13	_	_	ADP	PREP	AdpType=Prep	14	case	_	_
14	_	_	NOUN	NOUN+NSUFF_FEM_SG+CASE_DEF_GEN	Case=Gen|Definite=Com|Gender=Fem|Number=Sing	11	iobj	_	_
15	_	hm	PRON	POSS_PRON_3MP	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Prs	14	nmod:poss	_	_
16	_	_	PUNCT	PUNC	_	5	punct	_	_

~~~


