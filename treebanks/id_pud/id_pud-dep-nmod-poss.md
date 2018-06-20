---
layout: base
title:  'Statistics of nmod:poss in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-nmod.html">nmod</a></tt>.

297 nodes (1%) are attached to their parents as `nmod:poss`.

294 instances of `nmod:poss` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51178451178451.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (244; 82% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (28; 9% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (14; 5% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:poss	color:blue
1	Mungkin	_	ADV	RB	_	6	advmod	_	_
2	kode	_	NOUN	NN	_	6	nsubj	_	_
3	berpakaian	_	VERB	VV	_	2	compound:n	_	SpaceAfter=No
4	nya	_	PRON	PRP$	_	2	nmod:poss	_	_
5	terlalu	_	VERB	VV	_	6	advmod	_	_
6	sesak	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
7	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod:poss	color:blue
1	Pengeluaran	_	VERB	VV	_	4	nsubj:pass	_	SpaceAfter=No
2	baru	_	ADJ	JJ	_	1	amod	_	_
3	ini	_	DET	DT	_	1	det	_	_
4	dipasok	_	VERB	VV	_	0	root	_	_
5	oleh	_	ADP	IN	_	6	case	_	_
6	rekening	_	NOUN	NN	_	4	obl	_	_
7	bank	_	NOUN	NN	_	6	compound	_	_
8	gemuk	_	ADJ	JJ	_	6	amod	_	_
9	Clinton	_	PROPN	NNP	_	6	nmod:poss	_	SpaceAfter=No
10	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	Kepentingan	_	ADJ	JJ	_	3	nsubj	_	SpaceAfter=No
2	nya	_	PRON	PRP$	_	1	nmod:poss	_	_
3	terletak	_	NOUN	NN	_	0	root	_	_
4	dalam	_	ADP	IN	_	6	case	_	_
5	dua	_	NUM	CD	_	6	nummod	_	_
6	fakta	_	NOUN	NN	_	3	nmod	_	SpaceAfter=No|ToDo=nmod
7	.	_	PUNCT	.	_	3	punct	_	_

~~~


