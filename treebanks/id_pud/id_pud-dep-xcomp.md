---
layout: base
title:  'Statistics of xcomp in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `xcomp`

This relation is universal.

191 nodes (1%) are attached to their parents as `xcomp`.

191 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.59162303664921.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (47; 25% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (35; 18% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (30; 16% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (22; 12% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (15; 8% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (9; 5% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (8; 4% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="id_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Ia	_	PRON	PRP	_	2	nsubj	_	_
2	berbicara	_	VERB	VV	_	0	root	_	_
3	mendukung	_	VERB	VV	_	2	xcomp	_	_
4	penyiksaan	_	NOUN	NN	_	3	obj	_	SpaceAfter=No
5	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	ia	_	PRON	PRP	_	4	nsubj:pass	_	_
2	juga	_	ADV	RB	_	4	aux	_	_
3	telah	_	ADV	RB	_	4	aux	_	_
4	didakwa	_	NOUN	NN	_	0	root	_	_
5	mencoba	_	VERB	VV	_	4	xcomp	_	_
6	membunuh	_	VERB	VV	_	5	xcomp	_	_
7	puteri	_	NOUN	NN	_	6	obj	_	SpaceAfter=No
8	nya	_	PRON	PRP$	_	7	nmod:poss	_	_
9	yang	_	ADP	IN	_	10	mark	_	_
10	berusia	_	NOUN	NN	_	7	acl:relcl	_	_
11	dua	_	NUM	CD	_	12	nummod	_	_
12	tahun	_	NOUN	NN	_	10	obl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Philip	_	PROPN	NNP	_	3	nsubj	_	_
2	kemudian	_	ADV	RB	_	3	aux	_	_
3	bergerak	_	NOUN	NN	_	0	root	_	_
4	melawan	_	NOUN	NN	_	3	xcomp	_	_
5	musuh	_	NOUN	NN	Number=Plur	4	obj	_	SpaceAfter=No
6	-	_	PUNCT	HYPH	_	7	punct	_	SpaceAfter=No
7	musuh	_	NOUN	NN	_	5	compound:plur	_	SpaceAfter=No
8	nya	_	PRON	PRP$	_	5	nmod:poss	_	_
9	di	_	ADP	IN	_	10	case	_	_
10	selatan	_	NOUN	NN	_	5	nmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


