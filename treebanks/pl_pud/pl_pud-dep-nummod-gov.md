---
layout: base
title:  'Statistics of nummod:gov in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nummod.html">nummod</a></tt>.

69 nodes (0%) are attached to their parents as `nummod:gov`.

69 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14492753623188.

The following 2 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (60; 87% instances), <tt><a href="pl_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (9; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod:gov	color:blue
1	Obecny	obecny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	czas	czas	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	oczekiwania	oczekiwać	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	nmod:arg	2:nmod:arg	_
4	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
5	osiem	osiem	NUM	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	6	nummod:gov	6:nummod:gov	_
6	tygodni	tydzień	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod:gov	color:blue
1	Inwestycje	inwestycja	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
3	tym	ten	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	4	det	4:det	_
4	obszarze	obszar	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl	_
5	wzrosły	wzrosnąć	VERB	praet:pl:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Loc
7	2015	2015	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	8	amod:flat	8:amod:flat	_
8	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_
10	o	o	ADP	prep:acc	AdpType=Prep	12	case	12:case	Case=Acc
11	6	6	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	12	nummod:gov	12:nummod:gov	SpaceAfter=No
12	%	%	SYM	interp	_	5	obl	5:obl	SpaceAfter=No
13	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
14	do	do	ADP	prep:gen	AdpType=Prep	17	case	17:case	Case=Gen
15	221	221	NUM	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	17	nummod	17:nummod	_
16	mld	miliard	X	brev:npun	Abbr=Yes|Pun=No	15	flat	15:flat	_
17	dolarów	dolar	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	5	obl	5:obl	SpaceAfter=No
18	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


