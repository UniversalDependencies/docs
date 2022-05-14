---
layout: base
title:  'Statistics of det:poss in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-det.html">det</a></tt>.

3 nodes (0%) are attached to their parents as `det:poss`.

3 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `det:poss`: <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 det:poss	color:blue
1	Quando	quando	ADP	_	_	2	case	_	_
2	menino	menino	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	gostava	gostar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	de	de	SCONJ	_	_	6	mark	_	_
6	estudar	estudar	VERB	_	VerbForm=Inf	4	xcomp	_	_
7	e	e	CCONJ	_	_	9	cc	_	_
8	não	não	ADV	_	Polarity=Neg	9	advmod	_	_
9	queria	querer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	conj	_	_
10	ser	ser	AUX	_	VerbForm=Inf	12	cop	_	_
11	de	de	ADP	_	_	12	case	_	_
12	circo	circo	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	como	como	ADV	_	_	12	advmod	_	_
15	seus	seu	DET	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	16	det:poss	_	_
16	pais	pai	NOUN	_	Gender=Masc|Number=Plur	14	obl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


