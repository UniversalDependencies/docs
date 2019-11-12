---
layout: base
title:  'Statistics of punct in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `punct`

This relation is universal.

57903 nodes (17%) are attached to their parents as `punct`.

31365 instances of `punct` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.92699860110875.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (36605; 63% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (9367; 16% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (5154; 9% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (2283; 4% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (1717; 3% instances), <tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (880; 2% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (769; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (339; 1% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (231; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (223; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (138; 0% instances), <tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (76; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (61; 0% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (48; 0% instances), <tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 punct	color:blue
1	Pies	pies	NOUN	subst:sg:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	płynie	płynąć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
4	małą	mały	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	żółtą	żółty	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	4	conj	4:conj|7:amod	_
7	piłką	piłka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	obl:arg	2:obl:arg	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc
9	pysku	pysk	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	robota	robota	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
3	na	na	ADP	prep:acc	AdpType=Prep	4	case	4:case	Case=Acc
4	akord	akord	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
5	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
6	morderstwo	morderstwo	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 punct	color:blue
1	Pies	pies	NOUN	subst:sg:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	płynie	płynąć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
4	małą	mały	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	żółtą	żółty	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	4	conj	4:conj|7:amod	_
7	piłką	piłka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	obl:arg	2:obl:arg	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc
9	pysku	pysk	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


