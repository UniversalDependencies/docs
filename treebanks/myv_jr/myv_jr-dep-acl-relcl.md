---
layout: base
title:  'Statistics of acl:relcl in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-acl.html">acl</a></tt>.

59 nodes (0%) are attached to their parents as `acl:relcl`.

55 instances of `acl:relcl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.76271186440678.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (41; 69% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (7; 12% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Зярдо	зярдо	ADV	Adv	AdvType=Tim|PronType=Int	4	advmod:tmod	_	GTtags=Interr,Sem/Time
2	уш	уш	ADV	Adv	AdvType=Tim	1	advmod:tmod	_	GTtags=Sem/Time
3	ансяк	ансяк	ADV	Adv	_	4	advmod:foc	_	_
4	сы	самс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3
5	те	те	DET	Det	Case=Nom|Definite=Ind|Number=Sing	6	det	_	GTtags=Sg,Nom,Indef
6	шкась	шка	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	кода	кода	SCONJ	CS	AdvType=Tim	9	mark	_	GTtags=Sem/Temp
9	туить	туемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	6	acl:relcl	_	GTtags=IV,Ind,Prs,ScPl3
10	Цёраксонь	цёракс	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	11	nmod	_	GTtags=Sem/Inanim,Sem/NCnt,SP,Gen,Indef
11	кирдав	кирда	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	9	obl	_	GTtags=Sem/Inanim_Cnt,SP,Lat,Indef|SpaceAfter=No
12	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl:relcl	color:blue
1	Кодамо	кодамо	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	3	amod	_	GTtags=Interr,Sg,Nom,Indef
2	виде	виде	ADJ	A	_	3	amod	_	_
3	сельме	сельме	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nsubj	_	GTtags=Sem/Body_part,Sg,Nom,Indef
4	ды	ды	CCONJ	CC	_	6	cc	_	_
5	кеме	кеме	ADJ	A	_	6	amod	_	_
6	кедь	кедь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	conj	_	GTtags=Sem/Body_part,Sg,Nom,Indef
7	улезэ	улемс	AUX	V	Mood=Opt|Number[subj]=Sing|Person[subj]=3	8	cop	_	GTtags=Opt,ScSg3
8	сень	се	PRON	Pron	Case=Gen|PronType=Ind	0	root	_	GTtags=Indef,Gen|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	_
10	кие	кие	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing	11	nsubj	_	GTtags=Sg,Nom,Indef
11	кунды	кундамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	8	acl:relcl	_	GTtags=Ind,Prs,ScSg3
12	те	те	DET	Det	Case=Nom|Definite=Ind|Number=Sing	13	det	_	GTtags=Sg,Nom,Indef
13	тевентень	тев	NOUN	N	Case=Dat|Definite=Def|Number=Sing	11	obl	_	GTtags=Sem/Inanim_Cnt,Sg,Dat,Def|SpaceAfter=No
14	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	Пачкодсть	пачкодемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
2	тайгань	тайга	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	5	nmod	_	GTtags=SP,Gen,Indef
3	пек	пек	ADV	Adv	AdvType=Deg	4	advmod:tmod	_	GTtags=Degree
4	тусто	тусто	ADJ	A	_	5	amod	_	_
5	таркантень	тарка	NOUN	N	Case=Dat|Definite=Def|Number=Sing	1	obl	_	GTtags=Sem/Plc,Sg,Dat,Def
6	козонь	козонь	ADV	Adv	Case=Ill|PronType=Rel	8	obl	_	GTtags=Rel,Ill
7	сеедьстэ	сеедьстэ	ADV	Adv	AdvType=Tim	8	advmod:tmod	_	GTtags=Sem/Time
8	савкшнокшность	савкшномс	AUX	V	Derivation=OkshnOms|Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	5	acl:relcl	_	GTtags=IV,Der/ОкшнОмс,V,IV,Ind,Prt1,ScPl3
9	партизантнэ	партизан	NOUN	N	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	GTtags=Pl,Nom,Def
10	ютась	ютамс	VERB	V	Valency=2|VerbForm=Conv	11	acl	_	GTtags=TV,Ger
11	шкасто	шка	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	12	obl	_	GTtags=SP,Ela,Indef
12	оймсеме	оймсемс	VERB	V	Case=Loc|Valency=1|VerbForm=Inf	8	xcomp	_	GTtags=IV,Inf,Loc|SpaceAfter=No
13	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


