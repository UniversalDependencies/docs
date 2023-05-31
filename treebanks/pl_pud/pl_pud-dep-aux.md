---
layout: base
title:  'Statistics of aux in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="pl_pud-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pud-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pud-dep-aux-pass.html">aux:pass</a></tt>.

49 nodes (0%) are attached to their parents as `aux`.

47 instances of `aux` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87755102040816.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (21; 43% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (14; 29% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (12; 24% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 aux	color:blue
1	Dla	dla	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	Barrosa	Barroso	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	4	obl	4:obl	_
3	to	to	PART	part	_	4	advmod:emph	4:advmod:emph	_
4	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	nie	nie	PART	part	Polarity=Neg	6	advmod:neg	6:advmod:neg	_
6	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	aux	4:aux	_
7	koniec	koniec	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
8	sprawy	sprawa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	nmod:arg	7:nmod:arg	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 aux	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Zwykle	zwykle	ADV	adv:pos	Degree=Pos	4	advmod	4:advmod	_
2	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
4	artyści	artysta	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	którzy	który	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	7	nsubj	7:nsubj	_
7	chcą	chcieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
8	zrobić	zrobić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	parę	parę	DET	num:pl:acc:f:rec	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	_
10	rzeczy	rzecz	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


