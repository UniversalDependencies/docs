---
layout: base
title:  'Statistics of nummod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="pl_pud-dep-nummod-gov.html">nummod:gov</a></tt>.

97 nodes (1%) are attached to their parents as `nummod`.

97 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35051546391753.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (85; 88% instances), <tt><a href="pl_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (7; 7% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nummod	color:blue
1	5	5	NUM	num:pl:nom:m3:congr	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
2	tys	tysiąc	X	brev:pun	Abbr=Yes|Pun=Yes	1	flat	1:flat	SpaceAfter=No
3	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_
4	dolarów	dolar	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	_
5	na	na	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
6	osobę	osoba	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	dopuszczalne	dopuszczalny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	maksimum	maksimum	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	4	appos	4:appos	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Zapytane	zapytać	ADJ	ppas:pl:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	acl	2:acl	_
2	źródła	źródło	NOUN	subst:pl:nom:n:ncol	Case=Nom|Gender=Neut|Number=Plur	3	nsubj	3:nsubj	_
3	stwierdziły	stwierdzić	VERB	praet:pl:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
5	że	że	SCONJ	comp	_	11	mark	11:mark	_
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
7	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	11	punct	11:punct	SpaceAfter=No
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
9	100	100	NUM	num:pl:loc:m3:congr	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	10	nummod	10:nummod	SpaceAfter=No
10	%	%	SYM	interp	_	11	nmod	11:nmod	_
11	Cospedal	Cospedal	PROPN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	ccomp:obj	3:ccomp:obj	SpaceAfter=No
12	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	11	punct	11:punct	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Indianie	Indianin	PROPN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
2	obu	oba	NUM	num:pl:gen:f:congr:ncol	Case=Gen|Gender=Fem|Number=Plur|NumForm=Word	3	nummod	3:nummod	_
3	Ameryk	Ameryka	PROPN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	nmod	1:nmod	_
4	używali	używać	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	4	obj	4:obj	_
6	jako	jako	SCONJ	comp	ConjType=Pred	8	mark	8:mark	_
7	podstawowego	podstawowy	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	_
8	składnika	składnik	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	obl	4:obl	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Loc
10	tradycyjnej	tradycyjny	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	11	amod	11:amod	_
11	medycynie	medycyna	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	4	obl:arg	4:obl:arg	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


