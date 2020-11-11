---
layout: base
title:  'Statistics of acl:relcl in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-acl.html">acl</a></tt>.

594 nodes (2%) are attached to their parents as `acl:relcl`.

579 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7003367003367.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (419; 71% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (77; 13% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (57; 10% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (9; 2% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Tetapi	tetapi	CCONJ	CC	_	8	cc	_	_
2	langkah	langkah	NOUN	NN	Number=Sing	8	obl	_	_
3	dia	dia	PRON	PRP	Number=Sing|Person=3|PronType=Prs	2	nmod	_	_
4	menuju	tuju	VERB	VB	Voice=Act	2	acl:relcl	_	_
5	kesuksesan	sukses	NOUN	NN	Number=Sing	4	obj	_	_
6	tidak	tidak	PART	RP	Polarity=Neg	8	advmod	_	_
7	lah	lah	PART	RP	_	6	advmod:emph	_	_
8	mulus	mulus	ADJ	JJ	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 acl:relcl	color:blue
1	Sarah	sarah	PROPN	NNP	_	3	nsubj	_	_
2	Murdoch	Murdoch	PROPN	NNP	_	1	flat:name	_	_
3	berusaha	usaha	VERB	VB	Voice=Act	0	root	_	_
4	menjelaskan	jelas	VERB	VB	Voice=Act	3	ccomp	_	_
5	kekeliruan	keliru	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
6	itu	itu	DET	DT	PronType=Dem	5	det	_	_
7	terjadi	jadi	VERB	VB	Voice=Pass	4	ccomp	_	_
8	karena	karena	ADP	IN	_	9	case	_	_
9	selisih	selisih	NOUN	NN	Number=Sing	7	obl	_	_
10	suara	suara	NOUN	NN	Number=Sing	9	nmod	_	_
11	yang	yang	SCONJ	IN	_	12	mark	_	_
12	ketat	ketat	ADJ	JJ	_	9	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl:relcl	color:blue
1	Saya	saya	PRON	PRP	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	akan	akan	AUX	MD	_	3	aux	_	_
3	meninggalkan	tinggal	VERB	VB	Voice=Act	0	root	_	_
4	Indonesia	Indonesia	PROPN	NNP	_	3	obj	_	_
5	pada	pada	ADP	IN	_	7	case	_	_
6	28	28	NUM	CD	_	7	nummod	_	_
7	Februari	Februari	PROPN	NNP	_	3	obl:tmod	_	_
8	mendatang	datang	VERB	VB	Voice=Act	7	acl:relcl	_	_
9	ke	ke	ADP	IN	_	10	case	_	_
10	London	London	PROPN	NNP	_	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


