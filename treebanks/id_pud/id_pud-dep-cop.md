---
layout: base
title:  'Statistics of cop in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `cop`

This relation is universal.

94 nodes (0%) are attached to their parents as `cop`.

94 instances of `cop` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22340425531915.

The following 5 pairs of parts of speech are connected with `cop`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (76; 81% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (10; 11% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (4; 4% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (3; 3% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 cop	color:blue
1	Terkubur	kubur	VERB	_	Mood=Ind|Voice=Pass	17	advcl	_	_
2	sedalam	dalam	NOUN	_	Number=Sing	1	obl	_	_
3	100	100	NUM	_	NumType=Card	4	nummod	_	_
4	meter	meter	NOUN	_	Number=Sing	2	nmod	_	_
5	(	(	PUNCT	_	_	7	punct	_	SpaceAfter=No
6	328	328	NUM	_	NumType=Card	7	nummod	_	_
7	kaki	kaki	NOUN	_	Number=Sing	4	appos	_	SpaceAfter=No
8	)	)	PUNCT	_	_	7	punct	_	_
9	di	di	ADP	_	_	11	case	_	_
10	bawah	bawah	NOUN	_	Number=Sing	11	nmod:lmod	_	_
11	tanah	tanah	NOUN	_	Number=Sing	4	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	1	punct	_	_
13	Pyongyang	Pyongyang	PROPN	_	_	17	nsubj	_	_
14	Metro	Metro	PROPN	_	_	13	flat:name	_	_
15	adalah	adalah	AUX	_	_	17	cop	_	_
16	salah	salah	ADJ	_	_	17	advmod	_	_
17	satu	satu	NUM	_	NumType=Card	18	nummod	_	_
18	sistem	sistem	NOUN	_	Number=Sing	0	root	_	_
19	komuter	komuter	NOUN	_	Number=Sing	18	nmod	_	_
20	terdalam	dalam	ADJ	_	Degree=Sup	18	amod	_	_
21	di	di	ADP	_	_	22	case	_	_
22	dunia	dunia	NOUN	_	Number=Sing	20	obl	_	SpaceAfter=No
23	.	.	PUNCT	_	_	18	punct	_	_

~~~


