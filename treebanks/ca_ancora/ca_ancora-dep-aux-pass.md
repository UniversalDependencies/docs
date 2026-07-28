---
layout: base
title:  'Statistics of aux:pass in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-aux.html">aux</a></tt>.

1 nodes (0%) are attached to their parents as `aux:pass`.

1 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCATAAP2000062011186c9--2-gstype:gen
2	cloenda	cloenda	NOUN	ncfs000	Gender=Fem|Number=Sing	5	nsubj:pass	5:nsubj:pass	ArgTem=arg1:pat
3	oficial	oficial	ADJ	aq0cs0	Number=Sing	2	amod	2:amod	Entity=CESSCATAAP2000062011186c9)
4	serà	ser	AUX	vsif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	5:aux:pass	_
5	presidida	presidir	VERB	vmp0000	Tense=Past|VerbForm=Part	0	root	0:root	_
6	per	per	ADP	sps00	_	7	case	7:case	_
7	Federico	Federico	PROPN	np0000p	_	5	obl:agent	5:obl:agent	MWE=Federico_Mayor_Zaragoza|MWEPOS=PROPN|ArgTem=arg0:agt|Entity=(CESSCATAAP2000062011186c2-person-1-gstype:spec
8	Mayor	Mayor	PROPN	_	_	7	flat	7:flat	_
9	Zaragoza	Zaragoza	PROPN	_	_	7	flat	7:flat	SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	11	punct	11:punct	_
11	exdirector	exdirector	NOUN	ncms000	Gender=Masc|Number=Sing	7	appos	7:appos	Entity=(CESSCATAAP2000062011186c2-person-1-CorefType:pred.definit,gstype:spec
12	general	general	ADJ	aq0cs0	Number=Sing	11	amod	11:amod	_
13	de	de	ADP	sps00	_	15	case	15:case	_
14	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	15:det	Entity=(CESSCATAAP2000062011186c18-organization-2-gstype:spec
15	Unesco	Unesco	PROPN	np0000o	_	11	nmod	11:nmod	Entity=CESSCATAAP2000062011186c18)
16	i	i	CCONJ	cc	_	17	cc	17:cc	_
17	president	president	NOUN	ncms000	Gender=Masc|Number=Sing	11	conj	11:conj	_
18	honorari	honorari	ADJ	aq0ms0	Gender=Masc|Number=Sing	17	amod	17:amod	_
19	de	de	ADP	sps00	_	21	case	21:case	_
20	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	21	det	21:det	SpaceAfter=No|Entity=(CESSCATAAP2000062011186c11-organization-2-gstype:spec
21	Associació	Associació	PROPN	np0000o	_	17	nmod	17:nmod	MWE=Associació_Universitat_d'_Estiu_de_les_Terres_de_l'_Ebre|MWEPOS=PROPN
22	Universitat	Universitat	PROPN	_	_	21	flat	21:flat	_
23	d'	de	ADP	_	_	24	case	24:case	SpaceAfter=No
24	Estiu	Estiu	PROPN	_	_	21	flat	21:flat	_
25	de	de	ADP	_	_	27	case	27:case	_
26	les	el	DET	_	Gender=Fem|Number=Plur|PronType=Art	27	det	27:det	_
27	Terres	Terres	PROPN	_	_	21	flat	21:flat	_
28	de	de	ADP	_	_	30	case	30:case	_
29	l'	el	DET	_	Number=Sing|PronType=Art	30	det	30:det	SpaceAfter=No
30	Ebre	Ebre	PROPN	_	_	21	flat	21:flat	SpaceAfter=No|Entity=CESSCATAAP2000062011186c11)CESSCATAAP2000062011186c2)CESSCATAAP2000062011186c2)
31	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


