---
layout: base
title:  'Statistics of aux in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="kpv_lattice-dep-aux-neg.html">aux:neg</a></tt>.

13 nodes (0%) are attached to their parents as `aux`.

12 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38461538461538.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (9; 69% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (2; 15% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (2; 15% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Томъяс	том	ADJ	A	Case=Nom|Number=Plur	4	nsubj	_	GTtags=A,Pl,Nom
2	менӧ	ме	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	4	obj	_	GTtags=Pron,Pers,Sg1,Acc
3	оз	оз	AUX	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	4	aux	_	GTtags=V,Neg,Ind,Prs,Pl3
4	гӧгӧрвоны	гӧгӧрвоны	VERB	V	Connegative=Yes|Number=Plur|Valency=2	0	root	_	GTtags=V,TV,ConNeg,Pl3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	GTtags=CLB
6	а	а	CCONJ	CC	_	9	mark	_	GTtags=CC
7	пӧрысьяс	пӧрысь	ADJ	A	Case=Nom|Number=Plur	9	nsubj	_	GTtags=A,Pl,Nom
8	—	—	PUNCT	PUNCT	_	9	punct	_	GTtags=PUNCT
9	кокаласны	кокавны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Fut|Valency=2	4	advcl	_	GTtags=V,TV,Ind,Fut,Pl3|SpaceAfter=No
10	...	...	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
2	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	3	aux	_	GTtags=V,IV,Ind,Prt1,Sg3
3	вевттӧм	вевттӧм	ADJ	A	Case=Nom|Number=Sing	0	root	_	GTtags=A,Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	GTtags=CLB
5	ляпкыдик	ляпкыдик	ADJ	A	Case=Nom|Number=Sing	3	conj	_	GTtags=A,Sg,Nom|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	GTtags=CLB
7	ӧшиньяссӧ	ӧшинь	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	obj	_	GTtags=N,Pl,Acc,PxSg3
8	пӧвйӧн	пӧвйӧн	NOUN	N	Case=Ins|Number=Sing	9	obl	_	GTtags=N,Sg,Ins
9	тупкӧма	тупкыны	VERB	V	Case=Nom|Derivation=ProprietiveMod|Number=Sing|Valency=2	3	conj	_	GTtags=V,TV,Der,Der/ӧм,Der/NomAct,N,Sg,Der,Der/ProprietiveMod,A,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Таво	таво	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	GTtags=Temp
2	матіясас	матіса	ADJ	A	Case=Ine|Number=Plur|Number[psor]=Sing|Person[psor]=3	0	root	_	GTtags=Pl,Ine,PxSg3,So/CP
3	эз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	5	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
4	вӧв	вӧвны	AUX	V	Connegative=Yes|Valency=1	5	aux	_	GTtags=IV,ConNeg
5	вотӧсыс	вотӧс	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


