---
layout: base
title:  'Statistics of advmod:eval in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advmod:eval`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-advmod.html">advmod</a></tt>.
There are also 6 other language-specific subtypes of `advmod`: <tt><a href="sms_giellagas-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="sms_giellagas-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="sms_giellagas-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="sms_giellagas-dep-advmod-tmod.html">advmod:tmod</a></tt>.

17 nodes (1%) are attached to their parents as `advmod:eval`.

9 instances of `advmod:eval` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58823529411765.

The following 5 pairs of parts of speech are connected with `advmod:eval`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (9; 53% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (5; 29% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:eval	color:blue
1	De	de	CCONJ	CC	_	6	cc	_	_
2	suu	son	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	6	obj	_	GTtags=Pers,Sg3,Acc
3	teâđast	teâđast	ADV	Adv	_	6	advmod:eval	_	_
4	...	...	PUNCT	CLB	_	6	punct	_	_
5	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg3,Nom
6	käggõõđi	käggõõttâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
7	teä	teä	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	GTtags=Sem/Time
8	suu	son	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	obj	_	GTtags=Pers,Sg3,Acc
9	koʹdde	kåʹdded	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	6	conj	_	GTtags=Ind,Prt,Pl3|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	pačču	pääččad	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	9	appos	_	GTtags=Ind,Prt,Pl3
12	di	di	CCONJ	CC	_	13	cc	_	_
13	koʹdde	kåʹdded	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	11	conj	_	GTtags=Ind,Prt,Pl3|SpaceAfter=No
14	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:eval	color:blue
1	A	a	CCONJ	CC	_	6	cc	_	_
2	mäʹhtt	mäʹhtt	ADV	Adv	_	6	advmod	_	_
3	šât	šât	ADV	Adv	_	6	advmod:tmod	_	_
4	ton	ton	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg2,Nom
5	še	še	ADV	Adv	_	4	advmod:eval	_	_
6	puõʹttiǩ	pueʹtted	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg2|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
8	”	”	PUNCT	PUNCT	_	6	punct	_	GTtags=RIGHT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:eval	color:blue
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


