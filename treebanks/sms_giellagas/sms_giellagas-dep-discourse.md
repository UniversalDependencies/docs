---
layout: base
title:  'Statistics of discourse in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `discourse`

This relation is universal.

45 nodes (2%) are attached to their parents as `discourse`.

40 instances of `discourse` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.06666666666667.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-INTJ.html">INTJ</a></tt> (33; 73% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (4; 9% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 discourse	color:blue
1	Ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
2	:	:	PUNCT	CLB	_	1	punct	_	_
3	”	”	PUNCT	PUNCT	_	1	punct	_	GTtags=RIGHT|SpaceAfter=No
4	No	no	INTJ	Interj	_	7	discourse	_	_
5	mõõzz	mõõzz	ADV	Adv	_	7	advmod:lmod	_	_
6	eeʹjjed	eʹčč	NOUN	N	Animacy=Hum|Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=2	7	obj	_	GTtags=Sem/Kin,Sg,Acc,PxPl2
7	kooʹddid	kåʹdded	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Past	1	conj	_	GTtags=Ind,Prt,Pl2|SpaceAfter=No
8	.	.	PUNCT	CLB	_	1	punct	_	SpaceAfter=No
9	”	”	PUNCT	PUNCT	_	1	punct	_	GTtags=RIGHT

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Kâʹl	kâʹl	ADV	Adv	_	4	discourse	_	_
2	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
3	še	še	ADV	Adv	_	2	discourse	_	_
4	vuâlgg	vueʹlǧǧed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	aštââll	aštõõllâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	11	punct	_	_
8	kâʹl	kâʹl	ADV	Adv	_	11	discourse	_	_
9	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	GTtags=Pers,Sg3,Nom
10	še	še	ADV	Adv	_	9	discourse	_	_
11	vuâlgg	vueʹlǧǧed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 discourse	color:blue
1	–	–	PUNCT	PUNCT	_	13	punct	_	_
2	”	”	PUNCT	PUNCT	_	13	punct	_	GTtags=RIGHT|SpaceAfter=No
3	Na	na	INTJ	Interj	_	7	discourse	_	_
4	teʹl	teʹl	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Sem/Time
5	kâʹl	kâʹl	ADV	Adv	_	7	advmod:eval	_	GTtags=@ADVL>
6	vuäbbam	vuäʹbb	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	7	vocative	_	GTtags=Sem/Kin,Sg,Nom,PxSg1
7	iʹlla	iʹlla	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	13	reparandum	_	GTtags=Neg,Ind,Prs,Sg3
8	go	ko	ADV	Adv	_	7	advmod	_	_
9	jo	jo	ADV	Adv	AdvType=Tim	13	advmod:tmod	_	GTtags=Err/Lex,Sem/Time
10	čääʹʒʒ	čääʹcc	NOUN	N	Case=Acc|Number=Sing	13	obj	_	GTtags=Sg,Acc
11	jiõk	ij	AUX	V	Mood=Ind|Number=Sing|Person=2|Polarity=Neg	13	aux:neg	_	GTtags=Neg,Ind,Sg2
12	leäkku	leeʹd	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres	13	aux:tense	_	GTtags=Ind,Prs,ConNeg
13	kuâddam	kueʹdded	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past	0	root	_	GTtags=Ind,Prt,ConNeg|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	13	punct	_	SpaceAfter=No
15	”	”	PUNCT	PUNCT	_	13	punct	_	GTtags=RIGHT

~~~


