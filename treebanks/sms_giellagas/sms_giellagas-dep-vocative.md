---
layout: base
title:  'Statistics of vocative in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `vocative`

This relation is universal.

8 nodes (0%) are attached to their parents as `vocative`.

4 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.625.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (4; 50% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Ääʹved	ääʹveed	VERB	V	Mood=Imp|Number=Sing|Person=2	0	root	_	GTtags=Imprt,Sg2
2	ikkân	ikkân	NOUN	N	Case=Acc|Number=Sing	1	obj	_	GTtags=Sg,Acc
3	Sam	Sam	NOUN	N	Case=Nom|Number=Sing	1	vocative	_	GTtags=Prop,Sg,Nom|SpaceAfter=No
4	!	!	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 vocative	color:blue
1	Tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	_	GTtags=Dem,Sg,Nom
2	puõʹđi	pueʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	jueʹljes	jueʹlǧǧ	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obj	_	GTtags=Sem/Body,Sg,Acc,PxSg3
5	oiʹǧǧii	oiʹǧǧeed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	GTtags=Pers,Sg3,Nom
8	ääušas	ähšš	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	GTtags=Sg,Acc,PxSg3
9	roʹttji	roʹttjed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt,Sg3
10	meädda	meädda	ADV	Adv	_	9	advmod:lmod	_	GTtags=Sem/Plc|SpaceAfter=No
11	,	,	PUNCT	CLB	_	12	punct	_	_
12	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	parataxis	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
13	:	:	PUNCT	CLB	_	12	punct	_	_
14	”	”	PUNCT	PUNCT	_	21	punct	_	GTtags=RIGHT|SpaceAfter=No
15	Mõʹnt	mõʹnt	ADV	Adv	_	21	advmod	_	_
16	jeäʹnn	jeäʹnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	21	vocative	_	GTtags=Sem/Kin,Sg,Nom|SpaceAfter=No
17	,	,	PUNCT	CLB	_	21	punct	_	_
18	mõʹnt	mõʹnt	ADV	Adv	_	21	advmod	_	_
19	jeäʹnn	jeäʹnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	21	vocative	_	GTtags=Kin,Sem/Kin,Sg,Nom
20	muʹst	mon	PRON	Pron	Case=Loc|Number=Sing|Person=1|PronType=Prs	21	obl	_	GTtags=Pers,Sg1,Loc
21	eʹčč	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	2	conj	_	GTtags=Kin,Sem/Kin,Sg,Nom
22	iʹlleäk	iʹlla	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	21	cop	_	GTtags=Neg,Ind,Prs,Sg3|SpaceAfter=No
23	,	,	PUNCT	CLB	_	24	punct	_	_
24	säärn	särnnad	VERB	V	Mood=Imp|Number=Sing|Person=2	2	conj	_	GTtags=Imprt,Sg2
25	ton	ton	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	24	vocative	_	GTtags=Pers,Sg2,Nom
26	što	što	SCONJ	CS	_	31	mark	_	_
27	mäʹhtt	mäʹhtt	ADV	Adv	_	31	advmod:mmod	_	_
28	ton	ton	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	31	nsubj	_	GTtags=Pers,Sg2,Nom
29	leäk	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	31	aux	_	GTtags=Ind,Prs,Sg2
30	muu	mon	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	31	obj	_	GTtags=Pers,Sg1,Acc
31	raajjâm	raajjâd	VERB	V	Aspect=Perf|VerbForm=Part	24	ccomp	_	GTtags=Act,PrfPrc
32	jeäʹnn	jeäʹnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	31	vocative	_	GTtags=Kin,Sem/Kin,Sg,Nom
33	ko	ko	SCONJ	CS	_	35	mark	_	_
34	eʹčč	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	35	nsubj:cop	_	GTtags=Kin,Sem/Kin,Sg,Nom
35	iʹlleäk	iʹlla	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	31	advcl	_	GTtags=Neg,Ind,Prs,Sg3|SpaceAfter=No
36	?	?	PUNCT	CLB	_	31	punct	_	SpaceAfter=No
37	”	”	PUNCT	PUNCT	_	2	punct	_	GTtags=RIGHT

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 vocative	color:blue
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


