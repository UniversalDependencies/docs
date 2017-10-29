---
layout: base
title:  'Statistics of aux in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="es_pud-dep-aux-pass.html">aux:pass</a></tt>.

375 nodes (2%) are attached to their parents as `aux`.

374 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34133333333333.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (353; 94% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (12; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Anteriormente	_	ADV	RB	_	6	advmod	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	solo	_	ADV	RB	_	4	advmod	_	_
4	blogueros	_	NOUN	NN	Gender=Masc|Number=Plur	6	nsubj	_	_
5	habían	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	6	aux	_	_
6	visto	_	VERB	VBN	_	0	root	_	_
7	los	_	DET	DT	Gender=Masc|Number=Plur	8	det	_	_
8	jets	_	NOUN	NN	Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
9	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	No	_	ADV	RB	Polarity=Neg	3	advmod	_	_
2	se	_	PRON	SE	Number=Sing|Person=3	3	compound:prt	_	_
3	sabe	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
4	de	_	ADP	IN	_	6	case	_	_
5	que	_	DET	WDT	Gender=Masc|Number=Sing	6	det	_	_
6	modo	_	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	_
7	han	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	9	aux	_	_
8	trabajado	_	AUX	VBN	_	9	cop	_	_
9	juntos	_	ADJ	JJ	Gender=Masc|Number=Plur	3	csubj:pass	_	_
10	ambos	_	DET	DT	Gender=Masc|Number=Plur	11	det	_	_
11	dramaturgos	_	NOUN	NN	Gender=Masc|Number=Plur	9	nsubj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Danevirke	_	PROPN	NNP	Number=Sing	5	nsubj	_	_
2	se	_	PRON	SE	Number=Sing|Person=3	5	compound:prt	_	_
3	ha	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	5	aux	_	_
4	mantenido	_	AUX	VBN	_	5	cop	_	_
5	parte	_	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
6	de	_	ADP	IN	_	7	case	_	_
7	Alemania	_	PROPN	NNP	Number=Sing	5	nmod	_	_
8	desde	_	ADP	IN	_	9	case	_	_
9	entonces	_	ADV	RB	_	5	xcomp	_	SpaceAfter=No
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


