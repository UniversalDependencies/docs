---
layout: base
title:  'Statistics of nummod in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `nummod`

This relation is universal.

1114 nodes (1%) are attached to their parents as `nummod`.

950 instances of `nummod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25314183123878.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (938; 84% instances), <tt><a href="is_modern-pos-NUM.html">NUM</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (118; 11% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (30; 3% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="is_modern-pos-PART.html">PART</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Það	það	PRON	PRO-N	Case=Nom	3	nsubj	_	_
2	voru	vera	AUX	BEDI	Mood=Ind|Tense=Past	3	cop	_	_
3	settir	setja	VERB	VAN	Tense=Past|VerbForm=Part	0	root	_	_
4	80	áttatíu	NUM	NUM-N	Case=Nom	5	nummod	_	_
5	milljarðar	milljarður	NOUN	NS-N	Case=Nom|Definite=Ind|Number=Plur	3	xcomp	_	_
6	í	í	ADP	P	_	7	case	_	_
7	skuldaniðurfellingu	skuldaniðurfelling	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Þeir	hann	PRON	PRO-N	Case=Nom	2	nsubj	_	_
2	komust	koma	VERB	VBDI	Mood=Ind|Tense=Past	0	root	_	_
3	í	í	ADP	P	_	4	case	_	_
4	8	átta	NUM	NUM-N	Case=Nom	2	obl	_	_
5	5	fimm	NUM	NUM-N	Case=Nom	4	nummod	_	_
6	og	og	CCONJ	CONJ	_	7	cc	_	_
7	gáfu	gefa	VERB	VBDI	Mood=Ind|Tense=Past	2	conj	_	OriginalHead=0
8	það	sá	DET	D-A	Case=Acc	9	det	_	_
9	forskot	forskot	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	7	obj	_	_
10	ekki	ekki	ADV	NEG	_	7	advmod	_	_
11	af	af	ADP	P	_	12	case	_	_
12	hendi	hönd	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	7	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Þrír	þrír	NUM	NUM-N	Case=Nom	2	nummod	_	_
2	Íslendingar	íslendingur	PROPN	NPRS-N	_	3	nsubj	_	_
3	verða	verða	VERB	RDPI	Mood=Ind|Tense=Pres	0	root	_	_
4	því	það	PRON	PRO-D	Case=Dat	3	obl	_	_
5	í	í	ADP	P	_	6	case	_	_
6	eldlínunni	eldlína	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	3	obl	_	_
7	á	á	ADP	P	_	8	case	_	_
8	EM	em	PROPN	NPR-D	_	3	obl	_	_
9	í	í	ADP	P	_	10	case	_	_
10	sundi	sund	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	8	obl	_	_
11	í	í	ADP	P	_	12	case	_	_
12	kvöld	kvöld	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	3	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


