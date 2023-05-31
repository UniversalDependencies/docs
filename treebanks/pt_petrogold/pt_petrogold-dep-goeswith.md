---
layout: base
title:  'Statistics of goeswith in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `goeswith`

This relation is universal.

9 nodes (0%) are attached to their parents as `goeswith`.

9 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (4; 44% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (2; 22% instances), <tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (2; 22% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 goeswith	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	distinção	distinção	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
3	de	de	ADP	_	_	5	case	_	_
4	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	carbonatos	carbonato	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	_
6	pautou	pautar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Se=pv
7	se	se	PRON	_	PronType=Prs	6	expl:pv	_	_
8	em	em	ADP	_	_	10	case	_	_
9	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	dados	dado	NOUN	_	Gender=Masc|Number=Plur	6	obl:arg	_	_
11	de	de	ADP	_	_	12	case	_	_
12	afloramento	afloramento	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	_
14	em	em	ADP	_	_	15	case	_	_
15	meso	mesoescala	NOUN	_	Gender=Fem|Number=Sing|Typo=Yes	6	obl	_	_
16	escala	_	X	_	_	15	goeswith	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	carecendo	carecer	VERB	_	VerbForm=Ger	6	advcl	_	_
19	de	de	ADP	_	_	20	case	_	_
20	dados	dado	NOUN	_	Gender=Masc|Number=Plur	18	obl:arg	_	_
21	de	de	ADP	_	_	22	case	_	_
22	petrografia	petrografia	NOUN	_	Gender=Fem|Number=Sing	20	nmod	_	_
23	para	para	ADP	_	_	25	case	_	_
24	melhor	melhor	ADJ	_	Gender=Fem|Number=Sing	25	amod	_	_
25	caracterização	caracterização	NOUN	_	Gender=Fem|Number=Sing	18	obl	_	SpaceAfter=No
26	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 goeswith	color:blue
1	Este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	trabalho	trabalho	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	abordará	abordar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	em	em	ADP	_	_	7	case	_	_
6	sua	seu	DET	_	Gender=Fem|Number=Sing|PronType=Prs	7	det	_	_
7	estrutura	estrutura	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	além	além	ADV	_	_	12	cc	_	MWEPOS=CCONJ
10	de	de	ADP	_	_	9	fixed	_	_
11	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	introdução	introdução	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	16	punct	_	_
14	em	em	ADP	_	_	16	case	_	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	capítulo	capítulo	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	_
17	primeiro	primeiro	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	16	amod	_	SpaceAfter=No
18	,	,	PUNCT	_	_	16	punct	_	_
19	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	referencial	referencial	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
21	t	teórico	ADJ	_	Gender=Masc|Number=Sing|Typo=Yes	20	nmod	_	_
22	eórico	_	X	_	_	21	goeswith	_	_
23	apresentando	apresentar	VERB	_	VerbForm=Ger	3	advcl	_	_
24	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	tema	tema	NOUN	_	Gender=Masc|Number=Sing	23	obj	_	SpaceAfter=No
26	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	procedimento	procedimento	NOUN	_	Gender=Masc|Number=Sing	8	nsubj:pass	_	_
3	descrito	descrever	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	acl	_	_
4	a	acima	ADV	_	Typo=Yes	3	obl	_	_
5	cima	_	X	_	_	4	goeswith	_	_
6	também	também	ADV	_	_	8	advmod	_	_
7	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
8	realizado	realizar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
9	para	para	ADP	_	_	13	case	_	_
10	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
11	outros	outro	DET	_	Gender=Masc|Number=Plur|PronType=Ind	13	det	_	_
12	dois	dois	NUM	_	NumType=Card	13	nummod	_	_
13	poços	poço	NOUN	_	Gender=Masc|Number=Plur	8	obl	_	_
14	presentes	presente	ADJ	_	Gender=Masc|Number=Plur	13	amod	_	_
15	em	em	ADP	_	_	17	case	_	_
16	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	área	área	NOUN	_	Gender=Fem|Number=Sing	14	obl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	8	punct	_	_

~~~


