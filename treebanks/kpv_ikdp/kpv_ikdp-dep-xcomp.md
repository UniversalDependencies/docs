---
layout: base
title:  'Statistics of xcomp in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `xcomp`

This relation is universal.

19 nodes (1%) are attached to their parents as `xcomp`.

17 instances of `xcomp` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31578947368421.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (18; 95% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	бӧрын	бӧр	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	устроитчи	устроитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	Lang=Mixed
4	рӧбитны	рӧбитны	VERB	V	VerbForm=Inf	3	xcomp	_	Lang=Mixed|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	локті	локны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	3	parataxis	_	_
7	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	8	nmod	_	_
8	сиктэ	сикт	NOUN	N	Case=Ill|Number=Sing	6	obl	_	_
9	да	да	PART	Pcle	_	8	advmod	_	Lang=Mixed|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 xcomp	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	Lang=Mixed
2	маме	мам	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nsubj	_	_
3	как	как	SCONJ	CS	_	5	advmod	_	Lang=Rus
4	раз	раз	NOUN	N	Case=Nom|Number=Sing	3	fixed	_	Lang=Rus
5	тыра	тыр	ADV	Adv	_	8	advcl	_	_
6	вӧліс	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	думайтэныс	думайтны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	12	punct	_	_
10	гашке	гашкӧ	PART	Pcle	_	12	advmod:mmod	_	SpaceAfter=No
11	,	,	PUNCT	CLB	_	12	punct	_	_
12	вӧрзям	вӧрзьыны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres	8	ccomp	_	_
13	да	да	PART	Pcle	_	12	advmod	_	Lang=Mixed
14	и	и	PART	Pcle	_	13	goeswith	_	Lang=Mixed|SpaceAfter=No
15	,	,	PUNCT	CLB	_	16	punct	_	_
16	ничего	ничего	ADV	Adv	Polarity=Neg	12	conj	_	Lang=Rus|SpaceAfter=No
17	,	,	PUNCT	CLB	_	19	punct	_	_
18	бур	бур	ADJ	A	Case=Nom|Number=Sing	19	xcomp	_	_
19	лоо	лоны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	conj	_	_
20	ставыс	став	DET	Det	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	nsubj	_	_
21	да	да	PART	Pcle	_	19	advmod	_	Lang=Mixed|SpaceAfter=No
22	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


