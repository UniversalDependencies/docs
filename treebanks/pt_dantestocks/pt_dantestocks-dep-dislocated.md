---
layout: base
title:  'Statistics of dislocated in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `dislocated`

This relation is universal.

5 nodes (0%) are attached to their parents as `dislocated`.

5 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.4.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (3; 60% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	King	King	PROPN	_	_	4	dislocated	_	_
2	Kong	Kong	PROPN	_	_	1	flat:name	_	_
3	não	não	ADV	_	_	4	advmod	_	_
4	há	haver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	galho	galho	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
6	que	que	PRON	_	PronType=Rel	7	nsubj	_	_
7	suporte	suportar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	esse	esse	DET	_	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	gorila	gorila	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	...	...	PUNCT	_	_	4	punct	_	SpaceAfter=No
11	(	(	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	#petr4	#petr4	PROPN	_	_	4	parataxis	_	SpaceAfter=No
13	)	)	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 dislocated	color:blue
1	Fundos	fundo	NOUN	_	Gender=Masc|Number=Plur	15	dislocated	_	_
2	de	de	ADP	_	_	3	case	_	_
3	aposentadoria	aposentadoria	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	empresas	empresa	NOUN	_	Gender=Fem|Number=Plur	1	conj	_	_
6	saudáveis	saudável	ADJ	_	Number=Plur	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	FGTS	FGTS	PROPN	_	_	1	conj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	gente	gente	NOUN	_	Gender=Fem|Number=Sing	1	conj	_	_
11	de	de	ADP	_	_	12	case	_	_
12	bem	bem	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	1	punct	_	_
14	TODOS	todo	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	15	nsubj	_	_
15	PUSERAM	pôr	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
16	dinheiro	dinheiro	NOUN	_	Gender=Masc|Number=Sing	15	obj	_	_
17	em	em	ADP	_	_	19	case	_	_
18	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	#petrobras	#petrobras	PROPN	_	_	16	nmod	_	_
20	e	e	CCONJ	_	_	23	cc	_	_
21	#pETR4	#pETR4	PROPN	_	_	23	nsubj	_	_
22	em	em	ADP	_	_	23	case	_	_
23	queda	queda	NOUN	_	Gender=Fem|Number=Sing	15	conj	_	SpaceAfter=No
24	.	.	PUNCT	_	_	15	punct	_	_
25	FURTO	furto	NOUN	_	Gender=Masc|Number=Sing	15	parataxis	_	_
26	NACIONAL	nacional	ADJ	_	Number=Sing	25	amod	_	SpaceAfter=No
27	!	!	PUNCT	_	_	25	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dislocated	color:blue
1	@eniosang	@eniosang	PROPN	_	_	7	vocative	_	_
2	E	e	CCONJ	_	_	3	cc	_	_
3	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	dislocated	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	#brml3	#brml3	PROPN	_	_	7	nsubj	_	_
7	continua	continuar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	segurando	segurar	VERB	_	VerbForm=Ger	7	xcomp	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	alta	alta	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	_
11	recente	recente	ADJ	_	Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_
13	Buunituuu	bonito	ADJ	_	Gender=Masc|Number=Sing	7	discourse	_	CorrectForm=bonito
14	...	...	PUNCT	_	_	13	punct	_	SpaceAfter=No

~~~


