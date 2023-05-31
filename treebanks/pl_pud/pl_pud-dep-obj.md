---
layout: base
title:  'Statistics of obj in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `obj`

This relation is universal.

818 nodes (4%) are attached to their parents as `obj`.

758 instances of `obj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75550122249389.

The following 15 pairs of parts of speech are connected with `obj`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (513; 63% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (144; 18% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (48; 6% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (39; 5% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (33; 4% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (22; 3% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obj	color:blue
1	Jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nmod	2:nmod	_
2	marzeniem	marzenie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	0	root	0:root	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
4	zakończenie	zakończyć	NOUN	ger:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	nsubj	2:nsubj	_
5	na	na	ADP	prep:loc	AdpType=Prep	6	case	6:case	Case=Loc
6	tym	to	PRON	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	4	obl:arg	4:obl:arg	_
7	swojej	swój	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det:poss	8:det:poss	_
8	kariery	kariera	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	obj	4:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obj	color:blue
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


