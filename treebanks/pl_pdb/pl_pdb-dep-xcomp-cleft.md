---
layout: base
title:  'Statistics of xcomp:cleft in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `xcomp:cleft`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pl_pdb-dep-xcomp-pred.html">xcomp:pred</a></tt>, <tt><a href="pl_pdb-dep-xcomp-subj.html">xcomp:subj</a></tt>.

42 nodes (0%) are attached to their parents as `xcomp:cleft`.

42 instances of `xcomp:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.92857142857143.

The following 2 pairs of parts of speech are connected with `xcomp:cleft`: <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (40; 95% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp:cleft	color:blue
1	Podążyli	podążyć	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	za	za	ADP	prep:inst	AdpType=Prep	3	case	3:case	Case=Ins
3	nami	my	PRON	ppron12:pl:inst:m1:pri	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur|Person=1|PronType=Prs	1	obl	1:obl	_
4	tylko	tylko	PART	part	_	6	advmod:emph	6:advmod:emph	_
5	po	po	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
6	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	1	obl	1:obl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	by	by	SCONJ	comp	_	9	mark	9:mark	_
9	uciec	uciec	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	6	xcomp:cleft	6:xcomp:cleft	_
10	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Gen
11	reżimu	reżim	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	obl:arg	9:obl:arg	_
12	Cao	Cao	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	11	nmod	11:nmod	_
13	Cao	Cao	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	12	flat	12:flat	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 22 xcomp:cleft	color:blue
1	Człowiek	człowiek	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj|14:nsubj	_
2	bowiem	bowiem	SCONJ	comp	_	6	mark	6:mark|14:mark	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
4	nie	nie	CCONJ	conj	_	6	cc:preconj	6:cc:preconj	_
5	tylko	tylko	CCONJ	conj	_	4	fixed	4:fixed	_
6	twórcą	twórca	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
7	widzenia	widzenie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	6	nmod:arg	6:nmod:arg	_
8	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	9	punct	9:punct	SpaceAfter=No
9	poznania	poznanie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	9	punct	9:punct	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
12	ale	ale	CCONJ	conj	_	14	cc	14:cc	_
13	i	i	CCONJ	conj	_	12	fixed	12:fixed	_
14	dąży	dążyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	0:root|6:conj	_
15	do	do	ADP	prep:gen	AdpType=Prep	16	case	16:case	Case=Gen
16	tego	to	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	14	obl	14:obl	SpaceAfter=No
17	,	,	PUNCT	interp	PunctType=Comm	22	punct	22:punct	_
18	aby	aby	SCONJ	comp	_	22	mark	22:mark	_
19	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	22	cop	22:cop	_
20	jego	on	PRON	ppron3:sg:gen:n:ter:akc:npraep	Case=Gen|Gender=Neut|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	22	nmod	22:nmod	_
21	rozumiejącym	rozumieć	ADJ	pact:sg:inst:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	22	acl	22:acl	_
22	uczestnikiem	uczestnik	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	16	xcomp:cleft	16:xcomp:cleft	SpaceAfter=No
23	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


