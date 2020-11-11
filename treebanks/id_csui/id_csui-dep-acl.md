---
layout: base
title:  'Statistics of acl in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="id_csui-dep-acl-relcl.html">acl:relcl</a></tt>.

64 nodes (0%) are attached to their parents as `acl`.

64 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3125.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (45; 70% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (7; 11% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Kera	kera	NOUN	NN	Number=Sing	0	root	_	_
2	untuk	untuk	SCONJ	IN	_	3	mark	_	_
3	amankan	amankan	VERB	VB	Voice=Act	1	acl	_	_
4	pesta	pesta	NOUN	NN	Number=Sing	3	obj	_	_
5	olahraga	olahraga	NOUN	NN	Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl	color:blue
1	Disebutkan	sebut	VERB	VB	Voice=Pass	15	parataxis	_	_
2	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	1	obl:agent	_	_
3	,	,	PUNCT	,	_	1	punct	_	_
4	keuangan	uang	NOUN	NN	Number=Sing	15	nsubj	_	_
5	publik	publik	NOUN	NN	Number=Sing	4	nmod	_	_
6	dan	dan	CCONJ	CC	_	7	cc	_	_
7	perbaikan	perbaikan	NOUN	NN	Number=Sing	4	conj	_	_
8	pengawasan	awas	NOUN	NN	Number=Sing	7	nmod	_	_
9	atas	atas	ADP	IN	_	10	case	_	_
10	risiko	risiko	NOUN	NN	Number=Sing	7	nmod	_	_
11	fiskal	fiskal	ADJ	JJ	_	10	amod	_	_
12	secara	cara	ADP	IN	_	13	case:adv	_	_
13	luas	luas	ADJ	JJ	_	10	acl	_	_
14	adalah	adalah	AUX	VBZ	_	15	cop	_	_
15	kekuatan	kuat	NOUN	NN	Number=Sing	0	root	_	_
16	fundamental	fundamental	ADJ	JJ	_	15	amod	_	_
17	peringkat	peringkat	NOUN	NN	Number=Sing	15	nmod	_	_
18	Indonesia	Indonesia	PROPN	NNP	_	15	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 acl	color:blue
1	Kalau	kalau	SCONJ	IN	_	7	mark	_	_
2	jamuan	jamu	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
3	makan	makan	NOUN	NN	Number=Sing	2	nmod	_	_
4	malam	malam	NOUN	NN	Number=Sing	3	nmod	_	_
5	ini	ini	DET	DT	PronType=Dem	2	det	_	_
6	bisa	bisa	AUX	MD	_	7	aux	_	_
7	dikatakan	kata	VERB	VB	Voice=Pass	13	advcl	_	_
8	berhasil	hasil	VERB	VB	Voice=Act	7	xcomp	_	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	_
10	keberhasilan	hasil	NOUN	NN	Number=Sing	13	nsubj	_	_
11	itu	itu	DET	DT	PronType=Dem	10	det	_	_
12	adalah	adalah	AUX	VBZ	_	13	cop	_	_
13	mendorong	dorong	VERB	VB	Voice=Act	0	root	_	_
14	perdebatan	debat	NOUN	NN	Number=Sing	13	obj	_	_
15	mengenai	kena	SCONJ	IN	_	17	mark	_	_
16	apa	apa	PRON	WP	_	17	nmod	_	_
17	arti	arti	NOUN	NN	Number=Sing	14	acl	_	_
18	beramal	amal	VERB	VB	Voice=Act	17	acl:relcl	_	_
19	bagi	bagi	SCONJ	IN	_	21	mark	_	_
20	yang	yang	PRON	PRP	PronType=Rel	21	obl	_	_
21	membutuhkan	butuh	VERB	VB	Voice=Act	18	advcl	_	SpaceAfter=No
22	.	.	PUNCT	.	_	13	punct	_	_

~~~


