---
layout: base
title:  'Statistics of root in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `root`

This relation is universal.

22208 nodes (6%) are attached to their parents as `root`.

22208 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.9807726945245.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (18642; 84% instances), -<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1539; 7% instances), -<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1453; 7% instances), -<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (181; 1% instances), -<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (166; 1% instances), -<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (80; 0% instances), -<tt><a href="pl_pdb-pos-X.html">X</a></tt> (60; 0% instances), -<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (38; 0% instances), -<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (38; 0% instances), -<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (4; 0% instances), -<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), -<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2; 0% instances), -<tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Dziewczynka	dziewczynka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
2	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Ins
3	mokrymi	mokry	ADJ	adj:pl:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur	4	amod	4:amod	_
4	włosami	włos	NOUN	subst:pl:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	1	nmod	1:nmod	_
5	stoi	stać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
7	wodzie	woda	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	5	obl	5:obl	_
8	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Ins
9	czarnym	czarny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	_
10	kołem	koło	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	5	obl:arg	5:obl:arg	_
11	do	do	ADP	prep:gen	AdpType=Prep	12	case	12:case	Case=Gen
12	pływania	pływać	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	10	nmod	10:nmod	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	Przy	przy	ADP	prep:loc	AdpType=Prep	2	case	2:case	Case=Loc
2	ul	ulica	X	brev:pun	Abbr=Yes|Pun=Yes	8	nmod	8:nmod	SpaceAfter=No
3	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_
4	Opolskiej	Opolski	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
5	i	i	CCONJ	conj	_	6	cc	6:cc	_
6	Pstrowskiego	Pstrowski	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	4	conj	2:amod|4:conj	_
7	zabytkowe	zabytkowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	8	amod	8:amod	_
8	piece	piec	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	_
9	wapiennicze	wapienniczy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	8	amod	8:amod	_
10	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Gen
11	XIX	XIX	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	12	amod	12:amod	_
12	w	wiek	X	brev:pun	Abbr=Yes|Pun=Yes	8	nmod	8:nmod	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Sprawa	sprawa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj|6:nsubj	_
2	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	efektowna	efektowny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
5	ale	ale	CCONJ	conj	_	6	cc	6:cc	_
6	pachniała	pachnieć	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	_
7	meliniarstwem	meliniarstwo	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	6	iobj	6:iobj	_
8	na	na	ADP	prep:acc	AdpType=Prep	9	case	9:case	Case=Acc
9	kilometr	kilometr	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obl	6:obl	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


