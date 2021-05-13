---
layout: base
title:  'Statistics of amod in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `amod`

This relation is universal.

602 nodes (3%) are attached to their parents as `amod`.

563 instances of `amod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19269102990033.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (568; 94% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (22; 4% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Raja	raja	NOUN	_	Number=Sing	5	nsubj	_	_
2	pertama	pertama	ADJ	_	NumType=Ord	1	amod	_	_
3	nya	nya	PRON	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	1	nmod:poss	_	_
4	adalah	adalah	AUX	_	_	5	cop	_	_
5	Mojmír	Mojmír	PROPN	_	_	0	root	_	_
6	I	i	ADJ	_	NumType=Ord	5	amod	_	_
7	(	(	PUNCT	_	_	8	punct	_	SpaceAfter=No
8	berkuasa	kuasa	VERB	_	Mood=Ind|Voice=Act	5	parataxis	_	_
9	830	830	NUM	_	NumType=Card	8	obl:tmod	_	_
10	–	–	PUNCT	_	_	11	punct	_	_
11	846	846	NUM	_	NumType=Card	9	flat	_	SpaceAfter=No
12	)	)	PUNCT	_	_	8	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Karena	karena	SCONJ	_	_	6	mark	_	_
2	seri	seri	NOUN	_	Number=Sing	6	nsubj	_	_
3	1	1	NUM	_	NumType=Card	2	nummod	_	_
4	bukan	bukan	PART	_	Polarity=Neg	6	advmod	_	_
5	lagi	lagi	ADV	_	_	6	advmod	_	_
6	yang	yang	PRON	_	PronType=Rel	9	advcl	_	_
7	lama	lama	ADJ	_	_	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	banyak	banyak	ADJ	_	_	0	root	_	_
10	pengguna	guna	NOUN	_	Number=Sing	9	nsubj	_	_
11	yang	yang	PRON	_	PronType=Rel	13	nsubj	_	_
12	bisa	bisa	AUX	_	_	13	aux	_	_
13	menghemat	hemat	VERB	_	Mood=Ind|Voice=Act	10	acl:relcl	_	_
14	100	100	NUM	_	NumType=Card	15	nummod	_	_
15	euro	euro	NOUN	_	Number=Sing	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	9	punct	_	_

~~~


