---
layout: base
title:  'Statistics of iobj in UD_Indonesian'
udver: '2'
---

## Treebank Statistics: UD_Indonesian: Relations: `iobj`

This relation is universal.

22 nodes (0%) are attached to their parents as `iobj`.

21 instances of `iobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.90909090909091.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (8; 36% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (7; 32% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-NUM.html">NUM</a></tt> (2; 9% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-SYM.html">SYM</a></tt> (1; 5% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 iobj	color:blue
1	Kapal	_	NOUN	_	_	4	nsubj	_	_
2	ini	_	DET	_	_	1	det	_	_
3	adalah	_	AUX	_	_	4	cop	_	_
4	kapal	_	NOUN	_	_	0	root	_	_
5	pukat	_	NOUN	_	_	4	compound	_	_
6	ikan	_	NOUN	_	_	5	compound	_	_
7	yang	_	PRON	_	_	8	obj	_	_
8	dibeli	_	VERB	_	_	4	acl	_	_
9	Greenpeace	_	PROPN	_	_	8	obj	_	_
10	empat	_	NUM	_	NumType=Card	11	nummod	_	_
11	tahun	_	NOUN	_	_	8	iobj	_	_
12	setelah	_	ADP	_	_	13	case	_	_
13	kapal	_	NOUN	_	_	8	obl	_	_
14	pertama	_	NUM	_	NumType=Card	13	nummod	_	_
15	tenggelam	_	VERB	_	_	13	advmod	_	SpaceAfter=No
16	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Bandar	_	NOUN	_	_	4	nsubj:pass	_	_
2	udara	_	NOUN	_	_	1	compound	_	_
3	ini	_	DET	_	_	1	det	_	_
4	diberi	_	VERB	_	_	0	root	_	_
5	nama	_	NOUN	_	_	4	obj	_	_
6	Venustiano	_	PROPN	_	_	4	iobj	_	_
7	Carranza	_	PROPN	_	_	6	flat	_	SpaceAfter=No
8	,	_	PUNCT	_	_	6	punct	_	_
9	seorang	_	DET	_	_	10	det	_	_
10	presiden	_	NOUN	_	_	6	appos	_	_
11	Meksiko	_	PROPN	_	_	10	flat	_	SpaceAfter=No
12	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 iobj	color:blue
1	Kota	_	NOUN	_	_	3	nsubj	_	_
2	ini	_	DET	_	_	1	det	_	_
3	memiliki	_	VERB	_	_	0	root	_	_
4	kode	_	NOUN	_	_	3	obj	_	_
5	pos	_	NOUN	_	_	4	compound	_	_
6	38019	_	NUM	_	NumType=Card	3	iobj	_	SpaceAfter=No
7	.	_	PUNCT	_	_	3	punct	_	_

~~~


