---
layout: base
title:  'Statistics of nsubj:pass in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-nsubj.html">nsubj</a></tt>.

440 nodes (2%) are attached to their parents as `nsubj:pass`.

424 instances of `nsubj:pass` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22045454545455.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (238; 54% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (177; 40% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (18; 4% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Namun	namun	ADV	RB	_	5	advmod	_	_
2	dana	dana	NOUN	NN	Number=Sing	5	nsubj:pass	_	_
3	tersebut	sebut	DET	DT	PronType=Dem	2	det	_	_
4	baru	baru	ADV	RB	_	5	advmod	_	_
5	terpakai	pakai	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
6	168	168	NUM	CD	NumType=Card	8	nummod	_	_
7	juta	juta	NUM	CD	NumType=Card	6	flat	_	_
8	dolar	dolar	NOUN	NN	Number=Sing	5	obl	_	_
9	AS	AS	PROPN	NNP	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	"	"	PUNCT	``	_	2	punct	_	SpaceAfter=No
2	Ini	ini	PRON	PRP	PronType=Dem	0	root	_	_
3	lah	lah	PART	RP	_	2	advmod:emph	_	_
4	yang	yang	PRON	IN	PronType=Rel	5	nsubj:pass	_	_
5	terjadi	jadi	VERB	VB	Mood=Ind|Voice=Pass	2	acl:relcl	_	_
6	kalau	kalau	SCONJ	IN	_	7	mark	_	_
7	siaran	siar	NOUN	NN	Number=Sing	5	advcl	_	_
8	TV	TV	NOUN	NN	Number=Sing	7	nmod	_	_
9	langsung	langsung	ADJ	JJ	_	7	amod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	_	SpaceAfter=No
11	"	"	PUNCT	''	_	2	punct	_	_
12	kata	kata	VERB	VB	Mood=Ind|Voice=Act	2	parataxis	_	_
13	Sarah	Sarah	PROPN	NNP	_	12	nsubj	_	_
14	Murdoch	Murdoch	PROPN	NNP	_	13	flat:name	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	TRJE	trje	PROPN	NNP	_	3	nsubj:pass	_	_
2	sebelumnya	sebelumnya	ADV	RB	_	3	advmod	_	_
3	dikenal	kenal	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
4	sebagai	bagai	ADP	IN	_	5	case	_	_
5	PT	PT	PROPN	NNP	_	3	obl	_	_
6	Truba	Truba	PROPN	NNP	_	5	flat:name	_	_
7	Jurong	Jurong	PROPN	NNP	_	5	flat:name	_	_
8	Engineering	Engineering	PROPN	NNP	_	5	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


