---
layout: base
title:  'Statistics of advcl:tmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advcl:tmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advcl.html">advcl</a></tt>.

5 nodes (0%) are attached to their parents as `advcl:tmod`.

5 instances of `advcl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4.

The following 2 pairs of parts of speech are connected with `advcl:tmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advcl:tmod	color:blue
1	Кымынкӧ	кымынкӧ	DET	Det	Definite=Ind	2	det	_	GTtags=Indef
2	воськов	воськов	NOUN	N	Case=Nom|Number=Sing	3	obj	_	GTtags=Sg,Nom
3	вӧчӧм	вӧчӧм	VERB	V	Case=Nom|Derivation=Vnoun|Number=Sing	7	advcl:tmod	_	GTtags=Der,Der/NomAct,N,Sg,Nom
4	бӧрын	бӧрын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	3	case	_	GTtags=Po,Sg,Ine
5	пу	пу	NOUN	N	Case=Nom|Number=Sing	7	obl:lmod	_	GTtags=Sg,Nom
6	вылысь	вылысь	ADP	Adp	AdpType=Post|Case=Ela|Number=Sing	5	case	_	GTtags=Po,Sg,Ela
7	аддзис	аддзыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,Sg3
8	сьӧд	сьӧд	ADJ	A	Case=Nom|Number=Sing	9	amod	_	GTtags=Sg,Nom
9	ёкмыль	ёкмыль	NOUN	N	Case=Nom|Number=Sing	7	obj	_	GTtags=Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl:tmod	color:blue
1	Аскинас	аскинас	ADV	Adv	AdvType=Tim	4	advcl:tmod	_	GTtags=Temp
2	рытъядорыс	рытъядор	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	nsubj:cop	_	GTtags=Der,Der/дор,Sg,Nom,PxSg3
3	Микитъяс	Микит	NOUN	N	Animacy=Hum|Case=Nom|Number=Plur	4	nsubj	_	GTtags=Prop,Sem/Mal,Pl,Nom
4	воисны	воны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Pl3
5	Вӧръю	Вӧръю	NOUN	N	Case=Nom|Number=Sing	7	nmod	_	GTtags=Prop,Sem/Plc,EOLang/KOM,Sem/Plc,EOLang/KPV,Sg,Nom
6	вом	вом	NOUN	N	Case=Nom|Number=Sing	7	nmod	_	GTtags=Sg,Nom
7	дорӧ	дор	NOUN	N	Case=Ill|Number=Sing	4	obl	_	GTtags=Sg,Ill|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


