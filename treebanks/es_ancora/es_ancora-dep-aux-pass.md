---
layout: base
title:  'Statistics of aux:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-aux.html">aux</a></tt>.

922 nodes (0%) are attached to their parents as `aux:pass`.

922 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05639913232104.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (917; 99% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (5; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux:pass	color:blue
1	Su	su	DET	dp3cs0	Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	2:det	Entity=(CESSCASTP2000060269c3--2-CorefType:ident,gstype:gen(CESSCASTP2000060269c1-person-1-CorefType:ident,gstype:spec)
2	compañero	compañero	NOUN	ncms000	Gender=Masc|Number=Sing	12	nsubj:pass	12:nsubj:pass	ArgTem=arg1:pat|SpaceAfter=No
3	,	,	PUNCT	fc	PunctType=Comm	7	punct	7:punct	_
4	con	con	ADP	sps00	_	6	case	6:case	_
5	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	Entity=(CESSCASTP2000060269c3--2-CorefType:ident,gstype:gen
6	que	que	PRON	pr0cn000	PronType=Rel	7	obl	7:obl	ArgTem=argM:adv|Entity=CESSCASTP2000060269c3)
7	tiene	tener	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
8	dos	dos	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	9	nummod	9:nummod	Entity=(NOCOREF:Gen--2-gstype:gen
9	hijos	hijo	NOUN	ncmp000	Gender=Masc|Number=Plur	7	obj	7:obj	ArgTem=arg2:atr|Entity=NOCOREF:Gen)|SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	7	punct	7:punct	Entity=CESSCASTP2000060269c3)
11	fue	ser	AUX	vsis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	aux:pass	12:aux:pass	_
12	detenido	detener	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	fp	PunctType=Peri	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 aux:pass	color:blue
1	Uno	uno	PRON	pi0ms000	Gender=Masc|Number=Sing|PronType=Ind	16	nsubj	16:nsubj	ArgTem=arg0:agt|Entity=(CESSCASTP20010401119c15--1-gstype:gen
2	de	de	ADP	sps00	_	4	case	4:case	_
3	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	4:det	Entity=(CESSCASTP20010401119c2--2-CorefType:ident,gstype:gen
4	montañeros	montañero	NOUN	ncmp000	Gender=Masc|Number=Plur	1	nmod	1:nmod	Entity=CESSCASTP20010401119c2)|SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	7	punct	7:punct	_
6	que	que	PRON	pr0cn000	PronType=Rel	7	nsubj	7:nsubj	ArgTem=arg1:tem|Entity=(CESSCASTP20010401119c15--1-CorefType:ident,gstype:gen)
7	quedó	quedar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	acl:relcl	1:acl:relcl	_
8	atrapado	atrapado	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	7	obj	7:obj	ArgTem=arg2:atr
9	en	en	ADP	sps00	_	11	case	11:case	_
10	una	uno	DET	di0fs0	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	Entity=(NOCOREF:Gen--2-gstype:gen
11	oquedad	oquedad	NOUN	ncfs000	Gender=Fem|Number=Sing	8	obl	8:obl	ArgTem=argM:loc
12	de	de	ADP	sps00	_	14	case	14:case	_
13	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	14:det	Entity=(NOCOREF:Gen--2-gstype:gen
14	nieve	nieve	NOUN	ncfs000	Gender=Fem|Number=Sing	11	nmod	11:nmod	Entity=NOCOREF:Gen)NOCOREF:Gen)|SpaceAfter=No
15	,	,	PUNCT	fc	PunctType=Comm	7	punct	7:punct	Entity=CESSCASTP20010401119c15)
16	tardó	tardar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
17	cuatro	cuatro	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	18	nummod	18:nummod	_
18	horas	hora	NOUN	ncfp000	Gender=Fem|Number=Plur	16	obj	16:obj	ArgTem=arg1:ext
19	en	en	ADP	sps00	_	16	obl:arg	16:obl:arg	_
20	ser	ser	AUX	vsn0000	VerbForm=Inf	21	aux:pass	21:aux:pass	ArgTem=arg2:tem
21	localizado	localizado	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	19	advmod	19:advmod	ArgTem=arg2:atr
22	y	y	CCONJ	cc	_	23	cc	23:cc	_
23	extraído	extraído	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	21	conj	21:conj	SpaceAfter=No
24	.	.	PUNCT	fp	PunctType=Peri	16	punct	16:punct	_

~~~


