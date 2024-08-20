---
layout: base
title:  'Statistics of expl:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_ancora-dep-expl-pv.html">expl:pv</a></tt>.

2233 nodes (0%) are attached to their parents as `expl:pass`.

2009 instances of `expl:pass` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26645768025078.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2228; 100% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl:pass	color:blue
1	A	a	ADP	sps00	_	3	case	3:case	_
2	cada	cada	DET	di0cs0	Number=Sing|PronType=Tot	3	det	3:det	_
3	residente	residente	NOUN	nccs000	Number=Sing	9	obl:arg	9:obl:arg	ArgTem=arg2:ben
4	de	de	ADP	spcms	_	6	case	6:case	_
5	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	campo	campo	NOUN	ncms000	Gender=Masc|Number=Sing	3	nmod	3:nmod	_
7	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	expl:pass	9:expl:pass	_
8	le	él	PRON	pp3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	expl	9:expl	ArgTem=arg2:ben
9	entrega	entregar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
10	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	11:det	_
11	cupón	cupón	NOUN	ncms000	Gender=Masc|Number=Sing	9	nsubj	9:nsubj	SpaceAfter=No|ArgTem=arg1:pat
12	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 39 expl:pass	color:blue
1	Ello	él	PRON	pp3ns000	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	ArgTem=arg1:tem|Entity=(CESSCASTP199901023c32--1-CorefType:dx.prop)
2	significa	significar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	que	que	SCONJ	cs	_	23	mark	23:mark	_
4	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	Entity=(NOCOREF:Spec.number-number-3-gstype:spec
5	26	26	NUM	_	NumForm=Digit|NumType=Card	6	nummod	6:nummod	_
6	cents	cent	NOUN	ncmp000	Gender=Masc|Number=Plur	23	nsubj	23:nsubj	ArgTem=arg1:tem
7	de	de	ADP	sps00	_	8	case	8:case	_
8	diferencia	diferencia	NOUN	ncfs000	Gender=Fem|Number=Sing	6	nmod	6:nmod	_
9	entre	entre	ADP	sps00	_	12	case	12:case	_
10	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	12:det	Entity=(NOCOREF:Gen--3-gstype:gen,HomoDD
11	dos	dos	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	10	nummod	10:nummod	_
12	hamburguesas	hamburguesa	NOUN	ncfp000	Gender=Fem|Number=Plur	8	nmod	8:nmod	ArgTem=arg1:pat
13	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	14	punct	14:punct	SpaceAfter=No
14	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	_
15	de	de	ADP	sps00	_	14	case	14:case	_
16	Barcelona	Barcelona	PROPN	np00000	_	14	appos	14:appos	Entity=(CESSCASTP199901023c13-place-1-CorefType:ident,gstype:spec)
17	y	y	CCONJ	cc	_	18	cc	18:cc	_
18	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	conj	14:conj	_
19	de	de	ADP	sps00	_	18	case	18:case	_
20	Berlín	Berlín	PROPN	np00000	_	18	appos	18:appos	SpaceAfter=No|Entity=(CESSCASTP199901023c14-place-1-CorefType:ident,gstype:spec)
21	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	14	punct	14:punct	SpaceAfter=No
22	,	,	PUNCT	fc	PunctType=Comm	14	punct	14:punct	Entity=NOCOREF:Gen)NOCOREF:Spec.number)
23	equivalen	equivaler	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	ArgTem=arg2:atr
24	a	a	ADP	sps00	_	23	case	23:case	_
25	más	más	ADV	rg	Degree=Cmp	28	advmod	28:advmod	Entity=(NOCOREF:Spec.number-number-4-gstype:spec(NOCOREF:Spec.number-number-4-gstype:spec
26	de	de	ADP	sps00	_	25	case	25:case	_
27	43	43	NUM	_	NumForm=Digit|NumType=Card	25	nummod	25:nummod	_
28	pesetas	peseta	NOUN	zm	Gender=Fem|Number=Plur	24	conj	24:conj	ArgTem=argM:tmp|Currency=Yes|Entity=NOCOREF:Spec.number)|SpaceAfter=No
29	,	,	PUNCT	fc	PunctType=Comm	36	punct	36:punct	_
30	es	es	NOUN	cc	_	36	cc	36:cc	MWE=es_decir|MWEPOS=CCONJ
31	decir	decir	NOUN	_	_	30	fixed	30:fixed	SpaceAfter=No
32	,	,	PUNCT	fc	PunctType=Comm	30	punct	30:punct	_
33	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	36:det	Entity=(CESSCASTP199901023c18-number-3-CorefType:ident,gstype:spec
34	mismo	mismo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Dem	33	det	33:det	_
35	25	25	NUM	_	NumForm=Digit|NumType=Card	36	nummod	36:nummod	SpaceAfter=No
36	%	%	SYM	zp	_	24	conj	24:conj	_
37	que	que	PRON	pr0cn000	PronType=Rel	36	obl	36:obl	Entity=(CESSCASTP199901023c18-number-1-CorefType:ident,gstype:spec)
38	si	si	SCONJ	cs	_	37	mark	37:mark	_
39	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	37	expl:pass	37:expl:pass	_
40	hace	hacer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	37	case	37:case	_
41	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	42	det	42:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
42	comparación	comparación	NOUN	ncfs000	Gender=Fem|Number=Sing	37	obj	37:obj	ArgTem=arg1:pat|Entity=NOCOREF:Gen)
43	en	en	ADP	sps00	_	44	case	44:case	_
44	pesetas	peseta	NOUN	ncfp000	Gender=Fem|Number=Plur	37	obl	37:obl	SpaceAfter=No|ArgTem=argM:mnr|Entity=(CESSCASTP199901023c19--1-CorefType:ident,gstype:gen)CESSCASTP199901023c18)NOCOREF:Spec.number)
45	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 23 expl:pass	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTP20020202115c2-organization-2-CorefType:ident,gstype:spec
2	grupo	grupo	NOUN	ncms000	Gender=Masc|Number=Sing	6	nsubj	6:nsubj	ArgTem=arg1:tem
3	británico	británico	ADJ	aq0ms0	Gender=Masc|Number=Sing	2	amod	2:amod	Entity=CESSCASTP20020202115c2)
4	se	él	PRON	p0300000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	_
5	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	visto	ver	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
7	obligado	obligado	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	6	obj	6:obj	ArgTem=arg2:atr
8	a	a	ADP	sps00	_	9	mark	9:mark	_
9	aplazar	aplazar	VERB	vmn0000	VerbForm=Inf	7	xcomp	7:xcomp	ArgTem=arg2:efi
10	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	11:det	Entity=(CESSCASTP20020202115c1--2-gstype:gen,HomoDD
11	conciertos	concierto	NOUN	ncmp000	Gender=Masc|Number=Plur	9	obj	9:obj	ArgTem=arg1:pat
12	que	que	PRON	pr0cn000	PronType=Rel	13	obj	13:obj	ArgTem=arg2:atr|Entity=(CESSCASTP20020202115c1--1-CorefType:ident,gstype:gen)
13	tenía	tener	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	acl	11:acl	_
14	programados	programado	ADJ	aq0mpp	Gender=Masc|Number=Plur|VerbForm=Part	24	xcomp	24:xcomp	ArgTem=argM:atr
15	para	para	ADP	sps00	_	18	case	18:case	_
16	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	18:det	Entity=(NOCOREF:Spec.date-time-3-gstype:spec
17	próximo	próximo	ADJ	aq0ms0	Gender=Masc|Number=Sing	18	amod	18:amod	_
18	martes	martes	NOUN	_	AdvType=Tim	24	obl	24:obl	Entity=NOCOREF:Spec.date)
19	en	en	ADP	sps00	_	20	case	20:case	_
20	Razzmatazz	Razzmatazz	PROPN	np00000	_	24	obl	24:obl	Entity=(NOCOREF:Spec.location-place-1-gstype:spec)
21	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	22	punct	22:punct	SpaceAfter=No
22	que	que	PRON	pr0cn000	PronType=Rel	24	nsubj:pass	24:nsubj:pass	ArgTem=arg1:pat|Entity=(CESSCASTP20020202115c1--1-CorefType:ident,gstype:gen)
23	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	14	expl:pass	14:expl:pass	_
24	pospone	posponer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	13:ccomp	ArgTem=argM:tmp
25	a	a	ADP	spcms	_	27	case	27:case	_
26	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	27:det	_
27	25	25	NUM	_	NumForm=Digit|NumType=Card	24	obl	24:obl	MWE=25_de_abril|MWEPOS=NOUN|ArgTem=argM:tmp|Entity=(NOCOREF:Spec.date-time-1-gstype:spec
28	de	de	ADP	_	_	29	case	29:case	_
29	abril	abril	NOUN	_	_	27	nmod	27:nmod	SpaceAfter=No|Entity=NOCOREF:Spec.date)
30	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	35	punct	35:punct	_
31	y	y	CCONJ	cc	_	35	cc	35:cc	SpaceAfter=No
32	,	,	PUNCT	fc	PunctType=Comm	35	punct	35:punct	_
33	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	34	det	34:det	_
34	día	día	NOUN	ncms000	Gender=Masc|Number=Sing	35	obl	35:obl	_
35	después	después	ADV	rg	_	14	conj	14:conj	SpaceAfter=No
36	,	,	PUNCT	fc	PunctType=Comm	35	punct	35:punct	_
37	en	en	ADP	sps00	_	35	case	35:case	_
38	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	39	det	39:det	Entity=(NOCOREF:Spec.location-place-2-gstype:spec
39	Sala	Sala	PROPN	np00000	_	35	nmod	35:nmod	MWE=Sala_Multiusos|MWEPOS=PROPN
40	Multiusos	Multiusos	PROPN	_	_	39	flat	39:flat	_
41	de	de	ADP	sps00	_	42	case	42:case	_
42	Zaragoza	Zaragoza	PROPN	np00000	_	39	nmod	39:nmod	SpaceAfter=No|Entity=(NOCOREF:Spec.location-place-1-gstype:spec)NOCOREF:Spec.location)CESSCASTP20020202115c1)
43	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


