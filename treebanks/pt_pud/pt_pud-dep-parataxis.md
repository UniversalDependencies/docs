---
layout: base
title:  'Statistics of parataxis in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `parataxis`

This relation is universal.

102 nodes (0%) are attached to their parents as `parataxis`.

102 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.9411764705882.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (65; 64% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (11; 11% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (7; 7% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 parataxis	color:blue
1	A	o	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	voz	voz	NOUN	NN	Gender=Fem|Number=Sing	6	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	ela	ela	PRON	INP	Gender=Fem|Number=Sing|Person=3	2	obj	_	_
5	literalmente	literalmente	ADV	RB	_	6	advmod	_	_
6	deu	dar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	uma	um	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
8	volta	volta	NOUN	NN	Gender=Fem|Number=Sing	6	obj	_	_
9	a	a	ADP	INDT	_	11	case	_	_
10	o	o	DET	_	Gender=Masc|Number=Sing	11	det	_	_
11	mundo	mundo	NOUN	NN	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	,	,	PUNCT	,	_	13	punct	_	_
13	disse	dizer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	parataxis	_	_
14	Leive	Leive	PROPN	NNP	Gender=Masc|Number=Sing	13	nsubj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	ETA	ETA	PROPN	NNP	Gender=Masc|Number=Sing	4	nsubj	_	_
2	está	estar	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	saída	saída	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	9	punct	_	_
6	o	o	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	contigente	_	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj	_	_
8	Francês	francês	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	_
9	revelou	revelar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Está	estar	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
2	claro	claro	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	:	:	PUNCT	:	_	6	punct	_	_
4	Homens	homem	NOUN	NN	Gender=Masc|Number=Plur	6	nsubj	_	_
5	poderiam	_	AUX	VBC	Mood=Cnd|Number=Plur|Person=3	6	aux	_	_
6	ter	_	VERB	VB	_	2	parataxis	_	_
7	mais	_	ADJ	JJR	Gender=Fem|Number=Sing	8	amod	_	_
8	responsabilidade	responsabilidade	NOUN	NN	Gender=Fem|Number=Sing	6	obj	_	_
9	em	em	ADP	IN	_	10	case	_	_
10	questões	questão	NOUN	NN	Gender=Fem|Number=Plur	6	obl	_	_
11	de	de	ADP	IN	_	12	case	_	_
12	contracepção	contracepção	NOUN	NN	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


