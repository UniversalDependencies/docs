---
layout: base
title:  'Statistics of csubj in UD_Indonesian'
udver: '2'
---

## Treebank Statistics: UD_Indonesian: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="id-dep-csubj-pass.html">csubj:pass</a></tt>.

26 nodes (0%) are attached to their parents as `csubj`.

26 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.61538461538461.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (14; 54% instances), <tt><a href="id-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="id-pos-NUM.html">NUM</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="id-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="id-pos-VERB.html">VERB</a></tt>-<tt><a href="id-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	Pada	_	ADP	_	_	3	case	_	_
2	16	_	NUM	_	NumType=Card	3	nummod	_	_
3	Juli	_	NOUN	_	_	8	obl	_	_
4	berita	_	NOUN	_	_	5	nsubj	_	_
5	adanya	_	VERB	_	_	8	csubj	_	_
6	pembantaian	_	NOUN	_	_	5	obj	_	_
7	mulai	_	ADV	_	_	8	advmod	_	_
8	tersebar	_	VERB	_	_	0	root	_	SpaceAfter=No
9	.	_	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 csubj	color:blue
1	Yang	_	PRON	_	_	2	nsubj	_	_
2	membedakan	_	VERB	_	_	9	csubj	_	_
3	RE	_	NOUN	_	_	2	obj	_	_
4	sarkoplasmik	_	ADJ	_	_	3	amod	_	_
5	dari	_	ADP	_	_	6	case	_	_
6	RE	_	PROPN	_	_	3	nmod	_	_
7	halus	_	ADJ	_	_	6	amod	_	_
8	adalah	_	AUX	_	_	9	cop	_	_
9	kandungan	_	NOUN	_	_	0	root	_	_
10	proteinnya	_	NOUN	_	_	9	compound	_	SpaceAfter=No
11	.	_	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 25 csubj	color:blue
1	Dengan	_	ADP	_	_	2	case	_	_
2	mengetik	_	VERB	_	_	14	xcomp	_	_
3	secara	_	ADP	_	_	4	case	_	_
4	acak	_	NOUN	_	_	2	obl	_	SpaceAfter=No
5	,	_	PUNCT	_	_	14	punct	_	_
6	peluang	_	NOUN	_	_	11	nsubj	_	_
7	huruf	_	NOUN	_	_	6	compound	_	_
8	pertama	_	ADJ	_	_	7	nummod	_	_
9	yang	_	PRON	_	_	10	nsubj:pass	_	_
10	diketik	_	VERB	_	_	6	acl	_	_
11	merupakan	_	VERB	_	_	14	csubj	_	_
12	b	_	NOUN	_	_	11	obj	_	_
13	adalah	_	AUX	_	_	14	cop	_	_
14	1	_	NUM	_	NumType=Card	0	root	_	_
15	/	_	SYM	_	_	29	punct	_	_
16	50	_	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
17	,	_	PUNCT	_	_	29	punct	_	_
18	dan	_	CCONJ	_	_	29	cc	_	_
19	kemungkinan	_	NOUN	_	_	25	nsubj	_	_
20	huruf	_	NOUN	_	_	19	compound	_	_
21	ke	_	NUM	_	NumType=Card	22	det	_	_
22	dua	_	NUM	_	NumType=Card	20	nummod	_	_
23	yang	_	PRON	_	_	24	nsubj:pass	_	_
24	diketik	_	VERB	_	_	19	acl	_	_
25	merupakan	_	VERB	_	_	29	csubj	_	_
26	a	_	NOUN	_	_	25	obj	_	_
27	juga	_	ADV	_	_	29	advmod	_	_
28	adalah	_	AUX	_	_	29	cop	_	_
29	1	_	NUM	_	NumType=Card	14	conj	_	_
30	/	_	SYM	_	_	29	punct	_	_
31	50	_	NUM	_	NumType=Card	29	nummod	_	SpaceAfter=No
32	,	_	PUNCT	_	_	33	punct	_	_
33	dst	_	NOUN	_	_	14	conj	_	SpaceAfter=No
34	.	_	PUNCT	_	_	14	punct	_	_

~~~


