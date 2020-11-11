---
layout: base
title:  'Statistics of root in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `root`

This relation is universal.

1000 nodes (5%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.349.

The following 10 pairs of parts of speech are connected with `root`: -<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (823; 82% instances), -<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (86; 9% instances), -<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (60; 6% instances), -<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), -<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (9; 1% instances), -<tt><a href="id_pud-pos-SYM.html">SYM</a></tt> (5; 1% instances), -<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), -<tt><a href="id_pud-pos-DET.html">DET</a></tt> (2; 0% instances), -<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), -<tt><a href="id_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Kadang	kadang	ADV	_	PronType=Ind	4	advmod	_	_
2	kala	kala	NOUN	_	Number=Sing	1	fixed	_	_
3	seperti	seperti	ADP	_	_	4	case	_	_
4	kekuatan	kuat	NOUN	_	Number=Sing	0	root	_	_
5	super	super	ADJ	_	_	4	amod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 14 root	color:blue
1	Apa	apa	PRON	_	PronType=Rel	14	nsubj	_	_
2	yang	yang	SCONJ	_	_	4	mark	_	_
3	ia	ia	PRON	_	Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	katakan	kata	VERB	_	Mood=Ind|Voice=Act	1	acl:relcl	_	_
5	dan	dan	CCONJ	_	_	6	cc	_	_
6	apa	apa	PRON	_	PronType=Rel	1	conj	_	_
7	yang	yang	SCONJ	_	_	9	mark	_	_
8	ia	ia	PRON	_	Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	lakukan	laku	VERB	_	Mood=Ind|Voice=Act	6	acl:relcl	_	_
10	—	—	PUNCT	_	_	1	punct	_	_
11	sesungguhnya	sungguh	ADV	_	_	14	advmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	luar	luar	NOUN	_	Number=Sing	14	compound:a	_	_
14	biasa	biasa	ADJ	_	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


