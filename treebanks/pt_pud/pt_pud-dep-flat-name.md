---
layout: base
title:  'Statistics of flat:name in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-flat.html">flat</a></tt>.

153 nodes (1%) are attached to their parents as `flat:name`.

153 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13725490196078.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (152; 99% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
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
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 flat:name	color:blue
1	O	o	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	encontro	encontro	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
3	foi	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	aux:pass	_	_
4	originalmente	originalmente	ADV	RB	_	5	advmod	_	_
5	marcado	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
6	para	para	ADP	IN	_	8	case	_	_
7	o	o	DET	DT	Gender=Masc|Number=Sing	8	det	_	_
8	Clube	Clube	PROPN	NN	Gender=Masc|Number=Sing	5	obl	_	_
9	Metropolitano	Metropolitano	PROPN	JJ	Gender=Masc|Number=Sing	8	flat:name	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	um	um	DET	_	Gender=Masc|Number=Sing	12	det	_	_
12	clube	clube	NOUN	_	Gender=Masc|Number=Sing	8	appos	_	_
13	privado	privado	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	Proper=True
14	de	de	ADP	IN	_	15	case	_	_
15	Washington	Washington	PROPN	NNP	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
16	,	,	PUNCT	,	_	19	punct	_	_
17	em	em	ADP	INDT	_	19	case	_	_
18	a	o	DET	_	Gender=Fem|Number=Sing	19	det	_	_
19	Rua	rua	NOUN	NN	Gender=Fem|Number=Sing	8	nmod	_	Proper=True
20	H	h	NOUN	NN	Gender=Masc|Number=Sing	19	flat:name	_	Proper=True|SpaceAfter=No
21	,	,	PUNCT	,	_	24	punct	_	_
22	a	_	ADP	IN	_	24	case	_	_
23	uns	_	DET	DT	Gender=Masc|Number=Plur	24	det	_	_
24	quarteirões	quarteirão	NOUN	NN	Gender=Masc|Number=Plur	8	nmod	_	_
25	de	de	ADP	IN	_	26	case	_	_
26	distância	distância	NOUN	NN	Gender=Fem|Number=Sing	24	nmod	_	SpaceAfter=No
27	.	.	PUNCT	.	_	5	punct	_	_

~~~


