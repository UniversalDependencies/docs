---
layout: base
title:  'Statistics of nmod:appos in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-nmod.html">nmod</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:appos`.

6 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83333333333333.

The following 1 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (6; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 nmod:appos	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	SpaceAfter=No
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	euh	euh	INTJ	_	_	7	discourse	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	InTitle=Yes
7	Métaphysique	métaphysique	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Title=Yes
8	de	de	ADP	_	_	10	case	_	InTitle=Yes
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	InTitle=Yes
10	choses	chose	NOUN	_	Gender=Fem|Number=Plur	7	nmod	_	InTitle=Yes
11	d'	de	ADP	_	_	12	case	_	SpaceAfter=No
12	Amélie	Amélie	PROPN	_	_	7	nmod:appos	_	_
13	Notomb	Notomb	PROPN	_	_	12	flat	_	SpaceAfter=No
14	.	.	PUNCT	_	_	7	punct	_	_

~~~


