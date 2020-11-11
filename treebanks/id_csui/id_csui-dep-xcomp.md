---
layout: base
title:  'Statistics of xcomp in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `xcomp`

This relation is universal.

133 nodes (0%) are attached to their parents as `xcomp`.

127 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.06766917293233.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (63; 47% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (53; 40% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (13; 10% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Saya	saya	PRON	PRP	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	kira	kira	VERB	VB	Voice=Act	0	root	_	_
3	lebih	lebih	ADV	RB	_	4	advmod	_	_
4	tinggi	tinggi	ADJ	JJ	_	2	xcomp	_	_
5	dari	dari	ADP	IN	_	6	case	_	_
6	target	target	NOUN	NN	Number=Sing	4	obl	_	_
7	tahun	tahun	NOUN	NN	Number=Sing	6	nmod:tmod	_	_
8	ini	ini	DET	DT	PronType=Dem	6	det	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	"	"	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	Mereka	Mereka	PRON	PRP	_	4	nsubj	_	_
3	akan	akan	AUX	MD	_	4	aux	_	_
4	mulai	mulai	VERB	VB	Voice=Act	0	root	_	_
5	merokok	rokok	VERB	VB	Voice=Act	4	xcomp	_	_
6	kalau	kalau	SCONJ	IN	_	7	mark	_	_
7	melihat	lihat	VERB	VB	Voice=Act	5	advcl	_	_
8	idola	idola	NOUN	NN	Number=Sing	10	nsubj	_	_
9	mereka	mereka	PRON	PRP	Number=Plur|Person=3|PronType=Prs	8	nmod	_	_
10	merokok	rokok	VERB	VB	Voice=Act	7	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	_	SpaceAfter=No
12	"	"	PUNCT	''	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Kisah	kisah	NOUN	NN	Number=Sing	4	nsubj:pass	_	_
2	pendiri	diri	NOUN	NN	Number=Sing	1	nmod	_	_
3	Facebook	Facebook	PROPN	NNP	_	2	nmod	_	_
4	dibuat	buat	VERB	VB	Voice=Pass	0	root	_	_
5	komik	komik	NOUN	NN	Number=Sing	4	xcomp	_	_

~~~


