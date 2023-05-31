---
layout: base
title:  'Statistics of advmod in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `advmod`

This relation is universal.

5703 nodes (2%) are attached to their parents as `advmod`.

3960 instances of `advmod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83464843065053.

The following 14 pairs of parts of speech are connected with `advmod`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (3458; 61% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (1241; 22% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (630; 11% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (148; 3% instances), <tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (105; 2% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (61; 1% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (23; 0% instances), <tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (22; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pt_petrogold-pos-DET.html">DET</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_petrogold-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-X.html">X</a></tt>-<tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	lama	lama	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	goteja	gotejar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	através	através	ADV	_	_	3	advmod	_	_
5	de	de	ADP	_	_	7	case	_	_
6	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	telas	tela	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	_
8	e	e	CCONJ	_	_	9	cc	_	_
9	retorna	retornar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
10	a	a	ADP	_	_	12	case	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	tanque	tanque	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	_
13	de	de	ADP	_	_	14	case	_	_
14	lama	lama	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 advmod	color:blue
1	Esta	este	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	9	nsubj	_	_
2	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	para	para	ADP	_	_	5	case	_	_
5	efeitos	efeito	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
6	práticos	prático	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	área	área	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
10	de	de	ADP	_	_	11	case	_	_
11	fluxo	fluxo	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
12	mais	mais	ADV	_	_	13	advmod	_	_
13	importante	importante	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	também	também	ADV	_	_	4	advmod	_	_
3	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	polissacarídeo	polissacarídeo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	linear	linear	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
6	derivado	derivar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	acl	_	_
7	de	de	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	celulose	celulose	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


