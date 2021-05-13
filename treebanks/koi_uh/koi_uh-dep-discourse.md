---
layout: base
title:  'Statistics of discourse in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `discourse`

This relation is universal.

3 nodes (0%) are attached to their parents as `discourse`.

3 instances of `discourse` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 33% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 33% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	Мӧдыс	мӧд	PRON	Pron	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	GTtags=Sg,Nom,PxSg3
2	пукаліс	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	сё	сё	ADV	Adv	AdvType=Deg	2	advmod	_	GTtags=AdA
4	сідз	сідз	ADV	Adv	_	2	advmod	_	_
5	жӧ	жӧ	PART	Pcle	_	4	discourse	_	_
6	юрсӧ	юр	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	GTtags=Sg,Acc,PxSg3
7	сайӧвтӧмӧн	cайӧвтны	VERB	V	Derivation=Omon|VerbForm=Conv	2	advcl	_	GTtags=Der/Omon,Ger|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	мыйкӧ	мыйкӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	10	obj	_	GTtags=Indef,Sg,Nom
10	шушкис	шушкыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,Sg3
11	гусьӧник	гусьӧник	ADV	Adv	_	10	advmod	_	SpaceAfter=No
12	,	,	PUNCT	CLB	_	14	punct	_	_
13	дзик	дзик	ADV	Adv	AdvType=Deg	14	advmod:deg	_	GTtags=AdA
14	ас	ас	PRON	Pron	PronType=Prs|Reflex=Yes	11	appos	_	GTtags=Pron,Refl,Cmpl
15	кежас	кежӧ	ADP	Adp	AdpType=Post|Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	case	_	GTtags=Po,Sg,Ill,PxSg3|SpaceAfter=No
16	,	,	PUNCT	CLB	_	14	punct	_	_
17	сэсся	сэсся	ADV	Adv	_	19	advmod:tmod	_	_
18	ыш	ыш	INTJ	Interj	_	19	compound:prt	_	_
19	ловзисис	ловзисьны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
20	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	—	—	PUNCT	PUNCT	_	6	punct	_	_
2	Мый	мый	PRON	Pron	Animacy=Nhum|Case=Nom|PronType=Int	6	obl	_	GTtags=Sem/NonHum,Nom,Interr
3	нӧ	нӧ	PART	Pcle	_	2	discourse	_	_
4	дыр	дыр	ADV	Adv	_	6	advmod	_	_
5	эн	оз	AUX	V	Mood=Ind|Number=Sing|Person=2|Polarity=Neg|Tense=Past	6	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg2
6	лок	локны	VERB	V	Connegative=Yes	0	root	_	GTtags=ConNeg|SpaceAfter=No
7	?	?	PUNCT	CLB	_	6	punct	_	_
8	—	—	PUNCT	PUNCT	_	13	punct	_	_
9	инькасӧ	инька	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	obj	_	GTtags=Sg,Acc,PxSg3
10	ас	ас	PRON	Pron	PronType=Prs|Reflex=Yes	12	obl	_	GTtags=Pron,Refl,Cmpl
11	бердас	бердӧ	ADP	Adp	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	case	_	GTtags=Po,Spat,Sg,Ill,PxSg3
12	жмитікӧ	жмитны	VERB	V	Case=Ill|Derivation=Ik|VerbForm=Conv	13	advcl	_	GTtags=Der/Ik,Ger,Ill
13	юаліс	юавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	parataxis	_	GTtags=Ind,Prt1,Sg3
14	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	GTtags=Pers,Sg3,Nom|SpaceAfter=No
15	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	А	а	CCONJ	CC	_	6	cc	_	_
2	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg3,Nom
3	эд	оз	VERB	V	Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Past	2	discourse	_	GTtags=Neg,Ind,Prt1,Pl2
4	видзчисьны	видзчисьны	VERB	V	VerbForm=Inf	6	xcomp	_	GTtags=Inf
5	оз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux:neg	_	GTtags=Neg,Ind,Prs,Sg3
6	понды	пондыны	VERB	V	Connegative=Yes	0	root	_	GTtags=ConNeg|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	кӧр	кӧр	ADV	Adv	_	9	mark	_	_
9	дугда	дугдыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	6	advcl:tcl	_	GTtags=Ind,Prs,Sg1
10	боньгыныт	боньгыны	VERB	V	Person[psor]=2|VerbForm=Inf	9	xcomp	_	GTtags=Inf,Px2|SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


