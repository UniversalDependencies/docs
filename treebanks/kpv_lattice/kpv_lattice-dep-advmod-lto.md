---
layout: base
title:  'Statistics of advmod:lto in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:lto`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 11 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

31 nodes (0%) are attached to their parents as `advmod:lto`.

17 instances of `advmod:lto` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58064516129032.

The following 4 pairs of parts of speech are connected with `advmod:lto`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (27; 87% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 6% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:lto	color:blue
1	Восьлавны	восьлавны	VERB	V	VerbForm=Inf	0	root	_	_
2	водзӧ	водз	ADV	Adv	Case=Ill	1	advmod:lto	_	_
3	эг	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Past	1	aux:neg	_	_
4	нин	нин	ADV	Adv	_	1	advmod:emph	_	_
5	кут	кутны	AUX	V	Connegative=Yes	1	aux:aspect	_	_
6	вермыны	вермыны	AUX	V	VerbForm=Inf	1	aux:pot	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advmod:lto	color:blue
1	Огыд	оз	AUX	V	Mood=Ind|Number=Sing|Number[psor]=Sing|Person=1|Person[psor]=2|Tense=Pres	5	nsubj:cop	_	GTtags=Ind,Pres,Sg1,PxSg2
2	ӧні	ӧні	ADV	Adv	_	5	advmod:tmod	_	_
3	тэнад	тэ	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	5	obl	_	GTtags=Pers,Sg2,Gen
4	кык	кык	NUM	Num	Case=Nom|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom
5	ныра	ныр	NOUN	N	Case=Nom|Derivation=ProprietiveMod|Number=Sing	0	root	_	GTtags=Sg,Der,Der/ProprietiveMod,A,Sg,Nom|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	_	_
7	водзӧ	водзӧ	ADV	Adv	Case=Ill	5	advmod:lto	_	GTtags=Ill
8	и	и	CCONJ	CC	_	9	cc	_	_
9	бӧрӧ	бӧрӧ	ADV	Adv	Case=Ill	7	conj	_	GTtags=Ill|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	7	punct	_	_
11	—	—	PUNCT	PUNCT	_	12	punct	_	_
12	вочааліс	вочаавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	5	parataxis	_	GTtags=TV,Ind,Prt1,Sg3
13	Ревекка	Ревекка	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	12	nsubj	_	GTtags=Prop,Sem/Fem,Sg,Nom|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:lto	color:blue
1	Пукавны	пукавны	VERB	V	VerbForm=Inf	5	csubj	_	_
2	вадорын	вадор	NOUN	N	Case=Ine|Number=Sing	1	obl:lmod	_	_
3	водзӧ	водз	ADV	Adv	Case=Ill	5	advmod:lto	_	_
4	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	весьшӧрӧ	весьшӧрӧ	ADV	Adv	Case=Ill	0	root	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


