---
layout: base
title:  'Statistics of amod in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="pl_pdb-dep-amod-flat.html">amod:flat</a></tt>.

24462 nodes (7%) are attached to their parents as `amod`.

15557 instances of `amod` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22369389256806.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (23698; 97% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (373; 2% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (188; 1% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (147; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (46; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (10; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Dziecko	dziecko	NOUN	subst:sg:nom:n:col	Case=Nom|Gender=Neut|Number=Sing|NumType=Sets	5	nsubj	5:nsubj	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
3	czerwonej	czerwony	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	kurtce	kurtka	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	1	nmod	1:nmod	_
5	trzyma	trzymać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
7	rękach	ręka	NOUN	subst:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur	5	obl	5:obl	_
8	grudę	gruda	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	_
9	śniegu	śnieg	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod:arg	8:nmod:arg	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Odeszli	odejść	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
3	choć	choć	SCONJ	comp	_	4	mark	4:mark	_
4	mogli	móc	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	1:advcl	_
5	zapytać	zapytać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	4	xcomp	4:xcomp	_
6	o	o	ADP	prep:acc	AdpType=Prep	7	case	7:case|9:case	Case=Acc
7	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obl:arg	5:obl:arg	_
8	i	i	CCONJ	conj	_	9	cc	9:cc	_
9	owo	owo	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	7	conj	5:obl:arg|7:conj	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Loc
11	samym	sam	ADJ	adj:sg:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	12	amod	12:amod	_
12	Betlejem	Betlejem	PROPN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	5	obl	5:obl	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	Wtorek	wtorek	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
3	ostatni	ostatni	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	dzień	dzień	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	appos	1:appos	_
5	kiedy	kiedy	ADV	adv	PronType=Rel	6	advmod	6:advmod	_
6	widziano	widzieć	VERB	imps:imperf	Aspect=Imp|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
7	ją	on	PRON	ppron3:sg:acc:f:ter:akc:npraep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	6	obj	6:obj	_
8	żywą	żywy	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


