---
layout: base
title:  'Statistics of xcomp:pred in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="sme-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="sme-dep-xcomp-obj.html">xcomp:obj</a></tt>.

1 nodes (0%) are attached to their parents as `xcomp:pred`.

1 instances of `xcomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="sme-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 xcomp:pred	color:blue
1	Kealláris	keallir	NOUN	N	Case=Loc|Number=Sing	2	obl	_	_
2	ledje	leat	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	maiddái	maiddái	ADV	Adv	_	2	advmod	_	_
4	guokte	guokte	NUM	Num	Case=Nom|Number=Sing|NumType=Card	5	nummod	_	_
5	klássalanja	klássalatnja	NOUN	N	Case=Gen|Number=Sing	2	nsubj	_	_
6	mat	mii	PRON	Pron	Case=Nom|Number=Plur|PronType=Rel	5	nsubj	_	_
7	dáláš	dáláš	ADJ	A	_	5	amod	_	_
8	mearrádusaid	mearrádus	NOUN	N	Case=Gen|Number=Plur	5	obl	_	_
9	mielde	mielde	ADP	Po	_	8	case	_	_
10	eai	ii	VERB	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin	5	aux:neg	_	_
11	várra	várra	ADV	Adv	_	5	advmod	_	_
12	livčče	leat	VERB	V	Connegative=Yes|Mood=Cnd|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
13	lean	leat	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	dohkálaččat	dohkálaš	ADJ	A	Case=Nom|Number=Plur	2	parataxis	_	_
15	oahpahuslatnjan	oahpahuslatnja	NOUN	N	Case=Ess	14	xcomp:pred	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


