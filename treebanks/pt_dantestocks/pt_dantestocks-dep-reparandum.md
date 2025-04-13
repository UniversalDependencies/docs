---
layout: base
title:  'Statistics of reparandum in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `reparandum`

This relation is universal.

16 nodes (0%) are attached to their parents as `reparandum`.

16 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.875.

The following 12 pairs of parts of speech are connected with `reparandum`: <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (2; 13% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (2; 13% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (1; 6% instances), <tt><a href="pt_dantestocks-pos-DET.html">DET</a></tt>-<tt><a href="pt_dantestocks-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="pt_dantestocks-pos-DET.html">DET</a></tt>-<tt><a href="pt_dantestocks-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 reparandum	color:blue
1	vai	ir	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	oibr4	oibr4	PROPN	_	_	1	vocative	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_
5	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
6	troux	trouxa	NOUN	_	Gender=Masc|Number=Sing	10	reparandum	_	FullForm=trouxa|Trunc=Yes|SpaceAfter=No
7	...	...	PUNCT	_	_	8	punct	_	_
8	ops	ops	INTJ	_	_	10	discourse	_	SpaceAfter=No
9	...	...	PUNCT	_	_	8	punct	_	_
10	investidor	investidor	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	_
11	precisa	precisar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
12	pagar	pagar	VERB	_	VerbForm=Inf	11	xcomp	_	_
13	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	15	det	_	_
14	minhas	meu	DET	_	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	15	det	_	_
15	férias	féria	NOUN	_	Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	11	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 reparandum	color:blue
1	#VALE5	#VALE5	PROPN	_	_	0	root	_	_
2	Vinte	vinte	NUM	_	NumType=Card	10	reparandum	_	_
3	e	e	CCONJ	_	_	4	cc	_	_
4	sete	sete	NUM	_	NumType=Card	2	conj	_	_
5	e	e	CCONJ	_	_	6	cc	_	_
6	dez	dez	NUM	_	NumType=Card	2	conj	_	SpaceAfter=No
7	...	...	PUNCT	_	_	2	punct	_	_
8	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
9	precisamente	precisamente	ADV	_	_	10	advmod	_	_
10	@27,07	@27,07	NUM	_	_	1	nmod	_	SpaceAfter=No
11	)	)	PUNCT	_	_	10	punct	_	_
12	abaixo	abaixo	ADV	_	_	20	advmod	_	_
13	de	de	ADP	_	_	14	case	_	_
14	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	12	obl	_	_
15	...	...	PUNCT	_	_	12	punct	_	_
16	em	em	ADP	_	_	18	case	_	_
17	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	SEMANAL	semanal	NOUN	_	Number=Sing	20	nmod	_	_
19	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	#funeraria	#funerária	NOUN	_	Gender=Fem|Number=Sing|Typo=Yes	1	parataxis	_	CorrectForm=#funerária|SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 reparandum	color:blue
1	nova	novo	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
2	resistência	resistência	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	por	por	ADP	_	_	5	case	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	frente	frente	NOUN	_	Number=Sing	2	nmod	_	_
6	de	de	ADP	_	_	8	case	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	#PETR4	#PETR4	PROPN	_	_	2	nmod	_	_
9	...	...	PUNCT	_	_	2	punct	_	_
10	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	R$	R$	SYM	_	_	14	reparandum	_	SpaceAfter=No
12	12,95	12,95	NUM	_	NumType=Card	11	nummod	_	SpaceAfter=No
13	~	~	SYM	_	_	14	advmod	_	SpaceAfter=No
14	13,00	13,00	NUM	_	NumType=Card	2	parataxis	_	_
15	...	...	PUNCT	_	_	14	punct	_	_
16	Vamos	ir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	17	aux	_	_
17	ver	ver	VERB	_	VerbForm=Inf	2	parataxis	_	_
18	se	se	SCONJ	_	_	19	mark	_	_
19	fura	furar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	ccomp	_	_
20	!	!	PUNCT	_	_	17	punct	_	_
21	=)	=)	SYM	_	_	2	discourse	_	SpaceAfter=No

~~~


