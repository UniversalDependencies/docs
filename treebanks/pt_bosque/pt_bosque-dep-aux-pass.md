---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-aux.html">aux</a></tt>.

1127 nodes (0%) are attached to their parents as `aux:pass`.

1127 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08163265306122.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (1110; 98% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (16; 1% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	acusado	acusar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	de	de	ADP	_	_	5	case	_	_
5	vandalismo	vandalismo	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	decoração	decoração	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	também	também	ADV	_	_	5	advmod	_	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	divertida	divertido	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:pass	color:blue
1	Com	com	ADP	_	_	3	case	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	colisão	colisão	NOUN	_	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	cinco	cinco	NUM	_	NumType=Card	6	nummod	_	_
6	passageiros	passageiro	NOUN	_	Gender=Masc|Number=Plur	7	nsubj	_	_
7	ficaram	ficar	VERB	_	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	8	aux:pass	_	_
8	feridos	ferir	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
9	e	e	CCONJ	_	_	11	cc	_	_
10	foram	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	11	aux:pass	_	_
11	atendidos	atender	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	8	conj	_	_
12	em	em	ADP	_	_	14	case	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Hospital	Hospital	PROPN	_	Gender=Masc|Number=Sing	11	obl	_	MWEPOS=PROPN
15	Mário	Mário	PROPN	_	Number=Sing	14	flat:name	_	_
16	Gatti	Gatti	PROPN	_	Number=Sing	14	flat:name	_	SpaceAfter=No
17	.	.	PUNCT	_	_	7	punct	_	_

~~~


