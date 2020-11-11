---
layout: base
title:  'Statistics of xcomp in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `xcomp`

This relation is universal.

222 nodes (1%) are attached to their parents as `xcomp`.

222 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62162162162162.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (176; 79% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (34; 15% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (12; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	Itu	itu	PRON	_	PronType=Dem	0	root	_	_
2	lah	lah	PART	_	_	1	advmod:emph	_	_
3	yang	yang	PRON	_	PronType=Rel	4	nsubj	_	_
4	membuat	buat	VERB	_	Mood=Ind|Voice=Act	1	csubj	_	_
5	kami	kami	PRON	_	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	4	obj	_	_
6	tetap	tetap	ADV	_	_	7	advmod	_	_
7	kembali	kembali	VERB	_	Mood=Ind|Voice=Act	4	xcomp	_	_
8	lagi	lagi	ADV	_	_	7	advmod	_	_
9	dan	dan	CCONJ	_	_	10	cc	_	_
10	lagi	lagi	ADV	_	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Dan	dan	CCONJ	_	_	8	cc	_	_
2	hasil	hasil	NOUN	_	Number=Sing	8	nsubj:pass	_	_
3	nya	nya	DET	_	_	2	det	_	_
4	sama	sama	ADJ	_	_	8	advmod	_	_
5	sekali	kali	ADV	_	_	4	fixed	_	_
6	tidak	tidak	PART	_	Polarity=Neg	8	advmod	_	_
7	bisa	bisa	AUX	_	_	8	aux	_	_
8	dikatakan	kata	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
9	istimewa	istimewa	ADJ	_	_	8	xcomp	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Masuk	masuk	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
2	ke	ke	ADP	_	_	3	case	_	_
3	2016	2016	NUM	_	NumType=Card	1	obl:tmod	_	_
4	dan	dan	CCONJ	_	_	8	cc	_	_
5	hal	hal	NOUN	_	Number=Sing	8	nsubj	_	_
6	ini	ini	DET	_	PronType=Dem	5	det	_	_
7	semakin	makin	ADV	_	_	8	advmod	_	_
8	layak	layak	ADJ	_	_	1	conj	_	_
9	diperhatikan	hati	VERB	_	Mood=Ind|Voice=Pass	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


