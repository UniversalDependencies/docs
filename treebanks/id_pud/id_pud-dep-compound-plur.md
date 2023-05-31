---
layout: base
title:  'Statistics of compound:plur in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `compound:plur`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-compound.html">compound</a></tt>.
There are also 3 other language-specific subtypes of `compound`: <tt><a href="id_pud-dep-compound-a.html">compound:a</a></tt>, <tt><a href="id_pud-dep-compound-n.html">compound:n</a></tt>, <tt><a href="id_pud-dep-compound-v.html">compound:v</a></tt>.

168 nodes (1%) are attached to their parents as `compound:plur`.

168 instances of `compound:plur` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.99404761904762.

The following 5 pairs of parts of speech are connected with `compound:plur`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (144; 86% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (10; 6% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (5; 3% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 compound:plur	color:blue
1	Bukan	_	ADV	RB	Polarity=Neg	2	advmod	_	_
2	itu	_	PRON	PRD	_	0	root	_	_
3	yang	_	PRON	PRP	_	2	nsubj	_	_
4	kita	_	PRON	PRP	_	5	nsubj	_	_
5	butuhkan	_	VERB	VV	_	3	acl:relcl	_	SpaceAfter=No
6	di	_	ADP	IN	_	7	case	_	_
7	negara	_	NOUN	NN	_	5	obl	_	_
8	ini	_	DET	DT	_	7	det	_	SpaceAfter=No
9	,	_	PUNCT	,	_	10	punct	_	_
10	saudara	_	NOUN	NN	Number=Plur	2	vocative	_	SpaceAfter=No
11	-	_	PUNCT	HYPH	_	12	punct	_	SpaceAfter=No
12	saudara	_	NOUN	NN	_	10	compound:plur	_	SpaceAfter=No
13	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 compound:plur	color:blue
1	Saya	_	PRON	PRP	_	4	nsubj	_	_
2	tidak	_	ADV	RB	Polarity=Neg	4	advmod	_	_
3	sekadar	_	NOUN	NN	_	4	aux	_	_
4	menyebut	_	VERB	VV	_	0	root	_	SpaceAfter=No
5	nya	_	PRON	PRP	_	4	iobj	_	_
6	binatang	_	NOUN	NN	_	4	obj	_	_
7	dengan	_	ADP	IN	_	9	mark	_	_
8	tidak	_	ADV	RB	Polarity=Neg	9	advmod	_	_
9	sungguh	_	ADJ	JJ	_	4	advcl	_	SpaceAfter=No
10	-	_	PUNCT	HYPH	_	11	punct	_	SpaceAfter=No
11	sungguh	_	ADJ	JJ	_	9	compound:plur	_	SpaceAfter=No
12	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound:plur	color:blue
1	Simon	_	PROPN	NNP	_	4	nsubj	_	_
2	Krätschmer	_	PROPN	NNP	_	1	flat:name	_	_
3	me	_	PART	PFV	_	4	advmod	_	SpaceAfter=No|ToDo=affix
4	raba	_	VERB	VV	_	0	root	_	SpaceAfter=No
5	-	_	PUNCT	HYPH	_	6	punct	_	SpaceAfter=No
6	raba	_	VERB	VV	_	4	compound:plur	_	_
7	sendiri	_	NOUN	NN	_	4	aux	_	_
8	di	_	ADP	IN	_	9	case	_	_
9	barak	_	NOUN	NN	_	4	obl	_	_
10	yang	_	ADP	IN	_	12	mark	_	_
11	sudah	_	ADV	RB	_	12	advmod	_	_
12	bobrok	_	ADJ	JJ	_	9	acl:relcl	_	_
13	dan	_	CCONJ	CC	_	14	cc	_	_
14	seram	_	ADJ	JJ	_	12	conj	_	_
15	itu	_	DET	DT	_	9	det	_	SpaceAfter=No
16	.	_	PUNCT	.	_	4	punct	_	_

~~~


