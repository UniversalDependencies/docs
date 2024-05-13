---
layout: base
title:  'Statistics of aux:pass in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `aux:pass`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_parisstories-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_parisstories-dep-aux-tense.html">aux:tense</a></tt>.

105 nodes (0%) are attached to their parents as `aux:pass`.

105 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42857142857143.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (105; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	me	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	expl:comp	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	aperçue	apercevoir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	ccomp	_	_
9	qui	qui	PRON	_	PronType=Rel	11	nsubj	_	_
10	les	eux	PRON	_	Number=Plur|Person=3|PronType=Prs	11	obj	_	_
11	empêchait	empêcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	advcl:cleft	_	_
12	de	de	ADP	_	_	13	mark	_	_
13	gonfler	gonfler	VERB	_	VerbForm=Inf	11	xcomp	_	SpaceAfter=No|Subject=ObjRaising
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


