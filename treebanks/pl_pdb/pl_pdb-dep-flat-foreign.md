---
layout: base
title:  'Statistics of flat:foreign in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-flat.html">flat</a></tt>.

83 nodes (0%) are attached to their parents as `flat:foreign`.

83 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (42; 51% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (14; 17% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (9; 11% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (6; 7% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (3; 4% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (3; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	Radio	radio	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	2:nsubj	_
2	gra	grać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	"	"	PUNCT	interp	PunctType=Quot	4	punct	4:punct	SpaceAfter=No
4	Close	close	X	ign	Foreign=Yes	2	obj	2:obj	_
5	your	your	X	ign	Foreign=Yes	4	flat:foreign	4:flat:foreign	_
6	eyes	eyes	X	ign	Foreign=Yes	5	flat:foreign	5:flat:foreign	SpaceAfter=No
7	"	"	PUNCT	interp	PunctType=Quot	4	punct	4:punct	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 flat:foreign	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
2	górnej	górny	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
3	prawej	prawy	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	części	część	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl	_
5	okna	okno	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	4	nmod:arg	4:nmod:arg	_
6	głównego	główny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	amod	5:amod	_
7	można	można	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
8	znaleźć	znaleźć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	dwie	dwa	NUM	num:pl:acc:f:congr:ncol	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word	13	nummod	13:nummod	_
10	przydatne	przydatny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	13	amod	13:amod	_
11	podczas	podczas	ADP	prep:gen	AdpType=Prep	12	case	12:case	Case=Gen
12	testów	test	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	10	obl	10:obl	_
13	funkcje	funkcja	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	8	obj	8:obj	SpaceAfter=No
14	:	:	PUNCT	interp	PunctType=Colo	15	punct	15:punct	_
15	Anti	Anti	PROPN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	appos	13:appos	_
16	flood	flood	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	flat:foreign	15:flat:foreign	_
17	i	i	CCONJ	conj	_	18	cc	18:cc	_
18	Ping	Ping	PROPN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	conj	13:appos|15:conj	_
19	Check	Check	PROPN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	18	flat:foreign	18:flat:foreign	SpaceAfter=No
20	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
2	ten	ten	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	4:det	_
3	słynny	słynny	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	von	von	X	frag	Foreign=Yes	0	root	0:root	_
5	Finckl	Finckl	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	flat:foreign	4:flat:foreign	SpaceAfter=No
6	?	?	PUNCT	interp	PunctType=Qest	4	punct	4:punct	_

~~~


