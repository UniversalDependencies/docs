---
layout: base
title:  'Statistics of nmod:flat in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

90 nodes (0%) are attached to their parents as `nmod:flat`.

89 instances of `nmod:flat` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25555555555556.

The following 4 pairs of parts of speech are connected with `nmod:flat`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (46; 51% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (23; 26% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (20; 22% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:flat	color:blue
1	Ukończył	ukończyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	uczelnię	uczelnia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	_
3	i	i	CCONJ	conj	_	4	cc	4:cc	_
4	uzyskał	uzyskać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
5	tytuł	tytuł	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	_
6	magistra	magister	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod	_
7	21	21	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	4	obl	4:obl	_
8	kwietnia	kwiecień	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod:flat	7:nmod:flat	_
9	1882	1882	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	10	amod:flat	10:amod:flat	_
10	r	rok	NOUN	brev:pun	Abbr=Yes	8	nmod:flat	8:nmod:flat	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:flat	color:blue
1	Zagrają	zagrać	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Acc
3	sobotę	sobota	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	obl	4:obl	_
4	10	10	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	1	obl	1:obl	_
5	czerwca	czerwiec	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod:flat	4:nmod:flat	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:flat	color:blue
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


