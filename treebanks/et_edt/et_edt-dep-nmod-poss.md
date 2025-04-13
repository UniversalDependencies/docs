---
layout: base
title:  'Statistics of nmod:poss in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-nmod.html">nmod</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:poss`.

1 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Hitiga	hitt	NOUN	S	Case=Com|Number=Sing	7	obl	7:obl	NE=B-Prod
2	"	"	PUNCT	Z	_	5	punct	5:punct	NE=I-Prod|SpaceAfter=No
3	My	my	PRON	T	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod	Lang=en|NE=I-Prod
4	Name	name	NOUN	T	Number=Sing	5	nsubj	5:nsubj	Lang=en|NE=I-Prod
5	Is	be	VERB	T	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl	1:acl	Lang=en|NE=I-Prod|SpaceAfter=No
6	"	"	PUNCT	Z	_	5	punct	5:punct	NE=I-Prod
7	kuulsaks	kuulus	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	8	xcomp	8:xcomp	_
8	saanud	saa=nud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	acl	9:acl	_
9	Eminem	Eminem	PROPN	S	Case=Nom|Number=Sing	10	nsubj	10:nsubj|13:nsubj	Arg=minema_Arg_0|NE=B-Per
10	läks	minema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=minema_1
11	keset	keset	ADP	K	AdpType=Prep	12	case	12:case	_
12	kontserti	kontsert	NOUN	S	Case=Par|Number=Sing	10	obl	10:obl	_
13	kaklema	kaklema	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	10	xcomp	10:xcomp	Arg=minema_Arg_5
14	pealtvaatajaga	pealt_vaataja	NOUN	S	Case=Com|Number=Sing	13	obl	13:obl	SpaceAfter=No
15	.	.	PUNCT	Z	_	10	punct	10:punct	_

~~~


