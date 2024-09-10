---
layout: base
title:  'Statistics of nmod:poss in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pdb-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pdb-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pdb-dep-nmod-pred.html">nmod:pred</a></tt>.

568 nodes (0%) are attached to their parents as `nmod:poss`.

393 instances of `nmod:poss` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33978873239437.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (260; 46% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (166; 29% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (131; 23% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:poss	color:blue
1	Do	do	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	końca	koniec	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	5:obl	_
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	_
4	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
5	wyjaśnione	wyjaśnić	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	przyczyny	przyczyna	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	5	nsubj:pass	5:nsubj:pass	_
7	śmierci	śmierć	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod:arg	6:nmod:arg	_
8	14-latka	14-latek	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	7	nmod:poss	7:nmod:poss	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod:poss	color:blue
1	Kmetko	Kmetko	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	_
3	mógł	móc	VERB	praet:sg:m1:imperf:nagl	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	by	by	AUX	part	_	3	aux:cnd	3:aux:cnd	_
5	udowodnić	udowodnić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
7	że	że	SCONJ	comp	_	9	mark	9:mark	_
8	ciężarówki	ciężarówka	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	9:nsubj	_
9	należą	należeć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp:obj	5:ccomp:obj	_
10	do	do	ADP	prep:gen	AdpType=Prep	12	case	12:case	Case=Gen
11	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	12	nmod:poss	12:nmod:poss	_
12	firm	firma	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	9	obl:arg	9:obl:arg	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:poss	color:blue
1	Bo	bo	SCONJ	comp	_	8	mark	8:mark	_
2	na	na	ADP	prep:acc	AdpType=Prep	3	case	3:case	Case=Acc
3	dobroduszność	dobroduszność	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	10	obl:arg	10:obl:arg	_
4	szpitala	szpital	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod:poss	3:nmod:poss	_
5	matka	matka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
6	Kamila	Kamil	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	5	nmod:poss	5:nmod:poss	_
7	nie	nie	PART	part	Polarity=Neg	8	advmod:neg	8:advmod:neg	_
8	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	co	co	PART	part	_	8	fixed	8:fixed	_
10	liczyć	liczyć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	8	xcomp	8:xcomp	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


