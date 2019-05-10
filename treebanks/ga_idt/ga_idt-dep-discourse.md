---
layout: base
title:  'Statistics of discourse in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `discourse`

This relation is universal.

6 nodes (0%) are attached to their parents as `discourse`.

6 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (4; 67% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 17% instances).


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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	MISE	mise	PRON	Pers	Number=Sing|Person=1|PronType=Emp	2	discourse	_	_
2	Roinn	roinn	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
3	ar	ar	ADP	Simp	_	6	case	_	_
4	a	a	PART	Nm	PartType=Num	5	mark:prt	_	_
5	trí	trí	NUM	Num	NumType=Card	6	nummod	_	_
6	amháin	amháin	ADJ	Adj	Degree=Pos	2	obl	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bheidh	bí	VERB	FutInd	Form=Len|Mood=Ind|Tense=Fut	6	acl:relcl	_	_
9	uait	ó	ADP	Prep	Number=Sing|Person=2	8	obl:prep	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


