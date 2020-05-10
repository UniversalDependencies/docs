---
layout: base
title:  'Statistics of parataxis in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `parataxis`

This relation is universal.

11 nodes (0%) are attached to their parents as `parataxis`.

11 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.54545454545455.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 36% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 27% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 9% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


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
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 21 parataxis	color:blue
1	Ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	2	amod	_	_
2	шуд	шуд	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
3	миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	nmod	_	_
4	странаса	странаса	ADJ	A	Case=Nom|Number=Sing	5	amod	_	_
5	томйӧзлӧн	томйӧзлӧн	NOUN	N	Case=Gen|Number=Sing	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	кодъяс	коді	PRON	Pron	Case=Nom|Number=Plur|PronType=Int	8	nsubj	_	_
8	веськалӧны	веськавны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	5	acl:relcl	_	_
9	Краснӧй	Краснӧй	PROPN	N	Case=Nom|Number=Sing	11	nmod	_	_
10	Армия	армия	NOUN	N	Case=Nom|Number=Sing	9	flat:name	_	_
11	радӧ	рад	NOUN	N	Case=Ill|Number=Sing	8	obl:lmod	_	_
12	да	да	CCONJ	CC	_	13	cc	_	_
13	новлӧдлӧны	новлӧдлыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	8	conj	_	_
14	почетнӧй	почётнӧй	ADJ	A	Case=Nom|Number=Sing	15	amod	_	_
15	ним	ним	NOUN	N	Case=Nom|Number=Sing	13	obj	_	_
16	–	–	PUNCT	PUNCT	_	20	punct	_	_
17	социализм	социализм	NOUN	N	Case=Nom|Number=Sing	18	nmod	_	_
18	странаса	странаса	ADJ	A	Case=Nom|Number=Sing	20	amod	_	_
19	великӧй	великӧй	ADJ	A	Case=Nom|Number=Sing	20	amod	_	_
20	воинлысь	воин	NOUN	N	Case=Abl|Number=Sing	21	nmod	_	_
21	ним	ним	NOUN	N	Case=Nom|Number=Sing	15	parataxis	_	SpaceAfter=No
22	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


