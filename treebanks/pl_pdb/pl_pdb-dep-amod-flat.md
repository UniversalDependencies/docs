---
layout: base
title:  'Statistics of amod:flat in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `amod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-amod.html">amod</a></tt>.

991 nodes (0%) are attached to their parents as `amod:flat`.

847 instances of `amod:flat` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03531786074672.

The following 3 pairs of parts of speech are connected with `amod:flat`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (597; 60% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (278; 28% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (116; 12% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod:flat	color:blue
1	Akt	akt	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	oskarżenia	oskarżenie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod	_
3	trafił	trafić	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	do	do	ADP	prep:gen	AdpType=Prep	5	case	5:case	Case=Gen
5	sądu	sąd	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	obl	3:obl	_
6	na	na	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	początku	początek	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl	_
8	1995	1995	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	9	amod:flat	9:amod:flat	_
9	roku	rok	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod:arg	7:nmod:arg	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod:flat	color:blue
1	Syna	syn	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	_
2	Włodzimierza	Włodzimierz	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
3	Olewnika	Olewnik	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	2	flat	2:flat	_
4	porwano	porwać	VERB	imps:perf	Aspect=Perf|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	jesienią	jesień	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	4	obl	4:obl	_
6	2001	2001	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	7	amod:flat	7:amod:flat	_
7	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	5	nmod:flat	5:nmod:flat	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod:flat	color:blue
1	Klasztor	klasztor	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
2	na	na	ADP	prep:loc	AdpType=Prep	4	case	4:case	Case=Loc
3	Jasnej	Jasny	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	4	amod:flat	4:amod:flat	_
4	Górze	Góra	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	1	nmod	1:nmod	_
5	przeżywa	przeżywać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	prawdziwe	prawdziwy	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	amod	7:amod	_
7	oblężenie	oblężenie	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	5	obj	5:obj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


