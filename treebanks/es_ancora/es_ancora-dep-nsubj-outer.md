---
layout: base
title:  'Statistics of nsubj:outer in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_ancora-dep-nsubj-pass.html">nsubj:pass</a></tt>.

11 nodes (0%) are attached to their parents as `nsubj:outer`.

11 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.7272727272727.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (4; 36% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (3; 27% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (3; 27% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 nsubj:outer	color:blue
1	Pero	pero	CCONJ	cc	_	10	advmod	10:advmod	_
2	lo	él	PRON	da0ns0	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	3	det	3:det	_
3	cierto	cierto	ADJ	aq0ms0	Gender=Masc|Number=Sing	10	nsubj:outer	10:nsubj:outer	ArgTem=arg1:tem
4	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
5	que	que	SCONJ	cs	_	10	mark	10:mark	_
6	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	7:det	Entity=(CESSCASTP20001201199c9--2-CorefType:ident,gstype:gen
7	candidatas	candidata	NOUN	ncfp000	Gender=Fem|Number=Plur	10	nsubj	10:nsubj	ArgTem=arg1:tem|Entity=CESSCASTP20001201199c9)
8	sólo	sólo	ADV	rg	_	10	advmod	10:advmod	_
9	han	haber	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
10	tenido	tener	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
11	10	10	NUM	_	NumForm=Digit|NumType=Card	12	nummod	12:nummod	Entity=(CESSCASTP20001201199c15-number-2-gstype:spec
12	minutos	minuto	NOUN	ncmp000	Gender=Masc|Number=Plur	10	obj	10:obj	ArgTem=arg2:atr
13	cada	cada	DET	di0cs0	Number=Sing|PronType=Tot	14	det	14:det	_
14	una	uno	PRON	pi0fs000	Gender=Fem|Number=Sing|PronType=Ind	12	appos	12:appos	_
15	para	para	ADP	sps00	_	16	mark	16:mark	_
16	convencer	convencer	VERB	vmn0000	VerbForm=Inf	12	acl	12:acl	_
17	a	a	ADP	spcms	_	19	case	19:case	_
18	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	19:det	_
19	jurado	jurado	NOUN	ncms000	Gender=Masc|Number=Sing	16	obj	16:obj	ArgTem=arg1:pat|Entity=(CESSCASTP20001201199c10--1-gstype:gen,HomoDD)
20	de	de	ADP	sps00	_	22	case	22:case	_
21	sus	su	DET	dp3cp0	Number=Plur|Person=3|Poss=Yes|PronType=Prs	22	det	22:det	Entity=(NOCOREF:Gen--2-gstype:gen(CESSCASTP20001201199c9--1-CorefType:ident,gstype:gen)
22	cualidades	cualidad	NOUN	ncfp000	Gender=Fem|Number=Plur	16	obl:arg	16:obl:arg	ArgTem=arg2:tem
23	humanas	humano	ADJ	aq0fp0	Gender=Fem|Number=Plur	22	amod	22:amod	_
24	e	e	CCONJ	cc	_	25	cc	25:cc	_
25	intelectuales	intelectual	ADJ	aq0cp0	Number=Plur	23	conj	23:conj	SpaceAfter=No|Entity=NOCOREF:Gen)CESSCASTP20001201199c15)
26	.	.	PUNCT	fp	PunctType=Peri	10	punct	10:punct	_

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
5	:	:	PUNCT	fd	PunctType=Colo	7	punct	7:punct	_
6	Se	él	PRON	p0300000	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
7	tendrá	tener	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	0:root	ArgTem=arg2:atr|Cxn=Interrogative-Polar-Direct|CxnElt=7:Interrogative-Polar-Direct.Clause
8	Romario	Romario	PROPN	np0000p	_	7	nsubj	7:nsubj	ArgTem=arg0:agt|Entity=(NOCOREF:Spec.person-person-1-gstype:spec)
9	que	que	SCONJ	cs	_	10	mark	10:mark	_
10	ir	ir	VERB	vmn0000	VerbForm=Inf	7	xcomp	7:xcomp	_
11	a	a	ADP	sps00	_	12	case	12:case	_
12	Río	Río	PROPN	np0000l	_	10	obl	10:obl	SpaceAfter=No|ArgTem=arg4:des|Entity=(NOCOREF:Spec.location-place-1-gstype:spec)
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
14	mismo	mismo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Dem	13	det	13:det	_
15	proceso	proceso	NOUN	ncms000	Gender=Masc|Number=Sing	12	nsubj	12:nsubj	SpaceAfter=No|ArgTem=arg1:pat|Entity=CESSCASTP20001201104c11)
16	,	,	PUNCT	fc	PunctType=Comm	20	punct	20:punct	_
17	pero	pero	CCONJ	cc	_	20	cc	20:cc	_
18	en	en	ADP	sps00	_	20	case	20:case	_
19	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	20:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
20	interior	interior	NOUN	ncms000	Gender=Masc|Number=Sing	12	conj	12:conj	_
21	de	de	ADP	sps00	_	23	case	23:case	_
22	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	23	det	23:det	Entity=(NOCOREF:Gen--2-gstype:gen
23	ser	ser	NOUN	ncms000	Gender=Masc|Number=Sing	20	nmod	20:nmod	_
24	vivo	vivo	ADJ	aq0ms0	Gender=Masc|Number=Sing	23	amod	23:amod	SpaceAfter=No|Entity=NOCOREF:Gen)NOCOREF:Gen)
25	.	.	PUNCT	fp	PunctType=Peri	12	punct	12:punct	_

~~~


