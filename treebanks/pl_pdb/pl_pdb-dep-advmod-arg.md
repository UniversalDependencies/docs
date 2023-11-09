---
layout: base
title:  'Statistics of advmod:arg in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `advmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_pdb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_pdb-dep-advmod-neg.html">advmod:neg</a></tt>.

52 nodes (0%) are attached to their parents as `advmod:arg`.

30 instances of `advmod:arg` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96153846153846.

The following 2 pairs of parts of speech are connected with `advmod:arg`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (51; 98% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:arg	color:blue
1	Skąd	skąd	ADV	adv	PronType=Int	3	advmod:arg	3:advmod:arg	_
2	możemy	móc	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	wiedzieć	wiedzieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
5	że	że	SCONJ	comp	_	7	mark	7:mark	_
6	nie	nie	PART	part	Polarity=Neg	7	advmod:neg	7:advmod:neg	_
7	kłamiesz	kłamać	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	3:ccomp	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
9	sprawie	sprawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	fixed	8:fixed	_
10	statku	statek	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	obl	7:obl	SpaceAfter=No
11	?	?	PUNCT	interp	PunctType=Qest	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 advmod:arg	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	9	punct	9:punct	_
2	konfiskata	konfiskata	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	9:nsubj	_
3	określonego	określić	ADJ	ppas:sg:gen:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl	4:acl	_
4	składnika	składnik	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod:arg	2:nmod:arg	_
5	mienia	mienie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	4	nmod:arg	4:nmod:arg	_
6	objętego	objąć	ADJ	ppas:sg:gen:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl	4:acl	_
7	nakazem	nakaz	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	iobj	6:iobj	_
8	konfiskaty	konfiskata	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	nmod:arg	7:nmod:arg	_
9	wymaga	wymagać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	podjęcia	podjąć	NOUN	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	9	obj	9:obj	_
11	działań	działanie	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	10	obj	10:obj	_
12	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Loc
13	więcej	dużo	ADV	adv:com	Degree=Cmp	10	advmod:arg	10:advmod:arg	_
14	niż	niż	SCONJ	comp	ConjType=Comp	16	mark	16:mark	_
15	jednym	jeden	ADJ	adj:sg:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	16	amod	16:amod	_
16	państwie	państwo	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	13	obl:cmpr	13:obl:cmpr	_
17	wykonującym	wykonywać	ADJ	pact:sg:loc:n:imperf:aff	Aspect=Imp|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	16	acl	16:acl	SpaceAfter=No
18	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_

~~~


