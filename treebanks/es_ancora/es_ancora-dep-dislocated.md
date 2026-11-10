---
layout: base
title:  'Statistics of dislocated in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `dislocated`

This relation is universal.

103 nodes (0%) are attached to their parents as `dislocated`.

101 instances of `dislocated` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.49514563106796.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (83; 81% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (11; 11% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (6; 6% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (3; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dislocated	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTP20011202118c4--2-CorefType:ident,gstype:gen,HomoDD
2	placa	placa	NOUN	ncfs000	Gender=Fem|Number=Sing	4	dislocated	4:dislocated	ArgTem=arg2:atr|Entity=CESSCASTP20011202118c4)
3	la	él	PRON	pp3fsa00	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	obj	4:obj	ArgTem=arg2:atr|Entity=(CESSCASTP20011202118c4--1-CorefType:ident,gstype:gen)
4	forman	formar	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	cuatro	cuatro	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	6	nummod	6:nummod	Entity=(NOCOREF:Gen--2-gstype:gen
6	plafones	plafón	NOUN	ncmp000	Gender=Masc|Number=Plur	4	nsubj	4:nsubj	ArgTem=arg1:tem|Entity=NOCOREF:Gen)|SpaceAfter=No
7	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	A	a	ADP	sps00	_	2	case	2:case	_
2	muchos	mucho	PRON	pi0mp000	Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	7	dislocated	7:dislocated	ArgTem=arg1:tem|SpaceAfter=No
3	,	,	PUNCT	fc	PunctType=Comm	2	punct	2:punct	_
4	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	_
5	militares	militar	NOUN	nccp000	Number=Plur	7	nsubj	7:nsubj	ArgTem=arg0:cau
6	los	él	PRON	pp3mpa00	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	obj	7:obj	ArgTem=arg1:tem
7	obligaron	obligar	VERB	vmis3p0	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
8	a	a	ADP	sps00	_	9	mark	9:mark	_
9	suicidar	suicidar	VERB	vmn0000	VerbForm=Inf	7	xcomp	7:xcomp	ArgTem=arg2:efi|ReflexLemma=suicidarse
10	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	expl:pv	9:expl:pv	_
11	colectivamente	colectivamente	ADV	rg	_	9	advmod	9:advmod	ArgTem=argM:adv|SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dislocated	color:blue
1	De	de	ADP	rg	ExtPos=ADV	2	case	2:case	ArgTem=argM:tmp|MWE=De_momento|MWEPOS=ADV
2	momento	momento	NOUN	_	_	8	obl	8:obl	SpaceAfter=No
3	,	,	PUNCT	fc	PunctType=Comm	2	punct	2:punct	_
4	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	Entity=(CESSCASTP20000401126c5-other-2-CorefType:ident,gstype:spec
5	Oscar	Oscar	PROPN	np00000	_	8	dislocated	8:dislocated	ArgTem=arg1:pat|Entity=CESSCASTP20000401126c5)
6	lo	él	PRON	pp3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	8	obj	8:obj	ArgTem=arg1:pat|Entity=(CESSCASTP20000401126c5-other-1-CorefType:ident,gstype:spec)
7	ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	8:aux	_
8	colocado	colocar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
9	en	en	ADP	sps00	_	11	case	11:case	_
10	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
11	librería	librería	NOUN	ncfs000	Gender=Fem|Number=Sing	8	obl	8:obl	ArgTem=arg2:loc
12	de	de	ADP	sps00	_	14	case	14:case	_
13	su	su	DET	dp3cs0	Number=Sing|Person=3|Poss=Yes|PronType=Prs	14	det	14:det	Entity=(NOCOREF:Gen--2-gstype:gen(CESSCASTP20000401126c1-person-1-CorefType:ident,gstype:spec)
14	casa	casa	NOUN	ncfs000	Gender=Fem|Number=Sing	11	nmod	11:nmod	Entity=NOCOREF:Gen)NOCOREF:Gen)|SpaceAfter=No
15	.	.	PUNCT	fp	PunctType=Peri	8	punct	8:punct	_

~~~


