---
layout: base
title:  'Statistics of acl:relcl in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-acl.html">acl</a></tt>.

15 nodes (0%) are attached to their parents as `acl:relcl`.

15 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.73333333333333.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (7; 47% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (4; 27% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl:relcl	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	2	punct	2:punct	Entity=(CESSCASTP1999050116_ac2--3
2	Tenemos	tener	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	4:det	Entity=(NOCOREF:Gen--2-gstype:gen
4	plan	plan	NOUN	ncms000	Gender=Masc|Number=Sing	2	obj	2:obj	ArgTem=arg2:atr
5	claro	claro	ADJ	aq0ms0	Gender=Masc|Number=Sing	4	amod	4:amod	_
6	sobre	sobre	ADP	sps00	_	7	case	7:case	_
7	lo	él	PRON	da0ns0	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	nmod	4:nmod	Entity=(NOCOREF:Gen--4-gstype:gen,HomoDD
8	que	que	PRON	pr0cn000	PronType=Rel	11	obj	11:obj	ArgTem=arg1:pat
9	queremos	querer	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	acl:relcl	7:acl:relcl	_
10	que	que	SCONJ	cs	_	11	mark	11:mark	_
11	haga	hacer	VERB	vmsp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	9:ccomp	ArgTem=arg1:pat
12	Apple	Apple	PROPN	np00000	_	11	nsubj	11:nsubj	ArgTem=arg0:agt|Entity=(NOCOREF:Spec.organization-organization-1-gstype:spec)
13	para	para	ADP	sps00	_	14	mark	14:mark	_
14	socavar	socavar	VERB	vmn0000	VerbForm=Inf	11	advcl	11:advcl	ArgTem=argM:fin
15	a	a	ADP	sps00	_	16	case	16:case	_
16	Sun	Sun	PROPN	np00000	_	14	obj	14:obj	SpaceAfter=No|ArgTem=arg1:pat|Entity=(NOCOREF:Spec.organization-organization-1-gstype:spec)NOCOREF:Gen)NOCOREF:Gen)
17	"	"	PUNCT	fe	PunctType=Quot	2	punct	2:punct	SpaceAfter=No
18	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	Entity=CESSCASTP1999050116_ac2)

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	Esta	este	DET	dd0fs0	Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	Entity=(CESSCASTP2000120249c2--2-CorefType:ident,gstype:gen
2	cifra	cifra	NOUN	ncfs000	Gender=Fem|Number=Sing	4	nsubj	4:nsubj	ArgTem=arg1:pat|Entity=CESSCASTP2000120249c2)
3	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	expl:pass	4:expl:pass	_
4	añadirá	añadir	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	0:root	_
5	a	a	ADP	sps00	_	8	case	8:case	_
6	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	7:det	Entity=(CESSCASTP2000120249c1--3-gstype:gen,HomoDD
7	2.000	2000	NUM	_	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
8	millones	millón	NOUN	ncmp000	Gender=Masc|Number=Plur	4	obl:arg	4:obl:arg	ArgTem=arg2:ben
9	que	que	PRON	pr0cn000	PronType=Rel	12	obj	12:obj	ArgTem=arg1:pat|Entity=(CESSCASTP2000120249c1--1-CorefType:ident,gstype:gen)
10	tiene	tener	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	8:acl:relcl	_
11	previsto	previsto	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	10	xcomp	10:xcomp	ArgTem=argM:atr
12	ingresar	ingresar	VERB	vmn0000	VerbForm=Inf	11	xcomp	11:xcomp	ArgTem=arg2:atr
13	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	14:det	Entity=(CESSCASTP2000120249c3-organization-2-gstype:spec
14	Govern	Govern	PROPN	np00000	_	10	nsubj	10:nsubj	ArgTem=arg1:tem|Entity=CESSCASTP2000120249c3)
15	por	por	ADP	sps00	_	17	case	17:case	_
16	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	17:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
17	impuesto	impuesto	NOUN	ncms000	Gender=Masc|Number=Sing	12	obl	12:obl	ArgTem=argM:adv
18	de	de	ADP	sps00	_	20	case	20:case	_
19	grandes	grande	ADJ	aq0cp0	Number=Plur	20	amod	20:amod	Entity=(NOCOREF:Gen--2-gstype:gen
20	superficies	superficie	NOUN	ncfp000	Gender=Fem|Number=Plur	17	nmod	17:nmod	Entity=NOCOREF:Gen)NOCOREF:Gen)
21	y	y	CCONJ	cc	_	23	cc	23:cc	_
22	que	que	PRON	pr0cn000	PronType=Rel	23	obj	23:obj	ArgTem=arg1:pat|Entity=(CESSCASTP2000120249c1--1-CorefType:ident,gstype:gen)
23	destinará	destinar	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	conj	10:conj	_
24	a	a	ADP	spcms	_	27	case	27:case	_
25	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	27:det	_
26	mismo	mismo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Dem	27	det	27:det	Entity=(CESSCASTP2000120249c4--2-CorefType:dx.token
27	fin	fin	NOUN	ncms000	Gender=Masc|Number=Sing	23	obj	23:obj	SpaceAfter=No|ArgTem=arg2:tem|Entity=CESSCASTP2000120249c4)CESSCASTP2000120249c1)
28	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 acl:relcl	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTP2002080117c22--2-CorefType:ident,gstype:gen
2	artículo	artículo	NOUN	ncms000	Gender=Masc|Number=Sing	3	nsubj	3:nsubj	ArgTem=arg0:agt|Entity=CESSCASTP2002080117c22)
3	explicaba	explicar	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	0:root	SpaceAfter=No
4	:	:	PUNCT	fd	PunctType=Colo	10	punct	10:punct	_
5	"	"	PUNCT	fe	PunctType=Quot	10	punct	10:punct	SpaceAfter=No
6	Vientos	viento	NOUN	ncmp000	Gender=Masc|Number=Plur	10	nsubj	10:nsubj	ArgTem=arg1:tem|Entity=(NOCOREF:Gen--1-gstype:gen
7	de	de	ADP	sps00	_	8	case	8:case	_
8	revancha	revancha	NOUN	ncfs000	Gender=Fem|Number=Sing	6	nmod	6:nmod	Entity=NOCOREF:Gen)
9	son	ser	AUX	vsip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	ArgTem=arg1:pat
10	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	ccomp	3:ccomp	_
11	que	que	PRON	pr0cn000	PronType=Rel	13	obj	13:obj	ArgTem=arg1:pat
12	parecen	parecer	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	acl:relcl	10:acl:relcl	ArgTem=arg2:atr
13	traer	traer	VERB	vmn0000	VerbForm=Inf	12	xcomp	12:xcomp	ArgTem=arg2:atr
14	algunos	alguno	PRON	pi0mp000	Gender=Masc|Number=Plur|PronType=Ind	12	nsubj	12:nsubj	ArgTem=arg1:tem|Entity=(NOCOREF:Gen--1-gstype:gen
15	de	de	ADP	sps00	_	17	case	17:case	_
16	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	17	det	17:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
17	ayuntamientos	ayuntamiento	NOUN	ncmp000	Gender=Masc|Number=Plur	14	nmod	14:nmod	_
18	recientemente	recientemente	ADV	rg	_	19	advmod	19:advmod	ArgTem=argM:tmp
19	constituidos	constituido	ADJ	aq0mpp	Gender=Masc|Number=Plur|VerbForm=Part	17	amod	17:amod	SpaceAfter=No|Entity=NOCOREF:Gen)NOCOREF:Gen)
20	"	"	PUNCT	fe	PunctType=Quot	10	punct	10:punct	_
21	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


