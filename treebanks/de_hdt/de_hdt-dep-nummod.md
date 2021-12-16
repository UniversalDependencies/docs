---
layout: base
title:  'Statistics of nummod in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `nummod`

This relation is universal.

58781 nodes (2%) are attached to their parents as `nummod`.

58776 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07053299535564.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (48097; 82% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (10036; 17% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (273; 0% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (167; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (70; 0% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (61; 0% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (38; 0% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (19; 0% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (9; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Zusätzliche	zusätzlich	ADJ	ADJA	Degree=Pos|Number=Plur	2	amod	_	_
2	Online-Stunden	Stunde	NOUN	NN	Gender=Fem|Number=Plur|Person=3	3	nsubj	_	_
3	kosten	kosten	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	in	in	ADP	APPR	AdpType=Prep|Case=Dat	6	case	_	_
5	allen	all	DET	PIDAT	Case=Dat|Number=Plur|Person=3	6	det	_	_
6	Fällen	Fall	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur|Person=3	3	obl	_	_
7	6	6	NUM	CARD	Number=Plur|NumType=Card|Person=3	8	nummod	_	_
8	Mark	Mark	NOUN	NN	Gender=Fem|Number=Plur|Person=3	3	obj	_	_
9	.	.	PUNCT	$.	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Der	Der	DET	ART	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Kaufpreis	Kaufpreis	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
3	soll	sollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	8	aux	_	_
4	etwa	etwa	ADV	ADV	_	5	advmod	_	_
5	15	15	NUM	CARD	Number=Plur|NumType=Card|Person=3	6	nummod	_	_
6	Millionen	Million	NOUN	NN	Gender=Fem|Number=Plur|Person=3	7	nummod	_	_
7	US-Dollar	Dollar	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	8	obj	_	_
8	betragen	betragen	VERB	VVINF	VerbForm=Inf	0	root	_	_
9	.	.	PUNCT	$.	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	MobilCom	MobilCom	PROPN	NE	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	plane	planen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	den	den	DET	ART	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Ausbau	Ausbau	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	2	obj	_	_
5	auf	auf	ADP	APPR	AdpType=Prep|Case=Acc	7	case	_	_
6	14.000	14.000	NUM	CARD	Number=Plur|NumType=Card|Person=3	7	nummod	_	_
7	Ports	Ports	X	FM	Foreign=Yes|Person=3	4	nmod	_	_
8	noch	noch	ADV	ADV	_	11	advmod	_	_
9	in	in	ADP	APPR	AdpType=Prep|Case=Dat	11	case	_	_
10	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	11	det	_	_
11	Januar	Januar	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	2	obl	_	_
12	.	.	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


