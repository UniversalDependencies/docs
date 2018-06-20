---
layout: base
title:  'Statistics of cc:preconj in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-cc.html">cc</a></tt>.

6 nodes (0%) are attached to their parents as `cc:preconj`.

6 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83333333333333.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 33% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 17% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (1; 17% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 17% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Baik	_	CCONJ	CC	_	2	cc:preconj	_	_
2	waktu	_	NOUN	NN	_	6	nsubj:pass	_	_
3	dan	_	CCONJ	CC	_	4	cc	_	_
4	urutan	_	ADJ	JJ	_	2	conj	_	SpaceAfter=No
5	kejadian	_	VERB	VV	_	4	compound	_	SpaceAfter=No
6	dibahas	_	VERB	VV	_	0	root	_	_
7	dengan	_	ADP	IN	_	8	mark	_	_
8	mendalam	_	NOUN	NN	_	6	advcl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 cc:preconj	color:blue
1	Secara	_	ADP	IN	_	2	mark	_	_
2	khusus	_	ADJ	JJ	_	6	advcl	_	_
3	dalam	_	ADP	IN	_	5	case	_	_
4	beberapa	_	DET	DT	_	5	det	_	_
5	bagian	_	NOUN	NN	_	6	obl	_	SpaceAfter=No
6	membahas	_	VERB	VV	_	0	root	_	_
7	efek	_	NOUN	NN	_	6	obj	_	_
8	kemunduran	_	VERB	VV	_	7	compound	_	SpaceAfter=No
9	perang	_	NOUN	NN	_	8	compound	_	SpaceAfter=No
10	,	_	PUNCT	,	_	13	punct	_	_
11	baik	_	CCONJ	CC	_	13	cc:preconj	_	ToDo=ex-adp-child
12	secara	_	ADP	IN	_	13	case	_	_
13	sosial	_	ADJ	JJ	_	7	xcomp	_	_
14	maupun	_	CCONJ	CC	_	15	cc	_	_
15	budaya	_	NOUN	NN	_	13	conj	_	SpaceAfter=No
16	,	_	PUNCT	,	_	18	punct	_	_
17	terhadap	_	ADP	IN	_	18	case	_	_
18	kemanusiaan	_	NOUN	NN	_	7	nmod	_	SpaceAfter=No
19	itu	_	DET	DT	_	18	det	_	_
20	sendiri	_	NOUN	NN	_	18	compound	_	SpaceAfter=No
21	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc:preconj	color:blue
1	Ini	_	PRON	PRD	_	4	nsubj	_	_
2	tidak	_	ADV	RB	_	4	cc:preconj	_	_
3	saja	_	ADV	RB	_	2	fixed	_	_
4	berlaku	_	NOUN	NN	_	0	root	_	_
5	untuk	_	ADP	IN	_	6	case	_	_
6	konten	_	NOUN	NN	_	4	nmod	_	ToDo=nmod
7	hiburan	_	VERB	VV	_	6	compound	_	SpaceAfter=No
8	,	_	PUNCT	,	_	10	punct	_	_
9	tapi	_	CCONJ	CC	_	10	cc	_	_
10	sama	_	ADJ	JJ	_	4	conj	_	_
11	juga	_	ADV	RB	_	10	advmod	_	_
12	untuk	_	ADP	IN	_	13	case	_	_
13	pendidikan	_	VERB	VV	_	10	nmod	_	SpaceAfter=No|ToDo=nmod
14	,	_	PUNCT	,	_	16	punct	_	_
15	untuk	_	ADP	IN	_	16	case	_	ToDo=ex-adp-child
16	riset	_	NOUN	NN	_	13	conj	_	_
17	ilmiah	_	ADJ	JJ	_	16	amod	_	SpaceAfter=No
18	,	_	PUNCT	,	_	21	punct	_	_
19	dan	_	CCONJ	CC	_	21	cc	_	ToDo=ex-adp-child
20	mungkin	_	ADV	RB	_	21	advmod	_	_
21	yang	_	PRON	PRP	_	13	conj	_	ToDo=ex-adp-child
22	terpenting	_	ADJ	JJ	_	21	amod	_	SpaceAfter=No
23	,	_	PUNCT	,	_	25	punct	_	_
24	pada	_	ADP	IN	_	25	case	_	_
25	wacana	_	NOUN	NN	_	21	nmod	_	_
26	politik	_	NOUN	NN	_	25	compound	_	SpaceAfter=No
27	.	_	PUNCT	.	_	4	punct	_	_

~~~


