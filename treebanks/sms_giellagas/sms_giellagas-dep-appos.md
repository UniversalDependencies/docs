---
layout: base
title:  'Statistics of appos in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `appos`

This relation is universal.

7 nodes (0%) are attached to their parents as `appos`.

7 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 appos	color:blue
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 appos	color:blue
1	Na	na	INTJ	Interj	_	4	discourse	_	_
2	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
3	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time,@ADVL>
4	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3,@+FMAINV
5	puk	puk	PRON	Pron	Case=Nom|Number=Sing	6	det	_	GTtags=Pron,Sg,Nom
6	jällmõõžžâz	jällmõš	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=3	4	obj	_	GTtags=Sg,Acc,PxPl3,@OBJ>
7	toʹben	toʹben	ADV	Adv	_	4	advmod:lmod	_	GTtags=@ADVL>|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
14	,	,	PUNCT	CLB	_	15	punct	_	_
15	pohtt	puʹhtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV
16	tõzz	tõzz	ADV	Adv	_	15	obl:lmod	_	GTtags=@ADVL>
17	ool	ool	ADV	Adv	_	16	appos	_	_
18	de	de	CCONJ	CC	_	19	cc	_	GTtags=@CVP
19	iʹlmstââvv	iʹlmstõõvvâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
20	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 appos	color:blue
1	Muu	mon	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	GTtags=Pers,Sg1,Acc
2	ko	ko	SCONJ	CS	_	3	mark	_	_
3	kooʹddže	kåʹdded	VERB	V	Mood=Pot|Number=Plur|Person=3	30	advcl	_	GTtags=Pot,Pl3
4	de	de	CCONJ	CC	_	5	cc	_	_
5	aaudže	auddâd	VERB	V	Mood=Pot|Number=Plur|Person=3	3	conj	_	GTtags=Pot,Pl3
6	de	de	CCONJ	CC	_	8	cc	_	_
7	tueʹllj	tueʹllj	NOUN	N	Case=Nom|Number=Plur	8	obj	_	GTtags=Pl,Nom
8	piijže	piijjâd	VERB	V	Mood=Pot|Number=Plur|Person=3	3	conj	_	GTtags=Pot,Pl3
9	dõõzz-e	dõõzz-e	ADV	Adv	_	8	advmod:lmod	_	_
10	kuäʹttnjälmma	kuäʹttnjälmma	NOUN	N	Case=Ill|Number=Sing	9	appos	_	GTtags=Sg,Ill
11	de	de	CCONJ	CC	_	14	cc	_	_
12	näʹde	näʹde	ADV	Adv	_	14	advmod	_	_
13	ton	ton	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	14	nsubj	_	GTtags=Pers,Sg2,Nom
14	õõk	õlggâd	VERB	V	_	3	conj	_	_
15	njuiʹǩǩeed	njuiʹǩǩeed	VERB	V	VerbForm=Inf	14	xcomp	_	GTtags=Inf
16	pâʹjjel	pâʹjjel	ADP	Pr	AdpType=Prep	18	case	_	_
17	tõn	tõt	DET	Det	Case=Gen|Number=Sing|PronType=Dem	18	det	_	GTtags=Dem,Sg,Gen
18	tueʹllj	tueʹllj	NOUN	N	Case=Gen|Number=Sing	20	obl:lmod	_	GTtags=Sg,Gen
19	õõk	õlggâd	AUX	_	_	20	aux	_	_
20	njuiʹǩǩeed	njuiʹǩǩeed	VERB	V	VerbForm=Inf	14	conj	_	GTtags=Inf|SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	24	punct	_	_
22	di	di	CCONJ	CC	_	24	cc	_	_
23	jos	jos	SCONJ	CS	_	24	mark	_	_
24	piâzzžiǩ	piâssâd	VERB	V	Mood=Pot|Number=Sing|Person=2	3	conj	_	GTtags=Pot,Sg2
25	pâʹjjel	pâʹjjel	ADP	Pr	AdpType=Prep	26	case	_	_
26	tueʹllj	tueʹllj	NOUN	N	Case=Gen|Number=Sing	24	obl:lmod	_	GTtags=Sg,Gen
27	de	de	CCONJ	CC	_	30	cc	_	_
28	teʹl	teʹl	ADV	Adv	AdvType=Tim	30	advmod:tmod	_	GTtags=Sem/Time
29	jiâ	ij	AUX	_	Mood=Ind|Number=Plur|Person=3|Polarity=Neg	30	aux:neg	_	GTtags=Neg,Ind,Pl3
30	kååʹdd	kåʹdded	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres	0	root	_	GTtags=Ind,Prs,ConNeg
31	tuu	ton	PRON	Pron	Case=Acc|Number=Sing|Person=2|PronType=Prs	30	obj	_	GTtags=Pers,Sg2,Acc|SpaceAfter=No
32	.	.	PUNCT	PUNCT	_	30	punct	_	GTtags=RIGHT|SpaceAfter=No
33	”	”	PUNCT	PUNCT	_	30	punct	_	_

~~~


