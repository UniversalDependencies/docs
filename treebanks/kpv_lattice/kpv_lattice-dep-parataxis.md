---
layout: base
title:  'Statistics of parataxis in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `parataxis`

This relation is universal.

66 nodes (1%) are attached to their parents as `parataxis`.

58 instances of `parataxis` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.04545454545455.

The following 14 pairs of parts of speech are connected with `parataxis`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (30; 45% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (9; 14% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 parataxis	color:blue
1	—	—	PUNCT	PUNCT	_	7	punct	_	_
2	Мыйла	мыйла	SCONJ	CS	_	7	cc	_	_
3	нӧ	нӧ	PART	Pcle	_	7	advmod	_	_
4	водзджык	водз	ADV	Adv	Degree=Cmp	7	advmod:tmod	_	_
5	эн	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Past	7	aux:neg	_	_
6	вермы	вермыны	AUX	V	Connegative=Yes	7	aux:pot	_	_
7	кайны	кайны	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	11	punct	_	_
9	—	—	PUNCT	PUNCT	_	11	punct	_	_
10	жалитӧмпырысь	жалитӧмпырысь	ADV	Adv	_	11	advmod:eval	_	Note=Check
11	шуис	шуны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	7	parataxis	_	_
12	меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	11	obl	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	GTtags=PUNCT
2	Кутшӧм	кутшӧм	ADJ	Pron	Case=Nom|Number=Sing|PronType=Int	4	amod	_	GTtags=Pron,Interr,Sg,Nom
3	талун	талун	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=N,Sg,Nom
4	луныс	лун	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	GTtags=N,Sg,Nom,PxSg3|SpaceAfter=No
5	?	?	PUNCT	CLB	_	4	punct	_	GTtags=CLB
6	—	—	PUNCT	PUNCT	_	8	punct	_	GTtags=PUNCT
7	йӧйсямӧмӧн	йӧйсямны	VERB	V	Derivation=Omon|VerbForm=Conv	8	advcl	_	GTtags=Ex/V,IV,Der/ӧм,Der/NomAct,N,Sg,Ins
8	юаліс	юавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	parataxis	_	GTtags=V,TV,Ind,Prt1,Sg3
9	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	GTtags=Pron,Pers,Sg3,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 parataxis	color:blue
1	A	а	CCONJ	CC	_	6	cc	_	_
2	гашкӧ	гашкӧ	ADV	Adv	_	6	advmod:eval	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	тайӧяслӧн	тайӧ	PRON	Pron	Case=Gen|Number=Plur|PronType=Dem	6	nmod	_	GTtags=Dem,Pl,Gen
5	яда	яд	NOUN	N	Case=Nom|Derivation=ProprietiveMod|Number=Sing	6	nmod	_	GTtags=Sg,Der,Der/ProprietiveMod,A,Sg,Nom
6	табакыс	табак	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	parataxis	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
7	?	?	PUNCT	CLB	_	6	punct	_	_
8	—	—	PUNCT	PUNCT	_	9	punct	_	_
9	горӧдіс	горӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Sg3
10	кодкӧ	кодкӧ	PRON	Pron	Case=Nom|Derivation=Ko|Number=Sing|PronType=Ind	9	nsubj	_	GTtags=Indef,Sg,Nom,Der/кӧ|SpaceAfter=No
11	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


