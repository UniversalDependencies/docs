---
layout: base
title:  'Statistics of xcomp in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `xcomp`

This relation is universal.

15 nodes (1%) are attached to their parents as `xcomp`.

15 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (12; 80% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Nalika	Nalika	ADP	_	_	2	case	_	_
2	taun	taun	NOUN	_	Number=Sing|Polite=Infm	7	obl:tmod	_	Level=Ngoko
3	1999	1999	NUM	_	NumType=Card	2	nummod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	Danau	Danau	PROPN	_	_	7	nsubj:pass	_	_
6	Sentarum	Sentarum	PROPN	_	_	5	flat:name	_	_
7	dikukuhaké	kukuh	VERB	_	Mood=Ind|Polite=Infm|Voice=Pass	0	root	_	Level=Ngoko
8	dadi	dadi	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	7	xcomp	_	Level=Ngoko
9	taman	taman	NOUN	_	Number=Sing	8	obj	_	_
10	nasional	nasional	ADJ	_	_	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Kanthi	Kanthi	ADP	_	Polite=Infm	2	case	_	Level=Ngoko
2	ulah	ulah	NOUN	_	Number=Sing	4	obl	_	_
3	raga	raga	NOUN	_	Number=Sing	2	nmod	_	_
4	dikarepaké	dikarepaké	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
5	para	para	DET	_	Number=Plur|PronType=Ind	6	det	_	_
6	prajurit	prajurit	NOUN	_	Number=Sing	7	nsubj	_	_
7	dadi	dadi	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	4	ccomp	_	Level=Ngoko
8	tangkas	tangkas	ADJ	_	_	7	xcomp	_	_
9	lan	lan	CCONJ	_	Polite=Infm	10	cc	_	Level=Ngoko
10	sregep	sregep	ADJ	_	_	8	conj	_	_
11	ing	ing	ADP	_	_	12	case	_	_
12	perang	perang	NOUN	_	Number=Sing	8	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 xcomp	color:blue
1	Miturut	turut	ADP	_	Polite=Form	2	case	_	Level=Krama
2	American	American	PROPN	_	_	10	nmod	_	_
3	Opera	Opera	PROPN	_	_	2	flat:name	_	_
4	Association	Asscociation	PROPN	_	_	2	flat:name	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	Rigoletto	Rigoletto	PROPN	_	_	9	nsubj	_	_
7	inggih	inggih	AUX	_	Polite=Form	9	aux	_	Level=Krama
8	punika	punika	DET	_	Polite=Form|PronType=Dem	7	fixed	_	Level=Krama
9	opera	opera	NOUN	_	Number=Sing	0	root	_	_
10	nomer	nomer	NOUN	_	Number=Sing	9	nmod	_	_
11	9	9	NUM	_	NumType=Card	10	nummod	_	_
12	ingkang	ingkang	PRON	_	Polite=Form|PronType=Rel	14	nsubj	_	Level=Krama
13	paling	paling	ADV	_	_	14	advmod	_	_
14	asring	asring	ADJ	_	_	9	acl:relcl	_	_
15	dipuntontonaken	tonton	VERB	_	Mood=Ind|Polite=Form|Voice=Pass	14	xcomp	_	Level=Krama
16	ing	ing	ADP	_	_	17	case	_	_
17	Amérika	Amérika	PROPN	_	_	15	obl	_	_
18	Utara	Utara	PROPN	_	_	17	flat:name	_	SpaceAfter=No
19	.	.	PUNCT	_	_	9	punct	_	_

~~~


