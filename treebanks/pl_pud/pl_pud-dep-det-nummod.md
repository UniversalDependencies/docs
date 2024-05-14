---
layout: base
title:  'Statistics of det:nummod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pud-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pud-dep-det-poss.html">det:poss</a></tt>.

20 nodes (0%) are attached to their parents as `det:nummod`.

20 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35.

The following 2 pairs of parts of speech are connected with `det:nummod`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (18; 90% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (2; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:nummod	color:blue
1	Poziom	poziom	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
3	który	który	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	8	nsubj	8:nsubj	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
5	obu	oba	DET	num:pl:loc:m3:congr:ncol	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|PronType=Ind	6	det:nummod	6:det:nummod	_
6	przypadkach	przypadek	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	8	obl	8:obl	_
7	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	najwyższy	wysoki	ADJ	adj:sg:nom:m3:sup	Animacy=Inan|Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	1	acl:relcl	1:acl:relcl	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
10	UE	UE	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	Indianie	Indianin	PROPN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
2	obu	oba	DET	num:pl:gen:f:congr:ncol	Case=Gen|Gender=Fem|Number=Plur|PronType=Ind	3	det:nummod	3:det:nummod	_
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


