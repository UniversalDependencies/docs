---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-aux.html">aux</a></tt>.

1210 nodes (1%) are attached to their parents as `aux:pass`.

1208 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13636363636364.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (1193; 99% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (16; 1% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (1; 0% instances).


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
5	vandalismo	vandalismo	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux:pass	color:blue
1	«	«	PUNCT	_	_	7	punct	_	SpaceAfter=No
2	Qualquer	qualquer	DET	_	Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	doação	doação	NOUN	_	Gender=Fem|Number=Sing	7	nsubj:pass	_	_
4	seria	ser	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	7	aux:pass	_	_
5	muito	muito	ADV	_	_	6	advmod	_	_
6	bem	bem	ADV	_	_	7	advmod	_	_
7	recebida	recebido	ADJ	_	Gender=Fem|Number=Sing	10	parataxis	_	SpaceAfter=No
8	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	_
10	diz	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	madre	madre	NOUN	_	Gender=Fem|Number=Sing	10	nsubj	_	_
12	Maria	Maria	PROPN	_	Gender=Fem|Number=Sing	11	appos	_	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 23 aux:pass	color:blue
1	«	«	PUNCT	_	_	9	punct	_	SpaceAfter=No
2	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	único	único	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
4	trabalho	trabalho	NOUN	_	Gender=Masc|Number=Sing	9	nsubj	_	_
5	de	de	ADP	_	_	7	case	_	_
6	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	pessoas	pessoa	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	_
8	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	separar	separar	VERB	_	VerbForm=Inf	0	root	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	lixo	lixo	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	_
12	e	e	CCONJ	_	_	13	cc	_	_
13	colocar	colocar	VERB	_	VerbForm=Inf	9	conj	_	_
14	em	em	ADP	_	_	16	case	_	_
15	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	dias	dia	NOUN	_	Gender=Masc|Number=Plur	13	obl	_	_
17	certos	certo	ADJ	_	Gender=Masc|Number=Plur	16	amod	_	_
18	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	_
19	contentores	contentor	NOUN	_	Gender=Masc|Number=Plur|Voice=Pass	13	obj	_	_
20	e	e	CCONJ	_	_	21	cc	_	_
21	cestos	cesto	NOUN	_	Gender=Masc|Number=Plur	19	conj	_	_
22	para	para	SCONJ	_	_	24	mark	_	_
23	serem	ser	AUX	_	Number=Plur|Person=3|VerbForm=Inf	19	aux:pass	_	_
24	recolhidos	recolher	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	13	advcl	_	SpaceAfter=No
25	.	.	PUNCT	_	_	9	punct	_	_

~~~


