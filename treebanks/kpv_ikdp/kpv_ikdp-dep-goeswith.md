---
layout: base
title:  'Statistics of goeswith in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `goeswith`

This relation is universal.

4 nodes (0%) are attached to their parents as `goeswith`.

4 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 25% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 25% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	И	и	CCONJ	CC	_	5	cc	_	Lang=Mixed
2	ӧні	ӧні	ADV	Adv	_	5	advmod:tmod	_	_
3	бара	бара	ADV	Adv	_	5	advmod:tmod	_	_
4	же	жӧ	PART	Pcle	_	3	goeswith	_	Lang=Mixed
5	мӧдісныс	мӧдны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
6	вӧрзёоны	вӧрзьыны	VERB	V	VerbForm=Inf	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 goeswith	color:blue
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


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	Пока	пока	ADV	Adv	_	4	advmod	_	_
2	лёк	лёк	ADJ	A	Case=Nom|Number=Sing	4	nsubj	_	_
3	из	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg	4	aux:neg	_	_
4	ло	лоны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	но	но	CCONJ	CC	_	13	cc	_	Lang=Mixed|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	пока	пока	ADV	Adv	_	13	advmod	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	13	punct	_	_
10	не	не	PART	Pcle	Polarity=Neg	11	advmod	_	Lang=Mixed
11	то	то	PART	Pcle	_	13	advmod	_	Lang=Mixed
12	что	что	PRON	Pron	_	11	goeswith	_	Lang=Rus
13	лёк-а	лёк	ADJ	A	Case=Nom|Number=Sing	4	conj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


