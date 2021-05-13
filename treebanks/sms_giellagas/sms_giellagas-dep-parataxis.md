---
layout: base
title:  'Statistics of parataxis in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `parataxis`

This relation is universal.

9 nodes (0%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33333333333333.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (7; 78% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Nuʹbb	nuʹbb	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom
2	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
3	:	:	PUNCT	PUNCT	_	2	punct	_	_
4	”	”	PUNCT	PUNCT	_	7	punct	_	GTtags=RIGHT|SpaceAfter=No
5	Mon	mon	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg1,Nom
6	jiõm	ij	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg	7	aux:neg	_	GTtags=Neg,Ind,Sg1
7	kuâddam	kueʹdded	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past	2	parataxis	_	GTtags=Ind,Prt,ConNeg
8	čääʹʒʒ	čääʹcc	NOUN	N	Case=Acc|Number=Sing	7	obj	_	GTtags=Sg,Acc,@<OBJ|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
10	”	”	PUNCT	PUNCT	_	7	punct	_	GTtags=RIGHT

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
4	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
5	särnnad	särnnad	VERB	V	VerbForm=Inf	4	advcl	_	GTtags=Inf|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	parataxis	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
8	:	:	PUNCT	CLB	_	7	punct	_	_
9	”	”	PUNCT	PUNCT	_	11	punct	_	GTtags=RIGHT|SpaceAfter=No
10	Eččad	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	11	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom,PxSg2
11	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	conj	_	GTtags=Ind,Prt,Sg3
12	nuʹt	nuʹtt	ADV	Adv	Typo=Yes	11	advmod	_	GTtags=Err/Orth|CorrectForm=nuʹtt|SpaceAfter=No
13	...	...	PUNCT	CLB	_	11	punct	_	_
14	eččad	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	16	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom,PxSg2
15	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	16	aux	_	GTtags=Ind,Prt,Sg3
16	kaunnâm	kaunnâd	VERB	V	Aspect=Perf|VerbForm=Part	11	conj	_	GTtags=Act,PrfPrc
17	muu	mon	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	16	obj	_	GTtags=Pers,Sg1,Acc
18	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	16	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
19	,	,	PUNCT	CLB	_	23	punct	_	_
20	mon	mon	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	23	nsubj	_	GTtags=Pers,Sg1,Nom
21	leʹjjem	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	23	aux	_	GTtags=Ind,Prt,Sg1
22	pieʹʒʒ	pieʹcc	NOUN	N	Case=Acc|Number=Sing	23	obj	_	GTtags=Sg,Acc
23	vueʹtǩǩmen	vueʹtǩǩed	VERB	V	Case=Ess|Derivation=Men	11	conj	_	GTtags=Actio,Ess
24	de	de	CCONJ	CC	_	28	cc	_	_
25	eččad	eʹčč	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	28	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom,PxSg2
26	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	28	aux	_	GTtags=Ind,Prt,Sg3
27	muu	mon	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	28	obj	_	GTtags=Pers,Sg1,Acc
28	kaunnâm	kaunnâd	VERB	V	Aspect=Perf|VerbForm=Part	11	conj	_	GTtags=Act,PrfPrc
29	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	28	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
30	,	,	PUNCT	CLB	_	32	punct	_	_
31	de	de	CCONJ	CC	_	32	cc	_	_
32	vaaʹldi	väʹldded	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	11	conj	_	GTtags=Ind,Prt,Sg3
33	muu	mon	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	32	obj	_	GTtags=Pers,Sg1,Acc
34	kaavân	kaav	NOUN	N	Animacy=Hum|Case=Ess	32	xcomp	_	GTtags=Sem/Kin,Ess|SpaceAfter=No
35	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 parataxis	color:blue
1	”	”	PUNCT	PUNCT	_	4	punct	_	GTtags=RIGHT|SpaceAfter=No
2	Čuõvv	čuõvv	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=Sg,Nom
3	ij	ij	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	4	aux:neg	_	GTtags=Neg,Ind,Sg3
4	kueʹst	kueʹstted	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres	0	root	_	GTtags=Ind,Prs,ConNeg|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	7	punct	_	_
6	leäk-a	leeʹd	VERB	V	Clitic=QstA|Mood=Ind|Number=Sing|Person=2|Tense=Pres	7	orphan	_	GTtags=Ind,Prs,Sg2,Qst/a
7	dõõn	dõõt	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	10	reparandum	_	GTtags=Pron,Sg,Gen|SpaceAfter=No
8	...	...	PUNCT	PUNCT	_	10	punct	_	_
9	čääʹʒʒ	čääʹcc	NOUN	N	Case=Acc|Number=Sing	10	obj	_	GTtags=Sg,Acc
10	kuõʹddiǩ	kueʹdded	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	4	conj	_	GTtags=Ind,Prt,Sg2
11	jiõk	ij	AUX	V	Mood=Ind|Number=Sing|Person=2|Polarity=Neg	10	parataxis	_	GTtags=Neg,Ind,Sg2|SpaceAfter=No
12	?	?	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
13	”	”	PUNCT	PUNCT	_	4	punct	_	GTtags=RIGHT

~~~


