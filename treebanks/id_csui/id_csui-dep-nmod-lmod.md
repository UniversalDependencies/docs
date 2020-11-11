---
layout: base
title:  'Statistics of nmod:lmod in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_csui-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="id_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>.

101 nodes (0%) are attached to their parents as `nmod:lmod`.

92 instances of `nmod:lmod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0990099009901.

The following 7 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (84; 83% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (10; 10% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="id_csui-pos-DET.html">DET</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:lmod	color:blue
1	Pembahasan	bahas	NOUN	NN	Number=Sing	5	nmod	_	_
2	tadi	tadi	NOUN	NN	Number=Sing	1	nmod	_	_
3	masih	masih	ADV	RB	_	5	advmod	_	_
4	dalam	dalam	ADP	IN	_	5	amod	_	_
5	tahap	tahap	NOUN	NN	Number=Sing	0	root	_	_
6	awal	awal	NOUN	NN	Number=Sing	5	nmod:lmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod:lmod	color:blue
1	Kabar	kabar	NOUN	NN	Number=Sing	9	nsubj	_	_
2	rencana	rencana	NOUN	NN	Number=Sing	1	nmod	_	_
3	akuisisi	akuisisi	NOUN	NN	Number=Sing	2	nmod	_	_
4	Toba	Toba	PROPN	NNP	_	2	nmod	_	_
5	Pulp	Pulp	PROPN	NNP	_	4	flat:name	_	_
6	oleh	oleh	ADP	IN	_	7	case	_	_
7	Pinnacle	Pinnacle	PROPN	NNP	_	2	nmod	_	_
8	sudah	sudah	AUX	MD	_	9	aux	_	_
9	berhembus	berhembus	VERB	VB	Voice=Act	0	root	_	_
10	sejak	sejak	ADP	IN	_	12	case	_	_
11	awal	awal	NOUN	NN	Number=Sing	12	nmod:lmod	_	_
12	Oktober	Oktober	PROPN	NNP	_	9	obl:tmod	_	_
13	lalu	lalu	VERB	VB	Voice=Act	12	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 nmod:lmod	color:blue
1	Dari	dari	ADP	IN	_	2	case	_	_
2	rencana	rencana	NOUN	NN	Number=Sing	12	obl	_	_
3	bisnis	bisnis	NOUN	NN	Number=Sing	2	nmod	_	_
4	bank	bank	NOUN	NN	Number=Sing	2	nmod	_	_
5	yang	yang	SCONJ	IN	_	7	mark	_	_
6	telah	telah	AUX	MD	_	7	aux	_	_
7	disampaikan	sampai	VERB	VB	Voice=Pass	2	acl:relcl	_	_
8	kepada	kepada	ADP	IN	_	9	case	_	_
9	BI	BI	PROPN	NNP	_	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	perbankan	bank	NOUN	NN	Number=Sing	12	nsubj	_	_
12	berencana	rencana	VERB	VB	Voice=Act	0	root	_	_
13	untuk	untuk	SCONJ	IN	_	14	mark	_	_
14	memperbaiki	baik	VERB	VB	Voice=Act	12	advcl	_	_
15	kinerja	kinerja	NOUN	NN	Number=Sing	14	obj	_	_
16	nya	nya	PRON	PRP$	_	15	nmod:poss	_	_
17	di	di	ADP	IN	_	19	case	_	_
18	dalam	dalam	NOUN	NN	Number=Sing	19	nmod:lmod	_	_
19	melaksanakan	laksana	VERB	VB	Voice=Act	15	nmod	_	_
20	fungsi	fungsi	NOUN	NN	Number=Sing	19	obj	_	_
21	intermediasi	intermediasi	NOUN	NN	Number=Sing	20	nmod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	12	punct	_	_

~~~


