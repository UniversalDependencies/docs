---
layout: base
title:  'Statistics of advcl in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `advcl`

This relation is universal.

19 nodes (1%) are attached to their parents as `advcl`.

11 instances of `advcl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.15789473684211.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (10; 53% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (2; 11% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	Рӧдитчи	рӧдитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Lang=Mixed
2	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	вӧрзялыгдырйи	вӧрзявны	VERB	V	Derivation=Igdyrji|VerbForm=Conv	1	advcl	_	SpaceAfter=No
4	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advcl	color:blue
1	Вто-	Вто-	ADJ	A	Case=Nom|Number=Sing	3	reparandum	_	Note=Check|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	вторая	вторая	NUM	Num	Case=Nom|Number=Sing	4	nummod	_	Lang=Rus
4	бригада	бригада	NOUN	N	Case=Nom|Number=Sing	0	root	_	Lang=Rus
5	оленеводческая	оленеводческая	ADJ	A	Case=Nom|Number=Sing	4	amod	_	Lang=Rus|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	висьтооны	висьтооны	VERB	V	VerbForm=Inf	11	advcl	_	_
8	ке	ке	SCONJ	CS	_	7	mark	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	мӧдэд	мӧд	NUM	Num	Case=Prl|NumType=Ord	11	nummod	_	_
11	бригада	бригада	NOUN	N	Case=Nom|Number=Sing	4	conj	_	Lang=Mixed|SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	да	да	PART	Pcle	_	11	advmod	_	Lang=Mixed|SpaceAfter=No
14	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 22 advcl	color:blue
1	Ну	ну	PART	Pcle	_	3	cc	_	Lang=Mixed|SpaceAfter=No|Note=CheckAll
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	палялі	палявны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
4	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	5	amod	_	_
5	местэам	местӧ	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obl	_	Lang=Mixed|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	а	а	CCONJ	CC	_	9	cc	_	Lang=Mixed
8	мӧд	мӧд	PRON	Pron	PronType=Dem	9	det	_	_
9	луннас	лун	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	acl	_	_
10	ми	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	_
11	уже	уже	ADV	Adv	_	15	advmod	_	Lang=Mixed|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	абу	абу	AUX	Pcle	Polarity=Neg	15	aux:neg	_	_
14	мӧд	мӧд	PRON	Pron	PronType=Dem	15	det	_	_
15	луннас-а	луннас	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	22	csubj	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	15	punct	_	_
17	сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	18	det	_	_
18	луннас	луннас	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	conj	_	_
19	же	жӧ	PART	Pcle	_	18	advmod	_	Lang=Mixed
20	вот	вот	PART	Pcle	_	22	advmod	_	Lang=Mixed|SpaceAfter=No
21	,	,	PUNCT	CLB	_	20	punct	_	_
22	тытэн	тытэн	ADV	Adv	_	3	advcl	_	_
23	нин	нин	ADV	Adv	_	22	advmod	_	_
24	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	22	cop	_	SpaceAfter=No
25	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


