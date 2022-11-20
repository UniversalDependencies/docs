---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `xcomp`

This relation is universal.

2225 nodes (1%) are attached to their parents as `xcomp`.

2221 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1685393258427.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1411; 63% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (447; 20% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (313; 14% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (39; 2% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Isto	isto	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	4	nsubj:pass	_	_
2	pode	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ser	ser	AUX	_	VerbForm=Inf	4	aux:pass	_	_
4	observado	observar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	2	xcomp	_	_
5	em	em	ADP	_	_	7	case	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Gráfico	gráfico	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
8	13	13	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	Portanto	portanto	ADV	_	_	5	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	fluido	fluido	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
5	apresenta	apresentar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Se=pv
6	se	se	PRON	_	_	5	expl:pv	_	_
7	como	como	ADP	_	_	8	case	_	_
8	fluido	fluido	NOUN	_	Gender=Masc|Number=Sing	5	xcomp	_	_
9	pseudoplástico	pseudoplástico	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	Estas	este	DET	_	Gender=Fem|Number=Plur|PronType=Dem	2	det	_	_
2	relações	relação	NOUN	_	Gender=Fem|Number=Plur	4	nsubj	_	_
3	constitutivas	constitutivo	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	podem	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ser	ser	AUX	_	VerbForm=Inf	7	cop	_	_
6	bastante	bastante	ADV	_	_	7	advmod	_	_
7	complicadas	complicado	ADJ	_	Gender=Fem|Number=Plur	4	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


