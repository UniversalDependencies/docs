---
layout: base
title:  'Statistics of flat:name in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="id_csui-dep-flat-foreign.html">flat:foreign</a></tt>.

1430 nodes (5%) are attached to their parents as `flat:name`.

1430 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8965034965035.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1415; 99% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (11; 1% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Membaca	baca	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
2	Don	Don	PROPN	NNP	_	1	obj	_	_
3	Quixote	Quixote	PROPN	NNP	_	2	flat:name	_	_
4	untuk	untuk	ADP	IN	_	5	case	_	_
5	YouTube	YouTube	PROPN	NNP	_	1	obl	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat:name	color:blue
1	Ketika	ketika	SCONJ	IN	_	4	mark	_	_
2	hal	hal	NOUN	NN	Number=Sing	4	nsubj:pass	_	_
3	itu	itu	DET	DT	PronType=Dem	2	det	_	_
4	dikonfirmasi	dikonfirmasi	VERB	VB	Mood=Ind|Voice=Pass	12	advcl	_	SpaceAfter=No
5	,	,	PUNCT	,	_	12	punct	_	_
6	Direktur	Direktur	NOUN	NN	Number=Sing	12	nsubj	_	_
7	Toba	Toba	PROPN	NNP	_	6	flat:name	_	_
8	Pulp	Pulp	PROPN	NNP	_	6	flat:name	_	_
9	Firman	Firman	PROPN	NNP	_	6	appos	_	_
10	Mulya	Mulya	PROPN	NNP	_	9	flat:name	_	_
11	Nauli	Nauli	PROPN	NNP	_	9	flat:name	_	_
12	membenarkan	benar	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
13	perihal	perihal	NOUN	NN	Number=Sing	12	obj	_	_
14	rencana	rencana	NOUN	NN	Number=Sing	13	nmod	_	_
15	akuisisi	akuisisi	NOUN	NN	Number=Sing	14	nmod	_	_
16	Toba	Toba	PROPN	NNP	_	14	nmod	_	_
17	Pulp	Pulp	PROPN	NNP	_	16	flat:name	_	_
18	oleh	oleh	ADP	IN	_	19	case	_	_
19	Pinnacle	Pinnacle	PROPN	NNP	_	14	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 28 flat:name	color:blue
1	Menteri	menteri	PROPN	NNP	_	6	nsubj	_	_
2	Keuangan	Keuangan	PROPN	NNP	_	1	flat:name	_	_
3	Indonesia	Indonesia	PROPN	NNP	_	1	flat:name	_	_
4	Sri	Sri	PROPN	NNP	_	1	appos	_	_
5	Mulyani	Mulyani	PROPN	NNP	_	4	flat:name	_	_
6	mengemukakan	mengemukakan	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
7	hal	hal	NOUN	NN	Number=Sing	6	obj	_	_
8	itu	itu	DET	DT	PronType=Dem	7	det	_	_
9	kepada	kepada	ADP	IN	_	10	case	_	_
10	ANTARA	ANTARA	PROPN	NNP	_	6	obl	_	_
11	di	di	ADP	IN	_	12	case	_	_
12	Kyoto	Kyoto	PROPN	NNP	_	6	obl	_	SpaceAfter=No
13	,	,	PUNCT	,	_	6	punct	_	_
14	Sabtu	Sabtu	PROPN	NNP	_	6	obl:tmod	_	SpaceAfter=No
15	,	,	PUNCT	,	_	6	punct	_	_
16	sesaat	saat	NOUN	NN	Number=Sing	6	obl	_	_
17	sebelum	belum	SCONJ	IN	_	18	mark	_	_
18	memasuki	masuk	VERB	VB	Mood=Ind|Voice=Act	16	acl	_	_
19	seminar	seminar	NOUN	NN	Number=Sing	18	obj	_	_
20	yang	yang	PRON	IN	PronType=Rel	21	nsubj:pass	_	_
21	diadakan	ada	VERB	VB	Mood=Ind|Voice=Pass	19	acl:relcl	_	_
22	dalam	dalam	ADP	IN	_	23	case	_	_
23	rangka	rangka	NOUN	NN	Number=Sing	21	obl	_	_
24	pertemuan	temu	NOUN	NN	Number=Sing	23	nmod	_	_
25	tahunan	tahun	NOUN	NN	Number=Sing	24	nmod	_	_
26	Asian	Asian	PROPN	NNP	_	24	nmod	_	_
27	Development	Development	PROPN	NNP	_	26	flat:name	_	_
28	Bank	Bank	NOUN	NN	Number=Sing	26	flat:name	_	_
29	(	(	PUNCT	-LRB-	_	30	punct	_	SpaceAfter=No
30	ADB	ADB	PROPN	NNP	_	26	appos	_	SpaceAfter=No
31	)	)	PUNCT	-RRB-	_	30	punct	_	_
32	ke-40	ke-40	ADJ	JJ	NumType=Ord	24	amod	_	SpaceAfter=No
33	.	.	PUNCT	.	_	6	punct	_	_

~~~


