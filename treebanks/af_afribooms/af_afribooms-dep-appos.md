---
layout: base
title:  'Statistics of appos in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Relations: `appos`

This relation is universal.

63 nodes (0%) are attached to their parents as `appos`.

63 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.73015873015873.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af_afribooms-pos-X.html">X</a></tt> (46; 73% instances), <tt><a href="af_afribooms-pos-PROPN.html">PROPN</a></tt>-<tt><a href="af_afribooms-pos-X.html">X</a></tt> (5; 8% instances), <tt><a href="af_afribooms-pos-X.html">X</a></tt>-<tt><a href="af_afribooms-pos-X.html">X</a></tt> (5; 8% instances), <tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af_afribooms-pos-SYM.html">SYM</a></tt> (2; 3% instances), <tt><a href="af_afribooms-pos-PROPN.html">PROPN</a></tt>-<tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="af_afribooms-pos-X.html">X</a></tt>-<tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 appos	color:blue
1	Dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	verskaf	verskaf	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
3	'n	'n	DET	LO	Definite=Ind|PronType=Art	5	det	_	_
4	sterk	sterk	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	5	amod	_	_
5	kurrikulum	kurrikulum	NOUN	NSE	Number=Sing	2	obj	_	_
6	om	om	ADP	SVS	AdpType=Prep	17	case	_	_
7	die	die	DET	LB	Definite=Def|PronType=Art	8	det	_	_
8	taal	taal	NOUN	NSE	Number=Sing	17	obj	_	_
9	van	van	ADP	SVS	AdpType=Prep	10	case	_	_
10	onderrig	onderrig	NOUN	NA	Number=Sing	8	nmod	_	_
11	en	en	CCONJ	KN	_	10	cc	_	_
12	leer	leer	NOUN	NA	Number=Sing	10	conj	_	_
13	(	(	PUNCT	ZPL	_	14	punct	_	SpaceAfter=No
14	TOL	TOL	X	RK	_	8	appos	_	SpaceAfter=No
15	)	)	PUNCT	ZPR	_	14	punct	_	_
16	te	te	PART	UPI	PartType=Inf	17	mark	_	_
17	ondersteun	ondersteun	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	5	xcomp	_	SpaceAfter=No
18	.	.	PUNCT	ZE	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 appos	color:blue
1	Terselfdertyd	terselfdertyd	ADV	BS	Degree=Pos	25	advmod	_	_
2	wil	wil	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	25	aux	_	_
3	ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	25	nsubj	_	_
4	ook	ook	ADV	BS	Degree=Pos	25	advmod	_	_
5	SAOG	SAOG	X	RL	_	7	amod	_	_
6	se	se	PART	UPS	PartType=Gen	7	case	_	_
7	interaksie	interaksie	NOUN	NSE	Number=Sing	25	obj	_	_
8	met	met	ADP	SVS	AdpType=Prep	10	case	_	_
9	die	die	DET	LB	Definite=Def|PronType=Art	10	det	_	_
10	Gemeenskapsmark	gemeenskapsmark	NOUN	NSE	Number=Sing	7	nmod	_	_
11	vir	vir	ADP	SVS	AdpType=Prep	12	case	_	_
12	Oos-	Oos-	X	RWD	_	10	nmod	_	_
13	en	en	CCONJ	KN	_	12	cc	_	_
14	Suider-Afrika	Suider-Afrika	PROPN	NEE	Number=Sing	12	conj	_	_
15	(	(	PUNCT	ZPL	_	16	punct	_	SpaceAfter=No
16	COMESA	COMESA	X	RK	_	10	appos	_	SpaceAfter=No
17	)	)	PUNCT	ZPR	_	16	punct	_	_
18	en	en	CCONJ	KN	_	10	cc	_	_
19	die	die	DET	LB	Definite=Def|PronType=Art	20	det	_	_
20	Oos-Afrika	Oos-Afrika	PROPN	NEE	Number=Sing	10	conj	_	_
21	Gemeenskap	gemeenskap	NOUN	NSE	Number=Sing	20	nmod	_	_
22	(	(	PUNCT	ZPL	_	23	punct	_	SpaceAfter=No
23	OAG	OAG	X	RL	_	20	appos	_	SpaceAfter=No
24	)	)	PUNCT	ZPR	_	23	punct	_	_
25	verbeter	verbeter	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	SpaceAfter=No
26	.	.	PUNCT	ZE	_	25	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 appos	color:blue
1	Ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
2	sal	sal	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	4	aux	_	_
3	pogings	poging	NOUN	NSM	Number=Plur	4	obj	_	_
4	ondersteun	ondersteun	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
5	om	om	ADP	SVS	AdpType=Prep	20	case	_	_
6	die	die	DET	LB	Definite=Def|PronType=Art	10	det	_	_
7	politieke	politiek	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	10	amod	_	_
8	en	en	CCONJ	KN	_	7	cc	_	_
9	ekonomiese	ekonomies	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	7	conj	_	_
10	integrasie	integrasie	NOUN	NA	Number=Sing	20	obj	_	_
11	van	van	ADP	SVS	AdpType=Prep	14	case	_	_
12	die	die	DET	LB	Definite=Def|PronType=Art	14	det	_	_
13	Suider-Afrikaanse	Suider-Afrikaans	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	14	amod	_	_
14	Ontwikkelingsgemeenskap-	Ontwikkelingsgemeenskap-	X	RWD	_	10	nmod	_	_
15	(	(	PUNCT	ZPL	_	16	punct	_	SpaceAfter=No
16	SAOG	SAOG	X	RL	_	14	appos	_	SpaceAfter=No
17	)	)	PUNCT	ZPR	_	16	punct	_	_
18	streek	streek	NOUN	NSE	Number=Sing	14	dep	_	_
19	te	te	PART	UPI	PartType=Inf	20	mark	_	_
20	bespoedig	bespoedig	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	4	obl	_	_
21	en	en	CCONJ	KN	_	20	cc	_	_
22	intra-streekhandel	intra-streekhandel	NOUN	NA	Number=Sing	26	obj	_	_
23	en	en	CCONJ	KN	_	22	cc	_	_
24	beleggings	belegging	NOUN	NSM	Number=Plur	22	conj	_	_
25	te	te	PART	UPI	PartType=Inf	26	mark	_	_
26	bevorder	bevorder	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	20	xcomp	_	SpaceAfter=No
27	.	.	PUNCT	ZE	_	26	punct	_	_

~~~


