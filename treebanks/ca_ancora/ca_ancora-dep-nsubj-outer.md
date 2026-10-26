---
layout: base
title:  'Statistics of nsubj:outer in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ca_ancora-dep-nsubj-pass.html">nsubj:pass</a></tt>.

11 nodes (0%) are attached to their parents as `nsubj:outer`.

11 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.5454545454545.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (6; 55% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-DET.html">DET</a></tt> (2; 18% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 nsubj:outer	color:blue
1	-	-	PUNCT	fg	PunctType=Dash	9	punct	9:punct	_
2	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
3	problema	problema	NOUN	ncms000	Gender=Masc|Number=Sing	9	nsubj:outer	9:nsubj:outer	ArgTem=arg1:tem|Entity=NOCOREF:Gen)
4	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
5	que	que	SCONJ	cs	_	9	mark	9:mark	_
6	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Entity=(CESSCATAAP2000020124_ac28-person-2-CorefType:ident,gstype:spec
7	Papa	Papa	PROPN	np0000p	_	9	nsubj	9:nsubj	ArgTem=arg0:agt|Entity=CESSCATAAP2000020124_ac28)
8	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
9	dit	dir	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
10	que	que	SCONJ	cs	_	17	mark	17:mark	_
11	ni	ni	CCONJ	cc	_	13	cc	13:cc	Entity=(CESSCATAAP2000020124_ac43--3
12	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	Entity=(CESSCATAAP2000020124_ac48--2-gstype:gen,HomoDD
13	cel	cel	NOUN	ncms000	Gender=Masc|Number=Sing	17	nsubj	17:nsubj	ArgTem=arg1:tem|Entity=CESSCATAAP2000020124_ac48)
14	ni	ni	CCONJ	cc	_	16	cc	16:cc	_
15	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	16	det	16:det	SpaceAfter=No|Entity=(CESSCATAAP2000020124_ac49--2-gstype:gen,HomoDD
16	infern	infern	NOUN	ncms000	Gender=Masc|Number=Sing	13	conj	13:conj	Entity=CESSCATAAP2000020124_ac49)CESSCATAAP2000020124_ac43)
17	són	ser	AUX	vsip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	9:ccomp	ArgTem=arg1:pat
18	com	com	SCONJ	cs	_	20	mark	20:mark	_
19	abans	abans	ADV	rg	_	20	advmod	20:advmod	ArgTem=argM:tmp
20	deien	dir	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	17	ccomp	17:ccomp	ArgTem=arg2:atr
21	vostès	tu	PRON	pp2cp00p	Number=Plur|Person=2|Polite=Form|PronType=Prs	20	nsubj	20:nsubj	ArgTem=arg0:agt|Entity=(CESSCATAAP2000020124_ac35--1-CorefType:ident,gstype:gen)
22	que	que	SCONJ	cs	_	23	mark	23:mark	_
23	eren	ser	AUX	vsii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	20	ccomp	20:ccomp	SpaceAfter=No|ArgTem=arg1:pat
24	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 nsubj:outer	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	nsubj:outer	15:nsubj:outer	_
2	que	que	PRON	pr0cn000	PronType=Rel	6	nsubj	6:nsubj	ArgTem=arg1:tem
3	sí	sí	NOUN	rg	ExtPos=ADV	6	advmod	6:advmod	MWE=sí_que|MWEPOS=ADV
4	que	que	SCONJ	_	_	3	fixed	3:fixed	_
5	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	ArgTem=arg1:tem
6	clar	clar	ADJ	aq0ms0	Gender=Masc|Number=Sing	1	acl:relcl	1:acl:relcl	SpaceAfter=No|ArgTem=arg2:atr
7	,	,	PUNCT	fc	PunctType=Comm	6	punct	6:punct	_
8	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	_
9	que	que	SCONJ	cs	_	15	mark	15:mark	_
10	el	el	DET	dp3ms0	Gender=Masc|Number=Sing|PronType=Art	12	det	12:det	MWE=el_seu|MWEPOS=DET|Entity=(CESSCATAAP2000111019202c71--3-CorefType:ident,gstype:gen(CESSCATAAP2000111019202c66-person-1-CorefType:ident,gstype:spec
11	seu	seu	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	12:det	Entity=CESSCATAAP2000111019202c66)
12	lideratge	lideratge	NOUN	ncms000	Gender=Masc|Number=Sing	15	nsubj	15:nsubj	ArgTem=arg0:agt|Entity=CESSCATAAP2000111019202c71)
13	ens	jo	PRON	pp1cp000	Case=Acc,Dat|Number=Plur|Person=1|PronType=Prs	15	obl:arg	15:obl:arg	ArgTem=arg2:ben|Entity=(CESSCATAAP2000111019202c5-organization-1-CorefType:ident,gstype:spec)
14	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	15:aux	_
15	portat	portar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
16	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	17	det	17:det	Entity=(NOCOREF:Gen--2-gstype:gen
17	ressò	ressò	NOUN	ncms000	Gender=Masc|Number=Sing	15	obj	15:obj	ArgTem=arg1:tem|Entity=NOCOREF:Gen)
18	més	més	ADV	rg	Degree=Cmp	19	advmod	19:advmod	_
19	enllà	enllà	ADV	rg	_	15	advmod	15:advmod	ArgTem=argM:loc
20	de	de	ADP	spcms	_	21	case	21:case	_
21	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	obl	19:obl	_
22	que	que	PRON	pr0cn000	PronType=Rel	24	nsubj	24:nsubj	ArgTem=arg1:tem|Entity=(NOCOREF:Gen--3-gstype:gen,HomoDD
23	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	24:cop	_
24	normal	normal	ADJ	aq0cs0	Number=Sing	21	acl:relcl	21:acl:relcl	ArgTem=arg2:atr|Entity=NOCOREF:Gen)
25	i	i	CCONJ	cc	_	32	cc	32:cc	SpaceAfter=No
26	,	,	PUNCT	fc	PunctType=Comm	27	punct	27:punct	_
27	per	per	ADP	rg	ExtPos=ADV	32	advmod	32:advmod	MWE=per_tant|MWEPOS=ADV
28	tant	tant	NOUN	_	_	27	fixed	27:fixed	SpaceAfter=No
29	,	,	PUNCT	fc	PunctType=Comm	27	punct	27:punct	_
30	no	no	ADV	rn	Polarity=Neg	32	advmod	32:advmod	_
31	podem	poder	AUX	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	32	aux	32:aux	_
32	valdre	valer	VERB	vmn0000	VerbForm=Inf	15	conj	15:conj	_
33	nos	jo	PRON	p010p000	Case=Acc,Dat|Number=Plur|Person=1|PronType=Prs	32	obj	32:obj	_
34	només	només	ADV	rg	_	32	obl:arg	32:obl:arg	_
35	d'	de	ADP	sps00	_	34	case	34:case	SpaceAfter=No
36	aquests	aquest	DET	dd0mp0	Gender=Masc|Number=Plur|PronType=Dem	37	det	37:det	Entity=(CESSCATAAP2000111019202c71--2-CorefType:ident,gstype:gen
37	lideratges	lideratge	NOUN	ncmp000	Gender=Masc|Number=Plur	34	nmod	34:nmod	ArgTem=arg2:atr|Entity=CESSCATAAP2000111019202c71)
38	de	de	ADP	spcms	ExtPos=ADP	42	case	42:case	MWE=de_cara_al|MWEPOS=ADP
39	cara	cara	NOUN	_	_	38	fixed	38:fixed	_
40	a	a	ADP	_	_	38	fixed	38:fixed	_
41	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	42	det	42:det	_
42	futur	futur	NOUN	ncms000	Gender=Masc|Number=Sing	32	obl	32:obl	SpaceAfter=No|Entity=(CESSCATAAP2000111019202c151--1-gstype:gen,HomoDD)
43	,	,	PUNCT	fc	PunctType=Comm	44	punct	44:punct	_
44	ni	ni	CCONJ	cc	ExtPos=ADV	32	advmod	32:advmod	MWE=ni_de_bon_tros|MWEPOS=CCONJ
45	de	de	ADP	_	_	44	fixed	44:fixed	_
46	bon	bon	NOUN	_	_	44	fixed	44:fixed	_
47	tros	tros	NOUN	_	_	44	fixed	44:fixed	SpaceAfter=No
48	.	.	PUNCT	fp	PunctType=Peri	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 2 nsubj:outer	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	Entity=(NOCOREF:Gen--2-gstype:gen
2	teoria	teoria	NOUN	ncfs000	Gender=Fem|Number=Sing	26	nsubj:outer	26:nsubj:outer	ArgTem=arg1:tem|Entity=NOCOREF:Gen)
3	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	cop	26:cop	_
4	que	que	SCONJ	cs	_	26	mark	26:mark	_
5	una	un	PRON	pi0fs000	Gender=Fem|Number=Sing|PronType=Ind	26	nsubj	26:nsubj	ArgTem=arg1:tem
6	de	de	ADP	sps00	_	8	case	8:case	_
7	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	8:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
8	causes	causa	NOUN	ncfp000	Gender=Fem|Number=Plur	5	nmod	5:nmod	_
9	de	de	ADP	sps00	_	11	case	11:case	_
10	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	Entity=(CESSCATAAP19990601100c5--2-CorefType:ident,gstype:gen,HomoDD
11	caiguda	caiguda	NOUN	ncfs000	Gender=Fem|Number=Sing	8	nmod	8:nmod	_
12	d'	de	ADP	sps00	_	15	case	15:case	SpaceAfter=No
13	un	un	PRON	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	15	nmod	15:nmod	Entity=(NOCOREF:Spec.number-number-2-gstype:spec
14	61	61	NUM	_	NumForm=Digit|NumType=Card	15	nummod	15:nummod	SpaceAfter=No
15	%	%	SYM	zp	_	11	nmod	11:nmod	_
16	de	de	ADP	spcmp	_	18	case	18:case	_
17	els	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	18	det	18:det	_
18	beneficis	benefici	NOUN	ncmp000	Gender=Masc|Number=Plur	15	nmod	15:nmod	Entity=(CESSCATAAP19990601100c12--1-CorefType:ident,gstype:gen
19	de	de	ADP	sps00	_	20	case	20:case	_
20	BA	BA	PROPN	np0000o	_	18	nmod	18:nmod	Entity=(CESSCATAAP19990601100c2-organization-1-CorefType:ident,gstype:spec)CESSCATAAP19990601100c12)NOCOREF:Spec.number)
21	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	22:det	Entity=(CESSCATAAP19990601100c11-time-2-CorefType:ident,gstype:spec
22	1998	1998	NOUN	_	_	11	appos	11:appos	Entity=CESSCATAAP19990601100c11)CESSCATAAP19990601100c5)NOCOREF:Gen)
23	han	haver	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	aux	26:aux	_
24	estat	ser	AUX	vsp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	26	cop	26:cop	ArgTem=arg2:atr
25	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	26	det	26:det	Entity=(CESSCATAAP19990601100c13--2-CorefType:ident,gstype:gen,HomoDD
26	pèrdues	pèrdua	NOUN	ncfp000	Gender=Fem|Number=Plur	0	root	0:root	ArgTem=arg2:atr
27	de	de	ADP	sps00	_	34	mark	34:mark	_
28	la	el	DET	dp3fs0	Gender=Fem|Number=Sing|PronType=Art	34	det	34:det	MWE=la_seva|MWEPOS=DET|Entity=(CESSCATAAP19990601100c1-organization-7-CorefType:ident,gstype:spec(CESSCATAAP19990601100c2-organization-1-CorefType:ident,gstype:spec
29	seva	seu	PRON	_	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	34	nmod	34:nmod	Entity=CESSCATAAP19990601100c2)
30	subsidiària	subsidiari	ADJ	aq0fs0	Gender=Fem|Number=Sing	34	amod	34:amod	_
31	barata	barat	ADJ	aq0fs0	Gender=Fem|Number=Sing	34	amod	34:amod	SpaceAfter=No
32	,	,	PUNCT	fc	PunctType=Comm	31	punct	31:punct	_
33	que	que	PRON	pr0cn000	PronType=Rel	34	nsubj	34:nsubj	ArgTem=arg0:agt|Entity=(CESSCATAAP19990601100c1-organization-1-CorefType:ident,gstype:spec)
34	competeix	competir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	acl:relcl	26:acl:relcl	_
35	directament	directament	ADV	rg	_	34	advmod	34:advmod	ArgTem=argM:adv
36	amb	amb	ADP	sps00	_	37	case	37:case	_
37	easyJet	easyjet	PROPN	np0000o	_	34	obl:arg	34:obl:arg	ArgTem=arg1:tem|Entity=(CESSCATAAP19990601100c3-organization-1-CorefType:ident,gstype:spec)
38	en	en	ADP	sps00	_	40	case	40:case	_
39	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	40	det	40:det	Entity=(CESSCATAAP19990601100c14--2-gstype:gen
40	segment	segment	NOUN	ncms000	Gender=Masc|Number=Sing	34	obl	34:obl	ArgTem=argM:adv
41	de	de	ADP	spcms	_	43	case	43:case	_
42	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	43	det	43:det	_
43	comerç	comerç	NOUN	ncms000	Gender=Masc|Number=Sing	40	nmod	40:nmod	Entity=(NOCOREF:Gen--1-gstype:gen,HomoDD
44	aeri	aeri	ADJ	aq0ms0	Gender=Masc|Number=Sing	43	amod	43:amod	Entity=NOCOREF:Gen)
45	que	que	PRON	pr0cn000	PronType=Rel	50	nsubj	50:nsubj	ArgTem=arg1:tem|Entity=(CESSCATAAP19990601100c14--1-CorefType:ident,gstype:gen)
46	fa	fer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	50	advcl	50:advcl	ArgTem=argM:tmp|Entity=(NOCOREF:Gen--1-gstype:gen
47	tres	tres	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	48	nummod	48:nummod	_
48	anys	any	NOUN	ncmp000	Gender=Masc|Number=Plur	46	obj	46:obj	Entity=NOCOREF:Gen)
49	ni	ni	ADV	rn	Polarity=Neg	50	advmod	50:advmod	_
50	existia	existir	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	40	acl:relcl	40:acl:relcl	SpaceAfter=No|Entity=CESSCATAAP19990601100c14)CESSCATAAP19990601100c1)CESSCATAAP19990601100c13)
51	.	.	PUNCT	fp	PunctType=Peri	26	punct	26:punct	_

~~~


