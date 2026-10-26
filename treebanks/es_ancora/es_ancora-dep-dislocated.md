---
layout: base
title:  'Statistics of dislocated in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `dislocated`

This relation is universal.

39 nodes (0%) are attached to their parents as `dislocated`.

39 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.94871794871795.

The following 6 pairs of parts of speech are connected with `dislocated`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (20; 51% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (15; 38% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 2 dislocated	color:blue
1	Y	y	CCONJ	cc	_	15	cc	15:cc	_
2	nada	nada	PRON	pi0cs000	Number=Sing|PronType=Neg	15	dislocated	15:dislocated	_
3	de	de	ADP	sps00	_	4	case	4:case	_
4	imaginación	imaginación	NOUN	ncfs000	Gender=Fem|Number=Sing	2	nmod	2:nmod	SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	2	punct	2:punct	_
6	porque	porque	SCONJ	cs	_	15	mark	15:mark	_
7	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	8:det	Entity=(CESSCASTP2000020221_bc50--2-gstype:gen,HomoDD
8	imaginación	imaginación	NOUN	ncfs000	Gender=Fem|Number=Sing	15	nsubj	15:nsubj	ArgTem=arg0:agt|SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	13	punct	13:punct	_
10	que	que	PRON	pr0cn000	PronType=Rel	13	nsubj	13:nsubj	ArgTem=arg1:tem|Entity=(CESSCASTP2000020221_bc50--1-CorefType:ident,gstype:gen)
11	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	13:cop	_
12	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	13:det	Entity=(CESSCASTP2000020221_bc49--2-CorefType:ident,gstype:gen,HomoDD
13	libertad	libertad	NOUN	ncfs000	Gender=Fem|Number=Sing	8	acl:relcl	8:acl:relcl	ArgTem=arg2:atr|Entity=CESSCASTP2000020221_bc49)|SpaceAfter=No
14	,	,	PUNCT	fc	PunctType=Comm	13	punct	13:punct	Entity=CESSCASTP2000020221_bc50)
15	pone	poner	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MWE=pone_en_tela_de_juicio|MWEPOS=VERB
16	en	en	ADP	_	_	17	case	17:case	_
17	tela	tela	NOUN	ncfs000	Gender=Fem|Number=Sing	15	obl	15:obl	_
18	de	de	ADP	_	_	19	case	19:case	_
19	juicio	juicio	NOUN	ncms000	Gender=Masc|Number=Sing	17	nmod	17:nmod	_
20	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	21	det	21:det	Entity=(NOCOREF:Gen--3-gstype:gen,HomoDD
21	demás	demás	PRON	pi0cp000	Number=Plur|PronType=Ind	22	nmod	22:nmod	_
22	cosas	cosa	NOUN	ncfp000	Gender=Fem|Number=Plur	15	obj	15:obj	ArgTem=arg1:pat|Entity=NOCOREF:Gen)|SpaceAfter=No
23	.	.	PUNCT	fp	PunctType=Peri	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 dislocated	color:blue
1	Nuevo	nuevo	ADJ	aq0ms0	Gender=Masc|Number=Sing	2	amod	2:amod	_
2	estado	estado	NOUN	ncms000	Gender=Masc|Number=Sing	5	dislocated	5:dislocated	_
3	se	él	PRON	p0000000	Case=Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	obl:arg	5:obl:arg	_
4	las	él	PRON	pp3fpa00	Case=Acc|Gender=Fem|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	5	obj	5:obj	ArgTem=arg1:pat
5	veía	ver	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	0:root	_
6	surgir	surgir	VERB	vmn0000	VerbForm=Inf	5	xcomp	5:xcomp	ArgTem=arg1:pat
7	de	de	ADP	sps00	_	9	case	9:case	_
8	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	9:det	_
9	cenizas	ceniza	NOUN	ncfp000	Gender=Fem|Number=Plur	6	obl	6:obl	ArgTem=arg3:ori
10	con	con	ADP	sps00	_	12	case	12:case	_
11	una	uno	DET	di0fs0	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	_
12	vitalidad	vitalidad	NOUN	ncfs000	Gender=Fem|Number=Sing	6	obl	6:obl	ArgTem=argM:mnr
13	reverdecida	reverdecido	ADJ	aq0fsp	Gender=Fem|Number=Sing|VerbForm=Part	12	amod	12:amod	SpaceAfter=No
14	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 dislocated	color:blue
1	Año	año	NOUN	ncms000	Gender=Masc|Number=Sing	12	dislocated	12:dislocated	Entity=(CESSCASTA2000122317865c38--1|SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	3	punct	3:punct	_
3	siglo	siglo	NOUN	ncms000	Gender=Masc|Number=Sing	1	conj	1:conj	_
4	y	y	CCONJ	cc	_	5	cc	5:cc	_
5	milenio	milenio	NOUN	ncms000	Gender=Masc|Number=Sing	1	conj	1:conj	_
6	viejos	viejo	ADJ	aq0mp0	Gender=Masc|Number=Plur	1	amod	1:amod	SpaceAfter=No
7	,	,	PUNCT	fc	PunctType=Comm	1	punct	1:punct	Entity=CESSCASTA2000122317865c38)
8	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	Entity=(NOCOREF:Spec.date-time-2-gstype:spec
9	1	1	NUM	_	NumForm=Digit|NumType=Card	12	obj	12:obj	MWE=1_de_enero|MWEPOS=NOUN
10	de	de	ADP	_	_	11	case	11:case	_
11	enero	enero	NOUN	_	_	9	nmod	9:nmod	Entity=NOCOREF:Spec.date)
12	muertos	muerto	ADJ	aq0mpp	Gender=Masc|Number=Plur|VerbForm=Part	0	root	0:root	SpaceAfter=No
13	,	,	PUNCT	fc	PunctType=Comm	18	punct	18:punct	_
14	pero	pero	CCONJ	cc	_	18	cc	18:cc	_
15	ellos	él	PRON	pp3mp000	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	18	nsubj	18:nsubj	ArgTem=arg1:tem|Entity=(CESSCASTA2000122317865c38--1-CorefType:ident)
16	sólo	sólo	ADV	rg	_	18	advmod	18:advmod	_
17	son	ser	AUX	vsip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	18	cop	18:cop	_
18	fechas	fecha	NOUN	ncfp000	Gender=Fem|Number=Plur	12	conj	12:conj	ArgTem=arg2:atr|SpaceAfter=No
19	,	,	PUNCT	fc	PunctType=Comm	20	punct	20:punct	_
20	números	número	NOUN	ncmp000	Gender=Masc|Number=Plur	18	conj	18:conj	_
21	inanes	inane	ADJ	aq0cp0	Number=Plur	18	amod	18:amod	SpaceAfter=No
22	.	.	PUNCT	fp	PunctType=Peri	12	punct	12:punct	_

~~~


