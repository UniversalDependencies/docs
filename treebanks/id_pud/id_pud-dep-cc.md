---
layout: base
title:  'Statistics of cc in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="id_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

540 nodes (3%) are attached to their parents as `cc`.

537 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97407407407407.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (232; 43% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (157; 29% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (63; 12% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (62; 11% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (9; 2% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (9; 2% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Skema	_	NOUN	NN	_	3	nsubj	_	_
2	ini	_	DET	DT	_	1	det	_	_
3	menghasilkan	_	NOUN	NN	_	0	root	_	SpaceAfter=No
4	uang	_	NOUN	NN	_	3	obj	_	_
5	melalui	_	ADP	IN	_	6	case	_	_
6	sponsor	_	NOUN	NN	_	3	nmod	_	ToDo=nmod
7	dan	_	CCONJ	CC	_	8	cc	_	_
8	iklan	_	NOUN	NN	_	6	conj	_	SpaceAfter=No
9	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cc	color:blue
1	Tidak	_	ADV	RB	Polarity=Neg	2	advmod	_	_
2	ada	_	VERB	VV	_	0	root	_	_
3	parade	_	NOUN	NN	_	2	nsubj	_	_
4	dan	_	CCONJ	CC	_	7	cc	_	_
5	tidak	_	ADV	RB	Polarity=Neg	7	advmod	_	_
6	pernah	_	ADV	RB	_	7	aux	_	_
7	ada	_	VERB	VV	_	2	conj	_	SpaceAfter=No
8	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 cc	color:blue
1	Masuk	_	VERB	VV	_	0	root	_	_
2	ke	_	ADP	IN	_	3	case	_	_
3	2016	_	NUM	CD	_	1	obl	_	_
4	dan	_	CCONJ	CC	_	8	cc	_	_
5	hal	_	NOUN	NN	_	8	nsubj:pass	_	_
6	ini	_	DET	DT	_	5	det	_	_
7	semakin	_	ADV	RB	_	8	advmod	_	_
8	layak	_	ADJ	JJ	_	1	conj	_	_
9	diperhatikan	_	VERB	VV	_	8	xcomp	_	SpaceAfter=No
10	.	_	PUNCT	.	_	1	punct	_	_

~~~


