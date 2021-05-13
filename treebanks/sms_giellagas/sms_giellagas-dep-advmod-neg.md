---
layout: base
title:  'Statistics of advmod:neg in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-advmod.html">advmod</a></tt>.
There are also 6 other language-specific subtypes of `advmod`: <tt><a href="sms_giellagas-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="sms_giellagas-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="sms_giellagas-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="sms_giellagas-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-tmod.html">advmod:tmod</a></tt>.

8 nodes (0%) are attached to their parents as `advmod:neg`.

7 instances of `advmod:neg` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.125.

The following 4 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (3; 38% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (3; 38% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (1; 13% instances), <tt><a href="sms_giellagas-pos-DET.html">DET</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:neg	color:blue
1	–	–	PUNCT	PUNCT	_	4	punct	_	_
2	”	”	PUNCT	PUNCT	_	4	punct	_	GTtags=RIGHT|SpaceAfter=No
3	Ääkka	ääkkaž	NOUN	N	Animacy=Hum|Case=Gen|Number=Sing	4	nmod:poss	_	GTtags=Sem/Hum,Sg,Gen
4	niõđâž	niõđâž	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom
5	ij	ij	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	4	orphan	_	GTtags=Neg,Ind,Sg3
6	ni	ni	PART	Pcle	Polarity=Neg	7	advmod:neg	_	GTtags=Pcle,Neg
7	mâiʹd	mâiʹd	PRON	Pron	_	4	orphan	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	15	punct	_	_
9	ääkka	ääkkaž	NOUN	N	Animacy=Hum|Case=Gen|Number=Sing	10	nmod:poss	_	GTtags=Sem/Hum,Sg,Gen
10	niõđâž	niõđâž	NOUN	N	Case=Nom|Number=Sing	15	nsubj	_	GTtags=Sg,Nom
11	pâi	pâi	ADV	Adv	_	15	advmod	_	GTtags=@ADVL>
12	peeiʹvin	peiʹvv	NOUN	N	Case=Com|Number=Sing	15	obl:tmod	_	GTtags=Sg,Com,@>ADVL
13	da	da	CCONJ	CC	_	14	cc	_	_
14	mannuin	mään	NOUN	N	Case=Com|Number=Sing	12	conj	_	GTtags=Sg,Com
15	seârr	siõrrâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	18	punct	_	_
17	kåʹllkåʹđđnjõõzzid	kåʹllkåʹđđnjõs	NOUN	N	Case=Acc|Number=Plur	18	obj	_	GTtags=Pl,Acc
18	kååđđ	kååʹđđed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
20	”	”	PUNCT	PUNCT	_	4	punct	_	GTtags=RIGHT

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 advmod:neg	color:blue
1	”	”	PUNCT	PUNCT	_	6	punct	_	GTtags=RIGHT|SpaceAfter=No
2	A	a	CCONJ	CC	_	6	cc	_	_
3	mon	mon	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg1,Nom
4	jiõm	ij	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg	6	aux:neg	_	GTtags=Neg,Ind,Sg1,@+FAUXV
5	ni	ni	PART	Pcle	Polarity=Neg	6	advmod:neg	_	GTtags=Pcle,Neg
6	vuâmmšõõttâm	vuâmmšõõttâd	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past	0	root	_	GTtags=Ind,Prt,ConNeg
7	mååusat	mååusat	ADV	Adv	_	6	advmod:lmod	_	_
8	tok	tok	ADV	Adv	_	6	advmod:lmod	_	_
9	koʹst	koʹst	ADV	Adv	Case=Loc	13	advmod:lmod	_	GTtags=Loc
10	vuõʹlǧǧem	vueʹlǧǧed	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	13	reparandum	_	GTtags=Ind,Prt,Sg1
11	go	ko	ADV	Adv	_	10	advmod:tmod	_	SpaceAfter=No
12	...	...	PUNCT	PUNCT	_	13	punct	_	_
13	puõʹttem	pueʹtted	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	8	advcl	_	GTtags=Ind,Prt,Sg1
14	âʹtte	âʹte	ADV	Adv	AdvType=Tim	13	advmod:tmod	_	GTtags=Sem/Time
15	ni	ni	PART	Pcle	Polarity=Neg	13	advmod:neg	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
17	”	”	PUNCT	PUNCT	_	6	punct	_	GTtags=RIGHT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 advmod:neg	color:blue
1	Čääʹʒʒid	čääʹcc	NOUN	N	Case=Acc|Number=Plur|Typo=Yes	6	obj	_	CorrectForm=Čaaʹʒʒid|GTtags=Pl,Acc
2	di	di	CCONJ	CC	_	3	cc	_	_
3	muõrid	muõrr	NOUN	N	Case=Acc|Number=Plur	1	conj	_	GTtags=Pl,Acc
4	di	di	CCONJ	CC	_	6	cc	_	_
5	puk	puk	PRON	Pron	Case=Nom|Number=Sing|PronType=Tot	6	nsubj	_	GTtags=Pron,Sg,Nom
6	poʹhtte	puʹhtted	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	12	punct	_	_
8	vuäʹbbes	vuäʹbb	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	GTtags=Sem/Kin,Sg,Nom,PxSg3
9	i-ǥõl	i-ǥõl	AUX	_	_	12	aux:neg	_	_
10	ni	ni	PART	Pcle	Polarity=Neg	11	advmod:neg	_	GTtags=Pcle,Neg
11	koʹst	koʹst	ADV	Adv	Case=Loc	12	advmod:lmod	_	GTtags=Loc
12	jååʹtted	jååʹtted	VERB	V	VerbForm=Inf	6	conj	_	GTtags=Inf|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


