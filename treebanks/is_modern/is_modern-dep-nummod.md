---
layout: base
title:  'Statistics of nummod in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `nummod`

This relation is universal.

578 nodes (1%) are attached to their parents as `nummod`.

491 instances of `nummod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26124567474048.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (487; 84% instances), <tt><a href="is_modern-pos-NUM.html">NUM</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (62; 11% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (15; 3% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="is_modern-pos-PART.html">PART</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	Þá	þá	ADV	ADV	_	8	advmod	_	IFD_tag=aa
2	væru	vera	AUX	BEDS	Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	IFD_tag=svg3fþ
3	ekki	ekki	ADV	NEG	_	8	advmod	_	IFD_tag=aa
4	34	34	NUM	NUM-N	NumType=Ord	6	nummod	_	IFD_tag=to
5	þúsund	þúsund	NUM	NUM-N	Case=Nom|Gender=Fem|Number=Plur|NumType=Card	6	nummod	_	IFD_tag=tfvfn
6	undirskriftir	undirskrift	NOUN	NS-N	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	8	nsubj	_	IFD_tag=nvfn
7	gegn	gegn	ADP	P	_	8	case	_	IFD_tag=aþ
8	þessu	þessi	DET	D-D	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	IFD_tag=faheþ|SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Þeir	hann	PRON	PRO-N	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	2	nsubj	_	IFD_tag=fpkfn
2	komust	koma	VERB	VBDI	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	IFD_tag=sfm3fþ
3	í	í	ADP	P	_	4	case	_	IFD_tag=ao
4	8	átta	NUM	NUM-N	NumType=Card	2	obl	_	IFD_tag=ta
5	5	fimm	NUM	NUM-N	NumType=Card	4	nummod	_	IFD_tag=ta
6	og	og	CCONJ	CONJ	_	7	cc	_	IFD_tag=c
7	gáfu	gefa	VERB	VBDI	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	IFD_tag=sfg3fþ|OriginalHead=0
8	það	sá	DET	D-A	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	9	det	_	IFD_tag=faheo
9	forskot	forskot	NOUN	N-A	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	7	obj	_	IFD_tag=nheo
10	ekki	ekki	ADV	NEG	_	7	advmod	_	IFD_tag=aa
11	af	af	ADP	P	_	12	case	_	IFD_tag=aþ
12	hendi	hönd	NOUN	N-D	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing	7	obl	_	IFD_tag=nveþ|SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Þrír	þrír	NUM	NUM-N	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	2	nummod	_	IFD_tag=tfkfn
2	Íslendingar	íslendingur	PROPN	NPRS-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	3	nsubj	_	IFD_tag=nkfn-s
3	verða	verða	VERB	RDPI	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	IFD_tag=sfg3fn
4	því	það	PRON	PRO-D	Case=Dat	3	obl	_	IFD_tag=x
5	í	í	ADP	P	_	6	case	_	IFD_tag=ao
6	eldlínunni	eldlína	NOUN	N-D	Case=Dat|Definite=Def|Gender=Fem|Number=Sing	3	obl	_	IFD_tag=nveþg
7	á	á	ADP	P	_	8	case	_	IFD_tag=aþ
8	EM	em	PROPN	NPR-D	_	3	obl	_	IFD_tag=x
9	í	í	ADP	P	_	10	case	_	IFD_tag=ao
10	sundi	sund	NOUN	N-D	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	8	obl	_	IFD_tag=nheþ
11	í	í	ADP	P	_	12	case	_	IFD_tag=ao
12	kvöld	kvöld	NOUN	N-A	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	3	obl	_	IFD_tag=nheo|SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	IFD_tag=.

~~~


