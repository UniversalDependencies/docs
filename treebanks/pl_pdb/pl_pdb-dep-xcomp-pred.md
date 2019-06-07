---
layout: base
title:  'Statistics of xcomp:pred in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="pl_pdb-dep-xcomp-subj.html">xcomp:subj</a></tt>.

434 nodes (0%) are attached to their parents as `xcomp:pred`.

387 instances of `xcomp:pred` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25806451612903.

The following 13 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (208; 48% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (173; 40% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (34; 8% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 xcomp:pred	color:blue
1	Trąba	trąba	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
2	zaś	zaś	CCONJ	conj	_	3	cc	3:cc	_
3	staje	stawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
6	tych	ten	DET	adj:pl:loc:f:pos	Case=Loc|Gender=Fem|Number=Plur|PronType=Dem	7	det	7:det	_
7	sprawach	sprawa	NOUN	subst:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur	3	obl	3:obl	_
8	podstawowym	podstawowy	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	kierunkowskazem	kierunkowskaz	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	xcomp:pred	3:xcomp:pred	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp:pred	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp:pred	color:blue
1	Grają	grać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	muzykę	muzyka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	_
3	będącą	być	ADJ	pact:sg:acc:f:imperf:aff	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	2	amod	2:amod	_
4	unikalnym	unikalny	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	mariażem	mariaż	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	xcomp:pred	3:xcomp:pred	_
6	form	forma	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	5	nmod:arg	5:nmod:arg	_
7	i	i	CCONJ	conj	_	8	cc	8:cc	_
8	stylów	styl	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	conj	5:nmod:arg|6:conj	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
10	zachwycają	zachwycać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
11	jurorów	juror	NOUN	subst:pl:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur	10	obj	10:obj	_
12	na	na	ADP	prep:loc	AdpType=Prep	14	case	14:case	Case=Loc
13	wszelkich	wszelki	DET	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|PronType=Tot	14	det	14:det	_
14	konkursach	konkurs	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	10	obl	10:obl	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


