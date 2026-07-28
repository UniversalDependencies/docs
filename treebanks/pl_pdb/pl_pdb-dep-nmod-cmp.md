---
layout: base
title:  'Statistics of nmod:cmp in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nmod:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nmod.html">nmod</a></tt>.
There are also 4 other language-specific subtypes of `nmod`: <tt><a href="pl_pdb-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pdb-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pdb-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="pl_pdb-dep-nmod-pred.html">nmod:pred</a></tt>.

29 nodes (0%) are attached to their parents as `nmod:cmp`.

27 instances of `nmod:cmp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13793103448276.

The following 7 pairs of parts of speech are connected with `nmod:cmp`: <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (12; 41% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (8; 28% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (5; 17% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:cmp	color:blue
1	Mechanizm	mechanizm	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	okazał	okazać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	_
4	bardziej	bardzo	ADV	adv:com	Degree=Cmp	5	advmod	5:advmod	_
5	trwały	trwały	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	xcomp:pred	2:xcomp:pred	_
6	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen
7	człowieka	człowiek	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	5	nmod:cmp	5:nmod:cmp	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 nmod:cmp	color:blue
1	Wozisz	wozić	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	_
3	tutaj	tutaj	ADV	adv	PronType=Dem	1	advmod	1:advmod	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_
7	jakby	jakby	SCONJ	comp	ConjType=Comp	9	mark	9:mark	_
8	ś	być	AUX	aglt:sg:sec:imperf:nwok	Aspect=Imp|Number=Sing|Person=2|Variant=Short	9	aux:clitic	9:aux:clitic	_
9	uważała	uważać	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl:cmp	1:advcl:cmp	_
10	się	się	PRON	part	PronType=Prs|Reflex=Yes	9	expl:pv	9:expl:pv	_
11	za	za	ADP	prep:acc	AdpType=Prep	12	case	12:case	Case=Acc
12	lepszą	dobry	ADJ	adj:sg:acc:f:com	Case=Acc|Degree=Cmp|Gender=Fem|Number=Sing	9	obl:arg	9:obl:arg	_
13	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	14	case	14:case	Case=Gen
14	nas	my	PRON	ppron12:pl:gen:m1:pri	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	12	nmod:cmp	12:nmod:cmp	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nmod:cmp	color:blue
1	Sytuacja	sytuacja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	wierzycieli	wierzyciel	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	1	nmod	1:nmod	_
3	publicznych	publiczny	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|ExtPos=ADP|Variant=Short	7	case	7:case	Case=Loc
5	porównaniu	porównanie	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	4	fixed	4:fixed	_
6	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	4	fixed	4:fixed	Case=Ins
7	sytuacją	sytuacja	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	1	nmod:cmp	1:nmod:cmp	_
8	wierzycieli	wierzyciel	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	7	nmod	7:nmod	_
9	prywatnych	prywatny	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	8	amod	8:amod	_

~~~


