---
layout: base
title:  'Statistics of csubj in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `csubj`

This relation is universal.

336 nodes (0%) are attached to their parents as `csubj`.

259 instances of `csubj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.38392857142857.

The following 17 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (138; 41% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (109; 32% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (43; 13% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (19; 6% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	Seria	ser	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	2	cop	_	_
2	bom	bom	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
3	grifar	grifar	VERB	_	VerbForm=Inf	2	csubj	_	_
4	aí	aí	ADV	_	_	3	advmod	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	todos	todo	PRON	_	Gender=Masc|Number=Plur|PronType=Tot	3	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	Quem	quem	PRON	_	Number=Sing|PronType=Rel	2	nsubj	_	_
2	quiser	querer	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	csubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	vai	ir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	em	em	ADP	_	_	6	case	_	_
6	excursão	excursão	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
7	até	até	ADP	_	_	9	case	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	resort	resort	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
10	local	local	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	Casa	Casa	PROPN	_	Gender=Masc|Number=Sing	9	appos	_	_
13	de	de	ADP	_	_	14	case	_	_
14	Campo	Campo	PROPN	_	Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 csubj	color:blue
1	Parar	parar	VERB	_	VerbForm=Inf	9	csubj	_	_
2	esse	esse	DET	_	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	ataque	ataque	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	_
4	em	em	ADP	_	_	6	case	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	bloqueio	bloqueio	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	missão	missão	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
10	quase	quase	ADV	_	_	11	advmod	_	_
11	impossível	impossível	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


