---
layout: base
title:  'Statistics of case in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `case`

This relation is universal.

37000 nodes (8%) are attached to their parents as `case`.

36744 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20594594594595.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (25002; 68% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (8051; 22% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (1884; 5% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (1137; 3% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (499; 1% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (244; 1% instances), <tt><a href="la_ittb-pos-PART.html">PART</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (136; 0% instances), <tt><a href="la_ittb-pos-X.html">X</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (36; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PART.html">PART</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	et	et	CCONJ	O4	_	3	cc	_	_
2	simile	similis	ADJ	C1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	xcomp	_	_
3	apparet	appareo	VERB	K3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	in	in	ADP	S4	AdpType=Prep	5	case	_	_
5	arte	ars	NOUN	C1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	3	obl	_	_
6	gubernatoria	gubernatorius	ADJ	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
7	respectu	respectus	NOUN	D1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	3	obl	_	_
8	nauifactiuae	nauifactiuus	ADJ	A1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	est	sum	VERB	N3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	autem	autem	CCONJ	O4	_	1	cc	_	_
3	in	in	ADP	S4	AdpType=Prep	4	case	_	_
4	his	hic	PRON	F1|grn1|casO|gen3|vgr1	Case=Abl|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem	1	obl	_	_
5	quae	qui	PRON	F1|grn1|casM|gen3|vgr1	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|PronType=Rel	8	obj	_	_
6	de	de	ADP	S4	AdpType=Prep	7	case	_	_
7	deo	deus	PROPN	F1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	8	obl	_	_
8	confitemur	confiteor	VERB	K3|modJ|tem1|gen7	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	_
9	duplex	duplex	ADJ	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
10	ueritatis	ueritas	NOUN	C1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	11	nmod	_	_
11	modus	modus	NOUN	B1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	ad	ad	ADP	S4	AdpType=Prep	2	case	_	_
2	quartam	quartus	ADJ	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	nmod	_	_
3	etiam	etiam	ADV	O4|vgr1	_	5	advmod:emph	_	_
4	patet	pateo	VERB	K3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	solutio	solutio	NOUN	C1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


