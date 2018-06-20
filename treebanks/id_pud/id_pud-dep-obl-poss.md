---
layout: base
title:  'Statistics of obl:poss in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `obl:poss`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="id_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

57 nodes (0%) are attached to their parents as `obl:poss`.

57 instances of `obl:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35087719298246.

The following 4 pairs of parts of speech are connected with `obl:poss`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (42; 74% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (7; 12% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (4; 7% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (4; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:poss	color:blue
1	Ksatria	_	NOUN	NN	_	3	nsubj:pass	_	_
2	Lyvet	_	PROPN	NNP	_	1	compound	_	_
3	dilepaskan	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
4	dan	_	CCONJ	CC	_	7	cc	_	_
5	pengikut	_	VERB	VV	_	7	nsubj:pass	_	SpaceAfter=No
6	nya	_	PRON	PRP$	_	5	obl:poss	_	_
7	dimasukkan	_	VERB	VV	_	3	conj	_	SpaceAfter=No
8	ke	_	ADP	IN	_	10	case	_	_
9	dalam	_	NOUN	NN	_	8	fixed	_	_
10	Menara	_	NOUN	NN	_	7	obl	_	Proper=True|SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:poss	color:blue
1	Ini	_	PRON	PRD	_	4	nsubj	_	_
2	hampir	_	ADV	RB	_	4	aux	_	_
3	sepenuhnya	_	ADJ	JJ	_	4	aux	_	SpaceAfter=No
4	terlupakan	_	VERB	VV	_	0	root	_	SpaceAfter=No
5	hingga	_	ADP	IN	_	6	case	_	_
6	kematian	_	VERB	VV	_	4	obl	_	SpaceAfter=No
7	Smith	_	PROPN	NNP	_	6	obl:poss	_	SpaceAfter=No
8	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 obl:poss	color:blue
1	Afrika	_	PROPN	NNP	_	4	nsubj	_	_
2	Selatan	_	NOUN	NN	_	1	compound	_	Proper=True
3	hampir	_	ADV	RB	_	4	aux	_	_
4	berada	_	VERB	VV	_	0	root	_	_
5	dalam	_	ADP	IN	_	6	case	_	_
6	titik	_	NOUN	NN	_	4	obl	_	_
7	tidak	_	ADV	RB	Polarity=Neg	9	advmod	_	_
8	bisa	_	ADV	RB	_	9	aux	_	_
9	kembali	_	VERB	VV	_	6	ccomp	_	_
10	dan	_	CCONJ	CC	_	14	cc	_	_
11	kita	_	PRON	PRP	_	14	nsubj	_	_
12	harus	_	ADV	RB	_	14	aux	_	_
13	dapat	_	ADV	RB	_	14	aux	_	_
14	menyamai	_	ADJ	JJ	_	4	conj	_	SpaceAfter=No
15	keinginan	_	ADV	RB	_	14	obj	_	SpaceAfter=No
16	mereka	_	PRON	PRP$	_	15	obl:poss	_	SpaceAfter=No
17	.	_	PUNCT	.	_	4	punct	_	_

~~~


