---
layout: base
title:  'Statistics of obl:orphan in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `obl:orphan`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="pl_pdb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pl_pdb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pl_pdb-dep-obl-cmpr.html">obl:cmpr</a></tt>.

4 nodes (0%) are attached to their parents as `obl:orphan`.

4 instances of `obl:orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `obl:orphan`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (3; 75% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:orphan	color:blue
1	Hej	hej	INTJ	interj	_	5	discourse:intj	5:discourse:intj	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
3	co	co	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	5	nsubj	5:nsubj	_
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	_
5	stało	stać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	5	obl:orphan	5:obl:orphan	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:orphan	color:blue
1	O	o	ADP	prep:loc	AdpType=Prep	2	case	2:case	Case=Loc
2	wpół	wpół	ADV	adv	_	4	advmod	4:advmod	_
3	do	do	ADP	prep:gen	AdpType=Prep	2	obl:orphan	2:obl:orphan	Case=Gen
4	przyłapał	przyłapać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	4	aux:clitic	4:aux:clitic	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
7	na	na	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc
8	tym	to	PRON	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	4	obl:arg	4:obl:arg	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
10	że	że	SCONJ	comp	_	12	mark	12:mark	_
11	nerwowo	nerwowo	ADV	adv:pos	Degree=Pos	12	advmod	12:advmod	_
12	oblizuję	oblizywać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp:cleft	8:ccomp:cleft	_
13	wargi	warga	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	12	obj	12:obj	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


