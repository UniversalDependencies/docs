---
layout: base
title:  'Statistics of csubj in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="id_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

26 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.65384615384615.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (6; 23% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (6; 23% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Bukan	bukan	PART	_	Polarity=Neg	2	advmod	_	_
2	itu	itu	PRON	_	PronType=Dem	0	root	_	_
3	yang	yang	SCONJ	_	_	5	mark	_	_
4	kita	kita	PRON	_	Clusivity=In|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	butuhkan	butuh	VERB	_	Mood=Ind|Voice=Act	2	csubj	_	_
6	di	di	ADP	_	_	7	case	_	_
7	negara	negara	NOUN	_	Number=Sing	5	obl	_	_
8	ini	ini	DET	_	PronType=Dem	7	det	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	saudara-saudara	saudara	NOUN	_	Number=Plur	2	vocative	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Ambruk	ambruk	VERB	_	Mood=Ind|Voice=Act	7	csubj	_	_
2	nya	nya	DET	_	PronType=Dem	1	det	_	_
3	dan	dan	CCONJ	_	_	4	cc	_	_
4	intervensi	intervensi	NOUN	_	Number=Sing	1	conj	_	_
5	puluhan	puluh	NUM	_	NumType=Card	6	nummod	_	_
6	bank	bank	NOUN	_	Number=Sing	1	nmod	_	_
7	mengakibatkan	akibat	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
8	pelarian	lari	NOUN	_	Number=Sing	7	obj	_	_
9	modal	modal	NOUN	_	Number=Sing	8	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	membuat	buat	VERB	_	Mood=Ind|Voice=Act	7	advcl	_	_
12	banyak	banyak	DET	_	Number=Plur|PronType=Ind	13	det	_	_
13	usaha	usaha	NOUN	_	Number=Sing	14	nsubj	_	_
14	menjadi	jadi	VERB	_	Mood=Ind|Voice=Act	11	ccomp	_	_
15	bangkrut	bangkrut	VERB	_	Mood=Ind|Voice=Act	14	xcomp	_	SpaceAfter=No
16	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 csubj	color:blue
1	Selain	selain	ADP	_	_	2	case	_	_
2	itu	itu	PRON	_	PronType=Dem	4	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	banyak	banyak	ADJ	_	_	0	root	_	_
5	dari	dari	ADP	_	_	6	case	_	_
6	elit	elit	NOUN	_	Number=Sing	12	obl	_	_
7	Makedonia	Makedonia	PROPN	_	_	6	nmod	_	_
8	dan	dan	CCONJ	_	_	9	cc	_	_
9	Persia	Persia	PROPN	_	_	7	conj	_	_
10	yang	yang	PRON	_	PronType=Rel	12	nsubj	_	_
11	saling	saling	ADV	_	_	12	advmod	_	_
12	mengawini	kawin	VERB	_	Mood=Ind|Voice=Act	4	csubj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


