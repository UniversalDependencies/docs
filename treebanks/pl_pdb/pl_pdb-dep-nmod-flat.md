---
layout: base
title:  'Statistics of nmod:flat in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nmod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pdb-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pdb-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="pl_pdb-dep-nmod-pred.html">nmod:pred</a></tt>.

969 nodes (0%) are attached to their parents as `nmod:flat`.

966 instances of `nmod:flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29205366357069.

The following 6 pairs of parts of speech are connected with `nmod:flat`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (699; 72% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (230; 24% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (35; 4% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:flat	color:blue
1	Do	do	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	zdarzenia	zdarzenie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	obl:arg	3:obl:arg	_
3	doszło	dojść	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc
5	czerwcu	czerwiec	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl	_
6	br	bieżący_rok	NOUN	brev:pun	Abbr=Yes	5	nmod:flat	5:nmod:flat	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc
9	centrum	centrum	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	3	obl	3:obl	_
10	Tarnobrzega	Tarnobrzeg	PROPN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod:arg	9:nmod:arg	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:flat	color:blue
1	Data	data	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	ważności	ważność	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	1	nmod	1:nmod	_
3	mleka	mleko	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	2	nmod:arg	2:nmod:arg	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	kartonie	karton	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
6	-	-	PUNCT	interp	PunctType=Dash	1	punct	1:punct	_
7	2	2	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	1	appos	1:appos	_
8	marzec	marzec	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nmod:flat	7:nmod:flat	_
9	1998	1998	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	10	amod:flat	10:amod:flat	_
10	r	rok	NOUN	brev:pun	Abbr=Yes	8	nmod:flat	8:nmod:flat	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:flat	color:blue
1	Zawołać	zawołać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	0:root	_
2	Matthiasa	Matthias	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	1	obj	1:obj	_
3	Widgeona	Widgeon	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	2	flat	2:flat	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
5	podoficera	podoficer	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	2	appos	2:appos	_
6	na	na	ADP	prep:acc	AdpType=Prep	7	case	7:case	Case=Acc
7	Southern	Southern	PROPN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	5	nmod	5:nmod	_
8	Cross	cross	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	7	nmod:flat	7:nmod:flat	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


