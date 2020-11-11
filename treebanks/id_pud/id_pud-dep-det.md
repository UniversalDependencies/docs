---
layout: base
title:  'Statistics of det in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `det`

This relation is universal.

700 nodes (4%) are attached to their parents as `det`.

442 instances of `det` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22428571428571.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (646; 92% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (19; 3% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (11; 2% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 det	color:blue
1	Pengeluaran	keluar	NOUN	_	Number=Sing	4	nsubj:pass	_	_
2	baru	baru	ADJ	_	_	1	amod	_	_
3	ini	ini	DET	_	PronType=Dem	1	det	_	_
4	dipasok	pasok	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
5	oleh	oleh	ADP	_	_	6	case	_	_
6	rekening	rekening	NOUN	_	Number=Sing	4	obl:agent	_	_
7	bank	bank	NOUN	_	Number=Sing	6	nmod	_	_
8	gemuk	gemuk	ADJ	_	_	6	amod	_	_
9	Clinton	Clinton	PROPN	_	_	6	nmod:poss	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 det	color:blue
1	Selain	selain	ADP	_	_	2	case	_	_
2	itu	itu	PRON	_	PronType=Dem	11	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	terjadi	jadi	VERB	_	Mood=Ind|Voice=Pass	11	csubj:pass	_	_
5	nya	nya	DET	_	_	4	det	_	_
6	badai	badai	NOUN	_	Number=Sing	4	nsubj:pass	_	_
7	di	di	ADP	_	_	8	case	_	_
8	pulau	pulau	NOUN	_	Number=Sing	6	nmod	_	_
9	ini	ini	DET	_	PronType=Dem	8	det	_	_
10	mungkin	mungkin	AUX	_	_	11	aux	_	_
11	terjadi	jadi	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
12	selama	lama	ADP	_	_	13	case	_	_
13	musim	musim	NOUN	_	Number=Sing	11	obl:tmod	_	_
14	panas	panas	ADJ	_	_	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det	color:blue
1	Dua	dua	NUM	_	NumType=Card	2	nsubj	_	_
2	mengukur	ukur	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
3	lama	lama	ADJ	_	_	2	ccomp	_	_
4	nya	nya	DET	_	_	3	det	_	_
5	bulan-bulan	bulan	NOUN	_	Number=Plur	4	nsubj	_	_
6	kalender	kalender	NOUN	_	Number=Sing	5	nmod	_	_
7	Cina	Cina	PROPN	_	_	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


