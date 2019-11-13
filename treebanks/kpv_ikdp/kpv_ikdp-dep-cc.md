---
layout: base
title:  'Statistics of cc in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `cc`

This relation is universal.

50 nodes (4%) are attached to their parents as `cc`.

49 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.76.

The following 7 pairs of parts of speech are connected with `cc`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt> (31; 62% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt> (11; 22% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt> (3; 6% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	Lang=Mixed
2	ӧні	ӧні	ADV	Adv	_	4	advmod	_	_
3	ачум	ас	PRON	_	Case=Nom|Number=Sing|Reflex=Yes	4	nmod	_	_
4	велӧдча	велӧдчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc	color:blue
1	Бать	бать	NOUN	N	Case=Nom|Number=Sing	0	root	_	Lang=Mixed|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	мам	мам	NOUN	N	Case=Nom|Number=Sing	1	list	_	Lang=Mixed|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	сизим	сизим	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	чой	чой	NOUN	N	Case=Nom|Number=Sing	1	list	_	_
7	да	да	CCONJ	CC	_	9	cc	_	Lang=Mixed
8	ӧтик	ӧтик	NUM	Num	Case=Nom|Number=Sing|NumType=Card	9	nummod	_	_
9	вок	вок	NOUN	N	Case=Nom|Number=Sing	1	list	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 cc	color:blue
1	Пока	пока	ADV	Adv	_	2	advmod	_	_
2	лёк	лёк	ADJ	A	Case=Nom|Number=Sing	0	root	_	_
3	из	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|VerbForm=Fin	2	aux:neg	_	_
4	ло	лоны	AUX	V	Connegative=Yes|Number=Sing	2	aux	_	SpaceAfter=No
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


