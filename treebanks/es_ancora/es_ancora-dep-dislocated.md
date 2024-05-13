---
layout: base
title:  'Statistics of dislocated in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `dislocated`

This relation is universal.

3 nodes (0%) are attached to their parents as `dislocated`.

3 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.33333333333333.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 dislocated	color:blue
1	Nuevo	nuevo	ADJ	aq0ms0	Gender=Masc|Number=Sing	2	amod	2:amod	_
2	estado	estado	NOUN	ncms000	Gender=Masc|Number=Sing	5	dislocated	5:dislocated	_
3	se	él	PRON	p0000000	Case=Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	obl:arg	5:obl:arg	_
4	las	él	PRON	pp3fpa00	Case=Acc|Gender=Fem|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	5	obj	5:obj	ArgTem=arg1:pat
5	veía	ver	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	0:root	_
6	surgir	surgir	VERB	vmn0000	VerbForm=Inf	5	xcomp	5:xcomp	ArgTem=arg1:pat
7	de	de	ADP	sps00	_	9	case	9:case	_
8	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	9:det	_
9	cenizas	ceniza	NOUN	ncfp000	Gender=Fem|Number=Plur	6	obl	6:obl	ArgTem=arg3:ori
10	con	con	ADP	sps00	_	12	case	12:case	_
11	una	uno	DET	di0fs0	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	_
12	vitalidad	vitalidad	NOUN	ncfs000	Gender=Fem|Number=Sing	6	obl	6:obl	ArgTem=argM:mnr
13	reverdecida	reverdecido	ADJ	aq0fsp	Gender=Fem|Number=Sing|VerbForm=Part	12	amod	12:amod	SpaceAfter=No
14	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 14 dislocated	color:blue
1	Los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	2:det	_
2	fusiles	fusil	NOUN	ncmp000	Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No|ArgTem=arg1:pat
3	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
4	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	5:det	_
5	ametralladoras	ametralladora	NOUN	ncfp000	Gender=Fem|Number=Plur	2	appos	2:appos	SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	7	punct	7:punct	_
7	granadas	granada	NOUN	ncfp000	Gender=Fem|Number=Plur	2	appos	2:appos	_
8	y	y	CCONJ	cc	_	10	cc	10:cc	_
9	buena	buen	ADJ	aq0fs0	Gender=Fem|Number=Sing	10	amod	10:amod	_
10	parte	parte	NOUN	ncfs000	Gender=Fem|Number=Sing	2	conj	2:conj	_
11	de	de	ADP	sps00	_	13	case	13:case	_
12	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	13:det	_
13	artefactos	artefacto	NOUN	ncmp000	Gender=Masc|Number=Plur	10	nmod	10:nmod	_
14	que	que	PRON	pr0cn000	PronType=Rel	23	dislocated	23:dislocated	ArgTem=arg1:pat
15	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	16:det	_
16	guerrilleros	guerrillero	NOUN	ncmp000	Gender=Masc|Number=Plur	23	dislocated	23:dislocated	ArgTem=arg0:agt
17	de	de	ADP	spcms	_	19	case	19:case	_
18	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	19:det	_
19	CRS	CRS	PROPN	np0000o	_	16	nmod	16:nmod	Entity=(NOCOREF:Spec.organization-organization-1-gstype:spec)
20	que	que	PRON	pr0cn000	PronType=Rel	23	nsubj:pass	23:nsubj:pass	_
21	se	él	PRON	pp3cn000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	20	expl:pass	20:expl:pass	_
22	han	haber	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	23	aux	23:aux	_
23	usado	usar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	acl:relcl	13:acl:relcl	_
24	para	para	ADP	sps00	_	25	mark	25:mark	_
25	luchar	luchar	VERB	vmn0000	VerbForm=Inf	23	advcl	23:advcl	ArgTem=argM:fin
26	contra	contra	ADP	sps00	_	28	case	28:case	_
27	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	28:det	Entity=(NOCOREF:Spec.organization-organization-2-gstype:spec
28	Ejército	Ejército	PROPN	np0000o	_	25	obl:arg	25:obl:arg	ArgTem=arg1:tem
29	colombiano	colombiano	ADJ	aq0ms0	Gender=Masc|Number=Sing	28	amod	28:amod	Entity=NOCOREF:Spec.organization)
30	que	que	PRON	pr0cn000	PronType=Rel	32	nsubj	32:nsubj	ArgTem=arg1:pat
31	serán	ser	AUX	vsif3p0	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	32	aux	32:aux	_
32	convertidas	convertir	VERB	vmp00pf	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	2	acl:relcl	2:acl:relcl	_
33	en	en	ADP	sps00	_	34	case	34:case	_
34	campanas	campana	NOUN	ncfp000	Gender=Fem|Number=Plur	32	obl:arg	32:obl:arg	ArgTem=arg2:efi
35	para	para	ADP	sps00	_	37	case	37:case	_
36	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	37	det	37:det	_
37	parroquias	parroquia	NOUN	ncfp000	Gender=Fem|Number=Plur	34	nmod	34:nmod	_
38	de	de	ADP	spcms	_	40	case	40:case	_
39	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	40	det	40:det	_
40	municipio	municipio	NOUN	ncms000	Gender=Masc|Number=Sing	37	nmod	37:nmod	Entity=(NOCOREF:Spec.location-place-1-gstype:spec
41	Sucre	Sucre	PROPN	np0000l	_	40	appos	40:appos	SpaceAfter=No|Entity=(NOCOREF:Spec.location-place-1-gstype:spec)NOCOREF:Spec.location)
42	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


