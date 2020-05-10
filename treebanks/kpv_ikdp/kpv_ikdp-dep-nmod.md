---
layout: base
title:  'Statistics of nmod in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `nmod`

This relation is universal.

64 nodes (5%) are attached to their parents as `nmod`.

45 instances of `nmod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9375.

The following 11 pairs of parts of speech are connected with `nmod`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (23; 36% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (16; 25% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt> (6; 9% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (4; 6% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Рӧдитчи	рӧдитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	Lang=Mixed
2	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	шейсят	шейсят	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	Lang=Rus
4	четвёртэй	четвёртэй	NUM	Num	Case=Nom|Number=Sing|NumType=Ord	5	nummod	_	Lang=Rus
5	годын	год	NOUN	N	Case=Ine|Number=Sing	1	obl	_	Lang=Mixed
6	октяб	октяб	NOUN	N	Case=Nom|Number=Sing	7	nmod	_	Lang=Mixed
7	тӧлысе	тӧлысь	NOUN	N	Case=Ill|Number=Sing	1	obl	_	_
8	тундраын	тундра	NOUN	N	Case=Ine|Number=Sing	1	obl	_	Lang=Mixed|SpaceAfter=No
9	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	2	nmod	_	_
2	семяын	семя	NOUN	N	Case=Ine|Number=Sing	0	root	_	Lang=Mixed
3	дас	дас	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	морт	морт	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod	color:blue
1	Вӧдзӧ	вӧдзӧ	ADV	Adv	Case=Ill|Number=Sing	5	advmod:tmod	_	_
2	дик	дик	ADJ	A	Case=Nom|Number=Sing	3	amod	_	GTtags=Sg,Nom
3	Иван	Иван	PROPN	N	Case=Nom|Number=Sing	5	nsubj	_	GTtags=Sem/Mal,Prop,Sg,Nom
4	ойын	ой	NOUN	N	Case=Ine|Number=Sing	5	obl	_	GTtags=Sg,Ine
5	думайтіс	думайтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	Lang=Mixed|GTtags=IV,Ind,Prt1,Sg3
6	мӧдны	мӧдны	VERB	V	VerbForm=Inf	5	xcomp	_	GTtags=IV,Inf
7	Йӧртым	Йӧртым	PROPN	N	Case=Nom|Number=Sing	8	nmod	_	GTtags=Prop,Sem/Plc,Sg,Nom
8	туйӧ	туйӧ	NOUN	N	Case=Ill|Number=Sing	6	obl	_	GTtags=Sg,Ill|SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


