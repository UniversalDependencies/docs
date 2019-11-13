---
layout: base
title:  'Statistics of cc in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `cc`

This relation is universal.

1084 nodes (3%) are attached to their parents as `cc`.

1081 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82656826568266.

The following 15 pairs of parts of speech are connected with `cc`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (591; 55% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (261; 24% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (58; 5% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (44; 4% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (39; 4% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (28; 3% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (22; 2% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (12; 1% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (11; 1% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	naoi	naoi	NUM	Num	NumType=Card	4	nummod	_	_
4	mbliana	bliain	NOUN	Noun	Form=Ecl|Gender=Fem	1	xcomp:pred	_	_
5	agus	agus	CCONJ	Coord	_	6	cc	_	_
6	leathchéad	céad	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Cheannaigh	ceannaigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	Seán	Seán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
3	leabhar	leabhar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	obj	_	_
4	agus	agus	CCONJ	Coord	_	5	cc	_	_
5	léigh	léigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	1	conj	_	_
6	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
7	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	É	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	0	root	_	_
2	liath	liath	ADJ	Adj	Degree=Pos	1	amod	_	_
3	nó	nó	CCONJ	Coord	_	4	cc	_	_
4	bán	bán	ADJ	Adj	Degree=Pos	2	conj	_	_
5	nó	nó	CCONJ	Coord	_	6	cc	_	_
6	donn	donn	ADJ	Adj	Degree=Pos	2	conj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


