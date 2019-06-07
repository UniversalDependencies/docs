---
layout: base
title:  'Statistics of nummod in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="pl_pdb-dep-nummod-gov.html">nummod:gov</a></tt>.

1390 nodes (0%) are attached to their parents as `nummod`.

1384 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36043165467626.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1200; 86% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (143; 10% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (24; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Dwa	dwa	NUM	num:pl:nom:m2:congr	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	2	nummod	2:nummod	_
2	jamniki	jamnik	NOUN	subst:pl:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	3:nsubj	_
3	biegną	biec	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	po	po	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	trawie	trawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
7	trzymając	trzymać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	3	advcl	3:advcl	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc
9	zębach	ząb	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	7	obl	7:obl	_
10	czerwoną	czerwony	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	11	amod	11:amod	_
11	piłkę	piłka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Najciekawsza	ciekawy	ADJ	adj:sg:nom:f:sup	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing	2	xcomp:pred	2:xcomp:pred	_
2	stała	stać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	_
4	klasa	klasa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
5	markowa	markowy	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
6	aut	auto	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	4	nmod:arg	4:nmod:arg	_
7	o	o	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc
8	pojemności	pojemność	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	6	nmod	6:nmod	_
9	do	do	ADP	prep:gen	AdpType=Prep	11	case	11:case	Case=Gen
10	650	650	NUM	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	11	nummod	11:nummod	_
11	cm	centymetr	X	brev:npun	Abbr=Yes|Pun=No	8	nmod	8:nmod	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 nummod	color:blue
1	Czystość	czystość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	9:nsubj	_
2	Al	aluminium	X	brev:npun	Abbr=Yes|Pun=No	1	nmod	1:nmod	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
4	otrzymanego	otrzymać	ADJ	ppas:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	2	acl	2:acl	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
6	procesie	proces	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	4:obl	_
7	elektrolizy	elektroliza	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	6:nmod	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
9	wynosi	wynosić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	99,5	99,5	NUM	num:pl:gen:m3:rec	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	13	nummod	13:nummod	SpaceAfter=No
11	-	-	PUNCT	interp	PunctType=Hyph	12	punct	12:punct	SpaceAfter=No
12	99,7	99,7	NUM	num:pl:gen:m3:rec	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	10	conj	10:conj|13:nummod	SpaceAfter=No
13	%	%	SYM	interp	_	9	iobj	9:iobj	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


