---
layout: base
title:  'Statistics of det:nummod in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-det.html">det</a></tt>.

26 nodes (0%) are attached to their parents as `det:nummod`.

26 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11538461538462.

The following 2 pairs of parts of speech are connected with `det:nummod`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (25; 96% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 det:nummod	color:blue
1	Jie	jis	PRON	įv.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	3	nsubj	_	_
2	visi	visas	DET	įv.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	1	det	_	_
3	turi	turėti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	kasdien	kasdien	ADV	prv.nelygin.	Degree=Pos	5	advmod	_	_
5	atlikti	atlikti	VERB	vksm.bndr.	VerbForm=Inf	3	xcomp	_	_
6	kelis	keli	DET	įv.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	8	det:nummod	_	_
7	tuos pačius	tas pats	DET	įv.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	8	det	_	_
8	judesius	judesys	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	skyr.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:nummod	color:blue
1	Nors	nors	SCONJ	jng.	_	23	mark	_	_
2	kaltinti	kaltinti	VERB	vksm.bndr.	VerbForm=Inf	23	csubj	_	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	18	punct	_	_
4	kad	kad	SCONJ	jng.	_	18	mark	_	_
5	kelių	keli	DET	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur|PronType=Ind	6	det:nummod	_	_
6	šimtų	šimtas	NUM	sktv.raid.kiek.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	15	nummod:gov	_	_
7	vienaip	vienaip	ADV	prv.nelygin.	Degree=Pos	14	advmod	_	_
8	ar	ar	CCONJ	jng.	_	9	cc	_	_
9	kitaip	kitaip	ADV	prv.nelygin.	Degree=Pos	7	conj	_	_
10	su	su	ADP	prl.Įn.	Case=Ins	13	case	_	_
11	Sąjūdžio	sąjūdis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
12	veiklos	veikla	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
13	laikotarpiu	laikotarpis	NOUN	dkt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing	14	obl:arg	_	_
14	susijusių	susyti	VERB	vksm.dlv.veik.būt-k.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	15	amod	_	_
15	tekstų	tekstas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	16	nmod	_	_
16	jūroje	jūra	NOUN	dkt.mot.vns.Vt.	Case=Loc|Gender=Fem|Number=Sing	18	obl	_	_
17	nebuvo	būti	AUX	vksm.asm.neig.tiesiog.būt-k.3.	Mood=Ind|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	18	aux:pass	_	_
18	panaudota	panaudoti	VERB	vksm.dlv.neveik.būt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	2	ccomp	_	_
19	nė viena	nė vienas	DET	įv.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	20	det	_	_
20	knyga	knyga	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	18	nsubj:pass	_	SpaceAfter=No
21	,	,	PUNCT	skyr.	_	18	punct	_	_
22	būtų	būti	AUX	vksm.asm.tar.3.	Mood=Cnd|Person=3|VerbForm=Fin	23	cop	_	_
23	nekorektiška	nekorektiškas	ADJ	bdv.nelygin.bev.	Degree=Pos|Gender=Neut	0	root	_	SpaceAfter=No
24	,	,	PUNCT	skyr.	_	29	punct	_	_
25	tačiau	tačiau	CCONJ	jng.	_	29	mark	_	_
26	keli	keli	DET	įv.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	27	det:nummod	_	_
27	trūkumai	trūkumas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	29	nsubj	_	_
28	tiesiog	tiesiog	ADV	prv.nelygin.	Degree=Pos	29	advmod	_	_
29	krinta	kristi	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	23	conj	_	_
30	į	į	ADP	prl.G.	Case=Acc	31	case	_	_
31	akis	akis	NOUN	dkt.mot.dgs.G.	Case=Acc|Gender=Fem|Number=Plur	29	obl:arg	_	SpaceAfter=No
32	.	.	PUNCT	skyr.	_	23	punct	_	_

~~~


