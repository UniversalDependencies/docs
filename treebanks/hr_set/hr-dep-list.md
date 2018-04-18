---
layout: base
title:  'Statistics of list in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `list`

This relation is universal.

24 nodes (0%) are attached to their parents as `list`.

21 instances of `list` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.45833333333333.

The following 12 pairs of parts of speech are connected with `list`: <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (9; 38% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="hr-pos-NUM.html">NUM</a></tt>-<tt><a href="hr-pos-NUM.html">NUM</a></tt> (2; 8% instances), <tt><a href="hr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="hr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 list	color:blue
1	Ukoliko	ukoliko	SCONJ	_	_	5	mark	_	_
2	navedena	navesti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur|VerbForm=Part	3	amod	_	_
3	ponašanja	ponašanje	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	5	nsubj	_	_
4	budu	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	učestala	učestao	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	8	advcl	_	_
6	i	i	CCONJ	_	_	7	cc	_	_
7	intenzivna	intenzivan	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	5	conj	_	_
8	potrebno	potreban	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
9	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
10	potražiti	potražiti	VERB	_	VerbForm=Inf	8	csubj	_	_
11	pomoć	pomoć	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	_
12	stručnjaka	stručnjak	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	psihologa	psiholog	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	12	list	_	SpaceAfter=No
15	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 list	color:blue
1	Očito	očito	ADV	_	Degree=Pos	4	advmod	_	_
2	u	u	ADP	_	Case=Loc	3	case	_	_
3	Italiji	Italija	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	4	obl	_	_
4	nema	nemati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	onoga	onaj	DET	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
6	bio	biti	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	8	cop	_	_
7	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	bolji	dobar	ADJ	_	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	mi	mi	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
11	smo	biti	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	pogriješili	pogriješiti	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	8	list	_	SpaceAfter=No
13	,	,	PUNCT	_	_	8	punct	_	_
14	čestitamo	čestitati	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	8	list	_	SpaceAfter=No
15	,	,	PUNCT	_	_	8	punct	_	_
16	bit	biti	AUX	_	VerbForm=Inf	18	cop	_	_
17	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux	_	_
18	bolje	dobro	ADV	_	Degree=Cmp	8	list	_	_
19	drugi	drugi	ADJ	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumType=Ord	20	amod	_	_
20	put	put	ADV	_	Degree=Pos	18	obl	_	SpaceAfter=No
21	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 list	color:blue
1	Puna	pun	ADJ	_	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
2	tri	tri	NUM	_	NumType=Card	3	nummod	_	_
3	dana	dan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	42	obl	_	_
4	neidentificirani	neidentificiran	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
5	leteći	leteći	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	objekt	objekt	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	42	nsubj	_	_
7	trokutasta	trokutast	ADJ	_	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	izgleda	izgled	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	19	punct	_	_
10	čiji	čiji	DET	_	Case=Nom|Gender=Masc|Number=Plur|Poss=Yes|PronType=Int,Rel	12	det	_	_
11	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	_	_
12	krakovi	krak	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	19	nsubj	_	_
13	bili	biti	AUX	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	19	cop	_	_
14	12,5	12	NUM	_	NumType=Card	19	nummod	_	_
15	x	x	ADP	_	_	14	punct	_	_
16	12,5	12	NUM	_	NumType=Card	14	list	_	_
17	x	x	ADP	_	_	14	punct	_	_
18	6	6	NUM	_	NumType=Card	14	list	_	_
19	metara	metar	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	6	acl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	25	punct	_	_
21	koji	koji	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	25	nsubj	_	_
22	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux	_	_
23	na	na	ADP	_	Case=Loc	24	case	_	_
24	krajevima	kraj	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	25	obl	_	_
25	imao	imati	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	19	conj	_	_
26	okrugla	okrugao	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	27	amod	_	_
27	svjetla	svjetlo	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	25	obj	_	SpaceAfter=No
28	,	,	PUNCT	_	_	35	punct	_	_
29	a	a	CCONJ	_	_	35	cc	_	_
30	po	po	ADP	_	Case=Loc	31	case	_	_
31	dužini	dužina	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	35	obl	_	_
32	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	aux	_	_
33	bio	biti	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	35	cop	_	_
34	diskretno	diskretno	ADV	_	Degree=Pos	35	advmod	_	_
35	osvijetljen	osvijetliti	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	19	conj	_	SpaceAfter=No
36	,	,	PUNCT	_	_	19	punct	_	_
37	tri	tri	NUM	_	NumType=Card	38	nummod	_	_
38	dana	dan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	42	obl	_	_
39	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	aux	_	_
40	za	za	ADP	_	Case=Acc	41	case	_	_
41	sebe	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	42	obl	_	_
42	držao	držati	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
43	brojne	brojan	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	44	amod	_	_
44	Pažane	Pažanin	PROPN	_	Case=Acc|Gender=Masc|Number=Plur	42	obj	_	SpaceAfter=No
45	.	.	PUNCT	_	_	42	punct	_	_

~~~


