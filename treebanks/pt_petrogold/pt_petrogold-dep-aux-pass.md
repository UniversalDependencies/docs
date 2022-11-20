---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-aux.html">aux</a></tt>.

3634 nodes (1%) are attached to their parents as `aux:pass`.

3634 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07182168409466.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-AUX.html">AUX</a></tt> (3627; 100% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	afloramento	afloramento	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
4	206	206	NUM	_	NumType=Card	3	nummod	_	_
5	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	reconhecida	reconhecer	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	espessa	espesso	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	_
8	zona	zona	NOUN	_	Gender=Fem|Number=Sing	6	nsubj:pass	_	_
9	de	de	ADP	_	_	10	case	_	_
10	deformação	deformação	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	As	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	geometrias	geometria	NOUN	_	Gender=Fem|Number=Plur	5	nsubj:pass	_	_
3	predominantes	predominante	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	camadas	camada	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
6	tabulares	tabular	ADJ	_	Gender=Fem|Number=Plur	5	amod	_	_
7	centimétricas	centimétrico	ADJ	_	Gender=Fem|Number=Plur	5	amod	_	_
8	podendo	poder	VERB	_	VerbForm=Ger	5	acl	_	_
9	atingir	atingir	VERB	_	VerbForm=Inf	8	xcomp	_	_
10	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	metro	metro	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	espessura	espessura	NOUN	_	Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Estes	este	DET	_	Gender=Masc|Number=Plur|PronType=Dem	2	det	_	_
2	corpos	corpo	NOUN	_	Gender=Masc|Number=Plur	4	nsubj:pass	_	_
3	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	magnetizados	magnetizado	ADJ	_	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	provavelmente	provavelmente	ADV	_	_	7	advmod	_	_
7	associados	associar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	4	conj	_	_
8	a	a	ADP	_	_	10	case	_	_
9	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	dutos	duto	NOUN	_	Gender=Masc|Number=Plur	7	obl:arg	_	_
11	vulcânicos	vulcânico	ADJ	_	Gender=Masc|Number=Plur	10	amod	_	_
12	que	que	PRON	_	Gender=Masc|Number=Plur|PronType=Rel	13	nsubj	_	_
13	alimentaram	alimentar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	acl:relcl	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	complexo	complexo	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	_
16	alcalino	alcalino	ADJ	_	Gender=Masc|Number=Sing	15	amod	_	SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


