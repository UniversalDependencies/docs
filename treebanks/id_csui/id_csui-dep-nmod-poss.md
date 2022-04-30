---
layout: base
title:  'Statistics of nmod:poss in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="id_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>.

171 nodes (1%) are attached to their parents as `nmod:poss`.

170 instances of `nmod:poss` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44444444444444.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (157; 92% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:poss	color:blue
1	"	"	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	Mereka	mereka	PRON	PRP	Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
3	akan	akan	AUX	MD	_	4	aux	_	_
4	mulai	mulai	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	merokok	rokok	VERB	VB	Mood=Ind|Voice=Act	4	xcomp	_	_
6	kalau	kalau	SCONJ	IN	_	7	mark	_	_
7	melihat	lihat	VERB	VB	Mood=Ind|Voice=Act	5	advcl	_	_
8	idola	idola	NOUN	NN	Number=Sing	10	nsubj	_	_
9	mereka	mereka	PRON	PRP	Number=Plur|Person=3|PronType=Prs	8	nmod:poss	_	_
10	merokok	rokok	VERB	VB	Mood=Ind|Voice=Act	7	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	_	SpaceAfter=No
12	"	"	PUNCT	''	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 nmod:poss	color:blue
1	Dan	dan	CCONJ	CC	_	12	cc	_	_
2	Sarah	Sarah	PROPN	NNP	_	12	nsubj	_	_
3	Murdoch	Murdoch	PROPN	NNP	_	2	flat:name	_	SpaceAfter=No
4	-	-	PUNCT	:	_	2	punct	_	_
5	seorang	orang	DET	DT	Definite=Ind|PronType=Art	6	det	_	_
6	model	model	NOUN	NN	Number=Sing	2	appos	_	_
7	yang	yang	PRON	IN	PronType=Rel	8	nsubj	_	_
8	merangkap	rangkap	VERB	VB	Mood=Ind|Voice=Act	6	acl:relcl	_	_
9	presenter	presenter	X	FW	Foreign=Yes	8	obj	_	_
10	TV	TV	NOUN	NN	Number=Sing	9	nmod	_	_
11	-	-	PUNCT	:	_	2	punct	_	_
12	menikah	nikah	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
13	dengan	dengan	ADP	IN	_	14	case	_	_
14	putra	putra	NOUN	NN	Number=Sing	12	obl	_	_
15	Rupert	Rupert	PROPN	NNP	_	14	nmod:poss	_	SpaceAfter=No
16	,	,	PUNCT	,	_	14	punct	_	_
17	Lachlan	Lachlan	PROPN	NNP	_	14	appos	_	SpaceAfter=No
18	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 nmod:poss	color:blue
1	Industri	industri	NOUN	NN	Number=Sing	0	root	_	_
2	elektronika	elektronika	NOUN	NN	Number=Sing	1	nmod	_	_
3	yang	yang	PRON	IN	PronType=Rel	6	nsubj	_	_
4	tahun	tahun	NOUN	NN	Number=Sing	6	nmod:tmod	_	_
5	lalu	lalu	VERB	VB	Mood=Ind|Voice=Act	4	acl	_	_
6	minus	minus	ADJ	JJ	_	1	acl:relcl	_	_
7	13,6	13,6	NUM	CD	NumType=Card	8	nummod	_	_
8	persen	persen	NOUN	NN	Number=Sing	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	_	_
10	tahun	tahun	NOUN	NN	Number=Sing	12	obl:tmod	_	_
11	ini	ini	DET	DT	PronType=Dem	10	det	_	_
12	naik	naik	VERB	VB	Mood=Ind|Voice=Act	1	acl:relcl	_	_
13	8,7	8,7	NUM	CD	NumType=Card	14	nummod	_	_
14	persen	persen	NOUN	NN	Number=Sing	12	obl	_	_
15	itu	itu	DET	DT	PronType=Dem	16	det	_	_
16	PPh	PPh	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No
17	-	-	PUNCT	:	_	18	punct	_	SpaceAfter=No
18	nya	nya	PRON	PRP$	Number=Sing|Person=3|PronType=Prs	16	nmod:poss	_	SpaceAfter=No
19	.	.	PUNCT	.	_	1	punct	_	_

~~~


