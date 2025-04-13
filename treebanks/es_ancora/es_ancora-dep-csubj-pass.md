---
layout: base
title:  'Statistics of csubj:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 38 csubj:pass	color:blue
1	Un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTP2002040196c12--2-gstype:gen
2	equipo	equipo	NOUN	ncms000	Gender=Masc|Number=Sing	10	nsubj	10:nsubj	ArgTem=arg0:agt
3	de	de	ADP	spcms	_	5	case	5:case	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	programa	programa	NOUN	ncms000	Gender=Masc|Number=Sing	2	nmod	2:nmod	Entity=(CESSCASTP2002040196c13-other-1-gstype:spec
6	Entre	Entre	ADP	np00000	_	7	case	7:case	MWE=Entre_línies|MWEPOS=PROPN|Entity=(NOCOREF:Spec.other-other-2-gstype:spec
7	línies	línies	PROPN	_	_	5	appos	5:appos	Entity=NOCOREF:Spec.other)CESSCASTP2002040196c13)CESSCASTP2002040196c12)
8	se	él	PRON	p0300000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
9	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
10	desplazado	desplazar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
11	a	a	ADP	sps00	_	13	case	13:case	_
12	esta	este	DET	dd0fs0	Gender=Fem|Number=Sing|PronType=Dem	13	det	13:det	Entity=(CESSCASTP2002040196c2-place-2-CorefType:ident,gstype:spec
13	localidad	localidad	NOUN	ncfs000	Gender=Fem|Number=Sing	10	obl	10:obl	ArgTem=arg4:des
14	de	de	ADP	spcms	_	16	case	16:case	_
15	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	16:det	_
16	Bages	Bages	PROPN	np00000	_	13	nmod	13:nmod	Entity=(NOCOREF:Spec.location-place-1-gstype:spec)CESSCASTP2002040196c2)
17	para	para	ADP	sps00	_	18	mark	18:mark	_
18	hablar	hablar	VERB	vmn0000	VerbForm=Inf	10	advcl	10:advcl	ArgTem=argM:fin
19	con	con	ADP	sps00	_	21	case	21:case	_
20	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	21	det	21:det	Entity=(CESSCASTP2002040196c3--2-gstype:gen,HomoDD
21	personas	persona	NOUN	ncfp000	Gender=Fem|Number=Plur	18	obl	18:obl	ArgTem=argM:adv
22	que	que	PRON	pr0cn000	PronType=Rel	23	nsubj	23:nsubj	ArgTem=arg1:tem|Entity=(CESSCASTP2002040196c3--1-CorefType:ident,gstype:gen)
23	conviven	convivir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	21	acl	21:acl	_
24	con	con	ADP	sps00	_	26	case	26:case	_
25	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	26	det	26:det	Entity=(CESSCASTP2002040196c4--2-gstype:gen
26	problema	problema	NOUN	ncms000	Gender=Masc|Number=Sing	23	obl	23:obl	SpaceAfter=No|ArgTem=argM:adv
27	,	,	PUNCT	fc	PunctType=Comm	28	punct	28:punct	_
28	que	que	PRON	pr0cn000	PronType=Rel	38	nsubj	38:nsubj	SpaceAfter=No|ArgTem=arg1:pat|Entity=(CESSCASTP2002040196c4--1-CorefType:ident,gstype:gen)
29	,	,	PUNCT	fc	PunctType=Comm	32	punct	32:punct	_
30	por	por	ADP	sps00	_	32	case	32:case	_
31	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	32:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
32	momento	momento	NOUN	ncms000	Gender=Masc|Number=Sing	36	obl	36:obl	SpaceAfter=No|ArgTem=argM:tmp|Entity=NOCOREF:Gen)
33	,	,	PUNCT	fc	PunctType=Comm	32	punct	32:punct	_
34	no	no	ADV	rn	Polarity=Neg	36	advmod	36:advmod	_
35	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	36	expl:pass	36:expl:pass	_
36	sabe	saber	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	acl:relcl	26:acl:relcl	_
37	cuándo	cuándo	ADV	pt000000	PronType=Int	38	advmod	38:advmod	ArgTem=argM:tmp|CxnElt=38:Interrogative-WHInfo-Indirect.WHWord
38	acabará	acabar	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	36	csubj:pass	36:csubj:pass	SpaceAfter=No|ArgTem=arg1:pat|Entity=CESSCASTP2002040196c4)CESSCASTP2002040196c3)|Cxn=Interrogative-WHInfo-Indirect|CxnElt=38:Interrogative-WHInfo-Indirect.Clause
39	.	.	PUNCT	fp	PunctType=Peri	10	punct	10:punct	_

~~~


