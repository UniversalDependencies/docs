---
layout: base
title:  'Statistics of amod:flat in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `amod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-amod.html">amod</a></tt>.

1816 nodes (1%) are attached to their parents as `amod:flat`.

972 instances of `amod:flat` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02918502202643.

The following 5 pairs of parts of speech are connected with `amod:flat`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1235; 68% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (284; 16% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (284; 16% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod:flat	color:blue
1	II	II	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	2	amod:flat	2:amod:flat	_
2	Wydział	wydział	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
3	Polityczny	polityczny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod:flat	2:amod:flat	_
4	założył	założyć	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	jej	on	PRON	ppron3:sg:dat:f:ter:akc:npraep	Case=Dat|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	4	iobj	4:iobj	_
6	teczkę	teczka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod:flat	color:blue
1	Jan	Jan	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
2	Paweł	Paweł	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	1	flat	1:flat	_
3	II	II	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	2	amod:flat	2:amod:flat	_
4	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	7	aux:pass	7:aux:pass	_
6	niebawem	niebawem	ADV	adv	_	7	advmod	7:advmod	_
7	beatyfikowany	beatyfikować	ADJ	ppas:sg:nom:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	xcomp	4:xcomp	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod:flat	color:blue
1	Data	data	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	ważności	ważność	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	1	nmod	1:nmod	_
3	mleka	mleko	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	2	nmod:arg	2:nmod:arg	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	kartonie	karton	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
6	-	-	PUNCT	interp	PunctType=Hyph	1	punct	1:punct	_
7	2	2	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	1	appos	1:appos	_
8	marzec	marzec	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nmod:flat	7:nmod:flat	_
9	1998	1998	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	10	amod:flat	10:amod:flat	_
10	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	8	flat	8:flat	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


