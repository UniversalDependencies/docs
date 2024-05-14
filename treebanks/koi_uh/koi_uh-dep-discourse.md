---
layout: base
title:  'Statistics of discourse in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `discourse`

This relation is universal.

7 nodes (1%) are attached to their parents as `discourse`.

4 instances of `discourse` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57142857142857.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 14% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-INTJ.html">INTJ</a></tt> (1; 14% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 14% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-INTJ.html">INTJ</a></tt> (1; 14% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 14% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Абу	абу	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	абу	абу	AUX	_	Polarity=Neg	4	aux:neg	_	_
4	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	0	root	_	GTtags=Pers,Sg3,Nom
5	талун	талун	NOUN	_	Case=Nom|Number=Sing	4	obl:tmod	_	GTtags=Sg,Nom
6	гортас	горт	NOUN	_	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl:lmod	_	GTtags=N,Sg,Ill,PxSg3|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

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


