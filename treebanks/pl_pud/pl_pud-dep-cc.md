---
layout: base
title:  'Statistics of cc in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="pl_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

558 nodes (3%) are attached to their parents as `cc`.

553 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24551971326165.

The following 10 pairs of parts of speech are connected with `cc`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (211; 38% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (191; 34% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (74; 13% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (62; 11% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt>-<tt><a href="pl_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	Można	można	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
2	wskazać	wskazać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
3	paralele	paralela	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	_
4	między	między	ADP	prep:inst	AdpType=Prep	5	case	5:case|9:case	Case=Ins
5	grami	gra	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	3	nmod	3:nmod	_
6	a	a	CCONJ	conj	_	9	cc	9:cc	_
7	naszym	nasz	DET	adj:sg:inst:n:pos	Case=Ins|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	9	det:poss	9:det:poss	_
8	codziennym	codzienny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	życiem	życie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	5	conj	3:nmod|5:conj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	To	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	12	nsubj	12:nsubj	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
3	co	co	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	5:obj|7:obj	_
4	ona	on	PRON	ppron3:sg:nom:f:ter:akc:npraep	Case=Nom|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	5	nsubj	5:nsubj|7:nsubj	_
5	mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	1:acl:relcl	_
6	i	i	CCONJ	conj	_	7	cc	7:cc	_
7	robi	robić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	1:acl:relcl|5:conj	_
8	–	–	PUNCT	interp	PunctType=Dash	12	punct	12:punct	_
9	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	12	cop	12:cop	_
10	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	12:aux	_
11	właściwie	właściwie	ADV	adv:pos	Degree=Pos	12	advmod	12:advmod	_
12	niewiarygodne	niewiarygodny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc	color:blue
1	Jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod	2:nmod	_
2	styl	styl	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj|10:nsubj	_
3	gry	gra	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	nmod:arg	2:nmod:arg	_
4	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop|10:cop	_
5	zarówno	zarówno	CCONJ	conj	_	6	cc:preconj	6:cc:preconj	_
6	twardy	twardy	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	jak	jak	CCONJ	conj	_	10	cc	10:cc	_
9	i	i	CCONJ	conj	_	8	fixed	8:fixed	_
10	subtelny	subtelny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	conj	0:root|6:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


