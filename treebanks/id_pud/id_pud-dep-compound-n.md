---
layout: base
title:  'Statistics of compound:n in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `compound:n`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-compound.html">compound</a></tt>.
There are also 3 other language-specific subtypes of `compound`: <tt><a href="id_pud-dep-compound-a.html">compound:a</a></tt>, <tt><a href="id_pud-dep-compound-plur.html">compound:plur</a></tt>, <tt><a href="id_pud-dep-compound-v.html">compound:v</a></tt>.

69 nodes (0%) are attached to their parents as `compound:n`.

69 instances of `compound:n` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14492753623188.

The following 10 pairs of parts of speech are connected with `compound:n`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (21; 30% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (15; 22% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (12; 17% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (8; 12% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:n	color:blue
1	Mungkin	_	ADV	RB	_	6	advmod	_	_
2	kode	_	NOUN	NN	_	6	nsubj	_	_
3	berpakaian	_	VERB	VV	_	2	compound:n	_	SpaceAfter=No
4	nya	_	PRON	PRP$	_	2	nmod:poss	_	_
5	terlalu	_	VERB	VV	_	6	advmod	_	_
6	sesak	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
7	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:n	color:blue
1	Sudah	_	ADV	RB	_	2	advmod	_	_
2	jelas	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
3	:	_	PUNCT	:	_	7	punct	_	_
4	Manusia	_	NOUN	NN	_	7	nsubj	_	Proper=True
5	bisa	_	ADV	RB	_	7	aux	_	_
6	lebih	_	ADV	RB	_	7	aux	_	_
7	bertanggung	_	VERB	VV	_	2	csubj	_	_
8	jawab	_	NOUN	NN	_	7	compound:n	_	_
9	dalam	_	ADP	IN	_	10	case	_	_
10	hal	_	NOUN	NN	_	7	obl	_	_
11	kontrasepsi	_	NOUN	NN	_	10	compound	_	SpaceAfter=No
12	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound:n	color:blue
1	Orang	_	NOUN	NN	_	3	nsubj	_	_
2	tidak	_	ADV	RB	Polarity=Neg	3	advmod	_	_
3	tahu	_	VERB	VV	_	0	root	_	_
4	dengan	_	ADP	IN	_	5	case	_	_
5	cara	_	NOUN	NN	_	12	nmod	_	ToDo=nmod
6	apa	_	PRON	WP	_	5	compound	_	_
7	kedua	_	NUM	CD	_	8	nummod	_	_
8	penulis	_	VERB	VV	_	12	nsubj	_	_
9	drama	_	NOUN	NN	_	8	compound	_	_
10	itu	_	DET	DT	_	8	det	_	_
11	telah	_	ADV	RB	_	12	aux	_	_
12	bekerja	_	NOUN	NN	_	3	ccomp	_	_
13	sama	_	ADJ	JJ	_	12	compound:n	_	SpaceAfter=No
14	.	_	PUNCT	.	_	3	punct	_	_

~~~


