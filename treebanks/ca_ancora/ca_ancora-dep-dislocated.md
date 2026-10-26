---
layout: base
title:  'Statistics of dislocated in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `dislocated`

This relation is universal.

24 nodes (0%) are attached to their parents as `dislocated`.

24 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.3333333333333.

The following 7 pairs of parts of speech are connected with `dislocated`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (13; 54% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (3; 13% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (3; 13% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (2; 8% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 dislocated	color:blue
1	Enhorabona	enhorabona	NOUN	ncfs000	Gender=Fem|Number=Sing	8	dislocated	8:dislocated	SpaceAfter=No|Entity=(NOCOREF:Gen--1-gstype:gen)
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	1:punct	Entity=(CESSCATAAP2002030117c1-person-2-CorefType:ident,gstype:spec
3	Xavier	Xavier	PROPN	np0000p	_	8	obj	8:obj	MWE=Xavier_Montsalvatge|MWEPOS=PROPN
4	Montsalvatge	Montsalvatge	PROPN	_	_	3	flat	3:flat	SpaceAfter=No|Entity=CESSCATAAP2002030117c1)
5	:	:	PUNCT	fd	PunctType=Colo	3	punct	3:punct	_
6	ho	ell	PRON	pp3nn000	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	8:expl	ArgTem=arg1:pat
7	has	haver	AUX	vaip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	aux	8:aux	_
8	aconseguit	aconseguir	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	fp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 29 dislocated	color:blue
1	Jo	jo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	ArgTem=arg0:agt|Entity=(CESSCATAAP2000111019202c1-person-1-CorefType:ident,gstype:spec)
2	crec	creure	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	que	que	SCONJ	cs	_	4	mark	4:mark	_
4	passa	passar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	ArgTem=arg1:pat
5	perquè	perquè	SCONJ	cs	_	9	mark	9:mark	_
6	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Entity=(CESSCATAAP2000111019202c50-person-2-CorefType:ident,gstype:spec
7	senyor	senyor	NOUN	ncms000	Gender=Masc|Number=Sing	9	nsubj	9:nsubj	ArgTem=arg1:tem
8	Guillaumet	Guillaumet	PROPN	np0000p	_	7	appos	7:appos	Entity=(NOCOREF:Spec.person-person-1-gstype:spec)CESSCATAAP2000111019202c50)
9	acabi	acabar	VERB	vmsp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	4:advcl	ArgTem=argM:cau
10	reconeixent	reconèixer	VERB	vmg0000	VerbForm=Ger	9	advcl	9:advcl	ArgTem=arg2:atr
11	que	que	SCONJ	cs	_	10	mark	10:mark	_
12	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
13	comès	cometre	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	xcomp	10:xcomp	ArgTem=arg1:pat
14	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	15	det	15:det	Entity=(NOCOREF:Gen--2-gstype:gen
15	error	error	NOUN	ncms000	Gender=Masc|Number=Sing	13	obj	13:obj	ArgTem=arg1:pat
16	polític	polític	ADJ	aq0ms0	Gender=Masc|Number=Sing	15	amod	15:amod	_
17	i	i	CCONJ	cc	_	18	cc	18:cc	_
18	personal	personal	ADJ	aq0cs0	Number=Sing	16	conj	16:conj	Entity=NOCOREF:Gen)
19	i	i	CCONJ	cc	_	24	cc	24:cc	_
20	que	que	SCONJ	cs	_	24	mark	24:mark	_
21	no	no	ADV	rn	Polarity=Neg	24	advmod	24:advmod	_
22	es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	24	expl:pass	24:expl:pass	_
23	pot	poder	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	aux	24:aux	_
24	portar	portar	VERB	vmn0000	VerbForm=Inf	13	conj	13:conj	_
25	fins	fins	ADP	sps00	_	28	case	28:case	_
26	a	a	ADP	spcms	_	28	case	28:case	_
27	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	28:det	_
28	límit	límit	NOUN	ncms000	Gender=Masc|Number=Sing	24	obl:arg	24:obl:arg	ArgTem=arg4:des|Entity=(CESSCATAAP2000111019202c58--1-gstype:gen,HomoDD
29	que	que	PRON	pr0cn000	PronType=Rel	32	dislocated	32:dislocated	ArgTem=arg4:des|Entity=(CESSCATAAP2000111019202c58--1-CorefType:ident,gstype:gen)
30	ho	ell	PRON	pp3nn000	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	32	obj	32:obj	ArgTem=arg1:pat
31	han	haver	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	32	aux	32:aux	_
32	portat	portar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	28	acl:relcl	28:acl:relcl	_
33	ells	ell	PRON	pp3mp000	Gender=Masc|Number=Plur|Person=3|PronType=Prs	32	nsubj	32:nsubj	SpaceAfter=No|ArgTem=arg0:agt|Entity=(CESSCATAAP2000111019202c45-organization-1-CorefType:ident,gstype:spec)CESSCATAAP2000111019202c58)
34	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 2 dislocated	color:blue
1	Una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	2	det	2:det	Entity=(CESSCATAAP1999030223c34-place-2-CorefType:ident,gstype:spec
2	Catalunya	Catalunya	PROPN	np0000l	_	17	dislocated	17:dislocated	_
3	on	on	PRON	pr000000	PronType=Rel	4	obl	4:obl	ArgTem=argM:loc|Entity=(CESSCATAAP1999030223c34-place-1-CorefType:ident,gstype:spec)
4	existeixi	existir	VERB	vmsp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
5	una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	6	det	6:det	Entity=(CESSCATAAP1999030223c38--2-gstype:gen
6	síntesi	síntesi	NOUN	ncfs000	Gender=Fem|Number=Sing	4	nsubj	4:nsubj	ArgTem=arg1:tem
7	creadora	creador	ADJ	aq0fs0	Gender=Fem|Number=Sing	6	amod	6:amod	_
8	de	de	ADP	sps00	_	11	case	11:case	_
9	les	el	DET	dp3fp0	Gender=Fem|Number=Plur|PronType=Art	11	det	11:det	MWE=les_seves|MWEPOS=DET|Entity=(CESSCATAAP1999030223c36--3-gstype:gen(CESSCATAAP1999030223c34-place-1-CorefType:ident,gstype:spec
10	seves	seu	DET	_	Gender=Fem|Number=Plur|Person=3|Poss=Yes|PronType=Prs	11	det	11:det	Entity=CESSCATAAP1999030223c34)
11	diversitats	diversitat	NOUN	ncfp000	Gender=Fem|Number=Plur	6	nmod	6:nmod	_
12	múltiples	múltiple	ADJ	aq0cp0	Number=Plur	11	amod	11:amod	SpaceAfter=No|Entity=CESSCATAAP1999030223c36)CESSCATAAP1999030223c38)CESSCATAAP1999030223c34)
13	,	,	PUNCT	fc	PunctType=Comm	2	punct	2:punct	_
14	perquè	perquè	SCONJ	cs	_	17	mark	17:mark	_
15	Catalunya	Catalunya	PROPN	np0000o	_	17	nsubj	17:nsubj	ArgTem=arg1:tem|Entity=(CESSCATAAP1999030223c35-organization-1-CorefType:ident,gstype:spec)
16	ja	ja	ADV	rg	_	17	advmod	17:advmod	ArgTem=argM:tmp
17	té	tenir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
18	molts	molt	DET	di0mp0	Gender=Masc|Number=Plur|PronType=Ind	19	det	19:det	Entity=(CESSCATAAP1999030223c36--2-CorefType:ident,gstype:gen
19	colors	color	NOUN	ncmp000	Gender=Masc|Number=Plur	17	obj	17:obj	SpaceAfter=No|ArgTem=arg2:atr|Entity=CESSCATAAP1999030223c36)
20	.	.	PUNCT	fp	PunctType=Peri	17	punct	17:punct	_

~~~


