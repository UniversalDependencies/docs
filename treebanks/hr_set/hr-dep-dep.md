---
layout: base
title:  'Statistics of dep in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `dep`

This relation is universal.

9 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.11111111111111.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-DET.html">DET</a></tt> (1; 11% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (1; 11% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="hr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-CCONJ.html">CCONJ</a></tt> (1; 11% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-SCONJ.html">SCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Toliko	toliko	ADV	_	NumType=Card|PronType=Dem	4	advmod	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	bio	biti	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	_
4	jak	jak	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	njegov	njegov	DET	_	Case=Nom|Gender=Masc|Gender[psor]=Masc,Neut|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	dep	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 dep	color:blue
1	U	u	ADP	_	Case=Loc	2	case	_	_
2	Ankari	Ankara	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
3	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
5	uskoro	uskoro	ADV	_	Degree=Pos	6	advmod	_	_
6	otvoriti	otvoriti	VERB	_	VerbForm=Inf	0	root	_	_
7	povijesni	povijestan	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	muzej	muzej	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
9	koji	koji	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	13	nsubj	_	_
10	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
11	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	13	dep	_	_
12	biti	biti	AUX	_	VerbForm=Inf	13	aux:pass	_	_
13	orijentiran	orijentiran	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	acl	_	_
14	na	na	ADP	_	Case=Acc	16	case	_	_
15	tursku	turski	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	_
16	civilizaciju	civilizacija	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	rekao	reći	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	parataxis	_	_
19	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux	_	_
20	u	u	ADP	_	Case=Acc	21	case	_	_
21	ponedjeljak	ponedjeljak	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	18	obl	_	SpaceAfter=No
22	,	,	PUNCT	_	_	24	punct	_	_
23	15.	15.	ADJ	_	NumType=Ord	24	amod	_	_
24	lipnja	lipanj	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	21	parataxis	_	SpaceAfter=No
25	,	,	PUNCT	_	_	24	punct	_	_
26	turski	turski	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	_
27	ministar	ministar	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
28	kulture	kultura	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	27	nmod	_	_
29	i	i	CCONJ	_	_	30	cc	_	_
30	turizma	turizam	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	28	conj	_	_
31	Ertugrul	Ertugrul	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	27	appos	_	_
32	Gunay	Gunay	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	31	flat	_	SpaceAfter=No
33	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 dep	color:blue
1	Rekao	reći	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	_
3	kako	kako	SCONJ	_	_	12	mark	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
5	obrazovanje	obrazovanje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	_
6	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	dep	_	_
7	biti	biti	AUX	_	VerbForm=Inf	12	cop	_	_
8	još	još	ADV	_	Degree=Pos	9	advmod	_	_
9	jedan	jedan	NUM	_	Number=Sing|NumType=Card	12	amod	_	_
10	od	od	ADP	_	Case=Gen	12	case	_	_
11	njegovih	njegov	DET	_	Case=Gen|Gender=Masc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	prioriteta	prioritet	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	1	ccomp	_	_
13	kao	kao	SCONJ	_	_	14	case	_	_
14	CiO-a	CiO-a	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	12	flat	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	ističući	isticati	ADV	_	Degree=Sup	1	xcomp	_	_
17	značaj	značaj	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	16	obj	_	_
18	obrazovanja	obrazovanje	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	17	nmod	_	_
19	za	za	ADP	_	Case=Acc	20	case	_	_
20	uspostavu	uspostava	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	17	nmod	_	_
21	demokratskih	demokratski	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	22	amod	_	_
22	institucija	institucija	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	20	nmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	24	punct	_	_
24	unaprjeđenje	unaprjeđenje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	20	conj	_	_
25	tolerancije	tolerancija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	24	nmod	_	_
26	i	i	CCONJ	_	_	27	cc	_	_
27	stvaranje	stvaranje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	20	conj	_	_
28	uvjeta	uvjet	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	27	nmod	_	_
29	za	za	ADP	_	Case=Acc	32	case	_	_
30	uspješno	uspješan	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	32	amod	_	_
31	tržišno	tržišan	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	32	amod	_	_
32	gospodarstvo	gospodarstvo	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	28	nmod	_	SpaceAfter=No
33	.	.	PUNCT	_	_	1	punct	_	_

~~~


