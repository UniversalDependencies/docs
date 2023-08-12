---
layout: base
title:  'Statistics of xcomp in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `xcomp`

This relation is universal.

279 nodes (1%) are attached to their parents as `xcomp`.

273 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.51971326164875.

The following 17 pairs of parts of speech are connected with `xcomp`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (115; 41% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (80; 29% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (31; 11% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (16; 6% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-PART.html">PART</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Rezervy	rezerva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj|4:nsubj:xsubj	_
3	nesmějí	smět	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	mít	mít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	aktivní	aktivní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	zůstatek	zůstatek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	(13)	(13)	PUNCT	Z:-------------	_	5	punct	5:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	0:root	_
6	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	LId=vést-1
7	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obj	6:obj	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=v-1
9	českém	český	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	jazyce	jazyk	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	6:obl:v:loc	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	(9)	(9)	PUNCT	Z:-------------	_	5	punct	5:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	0:root	_
6	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	LId=vést-1
7	jedno	jeden	NUM	ClNS4----------	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod	8:nummod	_
8	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obj	6:obj	_
9	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=za-1
10	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	11:amod	LId=účetní-1
11	jednotku	jednotka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	6:obl:za:acc	_
12	jako	jako	SCONJ	J,-------------	_	13	mark	13:mark	_
13	celek	celek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	11	xcomp	11:xcomp	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


