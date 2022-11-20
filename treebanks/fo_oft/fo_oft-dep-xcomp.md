---
layout: base
title:  'Statistics of xcomp in UD_Faroese-OFT'
udver: '2'
---

## Treebank Statistics: UD_Faroese-OFT: Relations: `xcomp`

This relation is universal.

55 nodes (1%) are attached to their parents as `xcomp`.

52 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21818181818182.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt> (28; 51% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (16; 29% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-ADJ.html">ADJ</a></tt> (5; 9% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Deyðadagur	deyðadagur	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	_
2	hansara	hann	PRON	Pron	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nmod	_	_
3	gjørdist	gera	VERB	V	Mood=Ind|Number=Sing|Tense=Past|Voice=Pass	0	root	_	_
4	tingdagur	tingdagur	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	xcomp	_	_
5	føroyinga	føroyingur	NOUN	N	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	3	nmod:poss	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Tróndur	Tróndur	PROPN	N	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	lovar	lova	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	at	at	PART	IM	_	2	mark	_	_
4	royna	royna	VERB	V	VerbForm=Inf	2	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Í	í	ADP	Pr	_	2	case	_	_
2	2011	2011	NUM	Num	Case=Dat	3	obl	_	_
3	varð	verða	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	hann	hann	PRON	Pron	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
5	útbúgvin	útbúgvin	ADJ	A	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	xcomp	_	_
6	sum	sum	SCONJ	CS	_	7	mark	_	_
7	lærari	lærari	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	advcl	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


