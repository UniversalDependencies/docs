---
layout: base
title:  'Statistics of csubj in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="id_csui-dep-csubj-pass.html">csubj:pass</a></tt>.

9 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.44444444444444.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (5; 56% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Menyumbangkan	sumbang	VERB	VB	Voice=Act	7	csubj	_	_
2	uang	uang	NOUN	NN	Number=Sing	1	obj	_	_
3	untuk	untuk	ADP	IN	_	4	case	_	_
4	amal	amal	NOUN	NN	Number=Sing	1	obl	_	_
5	belum	belum	PART	RP	Polarity=Neg	6	advmod	_	_
6	begitu	begitu	ADV	RB	_	7	advmod	_	_
7	berkembang	kembang	VERB	VB	Voice=Act	0	root	_	_
8	di	di	ADP	IN	_	9	case	_	_
9	Cina	Cina	PROPN	NNP	_	7	obl	_	_
10	sebaik	sebaik	ADJ	JJ	_	7	xcomp	_	_
11	di	di	ADP	IN	_	13	case	_	_
12	banyak	banyak	DET	DT	_	13	det	_	_
13	negara	negara	NOUN	NN	Number=Sing	10	obl	_	_
14	lain	lain	ADJ	JJ	_	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	"	"	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	Memiliki	milik	VERB	VB	Voice=Act	5	csubj	_	_
3	CGI	CGI	PROPN	NNP	_	2	obj	_	_
4	sangat	sangat	ADV	RB	_	5	advmod	_	_
5	bagus	bagus	ADJ	JJ	_	0	root	_	_
6	bagi	bagi	ADP	IN	_	7	case	_	_
7	Indonesia	Indonesia	PROPN	NNP	_	5	obl	_	SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	tapi	tapi	CCONJ	CC	_	11	cc	_	_
10	Indonesia	Indonesia	PROPN	NNP	_	11	nsubj	_	_
11	berkembang	kembang	VERB	VB	Voice=Act	5	conj	_	_
12	dan	dan	CCONJ	CC	_	17	cc	_	_
13	saat	saat	NOUN	NN	Number=Sing	17	obl:tmod	_	_
14	ini	ini	DET	DT	PronType=Dem	13	det	_	_
15	Indonesia	Indonesia	PROPN	NNP	_	17	nsubj	_	_
16	tidak	tidak	PART	RP	Polarity=Neg	17	advmod	_	_
17	butuh	butuh	VERB	VB	Voice=Act	11	conj	_	_
18	CGI	CGI	PROPN	NNP	_	17	obj	_	_
19	lagi	lagi	ADV	RB	_	17	advmod	_	SpaceAfter=No
20	,	,	PUNCT	,	_	5	punct	_	SpaceAfter=No
21	"	"	PUNCT	''	_	5	punct	_	_
22	kata	kata	VERB	VB	Voice=Act	5	parataxis	_	_
23	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	22	nsubj	_	_
24	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 csubj	color:blue
1	"	"	PUNCT	``	_	11	punct	_	SpaceAfter=No
2	Memamerkan	Memamerkan	VERB	VB	Voice=Act	11	csubj	_	_
3	naskah	naskah	NOUN	NN	Number=Sing	2	obj	_	_
4	Balada	Balada	NOUN	NN	Number=Sing	3	nmod	_	_
5	Nick	Nick	PROPN	NNP	_	4	nmod	_	_
6	si	si	DET	DT	_	7	det	_	_
7	Kepala	Kepala	NOUN	NN	Number=Sing	5	nmod	_	_
8	Nyaris	Nyaris	ADV	RB	_	9	advmod	_	_
9	Putus	Putus	VERB	VB	Voice=Act	7	ccomp	_	_
10	adalah	adalah	AUX	VBZ	_	11	cop	_	_
11	cara	cara	NOUN	NN	Number=Sing	0	root	_	_
12	yang	yang	SCONJ	IN	_	14	mark	_	_
13	sangat	sangat	ADV	RB	_	14	advmod	_	_
14	bagus	bagus	ADJ	JJ	_	11	acl:relcl	_	_
15	untuk	untuk	SCONJ	IN	_	16	mark	_	_
16	membantu	bantu	VERB	VB	Voice=Act	11	ccomp	_	_
17	mendukung	dukung	VERB	VB	Voice=Act	16	ccomp	_	_
18	acara	acara	NOUN	NN	Number=Sing	17	obj	_	_
19	ini	ini	DET	DT	PronType=Dem	18	det	_	SpaceAfter=No
20	.	.	PUNCT	.	_	11	punct	_	SpaceAfter=No
21	"	"	PUNCT	''	_	11	punct	_	_

~~~


