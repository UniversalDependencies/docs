---
layout: base
title:  'Statistics of parataxis in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `parataxis`

This relation is universal.

10 nodes (0%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.9.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (5; 50% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis	color:blue
1	Воа	воны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
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
9	кутас	кутны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	—	—	PUNCT	PUNCT	_	12	punct	_	_
12	нурбыльті	нурбыльтны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	parataxis	_	_
13	сӧмын	сӧмын	ADV	Adv	_	12	advmod	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 21 parataxis	color:blue
1	Ыджыд	ыджыд	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	шуд	шуд	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
3	миян	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nmod	_	_
4	странаса	страна	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	amod	_	_
5	томйӧзлӧн	томйӧзлӧн	NOUN	N	Case=Gen|Number=Sing	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	кодъяс	коді	PRON	Pron	Case=Nom|Number=Plur|PronType=Int	8	nsubj	_	_
8	веськалӧны	веськавны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
9	Краснӧй	Краснӧй	PROPN	Sem/Plc	Case=Nom|Number=Sing	11	nmod	_	_
10	Армия	армия	NOUN	N	Case=Nom|Number=Sing	9	flat:name	_	_
11	радӧ	рад	NOUN	N	Case=Ill|Number=Sing	8	obl	_	_
12	да	да	CCONJ	CC	_	13	cc	_	_
13	новлӧдлӧны	новлӧдлыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
14	почетнӧй	почётнӧй	ADJ	A	Case=Acc|Degree=Pos|Number=Sing	15	amod	_	_
15	ним	ним	NOUN	N	Case=Acc|Number=Sing	13	obj	_	_
16	–	–	PUNCT	PUNCT	_	17	punct	_	_
17	социализм	социализм	NOUN	N	Case=Nom|Number=Sing	18	nmod	_	_
18	странаса	страна	ADJ	A	Case=Nom|Degree=Pos|Derivation=Sa|Number=Sing	20	amod	_	_
19	великӧй	великӧй	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	20	amod	_	_
20	воинлысь	воин	NOUN	N	Case=Abl|Number=Sing	21	nmod	_	_
21	ним	ним	NOUN	N	Case=Acc|Number=Sing	15	parataxis	_	SpaceAfter=No
22	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


