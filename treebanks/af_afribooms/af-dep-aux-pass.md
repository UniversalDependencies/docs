---
layout: base
title:  'Statistics of aux:pass in UD_Afrikaans'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="af-dep-aux.html">aux</a></tt>.

854 nodes (2%) are attached to their parents as `aux:pass`.

710 instances of `aux:pass` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67330210772834.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-AUX.html">AUX</a></tt> (852; 100% instances), <tt><a href="af-pos-ADP.html">ADP</a></tt>-<tt><a href="af-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="af-pos-PRON.html">PRON</a></tt>-<tt><a href="af-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux:pass	color:blue
1	Hierdie	hierdie	DET	PA	PronType=Dem	2	det	_	_
2	webwerf	webwerf	NOUN	NSE	Number=Sing	7	nsubj:pass	_	_
3	word	word	AUX	VTUOP	Tense=Pres|VerbForm=Fin,Inf|VerbType=Pas	7	aux:pass	_	_
4	"	"	PUNCT	ZPL	_	5	punct	_	SpaceAfter=No
5	voetstoots	voetstoots	ADV	BS	Degree=Pos	7	advmod	_	SpaceAfter=No
6	"	"	PUNCT	ZPR	_	7	punct	_	_
7	aangebied	aanbied	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	ZE	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 aux:pass	color:blue
1	Ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	sal	sal	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	3	aux	_	_
3	voortgaan	voortgaan	VERB	VTHSO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
4	om	om	ADP	SVS	AdpType=Prep	3	amod	_	_
5	gelei	lei	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	7	aux	_	_
6	te	te	PART	UPI	PartType=Inf	7	mark	_	_
7	word	word	AUX	VTUOP	Tense=Pres|VerbForm=Fin,Inf|VerbType=Pas	4	aux:pass	_	_
8	deur	deur	ADP	SVS	AdpType=Prep	10	case	_	_
9	die	die	DET	LB	Definite=Def|PronType=Art	10	det	_	_
10	Regering	regering	NOUN	NSE	Number=Sing	13	nmod	_	_
11	se	se	PART	UPS	PartType=Gen	10	case	_	_
12	volkome	volkome	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	13	amod	_	_
13	verbintenis	verbintenis	NOUN	NSE	Number=Sing	7	obl	_	_
14	om	om	ADP	SVS	AdpType=Prep	18	case	_	_
15	georganiseerde	organiseer	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	16	amod	_	_
16	misdaad	misdaad	NOUN	NSE	Number=Sing	18	obj	_	_
17	te	te	PART	UPI	PartType=Inf	18	mark	_	_
18	beveg	beveg	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	13	xcomp	_	_
19	en	en	CCONJ	KN	_	14	cc	_	_
20	om	om	ADP	SVS	AdpType=Prep	31	case	_	_
21	die	die	DET	LB	Definite=Def|PronType=Art	22	det	_	_
22	bestuur	bestuur	NOUN	NA	Number=Sing	31	obj	_	SpaceAfter=No
23	,	,	PUNCT	ZM	_	22	punct	_	_
24	doeltreffendheid	doeltreffendheid	NOUN	NA	Number=Sing	22	conj	_	_
25	en	en	CCONJ	KN	_	24	cc	_	_
26	koördinering	koördinering	NOUN	NA	Number=Sing	24	conj	_	_
27	van	van	ADP	SVS	AdpType=Prep	29	case	_	_
28	ons	ons	PRON	PEMB	Number=Plur|Person=1|Poss=Yes|PronType=Prs	29	det	_	_
29	wetstoepassingsagentskappe	wetstoepassingsagentskap	NOUN	NSM	Number=Plur	26	nmod	_	_
30	te	te	PART	UPI	PartType=Inf	31	mark	_	_
31	verbeter	verbeter	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	14	obl	_	SpaceAfter=No
32	.	.	PUNCT	ZE	_	31	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 aux:pass	color:blue
1	Hierdie	hierdie	DET	PA	PronType=Dem	2	det	_	_
2	ooreenkomste	ooreenkoms	NOUN	NSM	Number=Plur	5	nsubj	_	_
3	sal	sal	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	5	aux	_	_
4	duidelik	duidelik	ADV	BS	Degree=Pos	5	advmod	_	_
5	uiteensit	uiteensit	VERB	VTHSG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
6	wat	wat	PRON	PB	PronType=Rel	5	amod	_	_
7	gedoen	doen	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	9	aux	_	_
8	moet	moet	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	9	aux	_	_
9	word	word	AUX	VTUOP	Tense=Pres|VerbForm=Fin,Inf|VerbType=Pas	6	aux:pass	_	SpaceAfter=No
10	,	,	PUNCT	ZM	_	6	punct	_	_
11	hoe	hoe	PRON	PB	PronType=Rel	6	conj	_	SpaceAfter=No
12	,	,	PUNCT	ZM	_	11	punct	_	_
13	deur	deur	ADP	SVS	AdpType=Prep	14	case	_	_
14	wie	wie	PRON	PB	PronType=Rel	11	obl	_	SpaceAfter=No
15	,	,	PUNCT	ZM	_	13	punct	_	_
16	binne	binne	ADP	SVS	AdpType=Prep	18	case	_	_
17	watter	watter	PRON	PB	PronType=Rel	18	det	_	_
18	tydperk	tydperk	NOUN	NSE	Number=Sing	13	obl	_	_
19	en	en	CCONJ	KN	_	16	cc	_	_
20	met	met	ADP	SVS	AdpType=Prep	21	case	_	_
21	behulp	behulp	NOUN	NA	Number=Sing	16	obl	_	_
22	van	van	ADP	SVS	AdpType=Prep	23	case	_	_
23	watter	watter	PRON	PB	PronType=Rel	21	nmod	_	_
24	maatreëls	maatreël	NOUN	NSM	Number=Plur	23	obj	_	_
25	en	en	CCONJ	KN	_	24	cc	_	_
26	hulpbronne	hulpbron	NOUN	NSM	Number=Plur	24	conj	_	SpaceAfter=No
27	.	.	PUNCT	ZE	_	5	punct	_	_

~~~


