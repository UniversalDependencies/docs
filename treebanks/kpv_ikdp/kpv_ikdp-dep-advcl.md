---
layout: base
title:  'Statistics of advcl in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `advcl`

This relation is universal.

14 nodes (1%) are attached to their parents as `advcl`.

9 instances of `advcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.57142857142857.

The following 6 pairs of parts of speech are connected with `advcl`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (6; 43% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (2; 14% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 7% instances).


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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 advcl	color:blue
1	Вот	вот	PART	Pcle	_	9	discourse	_	Lang=Rus
2	у	у	ADP	Pr	_	3	case	_	Lang=Rus
3	меня	я	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	obl	_	Lang=Rus
4	сэтэн	сэтӧн	ADV	Adv	_	9	advmod	_	_
5	выйым	выйым	PART	Pcle	_	9	cop	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	гашке	гашкӧ	ADV	Adv	_	9	discourse	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	братан	братан	NOUN	N	Case=Nom|Number=Sing	0	root	_	Lang=Rus|SpaceAfter=No
10	,	,	PUNCT	CLB	_	9	punct	_	_
11	сестренница	сестренница	NOUN	N	Case=Nom|Number=Sing	9	appos	_	Lang=Rus|SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	а	а	CCONJ	CC	_	17	cc	_	Lang=Mixed
14	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
15	никодэс	некод	PRON	Pron	Case=Acc|Number=Sing|Polarity=Neg	17	obj	_	_
16	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	17	aux	_	_
17	тӧд	тӧдны	VERB	V	Connegative=Yes|Number=Sing	9	advcl	_	SpaceAfter=No
18	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 22 advcl	color:blue
1	Ну	ну	PART	Pcle	_	3	cc	_	Lang=Mixed|SpaceAfter=No|Note=CheckAll
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	палялі	палявны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
4	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	5	amod	_	_
5	местэам	местэ	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obl	_	Lang=Mixed|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	а	а	CCONJ	CC	_	9	cc	_	Lang=Mixed
8	мӧд	мӧд	PRON	Pron	PronType=Dem	9	dep	_	_
9	луннас	лун	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	acl	_	_
10	ми	ми	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
11	уже	уже	ADV	Adv	_	15	advmod	_	Lang=Mixed|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	абу	абу	PART	Pcle	Polarity=Neg	15	cop	_	_
14	мӧд	мӧдны	NUM	Num	NumType=Ord	15	det	_	_
15	луннас-а	луннас	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	22	csubj	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	15	punct	_	_
17	сы	сійӧ	PRON	Pron	PronType=Dem	18	det	_	_
18	луннас	луннас	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	conj	_	_
19	же	же	PART	Pcle	_	18	advmod	_	Lang=Mixed
20	вот	вот	PART	Pcle	_	22	discourse	_	Lang=Mixed|SpaceAfter=No
21	,	,	PUNCT	CLB	_	20	punct	_	_
22	тытэн	тытэн	ADV	Adv	_	3	advcl	_	_
23	нин	нин	ADV	Adv	_	22	advmod	_	_
24	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	22	cop	_	SpaceAfter=No
25	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


