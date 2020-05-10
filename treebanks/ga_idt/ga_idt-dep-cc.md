---
layout: base
title:  'Statistics of cc in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `cc`

This relation is universal.

1765 nodes (3%) are attached to their parents as `cc`.

1760 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80963172804533.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (909; 52% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (462; 26% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (126; 7% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (90; 5% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (48; 3% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (44; 2% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (36; 2% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (21; 1% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (9; 1% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Thuig	tuig	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	Mary	Mary	PROPN	Noun	Gender=Fem|Number=Sing	1	nsubj	_	_
3	Harney	Harney	PROPN	Noun	Gender=Masc|Number=Sing	2	flat:name	_	_
4	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	obj	_	_
5	seo	seo	PRON	Dem	PronType=Dem	2	det	_	_
6	go	go	PART	Ad	PartType=Ad	7	mark:prt	_	_
7	breá	breá	ADJ	Adj	Degree=Pos	1	advmod	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	9	punct	_	_
9	agus	agus	CCONJ	Coord	_	10	cc	_	_
10	Charlie	Charlie	PROPN	Noun	Gender=Masc|Number=Sing	2	conj	_	_
11	McCreevy	McCreevy	PROPN	Noun	Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


