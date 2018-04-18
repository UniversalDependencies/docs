---
layout: base
title:  'Statistics of dislocated in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `dislocated`

This relation is universal.

9 nodes (0%) are attached to their parents as `dislocated`.

8 instances of `dislocated` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 5 pairs of parts of speech are connected with `dislocated`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (1; 11% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dislocated	color:blue
1	Os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	automobilistas	automobilista	NOUN	_	Gender=Masc|Number=Plur	6	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	esses	esse	PRON	_	Gender=Masc|Number=Plur|PronType=Dem	6	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	continuam	continuar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	a	a	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	espera	espera	NOUN	_	Gender=Fem|Number=Sing	6	obl	_	_
10	...	...	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dislocated	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	PCP	PCP	PROPN	_	Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	esse	esse	DET	_	Gender=Masc|Number=Sing|PronType=Dem	8	dislocated	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	sempre	sempre	ADV	_	_	8	advmod	_	_
8	bem	bem	ADV	_	_	0	root	_	_
9	e	e	CCONJ	_	_	12	cc	_	_
10	com	com	ADP	_	_	12	case	_	_
11	pouco	pouco	DET	_	Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
12	trabalho	trabalho	NOUN	_	Gender=Masc|Number=Sing	8	conj	_	_
13	por	por	ADP	_	_	15	case	_	_
14	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	frente	frente	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dislocated	color:blue
1	mas	mas	CCONJ	_	_	8	cc	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	coluna	coluna	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
5	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	dislocated	_	_
6	própria	próprio	ADJ	_	Gender=Fem|Number=Sing|PronType=Emp	5	det	_	_
7	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	metáfora	metáfora	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
9	de	de	ADP	_	_	11	case	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	corpo	corpo	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	_
12	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	13	obj	_	_
13	sustenta	sustentar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	de	de	ADP	_	_	17	case	_	_
16	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	força	força	NOUN	_	Gender=Fem|Number=Sing	11	conj	_	_
18	que	que	PRON	_	Gender=Fem|Number=Sing|PronType=Rel	20	obj	_	_
19	tudo	tudo	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	20	nsubj	_	_
20	suporta	suportar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	acl:relcl	_	SpaceAfter=No
21	.	.	PUNCT	_	_	8	punct	_	_

~~~


