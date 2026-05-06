---
layout: base
title:  'Statistics of advmod:arg in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `advmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="pl_pdb-dep-advmod-cmp.html">advmod:cmp</a></tt>, <tt><a href="pl_pdb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_pdb-dep-advmod-neg.html">advmod:neg</a></tt>.

51 nodes (0%) are attached to their parents as `advmod:arg`.

29 instances of `advmod:arg` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94117647058824.

The following 1 pairs of parts of speech are connected with `advmod:arg`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (51; 100% instances).


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
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|ExtPos=ADP|Variant=Short	10	case	10:case	Case=Loc
9	sprawie	sprawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	fixed	8:fixed	_
10	statku	statek	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	obl	7:obl	SpaceAfter=No
11	?	?	PUNCT	interp	PunctType=Qest	2	punct	2:punct	_

~~~


