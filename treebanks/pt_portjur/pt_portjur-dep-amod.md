---
layout: base
title:  'Statistics of amod in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `amod`

This relation is universal.

6125 nodes (6%) are attached to their parents as `amod`.

5443 instances of `amod` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20424489795918.

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (6011; 98% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (60; 1% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (45; 1% instances), <tt><a href="pt_portjur-pos-X.html">X</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 amod	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	credor	credor	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	não	não	ADV	_	_	4	advmod	_	_
4	comerciante	comerciante	ADJ	_	Number=Sing	2	amod	_	_
5	pode	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	requerer	requerer	VERB	_	VerbForm=Inf	5	xcomp	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	quebra	quebra	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
9	de	de	ADP	_	_	11	case	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	devedor	devedor	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	protesto	protesto	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	comum	comum	ADJ	_	Number=Sing	2	amod	_	_
4	dispensa	dispensar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	obj	_	_
6	especial	especial	ADJ	_	Number=Sing	5	amod	_	_
7	para	para	ADP	_	_	9	case	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	requerimento	requerimento	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
10	de	de	ADP	_	_	11	case	_	_
11	falência	falência	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	seu	seu	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
3	voto	voto	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	eminente	eminente	ADJ	_	Number=Sing	7	amod	_	_
7	Relatora	Relatora	PROPN	_	_	8	nsubj	_	_
8	bisou	bisar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	precedentes	precedente	NOUN	_	Number=Plur	8	obj	_	_
10	de	de	ADP	_	_	12	case	_	_
11	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Primeira	Primeira	PROPN	_	_	9	nmod	_	_
13	Seção	Seção	PROPN	_	_	12	flat:name	_	SpaceAfter=No
14	.	.	PUNCT	_	_	8	punct	_	_

~~~


