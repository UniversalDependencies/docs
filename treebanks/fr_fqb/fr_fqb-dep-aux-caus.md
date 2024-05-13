---
layout: base
title:  'Statistics of aux:caus in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `aux:caus`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_fqb-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_fqb-dep-aux-tense.html">aux:tense</a></tt>.

3 nodes (0%) are attached to their parents as `aux:caus`.

3 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux:caus	color:blue
1	J'	il	PRON	_	Number=Sing|Person=1	2	nsubj	_	SpaceAfter=No
2	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	résidence	résidence	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	_
5	secondaire	secondaire	ADJ	_	Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	où	où	ADV	_	PronType=Int	12	advmod	_	_
8	dois	devoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	advcl	_	SpaceAfter=No
9	-je	il	PRON	_	Number=Sing|Person=1	8	nsubj	_	_
10	me	le/lui	PRON	_	Number=Sing|Person=1	12	obj	_	_
11	faire	faire	AUX	_	VerbForm=Inf	12	aux:caus	_	_
12	recenser	recenser	VERB	_	VerbForm=Inf	8	xcomp	_	_
13	?	?	PUNCT	_	_	2	punct	_	_

~~~


