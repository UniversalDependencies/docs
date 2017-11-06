---
layout: base
title:  'Statistics of discourse in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `discourse`

This relation is universal.

13 nodes (0%) are attached to their parents as `discourse`.

8 instances of `discourse` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-INTJ.html">INTJ</a></tt> (10; 77% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-INTJ.html">INTJ</a></tt> (1; 8% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-INTJ.html">INTJ</a></tt> (1; 8% instances), <tt><a href="pt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pt-pos-INTJ.html">INTJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 discourse	color:blue
1	«	«	PUNCT	PU|@PU	_	2	punct	_	SpaceAfter=No
2	Chegamos	chegar	VERB	<mv>|V|PR|1P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	até	até	ADP	PRP|@<SA	_	4	case	_	_
4	aqui	aqui	ADV	ADV|@P<	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	2	punct	_	_
6	claro	claro	INTJ	IN|@<ADVL	_	2	discourse	_	SpaceAfter=No
7	,	,	PUNCT	PU|@PU	_	2	punct	_	_
8	também	também	ADV	ADV|@<ADVL	_	2	advmod	_	_
9	graças	graças	ADV	ADV|@<ADVL	_	2	advmod	_	MWE=graças_a
10	a	a	ADP	PRP|@A<	_	11	case	_	_
11	Cruyff	Cruyff	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	»	»	PUNCT	PU|@PU	_	2	punct	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 24 discourse	color:blue
1	Em	em	ADP	PRP|@ADVL>	_	2	case	_	MWE=Em_vez_de
2	vez	vez	NOUN	N|@P<	_	16	obl	_	_
3	de	de	ADP	PRP|@N<	_	4	mark	_	_
4	mandar	mandar	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	2	acl	_	_
5	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	papel	papel	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	4	obj	_	_
7	por	por	ADP	<sam->|PRP|@<OA	_	9	case	_	_
8	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	garçom	garçom	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	4	obl	_	_
10	com	com	ADP	PRP|@N<	_	11	case	_	_
11	cantadas	cantar	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	6	nmod	_	_
12	escritas	escrever	VERB	<mv>|V|PCP|F|P|@ICL-N<	Gender=Fem|Number=Plur|VerbForm=Part	11	acl	_	SpaceAfter=No
13	,	,	PUNCT	PU|@PU	_	12	punct	_	_
14	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	plínio	plínio	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	16	nsubj	_	_
16	liga	ligar	VERB	<first-cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
17	para	para	ADP	<first-cjt>|PRP|@<PIV	_	19	case	_	_
18	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	plínia	plínia	NOUN	<first-cjt>|<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	16	obl	_	_
20	de	de	ADP	PRP|@N<	_	22	case	_	_
21	sua	seu	DET	<poss>|DET|F|S|@>N	Gender=Fem|Number=Sing|PronType=Prs	22	det	_	_
22	predileção	predileção	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	19	nmod	_	_
23	e	e	CCONJ	<co-fcl>|<co-fmc>|<co-vfin>|KC|@CO	_	16	cc	_	_
24	pronto	pronto	INTJ	IN|@ADVL>	_	27	discourse	_	_
25	--	--	PUNCT	PU|@PU	_	16	punct	_	_
26	está	estar	AUX	<cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	_
27	feito	feito	ADJ	<mv>|V|PCP|M|S|@ICL-<SC	Gender=Masc|Number=Sing	16	dep	_	_
28	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	contato	contato	NOUN	<np-def>|N|M|S|@<SUBJ	Gender=Masc|Number=Sing	27	nsubj	_	_
30	imediato	imediato	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	29	amod	_	SpaceAfter=No
31	.	.	PUNCT	PU|@PU	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 discourse	color:blue
1	Já	já	ADV	ADV|@>A	_	2	advmod	_	_
2	nem	nem	ADV	ADV|@ADVL>	_	3	advmod	_	_
3	ouvem	ouvir	VERB	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	voz	voz	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	3	obj	_	_
6	de	de	ADP	PRP|@N<	_	8	case	_	_
7	«	«	PUNCT	PU|@PU	_	8	punct	_	SpaceAfter=No
8	já	já	INTJ	IN|@P<	_	5	discourse	_	SpaceAfter=No
9	»	»	PUNCT	PU|@PU	_	8	punct	_	_
10	de	de	ADP	<sam->|PRP|@N<	_	12	case	_	_
11	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	instrutor-largador	instrutor-largador	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


