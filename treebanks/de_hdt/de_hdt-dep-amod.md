---
layout: base
title:  'Statistics of amod in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `amod`

This relation is universal.

33429 nodes (6%) are attached to their parents as `amod`.

33428 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09031080798109.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (32074; 96% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (696; 2% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (474; 1% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (68; 0% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (47; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (44; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (18; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Europäischer	europäisch	ADJ	ADJA	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	Fernsehsender	Sender	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	0	root	_	_
3	im	im	ADP	APPRART	Case=Dat	4	case	_	_
4	Internet	Internet	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	2	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Die	Die	DET	ART	Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	max.mobil	max.mobil	PROPN	NE	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
3	gehört	gehören	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	zu	zu	ADP	APPR	Case=Dat	6	case	_	_
5	81	81	NUM	CARD	Number=Plur|Person=3	6	nummod	_	_
6	Prozent	Prozent	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	3	obl	_	_
7	der	der	DET	ART	Case=Dat|Gender=Fem|Number=Sing	9	det	_	_
8	Deutschen	deutsch	ADJ	ADJA	Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	Telekom	Telekom	PROPN	NE	Case=Dat|Gender=Fem|Number=Sing|Person=3	3	obj	_	_
10	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	Als	Als	ADP	KOKOM	_	2	case	_	_
2	Zielgruppe	Zielgruppe	NOUN	NN	Gender=Fem|Number=Sing|Person=3	3	obl	_	_
3	sieht	sehen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	Meister	Meister	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
5	15	15	NUM	CARD	Number=Plur|Person=3	3	obj	_	_
6	bis	bis	ADP	APPR	_	8	case	_	_
7	25-jährige	jährig	ADJ	ADJA	Degree=Pos|Number=Plur	8	amod	_	_
8	Surfer	Surfer	X	FM	Person=3	5	nmod	_	_
9	.	.	PUNCT	$.	_	3	punct	_	_

~~~


