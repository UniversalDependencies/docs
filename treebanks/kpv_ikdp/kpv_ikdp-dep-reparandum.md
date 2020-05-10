---
layout: base
title:  'Statistics of reparandum in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `reparandum`

This relation is universal.

8 nodes (1%) are attached to their parents as `reparandum`.

8 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 7 pairs of parts of speech are connected with `reparandum`: <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (2; 25% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 reparandum	color:blue
1	Воліс	волыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	же	жӧ	PART	Pcle	_	1	advmod	_	Lang=Mixed
3	тундраас	тундра	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obl	_	Lang=Mixed|SpaceAfter=No
4	,	,	PUNCT	CLB	_	9	punct	_	_
5	но	но	CCONJ	CC	_	9	cc	_	Lang=Mixed
6	из	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	8	reparandum	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	абу	абу	AUX	Pcle	Polarity=Neg	9	aux:neg	_	_
9	понравитчема	понравитчыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	acl	_	Lang=Mixed|SpaceAfter=No|Note=Check
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	12	aux:neg	_	_
12	вермы	вермыны	VERB	V	Connegative=Yes	9	conj	_	_
13	сыа	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
14	сэтшем	сэтшӧм	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	15	det	_	_
15	условиеясас	условие	NOUN	N	Case=Ill|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	obl	_	Lang=Mixed|SpaceAfter=No
16	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 reparandum	color:blue
1	Ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	6	reparandum	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	мыйке	мыйке	PRON	Pron	Case=Nom|PronType=Ind	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	6	amod	_	_
6	муас	му	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
7	рӧдиттьыны	рӧдиттьыны	VERB	V	VerbForm=Inf	8	xcomp	_	Lang=Mixed
8	мӧдэма	мӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	абу	абу	AUX	Pcle	Polarity=Neg	11	aux:neg	_	_
11	мӧдэма	мӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	conj	_	SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	16	reparandum	_	SpaceAfter=No
14	,	,	PUNCT	CLB	_	15	punct	_	_
15	абу	абу	AUX	Pcle	Polarity=Neg	16	aux:neg	_	_
16	мӧдэма	мӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	conj	_	_
17	тытэн	тытэн	ADV	Adv	_	16	obl	_	SpaceAfter=No
18	,	,	PUNCT	CLB	_	19	punct	_	_
19	Из	из	PROPN	N	Case=Nom|Number=Sing	21	obl	_	_
20	сайын	сайын	ADP	Po	Case=Ine|Number=Sing	19	case	_	_
21	рӧдиттьынысэ	рӧдиттьыны	VERB	V	Clitic=So|VerbForm=Inf	16	ccomp	_	Lang=Mixed|SpaceAfter=No
22	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 reparandum	color:blue
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


