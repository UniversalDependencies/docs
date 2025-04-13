---
layout: base
title:  'Statistics of nummod in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `nummod`

This relation is universal.

2290 nodes (3%) are attached to their parents as `nummod`.

1680 instances of `nummod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02707423580786.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (1666; 73% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (604; 26% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (15; 1% instances), <tt><a href="pt_dantestocks-pos-X.html">X</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Petr4	Petr4	PROPN	_	_	7	parataxis	_	_
2	15,68	15,68	NUM	_	NumType=Card	1	nmod	_	_
3	+	+	SYM	_	_	4	advmod	_	SpaceAfter=No
4	2,35	2,35	NUM	_	NumType=Card	5	nummod	_	SpaceAfter=No
5	%	%	SYM	_	_	1	nmod	_	_
6	Cerveró	Cerveró	PROPN	_	_	7	nsubj	_	_
7	falando	falar	VERB	_	VerbForm=Ger	0	root	_	_
8	sem	sem	ADP	_	_	9	mark	_	_
9	parar	parar	VERB	_	VerbForm=Inf	7	advcl	_	SpaceAfter=No
10	…	…	PUNCT	_	_	7	punct	_	_
11	#CPIdaPTbras	#CPIdaPTbras	X	_	_	7	parataxis	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	PETR4	PETR4	PROPN	_	_	3	nsubj	_	_
2	13	13	NUM	_	NumType=Card	3	nummod	_	_
3	reau	real	NOUN	_	Gender=Masc|Number=Sing|Typo=Yes	0	root	_	CorrectForm=reais|CorrectNumber=Plur|SpaceAfter=No
4	!	!	PUNCT	_	_	3	punct	_	_
5	e	e	CCONJ	_	_	6	cc	_	_
6	caindo	cair	VERB	_	VerbForm=Ger	3	conj	_	_
7	sem	sem	ADP	_	_	8	case	_	_
8	nocao	noção	NOUN	_	Gender=Fem|Number=Sing|Typo=Yes	6	obl	_	CorrectForm=noção
9	de	de	ADP	_	_	10	case	_	_
10	fundo	fundo	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	...	...	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	@ferrisss	@ferrisss	PROPN	_	_	4	vocative	_	_
2	amanha	amanhã	ADV	_	Typo=Yes	4	advmod	_	CorrectForm=amanhã
3	cedo	cedo	ADV	_	_	4	advmod	_	_
4	mando	mandar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	deposito	depósito	NOUN	_	Gender=Masc|Number=Sing|Typo=Yes	4	obj	_	CorrectForm=depósito
7	para	para	ADP	_	_	8	mark	_	_
8	comprar	comprar	VERB	_	VerbForm=Inf	6	acl	_	_
9	1000	1000	NUM	_	NumType=Card	10	nummod	_	_
10	jbss3	jbss3	PROPN	_	_	8	obj	_	_
11	acha	achar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
12	que	que	SCONJ	_	_	13	mark	_	_
13	vale	valer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	SpaceAfter=No
14	?	?	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


