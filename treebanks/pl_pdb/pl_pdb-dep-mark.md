---
layout: base
title:  'Statistics of mark in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `mark`

This relation is universal.

7621 nodes (2%) are attached to their parents as `mark`.

7479 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05944101823908.

The following 20 pairs of parts of speech are connected with `mark`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (4943; 65% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (1393; 18% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (782; 10% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (136; 2% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (94; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (90; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (74; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (40; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (16; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (15; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (13; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (7; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	10	punct	10:punct	_
2	Wiem	wiedzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	10	parataxis:obj	10:parataxis:obj	_
3	o	o	ADP	prep:loc	AdpType=Prep	4	case	4:case	Case=Loc
4	tym	to	PRON	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	2	obl:arg	2:obl:arg	_
5	równie	równie	ADV	adv:pos	Degree=Pos	6	advmod	6:advmod	_
6	dobrze	dobrze	ADV	adv:pos	Degree=Pos	2	advmod	2:advmod	_
7	jak	jak	SCONJ	comp	ConjType=Cmpr	8	mark	8:mark	_
8	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	obl:cmpr	5:obl:cmpr	_
9	-	-	PUNCT	interp	PunctType=Hyph	10	punct	10:punct	_
10	odrzekła	odrzec	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	Jako	jako	SCONJ	comp	ConjType=Pred	2	mark	2:mark	_
2	ostatni	ostatni	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	3:amod	_
3	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
4	poseł	poseł	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	appos	3:appos	_
5	Bondyra	Bondyra	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	appos	4:appos	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


