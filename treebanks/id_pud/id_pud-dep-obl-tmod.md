---
layout: base
title:  'Statistics of obl:tmod in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="id_pud-dep-obl-poss.html">obl:poss</a></tt>.

169 nodes (1%) are attached to their parents as `obl:tmod`.

134 instances of `obl:tmod` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.59763313609467.

The following 13 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (45; 27% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (43; 25% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (41; 24% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (14; 8% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="id_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:tmod	color:blue
1	Periode	_	NOUN	NN	_	7	nsubj	_	_
2	tunggu	_	VERB	VV	_	1	compound:n	_	_
3	saat	_	NOUN	NN	_	1	obl:tmod	_	_
4	ini	_	DET	DT	_	3	det	_	_
5	adalah	_	AUX	VC	_	7	cop	_	_
6	delapan	_	NUM	CD	_	7	nummod	_	_
7	minggu	_	NOUN	NN	_	0	root	_	SpaceAfter=No
8	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:tmod	color:blue
1	Raja	_	NOUN	NN	_	5	nsubj	_	_
2	pertama	_	ADJ	JJ	_	1	amod	_	SpaceAfter=No
3	nya	_	PRON	PRP$	_	1	nmod:poss	_	_
4	adalah	_	AUX	VC	_	5	cop	_	_
5	Mojmír	_	PROPN	NNP	_	0	root	_	_
6	I	_	NUM	CD	_	5	nummod	_	Proper=True
7	(	_	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	berkuasa	_	NOUN	NN	_	5	parataxis	_	_
9	830	_	NUM	CD	_	8	obl:tmod	_	SpaceAfter=No
10	–	_	PUNCT	HYPH	_	11	punct	_	SpaceAfter=No
11	846	_	NUM	CD	_	9	nummod	_	SpaceAfter=No
12	)	_	PUNCT	)	_	8	punct	_	SpaceAfter=No
13	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 obl:tmod	color:blue
1	Hari	_	NOUN	NN	_	6	obl:tmod	_	_
2	ketiga	_	NUM	CD	_	1	amod	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	saya	_	PRON	PRP	_	6	nsubj	_	_
5	sudah	_	ADV	RB	_	6	aux	_	_
6	kembali	_	VERB	VV	_	0	root	_	_
7	ke	_	ADP	IN	_	8	case	_	_
8	Emicro	_	PROPN	NNP	_	6	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	6	punct	_	_

~~~


