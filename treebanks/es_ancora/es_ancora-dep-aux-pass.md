---
layout: base
title:  'Statistics of aux:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-aux.html">aux</a></tt>.

15 nodes (0%) are attached to their parents as `aux:pass`.

15 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (14; 93% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Eramos	ser	AUX	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	aux:pass	2:aux:pass	_
2	considerados	considerar	VERB	vmp00pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	11	ccomp	11:ccomp	_
3	como	como	SCONJ	cs	_	4	mark	4:mark	_
4	gente	gente	NOUN	ncfs000	Gender=Fem|Number=Sing	2	xcomp	2:xcomp	ArgTem=arg2:atr|Entity=(CESSCASTP2000030234c11--1-gstype:gen
5	que	que	PRON	pr0cn000	PronType=Rel	6	nsubj	6:nsubj	ArgTem=arg0:agt|Entity=(CESSCASTP2000030234c11--1-CorefType:ident,gstype:gen)
6	hacía	hacer	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl	4:acl	_
7	su	su	DET	dp3cs0	Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	Entity=(NOCOREF:Gen--2-gstype:gen
8	vida	vida	NOUN	ncfs000	Gender=Fem|Number=Sing	6	obj	6:obj	ArgTem=arg1:pat|Entity=NOCOREF:Gen)CESSCASTP2000030234c11)
9	"	"	PUNCT	fe	PunctType=Quot	2	punct	2:punct	SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	2	punct	2:punct	_
11	matizó	matizar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Este	este	DET	dd0ms0	Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	Entity=(CESSCASTAA2000092824050c5--2-CorefType:ident,gstype:gen
2	descenso	descenso	NOUN	ncms000	Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	ArgTem=arg1:tem|Entity=CESSCASTAA2000092824050c5)
3	está	estar	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	provocado	provocado	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
5	por	por	ADP	sps00	_	7	case	7:case	_
6	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	7:det	Entity=(CESSCASTAA2000092824050c6--2-gstype:gen,HomoDD
7	disminución	disminución	NOUN	ncfs000	Gender=Fem|Number=Sing	4	obl:agent	4:obl:agent	ArgTem=arg0:agt,arg0:agt
8	de	de	ADP	sps00	_	10	case	10:case	_
9	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	10:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
10	necesidad	necesidad	NOUN	ncfs000	Gender=Fem|Number=Sing	7	nmod	7:nmod	ArgTem=arg1:tem
11	de	de	ADP	sps00	_	12	case	12:case	_
12	endeudamiento	endeudamiento	NOUN	ncms000	Gender=Masc|Number=Sing	10	nmod	10:nmod	Entity=(NOCOREF:Gen--1-gstype:gen
13	de	de	ADP	spcms	_	15	case	15:case	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	15:det	_
15	Estado	Estado	PROPN	np00000	_	12	nmod	12:nmod	ArgTem=arg1:tem|Entity=(CESSCASTAA2000092824050c13-organization-1-gstype:spec)NOCOREF:Gen)NOCOREF:Gen)CESSCASTAA2000092824050c6)
16	y	y	CCONJ	cc	_	20	cc	20:cc	_
17	por	por	ADP	sps00	_	20	case	20:case	_
18	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	20:det	Entity=(CESSCASTAA2000092824050c7--3-gstype:gen,HomoDD
19	menor	menor	ADJ	aq0cs0	Degree=Cmp|Number=Sing	20	amod	20:amod	_
20	vencimiento	vencimiento	NOUN	ncms000	Gender=Masc|Number=Sing	7	conj	7:conj	_
21	de	de	ADP	sps00	_	22	case	22:case	_
22	deuda	deuda	NOUN	ncfs000	Gender=Fem|Number=Sing	20	nmod	20:nmod	SpaceAfter=No|ArgTem=arg1:tem|Entity=(CESSCASTAA2000092824050c9--1-gstype:gen)CESSCASTAA2000092824050c7)
23	,	,	PUNCT	fc	PunctType=Comm	26	punct	26:punct	_
24	que	que	PRON	pr0cn000	PronType=Rel	26	nsubj	26:nsubj	ArgTem=arg0:agt|Entity=(CESSCASTAA2000092824050c6_PLUS_CESSCASTAA2000092824050c7--1-CorefType:ident,gstype:gen)|SplitAnte=CESSCASTAA2000092824050c6<CESSCASTAA2000092824050c6_PLUS_CESSCASTAA2000092824050c7,CESSCASTAA2000092824050c7<CESSCASTAA2000092824050c6_PLUS_CESSCASTAA2000092824050c7
25	han	haber	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	aux	26:aux	_
26	permitido	permitir	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	7:acl:relcl	_
27	que	que	SCONJ	cs	_	38	mark	38:mark	SpaceAfter=No
28	,	,	PUNCT	fc	PunctType=Comm	33	punct	33:punct	_
29	en	en	ADP	sps00	_	33	case	33:case	_
30	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	33	det	33:det	Entity=(NOCOREF:Gen--4-gstype:gen,HomoDD
31	últimos	último	ADJ	ao0mp0	Gender=Masc|Number=Plur|NumType=Ord	33	amod	33:amod	_
32	cuatro	cuatro	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	33	nummod	33:nummod	_
33	años	año	NOUN	ncmp000	Gender=Masc|Number=Plur	38	obl	38:obl	SpaceAfter=No|ArgTem=argM:tmp|Entity=NOCOREF:Gen)
34	,	,	PUNCT	fc	PunctType=Comm	33	punct	33:punct	_
35	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	36:det	Entity=(CESSCASTAA2000092824050c3-organization-2-CorefType:ident,gstype:spec
36	Tesoro	Tesoro	PROPN	np00000	_	38	nsubj	38:nsubj	ArgTem=arg0:cau|Entity=CESSCASTAA2000092824050c3)
37	haya	haber	AUX	vasp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	38	aux	38:aux	_
38	reducido	reducir	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	26	ccomp	26:ccomp	ArgTem=arg1:pat
39	a	a	ADP	sps00	_	41	case	41:case	_
40	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	41:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
41	mitad	mitad	NOUN	ncfs000	Gender=Fem|Number=Sing	38	obl	38:obl	ArgTem=arg4:efi|Entity=NOCOREF:Gen)
42	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	43	det	43:det	Entity=(CESSCASTAA2000092824050c8--2-gstype:gen,HomoDD
43	fondos	fondo	NOUN	ncmp000	Gender=Masc|Number=Plur	38	obj	38:obj	ArgTem=arg1:tem
44	que	que	PRON	pr0cn000	PronType=Rel	46	obj	46:obj	ArgTem=arg1:pat|Entity=(CESSCASTAA2000092824050c8--1-CorefType:ident,gstype:gen)
45	debe	deber	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	46	aux	46:aux	_
46	obtener	obtener	VERB	vmn0000	VerbForm=Inf	43	acl:relcl	43:acl:relcl	_
47	en	en	ADP	sps00	_	49	case	49:case	_
48	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	49	det	49:det	Entity=(CESSCASTAA2000092824050c24--2-gstype:gen,HomoDD
49	mercados	mercado	NOUN	ncmp000	Gender=Masc|Number=Plur	46	obl	46:obl	SpaceAfter=No|ArgTem=argM:loc|Entity=CESSCASTAA2000092824050c24)CESSCASTAA2000092824050c8)
50	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


