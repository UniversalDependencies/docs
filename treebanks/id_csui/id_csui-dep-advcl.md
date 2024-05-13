---
layout: base
title:  'Statistics of advcl in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `advcl`

This relation is universal.

762 nodes (3%) are attached to their parents as `advcl`.

645 instances of `advcl` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.6758530183727.

The following 18 pairs of parts of speech are connected with `advcl`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (524; 69% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (82; 11% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (77; 10% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (34; 4% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (16; 2% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advcl	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 advcl	color:blue
1	Kita	kita	PRON	PRP	Clusivity=In|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
2	kan	kan	ADV	RB	_	1	advmod	_	_
3	sudah	sudah	AUX	MD	_	4	aux	_	_
4	masuk	masuk	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	'	'	PUNCT	``	_	6	punct	_	SpaceAfter=No
6	middle	middle	X	FW	Foreign=Yes	4	obj	_	_
7	income	income	X	FW	Foreign=Yes	6	flat:foreign	_	_
8	countries	countries	X	FW	Foreign=Yes	6	flat:foreign	_	SpaceAfter=No
9	'	'	PUNCT	''	_	6	punct	_	SpaceAfter=No
10	,	,	PUNCT	,	_	4	punct	_	_
11	jadi	jadi	SCONJ	IN	_	13	mark	_	_
12	jangan-jangan	jangan	ADV	RB	_	13	advmod	_	_
13	susah	susah	ADJ	JJ	_	4	advcl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 advcl	color:blue
1	"	"	PUNCT	``	_	10	punct	_	SpaceAfter=No
2	Kalau	Kalau	SCONJ	IN	_	4	mark	_	_
3	itu	itu	PRON	PRP	PronType=Dem	4	nsubj:pass	_	_
4	dimasukkan	masuk	VERB	VB	Mood=Ind|Voice=Pass	10	advcl	_	_
5	mungkin	mungkin	AUX	MD	_	10	aux	_	_
6	pendapatan	dapat	NOUN	NN	Number=Sing	10	nsubj	_	_
7	nya	nya	PRON	PRP$	Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
8	akan	akan	AUX	MD	_	10	aux	_	_
9	lebih	lebih	ADV	RB	_	10	advmod	_	_
10	besar	besar	ADJ	JJ	_	0	root	_	_
11	lagi	lagi	ADV	RB	_	10	advmod	_	SpaceAfter=No
12	,	,	PUNCT	,	_	10	punct	_	SpaceAfter=No
13	"	"	PUNCT	''	_	10	punct	_	_
14	kata	kata	VERB	VB	Mood=Ind|Voice=Act	10	parataxis	_	_
15	Roekman	Roekman	PROPN	NNP	_	14	nsubj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	10	punct	_	_

~~~


