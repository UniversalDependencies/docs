---
layout: base
title:  'Statistics of obl in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="koi_uh-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="koi_uh-dep-obl-tmod.html">obl:tmod</a></tt>.

40 nodes (4%) are attached to their parents as `obl`.

20 instances of `obl` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (23; 57% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (11; 28% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (3; 8% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-AUX.html">AUX</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl	color:blue
1	Кыкнан	кык	DET	_	PronType=Tot	3	det	_	GTtags=Coll,Cmpl
2	том	том	ADJ	_	Case=Nom|Number=Sing	3	amod	_	GTtags=Sg,Nom
3	семьялӧ	семья	NOUN	_	Case=Dat|Number=Sing	5	obl	_	GTtags=Src/F,Sg,Dat
4	квартираэсӧ	квартира	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	obj	_	GTtags=Pl,Acc,PxSg3
5	сетісӧ	сетны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
6	ӧтдруг	ӧтдруг	ADV	_	_	5	advmod:tmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 obl	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	GTtags=Pron,Pers,Sg1,Dat
2	охота	охота	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=N,Sg,Nom
3	тӧдны	тӧдны	VERB	V	VerbForm=Inf	2	acl	_	GTtags=V,IV,Inf|SpaceAfter=No
4	,	,	PUNCT	CLB	_	12	punct	_	GTtags=CLB
5	мыля	мыля	ADV	Adv	_	12	advmod	_	GTtags=Adv
6	сылӧ	сія	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs	12	obl	_	GTtags=Pron,Pers,Sg3,Dat
7	важ	важ	ADJ	A	_	8	amod	_	GTtags=A
8	селитьбаыс	селитьба	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	GTtags=N,Sg,Nom,PxSg3
9	син	син	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	12	obl	_	GTtags=N,Sem/Inanim,Sg,Nom
10	одзӧ	одзӧ	ADP	Adp	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	9	case	_	GTtags=Adp,Po,Spat,Sg,Ill
11	оз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	12	aux:neg	_	GTtags=V,Neg,Ind,Prs,Sg3
12	ков	ковны	VERB	V	Connegative=Yes	3	advcl	_	GTtags=V,IV,ConNeg|SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	GTtags=CLB
14	и	и	CCONJ	CC	_	15	cc	_	GTtags=CC
15	юася	юасьны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	2	conj	_	GTtags=V,IV,Ind,Prs,Sg1

~~~


