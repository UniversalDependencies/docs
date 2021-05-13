---
layout: base
title:  'Statistics of nmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sms_giellagas-dep-nmod-poss.html">nmod:poss</a></tt>.

7 nodes (0%) are attached to their parents as `nmod`.

5 instances of `nmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14285714285714.

The following 2 pairs of parts of speech are connected with `nmod`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Peter	Peter	NOUN	N	Case=Gen|Number=Sing	2	nmod	_	GTtags=Prop,Sem/Mal,Sg,Gen
2	räʹjjlaž	räʹjjlaž	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=Sg,Nom
3	kälkkii	kälkkeed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	0	root	_	GTtags=Ind,Prt,Sg3
4	čuâl	čuâll	NOUN	N	Case=Acc|Number=Sing	3	obj	_	GTtags=Sg,Acc|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	Mâŋŋa	mâŋŋa	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Sem/Time
2	dââʹst	dât	PRON	Pron	Case=Loc|Number=Sing	1	nmod	_	GTtags=Sg,Loc
3	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
4	...	...	PUNCT	CLB	_	8	punct	_	_
5	vitmlo	vitmlo	NUM	Num	_	6	nummod	_	_
6	ekksaž	ekksaž	ADJ	A	_	7	amod	_	GTtags=Attr
7	päʹrnn	päʹrnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	8	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom
8	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


