---
layout: base
title:  'Statistics of nummod:gov in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nummod.html">nummod</a></tt>.

1048 nodes (0%) are attached to their parents as `nummod:gov`.

1028 instances of `nummod:gov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2986641221374.

The following 9 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (756; 72% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (224; 21% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (32; 3% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod:gov	color:blue
1	Trzech	trzy	NUM	num:pl:nom:m1:rec	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	2	nummod:gov	2:nummod:gov	_
2	mężczyzn	mężczyzna	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	6	nsubj	6:nsubj	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc
4	sportowych	sportowy	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	5	amod	5:amod	_
5	strojach	strój	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	2	nmod	2:nmod	_
6	gra	grać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Acc
8	hokeja	hokej	NOUN	subst:sg:acc:m2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	6	obl:arg	6:obl:arg	_
9	na	na	ADP	prep:loc	AdpType=Prep	10	case	10:case	Case=Loc
10	trawie	trawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	nmod	8:nmod	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Wyprodukowali	wyprodukować	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	śmy	być	AUX	aglt:pl:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Plur|Person=1|Variant=Short	1	aux:clitic	1:aux:clitic	_
3	21.255.035	21255035	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	4	nummod:gov	4:nummod:gov	_
4	m	metr	X	brev:npun	Abbr=Yes|Pun=No	1	obj	1:obj	_
5	tkanin	tkanina	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	4	nmod:arg	4:nmod:arg	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

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
4	tylko	tylko	PART	part	_	6	advmod	6:advmod	_
5	35	35	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	6	nummod:gov	6:nummod:gov	SpaceAfter=No
6	$	$	SYM	interp	_	3	obj	3:obj	_
7	tygodniowo	tygodniowo	ADV	adv:pos	Degree=Pos	3	advmod	3:advmod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


