---
layout: base
title:  'Statistics of cop in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `cop`

This relation is universal.

215 nodes (1%) are attached to their parents as `cop`.

173 instances of `cop` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32558139534884.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (104; 48% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (97; 45% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Obecny	obecny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	czas	czas	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	oczekiwania	oczekiwać	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	nmod:arg	2:nmod:arg	_
4	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
5	osiem	osiem	NUM	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	6	nummod:gov	6:nummod:gov	_
6	tygodni	tydzień	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 cop	color:blue
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
# visual-style 4 2 cop	color:blue
1	Czasem	czas	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	nmod	4:nmod	_
2	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	takie	taki	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	0:root	_
5	jak	jak	SCONJ	comp	ConjType=Cmpr	6	mark	6:mark	_
6	supermoc	supermoc	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	obl:cmpr	4:obl:cmpr	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


