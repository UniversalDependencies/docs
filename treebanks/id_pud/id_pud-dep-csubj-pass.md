---
layout: base
title:  'Statistics of csubj:pass in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-csubj.html">csubj</a></tt>.

8 nodes (0%) are attached to their parents as `csubj:pass`.

6 instances of `csubj:pass` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.375.

The following 7 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (2; 25% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:pass	color:blue
1	Sulit	_	ADV	RB	_	2	aux	_	_
2	dipikirkan	_	NOUN	NN	_	0	root	_	SpaceAfter=No
3	bahwa	_	ADP	IN	_	5	mark	_	_
4	Italia	_	PROPN	NNP	_	5	nsubj	_	_
5	punya	_	VERB	VV	_	2	csubj:pass	_	_
6	lebih	_	ADV	RB	_	7	advmod	_	_
7	sedikit	_	ADJ	JJ	_	8	amod	_	_
8	km	_	NOUN	NNB	_	9	clf	_	_
9	jalur	_	NOUN	NN	_	5	obj	_	_
10	bawah	_	NOUN	NN	_	9	compound	_	_
11	tanah	_	NOUN	NN	_	10	compound	_	_
12	dibandingkan	_	NOUN	NN	_	5	parataxis	_	SpaceAfter=No
13	dengan	_	ADP	IN	_	14	case	_	_
14	Madrid	_	PROPN	NNP	_	12	nmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 csubj:pass	color:blue
1	Bermain	_	AUX	VV	_	2	cop	_	_
2	seri	_	ADJ	JJ	_	11	csubj:pass	_	_
3	dalam	_	ADP	IN	_	4	case	_	_
4	permainan	_	VERB	VV	_	2	obl	_	SpaceAfter=No
5	yang	_	ADP	IN	_	8	mark	_	_
6	telah	_	ADV	RB	_	8	aux	_	_
7	Anda	_	PRON	PRP	_	8	nsubj	_	_
8	dominasi	_	VERB	VV	_	4	acl:relcl	_	_
9	mudah	_	ADJ	JJ	_	11	aux	_	_
10	saja	_	ADV	RB	_	9	fixed	_	_
11	diabaikan	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
12	,	_	PUNCT	,	_	21	punct	_	_
13	tapi	_	CCONJ	CC	_	21	cc	_	_
14	melakukan	_	NOUN	NN	_	21	csubj	_	SpaceAfter=No
15	nya	_	PRON	PRP	_	14	obj	_	_
16	tiga	_	NUM	CD	_	17	nummod	_	_
17	kali	_	NOUN	NNB	_	14	advmod	_	_
18	berturut	_	VERB	VV	_	14	aux	_	SpaceAfter=No
19	-	_	PUNCT	HYPH	_	20	punct	_	SpaceAfter=No
20	turut	_	X	GW	_	18	goeswith	_	_
21	menunjukkan	_	VERB	VV	_	11	conj	_	SpaceAfter=No
22	kelemahan	_	ADJ	JJ	_	21	obj	_	SpaceAfter=No
23	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 csubj:pass	color:blue
1	Dalam	_	ADP	IN	_	2	case	_	_
2	kasus	_	NOUN	NN	_	9	obl	_	_
3	keluarga	_	NOUN	NN	_	2	compound	_	_
4	kekaisaran	_	NOUN	NN	_	3	compound	_	SpaceAfter=No
5	,	_	PUNCT	,	_	2	punct	_	_
6	dipandang	_	AUX	NN	_	9	cop	_	_
7	sangat	_	ADV	RB	_	9	advmod	_	_
8	tidak	_	ADV	RB	Polarity=Neg	9	advmod	_	_
9	pantas	_	ADJ	JJ	_	0	root	_	_
10	untuk	_	ADP	IN	_	9	dep	_	_
11	menggunakan	_	NOUN	NN	_	9	csubj:pass	_	SpaceAfter=No
12	nama	_	NOUN	NN	_	11	obj	_	_
13	depan	_	NOUN	NN	_	12	compound	_	SpaceAfter=No
14	.	_	PUNCT	.	_	9	punct	_	_

~~~


