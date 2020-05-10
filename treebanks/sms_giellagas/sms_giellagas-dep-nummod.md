---
layout: base
title:  'Statistics of nummod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nummod`

This relation is universal.

12 nodes (1%) are attached to their parents as `nummod`.

12 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NUM.html">NUM</a></tt> (11; 92% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-NUM.html">NUM</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	2	det	_	GTtags=Dem,Sg,Nom
2	sluužbäiʹǧǧ	sluuʹžbäiʹǧǧ	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	GTtags=Sg,Nom
3	leäi	leeʹd	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	5	cop	_	GTtags=IV,Ind,Prt,Sg3
4	kuâhttlovitt	kuâhttlovitt	NUM	Num	_	5	nummod	_	_
5	eeʹjj	eeʹǩǩ	NOUN	N	Case=Gen|Number=Sing	0	root	_	GTtags=Sg,Gen|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Mâŋŋa	mâŋŋa	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Sem/Time
2	dââʹst	dât	PRON	Pron	Case=Loc|Number=Sing	1	nmod	_	GTtags=Sg,Loc
3	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg3
4	...	...	PUNCT	CLB	_	8	punct	_	_
5	vitmlo	vitmlo	NUM	Num	_	6	nummod	_	_
6	ekksaž	ekksaž	ADJ	A	_	7	amod	_	GTtags=Attr
7	päʹrnn	päʹrnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	8	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom
8	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	3	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


