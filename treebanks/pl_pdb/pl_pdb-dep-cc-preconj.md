---
layout: base
title:  'Statistics of cc:preconj in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-cc.html">cc</a></tt>.

273 nodes (0%) are attached to their parents as `cc:preconj`.

273 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.05494505494505.

The following 13 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (136; 50% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (43; 16% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (30; 11% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (23; 8% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (12; 4% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (12; 4% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (9; 3% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Mógł	móc	VERB	praet:sg:m3:imperf:nagl	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	by	by	AUX	part	_	1	aux:cnd	1:aux:cnd	_
3	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	cop	4:cop	_
4	siedzibą	siedziba	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	1	xcomp	1:xcomp	_
5	zarówno	zarówno	CCONJ	conj	_	6	cc:preconj	6:cc:preconj	_
6	giełdy	giełda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
8	kina	kino	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	6	conj	4:nmod|6:conj	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
10	jak	jak	CCONJ	conj	_	12	cc	12:cc	_
11	i	i	CCONJ	conj	_	10	fixed	10:fixed	_
12	muzeum	muzeum	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	6	conj	4:nmod|6:conj	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc:preconj	color:blue
1	Ani	ani	CCONJ	conj	_	5	cc:preconj	5:cc:preconj	_
2	my	my	PRON	ppron12:pl:nom:m1:pri	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	nsubj	5:nsubj	_
3	ciebie	ty	PRON	ppron12:sg:gen:m1:sec:akc	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=2|PronType=Prs|Variant=Long	5	obj	5:obj	_
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	_
5	pobudzamy	pobudzać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
7	ani	ani	CCONJ	conj	_	11	cc	11:cc	_
8	ty	ty	PRON	ppron12:sg:nom:m1:sec	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	11	nsubj	11:nsubj	_
9	się	się	PRON	part	PronType=Prs|Reflex=Yes	11	expl:pv	11:expl:pv	_
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	_
11	dzielisz	dzielić	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	0:root|5:conj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	17	17	X	dig	NumForm=Digit	4	list	4:list	SpaceAfter=No
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_
3	Nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	_
4	mam	mieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	ani	ani	CCONJ	conj	_	7	cc:preconj	7:cc:preconj	_
6	zbyt	zbyt	ADV	adv	_	7	advmod	7:advmod	_
7	wysokiego	wysoki	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	12	amod	12:amod	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
9	ani	ani	CCONJ	conj	_	11	cc	11:cc	_
10	zbyt	zbyt	ADV	adv	_	11	advmod	11:advmod	_
11	małego	mały	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	conj	7:conj|12:amod	_
12	mniemania	mniemanie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	4	iobj	4:iobj	_
13	o	o	ADP	prep:loc	AdpType=Prep	14	case	14:case	Case=Loc
14	sobie	siebie	PRON	siebie:loc	Case=Loc|PronType=Prs|Reflex=Yes	12	nmod:arg	12:nmod:arg	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


