---
layout: base
title:  'Statistics of nsubj:outer in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pt_dantestocks-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_dantestocks-dep-nsubj-pass.html">nsubj:pass</a></tt>.

11 nodes (0%) are attached to their parents as `nsubj:outer`.

11 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.81818181818182.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (6; 55% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (2; 18% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 nsubj:outer	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	véia	velho	NOUN	_	Gender=Fem|Number=Sing|Typo=Yes	7	nsubj	_	CorrectForm=velha
3	de	de	ADP	_	_	5	case	_	_
4	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	neurônio	neurônio	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
6	solitário	solitário	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	_
7	caiu	cair	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	em	em	ADP	_	_	10	case	_	_
9	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	pesquisas	pesquisa	NOUN	_	Gender=Fem|Number=Plur	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	_
12	resultado	resultado	NOUN	_	Gender=Masc|Number=Sing	14	nsubj:outer	_	_
13	PETR4	PETR4	PROPN	_	_	14	nsubj	_	_
14	subindo	subir	VERB	_	VerbForm=Ger	7	conj	_	_
15	6,7	6,7	NUM	_	NumType=Card	16	nummod	_	SpaceAfter=No
16	%	%	SYM	_	_	14	obj	_	SpaceAfter=No
17	,	,	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj:outer	color:blue
1	O	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj:outer	_	_
2	que	que	PRON	_	PronType=Rel	3	nsubj	_	_
3	importa	importar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
5	que	que	SCONJ	_	_	10	mark	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	ALLL3	ALLL3	PROPN	_	_	10	nsubj	_	_
8	ainda	ainda	ADV	_	_	10	advmod	_	_
9	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	subindo	subir	VERB	_	VerbForm=Ger	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 nsubj:outer	color:blue
1	#LLXL3	#LLXL3	PROPN	_	_	8	parataxis	_	_
2	minha	meu	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	3	det	_	_
3	opiniao	opinião	NOUN	_	Gender=Fem|Number=Sing|Typo=Yes	8	nsubj:outer	_	CorrectForm=opinião
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
5	que	que	SCONJ	_	_	8	mark	_	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	mto	muito	ADJ	_	Abbr=Yes|Gender=Masc|Number=Sing	8	amod	_	FullForm=muito
8	fundo	fundo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
9	zerando	zerar	VERB	_	VerbForm=Ger	8	acl	_	_
10	venda	venda	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
11	...	...	PUNCT	_	_	15	punct	_	SpaceAfter=No
12	por	por	ADP	_	_	13	case	_	_
13	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	15	nmod	_	_
14	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	alta	alta	NOUN	_	Gender=Fem|Number=Sing	8	conj	_	SpaceAfter=No
16	..	..	PUNCT	_	_	18	punct	_	SpaceAfter=No
17	e	e	CCONJ	_	_	18	cc	_	_
18	devolvendo	devolver	VERB	_	VerbForm=Ger	8	conj	_	_
19	BTC	BTC	PROPN	_	_	18	obj	_	SpaceAfter=No
20	!	!	PUNCT	_	_	18	punct	_	_
21	Vai	ir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	aux	_	_
22	sair	sair	VERB	_	VerbForm=Inf	8	parataxis	_	_
23	de	de	ADP	_	_	25	case	_	_
24	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	indice	índice	NOUN	_	Gender=Masc|Number=Sing|Typo=Yes	22	obl	_	CorrectForm=índice
26	e	e	CCONJ	_	_	28	cc	_	_
27	não	não	ADV	_	_	28	advmod	_	_
28	podem	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	22	conj	_	_
29	ficar	ficar	VERB	_	VerbForm=Inf	28	xcomp	_	_
30	vendidos	vendido	ADJ	_	Gender=Masc|Number=Plur	29	xcomp	_	SpaceAfter=No
31	!	!	PUNCT	_	_	22	punct	_	SpaceAfter=No

~~~


