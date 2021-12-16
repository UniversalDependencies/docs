---
layout: base
title:  'Statistics of acl in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="id_csui-dep-acl-relcl.html">acl:relcl</a></tt>.

153 nodes (1%) are attached to their parents as `acl`.

153 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.50980392156863.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (131; 86% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (11; 7% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Kera	kera	NOUN	NN	Number=Sing	0	root	_	_
2	untuk	untuk	SCONJ	IN	_	3	mark	_	_
3	amankan	aman	VERB	VB	Mood=Ind|Voice=Act	1	acl	_	_
4	pesta	pesta	NOUN	NN	Number=Sing	3	obj	_	_
5	olahraga	olahraga	NOUN	NN	Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 acl	color:blue
1	Sementara	sementara	ADV	RB	_	5	advmod	_	MWEPOS=ADV
2	itu	itu	PRON	PRP	PronType=Dem	1	fixed	_	_
3	dolar	dolar	NOUN	NN	Number=Sing	5	nsubj:pass	_	_
4	AS	AS	PROPN	NNP	_	3	nmod	_	_
5	terpuruk	terpuruk	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
6	terhadap	hadap	ADP	IN	_	7	case	_	_
7	euro	euro	NOUN	NN	Number=Sing	5	obl	_	_
8	menjadi	jadi	VERB	VB	Mood=Ind|Voice=Act	5	ccomp	_	_
9	13,836	13,836	NUM	CD	NumType=Card	8	obj	_	_
10	bahkan	bahkan	ADV	RB	_	11	advmod	_	_
11	diperkirakan	kira	VERB	VB	Mood=Ind|Voice=Pass	5	advcl	_	_
12	akan	akan	AUX	MD	_	13	aux	_	_
13	mencapai	capai	VERB	VB	Mood=Ind|Voice=Act	11	ccomp	_	_
14	13,845	13,845	NUM	CD	NumType=Card	13	obj	_	SpaceAfter=No
15	,	,	PUNCT	,	_	5	punct	_	_
16	karena	karena	SCONJ	IN	_	17	mark	_	_
17	besar	besar	ADJ	JJ	_	5	advcl	_	_
18	aksi	aksi	NOUN	NN	Number=Sing	17	obl	_	_
19	lepas	lepas	ADJ	JJ	_	18	acl	_	_
20	dolar	dolar	NOUN	NN	Number=Sing	19	obj	_	_
21	AS	AS	PROPN	NNP	_	20	nmod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	5	punct	_	_

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
7	dikatakan	kata	VERB	VB	Mood=Ind|Voice=Pass	13	advcl	_	_
8	berhasil	hasil	VERB	VB	Mood=Ind|Voice=Act	7	xcomp	_	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	_
10	keberhasilan	hasil	NOUN	NN	Number=Sing	13	nsubj	_	_
11	itu	itu	DET	DT	PronType=Dem	10	det	_	_
12	adalah	adalah	AUX	VBZ	_	13	cop	_	_
13	mendorong	dorong	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
14	perdebatan	debat	NOUN	NN	Number=Sing	13	obj	_	_
15	mengenai	kena	SCONJ	IN	_	17	mark	_	_
16	apa	apa	PRON	WP	PronType=Rel	17	nmod	_	_
17	arti	arti	NOUN	NN	Number=Sing	14	acl	_	_
18	beramal	amal	VERB	VB	Mood=Ind|Voice=Act	17	acl:relcl	_	_
19	bagi	bagi	SCONJ	IN	_	21	mark	_	_
20	yang	yang	PRON	PRP	PronType=Rel	21	nsubj	_	_
21	membutuhkan	butuh	VERB	VB	Mood=Ind|Voice=Act	18	advcl	_	SpaceAfter=No
22	.	.	PUNCT	.	_	13	punct	_	_

~~~


