---
layout: base
title:  'Statistics of orphan in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `orphan`

This relation is universal.

30 nodes (0%) are attached to their parents as `orphan`.

22 instances of `orphan` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96666666666667.

The following 14 pairs of parts of speech are connected with `orphan`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (7; 23% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (5; 17% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (3; 10% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (2; 7% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-SYM.html">SYM</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 orphan	color:blue
1	Der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Kraftstoffvorrat	Kraftstoffvorrat	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	betrug	betragen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	90	90	NUM	CARD	NumType=Card	5	nummod	_	_
5	l	l	NOUN	XY	Abbr=Yes	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	8	punct	_	_
7	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Verbrauch	Verbrauch	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	3	conj	_	_
9	etwa	etwa	ADV	ADV	_	10	advmod	_	_
10	35	35	NUM	CARD	NumType=Card	11	nummod	_	_
11	l	l	NOUN	XY	Abbr=Yes	8	orphan	_	_
12	auf	auf	ADP	APPR	_	14	case	_	_
13	100	100	NUM	CARD	NumType=Card	14	nummod	_	_
14	km	km	NOUN	NN	Abbr=Yes|Case=Acc|Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 orphan	color:blue
1	Auf	auf	ADP	APPR	_	2	case	_	_
2	Lettisch	Lettisch	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	7	nmod	_	_
3	heißen	heißen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	6	det	_	_
5	entsprechenden	entsprechend	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	6	amod	_	_
6	Instrumente	Instrument	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	3	nsubj	_	_
7	Kokle	Kokle	PROPN	NE	Case=Nom|Gender=Masc|Number=Plur	3	xcomp	_	NamedEntity=Yes|SpaceAfter=No
8	,	,	PUNCT	$,	_	11	punct	_	_
9	auf	auf	ADP	APPR	_	10	case	_	_
10	Litauisch	Litauisch	NOUN	NE	Case=Acc|Gender=Neut|Number=Sing	11	orphan	_	_
11	Kanklės	Kanklės	PROPN	NE	Case=Acc|Gender=Neut|Number=Sing	7	conj	_	NamedEntity=Yes|SpaceAfter=No
12	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 11 orphan	color:blue
1	Letztere	letzt	ADJ	ADJA	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	2	nsubj	_	_
2	förderte	fördern	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	zunächst	zunächst	ADV	ADV	_	2	advmod	_	_
4	vor	vor	ADP	APPR	_	5	case	_	_
5	allem	alle	DET	PIS	Case=Dat|Gender=Neut|Number=Sing|PronType=Tot	2	obl	_	_
6	Ton	Ton	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	obj	_	_
7	und	und	CCONJ	KON	_	8	cc	_	_
8	Braunkohle	Braunkohle	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	6	conj	_	SpaceAfter=No
9	,	,	PUNCT	$,	_	16	punct	_	_
10	ab	ab	ADP	APPR	_	11	case	_	_
11	1893	1893	NUM	CARD	NumType=Card	16	orphan	_	_
12	auch	auch	ADV	ADV	_	16	orphan	_	_
13	in	in	ADP	APPR	_	15	case	_	_
14	großem	groß	ADJ	ADJA	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	15	amod	_	_
15	Maße	Maß	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	16	orphan	_	_
16	Kaolin	Kaolin	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	2	conj	_	_
17	für	für	ADP	APPR	_	19	case	_	_
18	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	Papierherstellung	Papierherstellung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	16	orphan	_	SpaceAfter=No
20	.	.	PUNCT	$.	_	2	punct	_	_

~~~


