---
layout: base
title:  'Statistics of advmod:emph in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-advmod.html">advmod</a></tt>.

1 nodes (0%) are attached to their parents as `advmod:emph`.

1 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 31 advmod:emph	color:blue
1	L'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	2	det	2:det	SpaceAfter=No|Entity=(CESSCATAAP20031006102242c67--2-CorefType:ident,gstype:gen
2	edició	edició	NOUN	ncfs000	Gender=Fem|Number=Sing	13	nsubj	13:nsubj	SpaceAfter=No|ArgTem=arg2:loc
3	,	,	PUNCT	fc	PunctType=Comm	6	punct	6:punct	_
4	en	en	ADP	sps00	_	6	case	6:case	_
5	vuit	vuit	NUM	dn0cp0	Number=Plur|NumType=Card	6	nummod	6:nummod	Entity=(NOCOREF:Gen--2-gstype:gen
6	volums	volum	NOUN	ncmp000	Gender=Masc|Number=Plur	2	nmod	2:nmod	SpaceAfter=No|Entity=NOCOREF:Gen)
7	,	,	PUNCT	fc	PunctType=Comm	6	punct	6:punct	_
8	en	en	ADP	sps00	_	9	case	9:case	_
9	català	català	NOUN	ncms000	Gender=Masc|Number=Sing	2	nmod	2:nmod	Entity=(CESSCATAAP20031006102242c66--1
10	i	i	CCONJ	cc	_	11	cc	11:cc	_
11	castellà	castellà	NOUN	ncms000	Gender=Masc|Number=Sing	9	conj	9:conj	SpaceAfter=No|Entity=CESSCATAAP20031006102242c66)
12	,	,	PUNCT	fc	PunctType=Comm	9	punct	9:punct	Entity=CESSCATAAP20031006102242c67)
13	inclourà	incloure	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	0:root	_
14	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	15:det	Entity=(CESSCATAAP20031006102242c42--2-gstype:gen,HomoDD
15	textos	text	NOUN	ncmp000	Gender=Masc|Number=Plur	13	obj	13:obj	ArgTem=arg1:pat
16	que	que	PRON	pr0cn000	PronType=Rel	20	obj	20:obj	ArgTem=arg1:pat|Entity=(CESSCATAAP20031006102242c42--1-CorefType:ident,gstype:gen)
17	Salvador	Salvador	PROPN	np0000p	_	20	nsubj	20:nsubj	MWE=Salvador_Dalí|MWEPOS=PROPN|ArgTem=arg0:agt|Entity=(CESSCATAAP20031006102242c6-person-1-CorefType:ident,gstype:spec
18	Dalí	Dalí	PROPN	_	_	17	flat	17:flat	Entity=CESSCATAAP20031006102242c6)
19	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	20:aux	_
20	escriure	escriure	VERB	vmn0000	VerbForm=Inf	15	acl	15:acl	_
21	des	des	ADP	sps00	_	23	case	23:case	MWE=des_de|MWEPOS=ADP
22	de	de	ADP	_	_	21	fixed	21:fixed	_
23	1919	1919	NOUN	_	AdvType=Tim	20	obl	20:obl	SpaceAfter=No|ArgTem=argM:tmp|Entity=(CESSCATAAP20031006102242c43-time-1-gstype:spec
24	,	,	PUNCT	fc	PunctType=Comm	26	punct	26:punct	_
25	quan	quan	PRON	pr000000	PronType=Rel	26	obl	26:obl	ArgTem=argM:tmp|Entity=(CESSCATAAP20031006102242c43-time-1-CorefType:ident,gstype:spec)
26	tenia	tenir	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	23	acl	23:acl	_
27	15	15	NUM	_	NumForm=Digit|NumType=Card	28	nummod	28:nummod	_
28	anys	any	NOUN	ncmp000	Gender=Masc|Number=Plur	26	obj	26:obj	SpaceAfter=No|ArgTem=arg2:atr
29	,	,	PUNCT	fc	PunctType=Comm	26	punct	26:punct	Entity=CESSCATAAP20031006102242c43)
30	fins	fins	ADP	sps00	_	34	case	34:case	_
31	gairebé	gairebé	ADV	rg	_	34	advmod:emph	34:advmod:emph	_
32	a	a	ADP	spcms	_	34	case	34:case	_
33	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	34:det	_
34	final	final	NOUN	ncfs000	Gender=Fem|Number=Sing	20	obl	20:obl	Entity=(NOCOREF:Gen--1-gstype:gen,HomoDD
35	de	de	ADP	sps00	_	38	case	38:case	_
36	la	el	DET	dp3fs0	Gender=Fem|Number=Sing|PronType=Art	38	det	38:det	MWE=la_seva|MWEPOS=DET|Entity=(CESSCATAAP20031006102242c36--3-CorefType:ident,gstype:gen,HomoDD(CESSCATAAP20031006102242c6-person-1-CorefType:ident,gstype:spec
37	seva	seu	DET	_	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	38	det	38:det	Entity=CESSCATAAP20031006102242c6)
38	vida	vida	NOUN	ncfs000	Gender=Fem|Number=Sing	34	nmod	34:nmod	SpaceAfter=No|Entity=CESSCATAAP20031006102242c36)NOCOREF:Gen)CESSCATAAP20031006102242c42)
39	.	.	PUNCT	fp	PunctType=Peri	13	punct	13:punct	_

~~~


