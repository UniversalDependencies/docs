---
layout: base
title:  'Statistics of csubj:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-csubj.html">csubj</a></tt>.

5 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 csubj:pass	color:blue
1	Dijo	decir	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
2	que	que	SCONJ	cs	_	9	mark	9:mark	_
3	todos	todo	DET	di0mp0	Gender=Masc|Number=Plur|PronType=Tot	5	det	5:det	Entity=(CESSCASTP2001110225c15--3-gstype:gen
4	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	_
5	actos	acto	NOUN	ncmp000	Gender=Masc|Number=Plur	9	nsubj	9:nsubj	ArgTem=arg1:tem
6	de	de	ADP	sps00	_	7	case	7:case	_
7	violencia	violencia	NOUN	ncfs000	Gender=Fem|Number=Sing	5	nmod	5:nmod	Entity=CESSCASTP2001110225c15)
8	son	ser	AUX	vsip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	ArgTem=arg1:pat
9	iguales	igual	ADJ	aq0cp0	Number=Plur	1	ccomp	1:ccomp	ArgTem=arg2:atr
10	y	y	CCONJ	cc	_	17	cc	17:cc	_
11	que	que	SCONJ	cs	_	17	mark	17:mark	_
12	quienes	quien	PRON	pr0cp000	Number=Plur|PronType=Rel	14	nsubj	14:nsubj	ArgTem=arg0:agt|Entity=(NOCOREF:Gen--1-gstype:gen)
13	los	él	PRON	pp3mpa00	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	14	obj	14:obj	ArgTem=arg1:pat|Entity=(CESSCASTP2001110225c15--1-CorefType:ident,gstype:gen)
14	cometen	cometer	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	csubj:pass	17:csubj:pass	ArgTem=arg1:pat
15	deben	deber	AUX	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	aux	17:aux	_
16	ser	ser	AUX	vsn0000	VerbForm=Inf	17	aux:pass	17:aux:pass	_
17	tratados	tratar	VERB	vmp00pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	9	conj	9:conj	_
18	"	"	PUNCT	fe	PunctType=Quot	22	punct	22:punct	SpaceAfter=No
19	como	como	SCONJ	cs	_	22	mark	22:mark	_
20	lo	él	PRON	da0ns0	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	22	det	22:det	Entity=(NOCOREF:Gen--3-gstype:gen
21	que	que	PRON	pr0cn000	PronType=Rel	22	nsubj	22:nsubj	ArgTem=arg1:tem
22	son	ser	AUX	vsip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	advcl	17:advcl	ArgTem=argM:adv|SpaceAfter=No
23	:	:	PUNCT	fd	PunctType=Colo	24	punct	24:punct	Entity=(CESSCASTP2001110225c11--2-CorefType:ident,gstype:gen
24	terroristas	terrorista	NOUN	nccp000	Number=Plur	22	obj	22:obj	Entity=CESSCASTP2001110225c11)NOCOREF:Gen)|SpaceAfter=No
25	"	"	PUNCT	fe	PunctType=Quot	22	punct	22:punct	SpaceAfter=No
26	.	.	PUNCT	fp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 csubj:pass	color:blue
1	Los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	12:det	Entity=(CESSCASTAA200003043224c2--12-CorefType:ident,gstype:gen
2	integrantes	integrante	ADJ	aq0cp0	Number=Plur	12	amod	12:amod	ArgTem=arg1:pat
3	de	de	ADP	sps00	_	5	case	5:case	_
4	este	este	DET	dd0ms0	Gender=Masc|Number=Sing|PronType=Dem	5	det	5:det	Entity=(CESSCASTAA200003043224c7-organization-2-CorefType:ident,gstype:spec
5	grupo	grupo	NOUN	ncms000	Gender=Masc|Number=Sing	2	nmod	2:nmod	Entity=CESSCASTAA200003043224c7)|SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	2	punct	2:punct	_
7	tres	tres	NUM	pn0cp000	Number=Plur|NumForm=Word|NumType=Card	12	nsubj	12:nsubj	ArgTem=arg1:tem|Entity=(CESSCASTAA200003043224c8--1-gstype:gen
8	de	de	ADP	sps00	_	10	case	10:case	_
9	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	10:det	Entity=(CESSCASTAA200003043224c2--2-CorefType:ident,gstype:gen
10	cuales	cual	PRON	pr0cp000	Number=Plur|PronType=Rel	7	nmod	7:nmod	Entity=CESSCASTAA200003043224c2)CESSCASTAA200003043224c8)
11	eran	ser	AUX	vsii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	12	cop	12:cop	_
12	mujeres	mujer	NOUN	ncfp000	Gender=Fem|Number=Plur	15	csubj:pass	15:csubj:pass	ArgTem=arg2:atr|Entity=(CESSCASTAA200003043224c8--1-CorefType:pred.definit,gstype:gen)|SpaceAfter=No
13	,	,	PUNCT	fc	PunctType=Comm	12	punct	12:punct	Entity=CESSCASTAA200003043224c2)
14	fueron	ser	AUX	vsis3p0	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	15	aux:pass	15:aux:pass	_
15	detenidos	detener	VERB	vmp00pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	0:root	_
16	entre	entre	ADP	sps00	_	19	case	19:case	_
17	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	19	det	19:det	Entity=(NOCOREF:Spec.date-time-2-gstype:spec(NOCOREF:Spec.date-time-2-gstype:spec
18	15	15	NUM	_	NumForm=Digit|NumType=Card	19	nummod	19:nummod	ArgTem=argM:tmp|MWE=15_horas|MWEPOS=NOUN
19	horas	hora	NOUN	ncfp000	Gender=Fem|Number=Plur	15	obl	15:obl	_
20	de	de	ADP	sps00	_	21	case	21:case	_
21	ayer	ayer	ADV	rg	_	19	advmod	19:advmod	Entity=NOCOREF:Spec.date)
22	y	y	CCONJ	cc	_	25	cc	25:cc	_
23	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	25	det	25:det	Entity=(NOCOREF:Spec.date-time-2-gstype:spec
24	7,30	7,30	NUM	_	NumForm=Digit|NumType=Card	25	nummod	25:nummod	MWE=7,30_horas|MWEPOS=NOUN
25	horas	hora	NOUN	ncfp000	Gender=Fem|Number=Plur	19	conj	19:conj	_
26	de	de	ADP	sps00	_	27	case	27:case	_
27	hoy	hoy	ADV	rg	_	25	advmod	25:advmod	Entity=NOCOREF:Spec.date)NOCOREF:Spec.date)
28	en	en	ADP	sps00	_	30	case	30:case	_
29	diferentes	diferente	DET	di0cp0	Number=Plur|PronType=Ind	30	det	30:det	Entity=(NOCOREF:Gen--2-gstype:gen
30	domicilios	domicilio	NOUN	ncmp000	Gender=Masc|Number=Plur	15	obl	15:obl	ArgTem=argM:loc
31	situados	situado	ADJ	aq0mpp	Gender=Masc|Number=Plur|VerbForm=Part	30	amod	30:amod	_
32	en	en	ADP	sps00	_	34	case	34:case	_
33	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	34:det	Entity=(CESSCASTAA200003043224c9-place-2-CorefType:ident,gstype:spec
34	ciudad	ciudad	NOUN	ncfs000	Gender=Fem|Number=Sing	31	obl	31:obl	ArgTem=arg2:loc
35	de	de	ADP	sps00	_	36	case	36:case	_
36	Valencia	Valencia	PROPN	np00000	_	34	nmod	34:nmod	Entity=(NOCOREF:Spec.location-place-1-gstype:spec)CESSCASTAA200003043224c9)
37	y	y	CCONJ	cc	_	39	cc	39:cc	_
38	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	39	det	39:det	Entity=(NOCOREF:Gen--2-gstype:gen
39	localidades	localidad	NOUN	ncfp000	Gender=Fem|Number=Plur	34	conj	34:conj	_
40	de	de	ADP	sps00	_	41	case	41:case	_
41	Xátiva	Xátiva	PROPN	np00000	_	39	nmod	39:nmod	_
42	y	y	CCONJ	cc	_	43	cc	43:cc	_
43	Llombai	Llombai	PROPN	np00000	_	41	conj	41:conj	Entity=(CESSCASTAA200003043224c10--1)NOCOREF:Gen)NOCOREF:Gen)|SpaceAfter=No
44	.	.	PUNCT	fp	PunctType=Peri	15	punct	15:punct	_

~~~


