---
layout: base
title:  'Statistics of case in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `case`

This relation is universal.

24 nodes (1%) are attached to their parents as `case`.

18 instances of `case` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08333333333333.

The following 2 pairs of parts of speech are connected with `case`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (20; 83% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (4; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Puõʹtte	pueʹtted	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Pl3
2	âʹtte	âʹte	ADV	Adv	AdvType=Tim	1	advmod:tmod	_	GTtags=Sem/Time
3	põʹrtte	põrtt	NOUN	N	Case=Ill|Number=Sing	1	obl:lmod	_	GTtags=Sg,Ill
4	ja	ja	CCONJ	CC	_	5	cc	_	GTtags=CCONJ,@CVP
5	mõʹnne	mõõnnâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	1	conj	_	GTtags=Ind,Prt,Pl3
6	čääʹcckaʹlddi	čääʹcckaʹlddi	NOUN	N	Case=Gen|Number=Sing	5	obl:lmod	_	GTtags=NomAg,Sg,Gen
7	luzz	luzz	ADP	Po	AdpType=Post|Case=Ill	6	case	_	GTtags=Ill|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Joo	joo	INTJ	Interj	_	5	discourse	_	_
2	mon	mon	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	GTtags=Pers,Sg1,Nom,@<SUBJ
3	tõn	tõt	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	5	obl	_	GTtags=Dem,Sg,Gen
4	räjja	räjja	ADP	Po	AdpType=Post|Case=Ill	3	case	_	_
5	teâđam	tieʹtted	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg1,@+FMAINV|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	jäänab	jäänab	DET	Det	_	9	obj	_	GTtags=@ADVL>
8	jiõm	ij	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg	9	aux:neg	_	GTtags=Neg,Ind,Sg1,@+FAUXV
9	tieʹđ	tieʹtted	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres	5	conj	_	GTtags=Ind,Prs,ConNeg,@+FMAINV|SpaceAfter=No
10	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


