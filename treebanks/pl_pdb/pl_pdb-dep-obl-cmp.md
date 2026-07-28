---
layout: base
title:  'Statistics of obl:cmp in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="pl_pdb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pl_pdb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pl_pdb-dep-obl-orphan.html">obl:orphan</a></tt>.

58 nodes (0%) are attached to their parents as `obl:cmp`.

45 instances of `obl:cmp` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.6551724137931.

The following 12 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (18; 31% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (17; 29% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (6; 10% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:cmp	color:blue
1	Mam	mieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	chcieć	chcieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
3	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	cop	4:cop	_
4	lepsza	dobry	ADJ	adj:sg:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	2	xcomp	2:xcomp	_
5	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	innych	inny	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	4	obl:cmp	4:obl:cmp	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 obl:cmp	color:blue
1	Złotówka	złotówka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	straciła	stracić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	też	też	PART	part	_	2	advmod:emph	2:advmod:emph	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	wartości	wartość	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	2	obl:arg	2:obl:arg	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|ExtPos=ADP|Variant=Short	9	case	9:case	Case=Loc
7	stosunku	stosunek	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	fixed	6:fixed	_
8	do	do	ADP	prep:gen	AdpType=Prep	6	fixed	6:fixed	Case=Gen
9	euro	euro	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	2	obl:cmp	2:obl:cmp	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl:cmp	color:blue
1	Wcale	wcale	ADV	adv	_	7	advmod	7:advmod	_
2	nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	_
3	jestem	być	AUX	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
4	aż	aż	PART	part	_	5	advmod:emph	5:advmod:emph	_
5	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	6	advmod	6:advmod	_
6	bardzo	bardzo	ADV	adv:pos	Degree=Pos	7	advmod	7:advmod	_
7	starsza	stary	ADJ	adj:sg:nom:f:com	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	0	root	0:root	_
8	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Gen
9	ciebie	ty	PRON	ppron12:sg:gen:f:sec:akc	Case=Gen|Gender=Fem|Number=Sing|Person=2|PronType=Prs|Variant=Long	7	obl:cmp	7:obl:cmp	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


