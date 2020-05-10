---
layout: base
title:  'Statistics of aux in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="kpv_lattice-dep-aux-neg.html">aux:neg</a></tt>.

5 nodes (0%) are attached to their parents as `aux`.

5 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (3; 60% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 20% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 20% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Овлывлӧ	овлывлыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux	_	_
2	сэтшӧм	сэтшӧм	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
3	практика	практика	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	16	punct	_	_
5	мый	мый	SCONJ	CS	_	16	mark	_	_
6	колхозъясса	колхозъясса	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
7	председательяс	председатель	NOUN	N	Case=Nom|Number=Plur	16	nsubj	_	_
8	да	да	CCONJ	CC	_	9	cc	_	_
9	бригадиръяс	бригадир	NOUN	N	Case=Nom|Number=Plur	7	conj	_	_
10	му	му	NOUN	N	Case=Nom|Number=Sing	12	obl:lmod	_	_
11	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	10	case	_	_
12	кольӧм	кольны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	14	acl	_	_
13	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	14	obj	_	_
14	октӧм	октыны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	16	acl	_	_
15	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	16	aux:neg	_	_
16	котыртны	котыртны	VERB	V	Connegative=Yes	3	acl:relcl	_	SpaceAfter=No
17	,	,	PUNCT	CLB	_	18	punct	_	_
18	лыддьӧны	лыддьыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	16	conj	_	_
19	сійӧс	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	18	obj	_	_
20	ковтӧмӧн	ковтӧм	ADJ	A	Case=Ins|Number=Sing	18	obl	_	SpaceAfter=No
21	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


