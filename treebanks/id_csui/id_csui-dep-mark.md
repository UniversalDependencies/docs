---
layout: base
title:  'Statistics of mark in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `mark`

This relation is universal.

1117 nodes (4%) are attached to their parents as `mark`.

1112 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16472694717995.

The following 9 pairs of parts of speech are connected with `mark`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (833; 75% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (151; 14% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (83; 7% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (20; 2% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (19; 2% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="id_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	Kera	kera	NOUN	NN	Number=Sing	0	root	_	_
2	untuk	untuk	SCONJ	IN	_	3	mark	_	_
3	amankan	amankan	VERB	VB	Voice=Act	1	acl	_	_
4	pesta	pesta	NOUN	NN	Number=Sing	3	obj	_	_
5	olahraga	olahraga	NOUN	NN	Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	Kami	kami	PRON	PRP	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	kira	kira	VERB	VB	Voice=Act	0	root	_	_
3	itu	itu	DET	DT	PronType=Dem	5	det	_	SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	_
5	target	target	NOUN	NN	Number=Sing	2	obl	_	_
6	yang	yang	SCONJ	IN	_	7	mark	_	_
7	optimistis	optimistis	ADJ	JJ	_	5	ccomp	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	"	"	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	ini	ini	PRON	PRP	PronType=Dem	5	obl	_	_
3	lah	lah	PART	RP	_	2	advmod:emph	_	_
4	yang	yang	SCONJ	IN	_	5	mark	_	_
5	terjadi	jadi	VERB	VB	Voice=Pass	0	root	_	_
6	kalau	kalau	SCONJ	IN	_	7	mark	_	_
7	siaran	siar	NOUN	NN	Number=Sing	5	advcl	_	_
8	TV	TV	NOUN	NN	Number=Sing	7	nmod	_	_
9	langsung	langsung	ADJ	JJ	_	7	amod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	SpaceAfter=No
11	"	"	PUNCT	''	_	5	punct	_	_
12	kata	kata	VERB	VB	Voice=Act	5	parataxis	_	_
13	Sarah	Sarah	PROPN	NNP	_	12	nsubj	_	_
14	Murdoch	Murdoch	PROPN	NNP	_	13	flat:name	_	SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	_	_

~~~


