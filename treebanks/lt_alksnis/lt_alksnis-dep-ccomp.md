---
layout: base
title:  'Statistics of ccomp in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `ccomp`

This relation is universal.

32 nodes (0%) are attached to their parents as `ccomp`.

27 instances of `ccomp` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03125.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (22; 69% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (7; 22% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 ccomp	color:blue
1	Jis	jis	PRON	įv.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	patikslino	patikslinti	VERB	vksm.asm.tiesiog.būt-k.vns.3.	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	atsakantis	atsakyti	VERB	vksm.dlv.veik.es.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	ccomp	2:ccomp	_
4	už	už	ADP	prl.G.	AdpType=Prep|Case=Acc	8	case	8:case	_
5	švietimo	švietimas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	6	nmod	6:nmod	_
6	įstaigų	įstaiga	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	8	nmod	8:nmod	_
7	edukacinę	edukacinis	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	_
8	veiklą	veikla	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	3	obl:arg	3:obl:arg	SpaceAfter=No
9	.	.	PUNCT	skyr.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Patarimai	patarimas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	_
2	šventę	šventė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	_
3	rengiančioms	rengti	VERB	vksm.dlv.veik.es.mot.dgs.N.	Case=Dat|Definite=Ind|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	1	ccomp	1:ccomp	_
4	namuose	namai	NOUN	dkt.vyr.dgs.Vt.	Case=Loc|Gender=Masc|Number=Plur	3	obl	3:obl	_

~~~


~~~ conllu
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 46 48 ccomp	color:blue
1	Platus	platus	ADJ	bdv.nelygin.vyr.vns.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
2	teorinės	teorinis	ADJ	bdv.nelygin.mot.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	3:amod	_
3	literatūros	literatūra	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod	_
4	šaltinių	šaltinis	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	5	nmod	5:nmod	_
5	sąrašas	sąrašas	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	46	nsubj	46:nsubj	SpaceAfter=No
6	,	,	PUNCT	skyr.	_	7	punct	7:punct	_
7	apimantis	apimti	VERB	vksm.dlv.veik.es.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	5	acl	5:acl	_
8	išsamią	išsamus	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	30	amod	30:amod	_
9	šeimos	šeima	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	10	nmod	10:nmod	_
10	žemėlapio	žemėlapis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	11	nmod	11:nmod	_
11	metodo	metodas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	12	nmod	12:nmod	_
12	kūrėjos	kūrėja	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	30	nmod	30:nmod	_
13	Irene'os	Irene'a	PROPN	dkt.tikr.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	12	nmod	12:nmod	_
14	Levin	Levin	X	užs.	Foreign=Yes	12	flat	12:flat	_
15	ir	ir	CCONJ	jng.	_	16	cc	16:cc	_
16	vieno	vienas	PRON	įv.vyr.vns.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	12	conj	12:conj|30:nmod	_
17	iš	iš	ADP	prl.K.	AdpType=Prep|Case=Gen	21	case	21:case	_
18	iškiliausių	iškilus	ADJ	bdv.aukšč.vyr.dgs.K.	Case=Gen|Definite=Ind|Degree=Sup|Gender=Masc|Number=Plur	21	amod	21:amod	_
19	šiuolaikinių	šiuolaikinis	ADJ	bdv.nelygin.vyr.dgs.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	21	amod	21:amod	_
20	šeimos	šeima	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	21	nmod	21:nmod	_
21	sociologų	sociologas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	16	obl:arg	16:obl:arg	SpaceAfter=No
22	,	,	PUNCT	skyr.	_	27	punct	27:punct	_
23	diadinės	diadinis	ADJ	bdv.nelygin.mot.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	24	amod	24:amod	_
24	šeimos	šeima	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	25	nmod	25:nmod	_
25	tyrimų	tyrimas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	26	nmod	26:nmod	_
26	perspektyvos	perspektyva	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	27	nmod	27:nmod	_
27	autoriaus	autorius	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	16	conj	16:conj|30:nmod	_
28	Jan	Jan	X	užs.	Foreign=Yes	16	flat	16:flat	_
29	Trost	Trost	X	užs.	Foreign=Yes	16	flat	16:flat	_
30	bibliografiją	bibliografija	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
31	,	,	PUNCT	skyr.	_	38	punct	38:punct	_
32	taip	taip	PART	sampl.dll.	Hyph=Yes	38	advmod:emph	38:advmod:emph	_
33	pat	pat	X	tęs.	Hyph=Yes	32	nmod	32:nmod	_
34	apie	apie	ADP	prl.G.	AdpType=Prep|Case=Acc	38	case	38:case	_
35	šimtą	šimtas	NUM	sktv.raid.kiek.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	38	nummod:gov	38:nummod:gov	_
36	Vakarų	vakarai	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	37	nmod	37:nmod	_
37	sociologų	sociologas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	38	nmod	38:nmod	_
38	darbų	darbas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	30	conj	7:obj|30:conj	_
39	yra	būti	AUX	vksm.asm.tiesiog.es.vns.3.	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	46	cop	46:cop	_
40	ne	ne	PART	dll.	_	46	advmod:emph	46:advmod:emph	_
41	tik	tik	PART	dll	_	40	advmod:emph	40:advmod:emph	_
42	jau	jau	PART	dll.	_	43	advmod:emph	43:advmod:emph	_
43	pats	pats	DET	įv.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Emp	46	det	46:det	_
44	savaime	savaime	ADV	prv.nelygin.	Degree=Pos	46	advmod	46:advmod	_
45	labai	labai	ADV	prv.nelygin.	Degree=Pos	46	advmod	46:advmod	_
46	vertingas	vertingas	ADJ	bdv.nelygin.vyr.vns.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	_
47	visiems	visas	DET	įv.vyr.dgs.N.	Case=Dat|Definite=Ind|Gender=Masc|Number=Plur|PronType=Tot	48	det	48:det	_
48	besidomintiems	besidomėti	VERB	vksm.dlv.sngr.veik.es.vyr.dgs.N.	Case=Dat|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Part|Voice=Act	46	ccomp	46:ccomp	_
49	šeimos	šeima	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	50	nmod	50:nmod	_
50	sociologijos	sociologija	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	51	nmod	51:nmod	_
51	problematika	problematika	NOUN	dkt.mot.vns.Įn.	Case=Ins|Gender=Fem|Number=Sing	48	obj	48:obj	SpaceAfter=No
52	;	;	PUNCT	skyr.	_	54	punct	54:punct	_
53	tai	tas	DET	įv.bev.	Definite=Ind|Gender=Neut|PronType=Dem	54	nsubj	54:nsubj	_
54	liudija	liudyti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	46	conj	0:root|46:conj	_
55	apie	apie	ADP	prl.G.	AdpType=Prep|Case=Acc	61	case	61:case	_
56	didžiulį	didžiulis	ADJ	bdv.nelygin.vyr.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	61	amod	61:amod	_
57	ir	ir	CCONJ	jng.	_	58	cc	58:cc	_
58	kruopštų	kruopštus	ADJ	bdv.nelygin.vyr.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	56	conj	56:conj|61:amod	_
59	knygos	knyga	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	60	nmod	60:nmod	_
60	autorių	autorė	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	61	nmod	61:nmod	_
61	darbą	darbas	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	54	obl:arg	54:obl:arg	SpaceAfter=No
62	,	,	PUNCT	skyr.	_	63	punct	63:punct	_
63	atliktą	atlikti	VERB	vksm.dlv.neveik.būt.vyr.vns.G.	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	61	acl	61:acl	_
64	apibendrinant	apibendrinti	VERB	vksm.pad.es.	Polarity=Pos|Tense=Pres|VerbForm=Ger	63	advcl	63:advcl	_
65	sukauptą	sukaupti	VERB	vksm.dlv.neveik.būt.mot.vns.G.	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	66	acl	66:acl	_
66	patirtį	patirtis	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	64	obj	64:obj	_
67	bei	bei	CCONJ	jng.	_	71	cc	71:cc	_
68	jų	jis	PRON	įv.mot.dgs.K.	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur|Person=3|PronType=Prs	71	nmod	71:nmod	_
69	itin	itin	ADV	prv.nelygin.	Degree=Pos	70	advmod	70:advmod	_
70	atsakingą	atsakingas	ADJ	bdv.nelygin.vyr.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	71	amod	71:amod	_
71	požiūrį	požiūris	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	66	conj	64:obj|66:conj	_
72	į	į	ADP	prl.G.	AdpType=Prep|Case=Acc	74	case	74:case	_
73	savo	savęs	PRON	įv.K.	Case=Gen|Definite=Ind|PronType=Prs|Reflex=Yes	74	nmod	74:nmod	_
74	misiją	misija	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	71	obl:arg	71:obl:arg	SpaceAfter=No
75	.	.	PUNCT	skyr.	_	46	punct	46:punct	_

~~~


