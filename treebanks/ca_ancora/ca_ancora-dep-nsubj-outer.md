---
layout: base
title:  'Statistics of nsubj:outer in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ca_ancora-dep-nsubj-pass.html">nsubj:pass</a></tt>.

12 nodes (0%) are attached to their parents as `nsubj:outer`.

12 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.25.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (6; 50% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-DET.html">DET</a></tt> (2; 17% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (2; 17% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 8% instances).


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
3	sí	sí	NOUN	rg	_	6	advmod	6:advmod	MWE=sí_que|MWEPOS=ADV
4	que	que	SCONJ	_	_	3	fixed	3:fixed	_
5	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	ArgTem=arg1:tem
6	clar	clar	ADJ	aq0ms0	Gender=Masc|Number=Sing	1	acl:relcl	1:acl:relcl	SpaceAfter=No|ArgTem=arg2:atr
7	,	,	PUNCT	fc	PunctType=Comm	6	punct	6:punct	_
8	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	_
9	que	que	SCONJ	cs	_	15	mark	15:mark	_
10	el	el	DET	dp3ms0	Gender=Masc|Number=Sing|PronType=Art	12	det	12:det	MWE=el_seu|MWEPOS=DET|Entity=(CESSCATAAP2000111019202c71--3-CorefType:ident,gstype:gen(CESSCATAAP2000111019202c66-person-1-CorefType:ident,gstype:spec
11	seu	seu	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	12:det	Entity=CESSCATAAP2000111019202c66)
12	lideratge	lideratge	NOUN	ncms000	Gender=Masc|Number=Sing	15	nsubj	15:nsubj	ArgTem=arg0:agt|Entity=CESSCATAAP2000111019202c71)
13	ens	jo	PRON	pp1cp000	Case=Acc,Dat|Number=Plur|Person=1|PronType=Prs	15	obj	15:obj	ArgTem=arg2:ben|Entity=(CESSCATAAP2000111019202c5-organization-1-CorefType:ident,gstype:spec)
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
27	per	per	ADP	rg	_	32	advmod	32:advmod	MWE=per_tant|MWEPOS=ADV
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
38	de	de	ADP	spcms	_	42	case	42:case	MWE=de_cara_al|MWEPOS=ADP
39	cara	cara	NOUN	_	_	38	fixed	38:fixed	_
40	a	a	ADP	_	_	38	fixed	38:fixed	_
41	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	42	det	42:det	_
42	futur	futur	NOUN	ncms000	Gender=Masc|Number=Sing	32	obl	32:obl	SpaceAfter=No|Entity=(CESSCATAAP2000111019202c151--1-gstype:gen,HomoDD)
43	,	,	PUNCT	fc	PunctType=Comm	44	punct	44:punct	_
44	ni	ni	CCONJ	cc	_	32	advmod	32:advmod	MWE=ni_de_bon_tros|MWEPOS=CCONJ
45	de	de	ADP	_	_	44	fixed	44:fixed	_
46	bon	bon	NOUN	_	_	44	fixed	44:fixed	_
47	tros	tros	NOUN	_	_	44	fixed	44:fixed	SpaceAfter=No
48	.	.	PUNCT	fp	PunctType=Peri	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 nsubj:outer	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCATAAP2000120193c5--2-CorefType:ident
2	decisió	decisió	NOUN	ncfs000	Gender=Fem|Number=Sing	30	nsubj	30:nsubj	SpaceAfter=No|ArgTem=arg1:tem
3	,	,	PUNCT	fc	PunctType=Comm	11	punct	11:punct	_
4	que	que	PRON	pr0cn000	PronType=Rel	11	nsubj:outer	11:nsubj:outer	ArgTem=arg0:agt|Entity=(CESSCATAAP2000120193c5--1-CorefType:ident)|ToDo=Should it be SCONJ?
5	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	nsubj:outer	11:nsubj:outer	Entity=(NOCOREF:Gen--3-gstype:gen,HomoDD
6	que	que	PRON	pr0cn000	PronType=Rel	7	obj	7:obj	ArgTem=arg1:pat
7	persegueix	perseguir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	5:acl:relcl	ArgTem=arg1:tem|Entity=NOCOREF:Gen)
8	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	11:cop	_
9	que	que	SCONJ	cs	_	11	mark	11:mark	_
10	es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	11	obj	11:obj	_
11	produeixi	produir	VERB	vmsp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	2:acl	ArgTem=arg2:atr
12	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	13	det	13:det	Entity=(NOCOREF:Gen--2-gstype:gen
13	augment	augment	NOUN	ncms000	Gender=Masc|Number=Sing	11	nsubj	11:nsubj	ArgTem=arg1:pat
14	de	de	ADP	spcms	_	16	case	16:case	_
15	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	16:det	_
16	nombre	nombre	NOUN	ncms000	Gender=Masc|Number=Sing	13	nmod	13:nmod	Entity=(NOCOREF:Gen--1-gstype:gen,HomoDD
17	de	de	ADP	sps00	_	18	case	18:case	_
18	titulats	titulat	NOUN	ncmp000	Gender=Masc|Number=Plur	16	nmod	16:nmod	_
19	universitaris	universitari	ADJ	aq0mp0	Gender=Masc|Number=Plur	18	amod	18:amod	_
20	en	en	ADP	sps00	_	22	case	22:case	_
21	aquestes	aquest	DET	dd0fp0	Gender=Fem|Number=Plur|PronType=Dem	22	det	22:det	Entity=(CESSCATAAP2000120193c3--2-CorefType:ident,gstype:gen
22	especialitats	especialitat	NOUN	ncfp000	Gender=Fem|Number=Plur	18	nmod	18:nmod	Entity=CESSCATAAP2000120193c3)NOCOREF:Gen)NOCOREF:Gen)
23	a	a	ADP	sps00	_	27	case	27:case	MWE=a_partir_de|MWEPOS=ADP
24	partir	partir	NOUN	_	_	23	fixed	23:fixed	_
25	de	de	ADP	_	_	23	fixed	23:fixed	_
26	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	27	det	27:det	SpaceAfter=No|Entity=(NOCOREF:Spec.date-time-2-gstype:spec
27	any	any	NOUN	_	_	11	obl	11:obl	MWE=any_2004|MWEPOS=NOUN|ArgTem=argM:tmp
28	2004	2004	NUM	_	NumForm=Digit|NumType=Card	27	compound	27:compound	SpaceAfter=No|Entity=NOCOREF:Spec.date)
29	,	,	PUNCT	fc	PunctType=Comm	11	punct	11:punct	Entity=CESSCATAAP2000120193c5)
30	vindrà	venir	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	0:root	_
31	acompanyada	acompanyat	ADJ	aq0fsp	Gender=Fem|Number=Sing|VerbForm=Part	30	obj	30:obj	ArgTem=arg2:atr
32	de	de	ADP	sps00	_	34	case	34:case	_
33	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	34:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
34	creació	creació	NOUN	ncfs000	Gender=Fem|Number=Sing	31	obl:arg	31:obl:arg	ArgTem=arg0:agt
35	de	de	ADP	sps00	_	36	case	36:case	_
36	cursos	curs	NOUN	ncmp000	Gender=Masc|Number=Plur	34	nmod	34:nmod	Entity=(CESSCATAAP2000120193c13--1-gstype:gen
37	de	de	ADP	sps00	_	38	case	38:case	_
38	postgrau	postgrau	NOUN	ncms000	Gender=Masc|Number=Sing	36	nmod	36:nmod	_
39	relacionats	relacionat	ADJ	aq0mpp	Gender=Masc|Number=Plur|VerbForm=Part	36	amod	36:amod	_
40	amb	amb	ADP	sps00	_	42	case	42:case	_
41	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	42	det	42:det	Entity=(CESSCATAAP2000120193c1-other-2-CorefType:ident,gstype:spec
42	TIC	TIC	PROPN	np0000a	_	39	obl:arg	39:obl:arg	ArgTem=arg2:cot|Entity=CESSCATAAP2000120193c1)
43	"	"	PUNCT	fe	PunctType=Quot	44	punct	44:punct	SpaceAfter=No
44	exigents	exigent	ADJ	aq0cp0	Number=Plur	36	amod	36:amod	_
45	i	i	CCONJ	cc	_	46	cc	46:cc	_
46	rigorosos	rigorós	ADJ	aq0mp0	Gender=Masc|Number=Plur	44	conj	44:conj	SpaceAfter=No
47	"	"	PUNCT	fe	PunctType=Quot	44	punct	44:punct	SpaceAfter=No|Entity=CESSCATAAP2000120193c13)NOCOREF:Gen)
48	,	,	PUNCT	fc	PunctType=Comm	50	punct	50:punct	_
49	segons	segons	ADP	sps00	_	50	case	50:case	_
50	Mas-Colell	Mas-Colell	PROPN	np0000p	_	30	obl	30:obl	SpaceAfter=No|Entity=(CESSCATAAP2000120193c2-person-1-CorefType:ident,gstype:spec)
51	.	.	PUNCT	fp	PunctType=Peri	30	punct	30:punct	_

~~~


