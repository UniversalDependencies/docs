---
layout: base
title:  'Statistics of fixed in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `fixed`

This relation is universal.

11 nodes (0%) are attached to their parents as `fixed`.

11 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt> (5; 45% instances), <tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt> (2; 18% instances), <tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt> (1; 9% instances), <tt><a href="kk_ktb-pos-DET.html">DET</a></tt>-<tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt> (1; 9% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Сондықтан	сондықтан	CCONJ	cnjadv	_	10	cc	_	_
2	да	да	ADV	postadv	_	1	fixed	_	_
3	жаңа	жаңа	ADJ	adj	_	4	amod	_	_
4	елордада	елорда	NOUN	n	Case=Loc	10	obl	_	_
5	біз	біз	PRON	prn	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
6	жаңа	жаңа	ADJ	adj	_	7	amod	_	_
7	мәдениет	мәдениет	NOUN	n	Case=Nom	8	nmod:poss	_	_
8	ошақтарын	ошақ	NOUN	n	Case=Acc|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	9	obj	_	_
9	құруға	құр	VERB	v	Case=Dat|VerbForm=Ger	10	advcl	_	_
10	тырыстық	тырыс	VERB	v	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Бала	бала	NOUN	n	Case=Nom	2	obj	_	_
2	сұрады	сұра	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	7	punct	_	_
4	қалай	қалай	CCONJ	x	_	7	cc	_	_
5	да	да	SCONJ	cnjadv	_	4	fixed	_	_
6	бала	бала	NOUN	n	Case=Nom	7	nsubj	_	_
7	болмады	бол	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	conj	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Сонымен	сонымен	X	x	_	2	dep	_	_
2	қатар	қатар	ADV	adv	_	50	advmod	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	2	punct	_	_
4	ешкім	ешкім	PRON	prn	Case=Nom|PronType=Neg	49	nsubj	_	_
5	де	да	ADV	postadv	_	4	advmod	_	_
6	өзі	өз	PRON	prn	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|PronType=Prs|Reflex=Yes	7	nsubj	_	_
7	тұратын	тұр	VERB	v	Aspect=Imp|VerbForm=Part	8	acl	_	_
8	елінің	ел	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	19	nmod:poss	_	SpaceAfter=No
9	,	,	PUNCT	cm	_	12	punct	_	_
10	не	не	CCONJ	x	_	12	cc	_	_
11	болмаса	болмаса	CCONJ	cnjcoo	_	10	fixed	_	_
12	территорияның	территория	NOUN	n	Case=Gen	8	conj	_	_
13	саяси	саяси	ADJ	adj	_	19	amod	_	SpaceAfter=No
14	,	,	PUNCT	cm	_	15	punct	_	_
15	құқықтық	құқықтық	ADJ	adj	_	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	cm	_	18	punct	_	_
17	немесе	немесе	CCONJ	cnjcoo	_	18	cc	_	_
18	халықаралық	халықаралық	ADJ	adj	_	13	conj	_	_
19	мәртебесінің	мәртебе	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	20	nmod:poss	_	_
20	негізі	негіз	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	49	obl	_	_
21	бойынша	бойынша	ADP	post	_	20	case	_	SpaceAfter=No
22	,	,	PUNCT	cm	_	20	punct	_	_
23	және	және	CCONJ	cnjcoo	_	49	cc	_	_
24	де	да	ADV	postadv	_	23	fixed	_	_
25	ол	ол	DET	det	PronType=Dem	26	det	_	_
26	территория	территория	NOUN	n	Case=Nom	35	nsubj	_	_
27	тәуелсіз	тәуелсіз	ADJ	adj	_	45	acl	_	SpaceAfter=No
28	,	,	PUNCT	cm	_	29	punct	_	_
29	әлде	әлде	CCONJ	cnjcoo	_	35	cc	_	_
30	біреудің	біреу	PRON	prn	Case=Gen|PronType=Ind	31	nmod:poss	_	_
31	қарамағында	қарамақ	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	27	conj	_	SpaceAfter=No
32	,	,	PUNCT	cm	_	35	punct	_	_
33	әлде	әлде	CCONJ	cnjcoo	_	35	cc	_	_
34	өзін-өзі	өз	PRON	prn	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3|PronType=Prs|Reflex=Yes	35	obj	_	_
35	басқарушы	басқар	VERB	v	Mood=Pot|VerbForm=Part	27	conj	_	_
36	емес	емес	ADV	postadv	_	35	advmod	_	SpaceAfter=No
37	,	,	PUNCT	cm	_	43	punct	_	_
38	немесе	немесе	CCONJ	cnjcoo	_	43	cc	_	_
39	оның	ол	PRON	prn	Case=Gen|Number=Sing|Person=3|PronType=Prs	40	nmod:poss	_	_
40	егемендігі	егемендік	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	43	nsubj	_	_
41	әртүрлі	әртүрлі	DET	det	PronType=Tot	42	det	_	_
42	нысанда	нысан	NOUN	n	Case=Loc	43	obl	_	_
43	шектеулі	шектеулі	ADJ	adj	_	35	conj	_	_
44	болған	бол	AUX	v	Tense=Past|VerbForm=Part	43	cop	_	_
45	күннің	күн	NOUN	n	Case=Gen	46	nmod:poss	_	_
46	өзінде	өз	PRON	prn	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3|PronType=Prs|Reflex=Yes	49	obl	_	_
47	де	да	ADV	postadv	_	46	advmod	_	SpaceAfter=No
48	,	,	PUNCT	cm	_	46	punct	_	_
49	алаланбауы	алала	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|Polarity=Neg|VerbForm=Ger|Voice=Pass	50	csubj	_	_
50	тиіс	тиіс	ADJ	adj	_	0	root	_	SpaceAfter=No
51	.	.	PUNCT	sent	_	50	punct	_	_

~~~


