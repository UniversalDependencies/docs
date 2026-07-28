---
layout: base
title:  'Statistics of case in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `case`

This relation is universal.

27 nodes (1%) are attached to their parents as `case`.

21 instances of `case` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07407407407407.

The following 3 pairs of parts of speech are connected with `case`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (21; 78% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (5; 19% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Puõʹtte	pueʹtted	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt,Pl3
2	âʹtte	âʹte	ADV	Adv	AdvType=Tim	1	advmod	_	GTtags=Sem/Time
3	põʹrtte	põrtt	NOUN	N	Case=Ill|Number=Sing	1	obl	_	GTtags=Sg,Ill
4	ja	ja	CCONJ	CC	_	5	cc	_	GTtags=CCONJ,@CVP
5	mõʹnne	mõõnnâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	1	conj	_	GTtags=Ind,Prt,Pl3
6	čääʹcckaʹlddi	čääʹcckaʹlddi	NOUN	N	Case=Gen|Number=Sing	5	obl	_	GTtags=NomAg,Sg,Gen
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
5	teâđam	tieʹtted	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	GTtags=Ind,Prs,Sg1,@+FMAINV|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	jäänab	jäänab	ADV	Adv	_	9	advmod	_	GTtags=@ADVL>
8	jiõm	ij	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin	9	aux	_	GTtags=Neg,Ind,Sg1,@+FAUXV
9	tieʹđ	tieʹtted	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	5	conj	_	GTtags=Ind,Prs,ConNeg,@+FMAINV|SpaceAfter=No
10	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 case	color:blue
1	Ko	ko	SCONJ	CS	_	3	mark	_	GTtags=
2	leʹččep	leeʹd	AUX	V	Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	3	aux	_	GTtags=IV,Cond,Pl1
3	välddam	väʹldded	VERB	V	Aspect=Perf|VerbForm=Part	7	advcl	_	GTtags=TV,Act,PrfPrc
4	jeäʹvvsid	jeäʹves	NOUN	N	Case=Acc|Number=Plur	3	obj	_	GTtags=Pl,Acc|SpaceAfter=No
5	,	,	PUNCT	CLB	_	3	punct	_	GTtags=CLB
6	leʹččep	leeʹd	AUX	V	Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	7	aux	_	GTtags=IV,Cond,Pl1
7	vuäittam	vueiʹtted	VERB	V	Aspect=Perf|VerbForm=Part	0	root	_	GTtags=TV,Act,PrfPrc
8	väʹʒʒed	väʹʒʒed	VERB	V	VerbForm=Inf	7	xcomp	_	GTtags=IV,Inf
9	Aanar	Aanar	PROPN	N	Case=Gen|Number=Sing	8	obl	_	GTtags=Prop,Sg,Gen
10	räjja	räjja	ADP	Po	AdpType=Post	9	case	_	GTtags=Po|SpaceAfter=No
11	.	.	PUNCT	CLB	_	7	punct	_	GTtags=CLB

~~~


