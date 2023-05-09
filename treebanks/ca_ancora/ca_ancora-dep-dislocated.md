---
layout: base
title:  'Statistics of dislocated in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `dislocated`

This relation is universal.

2 nodes (0%) are attached to their parents as `dislocated`.

2 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 20.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (1; 50% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 46 23 dislocated	color:blue
1	En	en	ADP	sps00	_	3	case	3:case	_
2	una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	3	det	3:det	Entity=(NOCOREF:Gen--2-gstype:gen
3	videoconferència	videoconferència	NOUN	ncfs000	Gender=Fem|Number=Sing	14	obl	14:obl	ArgTem=argM:loc
4	amb	amb	ADP	sps00	_	5	case	5:case	_
5	Nova	Nova	PROPN	np0000l	_	3	nmod	3:nmod	MWE=Nova_York|MWEPOS=PROPN|Entity=(NOCOREF:Spec.location-place-1-gstype:spec
6	York	York	PROPN	_	_	5	flat	5:flat	SpaceAfter=No|Entity=NOCOREF:Spec.location)NOCOREF:Gen)
7	,	,	PUNCT	fc	PunctType=Comm	3	punct	3:punct	_
8	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	Entity=(CESSCATAAP2002020222c22-person-2-gstype:spec
9	multimilionari	multimilionari	NOUN	ncms000	Gender=Masc|Number=Sing	14	nsubj	14:nsubj	ArgTem=arg1:tem
10	George	George	PROPN	np0000p	_	9	appos	9:appos	MWE=George_Soros|MWEPOS=PROPN|Entity=(NOCOREF:Spec.person-person-1-gstype:spec
11	Soros	Soros	PROPN	_	_	10	flat	10:flat	Entity=NOCOREF:Spec.person)CESSCATAAP2002020222c22)
12	la	ell	PRON	pp3fsa00	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	obj	14:obj	ArgTem=arg2:atr
13	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	14:aux	_
14	passar	passar	VERB	vmn0000	VerbForm=Inf	0	root	0:root	_
15	magra	magre	ADJ	aq0fs0	Gender=Fem|Number=Sing	14	xcomp	14:xcomp	ArgTem=argL:
16	quan	quan	SCONJ	cs	_	46	mark	46:mark	SpaceAfter=No
17	,	,	PUNCT	fc	PunctType=Comm	20	punct	20:punct	_
18	des	des	ADP	sps00	_	20	case	20:case	_
19	de	de	ADP	sps00	_	20	case	20:case	_
20	Porto	Porto	PROPN	np0000l	_	23	nmod	23:nmod	MWE=Porto_Alegre|MWEPOS=PROPN|ArgTem=argM:loc|Entity=(CESSCATAAP2002020222c20-place-1-CorefType:ident,gstype:spec
21	Alegre	Alegre	PROPN	_	_	20	flat	20:flat	SpaceAfter=No|Entity=CESSCATAAP2002020222c20)
22	,	,	PUNCT	fc	PunctType=Comm	20	punct	20:punct	_
23	Hebe	Hebe	PROPN	np0000p	_	46	dislocated	46:dislocated	MWE=Hebe_de_Bonafini|MWEPOS=PROPN|ArgTem=arg1:tem|Entity=(CESSCATAAP2002020222c21-person-1-gstype:spec
24	de	de	ADP	_	_	25	case	25:case	_
25	Bonafini	Bonafini	PROPN	_	_	23	flat	23:flat	SpaceAfter=No
26	,	,	PUNCT	fc	PunctType=Comm	27	punct	27:punct	Entity=(CESSCATAAP2002020222c21-person-2-CorefType:pred.definit,gstype:spec
27	presidenta	presidenta	NOUN	ncfs000	Gender=Fem|Number=Sing	23	appos	23:appos	_
28	de	de	ADP	sps00	_	30	case	30:case	_
29	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	30	det	30:det	Entity=(NOCOREF:Spec.organization-organization-2-gstype:spec
30	Madres	Madres	PROPN	np0000o	_	27	nmod	27:nmod	MWE=Madres_de_la_Plaza_de_Mayo|MWEPOS=PROPN
31	de	de	ADP	_	_	33	case	33:case	_
32	la	la	DET	_	Gender=Fem|Number=Sing|PronType=Art	33	det	33:det	_
33	Plaza	Plaza	PROPN	_	_	30	flat	30:flat	_
34	de	de	ADP	_	_	35	case	35:case	_
35	Mayo	Mayo	PROPN	_	_	30	flat	30:flat	SpaceAfter=No|Entity=NOCOREF:Spec.organization)
36	,	,	PUNCT	fc	PunctType=Comm	27	punct	27:punct	Entity=CESSCATAAP2002020222c21)CESSCATAAP2002020222c21)
37	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	46	nsubj	46:nsubj	Entity=(NOCOREF:Gen--7-gstype:gen,HomoDD
38	més	més	ADV	rg	Degree=Cmp	39	advmod	39:advmod	_
39	suau	suau	ADJ	aq0cs0	Number=Sing	37	amod	37:amod	ArgTem=arg1:tem
40	que	que	PRON	pr0cn000	PronType=Rel	43	obj	43:obj	ArgTem=arg1:pat
41	li	ell	PRON	pp3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	43	obl:arg	43:obl:arg	ArgTem=arg3:ben|Entity=(CESSCATAAP2002020222c22-person-1-CorefType:ident,gstype:spec)
42	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	43	aux	43:aux	_
43	dir	dir	VERB	vmn0000	VerbForm=Inf	37	acl:relcl	37:acl:relcl	Entity=NOCOREF:Gen)
44	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	46	aux	46:aux	_
45	ser	ser	AUX	vsn0000	VerbForm=Inf	46	cop	46:cop	ArgTem=argM:tmp
46	hipòcrita	hipòcrita	NOUN	nc00000	_	14	advcl	14:advcl	SpaceAfter=No|ArgTem=arg2:atr
47	.	.	PUNCT	fp	PunctType=Peri	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 13 dislocated	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	Entity=(NOCOREF:Spec.person-person-2-gstype:spec
2	president	president	NOUN	ncms000	Gender=Masc|Number=Sing	6	nsubj	6:nsubj	ArgTem=arg0:agt
3	de	de	ADP	spcms	_	5	case	5:case	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	PPC	PPC	PROPN	np0000o	_	2	nmod	2:nmod	Entity=(NOCOREF:Spec.organization-organization-1-gstype:spec)NOCOREF:Spec.person)
6	avisa	avisar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	8:det	_
8	socialistes	socialista	NOUN	nccp000	Number=Plur	6	obj	6:obj	ArgTem=arg1:pat
9	catalans	català	ADJ	aq0mp0	Gender=Masc|Number=Plur	8	amod	8:amod	_
10	que	que	SCONJ	cs	_	32	mark	32:mark	_
11	la	el	DET	dp3fs0	Gender=Fem|Number=Sing|PronType=Art	13	det	13:det	MWE=la_seva|MWEPOS=DET
12	seva	seu	DET	_	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	det	13:det	_
13	estratègia	estratègia	NOUN	ncfs000	Gender=Fem|Number=Sing	30	dislocated	30:dislocated	ArgTem=arg0:agt
14	de	de	ADP	sps00	_	19	mark	19:mark	_
15	'	'	PUNCT	fz	PunctType=Quot	19	punct	19:punct	SpaceAfter=No
16	fomentar	fomentar	VERB	vmn0000	VerbForm=Inf	19	xcomp	19:xcomp	_
17	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	18:det	_
18	radicalitat	radicalitat	NOUN	ncfs000	Gender=Fem|Number=Sing	19	obj	19:obj	ArgTem=arg1:pat
19	intentant	intentar	VERB	vmg0000	VerbForm=Ger	13	acl	13:acl	ArgTem=argM:adv
20	pactar	pactar	VERB	vmn0000	VerbForm=Inf	16	xcomp	16:xcomp	ArgTem=arg1:pat
21	amb	amb	ADP	sps00	_	23	case	23:case	_
22	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	23:det	_
23	independentistes	independentista	NOUN	nccp000	Number=Plur	20	obl:arg	20:obl:arg	ArgTem=arg2:cot
24	d'	de	ADP	sps00	_	25	case	25:case	SpaceAfter=No
25	ERC	ERC	PROPN	np0000o	_	23	nmod	23:nmod	SpaceAfter=No|Entity=(NOCOREF:Spec.organization-organization-1-gstype:spec)
26	'	'	PUNCT	fz	PunctType=Quot	19	punct	19:punct	_
27	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	32	nsubj	32:nsubj	SpaceAfter=No
28	únic	únic	ADJ	aq0ms0	Gender=Masc|Number=Sing	27	amod	27:amod	ArgTem=arg1:tem
29	que	que	PRON	pr0cn000	PronType=Rel	30	obj	30:obj	ArgTem=arg1:pat
30	fa	fer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	acl:relcl	27:acl:relcl	_
31	és	ser	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	32:cop	ArgTem=arg2:tem
32	afavorir	afavorir	VERB	vmn0000	VerbForm=Inf	6	ccomp	6:ccomp	ArgTem=arg2:atr
33	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	34	det	34:det	_
34	forces	força	NOUN	ncfp000	Gender=Fem|Number=Plur	32	obj	32:obj	ArgTem=arg1:pat
35	catalanes	català	ADJ	aq0fp0	Gender=Fem|Number=Plur	34	amod	34:amod	_
36	més	més	ADV	rg	Degree=Cmp	34	advmod	34:advmod	_
37	d'	de	ADP	sps00	_	36	case	36:case	SpaceAfter=No
38	esquerra	esquerra	NOUN	ncfs000	Gender=Fem|Number=Sing	36	nmod	36:nmod	SpaceAfter=No
39	,	,	PUNCT	fc	PunctType=Comm	40	punct	40:punct	_
40	referint	referir	VERB	vmg0000	VerbForm=Ger	32	xcomp	32:xcomp	ArgTem=argM:adv
41	se	ell	PRON	p0300000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	40	obj	40:obj	_
42	a	a	ADP	sps00	_	43	case	43:case	_
43	republicans	republicà	NOUN	ncmp000	Gender=Masc|Number=Plur	40	obl:arg	40:obl:arg	ArgTem=arg2:atr
44	i	i	CCONJ	cc	_	45	cc	45:cc	_
45	ecosocialistes	ecosocialista	NOUN	nccp000	Number=Plur	43	conj	43:conj	SpaceAfter=No
46	;	;	PUNCT	fx	PunctType=Semi	49	punct	49:punct	_
47	i	i	CCONJ	cc	_	49	cc	49:cc	_
48	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	49	det	49:det	Entity=(NOCOREF:Spec.organization-organization-2-gstype:spec
49	PPC	PPC	PROPN	np0000o	_	40	conj	40:conj	SpaceAfter=No|Entity=NOCOREF:Spec.organization)
50	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


