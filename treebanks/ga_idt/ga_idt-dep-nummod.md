---
layout: base
title:  'Statistics of nummod in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `nummod`

This relation is universal.

333 nodes (1%) are attached to their parents as `nummod`.

312 instances of `nummod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10810810810811.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (308; 92% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (11; 3% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (9; 3% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	naoi	naoi	NUM	Num	NumType=Card	4	nummod	_	_
4	mbliana	bliain	NOUN	Noun	Form=Ecl|Gender=Fem	1	xcomp:pred	_	_
5	agus	agus	CCONJ	Coord	_	6	cc	_	_
6	leathchéad	céad	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod	color:blue
1	Chosain	cosain	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	féile	féile	NOUN	Noun	Gender=Fem|Number=Sing	1	nsubj	_	_
3	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	bliana	bliain	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	2	nmod	_	_
5	seo	seo	DET	Det	PronType=Dem	4	det	_	_
6	c.	c.	ADV	Abr	_	1	advmod	_	_
7	Euro	Euro	PROPN	Noun	Gender=Masc|Number=Sing	1	obj	_	_
8	212,000	212,000	NUM	Num	_	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nummod	color:blue
1	Breathnaigh	breathnaigh	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Punct	_	3	punct	_	_
3	míle	míle	NUM	Num	NumType=Card	1	obj	_	_
4	is	agus	CCONJ	Coord	_	6	cc	_	_
5	a	a	PART	Nm	PartType=Num	6	mark:prt	_	_
6	haon	aon	NUM	Num	Form=HPref|NumType=Card	3	nummod	_	SpaceAfter=No
7	!	!	PUNCT	!	_	1	punct	_	_

~~~


