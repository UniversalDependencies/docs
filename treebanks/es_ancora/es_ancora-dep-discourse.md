---
layout: base
title:  'Statistics of discourse in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `discourse`

This relation is universal.

6 nodes (0%) are attached to their parents as `discourse`.

6 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 33% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Otra	otro	PRON	pi0fs000	Gender=Fem|Number=Sing|PronType=Ind	3	discourse	3:discourse	Entity=(NOCOREF:Gen--1-gstype:gen)|SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	1:punct	_
3	intensificar	intensificar	VERB	vmn0000	VerbForm=Inf	0	root	0:root	_
4	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
5	cooperación	cooperación	NOUN	ncfs000	Gender=Fem|Number=Sing	3	obj	3:obj	ArgTem=arg1:tem
6	internacional	internacional	ADJ	aq0cs0	Number=Sing	5	amod	5:amod	_
7	entre	entre	ADP	sps00	_	9	case	9:case	_
8	distintas	distinto	DET	di0fp0	Gender=Fem|Number=Plur|PronType=Ind	9	det	9:det	Entity=(NOCOREF:Gen--2-gstype:gen
9	jurisdicciones	jurisdicción	NOUN	ncfp000	Gender=Fem|Number=Plur	5	nmod	5:nmod	ArgTem=arg0:agt|Entity=NOCOREF:Gen)NOCOREF:Gen)|SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	12	punct	12:punct	_
11	como	como	SCONJ	cs	_	12	mark	12:mark	_
12	ilustra	ilustrar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	3:advcl	ArgTem=argM:adv
13	este	este	DET	dd0ms0	Gender=Masc|Number=Sing|PronType=Dem	14	det	14:det	Entity=(CESSCASTP2000090341c3-other-2-CorefType:ident,gstype:spec
14	caso	caso	NOUN	ncms000	Gender=Masc|Number=Sing	12	nsubj	12:nsubj	ArgTem=arg0:agt|Entity=CESSCASTP2000090341c3)
15	y	y	CCONJ	cc	_	16	cc	16:cc	_
16	otros	otro	PRON	pi0mp000	Gender=Masc|Number=Plur|PronType=Ind	14	conj	14:conj	Entity=(NOCOREF:Gen--1-gstype:gen
17	recientes	reciente	ADJ	aq0cp0	Number=Plur	16	amod	16:amod	_
18	protagonizados	protagonizado	ADJ	aq0mpp	Gender=Masc|Number=Plur|VerbForm=Part	16	amod	16:amod	_
19	por	por	ADP	sps00	_	21	case	21:case	_
20	nuestros	nuestro	DET	dp1mpp	Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	21	det	21:det	Entity=(NOCOREF:Gen--2-gstype:gen(NOCOREF:Gen--1-gstype:gen)
21	jueces	juez	NOUN	nccp000	Number=Plur	18	obl:agent	18:obl:agent	ArgTem=arg0:agt|Entity=NOCOREF:Gen)NOCOREF:Gen)|SpaceAfter=No
22	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Sí	sí	INTJ	rg	_	3	discourse	3:discourse	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	1:punct	_
3	incluso	incluso	ADV	rg	_	0	root	0:root	_
4	a	a	ADP	sps00	_	5	mark	5:mark	_
5	rodar	rodar	VERB	vmn0000	VerbForm=Inf	3	advcl	3:advcl	Entity=(CESSCASTP20001001136c7--1
6	con	con	ADP	sps00	_	7	case	7:case	_
7	cucarachas	cucaracha	NOUN	ncfp000	Gender=Fem|Number=Plur	5	obl	5:obl	ArgTem=argM:mnr|Entity=(NOCOREF:Gen--1-gstype:gen)
8	como	como	SCONJ	cs	_	10	mark	10:mark	_
9	lo	él	PRON	pp3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	10	obj	10:obj	ArgTem=arg1:pat|Entity=(CESSCASTP20001001136c7--1-CorefType:dx.token)
10	hice	hacer	VERB	vmis1s0	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	advcl	5:advcl	ArgTem=argM:adv|Entity=CESSCASTP20001001136c7)
11	y	y	CCONJ	cc	_	28	cc	28:cc	_
12	si	si	SCONJ	cs	_	15	mark	15:mark	_
13	me	yo	PRON	pp1cs000	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	15	obl:arg	15:obl:arg	ArgTem=arg2:ben|Entity=(CESSCASTP20001001136c1-person-1-CorefType:ident,gstype:spec)
14	hubiera	haber	AUX	vasi3s0	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	aux	15:aux	_
15	hecho	hacer	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	28	advcl	28:advcl	CxnElt=28:Conditional-NegativeEpistemic.Protasis@f
16	poner	poner	VERB	vmn0000	VerbForm=Inf	15	xcomp	15:xcomp	ArgTem=arg1:pat|Entity=(CESSCASTP20001001136c8--1
17	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	18:det	Entity=(NOCOREF:Gen--2-gstype:gen
18	cabeza	cabeza	NOUN	ncfs000	Gender=Fem|Number=Sing	16	obj	16:obj	ArgTem=arg1:pat|Entity=NOCOREF:Gen)
19	debajo	debajo	ADV	sps00	ExtPos=ADP	22	case	22:case	MWE=debajo_de|MWEPOS=ADP
20	de	de	ADP	_	_	19	fixed	19:fixed	_
21	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	22:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
22	pata	pata	NOUN	ncfs000	Gender=Fem|Number=Sing	16	obl	16:obl	ArgTem=arg2:loc
23	de	de	ADP	sps00	_	25	case	25:case	_
24	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	25	det	25:det	Entity=(NOCOREF:Gen--2-gstype:gen
25	elefante	elefante	NOUN	ncms000	Gender=Masc|Number=Sing	22	nmod	22:nmod	Entity=NOCOREF:Gen)NOCOREF:Gen)CESSCASTP20001001136c8)
26	lo	él	PRON	pp3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	28	obj	28:obj	ArgTem=arg1:pat|Entity=(CESSCASTP20001001136c8--1-CorefType:dx.token)
27	habría	haber	AUX	vaic3s0	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	28	aux	28:aux	_
28	hecho	hacer	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	conj	10:conj	Cxn=Conditional-NegativeEpistemic|CxnElt=28:Conditional-NegativeEpistemic.Apodosis@p|SpaceAfter=No
29	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 discourse	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	4	punct	4:punct	SpaceAfter=No
2	Sólo	sólo	ADV	rg	_	4	advmod	4:advmod	_
3	me	yo	PRON	pp1cs000	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	4	obl:arg	4:obl:arg	ArgTem=arg2:exp|Entity=(CESSCASTP2002090211c5-person-1-CorefType:ident,gstype:spec)
4	faltaba	faltar	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	44	ccomp	44:ccomp	ArgTem=arg1:pat
5	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	Entity=(NOCOREF:Gen--2-gstype:gen
6	principio	principio	NOUN	ncms000	Gender=Masc|Number=Sing	4	nsubj	4:nsubj	ArgTem=arg1:tem|Entity=NOCOREF:Gen)|SpaceAfter=No
7	,	,	PUNCT	fc	PunctType=Comm	8	punct	8:punct	_
8	entonces	entonces	ADV	rg	_	10	advmod	10:advmod	ArgTem=argM:tmp|SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	8	punct	8:punct	_
10	pongo	poner	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	advcl	4:advcl	_
11	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
12	radio	radio	NOUN	ncfs000	Gender=Fem|Number=Sing	10	obj	10:obj	ArgTem=arg1:pat|Entity=NOCOREF:Gen)
13	y	y	CCONJ	cc	_	14	cc	14:cc	_
14	oigo	oír	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	conj	10:conj	_
15	a	a	ADP	sps00	_	16	case	16:case	_
16	José	José	PROPN	np00000	_	14	obj	14:obj	ArgTem=arg1:pat|Entity=(NOCOREF:Spec.person-person-1-gstype:spec|MWE=José_María_García|MWEPOS=PROPN
17	María	María	PROPN	_	_	16	flat	16:flat	_
18	García	García	PROPN	_	_	16	flat	16:flat	Entity=NOCOREF:Spec.person)
19	diciendo	decir	VERB	vmg0000	VerbForm=Ger	14	xcomp	14:xcomp	ArgTem=argM:adv
20	'	'	PUNCT	fz	PunctType=Quot	22	punct	22:punct	SpaceAfter=No
21	Ojo	ojo	INTJ	_	_	22	discourse	22:discourse	ArgTem=arg1:pat
22	lo	él	PRON	da0ns0	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	19	ccomp	19:ccomp	Entity=(NOCOREF:Gen--1-gstype:gen
23	que	que	PRON	pr0cn000	PronType=Rel	25	nsubj	25:nsubj	ArgTem=arg1:tem
24	se	él	PRON	p0300000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	25	expl:pv	25:expl:pv	_
25	avecina	avecinar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl:relcl	22:acl:relcl	SpaceAfter=No
26	,	,	PUNCT	fc	PunctType=Comm	29	punct	29:punct	_
27	a	a	ADP	sps00	_	29	case	29:case	MWE=a_la_vuelta_de|MWEPOS=ADP
28	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	29:det	_
29	vuelta	vuelta	NOUN	_	_	25	obl	25:obl	_
30	de	de	ADP	_	_	32	case	32:case	_
31	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	32	det	32:det	_
32	esquina	esquina	NOUN	ncfs000	Gender=Fem|Number=Sing	29	nmod	29:nmod	ArgTem=arg2:loc|Entity=NOCOREF:Gen)|SpaceAfter=No
33	'	'	PUNCT	fz	PunctType=Quot	22	punct	22:punct	SpaceAfter=No
34	,	,	PUNCT	fc	PunctType=Comm	37	punct	37:punct	_
35	y	y	CCONJ	cc	_	37	cc	37:cc	_
36	me	yo	PRON	pp1cs000	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	37	obl:arg	37:obl:arg	ArgTem=arg3:exp|Entity=(CESSCASTP2002090211c5-person-1-CorefType:ident,gstype:spec)
37	hizo	hacer	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	conj	10:conj	_
38	mucha	mucho	DET	di0fs0	Gender=Fem|Number=Sing|NumType=Card|PronType=Ind	39	det	39:det	Entity=(NOCOREF:Gen--2-gstype:gen
39	gracia	gracia	NOUN	ncfs000	Gender=Fem|Number=Sing	37	obj	37:obj	ArgTem=arg2:atr|Entity=NOCOREF:Gen)
40	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	41:det	Entity=(NOCOREF:Gen--2-gstype:gen
41	rima	rima	NOUN	ncfs000	Gender=Fem|Number=Sing	37	nsubj	37:nsubj	ArgTem=arg1:tem|Entity=NOCOREF:Gen)|SpaceAfter=No
42	"	"	PUNCT	fe	PunctType=Quot	4	punct	4:punct	SpaceAfter=No
43	,	,	PUNCT	fc	PunctType=Comm	4	punct	4:punct	_
44	recuerda	recordar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
45	.	.	PUNCT	fp	PunctType=Peri	44	punct	44:punct	_

~~~


