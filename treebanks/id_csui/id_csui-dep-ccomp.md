---
layout: base
title:  'Statistics of ccomp in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `ccomp`

This relation is universal.

264 nodes (1%) are attached to their parents as `ccomp`.

264 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.29545454545455.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (248; 94% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 ccomp	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	Bank	bank	PROPN	NNP	_	3	nsubj	_	_
2	Indonesia	Indonesia	PROPN	NNP	_	1	flat:name	_	_
3	memperkirakan	kira	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
4	pertumbuhan	tumbuh	NOUN	NN	Number=Sing	11	nsubj	_	_
5	kredit	kredit	NOUN	NN	Number=Sing	4	nmod	_	_
6	perbankan	bank	NOUN	NN	Number=Sing	4	nmod	_	_
7	pada	pada	ADP	IN	_	8	case	_	_
8	2008	2008	NUM	CD	NumType=Card	4	nmod	_	_
9	akan	akan	AUX	MD	_	11	aux	_	_
10	lebih	lebih	ADV	RB	_	11	advmod	_	_
11	tinggi	tinggi	ADJ	JJ	_	3	ccomp	_	_
12	dibanding	banding	VERB	VB	Mood=Ind|Voice=Pass	11	advcl	_	_
13	target	target	NOUN	NN	Number=Sing	12	obl	_	_
14	perbankan	bank	NOUN	NN	Number=Sing	13	nmod	_	_
15	pada	pada	ADP	IN	_	16	case	_	_
16	tahun	tahun	NOUN	NN	Number=Sing	13	nmod:tmod	_	_
17	ini	ini	DET	DT	PronType=Dem	16	det	_	_
18	sebesar	sebesar	NOUN	NN	Number=Sing	13	nmod	_	_
19	22	22	NUM	CD	NumType=Card	20	nummod	_	_
20	persen	persen	NOUN	NN	Number=Sing	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Pemerintah	perintah	NOUN	NN	Number=Sing	2	nsubj	_	_
2	menargetkan	target	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
3	inflasi	inflasi	NOUN	NN	Number=Sing	8	nsubj	_	_
4	pada	pada	ADP	IN	_	5	case	_	_
5	2007	2007	NUM	CD	NumType=Card	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	,	_	8	punct	_	_
7	6	6	NUM	CD	NumType=Card	8	nummod	_	_
8	persen	persen	NOUN	NN	Number=Sing	2	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	_
10	sementara	sementara	SCONJ	IN	_	12	mark	_	_
11	BI	BI	PROPN	NNP	_	12	nsubj	_	_
12	menargetkan	target	VERB	VB	Mood=Ind|Voice=Act	2	advcl	_	_
13	6	6	NUM	CD	NumType=Card	16	nummod	_	_
14	plus	plus	ADJ	JJ	_	15	advmod	_	_
15	minus	minus	ADJ	JJ	_	16	acl:relcl	_	_
16	1	1	NUM	CD	NumType=Card	12	obj	_	_
17	persen	persen	NOUN	NN	Number=Sing	16	nmod	_	SpaceAfter=No
18	.	.	PUNCT	.	_	2	punct	_	_

~~~


