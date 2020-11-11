---
layout: base
title:  'Statistics of parataxis in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `parataxis`

This relation is universal.

7 nodes (1%) are attached to their parents as `parataxis`.

7 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (6; 86% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis	color:blue
1	No	no	INTJ	Interj	_	5	discourse	_	_
2	kuuʹǩǩ	kuʹǩǩ	ADJ	A	Case=Acc|Number=Sing	3	amod	_	GTtags=Sg,Acc
3	ääiʹj	äiʹǧǧ	NOUN	N	Case=Acc|Number=Sing	5	obj	_	GTtags=Sg,Acc
4	mij	mon	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	GTtags=Pers,Pl1,Nom
5	jieʹlim	jieʹlled	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Prt	0	root	_	GTtags=Ind,Prt,Pl1
6	...	...	PUNCT	CLB	_	5	punct	_	SpaceAfter=No
7	”	”	PUNCT	PUNCT	_	5	punct	_	GTtags=RIGHT|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	jeäʹnnes	jeäʹnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom,PxSg3
10	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	parataxis	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
11	,	,	PUNCT	CLB	_	10	punct	_	_
12	”	”	PUNCT	PUNCT	_	15	punct	_	GTtags=RIGHT|SpaceAfter=No
13	jiõm	ij	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg	15	aux:neg	_	GTtags=Neg,Ind,Sg1
14	leäkku	leeʹd	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres	15	aux	_	GTtags=Ind,Prs,ConNeg
15	kooǯǯtam	kooǯǯted	VERB	V	Connegative=Yes|Mood=Ind|Tense=Prt	5	conj	_	GTtags=Ind,Prt,ConNeg|SpaceAfter=No
16	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	No	no	INTJ	Interj	_	4	discourse	_	_
2	jeäʹnnes	jeäʹnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	GTtags=Kin,Sem/Kin,Sg,Nom,PxSg3
3	päkk	päkk	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=Sg,Nom
4	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg3
5	särnnad	särnnad	VERB	V	VerbForm=Inf	4	advcl	_	GTtags=Inf|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	parataxis	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
8	:	:	PUNCT	CLB	_	7	punct	_	_
9	”	”	PUNCT	PUNCT	_	11	punct	_	GTtags=RIGHT|SpaceAfter=No
10	Eččad	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	11	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom,PxSg2
11	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	4	conj	_	GTtags=Ind,Prt,Sg3
12	nuʹt	nuʹtt	ADV	Adv	Typo=Yes	11	advmod	_	GTtags=Err/Orth|CorrectForm=nuʹtt|SpaceAfter=No
13	...	...	PUNCT	CLB	_	11	punct	_	_
14	eččad	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	16	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom,PxSg2
15	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	16	aux	_	GTtags=Ind,Prt,Sg3
16	kaunnâm	kaunnâd	VERB	V	Aspect=Perf|VerbForm=Part	11	conj	_	GTtags=Act,PrfPrc
17	muu	mon	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	16	obj	_	GTtags=Pers,Sg1,Acc
18	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	16	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
19	,	,	PUNCT	CLB	_	23	punct	_	_
20	mon	mon	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	23	nsubj	_	GTtags=Pers,Sg1,Nom
21	leʹjjem	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Prt	23	aux	_	GTtags=Ind,Prt,Sg1
22	pieʹʒʒ	pieʹcc	NOUN	N	Case=Acc|Number=Sing	23	obj	_	GTtags=Sg,Acc
23	vueʹtǩǩmen	vueʹtǩǩed	VERB	V	Case=Ess|Derivation=Vnoun	11	conj	_	GTtags=Actio,Ess
24	de	de	CCONJ	CC	_	28	cc	_	_
25	eččad	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	28	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom,PxSg2
26	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	28	aux	_	GTtags=Ind,Prt,Sg3
27	muu	mon	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	28	obj	_	GTtags=Pers,Sg1,Acc
28	kaunnâm	kaunnâd	VERB	V	Aspect=Perf|VerbForm=Part	11	conj	_	GTtags=Act,PrfPrc
29	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	28	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
30	,	,	PUNCT	CLB	_	32	punct	_	_
31	de	de	CCONJ	CC	_	32	cc	_	_
32	vaaʹldi	väʹldded	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	11	conj	_	GTtags=Ind,Prt,Sg3
33	muu	mon	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	32	obj	_	GTtags=Pers,Sg1,Acc
34	kaavân	kaav	NOUN	N	Animacy=Hum|Case=Ess	32	xcomp	_	GTtags=Sem/Kin,Ess|SpaceAfter=No
35	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


