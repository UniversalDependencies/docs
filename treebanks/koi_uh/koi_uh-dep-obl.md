---
layout: base
title:  'Statistics of obl in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="koi_uh-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="koi_uh-dep-obl-tmod.html">obl:tmod</a></tt>.

21 nodes (3%) are attached to their parents as `obl`.

12 instances of `obl` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14285714285714.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (11; 52% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (6; 29% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	Ныв	ныв	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom
2	гижис	гижны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	ёртыслӧ	ёрт	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Sg,Dat,PxSg3
4	гижӧт	гижӧт	NOUN	_	Case=Nom|Number=Sing	2	obj	_	GTtags=Sg,Nom|SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Меным	ме	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	GTtags=Pers,Sg1,Dat
2	кажитчӧ	кажитчыны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	что	что	SCONJ	_	_	5	mark	_	_
5	зэрӧ	зэрны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	csubj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	GTtags=Pron,Pers,Sg1,Dat
2	охота	охота	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=N,Sg,Nom
3	тӧдны	тӧдны	VERB	V	Valency=1|VerbForm=Inf	2	acl	_	GTtags=V,IV,Inf|SpaceAfter=No
4	,	,	PUNCT	CLB	_	12	punct	_	GTtags=CLB
5	мыля	мыля	ADV	Adv	_	12	advmod	_	GTtags=Adv
6	сылӧ	сія	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs	12	obl	_	GTtags=Pron,Pers,Sg3,Dat
7	важ	важ	ADJ	A	_	8	amod	_	GTtags=A
8	селитьбаыс	селитьба	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	GTtags=N,Sg,Nom,PxSg3
9	син	син	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	12	obl	_	GTtags=N,Sem/Inanim,Sg,Nom
10	одзӧ	одзӧ	ADP	Adp	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	9	case	_	GTtags=Adp,Po,Spat,Sg,Ill
11	оз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	12	aux:neg	_	GTtags=V,Neg,Ind,Prs,Sg3
12	ков	ковны	VERB	V	Connegative=Yes|Valency=1	3	advcl	_	GTtags=V,IV,ConNeg|SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	GTtags=CLB
14	и	и	CCONJ	CC	_	15	cc	_	GTtags=CC
15	юася	юасьны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Valency=1	2	conj	_	GTtags=V,IV,Ind,Prs,Sg1

~~~


