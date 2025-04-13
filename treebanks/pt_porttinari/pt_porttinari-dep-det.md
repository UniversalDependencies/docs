---
layout: base
title:  'Statistics of det in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `det`

This relation is universal.

24079 nodes (14%) are attached to their parents as `det`.

24024 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09352547863283.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (20411; 85% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (3393; 14% instances), <tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (121; 1% instances), <tt><a href="pt_porttinari-pos-X.html">X</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (81; 0% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (59; 0% instances), <tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Viver	viver	VERB	_	VerbForm=Inf	0	root	0:root	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
3	vida	vida	NOUN	_	Gender=Fem|Number=Sing	1	obj	1:obj	_
4	real	real	ADJ	_	Number=Sing	3	amod	3:amod	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	em	em	ADP	_	_	7	case	7:case	_
7	vez	vez	NOUN	_	Gender=Fem|Number=Sing	1	obl	1:obl:em	_
8	de	de	ADP	_	_	9	mark	9:mark	_
9	ficar	ficar	VERB	_	VerbForm=Inf	7	acl	7:acl:de	_
10	com	com	ADP	_	_	12	case	12:case	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	12:det	_
12	celular	celular	NOUN	_	Gender=Masc|Number=Sing	9	obl	9:obl:com	_
13	em	em	ADP	_	_	15	case	15:case	_
14	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	15:det	_
15	mão	mão	NOUN	_	Gender=Fem|Number=Sing	12	nmod	12:nmod:em	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	1:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Parecer	parecer	NOUN	_	Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
2	de	de	ADP	_	_	4	case	4:case	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	4:det	_
4	Advocacia-Geral	Advocacia-Geral	PROPN	_	_	1	nmod	1:nmod:de	_
5	enviado	enviar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	acl	1:acl	_
6	a	a	ADP	_	_	8	case	8:case	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
8	STF	STF	PROPN	_	_	5	obl	5:obl:a	_
9	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	favorável	favorável	ADJ	_	Number=Sing	0	root	0:root	_
11	a	a	ADP	_	_	12	case	12:case	_
12	Aécio	Aécio	PROPN	_	_	10	obl	10:obl:a	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Em	em	ADP	_	_	3	case	3:case	_
2	todos	todo	DET	_	Gender=Masc|Number=Plur|PronType=Ind	3	det	3:det	_
3	eles	ele	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	obl	6:obl:em	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	_
5	lei	lei	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
6	determina	determinar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	reclusão	reclusão	NOUN	_	Gender=Fem|Number=Sing	6	obj	6:obj	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No

~~~


