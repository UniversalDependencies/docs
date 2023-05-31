---
layout: base
title:  'Statistics of csubj:pass in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-csubj.html">csubj</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 csubj:pass	color:blue
1	Bagi	bagi	SCONJ	IN	_	3	mark	_	_
2	yang	yang	PRON	PRP	PronType=Rel	3	obl	_	_
3	berminat	minat	VERB	VB	Voice=Act	5	advcl	_	_
4	harus	harus	AUX	MD	_	5	aux	_	_
5	mendaftarkan	daftar	VERB	VB	Voice=Act	0	root	_	_
6	diri	diri	PRON	PRP	PronType=Prs|Reflex=Yes	5	obj	_	_
7	di	di	ADP	IN	_	8	case	_	_
8	YouTube	YouTube	PROPN	NNP	_	5	obl	_	_
9	dan	dan	CCONJ	CC	_	13	cc	_	_
10	yang	yang	SCONJ	IN	_	11	mark	_	_
11	terpilih	pilih	VERB	VB	Voice=Pass	13	csubj:pass	_	_
12	akan	akan	AUX	MD	_	13	aux	_	_
13	membaca	baca	VERB	VB	Voice=Act	5	conj	_	_
14	segmen	segmen	NOUN	NN	Number=Sing	13	obj	_	_
15	tertentu	tentu	ADJ	JJ	Degree=Sup	14	amod	_	_
16	untuk	untuk	SCONJ	IN	_	17	mark	_	_
17	diunggah	diunggah	VERB	VB	Voice=Pass	13	advcl	_	_
18	di	di	ADP	IN	_	19	case	_	_
19	YouTube	YouTube	PROPN	NNP	_	17	obl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj:pass	color:blue
1	"	"	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	Yang	Yang	PRON	PRP	_	3	nsubj:pass	_	_
3	terjadi	jadi	VERB	VB	Voice=Pass	5	csubj:pass	_	_
4	adalah	adalah	AUX	VBZ	_	5	cop	_	_
5	penyesuaian	penyesuaian	NOUN	NN	Number=Sing	0	root	_	_
6	portofolio	portofolio	NOUN	NN	Number=Sing	5	nmod	_	_
7	yang	yang	SCONJ	IN	_	9	mark	_	_
8	kemudian	kemudian	ADV	RB	_	9	advmod	_	_
9	membuat	buat	VERB	VB	Voice=Act	5	acl:relcl	_	_
10	kita	kita	PRON	PRP	Clusivity=In|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
11	batuk-batuk	batuk	VERB	VB	Voice=Act	9	ccomp	_	SpaceAfter=No
12	,	,	PUNCT	,	_	5	punct	_	SpaceAfter=No
13	"	"	PUNCT	''	_	5	punct	_	_
14	kata	kata	VERB	VB	Voice=Act	5	parataxis	_	_
15	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
16	.	.	PUNCT	.	_	5	punct	_	_

~~~


