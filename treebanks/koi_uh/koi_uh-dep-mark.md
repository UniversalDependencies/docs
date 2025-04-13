---
layout: base
title:  'Statistics of mark in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `mark`

This relation is universal.

14 nodes (1%) are attached to their parents as `mark`.

13 instances of `mark` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92857142857143.

The following 6 pairs of parts of speech are connected with `mark`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-SCONJ.html">SCONJ</a></tt> (6; 43% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (4; 29% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Меным	ме	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	GTtags=Pers,Sg1,Dat
2	кажитчӧ	кажитчыны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	что	что	SCONJ	_	_	5	mark	_	_
5	зэрӧ	зэрны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	csubj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	А	а	CCONJ	CC	_	6	cc	_	_
2	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg3,Nom
3	эд	оз	VERB	V	Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Past	2	discourse	_	GTtags=Neg,Ind,Prt1,Pl2
4	видзчисьны	видзчисьны	VERB	V	VerbForm=Inf	6	xcomp	_	GTtags=Inf
5	оз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux	_	GTtags=Neg,Ind,Prs,Sg3
6	понды	пондыны	VERB	V	Connegative=Yes	0	root	_	GTtags=ConNeg|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	кӧр	кӧр	ADV	Adv	_	9	mark	_	_
9	дугда	дугдыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	6	advcl:tcl	_	GTtags=Ind,Prs,Sg1
10	боньгыныт	боньгыны	VERB	V	Person[psor]=2|VerbForm=Inf	9	xcomp	_	GTtags=Inf,Px2|SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 mark	color:blue
1	Но	но	CCONJ	CC	_	10	cc	_	_
2	керкуыс	керку	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	obl:lmod	_	GTtags=Sg,Nom,PxSg3
3	бокын	бокын	ADP	Adp	AdvType=Loc|Case=Ine	2	case	_	GTtags=Spat,Ine|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	туй	туй	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	GTtags=Sg,Nom
6	ладорсяняс	ладор	NOUN	N	Case=Egr|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	appos	_	GTtags=Sg,Egr,PxSg3,So/CP|SpaceAfter=No
7	,	,	PUNCT	CLB	_	6	punct	_	_
8	мыйкӧ	мыйкӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	10	nsubj	_	GTtags=Indef,Sg,Nom
9	сё	сё	ADV	Adv	AdvType=Deg	10	advmod	_	GTtags=Deg
10	вӧрис	вӧрны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
11	,	,	PUNCT	CLB	_	14	punct	_	_
12	и	и	CCONJ	CC	_	14	cc	_	_
13	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	GTtags=Pers,Sg1,Nom
14	вежӧрті	вежӧртны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	10	conj	_	GTtags=Ind,Prt1,Sg1|SpaceAfter=No
15	,	,	PUNCT	CLB	_	17	punct	_	_
16	что	что	SCONJ	CS	_	17	mark	_	_
17	сэтӧн	сэтӧн	ADV	Adv	_	14	ccomp	_	_
18	кинкӧ	кинкӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	17	nsubj:cop	_	GTtags=Indef,Sg,Nom
19	ловья	ловья	ADJ	A	_	18	amod	_	SpaceAfter=No
20	...	...	PUNCT	CLB	_	10	punct	_	_

~~~


