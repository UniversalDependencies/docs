---
layout: base
title:  'Statistics of amod in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `amod`

This relation is universal.

8107 nodes (5%) are attached to their parents as `amod`.

7409 instances of `amod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2122856790428.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (7690; 95% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (146; 2% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (95; 1% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (78; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (22; 0% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (19; 0% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (18; 0% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (13; 0% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-X.html">X</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Tím	ten	DET	PDIS7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	_
2	smíchem	smích	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obl	4:obl:ins	_
3	ale	ale	CCONJ	J^-------------	_	4	cc	4:cc	_
4	dodávala	dodávat	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	každému	každý	DET	PLIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	6	det	6:det	_
6	jevu	jev	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	4	obl:arg	4:obl:arg:dat	_
7	nějaký	nějaký	DET	PZIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	9	det	9:det	_
8	snesitelnější	snesitelný	ADJ	AAIS4----2A----	Animacy=Inan|Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	smysl	smysl	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	Chci	chtít	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	hovořit	hovořit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	_
3	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	_
4	něčem	něco	PRON	PZ--6----------	Case=Loc|PronType=Ind	2	obl:arg	2:obl:arg:o:loc	_
5	jiném	jiný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	4	amod	4:amod	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
7	a	a	CCONJ	J^-------------	_	10	cc	10:cc	_
8	to	to	PART	TT-------------	_	7	fixed	7:fixed	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	_
10	symbolu	symbol	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	4	appos	4:appos	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Mont	Mont	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	3:nmod:nom	_
2	Saint	Saint	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	Michel	Michel	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
4	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


