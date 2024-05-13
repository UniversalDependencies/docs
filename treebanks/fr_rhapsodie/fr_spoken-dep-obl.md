---
layout: base
title:  'Statistics of obl in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_spoken-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_spoken-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_spoken-dep-obl-mod.html">obl:mod</a></tt>.

1 nodes (0%) are attached to their parents as `obl`.

1 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `obl`: <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 obl	color:blue
1	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	_
2	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	1	reparandum	_	_
3	gens	gens	NOUN	_	_	4	nsubj	_	_
4	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	_	_	6	case	_	_
6	plus	plus	ADV	_	_	4	obj	_	_
7	en	en	ADP	_	_	8	case	_	_
8	plus	plus	ADV	_	_	10	obj	_	_
9	de	de	ADP	_	_	10	case	_	_
10	transports	transports	NOUN	_	_	15	obj	_	_
11	en	en	ADP	_	_	12	case	_	_
12	commun	commun	NOUN	_	Gender=Masc|Number=Sing	15	obl	_	_
13	euh	euh	INTJ	_	_	12	discourse	_	_
14	de	de	ADP	_	_	15	case	_	_
15	plus	plus	ADV	_	_	6	conj	_	_
16	en	en	ADP	_	_	17	case	_	_
17	plus	plus	ADV	_	_	19	obj	_	_
18	de	de	ADP	_	_	19	case	_	_
19	transports	transports	NOUN	_	_	15	conj	_	_
20	en	en	ADP	_	_	22	case	_	_
21	tout	tout	ADJ	_	Gender=Masc|Number=Sing	22	amod	_	_
22	cas	cas	NOUN	_	Gender=Masc	19	discourse	_	_
23	pour	pour	ADP	_	_	24	mark	_	_
24	aller	aller	VERB	ETRE	VerbForm=Inf	4	advcl	_	_
25	travailler	travailler	VERB	_	VerbForm=Inf	24	xcomp	_	_

~~~


