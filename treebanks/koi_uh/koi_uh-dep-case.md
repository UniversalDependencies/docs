---
layout: base
title:  'Statistics of case in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `case`

This relation is universal.

18 nodes (2%) are attached to their parents as `case`.

18 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `case`: <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (10; 56% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (3; 17% instances), <tt><a href="koi_uh-pos-DET.html">DET</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (2; 11% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Менам	ме	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	GTtags=Pers,Sg1,Gen
2	айӧ	ай	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	буржык	бур	ADJ	_	Degree=Cmp	0	root	_	GTtags=Der/жык,Comp
4	тэнат	тэ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	5	nmod	_	GTtags=Pers,Sg2,Gen
5	ай	ай	NOUN	_	Case=Nom|Number=Sing	3	advcl	_	GTtags=Sg,Nom
6	сьӧрті	сьӧрті	ADP	_	_	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Мый	мый	PRON	_	Case=Nom|Number=Sing|PronType=Int	4	obl	_	GTtags=Interr,Sg,Nom
2	вылӧ	вылӧ	ADP	_	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	1	case	_	GTtags=Po,Spat,Sg,Ill
3	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg2,Nom
4	видзӧтан	видзӧтны	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg2|SpaceAfter=No
5	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 case	color:blue
1	—	—	PUNCT	PUNCT	_	6	punct	_	_
2	Мый	мый	PRON	Pron	Animacy=NHum|Case=Nom|PronType=Int	6	obl	_	GTtags=Sem/NonHum,Nom,Interr
3	нӧ	нӧ	PART	Pcle	_	2	discourse	_	_
4	дыр	дыр	ADV	Adv	_	6	advmod	_	_
5	эн	оз	AUX	V	Mood=Ind|Number=Sing|Person=2|Polarity=Neg|Tense=Past	6	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg2
6	лок	локны	VERB	V	Connegative=Yes	0	root	_	GTtags=ConNeg|SpaceAfter=No
7	?	?	PUNCT	CLB	_	6	punct	_	_
8	—	—	PUNCT	PUNCT	_	13	punct	_	_
9	инькасӧ	инька	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	obj	_	GTtags=Sg,Acc,PxSg3
10	ас	ас	DET	Det	PronType=Refl	12	obl	_	GTtags=Pron,Refl,Cmpl
11	бердас	бердӧ	ADP	Adp	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	case	_	GTtags=Po,Spat,Sg,Ill,PxSg3
12	жмитікӧ	жмитны	VERB	V	Case=Ill|Derivation=Ik|VerbForm=Conv	13	advcl	_	GTtags=Der/Ik,Ger,Ill
13	юаліс	юавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	parataxis	_	GTtags=Ind,Prt1,Sg3
14	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	GTtags=Pers,Sg3,Nom|SpaceAfter=No
15	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


