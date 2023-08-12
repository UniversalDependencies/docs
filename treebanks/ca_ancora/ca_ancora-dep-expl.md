---
layout: base
title:  'Statistics of expl in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="ca_ancora-dep-expl-pass.html">expl:pass</a></tt>.

58 nodes (0%) are attached to their parents as `expl`.

55 instances of `expl` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62068965517241.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (57; 98% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 expl	color:blue
1	Pel	pel	ADP	sps00	_	6	case	6:case	MWE=Pel_que_fa_a|MWEPOS=ADP
2	que	que	SCONJ	_	_	1	fixed	1:fixed	_
3	fa	fa	NOUN	_	_	1	fixed	1:fixed	_
4	a	a	ADP	_	_	1	fixed	1:fixed	_
5	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	6:det	_
6	seccions	secció	NOUN	ncfp000	Gender=Fem|Number=Plur	11	obl	11:obl	SpaceAfter=No
7	,	,	PUNCT	fc	PunctType=Comm	6	punct	6:punct	_
8	se	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	11	obj	11:obj	_
9	n'	en	PRON	pp3cn000	Case=Gen|Person=3|PronType=Prs	11	expl	11:expl	SpaceAfter=No|ArgTem=arg1:pat
10	han	haver	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
11	creat	crear	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
12	de	de	ADP	sps00	_	13	case	13:case	_
13	noves	nou	ADJ	aq0fp0	Gender=Fem|Number=Plur	11	nsubj	11:nsubj	SpaceAfter=No|ArgTem=arg1:pat
14	.	.	PUNCT	fp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 38 expl	color:blue
1	Segons	segons	ADP	sps00	_	2	case	2:case	_
2	Grau	Grau	PROPN	np0000p	_	6	obl	6:obl	SpaceAfter=No|Entity=(CESSCATA2001031627750c2-person-1-CorefType:ident,gstype:spec)
3	,	,	PUNCT	fc	PunctType=Comm	2	punct	2:punct	_
4	'	'	PUNCT	fz	PunctType=Quot	6	punct	6:punct	SpaceAfter=No
5	hi	hi	PRON	pp3cn000	Case=Loc|Person=3|PronType=Prs	6	obj	6:obj	_
6	ha	haver	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	8	det	8:det	Entity=(CESSCATA2001031627750c21--2-gstype:gen
8	ordre	ordre	NOUN	ncfs000	Gender=Fem|Number=Sing	6	obj	6:obj	ArgTem=arg1:tem
9	espanyola	espanyol	ADJ	aq0fs0	Gender=Fem|Number=Sing	8	amod	8:amod	_
10	que	que	PRON	pr0cn000	PronType=Rel	11	nsubj	11:nsubj	ArgTem=arg0:agt|Entity=(CESSCATA2001031627750c21--1-CorefType:ident,gstype:gen)
11	diu	dir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl	8:acl	_
12	que	que	SCONJ	cs	_	16	mark	16:mark	Entity=(CESSCATA2001031627750c23--5
13	no	no	ADV	rn	Polarity=Neg	16	advmod	16:advmod	_
14	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux	16:aux	ArgTem=arg1:pat
15	d'	de	ADP	sps00	_	16	mark	16:mark	SpaceAfter=No
16	entrar	entrar	VERB	vmn0000	VerbForm=Inf	11	xcomp	11:xcomp	_
17	ni	ni	ADV	rg	_	19	advmod	19:advmod	_
18	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	19	det	19:det	Entity=(NOCOREF:Gen--2-gstype:gen
19	cap	cap	NOUN	nccs000	Number=Sing	16	nsubj	16:nsubj	ArgTem=arg1:tem
20	de	de	ADP	sps00	_	21	case	21:case	_
21	bestiar	bestiar	NOUN	ncms000	Gender=Masc|Number=Sing	19	nmod	19:nmod	_
22	de	de	ADP	sps00	_	23	case	23:case	_
23	França	França	PROPN	np0000l	_	19	nmod	19:nmod	Entity=(CESSCATA2001031627750c22-place-1-gstype:spec)NOCOREF:Gen)
24	ni	ni	CCONJ	cc	_	26	cc	26:cc	_
25	pot	poder	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	aux	26:aux	_
26	circular	circular	VERB	vmn0000	VerbForm=Inf	16	conj	16:conj	_
27	per	per	ADP	sps00	_	28	case	28:case	_
28	França	França	PROPN	np0000l	_	26	obl	26:obl	ArgTem=arg2:loc|Entity=(CESSCATA2001031627750c22-place-1-CorefType:ident,gstype:spec)
29	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	30	det	30:det	Entity=(NOCOREF:Gen--2-gstype:gen
30	camió	camió	NOUN	ncms000	Gender=Masc|Number=Sing	26	nsubj	26:nsubj	ArgTem=arg0:agt
31	carregat	carregat	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	30	amod	30:amod	_
32	de	de	ADP	sps00	_	33	case	33:case	_
33	bestiar	bestiar	NOUN	ncms000	Gender=Masc|Number=Sing	30	nmod	30:nmod	SpaceAfter=No|Entity=NOCOREF:Gen)CESSCATA2001031627750c23)
34	'	'	PUNCT	fz	PunctType=Quot	6	punct	6:punct	Entity=CESSCATA2001031627750c21)
35	i	i	CCONJ	cc	_	42	cc	42:cc	_
36	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	37	det	37:det	SpaceAfter=No|Entity=(CESSCATA2001031627750c7-organization-2-CorefType:ident,gstype:spec
37	administració	administració	NOUN	ncfs000	Gender=Fem|Number=Sing	40	nsubj	40:nsubj	ArgTem=arg0:agt|Entity=CESSCATA2001031627750c7)
38	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	40	expl	40:expl	Entity=(NOCOREF:Gen--3-gstype:gen,HomoDD
39	que	que	PRON	pr0cn000	PronType=Rel	40	obj	40:obj	ArgTem=arg1:pat
40	fa	fer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	csubj	42:csubj	ArgTem=arg1:tem|Entity=NOCOREF:Gen)
41	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	cop	42:cop	_
42	controlar	controlar	VERB	vmn0000	VerbForm=Inf	6	conj	6:conj	ArgTem=arg2:atr
43	això	això	PRON	pd0ns000	Number=Sing|PronType=Dem	42	obj	42:obj	ArgTem=arg1:pat|Entity=(CESSCATA2001031627750c23--1-CorefType:dx.type)
44	a	a	ADP	sps00	_	48	case	48:case	MWE=a_partir_de|MWEPOS=ADP
45	partir	partir	NOUN	_	_	44	fixed	44:fixed	_
46	de	de	ADP	_	_	44	fixed	44:fixed	_
47	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	48	det	48:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
48	frontera	frontera	NOUN	ncfs000	Gender=Fem|Number=Sing	42	obl	42:obl	ArgTem=argM:loc
49	cap	cap	NOUN	sps00	_	52	case	52:case	MWE=cap_a|MWEPOS=ADP
50	a	a	ADP	_	_	49	fixed	49:fixed	_
51	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	52	det	52:det	SpaceAfter=No|Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
52	interior	interior	NOUN	ncms000	Gender=Masc|Number=Sing	48	nmod	48:nmod	_
53	de	de	ADP	spcms	_	55	case	55:case	_
54	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	55	det	55:det	_
55	país	país	NOUN	ncms000	Gender=Masc|Number=Sing	52	nmod	52:nmod	SpaceAfter=No|Entity=(NOCOREF:Gen--1-gstype:gen)NOCOREF:Gen)NOCOREF:Gen)
56	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


