---
layout: base
title:  'Statistics of nummod in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `nummod`

This relation is universal.

4766 nodes (2%) are attached to their parents as `nummod`.

2896 instances of `nummod` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25954678976081.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (3827; 80% instances), <tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (566; 12% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (334; 7% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (19; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="pt_petrogold-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-X.html">X</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nummod	color:blue
1	1	1	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	_
3	-	-	PUNCT	_	_	4	punct	_	_
4	INTRODUÇÃO	introdução	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	LE	LE	PROPN	_	Gender=Masc|Number=Sing	0	root	_	_
2	(	(	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	tCO	tCO	PROPN	_	Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	SpaceAfter=No
5	)	)	PUNCT	_	_	3	punct	_	_
6	=	=	PUNCT	_	_	7	punct	_	_
7	Emissões	emissão	NOUN	_	Gender=Fem|Number=Plur	1	appos	_	_
8	capturadas	capturar	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	7	acl	_	_
9	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	tCO	tCO	PROPN	_	Gender=Masc|Number=Sing	7	appos	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	SpaceAfter=No
12	)	)	PUNCT	_	_	10	punct	_	_
13	x	x	SYM	_	_	15	case	_	_
14	5	5	NUM	_	NumType=Card	15	nummod	_	SpaceAfter=No
15	%	%	SYM	_	_	10	conj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	1.2	1.2	NUM	_	NumType=Card	2	nummod	_	_
2	Objetivo	Objetivo	PROPN	_	Gender=Masc|Number=Sing	0	root	_	_
3	Geral	geral	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_

~~~


