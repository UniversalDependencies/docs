---
layout: base
title:  'Statistics of acl:relcl in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-acl.html">acl</a></tt>.

10 nodes (0%) are attached to their parents as `acl:relcl`.

10 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.1.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (5; 50% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (3; 30% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	8	punct	8:punct	SpaceAfter=No
2	Lo	él	PRON	da0ns0	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	8	nsubj	8:nsubj	Entity=(CESSCASTA2000042317037c41--1
3	único	único	ADJ	aq0ms0	Gender=Masc|Number=Sing	2	amod	2:amod	_
4	que	que	PRON	pr0cn000	PronType=Int,Rel	5	obj	5:obj	_
5	demuestran	demostrar	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	Entity=CESSCASTA2000042317037c41)
6	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
7	su	su	DET	dp3cs0	Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	Entity=(CESSCASTA2000042317037c41--2-CorefType:pred.definit(CESSCASTA2000042317037c18-other-1-CorefType:ident,gstype:spec)
8	impotencia	impotencia	NOUN	ncfs000	Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Entity=CESSCASTA2000042317037c41)
9	,	,	PUNCT	fc	PunctType=Comm	14	punct	14:punct	_
10	porque	porque	SCONJ	cs	_	14	mark	14:mark	_
11	no	no	ADV	rn	Polarity=Neg	14	advmod	14:advmod	_
12	lo	él	PRON	pp3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	14	obj	14:obj	Entity=(CESSCASTA2000042317037c5-person-1-CorefType:ident,gstype:spec)
13	pueden	poder	AUX	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	14	aux	14:aux	_
14	echar	echar	VERB	vmn0000	VerbForm=Inf	8	advcl	8:advcl	SpaceAfter=No
15	"	"	PUNCT	fe	PunctType=Quot	8	punct	8:punct	SpaceAfter=No
16	.	.	PUNCT	fp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Este	este	DET	dd0ms0	Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	Entity=(CESSCASTP20010202167c4-person-2-CorefType:ident,gstype:spec
2	hombre	hombre	NOUN	ncms000	Gender=Masc|Number=Sing	20	nsubj	20:nsubj	_
3	que	que	PRON	pr0cn000	PronType=Int,Rel	5	nsubj	5:nsubj	Entity=(CESSCASTP20010202167c4-person-1-CorefType:ident,gstype:spec)
4	se	él	PRON	p0300000	Case=Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	_
5	da	dar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	MWE=da_cuenta|MWEPOS=VERB
6	cuenta	cuenta	NOUN	_	Gender=Fem|Number=Sing	5	compound	5:compound	_
7	de	de	ADP	sps00	_	11	mark	11:mark	_
8	que	que	SCONJ	cs	_	11	mark	11:mark	_
9	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
10	estado	estar	AUX	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	aux	11:aux	_
11	buscando	buscar	VERB	vmg0000	VerbForm=Ger	5	ccomp	5:ccomp	_
12	algo	algo	PRON	pi0cs000	Number=Sing|PronType=Ind	11	obj	11:obj	Entity=(CESSCASTP20010202167c5--1-gstype:gen
13	que	que	PRON	pr0cn000	PronType=Int,Rel	14	obj	14:obj	Entity=(CESSCASTP20010202167c5--1-CorefType:ident,gstype:gen)
14	tenía	tener	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	acl:relcl	12:acl:relcl	_
15	y	y	CCONJ	cc	_	16	cc	16:cc	_
16	perdió	perder	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	conj	14:conj	Entity=CESSCASTP20010202167c5)CESSCASTP20010202167c4)
17	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	20:cop	_
18	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	20:det	Entity=(CESSCASTP20010202167c4-person-3-CorefType:pred.definit,gstype:spec
19	única	único	ADJ	aq0fs0	Gender=Fem|Number=Sing	20	amod	20:amod	_
20	compañía	compañía	NOUN	ncfs000	Gender=Fem|Number=Sing	0	root	0:root	_
21	de	de	ADP	sps00	_	23	case	23:case	_
22	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	23:det	Entity=(CESSCASTP20010202167c1--2-CorefType:ident
23	muchacha	muchacha	NOUN	ncfs000	Gender=Fem|Number=Sing	20	nmod	20:nmod	Entity=CESSCASTP20010202167c1)CESSCASTP20010202167c4)
24	junto	junto	ADJ	sps00	_	26	case	26:case	MWE=junto_a|MWEPOS=ADP
25	a	a	ADP	_	_	24	fixed	24:fixed	_
26	Domingo	Domingo	PROPN	np00000	_	20	obl	20:obl	SpaceAfter=No|Entity=(CESSCASTP20010202167c6-person-1-gstype:spec
27	,	,	PUNCT	fc	PunctType=Comm	30	punct	30:punct	Entity=(CESSCASTP20010202167c6-person-4-CorefType:pred.indefinit,gstype:spec
28	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	30	det	30:det	_
29	viejo	viejo	ADJ	aq0ms0	Gender=Masc|Number=Sing	30	amod	30:amod	_
30	acomodador	acomodador	NOUN	ncms000	Gender=Masc|Number=Sing	26	appos	26:appos	_
31	ciego	ciego	ADJ	aq0ms0	Gender=Masc|Number=Sing	30	amod	30:amod	_
32	que	que	PRON	pr0cn000	PronType=Int,Rel	34	nsubj	34:nsubj	Entity=(CESSCASTP20010202167c6-person-1-CorefType:ident,gstype:spec)
33	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	cop	34:cop	_
34	cómplice	cómplice	NOUN	nccs000	Number=Sing	30	acl	30:acl	_
35	y	y	CCONJ	cc	_	36	cc	36:cc	_
36	ángel	ángel	NOUN	ncms000	Gender=Masc|Number=Sing	34	conj	34:conj	_
37	de	de	ADP	sps00	_	39	case	39:case	_
38	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	39	det	39:det	_
39	guarda	guarda	NOUN	nccs000	Number=Sing	36	nmod	36:nmod	_
40	y	y	CCONJ	cc	_	42	cc	42:cc	_
41	que	que	PRON	pr0cn000	PronType=Int,Rel	42	obj	42:obj	Entity=(CESSCASTP20010202167c6-person-1-CorefType:ident,gstype:spec)
42	encarna	encarnar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	conj	34:conj	_
43	López	López	PROPN	np00000	_	42	nsubj	42:nsubj	MWE=López_Vázquez|MWEPOS=PROPN|Entity=(CESSCASTP20010202167c7--1-CorefType:ident
44	Vázquez	Vázquez	PROPN	_	_	43	flat	43:flat	SpaceAfter=No|Entity=CESSCASTP20010202167c7)CESSCASTP20010202167c6)CESSCASTP20010202167c6)
45	.	.	PUNCT	fp	PunctType=Peri	20	punct	20:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	'	'	PUNCT	fz	PunctType=Quot	3	punct	3:punct	SpaceAfter=No|Entity=(CESSCASTP19981202141c1-other-3-gstype:spec
2	El	el	DET	np00000	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	MWE=El_extranjero_loco|MWEPOS=PROPN
3	extranjero	extranjero	PROPN	_	_	16	nsubj	16:nsubj	_
4	loco	loco	PROPN	_	_	3	flat	3:flat	SpaceAfter=No
5	'	'	PUNCT	fz	PunctType=Quot	3	punct	3:punct	SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	8	punct	8:punct	_
7	que	que	PRON	pr0cn000	PronType=Int,Rel	8	nsubj	8:nsubj	Entity=(CESSCASTP19981202141c1-other-1-CorefType:ident,gstype:spec)
8	cierra	cerrar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	3:acl:relcl	_
9	su	su	DET	dp3cs0	Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	10:det	Entity=(CESSCASTP19981202141s1.sn.13--2-gstype:gen(CESSCASTP19981202141c3-person-1-gstype:spec)
10	trilogía	trilogía	NOUN	ncfs000	Gender=Fem|Number=Sing	8	obj	8:obj	_
11	sobre	sobre	ADP	sps00	_	13	case	13:case	_
12	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	13:det	Entity=(CESSCASTP19981202141s1.sn.21--2-gstype:gen,HomoDD
13	gitanos	gitano	NOUN	ncmp000	Gender=Masc|Number=Plur	10	nmod	10:nmod	SpaceAfter=No|Entity=CESSCASTP19981202141s1.sn.21)CESSCASTP19981202141s1.sn.13)
14	,	,	PUNCT	fc	PunctType=Comm	8	punct	8:punct	Entity=CESSCASTP19981202141c1)
15	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	16	expl:pass	16:expl:pass	_
16	estrena	estrenar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
17	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	18:det	Entity=(CESSCASTP19981202141s1.sn.31-time-2-gstype:spec
18	viernes	viernes	NOUN	_	AdvType=Tim	16	obl	16:obl	SpaceAfter=No|Entity=CESSCASTP19981202141s1.sn.31)
19	.	.	PUNCT	fp	PunctType=Peri	16	punct	16:punct	_

~~~


