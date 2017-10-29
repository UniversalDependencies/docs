---
layout: base
title:  'Statistics of flat:name in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-flat.html">flat</a></tt>.

210 nodes (1%) are attached to their parents as `flat:name`.

208 instances of `flat:name` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13809523809524.

The following 9 pairs of parts of speech are connected with `flat:name`: <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (173; 82% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (18; 9% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (12; 6% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-X.html">X</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Durán	_	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	ejerce	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
3	de	_	ADP	IN	_	4	case	_	_
4	portavoz	_	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
5	y	_	CCONJ	CC	_	6	cc	_	_
6	Ángel	_	PROPN	NNP	Gender=Masc|Number=Sing	2	conj	_	orig_deprel=nsubj
7	Pintado	_	PROPN	NNP	Gender=Masc|Number=Sing	6	flat:name	_	_
8	de	_	ADP	IN	_	6	orphan	_	orig_deprel=obl
9	tesorero	_	NOUN	NN	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Habló	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
2	para	_	ADP	IN	_	3	case	_	_
3	CNN	_	PROPN	NNP	Number=Sing	1	obl	_	_
4	Style	_	NOUN	NN	Number=Sing	3	flat:name	_	Proper=True
5	acerca	_	ADV	RB	_	8	case	_	_
6	de	_	ADP	IN	_	5	fixed	_	_
7	la	_	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
8	experiencia	_	NOUN	NN	Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 flat:name	color:blue
1	On	_	ADP	IN	_	11	nsubj	_	Proper=True
2	a	_	DET	DT	Number=Sing	3	det	_	Proper=True
3	Wing	_	NOUN	NN	Number=Sing	1	obj	_	Proper=True
4	and	_	CCONJ	CC	_	6	cc	_	Proper=True
5	a	_	DET	DT	Number=Sing	6	det	_	Proper=True
6	Prayer	_	NOUN	NN	Number=Sing	3	conj	_	Proper=True
7	(	_	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	1992	_	NUM	CD	Gender=Masc	1	appos	_	SpaceAfter=No
9	)	_	PUNCT	)	_	8	punct	_	_
10	lo	_	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	obj	_	_
11	reunió	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	SpaceAfter=No
12	,	_	PUNCT	,	_	15	punct	_	_
13	en	_	ADP	IN	_	15	case	_	_
14	varias	_	DET	DT	Gender=Fem|Number=Plur	15	det	_	_
15	pistas	_	NOUN	NN	Gender=Fem|Number=Plur	11	obl	_	SpaceAfter=No
16	,	_	PUNCT	,	_	19	punct	_	_
17	con	_	ADP	IN	_	19	case	_	_
18	su	_	PRON	DTP$	Gender=Masc|Number=Sing|Person=3	19	det	_	_
19	compañero	_	NOUN	NN	Gender=Masc|Number=Sing	11	obl	_	_
20	Egan	_	PROPN	NNP	Gender=Masc|Number=Sing	19	appos	_	_
21	de	_	ADP	IN	_	22	case	_	_
22	Stealers	_	NOUN	NN	Number=Plur	19	nmod	_	Proper=True
23	Wheel	_	NOUN	NN	Number=Sing	22	flat:name	_	Proper=True|SpaceAfter=No
24	.	_	PUNCT	.	_	11	punct	_	_

~~~


