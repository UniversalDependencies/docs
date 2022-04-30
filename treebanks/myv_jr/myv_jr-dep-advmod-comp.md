---
layout: base
title:  'Statistics of advmod:comp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:comp`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 10 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="myv_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

28 nodes (0%) are attached to their parents as `advmod:comp`.

28 instances of `advmod:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `advmod:comp`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (20; 71% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (5; 18% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:comp	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	_
2	Микол	Микол	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	4	vocative	_	GTtags=Prop,Ant_Mal,Sg,Nom,Indef|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	стяк	стямс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Valency=1	0	root	_	GTtags=IV,Imprt,ScSg2
5	седе	седе	ADV	Adv	Degree=Cmp	6	advmod:comp	_	GTtags=Comp
6	курок	курок	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Temp|SpaceAfter=No
7	!	!	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:comp	color:blue
1	Конась	кона	DET	Det	Case=Nom|Definite=Def|Number=Sing|PronType=Int	3	nsubj	_	GTtags=Interr,Sg,Nom,Def
2	седе	седе	ADV	Adv	Degree=Cmp	3	advmod:comp	_	GTtags=Comp
3	мазый	мазый	ADJ	A	Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Prs,ScSg3
4	эсь	эсь	DET	Det	Reflex=Yes	5	det	_	GTtags=Refl,Adn
5	ютковаст	ютко	NOUN	N	Case=Prl|NounType=Relat|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	3	obl:lmp	_	GTtags=Sem/Plc,SP,Prl,PxPl3|SpaceAfter=No
6	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:comp	color:blue
1	Ансяк	ансяк	ADV	Adv	_	2	advmod:foc	_	GTtags=Exclusive
2	кодат	кодамо	ADJ	A	Case=Nom|Number=Plur|PronType=Int	13	acl:relcl	_	GTtags=Interr,Nom,Pl
3	иляст	а	AUX	AUX	Mood=Opt|Number[subj]=Plur|Person[subj]=3|Polarity=Neg	2	aux:neg	_	GTtags=Neg,Opt,ScPl3
4	уле	улемс	AUX	V	Connegative=Yes|Valency=1	2	cop	_	GTtags=IV,ConNeg|SpaceAfter=No
5	,	,	PUNCT	CLB	_	2	punct	_	_
6	весемеде	весемеде	PART	Pcle	Degree=Sup	7	advmod:comp	_	GTtags=Degree=Sup
7	мазыйтне	мазый	ADJ	A	Case=Nom|Definite=Def|Number=Plur	13	nsubj	_	GTtags=Der/MWN,N,Pl,Nom,Def
8	эйстэдест	эйстэ	ADP	Adp	Case=Ela|Number[psor]=Plur|Person[psor]=3	7	obl	_	GTtags=Ela,PxPl3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	_
10	монень	мон	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Long	11	obl	_	GTtags=Pers,Sg1,Dat,Variant=Long
11	маряви	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	13	parataxis	_	GTtags=IV,Ind,Prs,ScSg3|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	розась	роза	NOUN	N	Case=Nom|Definite=Def|Number=Sing	0	root	_	GTtags=Sg,Nom,Def
14	ды	ды	CCONJ	CC	_	15	cc	_	_
15	макось	мако	NOUN	N	Case=Nom|Definite=Def|Number=Sing	13	conj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
16	.	.	PUNCT	CLB	_	13	punct	_	_

~~~


