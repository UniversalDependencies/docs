---
layout: base
title:  'Statistics of goeswith in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `goeswith`

This relation is universal.

9 nodes (1%) are attached to their parents as `goeswith`.

9 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 8 pairs of parts of speech are connected with `goeswith`: <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (2; 22% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 11% instances), <tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (1; 11% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 11% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (1; 11% instances), <tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 goeswith	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	_
2	ае	ай	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	_
3	тоже	тоже	PART	Pcle	_	4	discourse	_	_
4	рӧбитіс	рӧбитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	столярын	столяр	NOUN	N	Case=Ine|Number=Sing	4	obl	_	Lang=Rus
6	ли	ли	PART	Pcle	_	5	discourse	_	Lang=Mixed
7	слесарьын	слесарь	NOUN	N	Case=Ine|Number=Sing	5	appos	_	Lang=Rus
8	ли	ли	PART	Pcle	_	7	discourse	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	8	punct	_	_
10	но	но	CCONJ	CC	_	15	cc	_	Lang=Mixed|SpaceAfter=No
11	,	,	PUNCT	CLB	_	10	punct	_	_
12	чё	чё	PART	Pcle	_	15	obj	_	Lang=Rus|SpaceAfter=No|Note=Check
13	-	-	PUNCT	CLB	_	12	goeswith	_	SpaceAfter=No
14	то	чё-то	PART	Pcle	_	12	goeswith	_	Lang=Rus
15	делал	делать	VERB	V	Number=Sing	4	conj	_	Lang=Rus|SpaceAfter=No
16	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	И	и	CCONJ	CC	_	5	cc	_	Lang=Mixed
2	ӧні	ӧні	ADV	Adv	_	5	advmod	_	_
3	бара	бара	ADV	Adv	_	5	advmod	_	_
4	же	же	PART	Pcle	_	3	goeswith	_	Lang=Mixed
5	мӧдісныс	мӧдны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	вӧрзёоны	вӧрзьыны	VERB	V	VerbForm=Inf	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 goeswith	color:blue
1	Он	оз	VERB	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	reparandum	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	он	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	живносьсэ	живнось	NOUN	N	Case=Acc	5	obj	_	Lang=Mixed
5	сдайт	сдайтны	VERB	V	Connegative=Yes|Number=Sing	0	root	_	Lang=Mixed|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	но	но	CCONJ	CC	_	11	cc	_	Lang=Mixed
8	какой	какой	DET	Det	_	11	amod	_	Lang=Rus|SpaceAfter=No
9	-	-	PUNCT	CLB	_	8	goeswith	_	SpaceAfter=No
10	то	то	ADV	Adv	_	8	goeswith	_	Lang=Rus
11	процент	процент	NOUN	N	Case=Nom|Number=Sing	5	acl	_	Lang=Rus
12	там	там	ADV	Adv	_	11	advmod	_	Lang=Rus|SpaceAfter=No
13	,	,	PUNCT	CLB	_	12	punct	_	_
14	сколько	сколько	ADV	Adv	_	16	advmod	_	Lang=Rus
15	налог	налог	NOUN	N	Case=Nom|Number=Sing	16	obj	_	Lang=Rus
16	сетасныс	сетны	VERB	V	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	11	conj	_	_
17	мыйттэм	мыйтӧм	PRON	Pron	_	16	advmod	_	SpaceAfter=No
18	,	,	PUNCT	CLB	_	17	punct	_	_
19	сіе	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	21	obj	_	_
20	и	и	PART	Pcle	_	21	discourse	_	Lang=Mixed
21	сдайтан	сдайтны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	advcl	_	Lang=Mixed|SpaceAfter=No
22	.	.	PUNCT	CLB	_	21	punct	_	_

~~~


