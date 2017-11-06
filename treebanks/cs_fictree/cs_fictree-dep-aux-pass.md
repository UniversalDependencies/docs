---
layout: base
title:  'Statistics of aux:pass in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-aux.html">aux</a></tt>.

139 nodes (0%) are attached to their parents as `aux:pass`.

138 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88489208633094.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (139; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Cosi	cosi	PRON	PZ--1----------	Case=Nom|PronType=Ind	0	root	_	_
2	,	,	PUNCT	Z:-------------	_	5	punct	_	_
3	co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	5	nsubj:pass	_	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	_	_
5	míněno	míněný	ADJ	VsNS------AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	1	amod	_	_
6	zcela	zcela	ADV	Db-------------	_	9	advmod	_	_
7	a	a	CCONJ	J^-------------	_	8	cc	_	_
8	naprosto	naprosto	ADV	Db-------------	_	6	conj	_	_
9	jinak	jinak	ADV	Db-------------	_	5	advmod	_	_
10	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


