---
layout: base
title:  'Statistics of flat in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="pl_pud-dep-flat-foreign.html">flat:foreign</a></tt>.

287 nodes (2%) are attached to their parents as `flat`.

287 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05226480836237.

The following 9 pairs of parts of speech are connected with `flat`: <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (206; 72% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (27; 9% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (18; 6% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (16; 6% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (8; 3% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	Zastanawiam	zastanawiać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	_
3	również	również	PART	part	_	1	advmod:emph	1:advmod:emph	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
5	czy	czy	PART	part	PartType=Int	6	advmod	6:advmod	_
6	miał	mieć	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	_
7	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Loc
8	tym	to	PRON	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	6	obl:arg	6:obl:arg	_
9	udział	udział	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	iobj	6:iobj	_
10	Davis	Davis	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
11	Cup	Cup	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	10	flat	10:flat	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Louis	Louis	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
2	Post	post	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nmod:flat	1:nmod:flat	_
3	Dispatch	Dispatch	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	flat	2:flat	_
4	nazwał	nazwać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	ją	on	PRON	ppron3:sg:acc:f:ter:akc:npraep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	4	obj	4:obj	_
6	jedną	jeden	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	4	iobj	4:iobj	_
7	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Gen
8	najlepszych	dobry	ADJ	adj:pl:gen:f:sup	Case=Gen|Degree=Sup|Gender=Fem|Number=Plur	9	amod	9:amod	_
9	ról	rola	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	6	obl	6:obl	_
10	LaBeoufa	LaBeouf	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	9	nmod	9:nmod	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	5	5	NUM	num:pl:nom:m3:congr	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
2	tys	tysiąc	NOUN	brev:pun	Abbr=Yes	1	flat	1:flat	SpaceAfter=No
3	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_
4	dolarów	dolar	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	_
5	na	na	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
6	osobę	osoba	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	dopuszczalne	dopuszczalny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	maksimum	maksimum	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	4	appos	4:appos	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


