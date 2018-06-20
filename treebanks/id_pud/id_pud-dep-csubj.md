---
layout: base
title:  'Statistics of csubj in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="id_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.07142857142857.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (4; 29% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Mengakhiri	_	NOUN	NN	_	7	csubj	_	SpaceAfter=No
2	karier	_	NOUN	NN	_	1	obj	_	SpaceAfter=No
3	nya	_	PRON	PRP$	_	2	nmod:poss	_	_
4	di	_	ADP	IN	_	5	case	_	_
5	sini	_	PRON	PRD	_	1	nmod	_	_
6	adalah	_	AUX	VC	_	7	cop	_	_
7	mimpi	_	NOUN	NN	_	0	root	_	SpaceAfter=No
8	nya	_	PRON	PRP$	_	7	nmod:poss	_	SpaceAfter=No
9	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 csubj	color:blue
1	Para	_	DET	DT	_	2	det	_	_
2	peneliti	_	ADJ	JJ	_	3	nsubj	_	_
3	mengatakan	_	NOUN	NN	_	0	root	_	SpaceAfter=No
4	menganalisis	_	NOUN	NN	_	8	csubj	_	_
5	DNA	_	NOUN	NN	_	4	obj	_	_
6	tumor	_	NOUN	NN	_	5	compound	_	_
7	dapat	_	ADV	RB	_	8	aux	_	_
8	membantu	_	VERB	VV	_	3	ccomp	_	_
9	menjelaskan	_	ADJ	JJ	_	8	xcomp	_	SpaceAfter=No
10	penyebab	_	NOUN	NN	_	9	obj	_	_
11	dasar	_	NOUN	NN	_	10	compound	_	_
12	kanker	_	NOUN	NN	_	10	compound	_	_
13	lain	_	ADJ	JJ	_	12	amod	_	SpaceAfter=No
14	.	_	PUNCT	.	_	3	punct	_	_

~~~


