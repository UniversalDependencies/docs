---
layout: base
title:  'Statistics of ccomp in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `ccomp`

This relation is universal.

119 nodes (1%) are attached to their parents as `ccomp`.

119 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.7563025210084.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (97; 82% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (13; 11% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	É	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
2	justo	justo	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
3	dizer	_	VERB	VB	_	2	csubj	_	_
4	que	que	SCONJ	IN	_	7	mark	_	_
5	Rocco	Rocco	PROPN	NNP	Gender=Masc|Number=Sing	7	nsubj	_	_
6	Catalano	Catalano	PROPN	NNP	Gender=Masc|Number=Sing	5	flat:name	_	_
7	trabalha	trabalhar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	_	_
9	vive	viver	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	respira	respirar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
12	retro	retro	NOUN	NN	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Vamos	ir	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	3	aux	_	_
2	simplesmente	simplesmente	ADV	RB	_	3	advmod	_	_
3	dizer	_	VERB	VB	_	0	root	_	_
4	que	que	SCONJ	IN	_	7	mark	_	_
5	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
6	está	estar	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	cop	_	_
7	errado	errado	ADJ	JJ	Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 ccomp	color:blue
1	Vega	Vega	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	sugeriu	sugerir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	que	que	SCONJ	IN	_	14	mark	_	SpaceAfter=No
4	,	,	PUNCT	,	_	10	punct	_	_
5	por	por	ADP	IN	_	10	case	_	_
6	causa	causa	NOUN	NN	Gender=Fem|Number=Sing	5	fixed	_	_
7	de	de	ADP	INDT	_	5	fixed	_	_
8	a	o	DET	_	Gender=Fem|Number=Sing	10	det	_	_
9	sua	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	10	det	_	_
10	idade	idade	NOUN	NN	Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No|ToDo=nmod
11	,	,	PUNCT	,	_	10	punct	_	_
12	muitos	muito	NOUN	NN	Gender=Masc|Number=Plur	14	nsubj	_	_
13	seriam	_	AUX	VBC	Mood=Cnd|Number=Plur|Person=3	14	cop	_	_
14	desconhecedores	desconhecedor	NOUN	NN	Gender=Masc|Number=Plur	2	ccomp	_	_
15	de	de	ADP	INDT	_	18	case	_	_
16	a	o	DET	_	Gender=Fem|Number=Sing	18	det	_	_
17	sua	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	18	det	_	_
18	história	história	NOUN	NN	Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No|ToDo=nmod
19	.	.	PUNCT	.	_	2	punct	_	_

~~~


