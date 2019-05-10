---
layout: base
title:  'Statistics of det in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="de_hdt-dep-det-poss.html">det:poss</a></tt>.

58537 nodes (10%) are attached to their parents as `det`.

58527 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42342450074312.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (54202; 93% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (2694; 5% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1269; 2% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (274; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (43; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (41; 0% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (13; 0% instances), <tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Zusätzliche	zusätzlich	ADJ	ADJA	Degree=Pos|Number=Plur	2	amod	_	_
2	Online-Stunden	Stunde	NOUN	NN	Gender=Fem|Number=Plur|Person=3	3	nsubj	_	_
3	kosten	kosten	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
4	in	in	ADP	APPR	Case=Dat	6	case	_	_
5	allen	all	DET	PIDAT	Case=Dat|Number=Plur|Person=3	6	det	_	_
6	Fällen	Fall	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur|Person=3	3	obl	_	_
7	6	6	NUM	CARD	Number=Plur|Person=3	8	nummod	_	_
8	Mark	Mark	NOUN	NN	Gender=Fem|Number=Plur|Person=3	3	obj	_	_
9	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Laxer	Laxer	ADJ	ADJA	Gender=Masc|Number=Sing	2	amod	_	_
2	Umgang	Umgang	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
3	mit	mit	ADP	APPR	Case=Dat	4	case	_	_
4	Kundendaten	Datum	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	2	nmod	_	_
5	bei	bei	ADP	APPR	Case=Dat	7	case	_	_
6	der	der	DET	ART	Case=Dat|Gender=Fem|Number=Sing	7	det	_	_
7	Telekom	Telekom	PROPN	NE	Case=Dat|Gender=Fem|Number=Sing|Person=3	2	nmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Mit	Mit	ADP	APPR	Case=Dat	3	case	_	_
2	einer	einer	DET	ART	Case=Dat|Gender=Fem|Number=Sing	3	det	_	_
3	Batterie	Batterie	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	9	obl	_	_
4	soll	sollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux	_	_
5	der	der	DET	ART	Case=Nom|Gender=Masc|Number=Sing	6	det	_	_
6	Pocketreader	Pocketreader	X	FM	Person=3	9	nsubj	_	_
7	20	20	NUM	CARD	Number=Plur|Person=3	8	nummod	_	_
8	Stunden	Stunde	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	9	obl	_	_
9	laufen	laufen	VERB	VVINF	_	0	root	_	_
10	.	.	PUNCT	$.	_	9	punct	_	_

~~~


