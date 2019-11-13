---
layout: base
title:  'Statistics of nummod:gov in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="pl_pdb-dep-nummod-flat.html">nummod:flat</a></tt>.

1070 nodes (0%) are attached to their parents as `nummod:gov`.

1049 instances of `nummod:gov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3411214953271.

The following 9 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (759; 71% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (238; 22% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (37; 3% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod:gov	color:blue
1	Sześć	sześć	NUM	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word	2	nummod:gov	2:nummod:gov	_
2	osób	osoba	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	gra	grać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Acc
5	hokeja	hokej	NOUN	subst:sg:acc:m2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	3	obl:arg	3:obl:arg	_
6	na	na	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	lodzie	lód	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nummod:gov	color:blue
1	Gmina	gmina	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	wydała	wydać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	na	na	ADP	prep:acc	AdpType=Prep	4	case	4:case	Case=Acc
4	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	2	obl:arg	2:obl:arg	_
5	ze	z	ADP	prep:gen:wok	AdpType=Prep|Variant=Long	7	case	7:case	Case=Gen
6	swojej	swój	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det:poss	7:det:poss	_
7	kasy	kasa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	obl	2:obl	_
8	600	600	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	11	nummod:gov	11:nummod:gov	_
9	tys	tysiąc	X	brev:pun	Abbr=Yes|Pun=Yes	8	flat	8:flat	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_
11	zł	złoty	X	brev:npun	Abbr=Yes|Pun=No	2	obj	2:obj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod:gov	color:blue
1	Mogę	móc	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	jej	on	PRON	ppron3:sg:dat:f:ter:akc:npraep	Case=Dat|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	iobj	3:iobj	_
3	zapłacić	zapłacić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
4	tylko	tylko	PART	part	_	5	advmod:emph	5:advmod:emph	_
5	35	35	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	6	nummod:gov	6:nummod:gov	SpaceAfter=No
6	$	$	SYM	interp	_	3	obj	3:obj	_
7	tygodniowo	tygodniowo	ADV	adv:pos	Degree=Pos	3	advmod	3:advmod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


