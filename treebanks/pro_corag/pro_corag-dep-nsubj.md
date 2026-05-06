---
layout: base
title:  'Statistics of nsubj in UD_Old_Occitan-CorAG'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CorAG: Relations: `nsubj`

This relation is universal.

2690 nodes (5%) are attached to their parents as `nsubj`.

2288 instances of `nsubj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.50371747211896.

The following 14 pairs of parts of speech are connected with `nsubj`: <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (1451; 54% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (1002; 37% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-PROPN.html">PROPN</a></tt> (47; 2% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (39; 1% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (36; 1% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-PROPN.html">PROPN</a></tt> (35; 1% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (28; 1% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (14; 1% instances), <tt><a href="pro_corag-pos-ADV.html">ADV</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pro_corag-pos-NUM.html">NUM</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj	color:blue
1	Item	_	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	_	PUNCT	_	_	1	punct	_	_
3	nulh	_	DET	_	Polarity=Neg	4	det	_	_
4	ceys	_	NOUN	_	_	7	nsubj	_	_
5	no-	_	ADV	_	Polarity=Neg	7	advmod	_	_
6	-s	_	PRON	_	Person=3|PronType=Prs|Reflex=Yes	8	expl	_	_
7	deu	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
8	judyar	_	VERB	_	VerbForm=Inf	7	xcomp	_	_
9	fore	_	ADP	_	_	11	case	_	_
10	la	_	DET	_	_	11	det	_	_
11	cadene	_	NOUN	_	_	8	obl	_	_
12	de	_	ADP	_	_	14	case	_	_
13	la	_	DET	_	_	14	det	_	_
14	viele	_	NOUN	_	_	11	nmod	_	SpaceAfter=No
15	.	_	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 nsubj	color:blue
1	e	_	CCONJ	_	_	11	cc	_	_
2	si-	_	SCONJ	_	_	4	mark	_	_
3	-no	_	ADV	_	Polarity=Neg	4	advmod	_	_
4	pod	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	11	advcl	_	_
5	lui	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	aver	_	VERB	_	VerbForm=Inf	4	xcomp	_	_
7	a	_	ADP	_	_	8	case	_	_
8	dret	_	NOUN	_	_	6	obl	_	_
9	ed	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	medix	_	ADJ	_	_	9	amod	_	_
11	fase	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
12	so	_	PRON	_	Gender=Neut|Number=Sing|PronType=Dem	11	obj	_	_
13	que	_	PRON	_	PronType=Rel	16	obj	_	_
14	ed	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
15	deu	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	12	acl:relcl	_	_
16	far	_	VERB	_	VerbForm=Inf	15	xcomp	_	SpaceAfter=No
17	.	_	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj	color:blue
1	Navalhes	_	PROPN	_	_	9	nsubj	_	SpaceAfter=No
2	,	_	PUNCT	_	_	3	punct	_	_
3	Andonhs	_	PROPN	_	_	1	conj	_	SpaceAfter=No
4	,	_	PUNCT	_	_	5	punct	_	_
5	Coarrasa	_	PROPN	_	_	1	conj	_	SpaceAfter=No
6	,	_	PUNCT	_	_	7	punct	_	_
7	Gergerest	_	PROPN	_	_	1	conj	_	_
8	ac	_	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	9	obj	_	_
9	judyan	_	VERB	_	Number=Plur|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No
10	.	_	PUNCT	_	_	9	punct	_	_

~~~


