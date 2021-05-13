---
layout: base
title:  'Statistics of acl:relcl in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-acl.html">acl</a></tt>.

7 nodes (0%) are attached to their parents as `acl:relcl`.

7 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71428571428571.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (4; 57% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 acl:relcl	color:blue
1	A	a	ADP	_	_	8	case	_	MWE=Al_final|MWEPOS=ADV
2	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	1	fixed	_	_
3	final	final	NOUN	_	_	1	fixed	_	SpaceAfter=No
4	,	,	PUNCT	_	PunctType=Comm	1	punct	_	_
5	en	en	ADP	_	_	7	case	_	_
6	mi	mi	DET	_	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
7	trabajo	trabajo	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	_
8	hago	hacer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
9	sobre	sobre	ADP	_	_	8	advmod	_	MWE=sobre_todo|MWEPOS=ADV
10	todo	todo	PRON	_	Gender=Masc|Number=Sing|PronType=Tot	9	fixed	_	_
11	lo	él	PRON	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	8	obj	_	_
12	que	que	PRON	_	PronType=Int,Rel	14	nsubj	_	_
13	me	yo	PRON	_	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	14	iobj	_	_
14	da	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	MWE=da_la_gana|MWEPOS=VERB
15	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	gana	gana	NOUN	_	Gender=Fem|Number=Sing	14	obj	_	SpaceAfter=No
17	;	;	PUNCT	_	PunctType=Semi	8	punct	_	_
18	no	no	ADV	_	Polarity=Neg	19	advmod	_	_
19	atiendo	atender	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	advcl	_	_
20	a	a	ADP	_	_	21	case	_	_
21	nada	nada	PRON	_	Number=Sing|PronType=Neg	19	obj	_	_
22	más	más	ADV	_	Degree=Cmp	21	advmod	_	SpaceAfter=No
23	.	.	PUNCT	_	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	hombre	hombre	NOUN	_	Gender=Masc|Number=Sing	20	nsubj	_	_
3	que	que	PRON	_	PronType=Int,Rel	5	nsubj	_	_
4	se	él	PRON	_	Case=Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
5	da	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	MWE=da_cuenta|MWEPOS=VERB
6	cuenta	cuenta	NOUN	_	Gender=Fem|Number=Sing	5	compound	_	_
7	de	de	ADP	_	_	11	mark	_	_
8	que	que	SCONJ	_	_	11	mark	_	_
9	ha	haber	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
10	estado	estar	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	aux	_	_
11	buscando	buscar	VERB	_	VerbForm=Ger	5	ccomp	_	_
12	algo	algo	PRON	_	Number=Sing|PronType=Ind	11	obj	_	_
13	que	que	PRON	_	PronType=Int,Rel	14	obj	_	_
14	tenía	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	acl:relcl	_	_
15	y	y	CCONJ	_	_	16	cc	_	_
16	perdió	perder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	conj	_	_
17	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
18	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
19	única	único	ADJ	_	Gender=Fem|Number=Sing	20	amod	_	_
20	compañía	compañía	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
21	de	de	ADP	_	_	23	case	_	_
22	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	muchacha	muchacha	NOUN	_	Gender=Fem|Number=Sing	20	nmod	_	_
24	junto	junto	ADJ	_	_	26	case	_	MWE=junto_a|MWEPOS=ADP
25	a	a	ADP	_	_	24	fixed	_	_
26	Domingo	Domingo	PROPN	_	_	20	obl	_	SpaceAfter=No
27	,	,	PUNCT	_	PunctType=Comm	30	punct	_	_
28	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
29	viejo	viejo	ADJ	_	Gender=Masc|Number=Sing	30	amod	_	_
30	acomodador	acomodador	NOUN	_	Gender=Masc|Number=Sing	26	appos	_	_
31	ciego	ciego	ADJ	_	Gender=Masc|Number=Sing	30	amod	_	_
32	que	que	PRON	_	PronType=Int,Rel	34	nsubj	_	_
33	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	cop	_	_
34	cómplice	cómplice	NOUN	_	Number=Sing	30	acl	_	_
35	y	y	CCONJ	_	_	36	cc	_	_
36	ángel	ángel	NOUN	_	Gender=Masc|Number=Sing	34	conj	_	_
37	de	de	ADP	_	_	39	case	_	_
38	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	39	det	_	_
39	guarda	guarda	NOUN	_	Number=Sing	36	nmod	_	_
40	y	y	CCONJ	_	_	42	cc	_	_
41	que	que	PRON	_	PronType=Int,Rel	42	obj	_	_
42	encarna	encarnar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	conj	_	_
43	López	López	PROPN	_	_	42	nsubj	_	MWE=López_Vázquez|MWEPOS=PROPN
44	Vázquez	Vázquez	PROPN	_	_	43	flat	_	SpaceAfter=No
45	.	.	PUNCT	_	PunctType=Peri	20	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 25 acl:relcl	color:blue
1	La	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	patronal	patronal	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	pretende	pretender	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	formalizar	formalizar	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	así	así	ADV	_	_	4	advmod	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	compromiso	compromiso	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
8	recíproco	recíproco	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
9	de	de	ADP	_	_	11	case	_	_
10	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	régimen	régimen	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
12	de	de	ADP	_	_	13	case	_	_
13	indemnización	indemnización	NOUN	_	Gender=Fem|Number=Sing	11	nmod	_	_
14	y	y	CCONJ	_	_	16	cc	_	_
15	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	demandantes	demandante	NOUN	_	Number=Plur	11	conj	_	_
17	de	de	ADP	_	_	18	case	_	_
18	empleo	empleo	NOUN	_	Gender=Masc|Number=Sing	16	nmod	_	_
19	en	en	ADP	_	_	21	case	_	_
20	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	Care	Care	PROPN	_	_	4	obl	_	SpaceAfter=No
22	,	,	PUNCT	_	PunctType=Comm	25	punct	_	_
23	cuya	cuyo	PRON	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Int,Rel	24	nmod	_	_
24	firma	firma	NOUN	_	Gender=Fem|Number=Sing	25	nsubj	_	_
25	da	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	MWE=da_derecho|MWEPOS=VERB
26	derecho	derecho	NOUN	_	Gender=Masc|Number=Sing	25	compound	_	_
27	"	"	PUNCT	_	PunctType=Quot	29	punct	_	SpaceAfter=No
28	a	a	ADP	_	_	29	mark	_	_
29	cobrar	cobrar	VERB	_	VerbForm=Inf	25	xcomp	_	_
30	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	subsidio	subsidio	NOUN	_	Gender=Masc|Number=Sing	29	obj	_	_
32	de	de	ADP	_	_	34	case	_	_
33	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	paro	paro	NOUN	_	Gender=Masc|Number=Sing	31	nmod	_	_
35	y	y	CCONJ	_	_	38	cc	_	_
36	a	a	ADP	_	_	38	case	_	_
37	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	38	det	_	_
38	servicios	servicio	NOUN	_	Gender=Masc|Number=Plur	29	conj	_	_
39	que	que	PRON	_	PronType=Int,Rel	40	nsubj	_	_
40	facilitan	facilitar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	38	acl	_	_
41	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	42	det	_	_
42	regreso	regreso	NOUN	_	Gender=Masc|Number=Sing	40	obj	_	_
43	a	a	ADP	_	_	45	case	_	_
44	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	45	det	_	_
45	empleo	empleo	NOUN	_	Gender=Masc|Number=Sing	42	nmod	_	SpaceAfter=No
46	"	"	PUNCT	_	PunctType=Quot	29	punct	_	SpaceAfter=No
47	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


