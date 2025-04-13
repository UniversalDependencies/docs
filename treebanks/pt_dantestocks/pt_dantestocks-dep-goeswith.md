---
layout: base
title:  'Statistics of goeswith in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `goeswith`

This relation is universal.

26 nodes (0%) are attached to their parents as `goeswith`.

26 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (18; 69% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (6; 23% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	dtex3	dtex3	PROPN	_	_	2	nsubj	_	_
2	amanhace	amanhecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ex	ex-bonificação	NOUN	_	Gender=Fem|Number=Sing|Typo=Yes	2	obl	_	CorrectForm=ex-bonificação
4	bonificação	_	X	_	_	3	goeswith	_	_
5	de	de	ADP	_	_	7	case	_	_
6	10	10	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
7	%	%	SYM	_	_	3	nmod	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	#VALE5	#VALE5	PROPN	_	_	4	nsubj	_	SpaceAfter=No
2	#HOME	#HOMEBROKER	PROPN	_	Typo=Yes	1	nmod	_	CorrectForm=#HOMEBROKER
3	BROKER	_	X	_	_	2	goeswith	_	_
4	não	não	ADV	_	_	5	advmod	_	_
5	passa	passar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	de	de	ADP	_	_	8	case	_	_
7	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	jogo	jogo	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	programado	programar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	5	conj	_	_
12	pra	para	ADP	_	_	13	mark	_	_
13	perder	perder	VERB	_	VerbForm=Inf	11	advcl	_	_
14	kkk	kkk	X	_	_	5	discourse	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 goeswith	color:blue
1	OP	operação	NOUN	_	Abbr=Yes|Gender=Fem|Number=Sing	6	nsubj:pass	_	FullForm=operação
2	em	em	ADP	_	_	3	case	_	_
3	ITUB4	ITUB4	PROPN	_	_	1	nmod	_	_
4	e	e	CCONJ	_	_	5	cc	_	_
5	BBDC4	BBDC4	PROPN	_	_	3	conj	_	_
6	concluidas	concluir	VERB	_	Gender=Fem|Number=Plur|Typo=Yes|VerbForm=Part|Voice=Pass	0	root	_	CorrectForm=concluídas
7	com	com	ADP	_	_	8	case	_	_
8	saldo	saldo	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
9	positivo	positivo	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_
11	Agora	agora	ADV	_	_	13	advmod	_	_
12	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	sair	sair	VERB	_	VerbForm=Inf	6	parataxis	_	_
14	pra	para	ADP	_	_	15	mark	_	_
15	tomar	tomar	VERB	_	VerbForm=Inf	13	advcl	_	_
16	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	chope	chope	NOUN	_	Gender=Masc|Number=Sing	15	obj	_	SpaceAfter=No
18	.	.	PUNCT	_	_	13	punct	_	_
19	A	afinal	ADV	_	Typo=Yes	23	advmod	_	CorrectForm=Afinal
20	final	_	X	_	_	19	goeswith	_	_
21	hj	hoje	ADV	_	Abbr=Yes	23	advmod	_	FullForm=hoje
22	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	cop	_	_
23	sexta	sexta-feira	NOUN	_	Abbr=Yes|Gender=Fem|Number=Sing	6	parataxis	_	FullForm=sexta-feira
24	:)	:)	SYM	_	_	23	discourse	_	SpaceAfter=No

~~~


