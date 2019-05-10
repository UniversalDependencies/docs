---
layout: base
title:  'Statistics of nmod:flat in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nmod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="pl_pdb-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pdb-dep-nmod-pred.html">nmod:pred</a></tt>.

466 nodes (0%) are attached to their parents as `nmod:flat`.

443 instances of `nmod:flat` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.53648068669528.

The following 5 pairs of parts of speech are connected with `nmod:flat`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (166; 36% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (146; 31% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (131; 28% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (19; 4% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (4; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:flat	color:blue
1	Nasilił	nasilić	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
4	październiku	październik	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	obl	1:obl	_
5	2000	2000	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	6	amod:flat	6:amod:flat	_
6	roku	rok	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod:flat	4:nmod:flat	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:flat	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:flat	color:blue
1	Data	data	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	realizacji	realizacja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	1	nmod:arg	1:nmod:arg	SpaceAfter=No
3	:	:	PUNCT	interp	PunctType=Colo	4	punct	4:punct	_
4	8	8	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	1	conj	0:root|1:conj	_
5	marca	marzec	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod:flat	4:nmod:flat	_
6	2010	2010	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	7	amod:flat	7:amod:flat	_
7	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	5	nmod:flat	5:nmod:flat	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


