---
layout: base
title:  'Statistics of discourse in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `discourse`

This relation is universal.

16 nodes (0%) are attached to their parents as `discourse`.

12 instances of `discourse` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.3125.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (9; 56% instances), <tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (3; 19% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (1; 6% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	'	'	PUNCT	Punct	_	5	punct	_	SpaceAfter=No
2	'	'	PUNCT	Punct	_	5	punct	_	_
3	Á	á	INTJ	Itj	_	5	discourse	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	níl	bí	VERB	PresInd	Mood=Ind|Polarity=Neg|Tense=Pres	0	root	_	_
6	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
7	chomh	chomh	ADV	Its	_	8	advmod	_	_
8	holc	olc	ADJ	Adj	Degree=Pos	5	xcomp:pred	_	_
9	san	sin	DET	CM	Dialect=Munster|PronType=Dem	8	det	_	_
10	ar	ar	ADP	Simp	_	11	case	_	_
11	fad	fad	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Búm	Búm	INTJ	Itj	_	0	root	_	_
2	bí	bí	INTJ	Itj	_	1	discourse	_	_
3	á	á	INTJ	Itj	_	1	discourse	_	_
4	de	de	INTJ	Itj	_	1	discourse	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Och	och	INTJ	Itj	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Punct	_	4	punct	_	_
3	a	a	PART	Voc	PartType=Voc	4	case:voc	_	_
4	chumannaigh	chumannaigh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	!	!	PUNCT	!	_	4	punct	_	_

~~~


