---
layout: base
title:  'Statistics of fixed in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `fixed`

This relation is universal.

2 nodes (0%) are attached to their parents as `fixed`.

2 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `fixed`: <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Мондейне	мон	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Long	4	obl	_	GTtags=Pers,Sg1,Dat,Long
2	сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
3	ашезь	аш	AUX	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScSg3
4	сатов	сатовомс	VERB	_	Connegative=Yes|Valency=1	0	root	_	GTtags=IV,ConNeg|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сяс	сяс	ADV	_	_	8	mark	_	_
7	мес	мес	ADV	_	_	6	fixed	_	_
8	ласьксь	ласькомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	4	advcl	_	GTtags=Ind,Prt1,ScSg3
9	пяк	пяк	ADV	_	AdvType=Deg	10	advmod:deg	_	GTtags=AdA
10	вишкста	вишкста	ADV	_	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Фёдор	Фёдор	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	5	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
2	Михайлович	Михайлович	PROPN	N	Case=Nom|Definite=Ind|NameType=Pat|Number=Sing	1	flat:name	_	GTtags=Prop,Sem/Patr-Mal,Sg,Nom,Indef
3	туркс	туркс	ADV	Adv	_	5	advmod	_	_
4	сельмот	сельме	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	3	fixed	_	GTtags=Pl,Nom,Indef
5	варжакстсь	варжакстомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
6	цёранц	цёра	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	GTtags=Sg,Gen,PxSg3
7	лангс	ланга	ADP	Adp	Case=Ill	6	case	_	GTtags=Relator,SP,Ill,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


