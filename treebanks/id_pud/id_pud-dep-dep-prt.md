---
layout: base
title:  'Statistics of dep:prt in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `dep:prt`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-dep.html">dep</a></tt>.

49 nodes (0%) are attached to their parents as `dep:prt`.

49 instances of `dep:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12244897959184.

The following 6 pairs of parts of speech are connected with `dep:prt`: <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (29; 59% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (10; 20% instances), <tt><a href="id_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (6; 12% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:prt	color:blue
1	Itu	_	PRON	PRD	_	3	nsubj	_	SpaceAfter=No
2	lah	_	PART	RP	_	1	dep:prt	_	_
3	yang	_	PRON	PRP	_	0	root	_	_
4	membuat	_	VERB	VV	_	3	acl:relcl	_	_
5	kami	_	PRON	PRP	_	7	nsubj	_	_
6	tetap	_	ADV	RB	_	7	aux	_	_
7	kembali	_	VERB	VV	_	4	ccomp	_	_
8	lagi	_	ADV	RB	_	7	aux	_	_
9	dan	_	CCONJ	CC	_	10	cc	_	_
10	lagi	_	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:prt	color:blue
1	Katakan	_	NOUN	NN	_	0	root	_	SpaceAfter=No
2	lah	_	PART	RP	_	1	dep:prt	_	_
3	dia	_	PRON	PRP	_	4	nsubj	_	_
4	salah	_	ADJ	JJ	_	1	ccomp	_	SpaceAfter=No
5	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep:prt	color:blue
1	Charles	_	PROPN	NNP	_	9	nsubj:pass	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	meski	_	ADP	IN	_	7	mark	_	SpaceAfter=No
4	pun	_	PART	RP	_	3	dep:prt	_	_
5	tindakan	_	NOUN	NN	_	7	nsubj	_	SpaceAfter=No
6	nya	_	PRON	PRP$	_	5	nmod:poss	_	_
7	keras	_	ADJ	JJ	_	9	advcl	_	SpaceAfter=No
8	,	_	PUNCT	,	_	7	punct	_	_
9	dipandang	_	NOUN	NN	_	0	root	_	_
10	sebagai	_	ADP	IN	_	11	case	_	_
11	penguasa	_	NOUN	NN	_	9	nmod	_	ToDo=nmod
12	yang	_	ADP	IN	_	13	mark	_	_
13	berempati	_	NOUN	NN	_	11	acl:relcl	_	_
14	terhadap	_	ADP	IN	_	15	case	_	_
15	kebutuhan	_	VERB	VV	_	13	nmod	_	SpaceAfter=No
16	Belanda	_	PROPN	NNP	_	15	compound	_	SpaceAfter=No
17	.	_	PUNCT	.	_	9	punct	_	_

~~~


