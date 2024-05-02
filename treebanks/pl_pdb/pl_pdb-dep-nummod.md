---
layout: base
title:  'Statistics of nummod in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="pl_pdb-dep-nummod-flat.html">nummod:flat</a></tt>, <tt><a href="pl_pdb-dep-nummod-gov.html">nummod:gov</a></tt>.

1317 nodes (0%) are attached to their parents as `nummod`.

1315 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3454821564161.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1302; 99% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Cztery	cztery	NUM	num:pl:nom:f:congr:ncol	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word	2	nummod	2:nummod	_
2	osoby	osoba	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	jadą	jechać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	koniach	koń	NOUN	subst:pl:loc:m2	Animacy=Nhum|Case=Loc|Gender=Masc|Number=Plur	3	obl:arg	3:obl:arg	_
6	po	po	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	plaży	plaża	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Małe	mały	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	2:amod	_
2	owieczki	owieczka	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	10	nsubj	10:nsubj	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
4	dwie	dwa	NUM	num:pl:nom:f:congr:ncol	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word	5	nummod	5:nummod	_
5	jasne	jasny	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	2:amod	_
6	i	i	CCONJ	conj	_	8	cc	8:cc	_
7	jedna	jeden	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	_
8	czarna	czarny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	conj	2:amod|5:conj	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
10	znajdują	znajdować	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
11	się	się	PRON	part	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
12	na	na	ADP	prep:loc	AdpType=Prep	13	case	13:case	Case=Loc
13	trawie	trawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	10	obl	10:obl	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 13 nummod	color:blue
1	Aktywną	aktywny	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	rolę	rola	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	8	obj	8:obj	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
4	mediacjach	mediacja	NOUN	subst:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur	8	obl:arg	8:obl:arg	_
5	między	między	ADP	prep:inst	AdpType=Prep	6	case	6:case	Case=Ins
6	stronami	strona	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	4	nmod	4:nmod	_
7	konfliktu	konflikt	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod:arg	6:nmod:arg	_
8	pełnią	pełnić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	świeccy	świecki	ADJ	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	12	amod	12:amod	_
10	i	i	CCONJ	conj	_	11	cc	11:cc	_
11	religijni	religijny	ADJ	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	conj	9:conj|12:amod	_
12	przedstawiciele	przedstawiciel	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	8	nsubj	8:nsubj	_
13	800	800	NUM	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	18	nummod	18:nummod	_
14	tysięcy	tysiąc	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	13	flat	13:flat	_
15	mieszkających	mieszkać	ADJ	pact:pl:gen:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	18	acl	18:acl	_
16	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	17	case	17:case	Case=Loc
17	Izraelu	Izrael	PROPN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	obl	15:obl	_
18	Arabów	Arab	PROPN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	12	nmod:arg	12:nmod:arg	SpaceAfter=No
19	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


