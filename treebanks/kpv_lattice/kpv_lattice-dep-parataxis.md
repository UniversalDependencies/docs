---
layout: base
title:  'Statistics of parataxis in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `parataxis`

This relation is universal.

7 nodes (1%) are attached to their parents as `parataxis`.

7 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.71428571428571.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (5; 71% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis	color:blue
1	Воа	воны	VERB	V	Mood=Ind|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	ог	оз	VERB	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
3	нӧ	нӧ	PART	Pcle	_	1	discourse	_	_
4	эськӧ	эськӧ	PART	Pcle	_	1	discourse	_	_
5	зэрӧдзыс	зэр	NOUN	N	Case=Ter|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nmod	_	_
6	гортӧдз	горт	NOUN	N	Case=Ter|Number=Sing	1	obl	_	SpaceAfter=No
7	?	?	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 parataxis	color:blue
1	—	—	PUNCT	PUNCT	_	2	punct	_	_
2	Он	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	ӧд	ӧд	PART	Pcle	_	2	discourse	_	_
4	тӧд	тӧд	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	мый	мый	SCONJ	CS	_	9	mark	_	_
7	татшӧма	татшӧма	ADV	Adv	_	8	advmod	_	_
8	зэрны-гымавны	зэрны-гымавны	VERB	V	VerbForm=Inf	9	xcomp	_	_
9	кутас	кутны	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	—	—	PUNCT	PUNCT	_	12	punct	_	_
12	нурбыльті	нурбыльтны	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	4	parataxis	_	_
13	сӧмын	сӧмын	ADV	Adv	_	12	advmod	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


