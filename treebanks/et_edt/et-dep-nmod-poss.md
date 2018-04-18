---
layout: base
title:  'Statistics of nmod:poss in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="et-dep-nmod.html">nmod</a></tt>.

7 nodes (0%) are attached to their parents as `nmod:poss`.

7 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (7; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Kodu	kodu	NOUN	S	Case=Gen|Number=Sing	2	nmod	_	_
2	tunnet	tunne	NOUN	S	Case=Par|Number=Sing	4	nsubj:cop	_	_
3	meie	mina	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	4	nmod:poss	_	_
4	tibul	tibu	NOUN	S	Case=Ade|Number=Sing	0	root	_	_
5	kasti	kast	NOUN	S	Case=Gen|Number=Sing	4	obl	_	_
6	suhtes	suhtes	ADP	K	AdpType=Post	5	case	_	_
7	polnud	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


