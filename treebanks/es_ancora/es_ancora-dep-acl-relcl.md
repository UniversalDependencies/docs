---
layout: base
title:  'Statistics of acl:relcl in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-acl.html">acl</a></tt>.

54 nodes (0%) are attached to their parents as `acl:relcl`.

54 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92592592592593.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (20; 37% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (15; 28% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (8; 15% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-DET.html">DET</a></tt> (2; 4% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	9	punct	9:punct	SpaceAfter=No
2	Distancias	distancia	NOUN	ncfp000	Gender=Fem|Number=Plur	12	nsubj	12:nsubj	ArgTem=arg0:agt|Entity=(CESSCASTAA200005053286c13--1-gstype:gen
3	que	que	PRON	pr0cn000	PronType=Rel	4	nsubj	4:nsubj	ArgTem=arg1:tem|Entity=(CESSCASTAA200005053286c13--1-CorefType:ident,gstype:gen)
4	parecían	parecer	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
5	insalvables	insalvable	ADJ	aq0cp0	Number=Plur	4	xcomp	4:xcomp	ArgTem=arg2:atr|Entity=CESSCASTAA200005053286c13)
6	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	7:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
7	realidad	realidad	NOUN	ncfs000	Gender=Fem|Number=Sing	9	nsubj	9:nsubj	ArgTem=arg0:agt|Entity=NOCOREF:Gen)
8	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
9	demostrado	demostrar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
10	que	que	SCONJ	cs	_	12	mark	12:mark	_
11	no	no	ADV	rn	Polarity=Neg	12	advmod	12:advmod	_
12	lo	él	PRON	pp3cna00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	9	ccomp	9:ccomp	ArgTem=arg2:atr|Entity=(NOCOREF:Gen--1-gstype:gen)
13	eran	ser	AUX	vsii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	12	cop	12:cop	SpaceAfter=No|ArgTem=arg1:pat
14	"	"	PUNCT	fe	PunctType=Quot	12	punct	12:punct	_
15	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 23 acl:relcl	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	9	punct	9:punct	SpaceAfter=No
2	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	4:det	Entity=(CESSCASTA2000021511977c4-person-2-CorefType:ident,gstype:spec
3	señor	señor	NOUN	ncms000	Gender=Masc|Number=Sing	9	nsubj	9:nsubj	_
4	González	González	PROPN	np0000p	_	3	flat	3:flat	ArgTem=arg1:tem|Entity=CESSCASTA2000021511977c4)
5	-	-	PUNCT	fg	PunctType=Dash	6	punct	6:punct	_
6	añadió	añadir	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	parataxis	9:parataxis	_
7	-	-	PUNCT	fg	PunctType=Dash	6	punct	6:punct	_
8	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
9	consciente	consciente	ADJ	aq0cs0	Number=Sing	0	root	0:root	ArgTem=arg2:atr
10	de	de	ADP	sps00	_	12	mark	12:mark	_
11	que	que	SCONJ	cs	_	12	mark	12:mark	_
12	sabemos	saber	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	acl	9:acl	_
13	todos	todo	DET	di0mp0	Gender=Masc|Number=Plur|PronType=Tot	14	det	14:det	Entity=(CESSCASTA2000021511977c28--3-CorefType:ident,gstype:gen,HomoDD
14	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	15:det	_
15	detalles	detalle	NOUN	ncmp000	Gender=Masc|Number=Plur	12	obj	12:obj	SpaceAfter=No|ArgTem=arg1:pat
16	,	,	PUNCT	fc	PunctType=Comm	18	punct	18:punct	_
17	incluidos	incluido	ADJ	aq0mpp	Gender=Masc|Number=Plur|VerbForm=Part	18	amod	18:amod	_
18	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	appos	15:appos	Entity=(NOCOREF:Gen--6-gstype:gen
19	que	que	PRON	pr0cn000	PronType=Rel	23	obj	23:obj	ArgTem=arg0:agt
20	él	él	PRON	pp3ms000	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	ArgTem=arg0:agt|Entity=(CESSCASTA2000021511977c4-person-1-CorefType:ident,gstype:spec
21	mismo	mismo	ADJ	aq0ms0	Gender=Masc|Number=Sing	20	amod	20:amod	Entity=CESSCASTA2000021511977c4)
22	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux	23:aux	_
23	hablado	hablar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	18	acl:relcl	18:acl:relcl	ArgTem=arg1:pat
24	sobre	sobre	ADP	sps00	_	25	case	25:case	_
25	sí	él	PRON	pp3cno00	Case=Acc|Person=3|PrepCase=Pre|PronType=Prs|Reflex=Yes	23	obl	23:obl	Entity=(CESSCASTA2000021511977c4-person-1-CorefType:ident,gstype:spec
26	mismo	mismo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Dem	25	det	25:det	SpaceAfter=No|Entity=CESSCASTA2000021511977c4)NOCOREF:Gen)CESSCASTA2000021511977c28)
27	"	"	PUNCT	fe	PunctType=Quot	9	punct	9:punct	_
28	EFE	EFE	PROPN	np0000o	_	9	dep	9:dep	SpaceAfter=No|Entity=(NOCOREF:Spec.organization-organization-1-gstype:spec)
29	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


