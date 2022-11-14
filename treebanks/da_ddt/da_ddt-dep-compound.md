---
layout: base
title:  'Statistics of compound in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="da_ddt-dep-compound-prt.html">compound:prt</a></tt>.

2 nodes (0%) are attached to their parents as `compound`.

2 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `compound`: <tt><a href="da_ddt-pos-NUM.html">NUM</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	Boligydelsen	boligydelse	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	udgør	udgøre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	i	i	ADP	_	AdpType=Prep	4	case	_	_
4	1992	1992	NUM	_	NumType=Card	2	obl	_	_
5	93	93	NUM	_	NumType=Card	7	nummod	_	_
6	1/3	1/3	NUM	_	NumType=Card	5	compound	_	_
7	%	%	SYM	_	_	2	obj	_	_
8	af	af	ADP	_	AdpType=Prep	9	case	_	_
9	forskellen	forskel	NOUN	_	Definite=Def|Gender=Com|Number=Sing	7	nmod	_	_
10	mellem	mellem	ADP	_	AdpType=Prep	13	case	_	_
11	dit	din	DET	_	Gender=Neut|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	13	det	_	_
12	beregnede	beregne	VERB	_	Definite=Def|Number=Sing|Tense=Past|VerbForm=Part	13	amod	_	_
13	grænsebeløb	grænsebeløb	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	9	nmod	_	_
14	og	og	CCONJ	_	_	13	dep	_	_
15	din	din	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	16	det	_	_
16	husleje	husleje	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	13	conj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


