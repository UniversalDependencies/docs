---
layout: base
title:  'Statistics of orphan in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `orphan`

This relation is universal.

8 nodes (0%) are attached to their parents as `orphan`.

8 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 6 pairs of parts of speech are connected with `orphan`: <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (1; 13% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-SYM.html">SYM</a></tt> (1; 13% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (1; 13% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 20 orphan	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	lucro	lucro	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	cresceu	crescer	VERB	<first-cjt>|<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	24	24	NUM	<card>|NUM|M|P|@>N	NumType=Card	5	nummod	_	SpaceAfter=No
5	%	%	SYM	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	3	obj	_	_
6	para	para	ADP	PRP|@<ADVL	_	9	case	_	_
7	US$	US$	SYM	_	Gender=Masc|Number=Plur	9	compound	_	_
8	51	51	NUM	<card>|NUM|M|P|@>N	NumType=Card	9	nummod	_	_
9	milhões	milhão	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	3	iobj	_	_
10	e	e	CCONJ	<co-fcl>|KC|@CO	_	3	cc	_	_
11	as	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
12	vendas	venda	NOUN	<np-def>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	PU|@PU	_	12	punct	_	_
14	18	18	NUM	<card>|NUM|M|P|@>N	NumType=Card	15	nummod	_	SpaceAfter=No
15	%	%	SYM	<Eg>|<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	12	orphan	_	SpaceAfter=No
16	,	,	PUNCT	PU|@PU	_	15	punct	_	_
17	para	para	ADP	PRP|@<ADVL	_	20	case	_	_
18	US$	US$	SYM	_	Gender=Masc|Number=Plur	20	compound	_	_
19	776	776	NUM	<card>|NUM|M|P|@>N	NumType=Card	20	nummod	_	_
20	milhões	milhão	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	12	orphan	_	SpaceAfter=No
21	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 orphan	color:blue
1	(	(	PUNCT	PU|@PU	_	2	punct	_	SpaceAfter=No
2	Atitude	atitude	NOUN	<np-idf>|N|F|S|@NPHR	Gender=Fem|Number=Sing	0	root	_	_
3	basicamente	basicamente	ADV	ADV|@>A	_	4	advmod	_	_
4	budista	budista	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	2	amod	_	_
5	em	em	ADP	PRP|@N<	_	6	case	_	MWE=em_relação_a
6	relação	relação	NOUN	N|@P<	_	2	nmod	_	_
7	a	a	ADP	PRP|@N<	_	10	case	_	_
8	todas	todo	DET	<quant>|DET|F|P|@>N	Gender=Fem|Number=Plur|PronType=Tot	10	det	_	MWE=todas_as
9	as	o	DET	<artd>|DET|F|P|@A<	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	fixed	_	_
10	coisas	coisa	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	6	nmod	_	_
11	de	de	ADP	<sam->|PRP|@N<	_	13	case	_	_
12	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	vida	vida	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
14	,	,	PUNCT	PU|@PU	_	2	punct	_	_
15	porque	porque	SCONJ	KS|@SUB	_	18	mark	_	_
16	as	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
17	desagradáveis	desagradável	ADJ	<n>|<np-def>|ADJ|F|P|@SUBJ>	Gender=Fem|Number=Plur	18	nsubj	_	_
18	causam	causar	VERB	<first-cjt>|<mv>|V|PR|3P|IND|@FS-N<PRED	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	advcl	_	_
19	repulsa	repulsa	NOUN	<np-idf>|N|F|S|@<ACC	Gender=Fem|Number=Sing	18	obj	_	SpaceAfter=No
20	,	,	PUNCT	PU|@PU	_	18	punct	_	_
21	e	e	CCONJ	<co-fcl>|<co-fmc>|<co-vfin>|KC|@CO	_	18	cc	_	_
22	as	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	23	det	_	_
23	agradáveis	agradável	ADJ	<n>|<np-def>|ADJ|F|P|@SUBJ>	Gender=Fem|Number=Plur	18	conj	_	_
24	tristeza	tristeza	NOUN	<np-idf>|N|F|S|@<ACC	Gender=Fem|Number=Sing	23	orphan	_	_
25	quando	quando	ADV	<rel>|ADV|@ADVL>	_	30	advmod	_	_
26	já	já	ADV	ADV|@ADVL>	_	30	advmod	_	_
27	se	se	PRON	PERS|M|S|ACC|@SUBJ>	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	30	nsubj	_	_
28	as	elas	PRON	PERS|F|3P|ACC|@ACC>	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	30	obj	_	_
29	não	não	ADV	_	Polarity=Neg	30	advmod	_	_
30	tem	ter	VERB	<mv>|V|PR|3S|IND|@FS-<ADVL	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	SpaceAfter=No
31	)	)	PUNCT	PU|@PU	_	2	punct	_	SpaceAfter=No
32	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 16 orphan	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	homem	homem	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	fuma	fumar	VERB	<first-cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	entre	entre	ADP	PRP|@>N	_	5	case	_	_
5	11	11	NUM	<first-cjt>|<card>|NUM|M|P|@>N	NumType=Card	8	nummod	_	_
6	e	e	CCONJ	<co-prenom>|KC|@CO	_	7	cc	_	_
7	20	20	NUM	<cjt>|<card>|NUM|M|P|@>N	NumType=Card	5	conj	_	_
8	cigarros	cigarro	NOUN	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	3	obj	_	_
9	por	por	ADP	PRP|@<ADVL	_	10	case	_	_
10	dia	dia	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	3	obl	_	_
11	e	e	CCONJ	<co-fcl>|KC|@CO	_	3	cc	_	_
12	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	mulher	mulher	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
14	,	,	PUNCT	PU|@PU	_	13	punct	_	_
15	entre	entre	ADP	PRP|@<ACC	_	16	case	_	_
16	5	5	NUM	<first-cjt>|<Eg>|NUM|M|P|@P<	NumType=Card	13	orphan	_	_
17	e	e	CCONJ	<co-prparg>|KC|@CO	_	16	cc	_	_
18	10	10	NUM	<cjt>|<Eg>|NUM|M|P|@P<	NumType=Card	16	conj	_	SpaceAfter=No
19	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


