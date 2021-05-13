---
layout: base
title:  'Statistics of csubj in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Relations: `csubj`

This relation is universal.

3 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.66666666666667.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="af_afribooms-pos-PRON.html">PRON</a></tt>-<tt><a href="af_afribooms-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt>-<tt><a href="af_afribooms-pos-AUX.html">AUX</a></tt> (1; 33% instances), <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 csubj	color:blue
1	Dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	is	wees	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	4	cop	_	_
3	ongetwyfeld	ongetwyfeld	ADV	BS	Degree=Pos	4	advmod	_	_
4	onmoontlik	onmoontlik	ADJ	ASP	AdjType=Pred|Case=Nom|Degree=Pos	0	root	_	_
5	om	om	ADP	SVS	AdpType=Prep	15	case	_	_
6	dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	obj	_	_
7	wat	wat	PRON	PB	PronType=Rel	6	amod	_	_
8	lelik	lelik	ADJ	ASP	AdjType=Pred|Case=Nom|Degree=Pos	7	csubj	_	_
9	en	en	CCONJ	KN	_	8	cc	_	_
10	weersinwekkend	weersinwekkend	ADJ	ASP	AdjType=Pred|Case=Nom|Degree=Pos	8	conj	_	_
11	is	wees	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	8	cop	_	SpaceAfter=No
12	,	,	PUNCT	ZM	_	8	punct	_	_
13	uit	uit	ADV	UPW	Degree=Pos	15	compound:prt	_	_
14	te	te	PART	UPI	PartType=Inf	15	mark	_	_
15	wis	wis	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	4	obl	_	_
16	en	en	CCONJ	KN	_	15	cc	_	_
17	die	die	DET	LB	Definite=Def|PronType=Art	18	det	_	_
18	geluk	geluk	NOUN	NA	Number=Sing	25	obj	_	_
19	wat	wat	PRON	PB	PronType=Rel	22	nsubj	_	_
20	met	met	ADP	SVS	AdpType=Prep	21	case	_	_
21	vryheid	vryheid	NOUN	NA	Number=Sing	22	obl	_	_
22	gepaardgaan	gepaardgaan	VERB	VTHSO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	18	ccomp	_	_
23	op	op	ADV	UPW	Degree=Pos	25	compound:prt	_	_
24	te	te	PART	UPI	PartType=Inf	25	mark	_	_
25	eis	eis	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	15	xcomp	_	_
26	solank	solank	SCONJ	KO	_	4	amod	_	_
27	gemeenskappe	gemeenskap	NOUN	NSM	Number=Plur	30	nsubj	_	_
28	in	in	ADP	SVS	AdpType=Prep	29	case	_	_
29	vrees	vrees	NOUN	NA	Number=Sing	30	obl	_	_
30	lewe	lewe	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	4	dep	_	SpaceAfter=No
31	:	:	PUNCT	ZM	_	30	punct	_	_
32	terwyl	terwyl	SCONJ	KO	_	30	cc	_	_
33	hulle	hulle	PRON	PDMP	Case=Acc,Nom|Number=Plur|Person=3|PronType=Prs	34	nsubj:pass	_	_
34	ingekerker	inkerker	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	30	dep	_	_
35	is	wees	AUX	VVUOP	Tense=Past|VerbForm=Fin|VerbType=Pas	34	aux:pass	_	_
36	tussen	tussen	ADP	SVS	AdpType=Prep	38	case	_	_
37	hoë	hoog	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	38	amod	_	_
38	mure	muur	NOUN	NSM	Number=Plur	34	obl	_	_
39	en	en	CCONJ	KN	_	38	cc	_	_
40	doringdraad	doringdraad	NOUN	NM	Number=Sing	38	conj	_	SpaceAfter=No
41	,	,	PUNCT	ZM	_	34	punct	_	_
42	in	in	ADP	SVS	AdpType=Prep	44	case	_	_
43	hulle	hulle	PRON	PDMB	Number=Plur|Person=3|Poss=Yes|PronType=Prs	44	det	_	_
44	huise	huis	NOUN	NSM	Number=Plur	55	obl	_	SpaceAfter=No
45	,	,	PUNCT	ZM	_	44	punct	_	_
46	op	op	ADP	SVS	AdpType=Prep	47	case	_	_
47	straat	straat	NOUN	NSE	Number=Sing	44	obl	_	_
48	en	en	CCONJ	KN	_	51	cc	_	_
49	op	op	ADP	SVS	AdpType=Prep	51	case	_	_
50	die	die	DET	LB	Definite=Def|PronType=Art	51	det	_	_
51	pad	pad	NOUN	NSE	Number=Sing	46	conj	_	_
52	in	in	ADP	SVS	AdpType=Prep	54	case	_	_
53	voortdurende	voortdurend	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	54	amod	_	_
54	angs	angs	NOUN	NA	Number=Sing	55	obl	_	_
55	verkeer	verkeer	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	34	conj	_	SpaceAfter=No
56	,	,	PUNCT	ZM	_	55	punct	_	_
57	en	en	CCONJ	KN	_	55	cc	_	_
58	nie	nie	ADV	BS	Degree=Pos	60	advmod	_	_
59	in	in	ADP	SVS	AdpType=Prep	60	case	_	_
60	staat	staat	NOUN	NSE	Number=Sing	55	conj	_	_
61	is	wees	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	60	cop	_	_
62	om	om	ADP	SVS	AdpType=Prep	67	case	_	_
63	ons	ons	PRON	PEMB	Number=Plur|Person=1|Poss=Yes|PronType=Prs	65	det	_	_
64	openbare	openbaar	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	65	amod	_	_
65	ruimtes	ruimte	NOUN	NSM	Number=Plur	67	obj	_	_
66	te	te	PART	UPI	PartType=Inf	67	mark	_	_
67	geniet	geniet	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	60	obl	_	_
68	nie	nie	PART	UPO	PartType=Neg	67	mark	_	SpaceAfter=No
69	.	.	PUNCT	ZE	_	67	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 csubj	color:blue
1	Byvoorbeeld	byvoorbeeld	ADV	BS	Degree=Pos	15	advmod	_	SpaceAfter=No
2	,	,	PUNCT	ZM	_	1	punct	_	_
3	toegang	toegang	NOUN	NA	Number=Sing	15	nsubj	_	_
4	tot	tot	ADP	SVS	AdpType=Prep	5	case	_	_
5	drinkwater	drinkwater	NOUN	NM	Number=Sing	3	nmod	_	_
6	het	het	AUX	VUOT	Tense=Pres|VerbForm=Fin,Inf|VerbType=Aux	15	csubj	_	_
7	van	van	ADP	SVS	AdpType=Prep	8	case	_	_
8	62%	62%	SYM	RS	_	15	obl	_	_
9	in	in	ADP	SVS	AdpType=Prep	10	case	_	_
10	1996	1996	SYM	RS	_	8	obl	_	_
11	tot	tot	ADP	SVS	AdpType=Prep	12	case	_	_
12	88%	88%	SYM	RS	_	15	obl	_	_
13	in	in	ADP	SVS	AdpType=Prep	14	case	_	_
14	2008	2008	SYM	RS	_	12	obl	_	_
15	verbeter	verbeter	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	0	root	_	SpaceAfter=No
16	;	;	PUNCT	ZM	_	15	punct	_	_
17	asook	asook	CCONJ	KN	_	15	amod	_	_
18	tot	tot	ADP	SVS	AdpType=Prep	19	case	_	_
19	elektrisiteit	elektrisiteit	NOUN	NM	Number=Sing	15	obl	_	_
20	(	(	PUNCT	ZPL	_	21	punct	_	SpaceAfter=No
21	58%	58%	SYM	RS	_	19	amod	_	_
22	tot	tot	ADP	SVS	AdpType=Prep	23	case	_	_
23	72%	72%	SYM	RS	_	21	obl	_	SpaceAfter=No
24	)	)	PUNCT	ZPR	_	23	punct	_	SpaceAfter=No
25	;	;	PUNCT	ZM	_	19	punct	_	_
26	en	en	CCONJ	KN	_	19	cc	_	_
27	sanitasie	sanitasie	NOUN	NA	Number=Sing	19	conj	_	_
28	(	(	PUNCT	ZPL	_	29	punct	_	SpaceAfter=No
29	52%	52%	SYM	RS	_	27	amod	_	_
30	tot	tot	ADP	SVS	AdpType=Prep	31	case	_	_
31	73%	73%	SYM	RS	_	29	obl	_	SpaceAfter=No
32	)	)	PUNCT	ZPR	_	31	punct	_	SpaceAfter=No
33	.	.	PUNCT	ZE	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 csubj	color:blue
1	Versuim	versuim	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	8	csubj	_	_
2	om	om	ADP	SVS	AdpType=Prep	5	case	_	_
3	dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
4	te	te	PART	UPI	PartType=Inf	5	mark	_	_
5	doen	doen	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	1	obl	_	SpaceAfter=No
6	,	,	PUNCT	ZM	_	5	punct	_	_
7	sal	sal	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	8	aux	_	_
8	lei	lei	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
9	tot	tot	ADP	SVS	AdpType=Prep	10	case	_	_
10	rente	rente	NOUN	NM	Number=Sing	8	obl	_	_
11	en	en	CCONJ	KN	_	10	cc	_	_
12	boetes	boete	NOUN	NSM	Number=Plur	10	conj	_	_
13	op	op	ADP	SVS	AdpType=Prep	15	case	_	_
14	laat	laat	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	15	amod	_	_
15	betalings	betaling	NOUN	NSM	Number=Plur	12	nmod	_	_
16	en	en	CCONJ	KN	_	10	cc	_	_
17	bykomende	bykom	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	18	amod	_	_
18	belasting	belasting	NOUN	NM	Number=Sing	10	conj	_	_
19	vir	vir	ADP	SVS	AdpType=Prep	22	case	_	_
20	die	die	DET	LB	Definite=Def|PronType=Art	22	det	_	_
21	laat	laat	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	22	amod	_	_
22	indiening	indiening	NOUN	NA	Number=Sing	18	nmod	_	_
23	van	van	ADP	SVS	AdpType=Prep	24	case	_	_
24	opgawes	opgawe	NOUN	NSM	Number=Plur	22	nmod	_	SpaceAfter=No
25	.	.	PUNCT	ZE	_	8	punct	_	_

~~~


