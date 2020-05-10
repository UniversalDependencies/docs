---
layout: base
title:  'Statistics of root in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `root`

This relation is universal.

132 nodes (9%) are attached to their parents as `root`.

132 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.03030303030303.

The following 5 pairs of parts of speech are connected with `root`: -<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (104; 79% instances), -<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (19; 14% instances), -<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), -<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (2; 2% instances), -<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Мама	мама	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	Lang=Mixed
2	уджалӧ	уджавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	колхозын	колхоз	NOUN	N	Case=Ine|Number=Sing	2	obl	_	Lang=Mixed|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	2	nmod	_	_
2	семяын	семя	NOUN	N	Case=Ine|Number=Sing	0	root	_	Lang=Mixed
3	дас	дас	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	морт	морт	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Пока	пока	ADV	Adv	_	2	advmod	_	_
2	лёк	лёк	ADJ	A	Case=Nom|Number=Sing	0	root	_	_
3	из	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg	2	aux:neg	_	_
4	ло	лоны	AUX	V	Connegative=Yes	2	aux	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	но	но	CCONJ	CC	_	13	cc	_	Lang=Mixed|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	пока	пока	ADV	Adv	_	13	advmod	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	не	не	PART	Pcle	Polarity=Neg	11	advmod	_	Lang=Mixed
11	то	то	PART	Pcle	_	13	advmod	_	Lang=Mixed
12	что	что	PRON	Pron	_	11	goeswith	_	Lang=Rus
13	лёк-а	лёк	ADJ	A	Case=Nom|Number=Sing	2	conj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


