---
layout: base
title:  'Statistics of amod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `amod`

This relation is universal.

83 nodes (6%) are attached to their parents as `amod`.

83 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07228915662651.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (61; 73% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (14; 17% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADP.html">ADP</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Пӧсь	пӧсь	ADJ	A	Case=Nom|Number=Sing	2	amod	_	_
2	сынӧдыс	сынӧд	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
3	кыскис	кыскыны	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	вын-эбӧстӧ	вын-эбӧс	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=2	3	obj	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Кыдзи	кыдзи	ADV	Adv	_	2	advmod	_	_
2	лои	лоны	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	Краснӧй	краснӧй	ADJ	A	Case=Nom|Number=Sing	4	amod	_	_
4	Армияса	армияса	ADJ	A	Case=Nom|Number=Sing	5	amod	_	_
5	командирӧн	командир	NOUN	N	Case=Ins|Number=Sing	2	obl	_	SpaceAfter=No
6	?	?	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 amod	color:blue
1	Ва	ва	NOUN	N	Case=Nom|Number=Sing	13	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	керӧс	керӧс	NOUN	N	Case=Nom|Number=Sing	1	list	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	из	из	NOUN	N	Case=Nom|Number=Sing	1	list	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	му	му	NOUN	N	Case=Nom|Number=Sing	1	list	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	сынӧд	сынӧд	NOUN	N	Case=Nom|Number=Sing	1	list	_	_
10	некор	некор	ADV	Adv	Polarity=Neg	13	advmod	_	_
11	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|VerbForm=Fin	12	aux	_	_
12	вӧвны	вӧвны	AUX	V	Person=3	13	cop	_	_
13	ловъяӧсь	ловъя	ADJ	A	Number=Plur	0	root	_	SpaceAfter=No
14	,	,	PUNCT	CLB	_	15	punct	_	_
15	сы	сы	PRON	Pron	PronType=Dem	19	mark	_	_
16	понда	понда	ADP	Po	_	15	case	_	_
17	найӧясӧс	найӧ	PRON	Pron	Case=Acc|Person=3|PronType=Prs	19	obj	_	_
18	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	19	aux	_	_
19	шуӧй	шуны	VERB	V	Connegative=Yes|Person=1	13	advcl	_	_
20	кулӧм	кулӧм	VERB	V	Tense=Past|VerbForm=Part	21	amod	_	_
21	торъясӧн	тор	NOUN	N	Case=Ins|Number=Plur	19	obl	_	_
22	—	—	PUNCT	CLB	_	23	punct	_	_
23	шуам	шуны	VERB	V	Mood=Ind|Person=1|Tense=Pres|VerbForm=Fin	19	conj	_	_
24	ловтӧм	ловтӧм	VERB	V	Polarity=Neg|Tense=Past|VerbForm=Part	25	amod	_	_
25	торъясӧн	тор	NOUN	N	Case=Ins|Number=Plur	23	obj	_	SpaceAfter=No
26	.	.	PUNCT	CLB	_	13	punct	_	_

~~~


