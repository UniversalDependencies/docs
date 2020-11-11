---
layout: base
title:  'Statistics of aux:caus in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `aux:caus`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_gsd-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_gsd-dep-aux-tense.html">aux:tense</a></tt>.

270 nodes (0%) are attached to their parents as `aux:caus`.

270 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08518518518519.

The following 1 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (270; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:caus	color:blue
1	N'	ne	ADV	_	Polarity=Neg	2	advmod	_	SpaceAfter=No|wordform=n'
2	hésitez	hésiter	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	-pas	pas	ADV	_	Polarity=Neg	2	advmod	_	wordform=pas
4	à	à	ADP	_	_	7	mark	_	_
5	la	le	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj:agent	_	_
6	faire	faire	AUX	_	VerbForm=Inf	7	aux:caus	_	_
7	circuler	circuler	VERB	_	VerbForm=Inf	2	xcomp:obl	_	_
8	largement	largement	ADV	_	_	7	advmod	_	_
9	autour	autour	ADV	_	_	7	advmod	_	_
10	de	de	ADP	_	_	11	case	_	_
11	vous	lui	PRON	_	Person=2|PronType=Prs	9	obl:arg	_	_
12	!	!	PUNCT	_	_	2	punct	_	_

~~~


