---
layout: base
title:  'Statistics of expl:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_ancora-dep-expl-pv.html">expl:pv</a></tt>.

2233 nodes (0%) are attached to their parents as `expl:pass`.

2010 instances of `expl:pass` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26332288401254.

The following 2 pairs of parts of speech are connected with `expl:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2229; 100% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (4; 0% instances).


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
11	cupón	cupón	NOUN	ncms000	Gender=Masc|Number=Sing	9	nsubj	9:nsubj	ArgTem=arg1:pat|SpaceAfter=No
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
11	dos	dos	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	12	nummod	12:nummod	_
12	hamburguesas	hamburguesa	NOUN	ncfp000	Gender=Fem|Number=Plur	8	nmod	8:nmod	ArgTem=arg1:pat
13	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	14	punct	14:punct	SpaceAfter=No
14	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	appos	12:appos	_
15	de	de	ADP	sps00	_	14	case	14:case	_
16	Barcelona	Barcelona	PROPN	np00000	_	14	nmod	14:nmod	Entity=(CESSCASTP199901023c13-place-1-CorefType:ident,gstype:spec)
17	y	y	CCONJ	cc	_	18	cc	18:cc	_
18	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	conj	14:conj	_
19	de	de	ADP	sps00	_	18	case	18:case	_
20	Berlín	Berlín	PROPN	np00000	_	18	appos	18:appos	Entity=(CESSCASTP199901023c14-place-1-CorefType:ident,gstype:spec)|SpaceAfter=No
21	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	14	punct	14:punct	SpaceAfter=No
22	,	,	PUNCT	fc	PunctType=Comm	14	punct	14:punct	Entity=NOCOREF:Gen)NOCOREF:Spec.number)
23	equivalen	equivaler	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	ArgTem=arg2:atr
24	a	a	ADP	sps00	_	23	case	23:case	_
25	más	más	ADV	rg	Degree=Cmp	28	advmod	28:advmod	Entity=(NOCOREF:Spec.number-number-4-gstype:spec(NOCOREF:Spec.number-number-4-gstype:spec
26	de	de	ADP	sps00	_	25	case	25:case	_
27	43	43	NUM	_	NumForm=Digit|NumType=Card	25	nummod	25:nummod	_
28	pesetas	peseta	NOUN	zm	Gender=Fem|Number=Plur	24	conj	24:conj	ArgTem=argM:tmp|Currency=Yes|Entity=NOCOREF:Spec.number)|SpaceAfter=No
29	,	,	PUNCT	fc	PunctType=Comm	36	punct	36:punct	_
30	es	es	NOUN	cc	ExtPos=CCONJ	36	cc	36:cc	MWE=es_decir|MWEPOS=CCONJ
31	decir	decir	NOUN	_	_	30	fixed	30:fixed	SpaceAfter=No
32	,	,	PUNCT	fc	PunctType=Comm	30	punct	30:punct	_
33	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	36:det	Entity=(CESSCASTP199901023c18-number-3-CorefType:ident,gstype:spec
34	mismo	mismo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Dem	36	det	36:det	_
35	25	25	NUM	_	NumForm=Digit|NumType=Card	36	nummod	36:nummod	SpaceAfter=No
36	%	%	SYM	zp	_	24	conj	24:conj	_
37	que	que	PRON	pr0cn000	PronType=Rel	36	obl	36:obl	Entity=(CESSCASTP199901023c18-number-1-CorefType:ident,gstype:spec)
38	si	si	SCONJ	cs	_	37	mark	37:mark	_
39	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	37	expl:pass	37:expl:pass	_
40	hace	hacer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	37	case	37:case	_
41	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	42	det	42:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
42	comparación	comparación	NOUN	ncfs000	Gender=Fem|Number=Sing	37	obj	37:obj	ArgTem=arg1:pat|Entity=NOCOREF:Gen)
43	en	en	ADP	sps00	_	44	case	44:case	_
44	pesetas	peseta	NOUN	ncfp000	Gender=Fem|Number=Plur	37	nmod	37:nmod	ArgTem=argM:mnr|Entity=(CESSCASTP199901023c19--1-CorefType:ident,gstype:gen)CESSCASTP199901023c18)NOCOREF:Spec.number)|SpaceAfter=No
45	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


