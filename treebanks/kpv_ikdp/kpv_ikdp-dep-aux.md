---
layout: base
title:  'Statistics of aux in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `aux`

This relation is universal.

16 nodes (2%) are attached to their parents as `aux`.

15 instances of `aux` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4375.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (10; 63% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (3; 19% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Так	так	PART	Pcle	_	8	mark	_	Lang=Rus
2	что	что	PRON	Pron	_	1	fixed	_	Lang=Rus|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	никучем	никучем	PRON	Pron	Polarity=Neg	5	advmod	_	_
5	иностраннэй	иностраннӧй	ADJ	A	Case=Nom|Number=Sing	6	advmod	_	Lang=Mixed
6	местаясэ	места	NOUN	N	Case=Ill|Number=Plur	8	obl	_	Lang=Mixed
7	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	ветлоо	ветлыны	VERB	V	Connegative=Yes|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	Воліс	волыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	же	жӧ	PART	Pcle	_	1	discourse	_	Lang=Mixed
3	тундраас	тундра	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obl	_	Lang=Mixed|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	но	но	CCONJ	CC	_	9	cc	_	Lang=Mixed
6	из	оз	VERB	V	Mood=Ind|Person=3|Polarity=Neg|VerbForm=Fin	8	reparandum	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	абу	абу	PART	Pcle	Polarity=Neg	9	aux	_	_
9	понравитчема	понравитчыны	VERB	V	Mood=Ind|Number=Sing	1	conj	_	Lang=Mixed|SpaceAfter=No|Note=Check
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	вермы	вермыны	VERB	V	Connegative=Yes	1	conj	_	_
13	сыа	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
14	сэтшем	сэтшӧм	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	15	amod	_	_
15	условиеясас	условие	NOUN	N	Case=Ill|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	obl	_	Lang=Mixed|SpaceAfter=No
16	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	Пока	пока	ADV	Adv	_	2	advmod	_	_
2	лёк	лёк	ADJ	A	Case=Nom|Number=Sing	0	root	_	_
3	из	oз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|VerbForm=Fin	4	aux	_	_
4	ло	лоны	AUX	V	_	2	aux	_	SpaceAfter=No
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


