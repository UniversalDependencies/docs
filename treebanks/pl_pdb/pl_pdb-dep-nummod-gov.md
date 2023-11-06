---
layout: base
title:  'Statistics of nummod:gov in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="pl_pdb-dep-nummod-flat.html">nummod:flat</a></tt>.

1067 nodes (0%) are attached to their parents as `nummod:gov`.

1049 instances of `nummod:gov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35238987816307.

The following 7 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1029; 96% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod:gov	color:blue
1	Sześć	sześć	NUM	num:pl:nom:f:rec:ncol	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word	2	nummod:gov	2:nummod:gov	_
2	osób	osoba	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	gra	grać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Acc
5	hokeja	hokej	NOUN	subst:sg:acc:m2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	3	obl:arg	3:obl:arg	_
6	na	na	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	lodzie	lód	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod:gov	color:blue
1	Paryża	Paryż	PROPN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
2	pół	pół	NUM	num:sg:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|NumForm=Word	1	nummod:gov	1:nummod:gov	_
3	ze	z	ADP	prep:gen:wok	AdpType=Prep|Variant=Long	4	case	4:case	Case=Gen
4	złości	złość	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	obl	6:obl	_
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	_
6	skręcało	skręcać	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
7	!	!	PUNCT	interp	PunctType=Excl	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod:gov	color:blue
1	Specjalny	specjalny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	pociąg	pociąg	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
3	rusza	ruszać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	dopiero	dopiero	PART	part	_	3	advmod:emph	3:advmod:emph	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	gdy	gdy	ADV	adv	_	8	advmod	8:advmod	_
7	PKP	PKP	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	8:nsubj	_
8	znajdzie	znaleźć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
9	co	co	PART	part	_	11	advmod:emph	11:advmod:emph	_
10	najmniej	mało	ADV	adv:sup	Degree=Sup	9	fixed	9:fixed	_
11	300	300	NUM	num:pl:acc:m1:rec	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	12	nummod:gov	12:nummod:gov	_
12	chętnych	chętny	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	8	obj	8:obj	_
13	do	do	ADP	prep:gen	AdpType=Prep	14	case	14:case	Case=Gen
14	jazdy	jazda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	12	obl:arg	12:obl:arg	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


