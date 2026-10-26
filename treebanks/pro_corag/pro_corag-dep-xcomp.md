---
layout: base
title:  'Statistics of xcomp in UD_Old_Occitan-CorAG'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CorAG: Relations: `xcomp`

This relation is universal.

1112 nodes (2%) are attached to their parents as `xcomp`.

1032 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78507194244604.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (1009; 91% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (52; 5% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (27; 2% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-ADV.html">ADV</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	e	_	CCONJ	_	_	11	cc	_	_
2	si-	_	SCONJ	_	_	4	mark	_	_
3	-no	_	ADV	_	Polarity=Neg	4	advmod	_	_
4	pod	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	11	advcl	_	_
5	lui	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	aver	_	VERB	_	VerbForm=Inf	4	xcomp	_	_
7	a	_	ADP	_	_	8	case	_	_
8	dret	_	NOUN	_	_	6	obl	_	_
9	ed	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	medix	_	ADJ	_	_	9	amod	_	_
11	fase	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
12	so	_	PRON	_	Gender=Neut|Number=Sing|PronType=Dem	11	obj	_	_
13	que	_	PRON	_	PronType=Rel	16	obj	_	_
14	ed	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
15	deu	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	12	acl:relcl	_	_
16	far	_	VERB	_	VerbForm=Inf	15	xcomp	_	SpaceAfter=No
17	.	_	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	moltz	_	DET	_	_	2	det	_	_
2	prioratz	_	NOUN	_	_	5	nsubj	_	_
3	et	_	CCONJ	_	_	4	cc	_	_
4	capellanias	_	NOUN	_	_	2	conj	_	_
5	remanan	_	VERB	_	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
6	ja	_	ADV	_	_	7	advmod	_	_
7	desertz	_	ADJ	_	_	5	xcomp	_	SpaceAfter=No
8	,	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	et	_	CCONJ	_	_	2	cc	_	_
2	anan	_	VERB	_	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
3	lo	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
4	coelher	_	VERB	_	VerbForm=Inf	2	xcomp	_	_
5	et	_	CCONJ	_	_	6	cc	_	_
6	fen	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	2	conj	_	_
7	lo	_	DET	_	_	6	obj	_	_
8	senhor	_	NOUN	_	_	6	xcomp	_	_
9	dus	_	NUM	_	_	10	nummod	_	_
10	antz	_	NOUN	_	_	6	obl	_	SpaceAfter=No
11	.	_	PUNCT	_	_	2	punct	_	_

~~~


