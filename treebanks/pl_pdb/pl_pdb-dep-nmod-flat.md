---
layout: base
title:  'Statistics of nmod:flat in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nmod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pdb-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pdb-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="pl_pdb-dep-nmod-pred.html">nmod:pred</a></tt>.

830 nodes (0%) are attached to their parents as `nmod:flat`.

827 instances of `nmod:flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17590361445783.

The following 5 pairs of parts of speech are connected with `nmod:flat`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (559; 67% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (229; 28% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (33; 4% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:flat	color:blue
1	Wielka	wielki	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod:flat	2:amod:flat	_
2	Orkiestra	orkiestra	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
3	Świątecznej	świąteczny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod:flat	4:amod:flat	_
4	Pomocy	pomoc	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	nmod:flat	2:nmod:flat	_
5	finiszowała	finiszować	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	po	po	ADP	prep:acc	AdpType=Prep	7	case	7:case	Case=Acc
7	raz	raz	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	5:obl	_
8	szósty	szósty	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

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
10	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	8	flat	8:flat	SpaceAfter=No
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


