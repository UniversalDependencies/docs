---
layout: base
title:  'Statistics of nmod:poss in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="id_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>.

154 nodes (1%) are attached to their parents as `nmod:poss`.

154 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41558441558442.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (142; 92% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	Pihak	pihak	NOUN	NN	Number=Sing	3	nsubj:pass	_	_
2	nya	nya	PRON	PRP$	_	1	nmod:poss	_	_
3	terpaksa	paksa	VERB	VB	Voice=Pass	0	root	_	_
4	menggunakan	guna	VERB	VB	Voice=Act	3	ccomp	_	_
5	minyak	minyak	NOUN	NN	Number=Sing	4	obj	_	_
6	akibat	akibat	ADP	IN	_	13	case	_	_
7	langka	langka	ADJ	JJ	_	13	acl:relcl	_	_
8	nya	nya	DET	DT	_	7	det	_	_
9	pasokan	pasok	NOUN	NN	Number=Sing	7	nsubj	_	_
10	gas	gas	NOUN	NN	Number=Sing	9	nmod	_	_
11	dalam	dalam	ADP	IN	_	13	case	_	_
12	lima	lima	NUM	CD	_	13	nummod	_	_
13	tahun	tahun	NOUN	NN	Number=Sing	4	obl:tmod	_	_
14	terakhir	akhir	ADJ	JJ	Degree=Sup	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 nmod:poss	color:blue
1	Industri	industri	NOUN	NN	Number=Sing	0	root	_	_
2	elektronika	elektronika	NOUN	NN	Number=Sing	1	nmod	_	_
3	yang	yang	SCONJ	IN	_	8	mark	_	_
4	tahun	tahun	NOUN	NN	Number=Sing	8	nmod:tmod	_	_
5	lalu	lalu	VERB	VB	Voice=Act	4	acl	_	_
6	minus	minus	ADJ	JJ	_	8	advmod	_	_
7	13,6	13,6	NUM	CD	_	8	nummod	_	_
8	persen	persen	NOUN	NN	Number=Sing	1	acl:relcl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	_	_
10	tahun	tahun	NOUN	NN	Number=Sing	12	obl:tmod	_	_
11	ini	ini	DET	DT	PronType=Dem	10	det	_	_
12	naik	naik	VERB	VB	Voice=Act	1	acl:relcl	_	_
13	8,7	8,7	NUM	CD	_	14	nummod	_	_
14	persen	persen	NOUN	NN	Number=Sing	12	obl	_	_
15	itu	itu	DET	DT	PronType=Dem	16	det	_	_
16	PPh	PPh	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No
17	-	-	PUNCT	:	_	18	punct	_	SpaceAfter=No
18	nya	nya	PRON	PRP$	Number=Sing|Person=3|Poss=Yes|PronType=Prs	16	nmod:poss	_	SpaceAfter=No
19	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:poss	color:blue
1	"	"	PUNCT	``	_	3	punct	_	SpaceAfter=No
2	Ini	ini	PRON	PRP	PronType=Dem	3	nsubj	_	_
3	ada	ada	VERB	VB	Voice=Act	0	root	_	_
4	dalam	dalam	ADP	IN	_	5	case	_	_
5	draft	draft	X	FW	Foreign=Yes	3	obl	_	_
6	kami	kami	PRON	PRP	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	5	nmod:poss	_	SpaceAfter=No
7	,	,	PUNCT	,	_	12	punct	_	_
8	tapi	tapi	CCONJ	CC	_	12	cc	_	_
9	pastinya	pasti	ADV	RB	_	12	nsubj	_	_
10	bisa	bisa	AUX	MD	_	12	aux	_	_
11	saja	saja	ADV	RB	_	12	advmod	_	_
12	bertambah	tambah	VERB	VB	Voice=Act	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	,	_	12	punct	_	_
14	karena	karena	ADP	IN	_	15	case	_	_
15	situasi	situasi	NOUN	NN	Number=Sing	12	obl	_	_
16	yang	yang	SCONJ	IN	_	17	mark	_	_
17	khusus	khusus	ADJ	JJ	_	15	acl:relcl	_	_
18	di	di	ADP	IN	_	19	case	_	_
19	mana	mana	PRON	PRP	Number=Sing	20	obl	_	_
20	membutuhkan	butuh	VERB	VB	Voice=Act	15	acl:relcl	_	_
21	belanja	belanja	NOUN	NN	Number=Sing	20	obj	_	_
22	teknologi	teknologi	NOUN	NN	Number=Sing	21	nmod	_	_
23	yang	yang	SCONJ	IN	_	24	mark	_	_
24	baru	baru	ADJ	JJ	_	22	acl:relcl	_	SpaceAfter=No
25	,	,	PUNCT	,	_	3	punct	_	SpaceAfter=No
26	"	"	PUNCT	''	_	3	punct	_	_
27	kata	kata	VERB	VB	Voice=Act	3	parataxis	_	_
28	Direktur	Direktur	NOUN	NN	Number=Sing	27	nsubj	_	_
29	Teknologi	Teknologi	NOUN	NN	Number=Sing	28	nmod	_	_
30	dan	dan	CCONJ	CC	_	31	cc	_	_
31	Operasional	Operasional	PROPN	NNP	_	29	conj	_	_
32	Bank	Bank	NOUN	NN	Number=Sing	28	nmod	_	_
33	Mandiri	Mandiri	PROPN	NNP	_	32	nmod	_	SpaceAfter=No
34	,	,	PUNCT	,	_	35	punct	_	_
35	Sasmita	Sasmita	PROPN	NNP	_	28	appos	_	_
36	di	di	ADP	IN	_	37	case	_	_
37	Jakarta	Jakarta	PROPN	NNP	_	27	obl	_	SpaceAfter=No
38	,	,	PUNCT	,	_	27	punct	_	_
39	Jumat	Jumat	PROPN	NNP	_	27	obl:tmod	_	SpaceAfter=No
40	.	.	PUNCT	.	_	3	punct	_	_

~~~


