---
layout: base
title:  'Statistics of csubj:pass in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="nl_lassysmall-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="nl_lassysmall-dep-csubj-outer.html">csubj:outer</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 csubj:pass	color:blue
1	Wat	wat	PRON	VNW|vb|pron|stan|vol|3o|ev	Person=3|PronType=Int	6	nsubj	6:nsubj	_
2	er	er	ADV	VNW|aanw|adv-pron|stan|red|3|getal	_	6	advmod	6:advmod	_
3	van	van	ADP	VZ|init	_	5	case	5:case	_
4	de	de	DET	LID|bep|stan|rest	Definite=Def|PronType=Art	5	det	5:det	_
5	toren	toren	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	6	obl:arg	6:obl:arg:van	_
6	restte	resten	VERB	WW|pv|verl|ev	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	15	csubj:pass	15:csubj:pass	SpaceAfter=No
7	,	,	PUNCT	LET	_	6	punct	6:punct	_
8	werd	worden	AUX	WW|pv|verl|ev	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	15	aux:pass	15:aux:pass	_
9	in	in	ADP	VZ|init	_	10	case	10:case	_
10	'44	'44	NUM	TW|hoofd|vrij	_	15	obl	15:obl:in	_
11	door	door	ADP	VZ|init	_	14	case	14:case	_
12	de	de	DET	LID|bep|stan|rest	Definite=Def|PronType=Art	14	det	14:det	_
13	aftrekkende	af_trekken	VERB	WW|od|prenom|met-e	VerbForm=Part	14	amod	14:amod	_
14	Duitsers	Duitser	PROPN	N|eigen|mv|basis	Number=Plur	15	obl:agent	15:obl:agent	_
15	opgeblazen	op_blazen	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
16	.	.	PUNCT	LET	_	15	punct	15:punct	_

~~~


