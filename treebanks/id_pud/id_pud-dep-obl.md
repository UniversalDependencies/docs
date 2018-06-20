---
layout: base
title:  'Statistics of obl in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="id_pud-dep-obl-poss.html">obl:poss</a></tt>, <tt><a href="id_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

910 nodes (5%) are attached to their parents as `obl`.

755 instances of `obl` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.07362637362637.

The following 20 pairs of parts of speech are connected with `obl`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (532; 58% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (83; 9% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (82; 9% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (64; 7% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (42; 5% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (22; 2% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (17; 2% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Pengeluaran	_	VERB	VV	_	4	nsubj:pass	_	SpaceAfter=No
2	baru	_	ADJ	JJ	_	1	amod	_	_
3	ini	_	DET	DT	_	1	det	_	_
4	dipasok	_	VERB	VV	_	0	root	_	_
5	oleh	_	ADP	IN	_	6	case	_	_
6	rekening	_	NOUN	NN	_	4	obl	_	_
7	bank	_	NOUN	NN	_	6	compound	_	_
8	gemuk	_	ADJ	JJ	_	6	amod	_	_
9	Clinton	_	PROPN	NNP	_	6	nmod:poss	_	SpaceAfter=No
10	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl	color:blue
1	Hari	_	NOUN	NN	_	6	obl:tmod	_	_
2	ketiga	_	NUM	CD	_	1	amod	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	saya	_	PRON	PRP	_	6	nsubj	_	_
5	sudah	_	ADV	RB	_	6	aux	_	_
6	kembali	_	VERB	VV	_	0	root	_	_
7	ke	_	ADP	IN	_	8	case	_	_
8	Emicro	_	PROPN	NNP	_	6	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Saya	_	PRON	PRP	_	3	nsubj	_	_
2	juga	_	ADV	RB	_	3	aux	_	_
3	kesulitan	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
4	dengan	_	ADP	IN	_	5	case	_	_
5	kata	_	NOUN	NN	_	3	obl	_	_
6	sandi	_	NOUN	NN	_	5	compound	_	SpaceAfter=No
7	.	_	PUNCT	.	_	3	punct	_	_

~~~


