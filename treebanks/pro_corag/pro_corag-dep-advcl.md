---
layout: base
title:  'Statistics of advcl in UD_Old_Occitan-CorAG'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CorAG: Relations: `advcl`

This relation is universal.

1403 nodes (3%) are attached to their parents as `advcl`.

721 instances of `advcl` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 14.2516037063436.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (1279; 91% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (37; 3% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (27; 2% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (26; 2% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-ADV.html">ADV</a></tt> (13; 1% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 advcl	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 advcl	color:blue
1	Et	_	CCONJ	_	_	9	cc	_	_
2	si	_	SCONJ	_	_	3	mark	_	_
3	obs	_	NOUN	_	_	9	advcl	_	_
4	ere	_	AUX	_	Number=Sing|Person=3|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	_	PUNCT	_	_	3	punct	_	_
6	que	_	SCONJ	_	_	9	mark	_	_
7	-u	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
8	ne	_	PRON	_	Person=3|PronType=Prs	9	obl	_	_
9	destrencos	_	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	lo	_	DET	_	_	11	det	_	_
11	senhor	_	NOUN	_	_	9	obj	_	_
12	de	_	ADP	_	_	14	case	_	_
13	l'	_	DET	_	_	14	det	_	SpaceAfter=No
14	omi	_	NOUN	_	_	11	nmod	_	_
15	o	_	CCONJ	_	_	18	cc	_	_
16	de	_	ADP	_	_	18	case	_	_
17	la	_	DET	_	_	18	det	_	_
18	femne	_	NOUN	_	_	14	conj	_	_
19	qui	_	PRON	_	PronType=Rel	22	nsubj	_	_
20	tale	_	NOUN	_	_	22	obj	_	_
21	aura	_	AUX	_	Number=Sing|Person=3|VerbForm=Fin	22	aux	_	_
22	feyte	_	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	14	acl:relcl	_	SpaceAfter=No
23	.	_	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 advcl	color:blue
1	Item	_	ADV	_	_	10	advmod	_	SpaceAfter=No
2	,	_	PUNCT	_	_	1	punct	_	_
3	quant	_	SCONJ	_	_	6	mark	_	_
4	lo	_	DET	_	_	5	det	_	_
5	Rey	_	NOUN	_	_	6	nsubj	_	_
6	fut	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	10	advcl	_	_
7	bert	_	ADP	_	_	8	case	_	_
8	Bordeu	_	PROPN	_	_	6	obl	_	_
9	LX	_	NUM	_	_	10	nummod	_	_
10	soudz	_	NOUN	_	_	0	root	_	SpaceAfter=No
11	.	_	PUNCT	_	_	10	punct	_	_

~~~


