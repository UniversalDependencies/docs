---
layout: base
title:  'Statistics of reparandum in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `reparandum`

This relation is universal.

1 nodes (0%) are attached to their parents as `reparandum`.

1 instances of `reparandum` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `reparandum`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 reparandum	color:blue
1	@KlausIohannis	@KlausIohannis	PROPN	_	_	2	vocative	_	_
2	Avem	avea	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	nenumarate	nenumărat	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Typo=Yes	4	amod	_	CorrectForm=nenumărate
4	cazuri	caz	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	2	obj	_	_
5	de	de	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	femei	femeie	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	_
7	ucise	ucise	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	6	acl	_	_
8	de	de	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
9	soti	soț	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur|Typo=Yes	7	obl:agent	_	CorrectForm=soți|SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	ex	ex	ADP	_	AdpType=Prep|Typo=Yes	12	compound	_	CorrectForm=ex-
12	soti	soț	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur|Typo=Yes	9	list	_	CorrectForm=soți|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	ex	ex	ADP	_	AdpType=Prep|Typo=Yes	15	compound	_	CorrectForm=ex-
15	iubiti	iubit	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur|Typo=Yes	9	list	_	CorrectForm=iubiți
16	pentru	pentru	ADP	_	AdpType=Prep|Case=Acc	20	mark	_	_
17	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	16	fixed	_	CorrectForm=că
18	politia	poliție	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Typo=Yes	20	nsubj	_	CorrectForm=poliția
19	nu	nu	PART	_	Polarity=Neg	20	advmod	_	_
20	face	face	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	advcl	_	_
21	nimic	nimic	ADV	_	Case=Acc,Nom|Number=Sing|Person=3|PronType=Neg	20	obj	_	_
22	in	în	ADP	_	AdpType=Prep|Case=Acc	20	reparandum	_	_
23	cand	când	ADV	_	PronType=Int,Rel|Typo=Yes	25	advmod:tmod	_	CorrectForm=când
24	femeia	femeie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	25	nsubj	_	_
25	face	face	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	advcl:tcl	_	_
26	plangere	plângere	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	25	obj	_	CorrectForm=plângere
27	si	și	CCONJ	_	Polarity=Pos|Typo=Yes	28	cc	_	CorrectForm=și
28	cere	cere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	conj	_	_
29	protectie	protecție	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	28	obj	_	CorrectForm=protecție
30	impotriva	împotriva	ADP	_	AdpType=Prep|Case=Gen|Typo=Yes	31	case	_	CorrectForm=împotriva
31	violentei	violență	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing|Typo=Yes	29	nmod	_	CorrectForm=violenței
32	si	și	CCONJ	_	Polarity=Pos|Typo=Yes	33	cc	_	CorrectForm=și
33	amenintatilor	amenințare	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur|Typo=Yes	31	conj	_	CorrectForm=amenințărilor|SpaceAfter=No
34	.	.	PUNCT	_	_	2	punct	_	_
35	Iar	iar	ADV	_	_	40	cc:preconj	_	_
36	voi	tu	PRON	_	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs|Strength=Strong	40	nsubj	_	_
37	guvernantii	guvernant	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur|Typo=Yes	36	appos	_	CorrectForm=guvernanții
38	n-	nu	PART	_	Polarity=Neg|Variant=Short	40	advmod	_	SpaceAfter=No
39	ati	avea	AUX	_	Number=Plur|Person=2|Typo=Yes	40	aux	_	CorrectForm=ați
40	facut	face	VERB	_	Gender=Masc|Number=Sing|Typo=Yes|VerbForm=Part	2	parataxis	_	CorrectForm=făcut
41	nimic	nimic	PRON	_	Case=Acc,Nom|Number=Sing|Person=3|PronType=Neg	40	obj	_	SpaceAfter=No
42	.	.	PUNCT	_	_	40	punct	_	_
43	Nici	nici	ADV	_	PronType=Neg	45	cc:preconj	_	_
44	n-	nu	PART	_	Polarity=Neg|Variant=Short	45	advmod	_	SpaceAfter=No
45	aveti	avea	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|Typo=Yes|VerbForm=Fin	2	parataxis	_	CorrectForm=-aveți
46	de	de	ADP	_	AdpType=Prep|Case=Acc	45	fixed	_	_
47	gand	gând	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing|Typo=Yes	45	fixed	_	CorrectForm=gând|SpaceAfter=No
48	.	.	PUNCT	_	_	45	punct	_	_
49	Ipocritule	ipocrit	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
50	!	!	PUNCT	_	_	49	punct	_	_
51	Ipocritilor	ipocrit	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur|Typo=Yes	2	vocative	_	CorrectForm=Ipocriților|SpaceAfter=No
52	!	!	PUNCT	_	_	51	punct	_	_
53	🤢	🤢	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
54	🤮	🤮	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
55	🤮	🤮	SYM	_	_	2	discourse:emo	_	_

~~~


