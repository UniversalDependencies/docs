---
layout: base
title:  'Statistics of nsubj:outer in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_ancora-dep-nsubj-pass.html">nsubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `nsubj:outer`.

14 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.3571428571429.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (6; 43% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (3; 21% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	Lo	él	PRON	da0ns0	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	2	det	2:det	Entity=(CESSCASTP20020402106c12--4-gstype:gen,HomoDD
2	único	único	ADJ	aq0ms0	Gender=Masc|Number=Sing	8	nsubj:outer	8:nsubj:outer	ArgTem=arg1:tem
3	que	que	PRON	pr0cn000	PronType=Rel	4	nsubj	4:nsubj	ArgTem=arg1:tem|Entity=(CESSCASTP20020402106c12--1-CorefType:ident,gstype:gen)
4	tiene	tener	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
5	lógica	lógica	NOUN	ncfs000	Gender=Fem|Number=Sing	4	obj	4:obj	ArgTem=arg2:atr|Entity=CESSCASTP20020402106c12)
6	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
7	que	que	SCONJ	cs	_	8	mark	8:mark	_
8	reciben	recibir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	ccomp	24:ccomp	ArgTem=arg2:atr
9	consignas	consigna	NOUN	ncfp000	Gender=Fem|Number=Plur	8	obj	8:obj	ArgTem=arg1:pat|Entity=(NOCOREF:Gen--1-gstype:gen)
10	de	de	ADP	sps00	_	11	case	11:case	_
11	arriba	arriba	ADV	rg	_	8	advmod	8:advmod	ArgTem=arg2:tem|SpaceAfter=No
12	,	,	PUNCT	fc	PunctType=Comm	14	punct	14:punct	_
13	más	más	ADV	rg	Degree=Cmp	14	advmod	14:advmod	_
14	allá	allá	ADV	rg	_	11	advmod	11:advmod	_
15	de	de	ADP	sps00	_	18	case	18:case	_
16	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	18:det	Entity=(NOCOREF:Spec.organization-organization-3-gstype:spec
17	propia	propio	ADJ	aq0fs0	Gender=Fem|Number=Sing	18	amod	18:amod	_
18	Federación	Federación	PROPN	np00000	_	14	obl	14:obl	MWE=Federación_Española_de_Fútbol|MWEPOS=PROPN
19	Española	Española	PROPN	_	_	18	flat	18:flat	_
20	de	de	ADP	_	_	21	case	21:case	_
21	Fútbol	Fútbol	PROPN	_	_	18	flat	18:flat	Entity=NOCOREF:Spec.organization)
22	"	"	PUNCT	fe	PunctType=Quot	8	punct	8:punct	SpaceAfter=No
23	,	,	PUNCT	fc	PunctType=Comm	8	punct	8:punct	_
24	manifestó	manifestar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
25	Álvaro	Álvaro	PROPN	np00000	_	24	nsubj	24:nsubj	MWE=Álvaro_Ruiz-Mateos|MWEPOS=PROPN|ArgTem=arg0:agt|Entity=(CESSCASTP20020402106c2-person-1-CorefType:ident,gstype:spec
26	Ruiz-Mateos	Ruiz-Mateos	PROPN	_	_	25	flat	25:flat	Entity=CESSCASTP20020402106c2)|SpaceAfter=No
27	.	.	PUNCT	fp	PunctType=Peri	24	punct	24:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj:outer	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
2	gran	gran	ADJ	aq0cs0	Number=Sing	3	amod	3:amod	_
3	cuestión	cuestión	NOUN	ncfs000	Gender=Fem|Number=Sing	7	nsubj:outer	7:nsubj:outer	ArgTem=arg1:tem
4	era	ser	AUX	vsii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	7:cop	SpaceAfter=No
5	:	:	PUNCT	fd	PunctType=Colo	4	punct	4:punct	_
6	Se	él	PRON	p0300000	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
7	tendrá	tener	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	0:root	ArgTem=arg2:atr|Cxn=Interrogative-Polar-Direct|CxnElt=7:Interrogative-Polar-Direct.Clause
8	Romario	Romario	PROPN	np0000p	_	7	nsubj	7:nsubj	ArgTem=arg0:agt|Entity=(NOCOREF:Spec.person-person-1-gstype:spec)
9	que	que	SCONJ	cs	_	10	mark	10:mark	_
10	ir	ir	VERB	vmn0000	VerbForm=Inf	7	xcomp	7:xcomp	_
11	a	a	ADP	sps00	_	12	case	12:case	_
12	Río	Río	PROPN	np0000l	_	10	obl	10:obl	ArgTem=arg4:des|Entity=(NOCOREF:Spec.location-place-1-gstype:spec)|SpaceAfter=No
13	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 nsubj:outer	color:blue
1	Una	uno	PRON	pi0fs000	Gender=Fem|Number=Sing|PronType=Ind	12	nsubj:outer	12:nsubj:outer	ArgTem=arg1:tem|Entity=(NOCOREF:Gen--1-gstype:gen
2	de	de	ADP	sps00	_	5	case	5:case	_
3	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	5:det	Entity=(NOCOREF:Gen--3-gstype:gen,HomoDD
4	grandes	grande	ADJ	aq0cp0	Number=Plur	5	amod	5:amod	_
5	novedades	novedad	NOUN	ncfp000	Gender=Fem|Number=Plur	1	nmod	1:nmod	_
6	de	de	ADP	sps00	_	7	case	7:case	_
7	ahora	ahora	ADV	rg	_	5	advmod	5:advmod	Entity=NOCOREF:Gen)NOCOREF:Gen)
8	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
9	que	que	SCONJ	cs	_	12	mark	12:mark	_
10	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	12	expl:pass	12:expl:pass	_
11	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	12:aux	_
12	realizado	realizar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
13	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	15:det	Entity=(CESSCASTP20001201104c11--3-CorefType:dx.type
14	mismo	mismo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Dem	15	det	15:det	_
15	proceso	proceso	NOUN	ncms000	Gender=Masc|Number=Sing	12	nsubj	12:nsubj	ArgTem=arg1:pat|Entity=CESSCASTP20001201104c11)|SpaceAfter=No
16	,	,	PUNCT	fc	PunctType=Comm	20	punct	20:punct	_
17	pero	pero	CCONJ	cc	_	20	cc	20:cc	_
18	en	en	ADP	sps00	_	20	case	20:case	_
19	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	20:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
20	interior	interior	NOUN	ncms000	Gender=Masc|Number=Sing	12	conj	12:conj	_
21	de	de	ADP	sps00	_	23	case	23:case	_
22	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	23	det	23:det	Entity=(NOCOREF:Gen--2-gstype:gen
23	ser	ser	NOUN	ncms000	Gender=Masc|Number=Sing	20	nmod	20:nmod	_
24	vivo	vivo	ADJ	aq0ms0	Gender=Masc|Number=Sing	23	amod	23:amod	Entity=NOCOREF:Gen)NOCOREF:Gen)|SpaceAfter=No
25	.	.	PUNCT	fp	PunctType=Peri	12	punct	12:punct	_

~~~


