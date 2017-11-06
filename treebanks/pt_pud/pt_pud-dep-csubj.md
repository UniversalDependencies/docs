---
layout: base
title:  'Statistics of csubj in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="pt_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

28 nodes (0%) are attached to their parents as `csubj`.

22 instances of `csubj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (16; 57% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (7; 25% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	É	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
2	justo	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
3	dizer	_	VERB	VB	_	2	csubj	_	_
4	que	_	ADP	IN	_	7	mark	_	_
5	Rocco	_	PROPN	NNP	Gender=Masc|Number=Sing	7	nsubj	_	_
6	Catalano	_	PROPN	NNP	Gender=Masc|Number=Sing	5	flat:name	_	_
7	trabalha	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	ccomp	_	SpaceAfter=No
8	,	_	PUNCT	,	_	9	punct	_	_
9	vive	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
10	e	_	CCONJ	CC	_	11	cc	_	_
11	respira	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
12	retro	_	NOUN	NN	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
13	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 csubj	color:blue
1	Em	em	ADP	INDT	_	3	case	_	_
2	este	este	DET	_	Gender=Masc|Number=Sing	3	det	_	_
3	contexto	_	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	fazer	_	VERB	VB	_	10	csubj	_	_
6	campanha	_	NOUN	NN	Gender=Fem|Number=Sing	5	obj	_	_
7	contra	_	ADP	IN	_	9	case	_	_
8	as	_	DET	DT	Gender=Fem|Number=Plur	9	det	_	_
9	negociações	_	NOUN	NN	Gender=Fem|Number=Plur	5	obl	_	_
10	faz	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
11	sentido	_	NOUN	NN	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	É	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
2	o	_	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	sonho	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
4	de	de	ADP	_	_	5	case	_	_
5	ele	ele	PRON	INP	Gender=Masc|Number=Sing|Person=3	3	obj	_	_
6	terminar	_	VERB	VB	_	3	csubj	_	_
7	a	_	DET	PDT	Gender=Fem|Number=Sing	9	det:predet	_	_
8	sua	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	9	det	_	_
9	carreira	_	NOUN	NN	Gender=Fem|Number=Sing	6	obj	_	_
10	aqui	_	ADV	RB	_	6	advmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


