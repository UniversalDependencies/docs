---
layout: base
title:  'Statistics of case in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `case`

This relation is universal.

23 nodes (1%) are attached to their parents as `case`.

17 instances of `case` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08695652173913.

The following 2 pairs of parts of speech are connected with `case`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (19; 83% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-ADP.html">ADP</a></tt> (4; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	jälsti	jälsted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=Ind,Prt,Sg3
3	čõõđ	čõõđ	ADP	Pr	AdpType=Prep	4	case	_	_
4	ääiʹj	äiʹǧǧ	NOUN	N	Case=Gen|Number=Sing	2	obl:tmod	_	GTtags=Sg,Gen
5	Pariizzâst	Pariizzâst	PROPN	N	Case=Loc|NameType=Geo|Number=Sing	2	obl:lmod	_	GTtags=Prop,Sem/Plc,Sg,Loc|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	Franskkjânnam	Franskkjânnam	PROPN	N	Case=Gen|NameType=Geo|Number=Sing	8	nmod:poss	_	GTtags=Prop,Sem/Plc,Sg,Gen
8	vueiʹvvgåårdest	vueiʹvvgåårad	NOUN	N	Case=Loc|Number=Sing	5	appos	_	GTtags=Sg,Loc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

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
4	räjja	räjja	ADP	Po	AdpType=Post	3	case	_	_
5	teâđam	tieʹtted	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg1,@+FMAINV|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	jäänab	jäänab	DET	Det	_	9	obj	_	GTtags=@ADVL>
8	jiõm	ij	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg	9	aux:neg	_	GTtags=Neg,Ind,Sg1,@+FAUXV
9	tieʹđ	tieʹtted	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres	5	conj	_	GTtags=Ind,Prs,ConNeg,@+FMAINV|SpaceAfter=No
10	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


