---
layout: base
title:  'Statistics of appos in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `appos`

This relation is universal.

416 nodes (1%) are attached to their parents as `appos`.

416 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.44471153846154.

The following 15 pairs of parts of speech are connected with `appos`: <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (199; 48% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (102; 25% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (43; 10% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (24; 6% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (23; 6% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (8; 2% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 appos	color:blue
1	Australia	australia	PROPN	NNP	_	10	nsubj	_	_
2	and	and	PROPN	NNP	_	1	flat:name	_	_
3	New	New	PROPN	NNP	_	1	flat:name	_	_
4	Zealand	Zealand	PROPN	NNP	_	1	flat:name	_	_
5	Banking	Banking	PROPN	NNP	_	1	flat:name	_	_
6	Group	Group	PROPN	NNP	_	1	flat:name	_	_
7	(	(	PUNCT	-LRB-	_	8	punct	_	SpaceAfter=No
8	ANZ	ANZ	PROPN	NNP	_	1	appos	_	SpaceAfter=No
9	)	)	PUNCT	-RRB-	_	8	punct	_	_
10	membeli	beli	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
11	29,02	29,02	NUM	CD	NumType=Card	12	nummod	_	SpaceAfter=No
12	%	%	SYM	SYM	_	10	obj	_	_
13	saham	saham	NOUN	NN	Number=Sing	11	nmod	_	_
14	di	di	ADP	IN	_	15	case	_	_
15	tahun	tahun	NOUN	NN	Number=Sing	10	obl:tmod	_	_
16	1999	1999	NUM	CD	NumType=Card	15	nummod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Jajak	jajak	NOUN	NN	Number=Sing	3	nsubj	_	_
2	pendapat	dapat	NOUN	NN	Number=Sing	1	nmod	_	_
3	memperlihatkan	lihat	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
4	badut	badut	NOUN	NN	Number=Sing	10	nsubj	_	_
5	itu	itu	DET	DT	PronType=Dem	4	det	_	SpaceAfter=No
6	,	,	PUNCT	,	_	4	punct	_	_
7	Tiririca	Tiririca	PROPN	NNP	_	4	appos	_	SpaceAfter=No
8	,	,	PUNCT	,	_	4	punct	_	_
9	akan	akan	AUX	MD	_	10	aux	_	_
10	meraih	raih	VERB	VB	Mood=Ind|Voice=Act	3	ccomp	_	_
11	lebih	lebih	ADJ	JJ	_	15	acl:relcl	_	_
12	dari	dari	SCONJ	IN	_	11	fixed	_	_
13	satu	satu	NUM	CD	NumType=Card	15	nummod	_	_
14	juta	juta	NUM	CD	NumType=Card	13	flat	_	_
15	suara	suara	NOUN	NN	Number=Sing	10	obj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Curah	curah	NOUN	NN	Number=Sing	5	nsubj	_	_
2	hujan	hujan	NOUN	NN	Number=Sing	1	nmod	_	_
3	yang	yang	PRON	IN	PronType=Rel	4	nsubj	_	_
4	tinggi	tinggi	ADJ	JJ	_	1	acl:relcl	_	_
5	menyebabkan	sebab	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
6	banyak	banyak	DET	DT	Number=Plur|PronType=Ind	7	det	_	_
7	genangan	genang	NOUN	NN	Number=Sing	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	tempat	tempat	NOUN	NN	Number=Sing	7	appos	_	_
10	ideal	ideal	ADJ	JJ	_	9	amod	_	_
11	bagi	bagi	ADP	IN	_	12	case	_	_
12	nyamuk	nyamuk	NOUN	NN	Number=Sing	9	nmod	_	_
13	aedes	aedes	PROPN	NNP	_	12	nmod	_	_
14	berkembang	kembang	VERB	VB	Mood=Ind|Voice=Act	9	acl:relcl	_	_
15	biak	biak	VERB	VB	Mood=Ind|Voice=Act	14	xcomp	_	SpaceAfter=No
16	.	.	PUNCT	.	_	5	punct	_	_

~~~


