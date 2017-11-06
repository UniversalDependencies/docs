---
layout: base
title:  'Statistics of xcomp in UD_Afrikaans'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans: Relations: `xcomp`

This relation is universal.

299 nodes (1%) are attached to their parents as `xcomp`.

279 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.37123745819398.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (184; 62% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (65; 22% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-AUX.html">AUX</a></tt> (20; 7% instances), <tt><a href="af-pos-ADP.html">ADP</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (16; 5% instances), <tt><a href="af-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="af-pos-ADP.html">ADP</a></tt>-<tt><a href="af-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="af-pos-PRON.html">PRON</a></tt>-<tt><a href="af-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="af-pos-PRON.html">PRON</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	Ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	het	het	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
3	almal	almal	PRON	PO	PronType=Ind	2	amod	_	_
4	'n	'n	DET	LO	Definite=Ind|PronType=Art	5	det	_	_
5	rol	rol	NOUN	NSE	Number=Sing	2	obj	_	_
6	om	om	ADP	SVS	AdpType=Prep	8	case	_	_
7	te	te	PART	UPI	PartType=Inf	8	mark	_	_
8	speel	speel	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	5	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	ZE	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 xcomp	color:blue
1	Dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	is	is	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	4	cop	_	_
3	'n	'n	DET	LO	Definite=Ind|PronType=Art	4	det	_	_
4	ideaal	ideaal	NOUN	NSE	Number=Sing	0	root	_	_
5	waarvoor	waarvoor	PRON	PB	PronType=Rel	7	nsubj	_	_
6	ek	ek	PRON	PEENP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	hoop	hoop	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	4	ccomp	_	_
8	om	om	ADP	SVS	AdpType=Prep	10	case	_	_
9	te	te	PART	UPI	PartType=Inf	10	mark	_	_
10	lewe	lewe	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	7	obl	_	_
11	en	en	CCONJ	KN	_	10	cc	_	_
12	te	te	PART	UPI	PartType=Inf	13	mark	_	_
13	bereik	bereik	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	10	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	ZE	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 xcomp	color:blue
1	In	in	ADP	SVS	AdpType=Prep	3	case	_	_
2	hierdie	hierdie	DET	PA	PronType=Dem	3	det	_	_
3	opsig	opsig	NOUN	NSE	Number=Sing	8	obl	_	_
4	is	is	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	8	cop	_	_
5	daar	daar	PRON	UXD	PronType=Ind	4	amod	_	_
6	'n	'n	DET	LO	Definite=Ind|PronType=Art	8	det	_	_
7	dringende	dring	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	8	amod	_	_
8	behoefte	behoefte	NOUN	NSE	Number=Sing	0	root	_	_
9	om	om	ADP	SVS	AdpType=Prep	17	case	_	_
10	die	die	DET	LB	Definite=Def|PronType=Art	11	det	_	_
11	menseregte-krisis	menseregte-krisis	NOUN	NSE	Number=Sing	17	obj	_	_
12	in	in	ADP	SVS	AdpType=Prep	14	case	_	_
13	daardie	daardie	DET	PA	PronType=Dem	14	det	_	_
14	land	land	NOUN	NSE	Number=Sing	17	obl	_	_
15	te	te	PART	UPI	PartType=Inf	17	mark	_	_
16	help	help	AUX	VTUOA	Tense=Pres|VerbForm=Fin,Inf|VerbType=Aux	17	xcomp	_	_
17	aanspreek	aanspreek	VERB	VTHSG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	8	nmod	_	SpaceAfter=No
18	.	.	PUNCT	ZE	_	17	punct	_	_

~~~


