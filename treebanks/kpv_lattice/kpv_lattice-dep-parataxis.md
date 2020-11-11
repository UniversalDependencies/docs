---
layout: base
title:  'Statistics of parataxis in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `parataxis`

This relation is universal.

24 nodes (0%) are attached to their parents as `parataxis`.

22 instances of `parataxis` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.58333333333333.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (10; 42% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (5; 21% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 parataxis	color:blue
1	—	—	PUNCT	PUNCT	_	6	punct	_	_
2	Мыйла	мыйла	SCONJ	CS	_	6	cc	_	_
3	нӧ	нӧ	PART	Pcle	_	6	advmod	_	_
4	водзджык	водз	ADV	Adv	Degree=Cmp	6	advmod:tmod	_	_
5	эн	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Past	6	aux:neg	_	_
6	вермы	вермыны	VERB	V	Connegative=Yes	0	root	_	_
7	кайны	кайны	VERB	V	VerbForm=Inf	6	xcomp	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	11	punct	_	_
9	—	—	PUNCT	PUNCT	_	11	punct	_	_
10	жалитӧмпырысь	жалитӧмпырысь	ADV	Adv	_	11	advmod	_	Note=Check
11	шуис	шуны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	parataxis	_	_
12	меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	11	obl	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	GTtags=PUNCT
2	Кутшӧм	кутшӧм	ADV	Pron	Case=Nom|Number=Sing|PronType=Int	4	advmod	_	GTtags=Pron,Interr,Sg,Nom
3	талун	талун	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=N,Sg,Nom
4	луныс	лун	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	GTtags=N,Sg,Nom,PxSg3|SpaceAfter=No
5	?	?	PUNCT	CLB	_	4	punct	_	GTtags=CLB
6	—	—	PUNCT	PUNCT	_	8	punct	_	GTtags=PUNCT
7	йӧйсямӧмӧн	йӧйсямны	VERB	V	Derivation=Omon|Valency=1|VerbForm=Conv	8	advcl	_	GTtags=Ex/V,IV,Der/ӧм,Der/NomAct,N,Sg,Ins
8	юаліс	юавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	4	parataxis	_	GTtags=V,TV,Ind,Prt1,Sg3
9	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	GTtags=Pron,Pers,Sg3,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Пияныс	пи	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	nsubj:cop	_	GTtags=Pl,Nom,PxSg3
2	зэв	зэв	ADV	Adv	_	3	advmod	_	_
3	шаньӧсь	шань	ADJ	A	Number[subj]=Plur	0	root	_	GTtags=Cop,Pl|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	любитӧны	любитны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Valency=2	3	parataxis	_	GTtags=TV,Ind,Prs,Pl3
6	каньӧс	кань	NOUN	N	Case=Acc|Number=Sing	5	obj	_	GTtags=Sg,Acc|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


