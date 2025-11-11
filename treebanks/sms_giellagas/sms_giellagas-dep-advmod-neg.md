---
layout: base
title:  'Statistics of advmod:neg in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-advmod.html">advmod</a></tt>.

8 nodes (0%) are attached to their parents as `advmod:neg`.

7 instances of `advmod:neg` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.125.

The following 4 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (3; 38% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (3; 38% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (1; 13% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (1; 13% instances).


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
5	ij	ij	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	4	orphan	_	GTtags=Neg,Ind,Sg3
6	ni	ni	PART	Pcle	Polarity=Neg	7	advmod:neg	_	GTtags=Pcle,Neg
7	mâiʹd	mâiʹd	PRON	Pron	PronType=Int	4	orphan	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	15	punct	_	_
9	ääkka	ääkkaž	NOUN	N	Animacy=Hum|Case=Gen|Number=Sing	10	nmod:poss	_	GTtags=Sem/Hum,Sg,Gen
10	niõđâž	niõđâž	NOUN	N	Case=Nom|Number=Sing	15	nsubj	_	GTtags=Sg,Nom
11	pâi	pâi	ADV	Adv	_	15	advmod	_	GTtags=@ADVL>
12	peeiʹvin	peiʹvv	NOUN	N	Case=Com|Number=Sing	15	obl	_	GTtags=Sg,Com,@>ADVL
13	da	da	CCONJ	CC	_	14	cc	_	_
14	mannuin	mään	NOUN	N	Case=Com|Number=Sing	12	conj	_	GTtags=Sg,Com
15	seârr	siõrrâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
16	,	,	PUNCT	CLB	_	18	punct	_	_
17	kåʹllkåʹđđnjõõzzid	kåʹllkåʹđđnjõs	NOUN	N	Case=Acc|Number=Plur	18	obj	_	GTtags=Pl,Acc
18	kååđđ	kååʹđđed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
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
4	jiõm	ij	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin	6	aux	_	GTtags=Neg,Ind,Sg1,@+FAUXV
5	ni	ni	PART	Pcle	Polarity=Neg	6	advmod:neg	_	GTtags=Pcle,Neg
6	vuâmmšõõttâm	vuâmmšõõttâd	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt,ConNeg
7	mååusat	mååusat	ADV	Adv	_	6	advmod	_	_
8	tok	tok	ADV	Adv	_	6	advmod	_	_
9	koʹst	koʹst	ADV	Adv	Case=Loc	13	advmod	_	GTtags=Loc
10	vuõʹlǧǧem	vueʹlǧǧed	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	13	reparandum	_	GTtags=Ind,Prt,Sg1
11	go	ko	ADV	Adv	_	10	advmod	_	SpaceAfter=No
12	...	...	PUNCT	PUNCT	_	13	punct	_	_
13	puõʹttem	pueʹtted	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	8	advcl	_	GTtags=Ind,Prt,Sg1
14	âʹtte	âʹte	ADV	Adv	AdvType=Tim	13	advmod	_	GTtags=Sem/Time
15	ni	ni	PART	Pcle	Polarity=Neg	13	advmod:neg	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
17	”	”	PUNCT	PUNCT	_	6	punct	_	GTtags=RIGHT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:neg	color:blue
1	Seeʹst	son	PRON	Pron	Case=Loc|Number=Plur|Person=3|PronType=Prs	2	obl	_	GTtags=Pers,Pl3,Loc
2	jeäʹla	iʹlla	AUX	V	Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=V
3	ǩeeʹrjteeʹjest	ǩeeʹrjteei	NOUN	N	Case=Loc|Number=Sing	2	obl	_	GTtags=Sg,Loc
4	võl	võl	ADV	Adv	AdvType=Tim	2	advmod	_	GTtags=Sem/Time
5	ni	ni	PART	Pcle	_	6	advmod:neg	_	_
6	måkam	måkam	ADJ	A	_	7	amod	_	GTtags=Attr
7	jurddi	juurd	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	GTtags=Pl,Nom|SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


