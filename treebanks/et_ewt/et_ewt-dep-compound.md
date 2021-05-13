---
layout: base
title:  'Statistics of compound in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et_ewt-dep-compound-prt.html">compound:prt</a></tt>.

38 nodes (0%) are attached to their parents as `compound`.

31 instances of `compound` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (32; 84% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	2004.	2004.	ADJ	N	Case=Gen|Number=Sing|NumForm=Digit|NumType=Ord	2	amod	2:amod	_
2	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	seisuga	seis	NOUN	S	Case=Com|Number=Sing	5	obl	5:obl	_
4	võis	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	rääkida	rääkima	VERB	V	VerbForm=Inf	0	root	0:root	_
6	12	12	NUM	N	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
7	miljonist	miljon	NUM	N	Case=Ela|Number=Sing|NumForm=Word|NumType=Card	6	compound	6:compound	_
8	kilovatt-tunnist	kilo_vatt-tund	NOUN	S	Case=Ela|Number=Sing	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 compound	color:blue
1	homme	homme	ADV	D	_	0	root	0:root	_
2	enam	enam	ADV	D	_	1	advmod	1:advmod	_
3	kasu	kasu	NOUN	S	Case=Par|Number=Sing	1	nsubj:cop	1:nsubj	_
4	poleks	olema	AUX	V	Mood=Cnd|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	SpaceAfter=No
5	,	,	PUNCT	Z	_	8	punct	8:punct	_
6	viimasel	viimane	ADJ	A	Case=Ade|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	hetkel	hetk	NOUN	S	Case=Ade|Number=Sing	8	obl	8:obl	_
8	ärkasin	ärkama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	1:conj	_
9	või	või	CCONJ	J	_	10	cc	10:cc	_
10	midagi	miski	PRON	P	Case=Par|Number=Sing|PronType=Ind	1	conj	1:conj	_
11	suur	suur	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	12	amod	12:amod	_
12	tänu	tänu	NOUN	S	Case=Nom|Number=Sing	1	conj	1:conj	_
13	kõigile	kõik	PRON	P	Case=All|Number=Plur|PronType=Tot	12	nmod	12:nmod|16:nsubj	SpaceAfter=No
14	,	,	PUNCT	Z	_	16	punct	16:punct	_
15	kes	kes	PRON	P	Case=Nom|Number=Plur|PronType=Int,Rel	16	nsubj	13:ref	_
16	võtavad	võtma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl:relcl	13:acl	_
17	vaevaks	vaev	NOUN	S	Case=Tra|Number=Sing	16	xcomp	16:xcomp	_
18	tööde	töö	NOUN	S	Case=Gen|Number=Plur	20	nmod	20:nmod	_
19	üles	üles	ADV	D	_	20	compound	20:compound	_
20	otsimise	otsimine	NOUN	S	Case=Gen|Number=Sing	16	obj	16:obj	SpaceAfter=No
21	!	!	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Sai	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
2	Inglismaa	Inglis_maa	PROPN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	_
3	õppimis	õppimis	NOUN	S	Case=Nom|Number=Sing	4	compound	4:compound	_
4	eelistustest	eelistus	NOUN	S	Case=Ela|Number=Plur	5	obl	5:obl	_
5	räägitud	rääkima	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


