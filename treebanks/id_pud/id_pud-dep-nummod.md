---
layout: base
title:  'Statistics of nummod in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `nummod`

This relation is universal.

359 nodes (2%) are attached to their parents as `nummod`.

209 instances of `nummod` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13927576601671.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (313; 87% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (38; 11% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Periode	periode	NOUN	_	Number=Sing	7	nsubj	_	_
2	tunggu	tunggu	VERB	_	Mood=Ind|Voice=Act	1	acl	_	_
3	saat	saat	NOUN	_	Number=Sing	1	nmod:tmod	_	_
4	ini	ini	DET	_	PronType=Dem	3	det	_	_
5	adalah	adalah	AUX	_	_	7	cop	_	_
6	delapan	delapan	NUM	_	NumType=Card	7	nummod	_	_
7	minggu	minggu	NOUN	_	Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Maksimal	maksimal	ADJ	_	_	2	advmod	_	_
2	diberikan	beri	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
3	$	$	SYM	_	_	2	nsubj:pass	_	SpaceAfter=No
4	5.000	5.000	NUM	_	NumType=Card	3	nummod	_	_
5	per	per	ADP	_	_	6	case	_	_
6	orang	orang	NOUN	_	Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nummod	color:blue
1	Universiade	Universiade	PROPN	_	_	6	nsubj:pass	_	_
2	Musim	Musim	PROPN	_	_	1	flat:name	_	_
3	Dingin	Dingin	PROPN	_	_	1	flat:name	_	_
4	2019	2019	NUM	_	NumType=Card	1	nummod	_	_
5	akan	akan	AUX	_	_	6	aux	_	_
6	diselenggarakan	selenggara	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
7	oleh	oleh	ADP	_	_	8	case	_	_
8	Krasnoyarsk	Krasnoyarsk	PROPN	_	_	6	obl:agent	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


