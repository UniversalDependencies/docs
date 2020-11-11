---
layout: base
title:  'Statistics of advmod:emph in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-advmod.html">advmod</a></tt>.

33 nodes (0%) are attached to their parents as `advmod:emph`.

33 instances of `advmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42424242424242.

The following 8 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-PART.html">PART</a></tt> (13; 39% instances), <tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="id_csui-pos-PART.html">PART</a></tt> (9; 27% instances), <tt><a href="id_csui-pos-PART.html">PART</a></tt>-<tt><a href="id_csui-pos-PART.html">PART</a></tt> (4; 12% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PART.html">PART</a></tt> (3; 9% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="id_csui-pos-DET.html">DET</a></tt>-<tt><a href="id_csui-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:emph	color:blue
1	"	"	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	ini	ini	PRON	PRP	PronType=Dem	5	obl	_	_
3	lah	lah	PART	RP	_	2	advmod:emph	_	_
4	yang	yang	SCONJ	IN	_	5	mark	_	_
5	terjadi	jadi	VERB	VB	Voice=Pass	0	root	_	_
6	kalau	kalau	SCONJ	IN	_	7	mark	_	_
7	siaran	siar	NOUN	NN	Number=Sing	5	advcl	_	_
8	TV	TV	NOUN	NN	Number=Sing	7	nmod	_	_
9	langsung	langsung	ADJ	JJ	_	7	amod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	SpaceAfter=No
11	"	"	PUNCT	''	_	5	punct	_	_
12	kata	kata	VERB	VB	Voice=Act	5	parataxis	_	_
13	Sarah	Sarah	PROPN	NNP	_	12	nsubj	_	_
14	Murdoch	Murdoch	PROPN	NNP	_	13	flat:name	_	SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advmod:emph	color:blue
1	Jamrud	jamrud	NOUN	NN	Number=Sing	4	nsubj	_	_
2	itu	itu	DET	DT	PronType=Dem	1	det	_	_
3	akhirnya	akhirnya	ADV	RB	_	4	advmod	_	_
4	sampai	sampai	VERB	VB	Voice=Act	0	root	_	_
5	ke	ke	ADP	IN	_	6	case	_	_
6	Amerika	Amerika	PROPN	NNP	_	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	,	_	4	punct	_	_
8	meski	meski	SCONJ	IN	_	10	mark	_	_
9	pun	pun	PART	RP	_	8	advmod:emph	_	_
10	setiba	tiba	VERB	VB	Voice=Act	15	advcl	_	_
11	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
12	di	di	ADP	IN	_	13	case	_	_
13	Amerika	Amerika	PROPN	NNP	_	10	obl	_	_
14	tidak	tidak	PART	RP	Polarity=Neg	15	advmod	_	_
15	jelas	jelas	ADJ	JJ	_	4	advcl	_	_
16	siapa	siapa	PRON	WP	_	15	nsubj	_	_
17	pemilik	milik	NOUN	NN	Number=Sing	16	acl:relcl	_	_
18	nya	nya	PRON	PRP$	Number=Sing|Person=3|Poss=Yes|PronType=Prs	17	nmod:poss	_	_
19	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod:emph	color:blue
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


